/* global _, blattbereich2esvTypes */

var testMasks = {
  TEST0: [
    {
      opDelLastSubitem: true,
      label: 'Gläubiger',
      cardinality: 'n',
      inputFields: [],
      dynamicSubitem: {
        label: 'Gläubiger (###1###) ',
        inputFields: [{
            fldtype: 'Text',
            label: 'Gl. lfd. Nr.',
            id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_Nummer',
            dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte.Nummer'
          }, {
            fldtype: 'Text',
            label: 'Firma/Bezeichnung',
            id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_Eigentuemer_Jurist_Bez',
            dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte.Eigentuemer.Jurist.Bez'
          },
        ],
        subitems: [{
            cardinality: 'n',
            opDelLastSubitem: true,
            label: 'Gläubiger Körperschaft des öffentlichen Rechts',
            dynamicSubitem: {
              label: 'Gläubiger Körperschaft des öffentlichen Rechts (###1###)  (###2###) ',
              inputFields: [{
                  fldtype: 'Text',
                  label: 'Bezeichnung',
                  id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_###2###_Eigentuemer_Koerper_Name',
                  dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte[###2###].Eigentuemer.Koerper.Name'
                }, {
                  fldtype: 'Text',
                  label: 'PLZ',
                  id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_###2###_Eigentuemer_Koerper_Sitz_PLZ',
                  dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte[###2###].Eigentuemer.Koerper.Sitz.PLZ'
                },
              ]
            }
          }, {
            cardinality: 'n',
            opDelLastSubitem: true,
            label: 'Gläubiger natürliche Person',
            dynamicSubitem: {
              label: 'Gläubiger natürliche Person (###1###)  (###2###) ',
              inputFields: [{
                  fldtype: 'Text',
                  label: 'Titel',
                  id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_###2###_Eigentuemer_Natuer_Person_Titel',
                  dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte[###2###].Eigentuemer.Natuer.Person.Titel',
                  codestable: 'Titel.Dropdown+'
                }, {
                  fldtype: 'Text',
                  label: 'Namensvorsatz',
                  id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_###2###_Eigentuemer_Natuer_Person_NameVorsatz',
                  dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte[###2###].Eigentuemer.Natuer.Person.NameVorsatz'
                },
              ]
            }
          }, 
        ]
      }
    }
  ],
  TEST1: [
    {
      label: 'TEST Parameter',
      isCollapsed: true,
      inputFields: [],
      subitems: [
        {
          label: 'Ergänzungen',
          inputFields: []
        },
        {
          label: 'Gläubiger',
          cardinality: 'n',
          opDelLastSubitem: true,
          dynamicSubitem: {
            label: 'Datensatz (###1###)',
            dynamicSubitem: {
              label: 'Datensatz(###1###,###2###)',
            },
          }
        }
      ],
    }
  ],
  TEST2: [
    {
      label: 'TEST Parameter 1',
      inputFields: [
        {fldtype: 'Text', label: 'lfd. Nr.   ', dataRapPath: 'BuchGgst.lfdNr  ', id: 'AllgemeineParameterlfd_Nr_Eintragung1', val: 'ein test1', codestable: 'Gemeinschaftsverhaeltnis'},
        {fldtype: 'Text', label: 'lfd. Nr. BV', dataRapPath: 'BuchGgst.lfdNrBV', id: 'AllgemeineParameterlfd_Nr_Eintragung2', val: 'ein test2'},
      ],
    }
  ],
  TEST3: [{
      label: 'Allgemeine Parameter',
      cardinality: '1',
      inputFields: [
        {fldtype: 'Text', label: 'lfd. Nr.     ', dataRapPath: 'BuchGgst.lfdNr                   ', id: 'BuchGgst_lfdNr'},
        {fldtype: 'Text', label: 'lfd. Nr. BV  ', dataRapPath: 'BuchGgst.eingtRecht[0].belastGgst', id: 'BuchGgst_eingtRecht0_belastGgst'},
        {fldtype: 'Text', label: 'lfd. Nr. BV  ', dataRapPath: 'BuchGgst.eingtRecht[1].belastGgst', id: 'BuchGgst_eingtRecht1_belastGgst'},
        {fldtype: 'Text', label: 'lfd. Nr. BV  ', dataRapPath: 'BuchGgst.eingtRecht[2].belastGgst', id: 'BuchGgst_eingtRecht2_belastGgst'},
        {fldtype: 'Text', label: 'Betrag i. Z. ', dataRapPath: 'BuchGgst.lfdNr                   ', id: 'AllgemeineParameterlfdNrEintragung2'},
      ],
      subitems: [
        {
          label: 'Ergänzungen Spalte 3',
          cardinality: 'n',
          dynamicSubitem: {
            label: 'Ergänzungen Spalte 3 (###1###)',
            inputFields: [
              {fldtype: 'Text', label: 'Absetzungsbetrag', dataRapPath: 'SpalteBetrag.Absetz.neg.Wert[###1###]    ', id: 'AllgemeineParameterErgänzungenSpalte3Absetzungsbetrag###1###'},
              {fldtype: 'Text', label: 'Währung         ', dataRapPath: 'SpalteBetrag.Absetz.neg.Waehrung[###1###]', id: 'AllgemeineParameterErgänzungenSpalte3AbsetzungsbetragWährung###1###', codesTable: 'Waehrungscode'},
              {fldtype: 'Text', label: 'Restbetrag      ', dataRapPath: 'SpalteBetrag.Absetz.neu.Wert[###1###]    ', id: 'AllgemeineParameterErgänzungenSpalte3Restbetrag###1###'},
                //...
            ]
          }
        },
        {
          label: 'Anteilsbelastung',
          cardinality: 'n',
          dynamicSubitem: {
            label: 'Ergänzungen Spalte 3 ###1###',
            inputFields: [
              {fldtype: 'Number', label: 'Ant. Zähler', dataRapPath: 'Recht.Anteilsbelastung[###1###].BezugInAbt1.Anteil.InZiffern.Bruch.Zaehler ', id: 'AllgemeineParameterAnteilsbelastungAnteilZähler###1###'},
              {fldtype: 'Number', label: 'Ant. Nenner', dataRapPath: 'Recht.Anteilsbelastung[ ###1###].BezugInAbt1.Anteil.InZiffern.Bruch.Nenner  ', id: 'AllgemeineParameterAnteilsbelastungAnteilNenner###1###'},
              {fldtype: 'Text  ', label: 'Ant. Sonst.', dataRapPath: 'Recht.Anteilsbelastung[ ###1###].BezugInAbt1.Anteil.InZiffern.Dezimal       ', id: 'AllgemeineParameterAnteilsbelastungAnteilsonstiges###1###'},
                //...
            ]
          }
        }
      ]
    }, {
      label: 'Gläubiger',
      dynamicSubitem: {
        label: 'Gläubiger (###1###)',
        cardinality: 'n',
        inputFields: [
          {fldtype: 'Text', label: 'Gl. lfd. Nr.      ', dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte.Nummer                             ', id: 'GläubigerlfdNr###1###'},
          {fldtype: 'Text', label: 'Firma/Bezeichnung ', dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte.Eigentuemer.Jurist.Bez             ', id: 'GläubigerjurPersBezeichung###1###'},
          {fldtype: 'Text', label: 'Sitz Ort          ', dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte.Eigentuemer.Jurist.1.Sitz.Ort      ', id: 'GläubigerjurPersSitzOrt1###1###'},
          {fldtype: 'Text', label: 'Sitz Ort          ', dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte.Eigentuemer.Jurist.2.Sitz.Ort      ', id: 'GläubigerjurPersSitzOrt2###1###'},
          {fldtype: 'Text', label: 'Sitz Ort          ', dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte.Eigentuemer.Jurist.3.Sitz.Ort      ', id: 'GläubigerjurPersSitzOrt3###1###'},
          {fldtype: 'Text', label: 'Reg.Gericht       ', dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte.Eigentuemer.Jurist.Register.Gericht', id: 'GläubigerjurPersRegistergericht###1###'},
            // ...
        ],
        subitems: [
          {
            label: 'Gläubiger Körperschaft des öffentlichen Rechts',
            cardinality: 'n',
            opDelLastSubitem: true,
            dynamicSubitem: {
              label: 'Datensatz(###2###)',
              inputFields: [
                {fldtype: 'Text', label: 'Bezeichnung     ', dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte[###2###].Eigentuemer.Koerper.Name    ', id: 'GläubigerGläubigerKörperschaftdesöffentlichenRechtsBezeichnung###1######2###'},
                {fldtype: 'Text', label: 'PLZ             ', dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte[###2###].Eigentuemer.Koerper.Sitz.PLZ', id: 'GläubigerGläubigerKörperschaftdesöffentlichenRechtssitzPLZ###1######2###'},
                {fldtype: 'Text', label: 'Ort             ', dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte[###2###].Eigentuemer.Koerper.Sitz.Ort', id: 'GläubigerGläubigerKörperschaftdesöffentlichenRechtsSitzOrt###1######2###'},
                {fldtype: 'Text', label: 'Zusatz § 15 GBV ', dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte[###2###].Eigentuemer.Koerper.VermTeil', id: 'GläubigerGläubigerKörperschaftdesöffentlichenRechtsZusatz§15IIGBVVermögensteil###1######2###'},
                  //...
              ]
            },
          },
          {
            label: 'Besonderer Gläubiger',
            cardinality: '1',
            opDelLastSubitem: true,
            dynamicSubitem: {
              label: 'Datensatz(###2###)',
              inputFields: [
                {fldtype: 'Text', label: 'besonderer Gläubiger             ', dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte[###2###].Eigentuemer.Koerper.Name    ', id: 'GläubigerGläubigerKörperschaftdesöffentlichenRechtsBezeichnung###1######2###'},
                {fldtype: 'Text', label: 'Grundbuchvertreter               ', dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte[###2###].Eigentuemer.Koerper.Sitz.PLZ', id: 'GläubigerGläubigerKörperschaftdesöffentlichenRechtssitzPLZ###1######2###'},
                {fldtype: 'Text', label: 'Grundbuchvertreter Titel         ', dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte[###2###].Eigentuemer.Koerper.Sitz.Ort', id: 'GläubigerGläubigerKörperschaftdesöffentlichenRechtsSitzOrt###1######2###'},
                {fldtype: 'Text', label: 'Grundbuchvertreter Namensvorsatz ', dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte[###2###].Eigentuemer.Koerper.VermTeil', id: 'GläubigerGläubigerKörperschaftdesöffentlichenRechtsZusatz§15IIGBVVermögensteil###1######2###'},
                {fldtype: 'Text', label: 'Grundbuchvertreter Vorname       ', dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte[###2###].Eigentuemer.Koerper.VermTeil', id: 'GläubigerGläubigerKörperschaftdesöffentlichenRechtsZusatz§15IIGBVVermögensteil###1######2###'},
                {fldtype: 'Text', label: 'Grundbuchvertreter Nachname      ', dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte[###2###].Eigentuemer.Koerper.VermTeil', id: 'GläubigerGläubigerKörperschaftdesöffentlichenRechtsZusatz§15IIGBVVermögensteil###1######2###'},
                  //...
              ]
            }
          },
        ]
      }
    }
  ]
};


var testFragmentTypesForEsvTypes = {
  'TEST0': ['TEST0'],
  'TEST1': ['TEST1'],
  'TEST2': ['TEST2'],
  'TEST3': ['TEST3'],
};


var esvMasks = _.extend({}, esvMasks, testMasks); // for TEST
var fragmentTypesForEsvTypes = _.extend(testFragmentTypesForEsvTypes, fragmentTypesForEsvTypes); // for TEST {
blattbereich2esvTypes.A3_Vorderseite = [].concat(['TEST0', 'TEST1', 'TEST2', 'TEST3'], blattbereich2esvTypes.A3_Vorderseite);
