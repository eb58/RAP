var CONSTS = {
  PDFWIDTH: 3508,
  SCALEFACTOR: 1 / 3,
};

_.extend(CONSTS, {
  IMGWIDTH: CONSTS.PDFWIDTH * CONSTS.SCALEFACTOR,
  IMGHEIGHT: CONSTS.PDFWIDTH * CONSTS.SCALEFACTOR / 1.41,
  CORNERSIZE: {
    PARAM: 6,
    AREA: 6,
  },
  COLOR: {
    FRAGMENT: {
      BACKGROUND: 'rgba(249, 249, 23, 0.1)', //'#F9F917',
      STROKE: 'black',
      CORNER: 'red',
      BORDER: 'red',
      BEARBEITUNGAUSSCHLUSS: 'rgba(74, 71, 75, 0.1)', //'#4A414B',
      FREIGEGEBEN: 'rgba(84, 249, 83, 0.1)',//'#54F953',
      GROUP: 'rgba(200,100,100,0.3)'
    },
    PARAM: {
      BACKGROUND: 'rgba(0, 200, 1, 0.3)', //'#00DB01',
      STROKE: '#00DB01',
      STROKEHIGHLIGHTED: 'rgba(255, 100, 1, 0.9)',
      CORNER: 'green',
      BORDER: 'green',
      HIGHLIGHTED: 'rgba(255, 100, 1, 0.3)',
      NOTHIGHLIGHTED: 'white',
    },
    GROUP_FRAME: '#0005B9',
    HIGHLIGHTS: '#FFF02B',
    HAS_RED_MARK: '#FF0002',
  },
  FRAGMENTSTATES: {
    VORSCHLAG: 'Vorschlag',
    FREIGEGEBEN: 'Freigegeben',
    INBEARBEITUNG: 'InBearbeitung',
  },
});

var valuesBlattbereichAuswahl = [
  'Aufschrift',
  'BV_Vorderseite',
  'BV_Rückseite',
  'BV_Zuschreibungen',
  'BV_Abschreibungen',
  'A1_Vorderseite',
  'A1_Eigentümer',
  'A1_Grundlage',
  'A2_Vorderseite',
  'A2_Rückseite',
  'A2_Änderungen',
  'A2_Löschungen',
  'A3_Vorderseite',
  'A3_Rückseite',
  'A3_Änderungen',
  'A3_Löschungen',
  'LetzteSeite'
];

var blattbereich2esvTypes = {
  Aufschrift: [],
  BV_Vorderseite: [],
  BV_Rückseite: [],
  BV_Zuschreibungen: [],
  BV_Abschreibungen: [],
  A1_Vorderseite: [],
  A1_Eigentümer: [],
  A1_Grundlage: [],
  A2_Vorderseite: [],
  A2_Rückseite: [],
  A2_Änderungen: [],
  A2_Löschungen: [],
  A3_Vorderseite: ['A3E_Recht', 'A3E_Vormerkung', 'A3E_Widerspruch', 'A3E_Geloeschtvermerk'],
  A3_Rückseite: [],
  A3_Änderungen: [],
  A3_Löschungen: [],
  LetzteSeite: [],
};



var valuesBearbeitungssausschluss = [
  "",                                   
  "Veraenderungsspalte_Vollstaendig_Geroetet",
  "Gegenstandslos",
  "Ausschluss_von_Referenz",
  "Seitenheader",
  "Tabellenheader", 
];

var menuItemsBlattbereichAuswahl = valuesBlattbereichAuswahl.reduce(function (acc, o) {
  return acc['Blattbereichauswahl:' + o] = {name: o}, acc;
}, {});

$.datepicker.regional['de'] = {
  clearText: 'l\u00f6schen',
  clearStatus: 'aktuelles Datum l\u00f6schen',
  closeText: 'schlie\u00dfen',
  closeStatus: 'ohne \u00c4nderungen schlie\u00dfen',
  prevText: 'Zur\u00fcck',
  prevStatus: 'letzten Monat zeigen',
  nextText: 'Vor',
  nextStatus: 'n\u00e4chsten Monat zeigen',
  currentText: 'heute',
  currentStatus: '',
  monthNames: ['Januar', 'Februar', 'M\u00e4rz', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
  monthNamesShort: ['Jan', 'Feb', 'M\u00e4r', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
  monthStatus: 'anderen Monat anzeigen',
  yearStatus: 'anderes Jahr anzeigen',
  weekHeader: 'Wo',
  weekStatus: 'Woche des Monats',
  dayNames: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
  dayNamesShort: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
  dayNamesMin: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
  dayStatus: 'Setze DD als ersten Wochentag',
  dateStatus: 'W\u00e4hle D, M d',
  dateFormat: 'dd.mm.yy',
  firstDay: 1,
  initStatus: 'W\u00e4hle ein Datum',
  isRTL: false
};
$.datepicker.setDefaults($.datepicker.regional['de']);
