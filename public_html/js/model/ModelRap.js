/* global esvMasks, utils, CONSTS, _, geom, filterObject */

//var example = {
//  statusdata : {
//    actPageIndex: 0,
//    actRecordIndex: 0,
//  },
//  pages: [
//    {number: 1, extType: 'A3_Vorderseite'},
//    {number: 2, extType: 'A3_Rückseite'},
//  ],
//  fragments: [{
//      id: '123',
//      state: 'vorgegeben',
//      reasonBearbeitungsausschluss: '',
//      
//      parameters: [{// param1
//          id: "param7263-14993469611493",
//          hasRedMark: false,
//          name: 'aaa.bbb.jjj.Betrag.wert',
//          coordinates: {pageNumber: 1, positions: [{x: 932, y: 552}, {x: 1100, y: 597}]}, // coordintaes from PDF
//          text: 'testtext'
//        },
//      ],
//      coordinates: [//  areas
//        {id: area1, pageNumber: 0, positions: [{x: 0, y: 550}, {x: 1100, y: 600 }]}, // coordintaes from PDF
//        {id: area2, pageNumber: 1, positions: [{x: 0, y: 610}, {x: 300, y: 650 }]},   // coordintaes from PDF
//      ],
//      fragtype: 'A3E_Recht',
//      esvData: null,
//    }],
//  records: [{
//      fragmentLinks: [
//        {fragmentId: '123', orderedIndex: 1},
//      ],
//      state: 1,
//      esvtype: 'A3E_Recht',
//    }
//  ],
//};
var ModelRap = function (pdfMgr, json) {
  'use strict';
  pdfMgr = pdfMgr || {};
  json = json || {};


  function substNull(items) {
    items && items.forEach(function (item, idx) {
      if (item === null) {
        items[idx] = undefined;
      } else {
        substNull(item.subitems);
      }
    });
  }


  if (_.isString(json)) {
    json = JSON.parse(json);
    json.fragments.forEach(function (fragment) {
      substNull(fragment.esvData); // null values are overwriting values in $.extend. 'undefined' don't!
      fragment.esvData = $.extend(true, [], esvMasks[fragment.esvtype], fragment.esvData);
    })
  }

  var self = this;
  self.isDirty = false;

  self.metadata = {
    versionnumber: 1.0,
    versiondate: '2017-07-07',
  };

  self.statusdata = {
    actPageIndex: 0,
    actRecordIndex: 0,
    subactRecordIndex: 0,
  };

  self.pages = [];
  self.fragments = [];
  self.records = [];
  /////////////////////////////////////////////////////////////////////////////////////////////////////

  var pageFcts = {
    createPage: function (number, extType) {
      return {number: number, extType: extType};
    },
    addPage: function (p) {
      self.pages.push(p);
    },
    getPage: function (n) {
      return self.pages[n];
    },
    getPages: function () {
      return self.pages;
    },
    setPageType: function (page, extType) {
      page.extType = extType;
    },
    getPageType: function (page) {
      return page.extType;
    },
    initPages: function (n) {
      _.range(n).forEach(function (n) {
        pageFcts.addPage(pageFcts.createPage(n, ''));
      });
    },
    getFirstPageWithPageType: function getFirstPageWithPageType(pageType) {
      return _.findWhere(self.pages, {extType: pageType});
    },
  };
  /////////////////////////////////////////////////////////////////////////////////////////////////////

  var areaFcts = {
    createArea: function createArea(pageNumber, topLeft, bottomRight) {
      self.isDirty = true;
      return {
        id: utils.genId('area'),
        pageNumber: pageNumber,
        positions: [topLeft, bottomRight],
      }
    },
    setAreaPosition: function (area, tl, br) {
      if (area) {
        self.isDirty = true;
        area.positions[0] = tl;
        area.positions[1] = br;
        area.positions[1] = br;
      }
    },
    sortAreas: function sortAreas(frag) {
      frag.coordinates.sort(function (a1, a2) {
        if (a1.pageNumber !== a2.pageNumber)
          return a1.pageNumber - a2.pageNumber;
        if (a1.positions[0].y !== a2.positions[0].y)
          return a1.positions[0].y - a2.positions[0].y;
        return a1.positions[0].x - a2.positions[0].x;
      })
    },
  }
/////////////////////////////////////////////////////////////////////////////////////////////////////

  var parameterFcts = {
    createParameter: function createParameter(pageNumber, topLeft, bottomRight) {
      self.isDirty = true;
      return {
        id: utils.genId('param'),
        hasRedMark: false,
        isNCI: false,
        isSuggestion: false,
        text: '',
        coordinates: {
          pageNumber: pageNumber,
          positions: [topLeft, bottomRight]
        },
      }
    },
    setParameterPosition: function (param, tl, br) {
      if (param) {
        self.isDirty = true;
        param.coordinates.positions[0] = tl;
        param.coordinates.positions[1] = br;
      }
    },
  }
/////////////////////////////////////////////////////////////////////////////////////////////////////

  var fragmentFcts = {
    genId: function () {
      var id = Math.floor(Math.random() * 10000);
      return _.findWhere(self.fragments, {id: id}) ? fragmentFcts.genId() : id;
    },
    createFragment: function createFragment(area, esvtype) {
      self.isDirty = true;
      var frag = {
        id: fragmentFcts.genId(),
        isNCI: true,
        parameters: [],
        state: CONSTS.FRAGMENTSTATES.INBEARBEITUNG,
        coordinates: [area],
        reasonBearbeitungsausschluss: '',
        esvtype: esvtype,
        esvData: esvtype ? utils.clone(esvMasks[esvtype]) : null,
      }
      return frag;
    },
    setFragmentType: function setFragmentType(frag, type) {
      frag.esvtype = type;
      frag.esvData = type ? utils.clone(esvMasks[type]) : null;
    },
    addFragment: function addFragment(frag) {
      return self.fragments.push(frag), frag;
    },
    getFragmentById: function getFragmentById(id) {
      return _.findWhere(self.fragments, {id: id});
    },
    getFragments: function getFragments() {
      return self.fragments
    },
    delFragmentById: function delFragmentById(fragid) {
      self.isDirty = true;
      self.delFragmentFromGroupbyId(fragid);
      self.fragments = self.fragments.filter(function (frag) {
        return frag.id !== fragid;
      });
      self.delFragmentLinkById(fragid);
    },
    delFragmentFromGroupbyId: function (fragid) {
      var areaid = self.findFragmentById(fragid).coordinates[0].id;
      for (var fragIndex = self.fragments.length - 1; fragIndex >= 0; fragIndex--)
        for (var coordIndex = self.fragments[fragIndex].coordinates.length - 1; coordIndex >= 0; coordIndex--)
        {
          if (self.fragments[fragIndex].coordinates[coordIndex].id === areaid) {
            self.isDirty = true;
            self.fragments[fragIndex].coordinates.splice(coordIndex, 1);
          }
        }
    },
    joinFragments: function joinFragments(ids) {
      self.isDirty = true;
      var f1 = self.getFragmentById(ids[0]);
      var f2 = self.getFragmentById(ids[1]);
      f1.coordinates = f1.coordinates.concat(f2.coordinates);
      self.delFragmentLinkById(ids[1]);
      self.sortAreas(f1);
      self.delFragmentAfterGroup(ids[1]);
      return f1;
    },
    delFragmentAfterGroup: function (fragid) {
      self.fragments = self.fragments.filter(function (frag) {
        return frag.id !== fragid;
      });
    },
    addParameter: function addParameter(frag, area, parameter) {
      var pa = area.positions;
      var pp = parameter.coordinates.positions;
      pp[0] = geom.pointAdd(pp[0], pa[0]);
      pp[1] = geom.pointAdd(pp[1], pa[0]);
      frag.parameters.push(parameter);
      parameter.areaid = area.id;
      return parameter;
    },
    delParameterById: function delParameterById(paramid) {
      self.isDirty = true;
      var param2del = self.findParameterById(paramid);
      var fragment = self.findFragmentWithIncludingParamByParamId(paramid);
      var numberOfParamsWithSameAssoc = fragment.parameters.reduce(function (acc, param) {
        return param.assocfldid === param2del.assocfldid ? acc + 1 : acc;
      }, 0);
      fragment.parameters = fragment.parameters.filter(function (parameter) {
        if ((parameter.id === paramid) && (numberOfParamsWithSameAssoc < 2))
          self.delValFromEsv(fragment.esvData, parameter.assocfldid);
        return parameter.id !== paramid;
      });
    },
    delParametersFromFragmentById: function delParametersFromFragmentById(fragid) {
      self.isDirty = true;
      var frag = self.findFragmentById(fragid);
      if (frag) {
        frag.parameters.forEach(function (param) {
          self.delValFromEsv(frag.esvData, param.assocfldid);
        })
        frag.parameters = [];
      }
    },
    addArea: function addArea(frag, area) {
      frag.coordinates.push(area);
      return area;
    },
    isLeadingFragmentOfRecord: function isLeadingFragmentOfRecord(record, frag) {
      return record && record.fragmentLinks[0].fragmentId === frag.id;
    },
    isLeadingFragmentById: function isLeadingFragmentById(fragid) {
      return self.records.reduce(function (acc,record) {
        return acc || record.fragmentLinks[0].fragmentId === fragid;
      }, false);
    },
    releaseAssociation: function releaseAssociation(fragid, assocfldid) {
      var params = self.findParametersInFragmentByAssocFldId(fragid, assocfldid);
      params.forEach(function (param) {
        delete param.assocfldid;
        self.isDirty = true;
      })
    },
  }
/////////////////////////////////////////////////////////////////////////////////////////////////////

  var recordFcts = {
    createRecord: function createRecord(esvtype) { // create new ESV from Fragment
      self.isDirty = true;
      return {
        fragmentLinks: [],
        state: 1, // ???
        esvtype: esvtype,
      };
    },
    addRecord: function addRecord(record) {
      self.isDirty = true;
      return self.records.push(record), record;
    },
    getRecord: function getRecord(n) {
      return n >= 0 && n < self.records.length ? self.records[n] : null;
    },
    getRecords: function getRecords() {
      return self.records;
    },
    getActRecord: function getActRecord() {
      return self.records[self.statusdata.actRecordIndex];
    },
    delRecord: function delRecord(n) {
      self.isDirty = true;
      self.records.splice(n, 1);
    },
    delFragmentLinkById: function delFragmentLinkById(fragid) {
      self.isDirty = true;
      self.delFragmentLinkFromRecordById(self.getActRecord(), fragid);
    },
    delFragmentLinkFromRecordById: function delFragmentLinkFromRecordById(record, fragid) {
      self.isDirty = true;
      var frag = self.findFragmentById(fragid);
      if (frag) {
        delete frag.esvtype
        frag.esvData = null;
      }
      self.records.forEach(function (record) {
        record.fragmentLinks = record.fragmentLinks.filter(function (fragLink) {
          return fragLink.fragmentId !== fragid;
        });
      });
      self.records = self.records.filter(function (record) {
        return record.fragmentLinks.length > 0;
      });
      if (self.statusdata.actRecordIndex >= self.records.length) {
        self.statusdata.actRecordIndex = Math.max(0, self.statusdata.actRecordIndex - 1);
      }
    },
    addFragment2Record: function (record, frag) {
      self.isDirty = true;
      record.fragmentLinks.push({fragmentId: frag.id, orderedIndex: record.fragmentLinks.length + 1});
      self.setFragmentType(frag, record.esvtype);
      ///self.record.sortFragmentsLinks(); //???
      return frag;
    },
    releaseFragments: function releaseFragments(record) {
      self.isDirty = true;
      record.fragmentLinks.forEach(function (fragLink) {
        var frag = self.getFragmentById(fragLink.fragmentId);
        frag.state = CONSTS.FRAGMENTSTATES.FREIGEGEBEN;
      })
    },
    delParametersNotAssociated: function delParametersNotAssociated(record) {
      self.isDirty = true;
      record.fragmentLinks && record.fragmentLinks.forEach(function (link) {
        var frag = self.findFragmentById(link.fragmentId);
        if (frag.parameters) {
          frag.parameters = frag.parameters.filter(function (param) {
            return !!param.assocfldid
          });
        }
      })
    },
    sortFragmentsLinks: function sortFragmentsLinks() { // ????
    },
    sortRecords: function sortRecords() {
      self.records.sort(function (r1, r2) {
        var c1 = self.findFragmentById(r1.fragmentLinks[0].fragmentId).coordinates[0];
        var c2 = self.findFragmentById(r2.fragmentLinks[0].fragmentId).coordinates[0];
        if (c1.pageNumber !== c2.pageNumber) {
          return c1.pageNumber - c2.pageNumber;
        }
        var tl1 = c1.positions[0];
        var tl2 = c2.positions[0];
        return tl1.y !== tl2.y ? tl1.y - tl2.y : tl1.x - tl2.x;
      });
    }
  };

  var esvdataFcts = {
    traverseEsvdata: function traverseEsvdata(esvdata, f) {
      esvdata && esvdata.forEach(function (item) {
        f(item);
        traverseEsvdata(item.subitems, f);
      });
    },
    delValFromEsv: function delValFromEsv(esvdata, fldid) {
      self.isDirty = true;
      self.traverseEsvdata(esvdata, function (item) {
        item.inputFields && item.inputFields.forEach(function (inputfield) {
          inputfield.id === fldid && delete inputfield.val;
        });
      });
    },
    getValFromEsv: function getValFromEsv(esvdata, fldid) {
      var b = false;
      self.traverseEsvdata(esvdata, function (item) {
        item.inputFields && item.inputFields.forEach(function (inputfield) {
          b = b || inputfield.id === fldid;
        });
      });
      return b;
    },
  };

  var savingFcts = {
    getJSON: function getJSON(blacklist) {
      function replacer(key, value) {
        blacklist = blacklist || [];
        blacklist = blacklist.concat(['fc', 'rect', 'parent']);
        return _.contains(blacklist, key) ? undefined : value;
      }
      return JSON.stringify(self, replacer);
    },
  };

  var searchFcts = {
    findAreaById: function findAreaById(areaid) {
      var foundArea = null;
      self.fragments.forEach(function (frag) {
        foundArea = foundArea || _.findWhere(frag.coordinates, {id: areaid});
      })
      return foundArea;
    },
    findAreaInRecordById: function findAreaInRecordById(areaid) {
      var foundArea = null;
      self.records.forEach(function (record) {
        self.findFragmentsForRecord(record).forEach(function (frag) {
          foundArea = foundArea || _.findWhere(frag.coordinates, {id: areaid});
        })
      })
      return foundArea;
    },
    findRecordWithLeadingFragmentById: function findRecordWithLeadingFragmentById(fragid) {
      for (var i = 0; i < self.records.length; i++) {
        var frags = self.findFragmentsForRecord(self.records[i]);
        for (var j = 0; j < frags.length; j++) {
          if (frags[j].id === fragid)
            return self.records[i];
        }
      }
      return null;
    },
    findFragmentById: function findFragmentById(fragid) {
      for (var j = 0; j < self.fragments.length; j++) {
        if (self.fragments[j].id === fragid)
          return self.fragments[j];
      }
      return null;
    },
    findFragmentInActRecordById: function findFragmentInActRecordById(fragid) {
      var actRecord = self.getActRecord();
      for (var i = 0, len = actRecord.fragmentLinks.length; i < len; i++) {
        if (actRecord.fragmentLinks[i].fragmentId === fragid)
          return true;
      }
      return false;
    },
    findAreaInActRecordById: function findAreaInActRecordById(areaid) {
      var actRecord = self.getActRecord();
      for (var i = 0, len = actRecord.fragmentLinks.length; i < len; i++) {
        var fragment = self.findFragmentById(actRecord.fragmentLinks[i].fragmentId);
        for (var j = 0, len2 = fragment.coordinates.length; j < len2; j++) {
          if (fragment.coordinates[j].id === areaid)
            return true;
        }
      }
      return false;
    },
    findFragmentInAnyRecordById: function findFragmentInAnyRecordById(fragid) {
      for (var i = 0; i < self.records.length; i++) {
        var fragmentLinks = self.records[i].fragmentLinks;
        for (var j = 0; j < fragmentLinks.length; j++) {
          if (fragmentLinks[j].fragmentId === fragid)
            return self.getFragmentById(fragid);
        }
      }
      return null;
    },
    findParameterById: function findParameterById(paramid) {
      var foundParam = null;
      self.fragments.forEach(function (frag) {
        foundParam = foundParam || _.findWhere(frag.parameters, {id: paramid});
      })
      return foundParam;
    },
    findParametersByAssocFldId: function findParametersByAssocFldId(assocfldid) {
      var foundParams = [];
      self.fragments.forEach(function (frag) {
        foundParams = foundParams.concat(_.where(frag.parameters, {assocfldid: assocfldid}));
      })
      return foundParams;
    },
    findParametersInFragmentByAssocFldId: function findParametersInFragmentByAssocFldId(fragid, assocfldid) {
      var frag = self.findFragmentById(fragid);
      return _.where(frag.parameters, {assocfldid: assocfldid});
    },
    findParametersNotAssociated: function findParametersNotAssociated(record) {
      var foundParams = [];
      record.fragmentLinks && record.fragmentLinks.forEach(function (link) {
        var frag = self.findFragmentById(link.fragmentId);
        frag.parameters && frag.parameters.forEach(function (param) {
          if (!param.assocfldid)
            foundParams.push(param);
        });
      })
      return foundParams;
    },
    findParametersAssociated: function findParametersAssociated(frag) {
      var foundParams = [];
      frag.parameters && frag.parameters.forEach(function (param) {
        if (param.assocfldid)
          foundParams.push(param);
      });
      return foundParams;
    },
    findFragmentWithIncludingAreaByAreaId: function findFragmentWithIncludingAreaByAreaId(areaid) {
      var foundFrag = null;
      self.fragments.forEach(function (frag) {
        foundFrag = foundFrag || _.findWhere(frag.coordinates, {id: areaid});
      })
      return foundFrag;
    },
    findFragmentWithIncludingParamByParamId: function findFragmentWithIncludingParamByParamId(paramid) {
      for (var i = 0; i < self.fragments.length; i++) {
        var param = _.findWhere(self.fragments[i].parameters, {id: paramid});
        if (param)
          return self.fragments[i];
      }
      return null;
    },
    findFragmentsForRecord: function findFragmentsForRecord(record) {
      return record ? record.fragmentLinks.map(function (link) {
        return self.getFragmentById(link.fragmentId);
      }) : [];
    },
  };

  _.extend(this, pdfMgr, savingFcts, searchFcts, parameterFcts, areaFcts, pageFcts, fragmentFcts, areaFcts, recordFcts, esvdataFcts, json);
  if (this.pages.length === 0) {
    this.initPages(pdfMgr.getNumPages ? pdfMgr.getNumPages() : 0);
  }
};