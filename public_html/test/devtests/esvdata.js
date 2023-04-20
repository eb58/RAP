var esvData = [{
    "label": "Allgemeine Parameter",
    "cardinality": "1",
    "inputFields": [{
        "fldtype": "Text",
        "label": "lfd. Nr.",
        "id": "BuchGgst_lfdNr_1",
        "dataRapPath": "BuchGgst.lfdNr",
        "val": "1"
      }, {
        "fldtype": "Text",
        "label": "lfd. Nr. BV",
        "id": "BuchGgst_eingtRecht_belastGgst_2",
        "dataRapPath": "BuchGgst.eingtRecht.belastGgst",
        "val": "2"
      }, {
        "fldtype": "Text",
        "label": "Betrag i. Z.",
        "id": "SpalteBetrag_Ursp_Wert_3",
        "dataRapPath": "SpalteBetrag.Ursp.Wert"
      }, {
        "fldtype": "Text",
        "label": "Währung i. KF",
        "id": "SpalteBetrag_Ursp_Waehrung_4",
        "dataRapPath": "SpalteBetrag.Ursp.Waehrung"
      }
    ],
    "subitems": [{
        "label": "Ergänzungen Spalte 3",
        "cardinality": "n",
        "id": "itemid-7607907-1494769340688-0"
      }, {
        "label": "Weitere BV-Nummern",
        "cardinality": "n",
        "id": "itemid-6732475-1494769340688-1"
      }, {
        "label": "Anteilsbelastung",
        "cardinality": "n",
        "id": "itemid-6349936-1494769340688-2"
      }, {
        "label": "Teilflächenbelastung ",
        "cardinality": "n",
        "id": "itemid-9516026-1494769340688-3"
      }
    ],
    "id": "itemid-766740-1494769340689-4"
  }, {
    "label": "Recht Abteilung III",
    "cardinality": "1",
    "inputFields": [{
        "fldtype": "FixedList",
        "label": "Rechtsart",
        "id": "Recht_Art_35",
        "dataRapPath": "Recht.Art"
      }, {
        "fldtype": "Text",
        "label": "Betrag i.W.",
        "id": "Recht_Betrag_Wert_InWorten_36",
        "dataRapPath": "Recht.Betrag.Wert.InWorten"
      }, {
        "fldtype": "Date",
        "label": "Unterschr.-Datum",
        "id": "Recht_EintrDatum_40",
        "dataRapPath": "Recht.EintrDatum"
      }
    ],
    "subitems": [{
        "label": "Einschr. Vollstreckbarkeit allg",
        "cardinality": "+",
        "id": "itemid-4116650-1494769340689-5"
      }, {
        "label": "Einschr. Vollstreckbarkeit MEA/BuSt.",
        "cardinality": "n",
        "id": "itemid-5624813-1494769340689-6"
      }, {
        "label": "Recht Abteilung III sonstiges",
        "cardinality": "1",
        "id": "itemid-1271655-1494769340689-7"
      }, {
        "label": "Rentenschuld",
        "cardinality": "1",
        "id": "itemid-3199445-1494769340690-8"
      }
    ],
    "id": "itemid-9837608-1494769340690-9"
  }, {
    "label": "Gläubiger",
    "cardinality": "1-n",
    "id": "itemid-6970715-1494769340690-10"
  }, {
    "label": "Zinsen/Nebenleistung",
    "cardinality": "n",
    "id": "itemid-2338320-1494769340690-11"
  }, {
    "label": "Abtretungsvermerk",
    "cardinality": "+",
    "id": "itemid-9910336-1494769340692-18"
  }
];

function traverseEsvdata(esvdata, f) {
  esvdata && esvdata.forEach(function (item) {
    f(item);
    traverseEsvdata(esvdata.subitems, f);
  });
}

function delValFromEsv(esvdata, id) {
  traverseEsvdata(esvdata, function (item) {
    item.inputFields && item.inputFields.forEach(function (inputfield) {
      inputfield.id === id && delete inputfield.val;
    });
  });
}

function delValFromEsvXX(esvdata, id) {
  esvdata && esvdata.forEach(function (item) {
    item.inputFields && item.inputFields.forEach(function (inputfield) {
      if (inputfield.id === id) {
        delete inputfield.val;
      }
    });
    delValFromEsv(esvdata.subitem, id);
  });
}
