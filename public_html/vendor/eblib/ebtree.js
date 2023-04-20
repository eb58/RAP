/* global _,jQuery */ /* jshint multistr: true */
(function ($) {
  "use strict";
  $.fn.ebtree = function (opts, treeItems) {
    var treeid = this[0].id;
    var self = this;

    var defopts = {
      onclick: function (id) {
        console.log(id);
        setFocus(id);
      }
    };

    var myopts = _.extend({}, defopts, opts);

    var utils = {
      gencount: 0,
      generateId: function () {
        return 'itemid-' + Math.floor(Math.random() * 10000000) + '-' + new Date().getTime() + '-' + this.gencount++;
      },
      getNumberChain: function getNumberChain(item) {
        var chain = [];
        while (item && item.parent) {
          if (item.isdynamic)
            chain.unshift(item.NN);
          item = item.parent;
        }
        return chain;
      },
      initCardinality: function initCardinality(item) {
        if (!_.isNumber(item.cardinality)) {
          item.cardinality = item.cardinality || (item.dynamicSubitem ? 'n' : '0');
          item.cardinality = item.cardinality === '+' ? item.cardinality = '1' : item.cardinality;
          item.cardinality = item.cardinality.includes('n') ? item.cardinality = '100000' : item.cardinality;
          item.cardinality = Number(item.cardinality);
        }
      },
      initLabel: function initLabel(item) {
        if (!item.label)
          return;
        var chain = utils.getNumberChain(item);
        chain.forEach(function (num, idx) {
          item.label = item.label.replace(new RegExp('###' + (idx + 1) + '###'), num);
        });
      },
      initInputFields: function initInputFields(item) {
        if (!item.inputFields)
          return;
        item.inputFields = item.inputFields.map(function (inputField) {
          var res = _.extend({}, inputField);
          var chain = utils.getNumberChain(item);
          chain.forEach(function (num, idx) {
            var rgx = new RegExp('###' + (idx + 1) + '###');
            res.id = res.id.replace(rgx, num);
            res.dataRapPath = res.dataRapPath.replace(rgx, num);
          });
          return res;
        })
      },
      initItem: function initItem(item) {
        item.subitems = item.subitems || [];
        utils.initCardinality(item);
        utils.initLabel(item);
        utils.initInputFields(item);
        return item;
      },
      createSubitem: function createSubitem(item) {
        var newItem = $.extend(true, {}, item.dynamicSubitem);
        newItem.isdynamic = true;
        newItem.parent = item;
        newItem.NN = item.subitems.length + 1;
        return utils.initItem(newItem);
      }
    };

    var utilsTree = {
      _delItem: function _delItem(treeItems, itemId) {
        if (treeItems) {
          var idx = _.findIndex(treeItems, function (o) {
            return o.id === itemId;
          });
          if (idx >= 0) {
            treeItems.splice(idx, 1);
            opts.onDeleteItem && opts.onDeleteItem(itemId);
          } else {
            treeItems.forEach(function (item) {
              utilsTree._delItem(item.subitems, itemId);
            });
          }
        }
      },
      _itemById: function _itemById(treeItems, id) {
        if (!treeItems)
          return null;
        for (var i = 0, len = treeItems.length; i < len; i++) {
          if (treeItems[i]) {
            if (treeItems[i].id === id)
              return treeItems[i];
            var x = utilsTree._itemById(treeItems[i].subitems, id);
            if (x)
              return x;
          }
        }
        return null;
      },
      _traverse: function _traverse(treeItems, f) {
        if (!treeItems)
          return;
        for (var i = 0, len = treeItems.length; i < len; i++) {
          if (treeItems[i]) {
            f(treeItems[i])
            utilsTree._traverse(treeItems[i].subitems, f);
          }
        }
      },
      itemById: function itemById(id) {
        return utilsTree._itemById(treeItems, id);
      },
      traverse: function traverse(f) {
        utilsTree._traverse(treeItems, f);
        return this;
      },
      addSubitem: function addSubitem(id) { // add Subitem to node with id
        var item = utilsTree.itemById(id);
        console.log('addSubitem to node with id', id, ' label', item.label);
        item.subitems = item.subitems || [];

        if (item.subitems.length >= item.cardinality) {
          console.log('max of subitems reached!');
          return;
        }
        item.subitems.push(utils.createSubitem(item));
      },
      delItem: function delItem(itemId) {
        utilsTree._delItem(treeItems, itemId);
      },
      delLastSubitem: function delLastSubitem(itemId) {
        var item = utilsTree.itemById(itemId);
        if (item && item.subitems && item.subitems.length) {
          var lastItem = item.subitems[item.subitems.length - 1];
          utilsTree._delItem(treeItems, lastItem.id);
        }
      },
      setFocus: function setFocus(id) {
        utilsTree.traverse(function (item) {
          if (item.id === id) {
            $('#' + item.id).addClass('focus');
          } else {
            $('#' + item.id).removeClass('focus');
          }
        })
      },
    };

    var renderTree = {
      renderOps: function renderOps(item) {
        var s = '';
        s += item.dynamicSubitem && (!item.subitems || item.subitems.length < item.cardinality) ? '<i class="fa fa-plus"  aria-hidden="true" title="Datensatz hinzuf\u00fcgen"></i>' : '';
        s += item.dynamicSubitem && item.subitems && item.subitems.length ? '<i class="fa fa-minus-square-o" aria-hidden="true" title="L\u00f6sche letzten Kinddatensatz"></i>' : '';
        s += item.opDel ? '<i class="fa fa-trash" aria-hidden="true" title="L\u00f6sche Datensatz"></i>' : '';
        return s;
      },
      renderListItem: function renderListItem(item) {
        item.subitems.forEach(function (subitem) {
          subitem.parent = item;
        })
        var rsubitems = renderTree.renderItems(item.subitems, item.isCollapsed);
        item.id = item.id || utils.generateId()
        return _.template('\
              <li id=<%=id%> >\n\
                  <%=arrow%>\n\
                  <%=ops%>\n\
                  <%=label%>\n\
                  <%=subitems%>\n\
              </li>\n\
            ')({
          id: item.id,
          arrow: item.subitems && item.subitems.length ? '<i class="fa fa-caret-' + (item.isCollapsed ? 'right' : 'down') + '"/>' : '<span>&nbsp;</span>',
          label: '<a>' + (item.label || item.id) + '</a>', // <i class="fa fa-caret-down" aria-hidden="true"></i>
          ops: renderTree.renderOps(item),
          subitems: rsubitems
        });
      },
      renderItems: function renderItems(items, bCollapsed) {
        return items && items.length ? '<ul style="display:' + (bCollapsed ? 'none' : 'block') + '">\n' + items.reduce(function (acc, item) {
          utils.initItem(item);
          item.init && item.init();
          var ritem = renderTree.renderListItem(item);
          return acc + ritem;
        }, '') + '\n</ul>' : '';
      }
    }

    var redraw = function redraw() {
      $('#' + treeid).html('<div class="ebtree">' + renderTree.renderItems(treeItems, false) + '</div>');
    };

    var init = function init() {
      $('#' + treeid + ' .ebtree').remove();
      redraw();
      // init actions
      $('#' + treeid).off().on('click', myopts.onClickItem)
      $('#' + treeid + ' .fa-caret-down, #' + treeid + ' .fa-caret-right').off().on('click', function (ev) {
        var item = utilsTree.itemById(ev.target.parentElement.id);
        item.isCollapsed = !item.isCollapsed;
        if (item.isCollapsed) {
          $('#' + ev.target.parentElement.id + ' ul').hide()
          $('#' + ev.target.parentElement.id + '>i:first').removeClass('fa-caret-down').addClass('fa-caret-right');
        } else {
          $('#' + ev.target.parentElement.id + ' ul').show()
          $('#' + ev.target.parentElement.id + '>i:first').removeClass('fa-caret-right').addClass('fa-caret-down');
        }
        ev.stopPropagation();
      })
      $('#' + treeid + ' i.fa-plus').off().on('click', function (ev) {
        utilsTree.addSubitem(ev.target.parentElement.id)
        ev.stopPropagation();
        init();
      })
      $('#' + treeid + ' i.fa-trash').off().on('click', function (ev) {
        utilsTree.delItem(ev.target.parentElement.id);
        ev.stopPropagation();
        init();
      });
      $('#' + treeid + ' i.fa-minus-square-o').off().on('click', function (ev) {
        utilsTree.delLastSubitem(ev.target.parentElement.id);
        ev.stopPropagation();
        init();
      });
      return self;
    }

    init();

    this.id = treeid;
    this.traverse = utilsTree.traverse;
    this.itemById = utilsTree.itemById;
    this.setFocus = utilsTree.setFocus;
    this.init = init;
    return this;
  };
})(jQuery);