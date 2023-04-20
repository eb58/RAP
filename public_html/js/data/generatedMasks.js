var esvMasks = {
	AbtIIIERecht: [{
			label: 'Allgemeine Parameter',
			cardinality: '1',
			inputFields: [{
					fldtype: 'Text',
					label: 'lfd. Nr.',
					id: 'BuchGgst_lfdNr',
					dataRapPath: 'BuchGgst.lfdNr'
				}, {
					fldtype: 'Text',
					label: 'lfd. Nr. BV',
					id: 'BuchGgst_eingtRecht_belastGgst',
					dataRapPath: 'BuchGgst.eingtRecht.belastGgst'
				}, {
					fldtype: 'Text',
					label: 'Betrag i. Z.',
					id: 'SpalteBetrag_Ursp_Wert',
					dataRapPath: 'SpalteBetrag.Ursp.Wert'
				}, {
					fldtype: 'Text',
					label: 'Währung i. KF',
					id: 'SpalteBetrag_Ursp_Waehrung',
					dataRapPath: 'SpalteBetrag.Ursp.Waehrung',
					codestable: 'Waehrungscode.Auto'
				}
			],
			subitems: [{
					cardinality: 'n',
					opDelLastSubitem: true,
					label: 'Ergänzungen Spalte 3',
					dynamicSubitem: {
						label: 'Ergänzungen Spalte 3 (###1###) ',
						inputFields: [{
								fldtype: 'Text',
								label: 'Absetzungsbetrag',
								id: 'SpalteBetrag_Absetz_###1###_neg_Wert',
								dataRapPath: 'SpalteBetrag.Absetz[###1###].neg.Wert'
							}, {
								fldtype: 'Text',
								label: 'Währung',
								id: 'SpalteBetrag_Absetz_###1###_neg_Waehrung',
								dataRapPath: 'SpalteBetrag.Absetz[###1###].neg.Waehrung',
								codestable: 'Waehrungscode.Auto'
							}, {
								fldtype: 'Text',
								label: 'Restbetrag',
								id: 'SpalteBetrag_Absetz_###1###_neu_Wert',
								dataRapPath: 'SpalteBetrag.Absetz[###1###].neu.Wert'
							}, {
								fldtype: 'Text',
								label: 'Währung',
								id: 'SpalteBetrag_Absetz_###1###_neu_Waehrung',
								dataRapPath: 'SpalteBetrag.Absetz[###1###].neu.Waehrung',
								codestable: 'Waehrungscode.Auto'
							}, {
								fldtype: 'Text',
								label: 'Umstellungsbetrag',
								id: 'SpalteBetrag_Euroumst_Wert_###1###_',
								dataRapPath: 'SpalteBetrag.Euroumst.Wert[###1###]'
							}, {
								fldtype: 'Text',
								label: 'Währung',
								id: 'SpalteBetrag_Euroumst_Waehrung_###1###_',
								dataRapPath: 'SpalteBetrag.Euroumst.Waehrung[###1###]',
								codestable: 'Waehrungscode.Auto'
							}
						]
					}
				}, {
					cardinality: 'n',
					opDelLastSubitem: true,
					label: 'Weitere BV-Nummern',
					dynamicSubitem: {
						label: 'Weitere BV-Nummern (###1###) ',
						inputFields: [{
								fldtype: 'Text',
								label: 'lfd. Nr. BV',
								id: 'BuchGgst_eingtRecht_belastGgst_###1###_',
								dataRapPath: 'BuchGgst.eingtRecht.belastGgst[###1###]'
							}
						]
					}
				}, {
					cardinality: 'n',
					opDelLastSubitem: true,
					label: 'Anteilsbelastung',
					dynamicSubitem: {
						label: 'Anteilsbelastung (###1###) ',
						inputFields: [{
								fldtype: 'Number',
								label: 'Ant. Zähler',
								id: 'Recht_Anteilsbelastung_BezugInAbt1_###1###_Anteil_InZiffern_Bruch_Zaehler',
								dataRapPath: 'Recht.Anteilsbelastung.BezugInAbt1[###1###].Anteil.InZiffern.Bruch.Zaehler'
							}, {
								fldtype: 'Number',
								label: 'Ant. Nenner',
								id: 'Recht_Anteilsbelastung_BezugInAbt1_###1###_Anteil_InZiffern_Bruch_Nenner',
								dataRapPath: 'Recht.Anteilsbelastung.BezugInAbt1[###1###].Anteil.InZiffern.Bruch.Nenner'
							}, {
								fldtype: 'Text',
								label: 'Ant. Sonst.',
								id: 'Recht_Anteilsbelastung_BezugInAbt1_###1###_Anteil_InZiffern_Dezimal',
								dataRapPath: 'Recht.Anteilsbelastung.BezugInAbt1[###1###].Anteil.InZiffern.Dezimal'
							}, {
								fldtype: 'Text',
								label: 'Ant. i. W',
								id: 'Recht_Anteilsbelastung_BezugInAbt1_###1###_Anteil_InWorten',
								dataRapPath: 'Recht.Anteilsbelastung.BezugInAbt1[###1###].Anteil.InWorten'
							}, {
								fldtype: 'Checkbox',
								label: 'ehem. Ant.',
								id: 'Recht_Anteilsbelastung_BezugInAbt1_###1###_ehemAnteil',
								dataRapPath: 'Recht.Anteilsbelastung.BezugInAbt1[###1###].ehemAnteil'
							}, {
								fldtype: 'Text',
								label: 'lfd. Nr. Abt. I',
								id: 'Recht_Anteilsbelastung_BezugInAbt1_###1###_lfdNr',
								dataRapPath: 'Recht.Anteilsbelastung.BezugInAbt1[###1###].lfdNr'
							}, {
								fldtype: 'Text',
								label: 'Titel',
								id: 'Recht_Anteilsbelastung_BezugInAbt1_###1###_Eigentuemer_Natuer_Person_Titel',
								dataRapPath: 'Recht.Anteilsbelastung.BezugInAbt1[###1###].Eigentuemer.Natuer.Person.Titel',
								codestable: 'Titel.Dropdown+'
							}, {
								fldtype: 'Text',
								label: 'Namensvorsatz',
								id: 'Recht_Anteilsbelastung_BezugInAbt1_###1###_Eigentuemer_Natuer_Person_NameVorsatz',
								dataRapPath: 'Recht.Anteilsbelastung.BezugInAbt1[###1###].Eigentuemer.Natuer.Person.NameVorsatz'
							}, {
								fldtype: 'Text',
								label: 'Vorname',
								id: 'Recht_Anteilsbelastung_BezugInAbt1_###1###_Eigentuemer_Natuer_Person_Vorname',
								dataRapPath: 'Recht.Anteilsbelastung.BezugInAbt1[###1###].Eigentuemer.Natuer.Person.Vorname'
							}, {
								fldtype: 'Text',
								label: 'Namenszusatz',
								id: 'Recht_Anteilsbelastung_BezugInAbt1_###1###_Eigentuemer_Natuer_Person_NameZusatz',
								dataRapPath: 'Recht.Anteilsbelastung.BezugInAbt1[###1###].Eigentuemer.Natuer.Person.NameZusatz'
							}, {
								fldtype: 'Text',
								label: 'Nachname',
								id: 'Recht_Anteilsbelastung_BezugInAbt1_###1###_Eigentuemer_Natuer_Person_Nachname',
								dataRapPath: 'Recht.Anteilsbelastung.BezugInAbt1[###1###].Eigentuemer.Natuer.Person.Nachname'
							}, {
								fldtype: 'Text',
								label: 'Geburtsname',
								id: 'Recht_Anteilsbelastung_BezugInAbt1_###1###_Eigentuemer_Natuer_Person_Geburtsname',
								dataRapPath: 'Recht.Anteilsbelastung.BezugInAbt1[###1###].Eigentuemer.Natuer.Person.Geburtsname'
							}, {
								fldtype: 'Text',
								label: 'Firma/Bezeichnung',
								id: 'Recht_Anteilsbelastung_BezugInAbt1_###1###_Eigentuemer_Jurist_Bez',
								dataRapPath: 'Recht.Anteilsbelastung.BezugInAbt1[###1###].Eigentuemer.Jurist.Bez'
							}, {
								fldtype: 'Text',
								label: 'Sitz Ort',
								id: 'Recht_Anteilsbelastung_BezugInAbt1_###1###_Eigentuemer_Jurist_Sitz_Ort',
								dataRapPath: 'Recht.Anteilsbelastung.BezugInAbt1[###1###].Eigentuemer.Jurist.Sitz.Ort'
							}, {
								fldtype: 'Text',
								label: 'KöR Bezeichnung',
								id: 'Recht_Anteilsbelastung_BezugInAbt1_###1###_Eigentuemer_Koerper_Name',
								dataRapPath: 'Recht.Anteilsbelastung.BezugInAbt1[###1###].Eigentuemer.Koerper.Name'
							}, {
								fldtype: 'Text',
								label: 'Zusatz § 15 GBV',
								id: 'Recht_Anteilsbelastung_BezugInAbt1_###1###_Eigentuemer_Koerper_VermTeil',
								dataRapPath: 'Recht.Anteilsbelastung.BezugInAbt1[###1###].Eigentuemer.Koerper.VermTeil'
							}, {
								fldtype: 'Text',
								label: 'KöR Ort',
								id: 'Recht_Anteilsbelastung_BezugInAbt1_###1###_Eigentuemer_Koerper_Sitz_Ort',
								dataRapPath: 'Recht.Anteilsbelastung.BezugInAbt1[###1###].Eigentuemer.Koerper.Sitz.Ort'
							}
						]
					}
				}, {
					cardinality: 'n',
					opDelLastSubitem: true,
					label: 'Teilflächenbelastung ',
					dynamicSubitem: {
						label: 'Teilflächenbelastung  (###1###) ',
						inputFields: [{
								fldtype: 'Number',
								label: 'Teilfl. BV-Nr.',
								id: 'Recht_Teilflaechenbelastung_###1###_Flurstuecke_betroffenesFlurstueck_BVNr',
								dataRapPath: 'Recht.Teilflaechenbelastung[###1###].Flurstuecke.betroffenesFlurstueck.BVNr'
							}, {
								fldtype: 'Checkbox',
								label: 'ehem. Flst.',
								id: 'Recht_Teilflaechenbelastung_###1###_Flurstuecke_ehemalig',
								dataRapPath: 'Recht.Teilflaechenbelastung[###1###].Flurstuecke.ehemalig'
							}, {
								fldtype: 'Text',
								label: 'Gemarkung',
								id: 'Recht_Teilflaechenbelastung_###1###_Flurstuecke_betroffenesFlurstueck_Gemark',
								dataRapPath: 'Recht.Teilflaechenbelastung[###1###].Flurstuecke.betroffenesFlurstueck.Gemark'
							}, {
								fldtype: 'Number',
								label: 'Flur',
								id: 'Recht_Teilflaechenbelastung_###1###_Flurstuecke_betroffenesFlurstueck_Flur',
								dataRapPath: 'Recht.Teilflaechenbelastung[###1###].Flurstuecke.betroffenesFlurstueck.Flur'
							}, {
								fldtype: 'Number',
								label: 'Flst. Zähler',
								id: 'Recht_Teilflaechenbelastung_###1###_Flurstuecke_betroffenesFlurstueck_FlurNr_Zaehler',
								dataRapPath: 'Recht.Teilflaechenbelastung[###1###].Flurstuecke.betroffenesFlurstueck.FlurNr.Zaehler'
							}, {
								fldtype: 'Number',
								label: 'Flst. Nenner',
								id: 'Recht_Teilflaechenbelastung_###1###_Flurstuecke_betroffenesFlurstueck_FlurNr_Nenner',
								dataRapPath: 'Recht.Teilflaechenbelastung[###1###].Flurstuecke.betroffenesFlurstueck.FlurNr.Nenner'
							}
						]
					}
				}
			]
		}, {
			label: 'Recht Abteilung III',
			cardinality: '1',
			inputFields: [{
					fldtype: 'Text',
					label: 'Rechtsart',
					id: 'Recht_Art',
					dataRapPath: 'Recht.Art',
					codestable: 'BelastungstypAbt3.Dropdown'
				}, {
					fldtype: 'Text',
					label: 'Betrag i.W.',
					id: 'Recht_Betrag_Wert_InWorten',
					dataRapPath: 'Recht.Betrag.Wert.InWorten'
				}, {
					fldtype: 'Text',
					label: 'Währung i. LF',
					id: 'Recht_Betrag_Waehrung_InWorten',
					dataRapPath: 'Recht.Betrag.Waehrung.InWorten',
					codestable: 'WaehrungInWorten.Auto'
				}, {
					fldtype: 'Checkbox',
					label: 'o.Brief',
					id: 'Recht_Brieflos',
					dataRapPath: 'Recht.Brieflos'
				}, {
					fldtype: 'Text',
					label: '§800 ZPO',
					id: 'Recht_Vollstreckbarkeit_Vollstreckbar',
					dataRapPath: 'Recht.Vollstreckbarkeit.Vollstreckbar',
					codestable: 'Vollstreckbarkeit.Dropdown+'
				}, {
					fldtype: 'Date',
					label: 'Unterschr.-Datum',
					id: 'Recht_EintrDatum',
					dataRapPath: 'Recht.EintrDatum'
				}
			],
			subitems: [{
					cardinality: '+',
					opDelLastSubitem: true,
					label: 'Einschr. Vollstreckbarkeit allg',
					dynamicSubitem: {
						label: 'Einschr. Vollstreckbarkeit allg (###1###) ',
						inputFields: [{
								fldtype: 'Text',
								label: 'Betrag i.W.',
								id: 'Recht_Vollstreckbarkeit_Teil_Betrag_Wert_InWorten_###1###_',
								dataRapPath: 'Recht.Vollstreckbarkeit.Teil.Betrag.Wert.InWorten[###1###]'
							}, {
								fldtype: 'Text',
								label: 'Währung lang',
								id: 'Recht_Vollstreckbarkeit_Teil_Betrag_Waehrung_InWorten_###1###_',
								dataRapPath: 'Recht.Vollstreckbarkeit.Teil.Betrag.Waehrung.InWorten[###1###]',
								codestable: 'WaehrungInWorten.Auto'
							}, {
								fldtype: 'Text',
								label: 'Betrag i. Z.',
								id: 'Recht_Vollstreckbarkeit_Teil_Betrag_Wert_InZiffern_###1###_',
								dataRapPath: 'Recht.Vollstreckbarkeit.Teil.Betrag.Wert.InZiffern[###1###]'
							}, {
								fldtype: 'Text',
								label: 'Währung i. KF',
								id: 'Recht_Vollstreckbarkeit_Teil_Betrag_Waehrung_InAbk_###1###_',
								dataRapPath: 'Recht.Vollstreckbarkeit.Teil.Betrag.Waehrung.InAbk[###1###]',
								codestable: 'Waehrungscode.Auto'
							}, {
								fldtype: 'Text',
								label: 'Zusatz',
								id: 'Recht_Vollstreckbarkeit_Teil_Zusatz_###1###_',
								dataRapPath: 'Recht.Vollstreckbarkeit.Teil.Zusatz[###1###]'
							}
						]
					}
				}, {
					cardinality: 'n',
					opDelLastSubitem: true,
					label: 'Einschr. Vollstreckbarkeit MEA/BuSt.',
					dynamicSubitem: {
						label: 'Einschr. Vollstreckbarkeit MEA/BuSt. (###1###) ',
						inputFields: [{
								fldtype: 'Text',
								label: 'lfd. Nr. BV',
								id: 'Recht_Vollstreckbarkeit_BVNr_###1###_',
								dataRapPath: 'Recht.Vollstreckbarkeit.BVNr[###1###]'
							}, {
								fldtype: 'Number',
								label: 'Ant. Zähler',
								id: 'Recht_Vollstreckbarkeit_BezugInAbt1_###1###_Anteil_InZiffern_Bruch_Zaehler',
								dataRapPath: 'Recht.Vollstreckbarkeit.BezugInAbt1[###1###].Anteil.InZiffern.Bruch.Zaehler'
							}, {
								fldtype: 'Number',
								label: 'Ant. Nenner',
								id: 'Recht_Vollstreckbarkeit_BezugInAbt1_###1###_Anteil_InZiffern_Bruch_Nenner',
								dataRapPath: 'Recht.Vollstreckbarkeit.BezugInAbt1[###1###].Anteil.InZiffern.Bruch.Nenner'
							}, {
								fldtype: 'Text',
								label: 'Ant. Sonst.',
								id: 'Recht_Vollstreckbarkeit_BezugInAbt1_###1###_Anteil_InZiffern_Dezimal',
								dataRapPath: 'Recht.Vollstreckbarkeit.BezugInAbt1[###1###].Anteil.InZiffern.Dezimal'
							}, {
								fldtype: 'Text',
								label: 'Ant. i. W',
								id: 'Recht_Vollstreckbarkeit_BezugInAbt1_###1###_Anteil_InWorten',
								dataRapPath: 'Recht.Vollstreckbarkeit.BezugInAbt1[###1###].Anteil.InWorten'
							}, {
								fldtype: 'Text',
								label: 'lfd. Nr. Abt. I',
								id: 'Recht_Vollstreckbarkeit_BezugInAbt1_###1###_lfdNr',
								dataRapPath: 'Recht.Vollstreckbarkeit.BezugInAbt1[###1###].lfdNr'
							}, {
								fldtype: 'Text',
								label: 'Titel',
								id: 'Recht_Vollstreckbarkeit_BezugInAbt1_###1###_Eigentuemer_Natuer_Person_Titel',
								dataRapPath: 'Recht.Vollstreckbarkeit.BezugInAbt1[###1###].Eigentuemer.Natuer.Person.Titel',
								codestable: 'Titel.Dropdown+'
							}, {
								fldtype: 'Text',
								label: 'Namensvorsatz',
								id: 'Recht_Vollstreckbarkeit_BezugInAbt1_###1###_Eigentuemer_Natuer_Person_NameVorsatz',
								dataRapPath: 'Recht.Vollstreckbarkeit.BezugInAbt1[###1###].Eigentuemer.Natuer.Person.NameVorsatz'
							}, {
								fldtype: 'Text',
								label: 'Vorname',
								id: 'Recht_Vollstreckbarkeit_BezugInAbt1_###1###_Eigentuemer_Natuer_Person_Vorname',
								dataRapPath: 'Recht.Vollstreckbarkeit.BezugInAbt1[###1###].Eigentuemer.Natuer.Person.Vorname'
							}, {
								fldtype: 'Text',
								label: 'Namenszusatz',
								id: 'Recht_Vollstreckbarkeit_BezugInAbt1_###1###_Eigentuemer_Natuer_Person_NameZusatz',
								dataRapPath: 'Recht.Vollstreckbarkeit.BezugInAbt1[###1###].Eigentuemer.Natuer.Person.NameZusatz'
							}, {
								fldtype: 'Text',
								label: 'Nachname',
								id: 'Recht_Vollstreckbarkeit_BezugInAbt1_###1###_Eigentuemer_Natuer_Person_Nachname',
								dataRapPath: 'Recht.Vollstreckbarkeit.BezugInAbt1[###1###].Eigentuemer.Natuer.Person.Nachname'
							}, {
								fldtype: 'Text',
								label: 'Geburtsname',
								id: 'Recht_Vollstreckbarkeit_BezugInAbt1_###1###_Eigentuemer_Natuer_Person_Geburtsname',
								dataRapPath: 'Recht.Vollstreckbarkeit.BezugInAbt1[###1###].Eigentuemer.Natuer.Person.Geburtsname'
							}, {
								fldtype: 'Text',
								label: 'Firma/Bezeichnung',
								id: 'Recht_Vollstreckbarkeit_BezugInAbt1_###1###_Eigentuemer_Jurist_Bez',
								dataRapPath: 'Recht.Vollstreckbarkeit.BezugInAbt1[###1###].Eigentuemer.Jurist.Bez'
							}, {
								fldtype: 'Text',
								label: 'Sitz Ort',
								id: 'Recht_Vollstreckbarkeit_BezugInAbt1_###1###_Eigentuemer_Jurist_Sitz_Ort',
								dataRapPath: 'Recht.Vollstreckbarkeit.BezugInAbt1[###1###].Eigentuemer.Jurist.Sitz.Ort'
							}, {
								fldtype: 'Text',
								label: 'KöR Bezeichnung',
								id: 'Recht_Vollstreckbarkeit_BezugInAbt1_###1###_Eigentuemer_Koerper_Name',
								dataRapPath: 'Recht.Vollstreckbarkeit.BezugInAbt1[###1###].Eigentuemer.Koerper.Name'
							}, {
								fldtype: 'Text',
								label: 'Zusatz § 15 GBV',
								id: 'Recht_Vollstreckbarkeit_BezugInAbt1_###1###_Eigentuemer_Koerper_VermTeil',
								dataRapPath: 'Recht.Vollstreckbarkeit.BezugInAbt1[###1###].Eigentuemer.Koerper.VermTeil'
							}, {
								fldtype: 'Text',
								label: 'KöR Ort',
								id: 'Recht_Vollstreckbarkeit_BezugInAbt1_###1###_Eigentuemer_Koerper_Sitz_Ort',
								dataRapPath: 'Recht.Vollstreckbarkeit.BezugInAbt1[###1###].Eigentuemer.Koerper.Sitz.Ort'
							}
						]
					}
				}, {
					cardinality: 'n',
					opDelLastSubitem: true,
					label: 'Recht Abteilung III sonstiges',
					dynamicSubitem: {
						label: 'Recht Abteilung III sonstiges (###1###) ',
						inputFields: [{
								fldtype: 'Checkbox',
								label: 'Bed.',
								id: 'Recht_Bedingung_bedingt_###1###_',
								dataRapPath: 'Recht.Bedingung.bedingt[###1###]'
							}, {
								fldtype: 'Text',
								label: 'Bed. Text',
								id: 'Recht_Bedingung_Text_###1###_',
								dataRapPath: 'Recht.Bedingung.Text[###1###]'
							}, {
								fldtype: 'Text',
								label: 'Bed. Art',
								id: 'Recht_Bedingung_Art_###1###_',
								dataRapPath: 'Recht.Bedingung.Art[###1###]',
								codestable: 'BedingungP10ZVG.Auto'
							}, {
								fldtype: 'Checkbox',
								label: 'Befr.',
								id: 'Recht_Befristung_befristet_###1###_',
								dataRapPath: 'Recht.Befristung.befristet[###1###]'
							}, {
								fldtype: 'Text',
								label: 'Befr. Berechnungsvorschr.',
								id: 'Recht_Befristung_Berechnung_###1###_',
								dataRapPath: 'Recht.Befristung.Berechnung[###1###]'
							}, {
								fldtype: 'Text',
								label: 'Befr. Endtermin',
								id: 'Recht_Befristung_Ende_###1###_',
								dataRapPath: 'Recht.Befristung.Ende[###1###]'
							}, {
								fldtype: 'Text',
								label: 'Verf.-Beschr.',
								id: 'Recht_VerfBeschr_###1###_',
								dataRapPath: 'Recht.VerfBeschr[###1###]'
							}, {
								fldtype: 'Text',
								label: 'LöschAusschl',
								id: 'Recht_AusschlussLoeschungsanspruch_AusschlLoeAnsp_###1###_',
								dataRapPath: 'Recht.AusschlussLoeschungsanspruch.AusschlLoeAnsp[###1###]'
							}, {
								fldtype: 'Text',
								label: 'LöschAusschl. Vorschr.',
								id: 'Recht_AusschlussLoeschungsanspruch_Paragraph_###1###_',
								dataRapPath: 'Recht.AusschlussLoeschungsanspruch.Paragraph[###1###]',
								codestable: 'Ausschluss1179Paragraph.Auto'
							}, {
								fldtype: 'Checkbox',
								label: 'LöschAusschl. teilw.',
								id: 'Recht_AusschlussLoeschungsanspruch_teilweise_###1###_',
								dataRapPath: 'Recht.AusschlussLoeschungsanspruch.teilweise[###1###]'
							}, {
								fldtype: 'Text',
								label: 'LöschAusschl. Recht Abt.',
								id: 'Recht_Rang_###1###_Recht_Rechtsbezeichnung_Abteilung',
								dataRapPath: 'Recht.Rang[###1###].Recht.Rechtsbezeichnung.Abteilung'
							}, {
								fldtype: 'Text',
								label: 'LöschAusschl. Recht Nr.',
								id: 'Recht_AusschlussLoeschungsanspruch_betrRechte_###1###_Rechtsbezeichnung_LfdNr',
								dataRapPath: 'Recht.AusschlussLoeschungsanspruch.betrRechte[###1###].Rechtsbezeichnung.LfdNr'
							}, {
								fldtype: 'Text',
								label: 'LöschAusschl. Rechtsart',
								id: 'Recht_AusschlussLoeschungsanspruch_betrRechte_###1###_Rechtsbezeichnung_Art',
								dataRapPath: 'Recht.AusschlussLoeschungsanspruch.betrRechte[###1###].Rechtsbezeichnung.Art',
								codestable: 'Rechtsart.Auto'
							}, {
								fldtype: 'Text',
								label: 'Betrag i.W.',
								id: 'Recht_AusschlussLoeschungsanspruch_betrRechte_###1###_Betrag_Wert_InWorten',
								dataRapPath: 'Recht.AusschlussLoeschungsanspruch.betrRechte[###1###].Betrag.Wert.InWorten'
							}, {
								fldtype: 'Text',
								label: 'Währung lang',
								id: 'Recht_AusschlussLoeschungsanspruch_betrRechte_###1###_Betrag_Waehrung_InWorten',
								dataRapPath: 'Recht.AusschlussLoeschungsanspruch.betrRechte[###1###].Betrag.Waehrung.InWorten',
								codestable: 'WaehrungInWorten.Auto'
							}, {
								fldtype: 'Text',
								label: 'Betrag i. Z.',
								id: 'Recht_AusschlussLoeschungsanspruch_betrRechte_###1###_Betrag_Wert_InZiffern',
								dataRapPath: 'Recht.AusschlussLoeschungsanspruch.betrRechte[###1###].Betrag.Wert.InZiffern'
							}, {
								fldtype: 'Text',
								label: 'Währung i. KF',
								id: 'Recht_AusschlussLoeschungsanspruch_betrRechte_###1###_Betrag_Waehrung_InAbk',
								dataRapPath: 'Recht.AusschlussLoeschungsanspruch.betrRechte[###1###].Betrag.Waehrung.InAbk',
								codestable: 'Waehrungscode.Auto'
							}, {
								fldtype: 'Text',
								label: 'AbtrAusschl. Art',
								id: 'Recht_AbtretungsUndVerpfaendungsausschluss_Art_###1###_',
								dataRapPath: 'Recht.AbtretungsUndVerpfaendungsausschluss.Art[###1###]',
								codestable: 'Abtretungsausschluss.Dropdown+'
							}, {
								fldtype: 'Text',
								label: 'ZH Eintr.-Grund',
								id: 'Recht_ZwangSiHypo_Grund_###1###_',
								dataRapPath: 'Recht.ZwangSiHypo.Grund[###1###]',
								codestable: 'EintragungsgrundAbt3.Auto'
							}, {
								fldtype: 'Checkbox',
								label: 'Bed. § 10 ZVG',
								id: 'Recht_ZwangSiHypo_P10ZVG_BedingungP10ZVG_###1###_',
								dataRapPath: 'Recht.ZwangSiHypo.P10ZVG.BedingungP10ZVG[###1###]'
							}, {
								fldtype: 'Text',
								label: '§ 10 ZVG Betrag i. Z.',
								id: 'Recht_ZwangSiHypo_P10ZVG_Betrag_Wert_InZiffern_###1###_',
								dataRapPath: 'Recht.ZwangSiHypo.P10ZVG.Betrag.Wert.InZiffern[###1###]'
							}, {
								fldtype: 'Text',
								label: '§ 10 ZVG Währung KF',
								id: 'Recht_ZwangSiHypo_P10ZVG_Betrag_Waehrung_InAbk_###1###_',
								dataRapPath: 'Recht.ZwangSiHypo.P10ZVG.Betrag.Waehrung.InAbk[###1###]',
								codestable: 'Waehrungscode.Auto'
							}, {
								fldtype: 'Text',
								label: '§ 10 ZVG Betrag i. W.',
								id: 'Recht_ZwangSiHypo_P10ZVG_Betrag_Wert_InWorten_###1###_',
								dataRapPath: 'Recht.ZwangSiHypo.P10ZVG.Betrag.Wert.InWorten[###1###]'
							}, {
								fldtype: 'Text',
								label: '§ 10 ZVG Währung LF',
								id: 'Recht_ZwangSiHypo_P10ZVG_Betrag_Waehrung_InWorten_###1###_',
								dataRapPath: 'Recht.ZwangSiHypo.P10ZVG.Betrag.Waehrung.InWorten[###1###]',
								codestable: 'WaehrungInWorten.Auto'
							}, {
								fldtype: 'Checkbox',
								label: 'Umschr. Vorm.',
								id: 'Recht_UmschreibungAusVormerkung_###1###_',
								dataRapPath: 'Recht.UmschreibungAusVormerkung[###1###]'
							}, {
								fldtype: 'Checkbox',
								label: 'Umschr. Widerspr.',
								id: 'Recht_UmschreibungAusWiderspruch_###1###_',
								dataRapPath: 'Recht.UmschreibungAusWiderspruch[###1###]'
							}, {
								fldtype: 'Text',
								label: 'Fälligkeit',
								id: 'Recht_Sonstiges_###1###_Faellig',
								dataRapPath: 'Recht.Sonstiges[###1###].Faellig'
							}, {
								fldtype: 'Checkbox',
								label: 'Verz. Widerspr.',
								id: 'Recht_Sonstiges_###1###_VerzWidSprch',
								dataRapPath: 'Recht.Sonstiges[###1###].VerzWidSprch'
							}, {
								fldtype: 'Text',
								label: 'Kündigungsbedingungen',
								id: 'Recht_Sonstiges_###1###_Kündigungsbedindungen',
								dataRapPath: 'Recht.Sonstiges[###1###].Kündigungsbedindungen'
							}
						]
					}
				}, {
					cardinality: '+',
					opDelLastSubitem: true,
					label: 'Rentenschuld',
					dynamicSubitem: {
						label: 'Rentenschuld (###1###) ',
						inputFields: [{
								fldtype: 'Text',
								label: 'Rente Betrag i. Z.',
								id: 'Recht_Rentenschuld_Betrag_Wert_InZiffern_###1###_',
								dataRapPath: 'Recht.Rentenschuld.Betrag.Wert.InZiffern[###1###]'
							}, {
								fldtype: 'Text',
								label: 'Rente Währung KF',
								id: 'Recht_Rentenschuld_Betrag_Waehrung_InAbk_###1###_',
								dataRapPath: 'Recht.Rentenschuld.Betrag.Waehrung.InAbk[###1###]',
								codestable: 'Waehrungscode.Auto'
							}, {
								fldtype: 'Text',
								label: 'Rente Betrag i. W.',
								id: 'Recht_Rentenschuld_Betrag_Wert_InWorten_###1###_',
								dataRapPath: 'Recht.Rentenschuld.Betrag.Wert.InWorten[###1###]'
							}, {
								fldtype: 'Text',
								label: 'Rente Währung LF',
								id: 'Recht_Rentenschuld_Betrag_Waehrung_InWorten_###1###_',
								dataRapPath: 'Recht.Rentenschuld.Betrag.Waehrung.InWorten[###1###]',
								codestable: 'WaehrungInWorten.Auto'
							}, {
								fldtype: 'Text',
								label: 'Zahlungsbed.',
								id: 'Recht_Rentenschuld_Zahlungsbedingungen_###1###_',
								dataRapPath: 'Recht.Rentenschuld.Zahlungsbedingungen[###1###]'
							}, {
								fldtype: 'Date',
								label: 'Starttermin',
								id: 'Recht_Rentenschuld_Starttermin_###1###_',
								dataRapPath: 'Recht.Rentenschuld.Starttermin[###1###]'
							}, {
								fldtype: 'Text',
								label: 'Intervall',
								id: 'Recht_Rentenschuld_Intervall_###1###_',
								dataRapPath: 'Recht.Rentenschuld.Intervall[###1###]',
								codestable: 'Nebenleistungsintervall.Dropdown'
							}
						]
					}
				}
			]
		}, {
			opDelLastSubitem: true,
			label: 'Gläubiger',
			cardinality: 'n',
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
					}, {
						fldtype: 'Text',
						label: 'Sitz Ort',
						id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_Eigentuemer_Jurist_Sitz_Ort_1',
						dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte.Eigentuemer.Jurist.Sitz.Ort[1]'
					}, {
						fldtype: 'Text',
						label: 'Sitz Ort',
						id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_Eigentuemer_Jurist_Sitz_Ort_2',
						dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte.Eigentuemer.Jurist.Sitz.Ort[2]'
					}, {
						fldtype: 'Text',
						label: 'Sitz Ort',
						id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_Eigentuemer_Jurist_Sitz_Ort_3',
						dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte.Eigentuemer.Jurist.Sitz.Ort[3]'
					}, {
						fldtype: 'Text',
						label: 'Reg.Gericht',
						id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_Eigentuemer_Jurist_Register_Gericht',
						dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte.Eigentuemer.Jurist.Register.Gericht'
					}, {
						fldtype: 'Text',
						label: 'Reg.Art',
						id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_Eigentuemer_Jurist_Register_Art',
						dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte.Eigentuemer.Jurist.Register.Art',
						codestable: 'Registerart.Dropdown+'
					}, {
						fldtype: 'Number',
						label: 'Reg.Nr',
						id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_Eigentuemer_Jurist_Register_Nr',
						dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte.Eigentuemer.Jurist.Register.Nr'
					}, {
						fldtype: 'Text',
						label: 'Sitz PLZ',
						id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_Eigentuemer_Jurist_Sitz_PLZ_1',
						dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte.Eigentuemer.Jurist.Sitz.PLZ[1]'
					}, {
						fldtype: 'Text',
						label: 'Sitz PLZ',
						id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_Eigentuemer_Jurist_Sitz_PLZ_2',
						dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte.Eigentuemer.Jurist.Sitz.PLZ[2]'
					}, {
						fldtype: 'Text',
						label: 'Sitz PLZ',
						id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_Eigentuemer_Jurist_Sitz_PLZ_3',
						dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte.Eigentuemer.Jurist.Sitz.PLZ[3]'
					}, {
						fldtype: 'Text',
						label: 'Sitz Staat',
						id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_Eigentuemer_Jurist_Sitz_Staat',
						dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte.Eigentuemer.Jurist.Sitz.Staat'
					}, {
						fldtype: 'Number',
						label: 'Ant. Zähler',
						id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_Anteil_InZiffern_Bruch_Zaehler',
						dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte.Anteil.InZiffern.Bruch.Zaehler'
					}, {
						fldtype: 'Number',
						label: 'Ant. Nenner',
						id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_Anteil_InZiffern_Bruch_Nenner',
						dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte.Anteil.InZiffern.Bruch.Nenner'
					}, {
						fldtype: 'Text',
						label: 'Ant. i. W.',
						id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_Anteil_InWorten',
						dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte.Anteil.InWorten'
					}, {
						fldtype: 'Text',
						label: 'Ant. Sonstiges',
						id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_Anteil_InZiffern_Dezimal',
						dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte.Anteil.InZiffern.Dezimal'
					}
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
								}, {
									fldtype: 'Text',
									label: 'Ort',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_###2###_Eigentuemer_Koerper_Sitz_Ort',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte[###2###].Eigentuemer.Koerper.Sitz.Ort'
								}, {
									fldtype: 'Text',
									label: 'Zusatz § 15 GBV',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_###2###_Eigentuemer_Koerper_VermTeil',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte[###2###].Eigentuemer.Koerper.VermTeil'
								}, {
									fldtype: 'Text',
									label: 'Vertreter',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_###2###_Eigentuemer_Koerper_Vertreter_Bezeichnung',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte[###2###].Eigentuemer.Koerper.Vertreter.Bezeichnung'
								}, {
									fldtype: 'Text',
									label: 'Vertr. Sitz',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_###2###_Eigentuemer_Koerper_Vertreter_Ort',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte[###2###].Eigentuemer.Koerper.Vertreter.Ort'
								}
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
								}, {
									fldtype: 'Text',
									label: 'Vorname',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_###2###_Eigentuemer_Natuer_Person_Vorname',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte[###2###].Eigentuemer.Natuer.Person.Vorname'
								}, {
									fldtype: 'Text',
									label: 'Rufname',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_###2###_Eigentuemer_Natuer_Person_NameGenannt',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte[###2###].Eigentuemer.Natuer.Person.NameGenannt'
								}, {
									fldtype: 'Text',
									label: 'Namenszusatz',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_###2###_Eigentuemer_Natuer_Person_NameZusatz',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte[###2###].Eigentuemer.Natuer.Person.NameZusatz'
								}, {
									fldtype: 'Text',
									label: 'Nachname ',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_###2###_Eigentuemer_Natuer_Person_Nachname',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte[###2###].Eigentuemer.Natuer.Person.Nachname'
								}, {
									fldtype: 'Text',
									label: 'Geburtsname',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_###2###_Eigentuemer_Natuer_Person_Geburtsname',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte[###2###].Eigentuemer.Natuer.Person.Geburtsname'
								}, {
									fldtype: 'Date',
									label: 'Geburtsdatum',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_###2###_Eigentuemer_Natuer_Person_Geburtsdatum',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte[###2###].Eigentuemer.Natuer.Person.Geburtsdatum'
								}, {
									fldtype: 'Text',
									label: 'PLZ',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_###2###_Eigentuemer_Natuer_Person_PLZ',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte[###2###].Eigentuemer.Natuer.Person.PLZ'
								}, {
									fldtype: 'Text',
									label: 'Wohnort',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_###2###_Eigentuemer_Natuer_Person_Ort',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte[###2###].Eigentuemer.Natuer.Person.Ort'
								}, {
									fldtype: 'Text',
									label: 'Straße',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_###2###_Eigentuemer_Natuer_Person_Strasse',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte[###2###].Eigentuemer.Natuer.Person.Strasse'
								}, {
									fldtype: 'Text',
									label: 'Haus-Nr.',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_###2###_Eigentuemer_Natuer_Person_HausNr',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte[###2###].Eigentuemer.Natuer.Person.HausNr'
								}, {
									fldtype: 'Text',
									label: 'Beruf',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_###2###_Eigentuemer_Natuer_Person_Beruf',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte[###2###].Eigentuemer.Natuer.Person.Beruf'
								}
							]
						}
					}, {
						cardinality: '+',
						opDelLastSubitem: true,
						label: 'Besonderer Gläubiger ',
						dynamicSubitem: {
							label: 'Besonderer Gläubiger  (###1###)  (###2###) ',
							inputFields: [{
									fldtype: 'Text',
									label: 'Besonderer Gläubiger',
									id: 'Recht_Glaeubiger_besGlaeubiger_Bezeichnung_###1###_',
									dataRapPath: 'Recht.Glaeubiger.besGlaeubiger.Bezeichnung[###1###]'
								}, {
									fldtype: 'Text',
									label: 'GB-Vertr.',
									id: 'Recht_Glaeubiger_besGlaeubiger_VertreterP1189BGB_Vertreter_###1###_',
									dataRapPath: 'Recht.Glaeubiger.besGlaeubiger.VertreterP1189BGB.Vertreter[###1###]',
									codestable: 'Grundbuchvertreter.Auto'
								}, {
									fldtype: 'Text',
									label: 'GB-Vertr. Titel',
									id: 'Recht_Glaeubiger_besGlaeubiger_VertreterP1189BGB_Eigentuemer_Natuer_Person_Titel_###1###_',
									dataRapPath: 'Recht.Glaeubiger.besGlaeubiger.VertreterP1189BGB.Eigentuemer.Natuer.Person.Titel[###1###]',
									codestable: 'Titel.Dropdown+'
								}, {
									fldtype: 'Text',
									label: 'GB-Vertr. Namensvorsatz',
									id: 'Recht_Glaeubiger_besGlaeubiger_VertreterP1189BGB_Eigentuemer_Natuer_Person_NameVorsatz_###1###_',
									dataRapPath: 'Recht.Glaeubiger.besGlaeubiger.VertreterP1189BGB.Eigentuemer.Natuer.Person.NameVorsatz[###1###]'
								}, {
									fldtype: 'Text',
									label: 'GB-Vertr. Vorname',
									id: 'Recht_Glaeubiger_besGlaeubiger_VertreterP1189BGB_Eigentuemer_Natuer_Person_Vorname_###1###_',
									dataRapPath: 'Recht.Glaeubiger.besGlaeubiger.VertreterP1189BGB.Eigentuemer.Natuer.Person.Vorname[###1###]'
								}, {
									fldtype: 'Text',
									label: 'GB-Vertr. Namenszusatz',
									id: 'Recht_Glaeubiger_besGlaeubiger_VertreterP1189BGB_Eigentuemer_Natuer_Person_NameZusatz_###1###_',
									dataRapPath: 'Recht.Glaeubiger.besGlaeubiger.VertreterP1189BGB.Eigentuemer.Natuer.Person.NameZusatz[###1###]'
								}, {
									fldtype: 'Text',
									label: 'GB-Vertr. Nachname',
									id: 'Recht_Glaeubiger_besGlaeubiger_VertreterP1189BGB_Eigentuemer_Natuer_Person_Nachname_###1###_',
									dataRapPath: 'Recht.Glaeubiger.besGlaeubiger.VertreterP1189BGB.Eigentuemer.Natuer.Person.Nachname[###1###]'
								}, {
									fldtype: 'Text',
									label: 'GB-Vertr. Geb.-Name',
									id: 'Recht_Glaeubiger_besGlaeubiger_VertreterP1189BGB_Eigentuemer_Natuer_Person_Geburtsname_###1###_',
									dataRapPath: 'Recht.Glaeubiger.besGlaeubiger.VertreterP1189BGB.Eigentuemer.Natuer.Person.Geburtsname[###1###]'
								}, {
									fldtype: 'Date',
									label: 'GB-Vertr. Geb.-Datum',
									id: 'Recht_Glaeubiger_besGlaeubiger_VertreterP1189BGB_Eigentuemer_Natuer_Person_Geburtsdatum_###1###_',
									dataRapPath: 'Recht.Glaeubiger.besGlaeubiger.VertreterP1189BGB.Eigentuemer.Natuer.Person.Geburtsdatum[###1###]'
								}, {
									fldtype: 'Text',
									label: 'GB-Vertr. Wohnort',
									id: 'Recht_Glaeubiger_besGlaeubiger_VertreterP1189BGB_Eigentuemer_Natuer_Person_Ort_###1###_',
									dataRapPath: 'Recht.Glaeubiger.besGlaeubiger.VertreterP1189BGB.Eigentuemer.Natuer.Person.Ort[###1###]'
								}, {
									fldtype: 'Text',
									label: 'Firma/Bezeichnung',
									id: 'Recht_Glaeubiger_besGlaeubiger_VertreterP1189BGB_Eigentuemer_Jurist_Bez_###1###_',
									dataRapPath: 'Recht.Glaeubiger.besGlaeubiger.VertreterP1189BGB.Eigentuemer.Jurist.Bez[###1###]'
								}, {
									fldtype: 'Text',
									label: 'Sitz Ort',
									id: 'Recht_Glaeubiger_besGlaeubiger_VertreterP1189BGB_Eigentuemer_Jurist_Sitz_###1###_Ort_###2###_',
									dataRapPath: 'Recht.Glaeubiger.besGlaeubiger.VertreterP1189BGB.Eigentuemer.Jurist.Sitz[###1###].Ort[###2###]'
								}
							]
						}
					}, {
						cardinality: 'n',
						opDelLastSubitem: true,
						label: 'Gläubigermehrheit Anteilsverhältnis',
						dynamicSubitem: {
							label: 'Gläubigermehrheit Anteilsverhältnis (###1###)  (###2###) ',
							inputFields: [{
									fldtype: 'Text',
									label: 'Gl. lfd. Nr.',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Anteilsverhaeltnis_LfdNrBeteilEig_###2###_',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Anteilsverhaeltnis.LfdNrBeteilEig[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Gem. Ant.-Verh.',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Anteilsverhaeltnis_Je_###2###_',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Anteilsverhaeltnis.Je[###2###]'
								}, {
									fldtype: 'Number',
									label: 'Ant. Zähler',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Anteilsverhaeltnis_Anteil_InZiffern_Bruch_Zaehler_###2###_',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Anteilsverhaeltnis.Anteil.InZiffern.Bruch.Zaehler[###2###]'
								}, {
									fldtype: 'Number',
									label: 'Ant. Nenner',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Anteilsverhaeltnis_Anteil_InZiffern_Bruch_Nenner_###2###_',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Anteilsverhaeltnis.Anteil.InZiffern.Bruch.Nenner[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Ant. i. W.',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Anteilsverhaeltnis_Anteil_InWorten_###2###_',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Anteilsverhaeltnis.Anteil.InWorten[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Ant. Sonstiges',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Anteilsverhaeltnis_Anteil_InZiffern_Dezimal_###2###_',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Anteilsverhaeltnis.Anteil.InZiffern.Dezimal[###2###]'
								}
							]
						}
					}, {
						cardinality: '+',
						opDelLastSubitem: true,
						label: 'Gläubigermehrheit Gemeinschaftsverhältnis',
						dynamicSubitem: {
							label: 'Gläubigermehrheit Gemeinschaftsverhältnis (###1###)  (###2###) ',
							inputFields: [{
									fldtype: 'Text',
									label: 'Gl. lfd. Nr.',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Gemeinschaftsverhaeltnis_BetLfdNrEig_###2###_',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Gemeinschaftsverhaeltnis.BetLfdNrEig[###2###]'
								}, {
									fldtype: 'Number',
									label: 'Ant. Zähler',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Gemeinschaftsverhaeltnis_Anteil_InZiffern_Bruch_Zaehler_###2###_',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Gemeinschaftsverhaeltnis.Anteil.InZiffern.Bruch.Zaehler[###2###]'
								}, {
									fldtype: 'Number',
									label: 'Ant. Nenner',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Gemeinschaftsverhaeltnis_Anteil_InZiffern_Bruch_Nenner_###2###_',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Gemeinschaftsverhaeltnis.Anteil.InZiffern.Bruch.Nenner[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Ant. i. W.',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Gemeinschaftsverhaeltnis_Anteil_InWorten_###2###_',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Gemeinschaftsverhaeltnis.Anteil.InWorten[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Ant. Sonstiges',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Gemeinschaftsverhaeltnis_Anteil_InZiffern_Dezimal_###2###_',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Gemeinschaftsverhaeltnis.Anteil.InZiffern.Dezimal[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Gemeinschaftsverhältnis',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Gemeinschaftsverhaeltnis_Art_###2###_',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Gemeinschaftsverhaeltnis.Art[###2###]',
									codestable: 'Gemeinschaftsverhaeltnis.Dropdown+'
								}
							]
						}
					}
				]
			}
		}, {
			opDelLastSubitem: true,
			label: 'Zinsen/Nebenleistung',
			cardinality: 'n',
			dynamicSubitem: {
				label: 'Zinsen/Nebenleistung (###1###) ',
				inputFields: [{
						fldtype: 'Text',
						label: 'Zins % fest i. Z.',
						id: 'Recht_Zinsen_###1###_Prozent_InZiffern',
						dataRapPath: 'Recht.Zinsen[###1###].Prozent.InZiffern'
					}, {
						fldtype: 'Text',
						label: 'Zins % fest i. W.',
						id: 'Recht_Zinsen_###1###_Prozent_InWorten',
						dataRapPath: 'Recht.Zinsen[###1###].Prozent.InWorten'
					}, {
						fldtype: 'Text',
						label: 'Zins Intervall',
						id: 'Recht_Zinsen_###1###_Intervall',
						dataRapPath: 'Recht.Zinsen[###1###].Intervall',
						codestable: 'InterestInterval.Dropdown'
					}, {
						fldtype: 'Text',
						label: 'Zins Art',
						id: 'Recht_Zinsen_###1###_Bezeichnung',
						dataRapPath: 'Recht.Zinsen[###1###].Bezeichnung',
						codestable: 'Zinstyp.Dropdown+'
					}, {
						fldtype: 'Text',
						label: 'Nebenl. % fest i.Z.',
						id: 'Recht_Nebenleistungen_###1###_Prozent_InZiffern',
						dataRapPath: 'Recht.Nebenleistungen[###1###].Prozent.InZiffern'
					}, {
						fldtype: 'Text',
						label: 'Nebenl. % fest i.W.',
						id: 'Recht_Nebenleistungen_###1###_Prozent_InWorten',
						dataRapPath: 'Recht.Nebenleistungen[###1###].Prozent.InWorten'
					}, {
						fldtype: 'Text',
						label: 'Nebenl. Intervall',
						id: 'Recht_Nebenleistungen_###1###_Intervall',
						dataRapPath: 'Recht.Nebenleistungen[###1###].Intervall',
						codestable: 'Nebenleistungsintervall.Dropdown'
					}, {
						fldtype: 'Text',
						label: 'Nebenleistung Art',
						id: 'Recht_Nebenleistungen_###1###_Bezeich',
						dataRapPath: 'Recht.Nebenleistungen[###1###].Bezeich',
						codestable: 'Nebenleistungsbezeichnung.Auto'
					}
				],
				subitems: [{
						cardinality: '+',
						opDelLastSubitem: true,
						label: 'Zinsen sonstiges',
						dynamicSubitem: {
							label: 'Zinsen sonstiges (###1###)  (###2###) ',
							inputFields: [{
									fldtype: 'Text',
									label: '% variabel',
									id: 'Recht_Zinsen_###1###_Prozent_Berechnung_###2###_',
									dataRapPath: 'Recht.Zinsen[###1###].Prozent.Berechnung[###2###]',
									codestable: 'BerechnungsvorschriftZinsen.Auto'
								}, {
									fldtype: 'Text',
									label: 'Bezugsbetrag i. Z.',
									id: 'Recht_Zinsen_###1###_Prozent_Betrag_Wert_InZiffern_###2###_',
									dataRapPath: 'Recht.Zinsen[###1###].Prozent.Betrag.Wert.InZiffern[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Bezugsbetrag Währung KF',
									id: 'Recht_Zinsen_###1###_Prozent_Betrag_Waehrung_InAbk_###2###_',
									dataRapPath: 'Recht.Zinsen[###1###].Prozent.Betrag.Waehrung.InAbk[###2###]',
									codestable: 'Waehrungscode.Auto'
								}, {
									fldtype: 'Text',
									label: 'Bezugsbetrag i. W.',
									id: 'Recht_Zinsen_###1###_Prozent_Betrag_Wert_InWorten_###2###_',
									dataRapPath: 'Recht.Zinsen[###1###].Prozent.Betrag.Wert.InWorten[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Bezugsbetrag Währung LF',
									id: 'Recht_Zinsen_###1###_Prozent_Betrag_Waehrung_InWorten_###2###_',
									dataRapPath: 'Recht.Zinsen[###1###].Prozent.Betrag.Waehrung.InWorten[###2###]',
									codestable: 'WaehrungInWorten.Auto'
								}, {
									fldtype: 'Text',
									label: 'Festbetrag i. Z.',
									id: 'Recht_Zinsen_###1###_Fest_Betrag_Wert_InZiffern_###2###_',
									dataRapPath: 'Recht.Zinsen[###1###].Fest.Betrag.Wert.InZiffern[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Festbetrag Währung KF',
									id: 'Recht_Zinsen_###1###_Fest_Betrag_Waehrung_InAbk_###2###_',
									dataRapPath: 'Recht.Zinsen[###1###].Fest.Betrag.Waehrung.InAbk[###2###]',
									codestable: 'Waehrungscode.Auto'
								}, {
									fldtype: 'Text',
									label: 'Festbetrag i. W.',
									id: 'Recht_Zinsen_###1###_Fest_Betrag_Wert_InWorten_###2###_',
									dataRapPath: 'Recht.Zinsen[###1###].Fest.Betrag.Wert.InWorten[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Festbetrag Währung LF',
									id: 'Recht_Zinsen_###1###_Fest_Betrag_Waehrung_InWorten_###2###_',
									dataRapPath: 'Recht.Zinsen[###1###].Fest.Betrag.Waehrung.InWorten[###2###]',
									codestable: 'WaehrungInWorten.Auto'
								}, {
									fldtype: 'Text',
									label: '% min.',
									id: 'Recht_Zinsen_###1###_ZinsBerenzung_###2###_Min',
									dataRapPath: 'Recht.Zinsen[###1###].ZinsBerenzung[###2###].Min'
								}, {
									fldtype: 'Text',
									label: '% max.',
									id: 'Recht_Zinsen_###1###_ZinsBerenzung_###2###_Max',
									dataRapPath: 'Recht.Zinsen[###1###].ZinsBerenzung[###2###].Max'
								}, {
									fldtype: 'Text',
									label: 'Zinsbegr. Zusatz',
									id: 'Recht_Zinsen_###1###_Zusatz_###2###_',
									dataRapPath: 'Recht.Zinsen[###1###].Zusatz[###2###]'
								}, {
									fldtype: 'Date',
									label: 'Datum Beginn',
									id: 'Recht_Zinsen_###1###_Beginn_Datum_###2###_',
									dataRapPath: 'Recht.Zinsen[###1###].Beginn.Datum[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Beginn i. W.',
									id: 'Recht_Zinsen_###1###_Beginn_InWorten_###2###_',
									dataRapPath: 'Recht.Zinsen[###1###].Beginn.InWorten[###2###]',
									codestable: 'BeginnInWorten.Auto'
								}, {
									fldtype: 'Checkbox',
									label: 'Bed.',
									id: 'Recht_Zinsen_###1###_Bedingung_bedingt_###2###_',
									dataRapPath: 'Recht.Zinsen[###1###].Bedingung.bedingt[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Bed. Text',
									id: 'Recht_Zinsen_###1###_Bedingung_Text_###2###_',
									dataRapPath: 'Recht.Zinsen[###1###].Bedingung.Text[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Bed. Art',
									id: 'Recht_Zinsen_###1###_Bedingung_Art_###2###_',
									dataRapPath: 'Recht.Zinsen[###1###].Bedingung.Art[###2###]',
									codestable: 'BedingungP10ZVG.Auto'
								}, {
									fldtype: 'Checkbox',
									label: 'Befr.',
									id: 'Recht_Zinsen_###1###_Befristung_befristet_###2###_',
									dataRapPath: 'Recht.Zinsen[###1###].Befristung.befristet[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Befr. Berechnungsvorschr.',
									id: 'Recht_Zinsen_###1###_Befristung_Berechnung_###2###_',
									dataRapPath: 'Recht.Zinsen[###1###].Befristung.Berechnung[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Befr. Endtermin',
									id: 'Recht_Zinsen_###1###_Befristung_Ende_###2###_',
									dataRapPath: 'Recht.Zinsen[###1###].Befristung.Ende[###2###]'
								}
							]
						}
					}, {
						cardinality: '+',
						opDelLastSubitem: true,
						label: 'Nebenleistung sonstiges',
						dynamicSubitem: {
							label: 'Nebenleistung sonstiges (###1###)  (###2###) ',
							inputFields: [{
									fldtype: 'Text',
									label: 'NL variabel',
									id: 'Recht_Nebenleistungen_###1###_Prozent_Berechnung_###2###_',
									dataRapPath: 'Recht.Nebenleistungen[###1###].Prozent.Berechnung[###2###]',
									codestable: 'BerechnungsvorschriftNebenleistungen.Auto'
								}, {
									fldtype: 'Text',
									label: '% min.',
									id: 'Recht_Nebenleistungen_###1###_Begrenzung_###2###_Min',
									dataRapPath: 'Recht.Nebenleistungen[###1###].Begrenzung[###2###].Min'
								}, {
									fldtype: 'Text',
									label: '% max.',
									id: 'Recht_Nebenleistungen_###1###_Begrenzung_###2###_Max',
									dataRapPath: 'Recht.Nebenleistungen[###1###].Begrenzung[###2###].Max'
								}, {
									fldtype: 'Text',
									label: 'Bezugsbetrag i. Z.',
									id: 'Recht_Nebenleistungen_###1###_Prozent_Betrag_Wert_InZiffern_###2###_',
									dataRapPath: 'Recht.Nebenleistungen[###1###].Prozent.Betrag.Wert.InZiffern[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Bezugsbetrag Währung KF',
									id: 'Recht_Nebenleistungen_###1###_Prozent_Betrag_Waehrung_InAbk_###2###_',
									dataRapPath: 'Recht.Nebenleistungen[###1###].Prozent.Betrag.Waehrung.InAbk[###2###]',
									codestable: 'Waehrungscode.Auto'
								}, {
									fldtype: 'Text',
									label: 'Bezugsbetrag i. W.',
									id: 'Recht_Nebenleistungen_###1###_Prozent_Betrag_Wert_InWorten_###2###_',
									dataRapPath: 'Recht.Nebenleistungen[###1###].Prozent.Betrag.Wert.InWorten[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Bezugsbetrag Währung LF',
									id: 'Recht_Nebenleistungen_###1###_Prozent_Betrag_Waehrung_InWorten_###2###_',
									dataRapPath: 'Recht.Nebenleistungen[###1###].Prozent.Betrag.Waehrung.InWorten[###2###]',
									codestable: 'WaehrungInWorten.Auto'
								}, {
									fldtype: 'Text',
									label: 'Festbetrag i. Z.',
									id: 'Recht_Nebenleistungen_###1###_Fest_Betrag_Wert_InZiffern_###2###_',
									dataRapPath: 'Recht.Nebenleistungen[###1###].Fest.Betrag.Wert.InZiffern[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Festbetrag Währung KF',
									id: 'Recht_Nebenleistungen_###1###_Fest_Betrag_Waehrung_InAbk_###2###_',
									dataRapPath: 'Recht.Nebenleistungen[###1###].Fest.Betrag.Waehrung.InAbk[###2###]',
									codestable: 'Waehrungscode.Auto'
								}, {
									fldtype: 'Text',
									label: 'Festbetrag i. W.',
									id: 'Recht_Nebenleistungen_###1###_Fest_Betrag_Wert_InWorten_###2###_',
									dataRapPath: 'Recht.Nebenleistungen[###1###].Fest.Betrag.Wert.InWorten[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Festbetrag Währung LF',
									id: 'Recht_Nebenleistungen_###1###_Fest_Betrag_Waehrung_InWorten_###2###_',
									dataRapPath: 'Recht.Nebenleistungen[###1###].Fest.Betrag.Waehrung.InWorten[###2###]',
									codestable: 'WaehrungInWorten.Auto'
								}, {
									fldtype: 'Date',
									label: 'Datum Beginn',
									id: 'Recht_Nebenleistungen_###1###_Beginn_Datum_###2###_',
									dataRapPath: 'Recht.Nebenleistungen[###1###].Beginn.Datum[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Beginn i. W.',
									id: 'Recht_Nebenleistungen_###1###_Beginn_InWorten_###2###_',
									dataRapPath: 'Recht.Nebenleistungen[###1###].Beginn.InWorten[###2###]',
									codestable: 'BeginnInWorten.Auto'
								}, {
									fldtype: 'Checkbox',
									label: 'Bedingt',
									id: 'Recht_Nebenleistungen_###1###_Bedingung_bedingt_###2###_',
									dataRapPath: 'Recht.Nebenleistungen[###1###].Bedingung.bedingt[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Bed. Text',
									id: 'Recht_Nebenleistungen_###1###_Bedingung_Text_###2###_',
									dataRapPath: 'Recht.Nebenleistungen[###1###].Bedingung.Text[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Bed. Art',
									id: 'Recht_Nebenleistungen_###1###_Bedingung_Art_###2###_',
									dataRapPath: 'Recht.Nebenleistungen[###1###].Bedingung.Art[###2###]',
									codestable: 'BedingungP10ZVG.Auto'
								}, {
									fldtype: 'Checkbox',
									label: 'Befristet',
									id: 'Recht_Nebenleistungen_###1###_Befristung_befristet_###2###_',
									dataRapPath: 'Recht.Nebenleistungen[###1###].Befristung.befristet[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Befr. Berechnungsvorschr.',
									id: 'Recht_Nebenleistungen_###1###_Befristung_Berechnung_###2###_',
									dataRapPath: 'Recht.Nebenleistungen[###1###].Befristung.Berechnung[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Befr. Endtermin',
									id: 'Recht_Nebenleistungen_###1###_Befristung_Ende_###2###_',
									dataRapPath: 'Recht.Nebenleistungen[###1###].Befristung.Ende[###2###]'
								}, {
									fldtype: 'Text',
									label: 'NL Zusatz',
									id: 'Recht_Nebenleistungen_###1###_Zusatz_###2###_',
									dataRapPath: 'Recht.Nebenleistungen[###1###].Zusatz[###2###]'
								}
							]
						}
					}
				]
			}
		}, {
			opDelLastSubitem: true,
			label: 'Eintragungsgrundlage',
			cardinality: 'n',
			dynamicSubitem: {
				label: 'Eintragungsgrundlage (###1###) ',
				inputFields: [{
						fldtype: 'Text',
						label: 'Eintr.Grundl.Typ',
						id: 'Recht_Eintragungsgrundlage_###1###_Art_Typ',
						dataRapPath: 'Recht.Eintragungsgrundlage[###1###].Art.Typ',
						codestable: 'Eintragungsgrundlagentyp.Dropdown+'
					}, {
						fldtype: 'Date',
						label: 'Datum',
						id: 'Recht_Eintragungsgrundlage_###1###_DatumEintrGrdLage',
						dataRapPath: 'Recht.Eintragungsgrundlage[###1###].DatumEintrGrdLage'
					}, {
						fldtype: 'Text',
						label: 'Urkundennr.',
						id: 'Recht_Eintragungsgrundlage_###1###_UrkNr',
						dataRapPath: 'Recht.Eintragungsgrundlage[###1###].UrkNr'
					}, {
						fldtype: 'Text',
						label: 'Aktenzeichen',
						id: 'Recht_Eintragungsgrundlage_###1###_AktenZeichen',
						dataRapPath: 'Recht.Eintragungsgrundlage[###1###].AktenZeichen'
					}, {
						fldtype: 'Number',
						label: 'ON',
						id: 'Recht_Eintragungsgrundlage_###1###_VerfueHinweis_OrdNr',
						dataRapPath: 'Recht.Eintragungsgrundlage[###1###].VerfueHinweis.OrdNr'
					}, {
						fldtype: 'Text',
						label: 'Blatt ON',
						id: 'Recht_Eintragungsgrundlage_###1###_VerfueHinweis_OrdNrBlatt',
						dataRapPath: 'Recht.Eintragungsgrundlage[###1###].VerfueHinweis.OrdNrBlatt'
					}
				],
				subitems: [{
						cardinality: '+',
						opDelLastSubitem: true,
						label: 'Aussteller Notar',
						dynamicSubitem: {
							label: 'Aussteller Notar (###1###)  (###2###) ',
							inputFields: [{
									fldtype: 'Text',
									label: 'Amtstitel Notar',
									id: 'Recht_Eintragungsgrundlage_###1###_Aussteller_Notar_AmtsTitel_###2###_',
									dataRapPath: 'Recht.Eintragungsgrundlage[###1###].Aussteller.Notar.AmtsTitel[###2###]',
									codestable: 'AmtstitelNotar.Dropdown'
								}, {
									fldtype: 'Text',
									label: 'Titel',
									id: 'Recht_Eintragungsgrundlage_###1###_Aussteller_Notar_Titel_###2###_',
									dataRapPath: 'Recht.Eintragungsgrundlage[###1###].Aussteller.Notar.Titel[###2###]',
									codestable: 'Titel.Dropdown+'
								}, {
									fldtype: 'Text',
									label: 'Namensvorsatz',
									id: 'Recht_Eintragungsgrundlage_###1###_Aussteller_Notar_NameVorsatz_###2###_',
									dataRapPath: 'Recht.Eintragungsgrundlage[###1###].Aussteller.Notar.NameVorsatz[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Vorname',
									id: 'Recht_Eintragungsgrundlage_###1###_Aussteller_Notar_Vorname_###2###_',
									dataRapPath: 'Recht.Eintragungsgrundlage[###1###].Aussteller.Notar.Vorname[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Namenszusatz',
									id: 'Recht_Eintragungsgrundlage_###1###_Aussteller_Notar_NameZusatz_###2###_',
									dataRapPath: 'Recht.Eintragungsgrundlage[###1###].Aussteller.Notar.NameZusatz[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Nachname ',
									id: 'Recht_Eintragungsgrundlage_###1###_Aussteller_Notar_Nachname_###2###_',
									dataRapPath: 'Recht.Eintragungsgrundlage[###1###].Aussteller.Notar.Nachname[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Sitz Notar',
									id: 'Recht_Eintragungsgrundlage_###1###_Aussteller_Notar_Ort_###2###_',
									dataRapPath: 'Recht.Eintragungsgrundlage[###1###].Aussteller.Notar.Ort[###2###]'
								}
							]
						}
					}, {
						cardinality: '+',
						opDelLastSubitem: true,
						label: 'Aussteller Behörde',
						dynamicSubitem: {
							label: 'Aussteller Behörde (###1###)  (###2###) ',
							inputFields: [{
									fldtype: 'Text',
									label: 'Firma/Bezeichnung',
									id: 'Recht_Eintragungsgrundlage_###1###_Aussteller_Sonstige_Name_###2###_',
									dataRapPath: 'Recht.Eintragungsgrundlage[###1###].Aussteller.Sonstige.Name[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Sitz Ort',
									id: 'Recht_Eintragungsgrundlage_###1###_Aussteller_Sonstige_Ort_###2###_',
									dataRapPath: 'Recht.Eintragungsgrundlage[###1###].Aussteller.Sonstige.Ort[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Verfahrensart',
									id: 'Recht_Eintragungsgrundlage_###1###_AngabeVerf_Art_###2###_',
									dataRapPath: 'Recht.Eintragungsgrundlage[###1###].AngabeVerf.Art[###2###]'
								}
							]
						}
					}
				]
			}
		}, {
			opDelLastSubitem: true,
			label: 'Rangvermerk',
			cardinality: 'n',
			dynamicSubitem: {
				label: 'Rangvermerk (###1###) ',
				inputFields: [{
						fldtype: 'Text',
						label: 'Rangart',
						id: 'Recht_Rang_###1###_Art',
						dataRapPath: 'Recht.Rang[###1###].Art',
						codestable: 'Rangart.Dropdown+'
					}, {
						fldtype: 'Text',
						label: 'Rechtsart',
						id: 'Recht_Rang_###1###_Recht_Rechtsbezeichnung_Art',
						dataRapPath: 'Recht.Rang[###1###].Recht.Rechtsbezeichnung.Art',
						codestable: 'Rechtsart.Auto'
					}, {
						fldtype: 'Text',
						label: 'lfd. Nr.',
						id: 'Recht_Rang_###1###_Recht_Rechtsbezeichnung_LfdNr',
						dataRapPath: 'Recht.Rang[###1###].Recht.Rechtsbezeichnung.LfdNr'
					}, {
						fldtype: 'Text',
						label: 'Abtlg.',
						id: 'Recht_Rang_###1###_GegenRecht_Rechtsbezeichnung_Abteilung',
						dataRapPath: 'Recht.Rang[###1###].GegenRecht.Rechtsbezeichnung.Abteilung'
					}, {
						fldtype: 'Text',
						label: 'lfd. Nr.',
						id: 'Recht_Rang_###1###_GegenRecht_Rechtsbezeichnung_LfdNr',
						dataRapPath: 'Recht.Rang[###1###].GegenRecht.Rechtsbezeichnung.LfdNr'
					}, {
						fldtype: 'Text',
						label: 'lfd. Nr. Bereich',
						id: 'Recht_Rang_###1###_GegenRecht_Rechtsbezeichnung_BereichNr',
						dataRapPath: 'Recht.Rang[###1###].GegenRecht.Rechtsbezeichnung.BereichNr'
					}, {
						fldtype: 'Text',
						label: 'Ausn.Rangvorbehalt',
						id: 'Recht_Rang_###1###_AusnutzungRangVorBeh',
						dataRapPath: 'Recht.Rang[###1###].AusnutzungRangVorBeh',
						codestable: 'Vorbehaltsausnutzung.Dropdown+'
					}
				],
				subitems: [{
						cardinality: '1',
						opDelLastSubitem: true,
						label: 'Rangvermerk Sonstiges',
						dynamicSubitem: {
							label: 'Rangvermerk Sonstiges (###1###)  (###2###) ',
							inputFields: [{
									fldtype: 'Text',
									label: 'Art des Gegenrechts',
									id: 'Recht_Rang_###1###_GegenRecht_###2###_Rechtsbezeichnung_Art',
									dataRapPath: 'Recht.Rang[###1###].GegenRecht[###2###].Rechtsbezeichnung.Art',
									codestable: 'Rechtsart.Auto'
								}, {
									fldtype: 'Number',
									label: 'Ant. Zähler',
									id: 'Recht_Rang_###1###_Bezug_###2###_BezugInAbt1_Anteil_InZiffern_Bruch_Zaehler',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].BezugInAbt1.Anteil.InZiffern.Bruch.Zaehler'
								}, {
									fldtype: 'Number',
									label: 'Ant. Nenner',
									id: 'Recht_Rang_###1###_Bezug_###2###_BezugInAbt1_Anteil_InZiffern_Bruch_Nenner',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].BezugInAbt1.Anteil.InZiffern.Bruch.Nenner'
								}, {
									fldtype: 'Text',
									label: 'Ant. Sonst.',
									id: 'Recht_Rang_###1###_Bezug_###2###_BezugInAbt1_Anteil_InZiffern_Dezimal',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].BezugInAbt1.Anteil.InZiffern.Dezimal'
								}, {
									fldtype: 'Text',
									label: 'Ant. i. W',
									id: 'Recht_Rang_###1###_Bezug_###2###_BezugInAbt1_Anteil_InWorten',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].BezugInAbt1.Anteil.InWorten'
								}, {
									fldtype: 'Text',
									label: 'lfd. Nr. Abt. I',
									id: 'Recht_Rang_###1###_Bezug_###2###_BezugInAbt1_lfdNr',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].BezugInAbt1.lfdNr'
								}, {
									fldtype: 'Text',
									label: 'Titel',
									id: 'Recht_Rang_###1###_Bezug_###2###_BezugInAbt1_Eigentuemer_Natuer_Person_Titel',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].BezugInAbt1.Eigentuemer.Natuer.Person.Titel',
									codestable: 'Titel.Dropdown+'
								}, {
									fldtype: 'Text',
									label: 'Namensvorsatz',
									id: 'Recht_Rang_###1###_Bezug_###2###_BezugInAbt1_Eigentuemer_Natuer_Person_NameVorsatz',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].BezugInAbt1.Eigentuemer.Natuer.Person.NameVorsatz'
								}, {
									fldtype: 'Text',
									label: 'Vorname',
									id: 'Recht_Rang_###1###_Bezug_###2###_BezugInAbt1_Eigentuemer_Natuer_Person_Vorname',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].BezugInAbt1.Eigentuemer.Natuer.Person.Vorname'
								}, {
									fldtype: 'Text',
									label: 'Namenszusatz',
									id: 'Recht_Rang_###1###_Bezug_###2###_BezugInAbt1_Eigentuemer_Natuer_Person_NameZusatz',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].BezugInAbt1.Eigentuemer.Natuer.Person.NameZusatz'
								}, {
									fldtype: 'Text',
									label: 'Nachname',
									id: 'Recht_Rang_###1###_Bezug_###2###_BezugInAbt1_Eigentuemer_Natuer_Person_Nachname',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].BezugInAbt1.Eigentuemer.Natuer.Person.Nachname'
								}, {
									fldtype: 'Text',
									label: 'Geburtsname',
									id: 'Recht_Rang_###1###_Bezug_###2###_BezugInAbt1_Eigentuemer_Natuer_Person_Geburtsname',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].BezugInAbt1.Eigentuemer.Natuer.Person.Geburtsname'
								}, {
									fldtype: 'Text',
									label: 'Firma/Bezeichnung',
									id: 'Recht_Rang_###1###_Bezug_###2###_BezugInAbt1_Eigentuemer_Jurist_Bez',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].BezugInAbt1.Eigentuemer.Jurist.Bez'
								}, {
									fldtype: 'Text',
									label: 'Sitz Ort',
									id: 'Recht_Rang_###1###_Bezug_###2###_BezugInAbt1_Eigentuemer_Jurist_Sitz_Ort',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].BezugInAbt1.Eigentuemer.Jurist.Sitz.Ort'
								}, {
									fldtype: 'Text',
									label: 'KöR Bezeichnung',
									id: 'Recht_Rang_###1###_Bezug_###2###_BezugInAbt1_Eigentuemer_Koerper_Name',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].BezugInAbt1.Eigentuemer.Koerper.Name'
								}, {
									fldtype: 'Text',
									label: 'Zusatz § 15 GBV',
									id: 'Recht_Rang_###1###_Bezug_###2###_BezugInAbt1_Eigentuemer_Koerper_VermTeil',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].BezugInAbt1.Eigentuemer.Koerper.VermTeil'
								}, {
									fldtype: 'Text',
									label: 'KöR Ort',
									id: 'Recht_Rang_###1###_Bezug_###2###_BezugInAbt1_Eigentuemer_Koerper_Sitz_Ort',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].BezugInAbt1.Eigentuemer.Koerper.Sitz.Ort'
								}, {
									fldtype: 'Text',
									label: 'lfd. Nr. BV',
									id: 'Recht_Rang_###1###_Bezug_###2###_BuchStelle',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].BuchStelle'
								}, {
									fldtype: 'Checkbox',
									label: 'RV Bedingung',
									id: 'Recht_Rang_###1###_Bedingung_bedingt_###2###_',
									dataRapPath: 'Recht.Rang[###1###].Bedingung.bedingt[###2###]'
								}, {
									fldtype: 'Checkbox',
									label: 'RV Befristung',
									id: 'Recht_Rang_###1###_Befristung_befristet_###2###_',
									dataRapPath: 'Recht.Rang[###1###].Befristung.befristet[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Befr. Berechnungsvorschr.',
									id: 'Recht_Rang_###1###_Befristung_Berechnung_###2###_',
									dataRapPath: 'Recht.Rang[###1###].Befristung.Berechnung[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Befr. Endtermin',
									id: 'Recht_Rang_###1###_Befristung_Ende_###2###_',
									dataRapPath: 'Recht.Rang[###1###].Befristung.Ende[###2###]'
								}
							]
						}
					}, {
						cardinality: 'n',
						opDelLastSubitem: true,
						label: 'Einschränkung Rangvermerk Zinsen',
						dynamicSubitem: {
							label: 'Einschränkung Rangvermerk Zinsen (###1###)  (###2###) ',
							inputFields: [{
									fldtype: 'Text',
									label: 'Zins % fest i. Z.',
									id: 'Recht_Rang_###1###_Bezug_###2###_Zinsen_Prozent_InZiffern',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Zinsen.Prozent.InZiffern'
								}, {
									fldtype: 'Text',
									label: 'Zins % fest i. W.',
									id: 'Recht_Rang_###1###_Bezug_###2###_Zinsen_Prozent_InWorten',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Zinsen.Prozent.InWorten'
								}, {
									fldtype: 'Text',
									label: 'Zins Intervall',
									id: 'Recht_Rang_###1###_Bezug_###2###_Zinsen_Intervall',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Zinsen.Intervall',
									codestable: 'InterestInterval.Dropdown'
								}, {
									fldtype: 'Text',
									label: 'Zins Art',
									id: 'Recht_Rang_###1###_Bezug_###2###_Zinsen_Bezeichnung',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Zinsen.Bezeichnung',
									codestable: 'Zinstyp.Dropdown+'
								}, {
									fldtype: 'Text',
									label: '% variabel',
									id: 'Recht_Rang_###1###_Bezug_###2###_Zinsen_Prozent_Berechnung',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Zinsen.Prozent.Berechnung',
									codestable: 'BerechnungsvorschriftZinsen.Auto'
								}, {
									fldtype: 'Text',
									label: 'Bezugsbetrag i. Z.',
									id: 'Recht_Rang_###1###_Bezug_###2###_Zinsen_Prozent_Betrag_Wert_InZiffern',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Zinsen.Prozent.Betrag.Wert.InZiffern'
								}, {
									fldtype: 'Text',
									label: 'Bezugsbetrag Währung KF',
									id: 'Recht_Rang_###1###_Bezug_###2###_Zinsen_Prozent_Betrag_Waehrung_InAbk',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Zinsen.Prozent.Betrag.Waehrung.InAbk',
									codestable: 'Waehrungscode.Auto'
								}, {
									fldtype: 'Text',
									label: 'Bezugsbetrag i. W.',
									id: 'Recht_Rang_###1###_Bezug_###2###_Zinsen_Prozent_Betrag_Wert_InWorten',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Zinsen.Prozent.Betrag.Wert.InWorten'
								}, {
									fldtype: 'Text',
									label: 'Bezugsbetrag Währung LF',
									id: 'Recht_Rang_###1###_Bezug_###2###_Zinsen_Prozent_Betrag_Waehrung_InWorten',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Zinsen.Prozent.Betrag.Waehrung.InWorten',
									codestable: 'WaehrungInWorten.Auto'
								}, {
									fldtype: 'Text',
									label: 'Festbetrag i. Z.',
									id: 'Recht_Rang_###1###_Bezug_###2###_Zinsen_Fest_Betrag_Wert_InZiffern',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Zinsen.Fest.Betrag.Wert.InZiffern'
								}, {
									fldtype: 'Text',
									label: 'Festbetrag Währung KF',
									id: 'Recht_Rang_###1###_Bezug_###2###_Zinsen_Fest_Betrag_Waehrung_InAbk',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Zinsen.Fest.Betrag.Waehrung.InAbk',
									codestable: 'Waehrungscode.Auto'
								}, {
									fldtype: 'Text',
									label: 'Festbetrag i. W.',
									id: 'Recht_Rang_###1###_Bezug_###2###_Zinsen_Fest_Betrag_Wert_InWorten',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Zinsen.Fest.Betrag.Wert.InWorten'
								}, {
									fldtype: 'Text',
									label: 'Festbetrag Währung LF',
									id: 'Recht_Rang_###1###_Bezug_###2###_Zinsen_Fest_Betrag_Waehrung_InWorten',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Zinsen.Fest.Betrag.Waehrung.InWorten',
									codestable: 'WaehrungInWorten.Auto'
								}, {
									fldtype: 'Date',
									label: 'Datum Beginn',
									id: 'Recht_Rang_###1###_Bezug_###2###_Zinsen_Beginn_Datum',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Zinsen.Beginn.Datum'
								}, {
									fldtype: 'Text',
									label: 'Beginn i. W.',
									id: 'Recht_Rang_###1###_Bezug_###2###_Zinsen_Beginn_InWorten',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Zinsen.Beginn.InWorten',
									codestable: 'BeginnInWorten.Auto'
								}
							]
						}
					}, {
						cardinality: 'n',
						opDelLastSubitem: true,
						label: 'Einschränkung Rangvermerk Nebenleistung',
						dynamicSubitem: {
							label: 'Einschränkung Rangvermerk Nebenleistung (###1###)  (###2###) ',
							inputFields: [{
									fldtype: 'Text',
									label: 'Nebenl. % fest i.Z.',
									id: 'Recht_Rang_###1###_Bezug_###2###_Nebenleistungen_Prozent_InZiffern',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Nebenleistungen.Prozent.InZiffern'
								}, {
									fldtype: 'Text',
									label: 'Nebenl. % fest i.W.',
									id: 'Recht_Rang_###1###_Bezug_###2###_Nebenleistungen_Prozent_InWorten',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Nebenleistungen.Prozent.InWorten'
								}, {
									fldtype: 'Text',
									label: 'Nebenl. Intervall',
									id: 'Recht_Rang_###1###_Bezug_###2###_Nebenleistungen_Intervall',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Nebenleistungen.Intervall',
									codestable: 'Nebenleistungsintervall.Dropdown'
								}, {
									fldtype: 'Text',
									label: 'Nebenleistung Art',
									id: 'Recht_Rang_###1###_Bezug_###2###_Nebenleistungen_Bezeich',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Nebenleistungen.Bezeich',
									codestable: 'Nebenleistungsbezeichnung.Auto'
								}, {
									fldtype: 'Text',
									label: 'NL variabel',
									id: 'Recht_Rang_###1###_Bezug_###2###_Nebenleistungen_Prozent_Berechnung',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Nebenleistungen.Prozent.Berechnung',
									codestable: 'BerechnungsvorschriftNebenleistungen.Auto'
								}, {
									fldtype: 'Text',
									label: 'Bezugsbetrag i. Z.',
									id: 'Recht_Rang_###1###_Bezug_###2###_Nebenleistungen_Prozent_Betrag_Wert_InZiffern',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Nebenleistungen.Prozent.Betrag.Wert.InZiffern'
								}, {
									fldtype: 'Text',
									label: 'Bezugsbetrag Währung KF',
									id: 'Recht_Rang_###1###_Bezug_###2###_Nebenleistungen_Prozent_Betrag_Waehrung_InAbk',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Nebenleistungen.Prozent.Betrag.Waehrung.InAbk',
									codestable: 'Waehrungscode.Auto'
								}, {
									fldtype: 'Text',
									label: 'Bezugsbetrag i. W.',
									id: 'Recht_Rang_###1###_Bezug_###2###_Nebenleistungen_Prozent_Betrag_Wert_InWorten',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Nebenleistungen.Prozent.Betrag.Wert.InWorten'
								}, {
									fldtype: 'Text',
									label: 'Bezugsbetrag Währung LF',
									id: 'Recht_Rang_###1###_Bezug_###2###_Nebenleistungen_Prozent_Betrag_Waehrung_InWorten',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Nebenleistungen.Prozent.Betrag.Waehrung.InWorten',
									codestable: 'WaehrungInWorten.Auto'
								}, {
									fldtype: 'Text',
									label: 'Festbetrag i. Z.',
									id: 'Recht_Rang_###1###_Bezug_###2###_Nebenleistungen_Fest_Betrag_Wert_InZiffern',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Nebenleistungen.Fest.Betrag.Wert.InZiffern'
								}, {
									fldtype: 'Text',
									label: 'Festbetrag Währung KF',
									id: 'Recht_Rang_###1###_Bezug_###2###_Nebenleistungen_Fest_Betrag_Waehrung_InAbk',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Nebenleistungen.Fest.Betrag.Waehrung.InAbk',
									codestable: 'Waehrungscode.Auto'
								}, {
									fldtype: 'Text',
									label: 'Festbetrag i. W.',
									id: 'Recht_Rang_###1###_Bezug_###2###_Nebenleistungen_Fest_Betrag_Wert_InWorten',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Nebenleistungen.Fest.Betrag.Wert.InWorten'
								}, {
									fldtype: 'Text',
									label: 'Festbetrag Währung LF',
									id: 'Recht_Rang_###1###_Bezug_###2###_Nebenleistungen_Fest_Betrag_Waehrung_InWorten',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Nebenleistungen.Fest.Betrag.Waehrung.InWorten',
									codestable: 'WaehrungInWorten.Auto'
								}, {
									fldtype: 'Date',
									label: 'Datum Beginn',
									id: 'Recht_Rang_###1###_Bezug_###2###_Nebenleistungen_Beginn_Datum',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Nebenleistungen.Beginn.Datum'
								}, {
									fldtype: 'Text',
									label: 'Beginn i. W.',
									id: 'Recht_Rang_###1###_Bezug_###2###_Nebenleistungen_Beginn_InWorten',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Nebenleistungen.Beginn.InWorten',
									codestable: 'BeginnInWorten.Auto'
								}
							]
						}
					}
				]
			}
		}, {
			opDelLastSubitem: true,
			label: 'Mithaft',
			cardinality: 'n',
			dynamicSubitem: {
				label: 'Mithaft (###1###) ',
				inputFields: [{
						fldtype: 'Text',
						label: 'Belastungsform',
						id: 'Recht_Mehrfachbelastung_Art_###1###_',
						dataRapPath: 'Recht.Mehrfachbelastung.Art[###1###]',
						codestable: 'Belastungsform.Dropdown'
					}, {
						fldtype: 'Text',
						label: 'Amtsgericht',
						id: 'Recht_Mehrfachbelastung_BezeichnungBlatt_###1###_AmtsGer',
						dataRapPath: 'Recht.Mehrfachbelastung.BezeichnungBlatt[###1###].AmtsGer'
					}, {
						fldtype: 'Text',
						label: 'Buchungsbezirk',
						id: 'Recht_Mehrfachbelastung_BezeichnungBlatt_###1###_BuchBez',
						dataRapPath: 'Recht.Mehrfachbelastung.BezeichnungBlatt[###1###].BuchBez'
					}, {
						fldtype: 'Text',
						label: 'Band',
						id: 'Recht_Mehrfachbelastung_BezeichnungBlatt_###1###_Band',
						dataRapPath: 'Recht.Mehrfachbelastung.BezeichnungBlatt[###1###].Band'
					}, {
						fldtype: 'Text',
						label: 'Blattnr.-Bereich',
						id: 'Recht_Mehrfachbelastung_BezeichnungBlatt_###1###_BlattBer',
						dataRapPath: 'Recht.Mehrfachbelastung.BezeichnungBlatt[###1###].BlattBer'
					}, {
						fldtype: 'Text',
						label: 'Blattnr',
						id: 'Recht_Mehrfachbelastung_BezeichnungBlatt_###1###_BlattNr',
						dataRapPath: 'Recht.Mehrfachbelastung.BezeichnungBlatt[###1###].BlattNr'
					}
				],
				subitems: [{
						cardinality: 'n',
						opDelLastSubitem: true,
						label: 'Weitere Blattnummern',
						dynamicSubitem: {
							label: 'Weitere Blattnummern (###1###)  (###2###) ',
							inputFields: [{
									fldtype: 'Text',
									label: 'Blattnr',
									id: 'Recht_Mehrfachbelastung_BezeichnungBlatt_###1###_BlattNr_###2###__1',
									dataRapPath: 'Recht.Mehrfachbelastung.BezeichnungBlatt[###1###].BlattNr[###2###][1]'
								}, {
									fldtype: 'Text',
									label: 'Blattnr',
									id: 'Recht_Mehrfachbelastung_BezeichnungBlatt_###1###_BlattNr_###2###__2',
									dataRapPath: 'Recht.Mehrfachbelastung.BezeichnungBlatt[###1###].BlattNr[###2###][2]'
								}, {
									fldtype: 'Text',
									label: 'Blattnr',
									id: 'Recht_Mehrfachbelastung_BezeichnungBlatt_###1###_BlattNr_###2###__3',
									dataRapPath: 'Recht.Mehrfachbelastung.BezeichnungBlatt[###1###].BlattNr[###2###][3]'
								}, {
									fldtype: 'Text',
									label: 'Blattnr',
									id: 'Recht_Mehrfachbelastung_BezeichnungBlatt_###1###_BlattNr_###2###__4',
									dataRapPath: 'Recht.Mehrfachbelastung.BezeichnungBlatt[###1###].BlattNr[###2###][4]'
								}, {
									fldtype: 'Text',
									label: 'Blattnr',
									id: 'Recht_Mehrfachbelastung_BezeichnungBlatt_###1###_BlattNr_###2###__5',
									dataRapPath: 'Recht.Mehrfachbelastung.BezeichnungBlatt[###1###].BlattNr[###2###][5]'
								}, {
									fldtype: 'Text',
									label: 'Blattnr',
									id: 'Recht_Mehrfachbelastung_BezeichnungBlatt_###1###_BlattNr_###2###__6',
									dataRapPath: 'Recht.Mehrfachbelastung.BezeichnungBlatt[###1###].BlattNr[###2###][6]'
								}, {
									fldtype: 'Text',
									label: 'Blattnr',
									id: 'Recht_Mehrfachbelastung_BezeichnungBlatt_###1###_BlattNr_###2###__7',
									dataRapPath: 'Recht.Mehrfachbelastung.BezeichnungBlatt[###1###].BlattNr[###2###][7]'
								}, {
									fldtype: 'Text',
									label: 'Blattnr',
									id: 'Recht_Mehrfachbelastung_BezeichnungBlatt_###1###_BlattNr_###2###__8',
									dataRapPath: 'Recht.Mehrfachbelastung.BezeichnungBlatt[###1###].BlattNr[###2###][8]'
								}, {
									fldtype: 'Text',
									label: 'Blattnr',
									id: 'Recht_Mehrfachbelastung_BezeichnungBlatt_###1###_BlattNr_###2###__9',
									dataRapPath: 'Recht.Mehrfachbelastung.BezeichnungBlatt[###1###].BlattNr[###2###][9]'
								}, {
									fldtype: 'Text',
									label: 'Blattnr',
									id: 'Recht_Mehrfachbelastung_BezeichnungBlatt_###1###_BlattNr_###2###__10',
									dataRapPath: 'Recht.Mehrfachbelastung.BezeichnungBlatt[###1###].BlattNr[###2###][10]'
								}, {
									fldtype: 'Text',
									label: 'Blattnr',
									id: 'Recht_Mehrfachbelastung_BezeichnungBlatt_###1###_BlattNr_###2###__11',
									dataRapPath: 'Recht.Mehrfachbelastung.BezeichnungBlatt[###1###].BlattNr[###2###][11]'
								}, {
									fldtype: 'Text',
									label: 'Blattnr',
									id: 'Recht_Mehrfachbelastung_BezeichnungBlatt_###1###_BlattNr_###2###__12',
									dataRapPath: 'Recht.Mehrfachbelastung.BezeichnungBlatt[###1###].BlattNr[###2###][12]'
								}
							]
						}
					}
				]
			}
		}, {
			opDelLastSubitem: true,
			label: 'Übertragungsvermerk',
			cardinality: '+',
			dynamicSubitem: {
				label: 'Übertragungsvermerk (###1###) ',
				inputFields: [{
						fldtype: 'Text',
						label: 'Amtsgericht',
						id: 'Recht_Uebertragungsvermerk_BezeichnungBlatt_###1###_AmtsGer',
						dataRapPath: 'Recht.Uebertragungsvermerk.BezeichnungBlatt[###1###].AmtsGer'
					}, {
						fldtype: 'Text',
						label: 'Buchungsbezirk',
						id: 'Recht_Uebertragungsvermerk_BezeichnungBlatt_###1###_BuchBez',
						dataRapPath: 'Recht.Uebertragungsvermerk.BezeichnungBlatt[###1###].BuchBez'
					}, {
						fldtype: 'Text',
						label: 'Band',
						id: 'Recht_Uebertragungsvermerk_BezeichnungBlatt_###1###_Band',
						dataRapPath: 'Recht.Uebertragungsvermerk.BezeichnungBlatt[###1###].Band'
					}, {
						fldtype: 'Text',
						label: 'Blattnr',
						id: 'Recht_Uebertragungsvermerk_BezeichnungBlatt_###1###_BlattNr',
						dataRapPath: 'Recht.Uebertragungsvermerk.BezeichnungBlatt[###1###].BlattNr'
					}, {
						fldtype: 'Text',
						label: 'Blattnr.-Bereich',
						id: 'Recht_Uebertragungsvermerk_BezeichnungBlatt_###1###_BlattBer',
						dataRapPath: 'Recht.Uebertragungsvermerk.BezeichnungBlatt[###1###].BlattBer'
					}, {
						fldtype: 'Date',
						label: 'Urspr.Eintr.-Dat.',
						id: 'Recht_Uebertragungsvermerk_UrDatum_###1###_',
						dataRapPath: 'Recht.Uebertragungsvermerk.UrDatum[###1###]'
					}, {
						fldtype: 'Text',
						label: 'Übertr. Von/aus',
						id: 'Recht_Uebertragungsvermerk_QuelleZiel_###1###_',
						dataRapPath: 'Recht.Uebertragungsvermerk.QuelleZiel[###1###]',
						codestable: 'QuelleZiel.Auto'
					}, {
						fldtype: 'Text',
						label: 'Übertr.-Grund',
						id: 'Recht_Uebertragungsvermerk_Mithaft_###1###_',
						dataRapPath: 'Recht.Uebertragungsvermerk.Mithaft[###1###]',
						codestable: 'Mithaft.Auto'
					}, {
						fldtype: 'Number',
						label: 'BV-Nr.',
						id: 'Recht_Uebertragungsvermerk_BVNr_###1###_',
						dataRapPath: 'Recht.Uebertragungsvermerk.BVNr[###1###]'
					}
				],
				subitems: [{
						cardinality: 'n',
						opDelLastSubitem: true,
						label: 'Weitere BV-Nummern',
						dynamicSubitem: {
							label: 'Weitere BV-Nummern (###1###)  (###2###) ',
							inputFields: [{
									fldtype: 'Number',
									label: 'BV-Nr.',
									id: 'Recht_Uebertragungsvermerk_BVNr_###1###__1',
									dataRapPath: 'Recht.Uebertragungsvermerk.BVNr[###1###][1]'
								}, {
									fldtype: 'Number',
									label: 'BV-Nr.',
									id: 'Recht_Uebertragungsvermerk_BVNr_###1###__2',
									dataRapPath: 'Recht.Uebertragungsvermerk.BVNr[###1###][2]'
								}, {
									fldtype: 'Number',
									label: 'BV-Nr.',
									id: 'Recht_Uebertragungsvermerk_BVNr_###1###__3',
									dataRapPath: 'Recht.Uebertragungsvermerk.BVNr[###1###][3]'
								}, {
									fldtype: 'Number',
									label: 'BV-Nr.',
									id: 'Recht_Uebertragungsvermerk_BVNr_###1###__4',
									dataRapPath: 'Recht.Uebertragungsvermerk.BVNr[###1###][4]'
								}, {
									fldtype: 'Number',
									label: 'BV-Nr.',
									id: 'Recht_Uebertragungsvermerk_BVNr_###1###__5',
									dataRapPath: 'Recht.Uebertragungsvermerk.BVNr[###1###][5]'
								}, {
									fldtype: 'Number',
									label: 'BV-Nr.',
									id: 'Recht_Uebertragungsvermerk_BVNr_###1###__6',
									dataRapPath: 'Recht.Uebertragungsvermerk.BVNr[###1###][6]'
								}, {
									fldtype: 'Number',
									label: 'BV-Nr.',
									id: 'Recht_Uebertragungsvermerk_BVNr_###1###__7',
									dataRapPath: 'Recht.Uebertragungsvermerk.BVNr[###1###][7]'
								}, {
									fldtype: 'Number',
									label: 'BV-Nr.',
									id: 'Recht_Uebertragungsvermerk_BVNr_###1###__8',
									dataRapPath: 'Recht.Uebertragungsvermerk.BVNr[###1###][8]'
								}, {
									fldtype: 'Number',
									label: 'BV-Nr.',
									id: 'Recht_Uebertragungsvermerk_BVNr_###1###__9',
									dataRapPath: 'Recht.Uebertragungsvermerk.BVNr[###1###][9]'
								}, {
									fldtype: 'Number',
									label: 'BV-Nr.',
									id: 'Recht_Uebertragungsvermerk_BVNr_###1###__10',
									dataRapPath: 'Recht.Uebertragungsvermerk.BVNr[###1###][10]'
								}, {
									fldtype: 'Number',
									label: 'BV-Nr.',
									id: 'Recht_Uebertragungsvermerk_BVNr_###1###__11',
									dataRapPath: 'Recht.Uebertragungsvermerk.BVNr[###1###][11]'
								}, {
									fldtype: 'Number',
									label: 'BV-Nr.',
									id: 'Recht_Uebertragungsvermerk_BVNr_###1###__12',
									dataRapPath: 'Recht.Uebertragungsvermerk.BVNr[###1###][12]'
								}
							]
						}
					}
				]
			}
		}, {
			opDelLastSubitem: true,
			label: 'Wirksamkeitsvermerk',
			cardinality: 'n',
			dynamicSubitem: {
				label: 'Wirksamkeitsvermerk (###1###) ',
				inputFields: [{
						fldtype: 'Text',
						label: 'Gegenrecht Art',
						id: 'Recht_Wirksamkeitsvermerk_Gegenrecht_###1###_Rechtsbezeichnung_Art',
						dataRapPath: 'Recht.Wirksamkeitsvermerk.Gegenrecht[###1###].Rechtsbezeichnung.Art',
						codestable: 'Rechtsart.Auto'
					}, {
						fldtype: 'Text',
						label: 'Abtlg.',
						id: 'Recht_Wirksamkeitsvermerk_Gegenrecht_###1###_Rechtsbezeichnung_Abteilung',
						dataRapPath: 'Recht.Wirksamkeitsvermerk.Gegenrecht[###1###].Rechtsbezeichnung.Abteilung'
					}, {
						fldtype: 'Text',
						label: 'Lfd.Nr',
						id: 'Recht_Wirksamkeitsvermerk_Gegenrecht_###1###_Rechtsbezeichnung_LfdNr',
						dataRapPath: 'Recht.Wirksamkeitsvermerk.Gegenrecht[###1###].Rechtsbezeichnung.LfdNr'
					}, {
						fldtype: 'Text',
						label: 'lfd. Nr. Bereich',
						id: 'Recht_Wirksamkeitsvermerk_Gegenrecht_###1###_Rechtsbezeichnung_BereichNr',
						dataRapPath: 'Recht.Wirksamkeitsvermerk.Gegenrecht[###1###].Rechtsbezeichnung.BereichNr'
					}, {
						fldtype: 'Checkbox',
						label: 'Wirks. ggü. Nacherb.',
						id: 'Recht_Wirksamkeitsvermerk_Gegenrecht_###1###_Nacherben',
						dataRapPath: 'Recht.Wirksamkeitsvermerk.Gegenrecht[###1###].Nacherben'
					}, {
						fldtype: 'Checkbox',
						label: 'Wirks. ggü. vorgem. Anspr.',
						id: 'Recht_Wirksamkeitsvermerk_Gegenrecht_###1###_VorgemAnspruch_VorgemAnspruch',
						dataRapPath: 'Recht.Wirksamkeitsvermerk.Gegenrecht[###1###].VorgemAnspruch.VorgemAnspruch'
					}, {
						fldtype: 'Text',
						label: 'Titel',
						id: 'Recht_Wirksamkeitsvermerk_Gegenrecht_###1###_VorgemAnspruch_Glaeubiger_normlGlaeubigerVar1_Beteiligte_Eigentuemer_Natuer_Person_Titel',
						dataRapPath: 'Recht.Wirksamkeitsvermerk.Gegenrecht[###1###].VorgemAnspruch.Glaeubiger.normlGlaeubigerVar1.Beteiligte.Eigentuemer.Natuer.Person.Titel',
						codestable: 'Titel.Dropdown+'
					}, {
						fldtype: 'Text',
						label: 'Namensvorsatz',
						id: 'Recht_Wirksamkeitsvermerk_Gegenrecht_###1###_VorgemAnspruch_Glaeubiger_normlGlaeubigerVar1_Beteiligte_Eigentuemer_Natuer_Person_NameVorsatz',
						dataRapPath: 'Recht.Wirksamkeitsvermerk.Gegenrecht[###1###].VorgemAnspruch.Glaeubiger.normlGlaeubigerVar1.Beteiligte.Eigentuemer.Natuer.Person.NameVorsatz'
					}, {
						fldtype: 'Text',
						label: 'Vorname',
						id: 'Recht_Wirksamkeitsvermerk_Gegenrecht_###1###_VorgemAnspruch_Glaeubiger_normlGlaeubigerVar1_Beteiligte_Eigentuemer_Natuer_Person_Vorname',
						dataRapPath: 'Recht.Wirksamkeitsvermerk.Gegenrecht[###1###].VorgemAnspruch.Glaeubiger.normlGlaeubigerVar1.Beteiligte.Eigentuemer.Natuer.Person.Vorname'
					}, {
						fldtype: 'Text',
						label: 'Namenszusatz',
						id: 'Recht_Wirksamkeitsvermerk_Gegenrecht_###1###_VorgemAnspruch_Glaeubiger_normlGlaeubigerVar1_Beteiligte_Eigentuemer_Natuer_Person_NameZusatz',
						dataRapPath: 'Recht.Wirksamkeitsvermerk.Gegenrecht[###1###].VorgemAnspruch.Glaeubiger.normlGlaeubigerVar1.Beteiligte.Eigentuemer.Natuer.Person.NameZusatz'
					}, {
						fldtype: 'Text',
						label: 'Nachname',
						id: 'Recht_Wirksamkeitsvermerk_Gegenrecht_###1###_VorgemAnspruch_Glaeubiger_normlGlaeubigerVar1_Beteiligte_Eigentuemer_Natuer_Person_Nachname',
						dataRapPath: 'Recht.Wirksamkeitsvermerk.Gegenrecht[###1###].VorgemAnspruch.Glaeubiger.normlGlaeubigerVar1.Beteiligte.Eigentuemer.Natuer.Person.Nachname'
					}, {
						fldtype: 'Text',
						label: 'Geburtsname',
						id: 'Recht_Wirksamkeitsvermerk_Gegenrecht_###1###_VorgemAnspruch_Glaeubiger_normlGlaeubigerVar1_Beteiligte_Eigentuemer_Natuer_Person_Geburtsname',
						dataRapPath: 'Recht.Wirksamkeitsvermerk.Gegenrecht[###1###].VorgemAnspruch.Glaeubiger.normlGlaeubigerVar1.Beteiligte.Eigentuemer.Natuer.Person.Geburtsname'
					}, {
						fldtype: 'Text',
						label: 'Firma/Bezeichnung',
						id: 'Recht_Wirksamkeitsvermerk_Gegenrecht_###1###_VorgemAnspruch_Glaeubiger_normlGlaeubigerVar1_Beteiligte_Eigentuemer_Jurist_Bez',
						dataRapPath: 'Recht.Wirksamkeitsvermerk.Gegenrecht[###1###].VorgemAnspruch.Glaeubiger.normlGlaeubigerVar1.Beteiligte.Eigentuemer.Jurist.Bez'
					}, {
						fldtype: 'Text',
						label: 'Sitz Ort',
						id: 'Recht_Wirksamkeitsvermerk_Gegenrecht_###1###_VorgemAnspruch_Glaeubiger_normlGlaeubigerVar1_Beteiligte_Eigentuemer_Jurist_Sitz_Ort',
						dataRapPath: 'Recht.Wirksamkeitsvermerk.Gegenrecht[###1###].VorgemAnspruch.Glaeubiger.normlGlaeubigerVar1.Beteiligte.Eigentuemer.Jurist.Sitz.Ort'
					}, {
						fldtype: 'Text',
						label: 'KöR Bezeichnung',
						id: 'Recht_Wirksamkeitsvermerk_Gegenrecht_###1###_VorgemAnspruch_Glaeubiger_normlGlaeubigerVar1_Beteiligte_Eigentuemer_Koerper_Name',
						dataRapPath: 'Recht.Wirksamkeitsvermerk.Gegenrecht[###1###].VorgemAnspruch.Glaeubiger.normlGlaeubigerVar1.Beteiligte.Eigentuemer.Koerper.Name'
					}, {
						fldtype: 'Text',
						label: 'Zusatz § 15 GBV',
						id: 'Recht_Wirksamkeitsvermerk_Gegenrecht_###1###_VorgemAnspruch_Glaeubiger_normlGlaeubigerVar1_Beteiligte_Eigentuemer_Koerper_VermTeil',
						dataRapPath: 'Recht.Wirksamkeitsvermerk.Gegenrecht[###1###].VorgemAnspruch.Glaeubiger.normlGlaeubigerVar1.Beteiligte.Eigentuemer.Koerper.VermTeil'
					}, {
						fldtype: 'Text',
						label: 'KöR Ort',
						id: 'Recht_Wirksamkeitsvermerk_Gegenrecht_###1###_VorgemAnspruch_Glaeubiger_normlGlaeubigerVar1_Beteiligte_Eigentuemer_Koerper_Sitz_Ort',
						dataRapPath: 'Recht.Wirksamkeitsvermerk.Gegenrecht[###1###].VorgemAnspruch.Glaeubiger.normlGlaeubigerVar1.Beteiligte.Eigentuemer.Koerper.Sitz.Ort'
					}
				],
				subitems: [{
						cardinality: 'n',
						opDelLastSubitem: true,
						label: 'Wirksames Recht',
						dynamicSubitem: {
							label: 'Wirksames Recht (###1###)  (###2###) ',
							inputFields: [{
									fldtype: 'Text',
									label: 'Art',
									id: 'Recht_Wirksamkeitsvermerk_BezWirkEintr_###1###_Rechtsbezeichnung_Art_###2###_',
									dataRapPath: 'Recht.Wirksamkeitsvermerk.BezWirkEintr[###1###].Rechtsbezeichnung.Art[###2###]',
									codestable: 'Rechtsart.Auto'
								}, {
									fldtype: 'Text',
									label: 'Abtlg.',
									id: 'Recht_Wirksamkeitsvermerk_BezWirkEintr_###1###_Rechtsbezeichnung_Abteilung_###2###_',
									dataRapPath: 'Recht.Wirksamkeitsvermerk.BezWirkEintr[###1###].Rechtsbezeichnung.Abteilung[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Lfd.Nr',
									id: 'Recht_Wirksamkeitsvermerk_BezWirkEintr_###1###_Rechtsbezeichnung_LfdNr_###2###_',
									dataRapPath: 'Recht.Wirksamkeitsvermerk.BezWirkEintr[###1###].Rechtsbezeichnung.LfdNr[###2###]'
								}
							]
						}
					}
				]
			}
		}, {
			opDelLastSubitem: true,
			label: 'Rangvorbehalt',
			cardinality: 'n',
			dynamicSubitem: {
				label: 'Rangvorbehalt (###1###) ',
				inputFields: [{
						fldtype: 'Text',
						label: 'Art',
						id: 'Recht_Rangvorbehalt_###1###_VorbehArt',
						dataRapPath: 'Recht.Rangvorbehalt[###1###].VorbehArt',
						codestable: 'Rangvorbehaltsart.Dropdown+'
					}, {
						fldtype: 'Text',
						label: 'Rechtsart',
						id: 'Recht_Rangvorbehalt_###1###_RechtsArt',
						dataRapPath: 'Recht.Rangvorbehalt[###1###].RechtsArt',
						codestable: 'Rechtsart.Auto'
					}, {
						fldtype: 'Text',
						label: 'einfach/mehrfach ausn.',
						id: 'Recht_Rangvorbehalt_###1###_Ausnutzung',
						dataRapPath: 'Recht.Rangvorbehalt[###1###].Ausnutzung',
						codestable: 'AusnutzbarkeitRangvorbehalt.Auto'
					}, {
						fldtype: 'Text',
						label: 'Betrag',
						id: 'Recht_Rangvorbehalt_###1###_Betrag_Wert_InZiffern',
						dataRapPath: 'Recht.Rangvorbehalt[###1###].Betrag.Wert.InZiffern'
					}, {
						fldtype: 'Text',
						label: 'Währung',
						id: 'Recht_Rangvorbehalt_###1###_Betrag_Waehrung_InAbk',
						dataRapPath: 'Recht.Rangvorbehalt[###1###].Betrag.Waehrung.InAbk',
						codestable: 'Waehrungscode.Auto'
					}, {
						fldtype: 'Text',
						label: 'Betrag i. W.',
						id: 'Recht_Rangvorbehalt_###1###_Betrag_Wert_InWorten',
						dataRapPath: 'Recht.Rangvorbehalt[###1###].Betrag.Wert.InWorten'
					}, {
						fldtype: 'Text',
						label: 'Betrag Währung LF',
						id: 'Recht_Rangvorbehalt_###1###_Betrag_Waehrung_InWorten',
						dataRapPath: 'Recht.Rangvorbehalt[###1###].Betrag.Waehrung.InWorten',
						codestable: 'WaehrungInWorten.Auto'
					}, {
						fldtype: 'Text',
						label: 'lfd. Nr. Abt. I',
						id: 'Recht_Rangvorbehalt_###1###_Bezug_BezugInAbt1_lfdNr',
						dataRapPath: 'Recht.Rangvorbehalt[###1###].Bezug.BezugInAbt1.lfdNr'
					}, {
						fldtype: 'Text',
						label: 'Vorname',
						id: 'Recht_Rangvorbehalt_###1###_Bezug_BezugInAbt1_Eigentuemer_Natuer_Person_Vorname',
						dataRapPath: 'Recht.Rangvorbehalt[###1###].Bezug.BezugInAbt1.Eigentuemer.Natuer.Person.Vorname'
					}, {
						fldtype: 'Text',
						label: 'Nachname',
						id: 'Recht_Rangvorbehalt_###1###_Bezug_BezugInAbt1_Eigentuemer_Natuer_Person_Nachname',
						dataRapPath: 'Recht.Rangvorbehalt[###1###].Bezug.BezugInAbt1.Eigentuemer.Natuer.Person.Nachname'
					}, {
						fldtype: 'Text',
						label: 'lfd. Nr. BV',
						id: 'Recht_Rangvorbehalt_###1###_Bezug_BuchStelle',
						dataRapPath: 'Recht.Rangvorbehalt[###1###].Bezug.BuchStelle'
					}
				],
				subitems: [{
						cardinality: 'n',
						opDelLastSubitem: true,
						label: 'weitere vorbehaltene Rechte',
						dynamicSubitem: {
							label: 'weitere vorbehaltene Rechte (###1###)  (###2###) ',
							inputFields: [{
									fldtype: 'Text',
									label: 'Rechtsart',
									id: 'Recht_Rangvorbehalt_###1###_RechtsArt_###2###__1',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].RechtsArt[###2###][1]',
									codestable: 'Rechtsart.Auto'
								}, {
									fldtype: 'Text',
									label: 'Rechtsart',
									id: 'Recht_Rangvorbehalt_###1###_RechtsArt_###2###__2',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].RechtsArt[###2###][2]',
									codestable: 'Rechtsart.Auto'
								}, {
									fldtype: 'Text',
									label: 'Rechtsart',
									id: 'Recht_Rangvorbehalt_###1###_RechtsArt_###2###__3',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].RechtsArt[###2###][3]',
									codestable: 'Rechtsart.Auto'
								}, {
									fldtype: 'Text',
									label: 'Rechtsart',
									id: 'Recht_Rangvorbehalt_###1###_RechtsArt_###2###__4',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].RechtsArt[###2###][4]',
									codestable: 'Rechtsart.Auto'
								}, {
									fldtype: 'Text',
									label: 'Rechtsart',
									id: 'Recht_Rangvorbehalt_###1###_RechtsArt_###2###__5',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].RechtsArt[###2###][5]',
									codestable: 'Rechtsart.Auto'
								}
							]
						}
					}, {
						cardinality: 'n',
						opDelLastSubitem: true,
						label: 'Rangvorbehalt Zinsen',
						dynamicSubitem: {
							label: 'Rangvorbehalt Zinsen (###1###)  (###2###) ',
							inputFields: [{
									fldtype: 'Text',
									label: 'Zins Intervall',
									id: 'Recht_Rangvorbehalt_###1###_Zinsen_###2###_Intervall',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Zinsen[###2###].Intervall',
									codestable: 'InterestInterval.Dropdown'
								}, {
									fldtype: 'Text',
									label: 'Zins Art',
									id: 'Recht_Rangvorbehalt_###1###_Zinsen_###2###_Bezeichnung',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Zinsen[###2###].Bezeichnung',
									codestable: 'Zinstyp.Dropdown+'
								}, {
									fldtype: 'Text',
									label: 'Zins % fest i. Z.',
									id: 'Recht_Rangvorbehalt_###1###_Zinsen_###2###_Prozent_InZiffern',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Zinsen[###2###].Prozent.InZiffern'
								}, {
									fldtype: 'Text',
									label: '% variabel',
									id: 'Recht_Rangvorbehalt_###1###_Zinsen_###2###_Prozent_Berechnung',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Zinsen[###2###].Prozent.Berechnung',
									codestable: 'BerechnungsvorschriftZinsen.Auto'
								}, {
									fldtype: 'Text',
									label: 'Zins % fest i. W.',
									id: 'Recht_Rangvorbehalt_###1###_Zinsen_###2###_Prozent_InWorten',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Zinsen[###2###].Prozent.InWorten'
								}, {
									fldtype: 'Text',
									label: 'Bezugsbetrag i. Z.',
									id: 'Recht_Rangvorbehalt_###1###_Zinsen_###2###_Prozent_Betrag_Wert_InZiffern',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Zinsen[###2###].Prozent.Betrag.Wert.InZiffern'
								}, {
									fldtype: 'Text',
									label: 'Bezugsbetrag Währung KF',
									id: 'Recht_Rangvorbehalt_###1###_Zinsen_###2###_Prozent_Betrag_Waehrung_InAbk',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Zinsen[###2###].Prozent.Betrag.Waehrung.InAbk',
									codestable: 'Waehrungscode.Auto'
								}, {
									fldtype: 'Text',
									label: 'Bezugsbetrag i. W.',
									id: 'Recht_Rangvorbehalt_###1###_Zinsen_###2###_Prozent_Betrag_Wert_InWorten',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Zinsen[###2###].Prozent.Betrag.Wert.InWorten'
								}, {
									fldtype: 'Text',
									label: 'Bezugsbetrag Währung LF',
									id: 'Recht_Rangvorbehalt_###1###_Zinsen_###2###_Prozent_Betrag_Waehrung_InWorten',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Zinsen[###2###].Prozent.Betrag.Waehrung.InWorten',
									codestable: 'WaehrungInWorten.Auto'
								}, {
									fldtype: 'Text',
									label: '% max.',
									id: 'Recht_Rangvorbehalt_###1###_Zinsen_###2###_ZinsBerenzung_Max',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Zinsen[###2###].ZinsBerenzung.Max'
								}, {
									fldtype: 'Date',
									label: 'Datum Beginn',
									id: 'Recht_Rangvorbehalt_###1###_Zinsen_###2###_Beginn_Datum',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Zinsen[###2###].Beginn.Datum'
								}, {
									fldtype: 'Text',
									label: 'Beginn i. W.',
									id: 'Recht_Rangvorbehalt_###1###_Zinsen_###2###_Beginn_InWorten',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Zinsen[###2###].Beginn.InWorten',
									codestable: 'BeginnInWorten.Auto'
								}
							]
						}
					}, {
						cardinality: 'n',
						opDelLastSubitem: true,
						label: 'Rangvorbehalt Nebenleistung ',
						dynamicSubitem: {
							label: 'Rangvorbehalt Nebenleistung  (###1###)  (###2###) ',
							inputFields: [{
									fldtype: 'Text',
									label: 'Nebenleistung Art',
									id: 'Recht_Rangvorbehalt_###1###_Nebenleistungen_###2###_Bezeich',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Nebenleistungen[###2###].Bezeich',
									codestable: 'Nebenleistungsbezeichnung.Auto'
								}, {
									fldtype: 'Text',
									label: 'Nebenl. Intervall',
									id: 'Recht_Rangvorbehalt_###1###_Nebenleistungen_###2###_Intervall',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Nebenleistungen[###2###].Intervall',
									codestable: 'Nebenleistungsintervall.Dropdown'
								}, {
									fldtype: 'Text',
									label: 'Nebenl. % fest i.Z.',
									id: 'Recht_Rangvorbehalt_###1###_Nebenleistungen_###2###_Prozent_InZiffern',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Nebenleistungen[###2###].Prozent.InZiffern'
								}, {
									fldtype: 'Text',
									label: 'NL variabel',
									id: 'Recht_Rangvorbehalt_###1###_Nebenleistungen_###2###_Prozent_Berechnung',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Nebenleistungen[###2###].Prozent.Berechnung',
									codestable: 'BerechnungsvorschriftNebenleistungen.Auto'
								}, {
									fldtype: 'Text',
									label: 'Nebenl. % fest i.W.',
									id: 'Recht_Rangvorbehalt_###1###_Nebenleistungen_###2###_Prozent_InWorten',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Nebenleistungen[###2###].Prozent.InWorten'
								}, {
									fldtype: 'Text',
									label: 'Bezugsbetrag i. Z.',
									id: 'Recht_Rangvorbehalt_###1###_Nebenleistungen_###2###_Prozent_Betrag_Wert_InZiffern',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Nebenleistungen[###2###].Prozent.Betrag.Wert.InZiffern'
								}, {
									fldtype: 'Text',
									label: 'Bezugsbetrag Währung KF',
									id: 'Recht_Rangvorbehalt_###1###_Nebenleistungen_###2###_Prozent_Betrag_Waehrung_InAbk',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Nebenleistungen[###2###].Prozent.Betrag.Waehrung.InAbk',
									codestable: 'Waehrungscode.Auto'
								}, {
									fldtype: 'Text',
									label: 'Bezugsbetrag i. W.',
									id: 'Recht_Rangvorbehalt_###1###_Nebenleistungen_###2###_Prozent_Betrag_Wert_InWorten',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Nebenleistungen[###2###].Prozent.Betrag.Wert.InWorten'
								}, {
									fldtype: 'Text',
									label: 'Bezugsbetrag Währung LF',
									id: 'Recht_Rangvorbehalt_###1###_Nebenleistungen_###2###_Prozent_Betrag_Waehrung_InWorten',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Nebenleistungen[###2###].Prozent.Betrag.Waehrung.InWorten',
									codestable: 'WaehrungInWorten.Auto'
								}, {
									fldtype: 'Date',
									label: 'Datum Beginn',
									id: 'Recht_Rangvorbehalt_###1###_Nebenleistungen_###2###_Beginn_Datum',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Nebenleistungen[###2###].Beginn.Datum'
								}, {
									fldtype: 'Text',
									label: 'Beginn i. W.',
									id: 'Recht_Rangvorbehalt_###1###_Nebenleistungen_###2###_Beginn_InWorten',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Nebenleistungen[###2###].Beginn.InWorten',
									codestable: 'BeginnInWorten.Auto'
								}, {
									fldtype: 'Checkbox',
									label: 'Bedingt',
									id: 'Recht_Rangvorbehalt_###1###_Nebenleistungen_###2###_Bedingung_bedingt',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Nebenleistungen[###2###].Bedingung.bedingt'
								}, {
									fldtype: 'Checkbox',
									label: 'Befristet',
									id: 'Recht_Rangvorbehalt_###1###_Nebenleistungen_###2###_Befristung_befristet',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Nebenleistungen[###2###].Befristung.befristet'
								}
							]
						}
					}, {
						cardinality: 'n',
						opDelLastSubitem: true,
						label: 'Rangvorbehalt Ber. Nat. Pers.',
						dynamicSubitem: {
							label: 'Rangvorbehalt Ber. Nat. Pers. (###1###)  (###2###) ',
							inputFields: [{
									fldtype: 'Text',
									label: 'Titel',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Natuer_Person_Titel',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Natuer.Person.Titel',
									codestable: 'Titel.Dropdown+'
								}, {
									fldtype: 'Text',
									label: 'Namensvorsatz',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Natuer_Person_NameVorsatz',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Natuer.Person.NameVorsatz'
								}, {
									fldtype: 'Text',
									label: 'Vorname',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Natuer_Person_Vorname',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Natuer.Person.Vorname'
								}, {
									fldtype: 'Text',
									label: 'Rufname',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Natuer_Person_NameGenannt',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Natuer.Person.NameGenannt'
								}, {
									fldtype: 'Text',
									label: 'Namenszusatz',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Natuer_Person_NameZusatz',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Natuer.Person.NameZusatz'
								}, {
									fldtype: 'Text',
									label: 'Nachname ',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Natuer_Person_Nachname',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Natuer.Person.Nachname'
								}, {
									fldtype: 'Text',
									label: 'Geburtsname',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Natuer_Person_Geburtsname',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Natuer.Person.Geburtsname'
								}, {
									fldtype: 'Date',
									label: 'Geburtsdatum',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Natuer_Person_Geburtsdatum',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Natuer.Person.Geburtsdatum'
								}, {
									fldtype: 'Text',
									label: 'PLZ',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Natuer_Person_PLZ',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Natuer.Person.PLZ'
								}, {
									fldtype: 'Text',
									label: 'Wohnort',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Natuer_Person_Ort',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Natuer.Person.Ort'
								}, {
									fldtype: 'Text',
									label: 'Straße',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Natuer_Person_Strasse',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Natuer.Person.Strasse'
								}, {
									fldtype: 'Text',
									label: 'Haus-Nr.',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Natuer_Person_HausNr',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Natuer.Person.HausNr'
								}, {
									fldtype: 'Text',
									label: 'Beruf',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Natuer_Person_Beruf',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Natuer.Person.Beruf'
								}
							]
						}
					}, {
						cardinality: 'n',
						opDelLastSubitem: true,
						label: 'Rangvorbehalt Ber. Jur. Pers',
						dynamicSubitem: {
							label: 'Rangvorbehalt Ber. Jur. Pers (###1###)  (###2###) ',
							inputFields: [{
									fldtype: 'Text',
									label: 'Firma/Bezeichnung',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Jurist_Bez',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Jurist.Bez'
								}, {
									fldtype: 'Text',
									label: 'Sitz PLZ',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Jurist_Sitz_PLZ_1',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Jurist.Sitz.PLZ[1]'
								}, {
									fldtype: 'Text',
									label: 'Sitz PLZ',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Jurist_Sitz_PLZ_2',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Jurist.Sitz.PLZ[2]'
								}, {
									fldtype: 'Text',
									label: 'Sitz PLZ',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Jurist_Sitz_PLZ_3',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Jurist.Sitz.PLZ[3]'
								}, {
									fldtype: 'Text',
									label: 'Sitz Ort',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Jurist_Sitz_Ort_1',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Jurist.Sitz.Ort[1]'
								}, {
									fldtype: 'Text',
									label: 'Sitz Ort',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Jurist_Sitz_Ort_2',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Jurist.Sitz.Ort[2]'
								}, {
									fldtype: 'Text',
									label: 'Sitz Ort',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Jurist_Sitz_Ort_3',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Jurist.Sitz.Ort[3]'
								}, {
									fldtype: 'Text',
									label: 'Reg.Gericht',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Jurist_Register_Gericht',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Jurist.Register.Gericht'
								}, {
									fldtype: 'Text',
									label: 'Reg.Art',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Jurist_Register_Art',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Jurist.Register.Art',
									codestable: 'Registerart.Dropdown+'
								}, {
									fldtype: 'Number',
									label: 'Reg.Nr',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Jurist_Register_Nr',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Jurist.Register.Nr'
								}
							]
						}
					}, {
						cardinality: 'n',
						opDelLastSubitem: true,
						label: 'Rangvorbehalt Ber. KöR',
						dynamicSubitem: {
							label: 'Rangvorbehalt Ber. KöR (###1###)  (###2###) ',
							inputFields: [{
									fldtype: 'Text',
									label: 'KöR Bezeichnung',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Koerper_Name',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Koerper.Name'
								}, {
									fldtype: 'Text',
									label: 'Zusatz § 15 GBV',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Koerper_VermTeil',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Koerper.VermTeil'
								}, {
									fldtype: 'Text',
									label: 'KöR Ort',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Koerper_Sitz_Ort',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Koerper.Sitz.Ort'
								}
							]
						}
					}
				]
			}
		}, {
			opDelLastSubitem: true,
			label: 'Abtretungsvermerk',
			cardinality: '+',
			dynamicSubitem: {
				label: 'Abtretungsvermerk (###1###) ',
				inputFields: [{
						fldtype: 'Checkbox',
						label: 'Abtr.-Verm.',
						id: 'Recht_Abtrvermerk_Art_###1###_',
						dataRapPath: 'Recht.Abtrvermerk.Art[###1###]'
					}, {
						fldtype: 'Checkbox',
						label: 'Abtr. Zins',
						id: 'Recht_Abtrvermerk_AbtrZinsen_###1###_Bezeichnung',
						dataRapPath: 'Recht.Abtrvermerk.AbtrZinsen[###1###].Bezeichnung'
					}, {
						fldtype: 'Date',
						label: 'Abtr. Zins ab Datum',
						id: 'Recht_Abtrvermerk_AbtrZinsen_###1###_Beginn_Datum',
						dataRapPath: 'Recht.Abtrvermerk.AbtrZinsen[###1###].Beginn.Datum'
					}, {
						fldtype: 'Text',
						label: 'Abtr. Zins ab Beschr.',
						id: 'Recht_Abtrvermerk_AbtrZinsen_###1###_Beginn_InWorten',
						dataRapPath: 'Recht.Abtrvermerk.AbtrZinsen[###1###].Beginn.InWorten',
						codestable: 'BeginnInWorten.Auto'
					}, {
						fldtype: 'Text',
						label: 'Abtr. NL',
						id: 'Recht_Abtrvermerk_AbtrNebLstg_###1###_Bezeichnung',
						dataRapPath: 'Recht.Abtrvermerk.AbtrNebLstg[###1###].Bezeichnung'
					}, {
						fldtype: 'Date',
						label: 'Abtr. NL ab Datum',
						id: 'Recht_Abtrvermerk_AbtrNebLstg_###1###_Beginn_Datum',
						dataRapPath: 'Recht.Abtrvermerk.AbtrNebLstg[###1###].Beginn.Datum'
					}, {
						fldtype: 'Text',
						label: 'Abtr. NL ab Beschr.',
						id: 'Recht_Abtrvermerk_AbtrNebLstg_###1###_Beginn_InWorten',
						dataRapPath: 'Recht.Abtrvermerk.AbtrNebLstg[###1###].Beginn.InWorten',
						codestable: 'BeginnInWorten.Auto'
					}
				]
			}
		}
	],
	AbtIIIEVormerkung: [{
			label: 'Allgemeine Parameter',
			cardinality: '1',
			inputFields: [{
					fldtype: 'Text',
					label: 'lfd. Nr.',
					id: 'BuchGgst_lfdNr',
					dataRapPath: 'BuchGgst.lfdNr'
				}, {
					fldtype: 'Text',
					label: 'lfd. Nr. BV',
					id: 'BuchGgst_eingtRecht_belastGgst',
					dataRapPath: 'BuchGgst.eingtRecht.belastGgst'
				}, {
					fldtype: 'Text',
					label: 'Betrag i. Z.',
					id: 'SpalteBetrag_Ursp_Wert',
					dataRapPath: 'SpalteBetrag.Ursp.Wert'
				}, {
					fldtype: 'Text',
					label: 'Währung i. KF',
					id: 'SpalteBetrag_Ursp_Waehrung',
					dataRapPath: 'SpalteBetrag.Ursp.Waehrung',
					codestable: 'Waehrungscode.Auto'
				}
			],
			subitems: [{
					cardinality: 'n',
					opDelLastSubitem: true,
					label: 'Weitere BV-Nummern',
					dynamicSubitem: {
						label: 'Weitere BV-Nummern (###1###) ',
						inputFields: [{
								fldtype: 'Text',
								label: 'lfd. Nr. BV',
								id: 'BuchGgst_eingtRecht_belastGgst_###1###_',
								dataRapPath: 'BuchGgst.eingtRecht.belastGgst[###1###]'
							}
						]
					}
				}, {
					cardinality: 'n',
					opDelLastSubitem: true,
					label: 'Anteilsbelastung',
					dynamicSubitem: {
						label: 'Anteilsbelastung (###1###) ',
						inputFields: [{
								fldtype: 'Number',
								label: 'Ant. Zähler',
								id: 'Recht_Anteilsbelastung_BezugInAbt1_###1###_Anteil_InZiffern_Bruch_Zaehler',
								dataRapPath: 'Recht.Anteilsbelastung.BezugInAbt1[###1###].Anteil.InZiffern.Bruch.Zaehler'
							}, {
								fldtype: 'Number',
								label: 'Ant. Nenner',
								id: 'Recht_Anteilsbelastung_BezugInAbt1_###1###_Anteil_InZiffern_Bruch_Nenner',
								dataRapPath: 'Recht.Anteilsbelastung.BezugInAbt1[###1###].Anteil.InZiffern.Bruch.Nenner'
							}, {
								fldtype: 'Text',
								label: 'Ant. Sonst.',
								id: 'Recht_Anteilsbelastung_BezugInAbt1_###1###_Anteil_InZiffern_Dezimal',
								dataRapPath: 'Recht.Anteilsbelastung.BezugInAbt1[###1###].Anteil.InZiffern.Dezimal'
							}, {
								fldtype: 'Text',
								label: 'Ant. i. W',
								id: 'Recht_Anteilsbelastung_BezugInAbt1_###1###_Anteil_InWorten',
								dataRapPath: 'Recht.Anteilsbelastung.BezugInAbt1[###1###].Anteil.InWorten'
							}, {
								fldtype: 'Checkbox',
								label: 'ehem. Ant.',
								id: 'Recht_Anteilsbelastung_BezugInAbt1_###1###_ehemAnteil',
								dataRapPath: 'Recht.Anteilsbelastung.BezugInAbt1[###1###].ehemAnteil'
							}, {
								fldtype: 'Text',
								label: 'lfd. Nr. Abt. I',
								id: 'Recht_Anteilsbelastung_BezugInAbt1_###1###_lfdNr',
								dataRapPath: 'Recht.Anteilsbelastung.BezugInAbt1[###1###].lfdNr'
							}, {
								fldtype: 'Text',
								label: 'Titel',
								id: 'Recht_Anteilsbelastung_BezugInAbt1_###1###_Eigentuemer_Natuer_Person_Titel',
								dataRapPath: 'Recht.Anteilsbelastung.BezugInAbt1[###1###].Eigentuemer.Natuer.Person.Titel',
								codestable: 'Titel.Dropdown+'
							}, {
								fldtype: 'Text',
								label: 'Namensvorsatz',
								id: 'Recht_Anteilsbelastung_BezugInAbt1_###1###_Eigentuemer_Natuer_Person_NameVorsatz',
								dataRapPath: 'Recht.Anteilsbelastung.BezugInAbt1[###1###].Eigentuemer.Natuer.Person.NameVorsatz'
							}, {
								fldtype: 'Text',
								label: 'Vorname',
								id: 'Recht_Anteilsbelastung_BezugInAbt1_###1###_Eigentuemer_Natuer_Person_Vorname',
								dataRapPath: 'Recht.Anteilsbelastung.BezugInAbt1[###1###].Eigentuemer.Natuer.Person.Vorname'
							}, {
								fldtype: 'Text',
								label: 'Namenszusatz',
								id: 'Recht_Anteilsbelastung_BezugInAbt1_###1###_Eigentuemer_Natuer_Person_NameZusatz',
								dataRapPath: 'Recht.Anteilsbelastung.BezugInAbt1[###1###].Eigentuemer.Natuer.Person.NameZusatz'
							}, {
								fldtype: 'Text',
								label: 'Nachname',
								id: 'Recht_Anteilsbelastung_BezugInAbt1_###1###_Eigentuemer_Natuer_Person_Nachname',
								dataRapPath: 'Recht.Anteilsbelastung.BezugInAbt1[###1###].Eigentuemer.Natuer.Person.Nachname'
							}, {
								fldtype: 'Text',
								label: 'Geburtsname',
								id: 'Recht_Anteilsbelastung_BezugInAbt1_###1###_Eigentuemer_Natuer_Person_Geburtsname',
								dataRapPath: 'Recht.Anteilsbelastung.BezugInAbt1[###1###].Eigentuemer.Natuer.Person.Geburtsname'
							}, {
								fldtype: 'Text',
								label: 'Firma/Bezeichnung',
								id: 'Recht_Anteilsbelastung_BezugInAbt1_###1###_Eigentuemer_Jurist_Bez',
								dataRapPath: 'Recht.Anteilsbelastung.BezugInAbt1[###1###].Eigentuemer.Jurist.Bez'
							}, {
								fldtype: 'Text',
								label: 'Sitz Ort',
								id: 'Recht_Anteilsbelastung_BezugInAbt1_###1###_Eigentuemer_Jurist_Sitz_Ort',
								dataRapPath: 'Recht.Anteilsbelastung.BezugInAbt1[###1###].Eigentuemer.Jurist.Sitz.Ort'
							}, {
								fldtype: 'Text',
								label: 'KöR Bezeichnung',
								id: 'Recht_Anteilsbelastung_BezugInAbt1_###1###_Eigentuemer_Koerper_Name',
								dataRapPath: 'Recht.Anteilsbelastung.BezugInAbt1[###1###].Eigentuemer.Koerper.Name'
							}, {
								fldtype: 'Text',
								label: 'Zusatz § 15 GBV',
								id: 'Recht_Anteilsbelastung_BezugInAbt1_###1###_Eigentuemer_Koerper_VermTeil',
								dataRapPath: 'Recht.Anteilsbelastung.BezugInAbt1[###1###].Eigentuemer.Koerper.VermTeil'
							}, {
								fldtype: 'Text',
								label: 'KöR Ort',
								id: 'Recht_Anteilsbelastung_BezugInAbt1_###1###_Eigentuemer_Koerper_Sitz_Ort',
								dataRapPath: 'Recht.Anteilsbelastung.BezugInAbt1[###1###].Eigentuemer.Koerper.Sitz.Ort'
							}
						]
					}
				}, {
					cardinality: 'n',
					opDelLastSubitem: true,
					label: 'Teilflächenbelastung ',
					dynamicSubitem: {
						label: 'Teilflächenbelastung  (###1###) ',
						inputFields: [{
								fldtype: 'Number',
								label: 'Teilfl. BV-Nr.',
								id: 'Recht_Teilflaechenbelastung_###1###_Flurstuecke_betroffenesFlurstueck_BVNr',
								dataRapPath: 'Recht.Teilflaechenbelastung[###1###].Flurstuecke.betroffenesFlurstueck.BVNr'
							}, {
								fldtype: 'Checkbox',
								label: 'ehem. Flst.',
								id: 'Recht_Teilflaechenbelastung_###1###_Flurstuecke_ehemalig',
								dataRapPath: 'Recht.Teilflaechenbelastung[###1###].Flurstuecke.ehemalig'
							}, {
								fldtype: 'Text',
								label: 'Gemarkung',
								id: 'Recht_Teilflaechenbelastung_###1###_Flurstuecke_betroffenesFlurstueck_Gemark',
								dataRapPath: 'Recht.Teilflaechenbelastung[###1###].Flurstuecke.betroffenesFlurstueck.Gemark'
							}, {
								fldtype: 'Number',
								label: 'Flur',
								id: 'Recht_Teilflaechenbelastung_###1###_Flurstuecke_betroffenesFlurstueck_Flur',
								dataRapPath: 'Recht.Teilflaechenbelastung[###1###].Flurstuecke.betroffenesFlurstueck.Flur'
							}, {
								fldtype: 'Number',
								label: 'Flst. Zähler',
								id: 'Recht_Teilflaechenbelastung_###1###_Flurstuecke_betroffenesFlurstueck_FlurNr_Zaehler',
								dataRapPath: 'Recht.Teilflaechenbelastung[###1###].Flurstuecke.betroffenesFlurstueck.FlurNr.Zaehler'
							}, {
								fldtype: 'Number',
								label: 'Flst. Nenner',
								id: 'Recht_Teilflaechenbelastung_###1###_Flurstuecke_betroffenesFlurstueck_FlurNr_Nenner',
								dataRapPath: 'Recht.Teilflaechenbelastung[###1###].Flurstuecke.betroffenesFlurstueck.FlurNr.Nenner'
							}
						]
					}
				}
			]
		}, {
			label: 'Vormerkung Abt. III',
			cardinality: '1',
			inputFields: [{
					fldtype: 'Text',
					label: 'Vorm.-Inhalt',
					id: 'Recht_Vormerkung_Inhalt',
					dataRapPath: 'Recht.Vormerkung.Inhalt',
					codestable: 'Vormerkungsinhalt.Auto'
				}, {
					fldtype: 'Checkbox',
					label: 'Umschr. Vorm.',
					id: 'Recht_UmschreibungAusVormerkung',
					dataRapPath: 'Recht.UmschreibungAusVormerkung'
				}, {
					fldtype: 'Checkbox',
					label: 'Umschr. Widerspr.',
					id: 'Recht_UmschreibungAusWiderspruch',
					dataRapPath: 'Recht.UmschreibungAusWiderspruch'
				}
			],
		}, {
			label: 'Recht Abteilung III',
			cardinality: '1',
			inputFields: [{
					fldtype: 'Text',
					label: 'Rechtsart',
					id: 'Recht_Art',
					dataRapPath: 'Recht.Art',
					codestable: 'BelastungstypAbt3.Dropdown'
				}, {
					fldtype: 'Text',
					label: 'Betrag i.W.',
					id: 'Recht_Betrag_Wert_InWorten',
					dataRapPath: 'Recht.Betrag.Wert.InWorten'
				}, {
					fldtype: 'Text',
					label: 'Währung i. LF',
					id: 'Recht_Betrag_Waehrung_InWorten',
					dataRapPath: 'Recht.Betrag.Waehrung.InWorten',
					codestable: 'WaehrungInWorten.Auto'
				}, {
					fldtype: 'Checkbox',
					label: 'o.Brief',
					id: 'Recht_Brieflos',
					dataRapPath: 'Recht.Brieflos'
				}, {
					fldtype: 'Text',
					label: '§800 ZPO',
					id: 'Recht_Vollstreckbarkeit_Vollstreckbar',
					dataRapPath: 'Recht.Vollstreckbarkeit.Vollstreckbar',
					codestable: 'Vollstreckbarkeit.Dropdown+'
				}, {
					fldtype: 'Date',
					label: 'Unterschr.-Datum',
					id: 'Recht_EintrDatum',
					dataRapPath: 'Recht.EintrDatum'
				}
			],
			subitems: [{
					cardinality: '+',
					opDelLastSubitem: true,
					label: 'Einschr. Vollstreckbarkeit allg',
					dynamicSubitem: {
						label: 'Einschr. Vollstreckbarkeit allg (###1###) ',
						inputFields: [{
								fldtype: 'Text',
								label: 'Betrag i.W.',
								id: 'Recht_Vollstreckbarkeit_Teil_Betrag_Wert_InWorten_###1###_',
								dataRapPath: 'Recht.Vollstreckbarkeit.Teil.Betrag.Wert.InWorten[###1###]'
							}, {
								fldtype: 'Text',
								label: 'Währung lang',
								id: 'Recht_Vollstreckbarkeit_Teil_Betrag_Waehrung_InWorten_###1###_',
								dataRapPath: 'Recht.Vollstreckbarkeit.Teil.Betrag.Waehrung.InWorten[###1###]',
								codestable: 'WaehrungInWorten.Auto'
							}, {
								fldtype: 'Text',
								label: 'Betrag i. Z.',
								id: 'Recht_Vollstreckbarkeit_Teil_Betrag_Wert_InZiffern_###1###_',
								dataRapPath: 'Recht.Vollstreckbarkeit.Teil.Betrag.Wert.InZiffern[###1###]'
							}, {
								fldtype: 'Text',
								label: 'Währung i. KF',
								id: 'Recht_Vollstreckbarkeit_Teil_Betrag_Waehrung_InAbk_###1###_',
								dataRapPath: 'Recht.Vollstreckbarkeit.Teil.Betrag.Waehrung.InAbk[###1###]',
								codestable: 'Waehrungscode.Auto'
							}, {
								fldtype: 'Text',
								label: 'Zusatz',
								id: 'Recht_Vollstreckbarkeit_Teil_Zusatz_###1###_',
								dataRapPath: 'Recht.Vollstreckbarkeit.Teil.Zusatz[###1###]'
							}
						]
					}
				}, {
					cardinality: 'n',
					opDelLastSubitem: true,
					label: 'Einschr. Vollstreckbarkeit MEA/BuSt.',
					dynamicSubitem: {
						label: 'Einschr. Vollstreckbarkeit MEA/BuSt. (###1###) ',
						inputFields: [{
								fldtype: 'Text',
								label: 'lfd. Nr. BV',
								id: 'Recht_Vollstreckbarkeit_BVNr_###1###_',
								dataRapPath: 'Recht.Vollstreckbarkeit.BVNr[###1###]'
							}, {
								fldtype: 'Number',
								label: 'Ant. Zähler',
								id: 'Recht_Vollstreckbarkeit_BezugInAbt1_###1###_Anteil_InZiffern_Bruch_Zaehler',
								dataRapPath: 'Recht.Vollstreckbarkeit.BezugInAbt1[###1###].Anteil.InZiffern.Bruch.Zaehler'
							}, {
								fldtype: 'Number',
								label: 'Ant. Nenner',
								id: 'Recht_Vollstreckbarkeit_BezugInAbt1_###1###_Anteil_InZiffern_Bruch_Nenner',
								dataRapPath: 'Recht.Vollstreckbarkeit.BezugInAbt1[###1###].Anteil.InZiffern.Bruch.Nenner'
							}, {
								fldtype: 'Text',
								label: 'Ant. Sonst.',
								id: 'Recht_Vollstreckbarkeit_BezugInAbt1_###1###_Anteil_InZiffern_Dezimal',
								dataRapPath: 'Recht.Vollstreckbarkeit.BezugInAbt1[###1###].Anteil.InZiffern.Dezimal'
							}, {
								fldtype: 'Text',
								label: 'Ant. i. W',
								id: 'Recht_Vollstreckbarkeit_BezugInAbt1_###1###_Anteil_InWorten',
								dataRapPath: 'Recht.Vollstreckbarkeit.BezugInAbt1[###1###].Anteil.InWorten'
							}, {
								fldtype: 'Text',
								label: 'lfd. Nr. Abt. I',
								id: 'Recht_Vollstreckbarkeit_BezugInAbt1_###1###_lfdNr',
								dataRapPath: 'Recht.Vollstreckbarkeit.BezugInAbt1[###1###].lfdNr'
							}, {
								fldtype: 'Text',
								label: 'Titel',
								id: 'Recht_Vollstreckbarkeit_BezugInAbt1_###1###_Eigentuemer_Natuer_Person_Titel',
								dataRapPath: 'Recht.Vollstreckbarkeit.BezugInAbt1[###1###].Eigentuemer.Natuer.Person.Titel',
								codestable: 'Titel.Dropdown+'
							}, {
								fldtype: 'Text',
								label: 'Namensvorsatz',
								id: 'Recht_Vollstreckbarkeit_BezugInAbt1_###1###_Eigentuemer_Natuer_Person_NameVorsatz',
								dataRapPath: 'Recht.Vollstreckbarkeit.BezugInAbt1[###1###].Eigentuemer.Natuer.Person.NameVorsatz'
							}, {
								fldtype: 'Text',
								label: 'Vorname',
								id: 'Recht_Vollstreckbarkeit_BezugInAbt1_###1###_Eigentuemer_Natuer_Person_Vorname',
								dataRapPath: 'Recht.Vollstreckbarkeit.BezugInAbt1[###1###].Eigentuemer.Natuer.Person.Vorname'
							}, {
								fldtype: 'Text',
								label: 'Namenszusatz',
								id: 'Recht_Vollstreckbarkeit_BezugInAbt1_###1###_Eigentuemer_Natuer_Person_NameZusatz',
								dataRapPath: 'Recht.Vollstreckbarkeit.BezugInAbt1[###1###].Eigentuemer.Natuer.Person.NameZusatz'
							}, {
								fldtype: 'Text',
								label: 'Nachname',
								id: 'Recht_Vollstreckbarkeit_BezugInAbt1_###1###_Eigentuemer_Natuer_Person_Nachname',
								dataRapPath: 'Recht.Vollstreckbarkeit.BezugInAbt1[###1###].Eigentuemer.Natuer.Person.Nachname'
							}, {
								fldtype: 'Text',
								label: 'Geburtsname',
								id: 'Recht_Vollstreckbarkeit_BezugInAbt1_###1###_Eigentuemer_Natuer_Person_Geburtsname',
								dataRapPath: 'Recht.Vollstreckbarkeit.BezugInAbt1[###1###].Eigentuemer.Natuer.Person.Geburtsname'
							}, {
								fldtype: 'Text',
								label: 'Firma/Bezeichnung',
								id: 'Recht_Vollstreckbarkeit_BezugInAbt1_###1###_Eigentuemer_Jurist_Bez',
								dataRapPath: 'Recht.Vollstreckbarkeit.BezugInAbt1[###1###].Eigentuemer.Jurist.Bez'
							}, {
								fldtype: 'Text',
								label: 'Sitz Ort',
								id: 'Recht_Vollstreckbarkeit_BezugInAbt1_###1###_Eigentuemer_Jurist_Sitz_Ort',
								dataRapPath: 'Recht.Vollstreckbarkeit.BezugInAbt1[###1###].Eigentuemer.Jurist.Sitz.Ort'
							}, {
								fldtype: 'Text',
								label: 'KöR Bezeichnung',
								id: 'Recht_Vollstreckbarkeit_BezugInAbt1_###1###_Eigentuemer_Koerper_Name',
								dataRapPath: 'Recht.Vollstreckbarkeit.BezugInAbt1[###1###].Eigentuemer.Koerper.Name'
							}, {
								fldtype: 'Text',
								label: 'Zusatz § 15 GBV',
								id: 'Recht_Vollstreckbarkeit_BezugInAbt1_###1###_Eigentuemer_Koerper_VermTeil',
								dataRapPath: 'Recht.Vollstreckbarkeit.BezugInAbt1[###1###].Eigentuemer.Koerper.VermTeil'
							}, {
								fldtype: 'Text',
								label: 'KöR Ort',
								id: 'Recht_Vollstreckbarkeit_BezugInAbt1_###1###_Eigentuemer_Koerper_Sitz_Ort',
								dataRapPath: 'Recht.Vollstreckbarkeit.BezugInAbt1[###1###].Eigentuemer.Koerper.Sitz.Ort'
							}
						]
					}
				}, {
					cardinality: 'n',
					opDelLastSubitem: true,
					label: 'Recht Abteilung III sonstiges',
					dynamicSubitem: {
						label: 'Recht Abteilung III sonstiges (###1###) ',
						inputFields: [{
								fldtype: 'Checkbox',
								label: 'Bed.',
								id: 'Recht_Bedingung_bedingt_###1###_',
								dataRapPath: 'Recht.Bedingung.bedingt[###1###]'
							}, {
								fldtype: 'Text',
								label: 'Bed. Text',
								id: 'Recht_Bedingung_Text_###1###_',
								dataRapPath: 'Recht.Bedingung.Text[###1###]'
							}, {
								fldtype: 'Text',
								label: 'Bed. Art',
								id: 'Recht_Bedingung_Art_###1###_',
								dataRapPath: 'Recht.Bedingung.Art[###1###]',
								codestable: 'BedingungP10ZVG.Auto'
							}, {
								fldtype: 'Checkbox',
								label: 'Befr.',
								id: 'Recht_Befristung_befristet_###1###_',
								dataRapPath: 'Recht.Befristung.befristet[###1###]'
							}, {
								fldtype: 'Text',
								label: 'Befr. Berechnungsvorschr.',
								id: 'Recht_Befristung_Berechnung_###1###_',
								dataRapPath: 'Recht.Befristung.Berechnung[###1###]'
							}, {
								fldtype: 'Text',
								label: 'Befr. Endtermin',
								id: 'Recht_Befristung_Ende_###1###_',
								dataRapPath: 'Recht.Befristung.Ende[###1###]'
							}, {
								fldtype: 'Text',
								label: 'Verf.-Beschr.',
								id: 'Recht_VerfBeschr_###1###_',
								dataRapPath: 'Recht.VerfBeschr[###1###]'
							}, {
								fldtype: 'Text',
								label: 'LöschAusschl',
								id: 'Recht_AusschlussLoeschungsanspruch_AusschlLoeAnsp_###1###_',
								dataRapPath: 'Recht.AusschlussLoeschungsanspruch.AusschlLoeAnsp[###1###]'
							}, {
								fldtype: 'Text',
								label: 'LöschAusschl. Vorschr.',
								id: 'Recht_AusschlussLoeschungsanspruch_Paragraph_###1###_',
								dataRapPath: 'Recht.AusschlussLoeschungsanspruch.Paragraph[###1###]',
								codestable: 'Ausschluss1179Paragraph.Auto'
							}, {
								fldtype: 'Checkbox',
								label: 'LöschAusschl. teilw.',
								id: 'Recht_AusschlussLoeschungsanspruch_teilweise_###1###_',
								dataRapPath: 'Recht.AusschlussLoeschungsanspruch.teilweise[###1###]'
							}, {
								fldtype: 'Text',
								label: 'LöschAusschl. Recht Abt.',
								id: 'Recht_Rang_###1###_Recht_Rechtsbezeichnung_Abteilung',
								dataRapPath: 'Recht.Rang[###1###].Recht.Rechtsbezeichnung.Abteilung'
							}, {
								fldtype: 'Text',
								label: 'LöschAusschl. Recht Nr.',
								id: 'Recht_AusschlussLoeschungsanspruch_betrRechte_###1###_Rechtsbezeichnung_LfdNr',
								dataRapPath: 'Recht.AusschlussLoeschungsanspruch.betrRechte[###1###].Rechtsbezeichnung.LfdNr'
							}, {
								fldtype: 'Text',
								label: 'LöschAusschl. Rechtsart',
								id: 'Recht_AusschlussLoeschungsanspruch_betrRechte_###1###_Rechtsbezeichnung_Art',
								dataRapPath: 'Recht.AusschlussLoeschungsanspruch.betrRechte[###1###].Rechtsbezeichnung.Art',
								codestable: 'Rechtsart.Auto'
							}, {
								fldtype: 'Text',
								label: 'Betrag i.W.',
								id: 'Recht_AusschlussLoeschungsanspruch_betrRechte_###1###_Betrag_Wert_InWorten',
								dataRapPath: 'Recht.AusschlussLoeschungsanspruch.betrRechte[###1###].Betrag.Wert.InWorten'
							}, {
								fldtype: 'Text',
								label: 'Währung lang',
								id: 'Recht_AusschlussLoeschungsanspruch_betrRechte_###1###_Betrag_Waehrung_InWorten',
								dataRapPath: 'Recht.AusschlussLoeschungsanspruch.betrRechte[###1###].Betrag.Waehrung.InWorten',
								codestable: 'WaehrungInWorten.Auto'
							}, {
								fldtype: 'Text',
								label: 'Betrag i. Z.',
								id: 'Recht_AusschlussLoeschungsanspruch_betrRechte_###1###_Betrag_Wert_InZiffern',
								dataRapPath: 'Recht.AusschlussLoeschungsanspruch.betrRechte[###1###].Betrag.Wert.InZiffern'
							}, {
								fldtype: 'Text',
								label: 'Währung i. KF',
								id: 'Recht_AusschlussLoeschungsanspruch_betrRechte_###1###_Betrag_Waehrung_InAbk',
								dataRapPath: 'Recht.AusschlussLoeschungsanspruch.betrRechte[###1###].Betrag.Waehrung.InAbk',
								codestable: 'Waehrungscode.Auto'
							}, {
								fldtype: 'Text',
								label: 'AbtrAusschl. Art',
								id: 'Recht_AbtretungsUndVerpfaendungsausschluss_Art_###1###_',
								dataRapPath: 'Recht.AbtretungsUndVerpfaendungsausschluss.Art[###1###]',
								codestable: 'Abtretungsausschluss.Dropdown+'
							}, {
								fldtype: 'Text',
								label: 'ZH Eintr.-Grund',
								id: 'Recht_ZwangSiHypo_Grund_###1###_',
								dataRapPath: 'Recht.ZwangSiHypo.Grund[###1###]',
								codestable: 'EintragungsgrundAbt3.Auto'
							}, {
								fldtype: 'Checkbox',
								label: 'Bed. § 10 ZVG',
								id: 'Recht_ZwangSiHypo_P10ZVG_BedingungP10ZVG_###1###_',
								dataRapPath: 'Recht.ZwangSiHypo.P10ZVG.BedingungP10ZVG[###1###]'
							}, {
								fldtype: 'Text',
								label: '§ 10 ZVG Betrag i. Z.',
								id: 'Recht_ZwangSiHypo_P10ZVG_Betrag_Wert_InZiffern_###1###_',
								dataRapPath: 'Recht.ZwangSiHypo.P10ZVG.Betrag.Wert.InZiffern[###1###]'
							}, {
								fldtype: 'Text',
								label: '§ 10 ZVG Währung KF',
								id: 'Recht_ZwangSiHypo_P10ZVG_Betrag_Waehrung_InAbk_###1###_',
								dataRapPath: 'Recht.ZwangSiHypo.P10ZVG.Betrag.Waehrung.InAbk[###1###]',
								codestable: 'Waehrungscode.Auto'
							}, {
								fldtype: 'Text',
								label: '§ 10 ZVG Betrag i. W.',
								id: 'Recht_ZwangSiHypo_P10ZVG_Betrag_Wert_InWorten_###1###_',
								dataRapPath: 'Recht.ZwangSiHypo.P10ZVG.Betrag.Wert.InWorten[###1###]'
							}, {
								fldtype: 'Text',
								label: '§ 10 ZVG Währung LF',
								id: 'Recht_ZwangSiHypo_P10ZVG_Betrag_Waehrung_InWorten_###1###_',
								dataRapPath: 'Recht.ZwangSiHypo.P10ZVG.Betrag.Waehrung.InWorten[###1###]',
								codestable: 'WaehrungInWorten.Auto'
							}, {
								fldtype: 'Checkbox',
								label: 'Umschr. Vorm.',
								id: 'Recht_UmschreibungAusVormerkung_###1###_',
								dataRapPath: 'Recht.UmschreibungAusVormerkung[###1###]'
							}, {
								fldtype: 'Checkbox',
								label: 'Umschr. Widerspr.',
								id: 'Recht_UmschreibungAusWiderspruch_###1###_',
								dataRapPath: 'Recht.UmschreibungAusWiderspruch[###1###]'
							}, {
								fldtype: 'Text',
								label: 'Fälligkeit',
								id: 'Recht_Sonstiges_###1###_Faellig',
								dataRapPath: 'Recht.Sonstiges[###1###].Faellig'
							}, {
								fldtype: 'Checkbox',
								label: 'Verz. Widerspr.',
								id: 'Recht_Sonstiges_###1###_VerzWidSprch',
								dataRapPath: 'Recht.Sonstiges[###1###].VerzWidSprch'
							}, {
								fldtype: 'Text',
								label: 'Kündigungsbedingungen',
								id: 'Recht_Sonstiges_###1###_Kündigungsbedindungen',
								dataRapPath: 'Recht.Sonstiges[###1###].Kündigungsbedindungen'
							}
						]
					}
				}, {
					cardinality: '+',
					opDelLastSubitem: true,
					label: 'Rentenschuld',
					dynamicSubitem: {
						label: 'Rentenschuld (###1###) ',
						inputFields: [{
								fldtype: 'Text',
								label: 'Rente Betrag i. Z.',
								id: 'Recht_Rentenschuld_Betrag_Wert_InZiffern_###1###_',
								dataRapPath: 'Recht.Rentenschuld.Betrag.Wert.InZiffern[###1###]'
							}, {
								fldtype: 'Text',
								label: 'Rente Währung KF',
								id: 'Recht_Rentenschuld_Betrag_Waehrung_InAbk_###1###_',
								dataRapPath: 'Recht.Rentenschuld.Betrag.Waehrung.InAbk[###1###]',
								codestable: 'Waehrungscode.Auto'
							}, {
								fldtype: 'Text',
								label: 'Rente Betrag i. W.',
								id: 'Recht_Rentenschuld_Betrag_Wert_InWorten_###1###_',
								dataRapPath: 'Recht.Rentenschuld.Betrag.Wert.InWorten[###1###]'
							}, {
								fldtype: 'Text',
								label: 'Rente Währung LF',
								id: 'Recht_Rentenschuld_Betrag_Waehrung_InWorten_###1###_',
								dataRapPath: 'Recht.Rentenschuld.Betrag.Waehrung.InWorten[###1###]',
								codestable: 'WaehrungInWorten.Auto'
							}, {
								fldtype: 'Text',
								label: 'Zahlungsbed.',
								id: 'Recht_Rentenschuld_Zahlungsbedingungen_###1###_',
								dataRapPath: 'Recht.Rentenschuld.Zahlungsbedingungen[###1###]'
							}, {
								fldtype: 'Date',
								label: 'Starttermin',
								id: 'Recht_Rentenschuld_Starttermin_###1###_',
								dataRapPath: 'Recht.Rentenschuld.Starttermin[###1###]'
							}, {
								fldtype: 'Text',
								label: 'Intervall',
								id: 'Recht_Rentenschuld_Intervall_###1###_',
								dataRapPath: 'Recht.Rentenschuld.Intervall[###1###]',
								codestable: 'Nebenleistungsintervall.Dropdown'
							}
						]
					}
				}
			]
		}, {
			opDelLastSubitem: true,
			label: 'Gläubiger',
			cardinality: 'n',
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
					}, {
						fldtype: 'Text',
						label: 'Sitz Ort',
						id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_Eigentuemer_Jurist_Sitz_Ort_1',
						dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte.Eigentuemer.Jurist.Sitz.Ort[1]'
					}, {
						fldtype: 'Text',
						label: 'Sitz Ort',
						id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_Eigentuemer_Jurist_Sitz_Ort_2',
						dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte.Eigentuemer.Jurist.Sitz.Ort[2]'
					}, {
						fldtype: 'Text',
						label: 'Sitz Ort',
						id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_Eigentuemer_Jurist_Sitz_Ort_3',
						dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte.Eigentuemer.Jurist.Sitz.Ort[3]'
					}, {
						fldtype: 'Text',
						label: 'Reg.Gericht',
						id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_Eigentuemer_Jurist_Register_Gericht',
						dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte.Eigentuemer.Jurist.Register.Gericht'
					}, {
						fldtype: 'Text',
						label: 'Reg.Art',
						id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_Eigentuemer_Jurist_Register_Art',
						dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte.Eigentuemer.Jurist.Register.Art',
						codestable: 'Registerart.Dropdown+'
					}, {
						fldtype: 'Number',
						label: 'Reg.Nr',
						id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_Eigentuemer_Jurist_Register_Nr',
						dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte.Eigentuemer.Jurist.Register.Nr'
					}, {
						fldtype: 'Text',
						label: 'Sitz PLZ',
						id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_Eigentuemer_Jurist_Sitz_PLZ_1',
						dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte.Eigentuemer.Jurist.Sitz.PLZ[1]'
					}, {
						fldtype: 'Text',
						label: 'Sitz PLZ',
						id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_Eigentuemer_Jurist_Sitz_PLZ_2',
						dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte.Eigentuemer.Jurist.Sitz.PLZ[2]'
					}, {
						fldtype: 'Text',
						label: 'Sitz PLZ',
						id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_Eigentuemer_Jurist_Sitz_PLZ_3',
						dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte.Eigentuemer.Jurist.Sitz.PLZ[3]'
					}, {
						fldtype: 'Text',
						label: 'Sitz Staat',
						id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_Eigentuemer_Jurist_Sitz_Staat',
						dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte.Eigentuemer.Jurist.Sitz.Staat'
					}, {
						fldtype: 'Number',
						label: 'Ant. Zähler',
						id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_Anteil_InZiffern_Bruch_Zaehler',
						dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte.Anteil.InZiffern.Bruch.Zaehler'
					}, {
						fldtype: 'Number',
						label: 'Ant. Nenner',
						id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_Anteil_InZiffern_Bruch_Nenner',
						dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte.Anteil.InZiffern.Bruch.Nenner'
					}, {
						fldtype: 'Text',
						label: 'Ant. i. W.',
						id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_Anteil_InWorten',
						dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte.Anteil.InWorten'
					}, {
						fldtype: 'Text',
						label: 'Ant. Sonstiges',
						id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_Anteil_InZiffern_Dezimal',
						dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte.Anteil.InZiffern.Dezimal'
					}
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
								}, {
									fldtype: 'Text',
									label: 'Ort',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_###2###_Eigentuemer_Koerper_Vertreter_Ort',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte[###2###].Eigentuemer.Koerper.Vertreter.Ort'
								}, {
									fldtype: 'Text',
									label: 'Zusatz § 15 GBV',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_###2###_Eigentuemer_Koerper_VermTeil',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte[###2###].Eigentuemer.Koerper.VermTeil'
								}, {
									fldtype: 'Text',
									label: 'Vertreter',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_###2###_Eigentuemer_Koerper_Vertreter_Bezeichnung',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte[###2###].Eigentuemer.Koerper.Vertreter.Bezeichnung'
								}, {
									fldtype: 'Text',
									label: 'Vertr. Sitz',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_###2###_Eigentuemer_Koerper_Sitz_Ort',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte[###2###].Eigentuemer.Koerper.Sitz.Ort'
								}
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
								}, {
									fldtype: 'Text',
									label: 'Vorname',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_###2###_Eigentuemer_Natuer_Person_Vorname',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte[###2###].Eigentuemer.Natuer.Person.Vorname'
								}, {
									fldtype: 'Text',
									label: 'Rufname',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_###2###_Eigentuemer_Natuer_Person_NameGenannt',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte[###2###].Eigentuemer.Natuer.Person.NameGenannt'
								}, {
									fldtype: 'Text',
									label: 'Namenszusatz',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_###2###_Eigentuemer_Natuer_Person_NameZusatz',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte[###2###].Eigentuemer.Natuer.Person.NameZusatz'
								}, {
									fldtype: 'Text',
									label: 'Nachname ',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_###2###_Eigentuemer_Natuer_Person_Nachname',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte[###2###].Eigentuemer.Natuer.Person.Nachname'
								}, {
									fldtype: 'Text',
									label: 'Geburtsname',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_###2###_Eigentuemer_Natuer_Person_Geburtsname',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte[###2###].Eigentuemer.Natuer.Person.Geburtsname'
								}, {
									fldtype: 'Date',
									label: 'Geburtsdatum',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_###2###_Eigentuemer_Natuer_Person_Geburtsdatum',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte[###2###].Eigentuemer.Natuer.Person.Geburtsdatum'
								}, {
									fldtype: 'Text',
									label: 'PLZ',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_###2###_Eigentuemer_Natuer_Person_PLZ',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte[###2###].Eigentuemer.Natuer.Person.PLZ'
								}, {
									fldtype: 'Text',
									label: 'Wohnort',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_###2###_Eigentuemer_Natuer_Person_Ort',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte[###2###].Eigentuemer.Natuer.Person.Ort'
								}, {
									fldtype: 'Text',
									label: 'Straße',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_###2###_Eigentuemer_Natuer_Person_Strasse',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte[###2###].Eigentuemer.Natuer.Person.Strasse'
								}, {
									fldtype: 'Text',
									label: 'Haus-Nr.',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_###2###_Eigentuemer_Natuer_Person_HausNr',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte[###2###].Eigentuemer.Natuer.Person.HausNr'
								}, {
									fldtype: 'Text',
									label: 'Beruf',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_###2###_Eigentuemer_Natuer_Person_Beruf',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte[###2###].Eigentuemer.Natuer.Person.Beruf'
								}
							]
						}
					}, {
						cardinality: '+',
						opDelLastSubitem: true,
						label: 'Besonderer Gläubiger ',
						dynamicSubitem: {
							label: 'Besonderer Gläubiger  (###1###)  (###2###) ',
							inputFields: [{
									fldtype: 'Text',
									label: 'Besonderer Gläubiger',
									id: 'Recht_Glaeubiger_besGlaeubiger_Bezeichnung_###1###_',
									dataRapPath: 'Recht.Glaeubiger.besGlaeubiger.Bezeichnung[###1###]'
								}, {
									fldtype: 'Text',
									label: 'GB-Vertr.',
									id: 'Recht_Glaeubiger_besGlaeubiger_VertreterP1189BGB_Vertreter_###1###_',
									dataRapPath: 'Recht.Glaeubiger.besGlaeubiger.VertreterP1189BGB.Vertreter[###1###]'
								}, {
									fldtype: 'Text',
									label: 'GB-Vertr. Titel',
									id: 'Recht_Glaeubiger_besGlaeubiger_VertreterP1189BGB_Eigentuemer_Natuer_Person_Titel_###1###_',
									dataRapPath: 'Recht.Glaeubiger.besGlaeubiger.VertreterP1189BGB.Eigentuemer.Natuer.Person.Titel[###1###]',
									codestable: 'Titel.Dropdown+'
								}, {
									fldtype: 'Text',
									label: 'GB-Vertr. Namensvorsatz',
									id: 'Recht_Glaeubiger_besGlaeubiger_VertreterP1189BGB_Eigentuemer_Natuer_Person_NameVorsatz_###1###_',
									dataRapPath: 'Recht.Glaeubiger.besGlaeubiger.VertreterP1189BGB.Eigentuemer.Natuer.Person.NameVorsatz[###1###]'
								}, {
									fldtype: 'Text',
									label: 'GB-Vertr. Vorname',
									id: 'Recht_Glaeubiger_besGlaeubiger_VertreterP1189BGB_Eigentuemer_Natuer_Person_Vorname_###1###_',
									dataRapPath: 'Recht.Glaeubiger.besGlaeubiger.VertreterP1189BGB.Eigentuemer.Natuer.Person.Vorname[###1###]'
								}, {
									fldtype: 'Text',
									label: 'GB-Vertr. Namenszusatz',
									id: 'Recht_Glaeubiger_besGlaeubiger_VertreterP1189BGB_Eigentuemer_Natuer_Person_NameZusatz_###1###_',
									dataRapPath: 'Recht.Glaeubiger.besGlaeubiger.VertreterP1189BGB.Eigentuemer.Natuer.Person.NameZusatz[###1###]'
								}, {
									fldtype: 'Text',
									label: 'GB-Vertr. Nachname',
									id: 'Recht_Glaeubiger_besGlaeubiger_VertreterP1189BGB_Eigentuemer_Natuer_Person_Nachname_###1###_',
									dataRapPath: 'Recht.Glaeubiger.besGlaeubiger.VertreterP1189BGB.Eigentuemer.Natuer.Person.Nachname[###1###]'
								}, {
									fldtype: 'Text',
									label: 'GB-Vertr. Geb.-Name',
									id: 'Recht_Glaeubiger_besGlaeubiger_VertreterP1189BGB_Eigentuemer_Natuer_Person_Geburtsname_###1###_',
									dataRapPath: 'Recht.Glaeubiger.besGlaeubiger.VertreterP1189BGB.Eigentuemer.Natuer.Person.Geburtsname[###1###]'
								}, {
									fldtype: 'Date',
									label: 'GB-Vertr. Geb.-Datum',
									id: 'Recht_Glaeubiger_besGlaeubiger_VertreterP1189BGB_Eigentuemer_Natuer_Person_Geburtsdatum_###1###_',
									dataRapPath: 'Recht.Glaeubiger.besGlaeubiger.VertreterP1189BGB.Eigentuemer.Natuer.Person.Geburtsdatum[###1###]'
								}, {
									fldtype: 'Text',
									label: 'GB-Vertr. Wohnort',
									id: 'Recht_Glaeubiger_besGlaeubiger_VertreterP1189BGB_Eigentuemer_Natuer_Person_Ort_###1###_',
									dataRapPath: 'Recht.Glaeubiger.besGlaeubiger.VertreterP1189BGB.Eigentuemer.Natuer.Person.Ort[###1###]'
								}, {
									fldtype: 'Text',
									label: 'Firma/Bezeichnung',
									id: 'Recht_Glaeubiger_besGlaeubiger_VertreterP1189BGB_Eigentuemer_Jurist_Bez_###1###_',
									dataRapPath: 'Recht.Glaeubiger.besGlaeubiger.VertreterP1189BGB.Eigentuemer.Jurist.Bez[###1###]'
								}, {
									fldtype: 'Text',
									label: 'Sitz Ort',
									id: 'Recht_Glaeubiger_besGlaeubiger_VertreterP1189BGB_Eigentuemer_Jurist_Sitz_###1###_Ort_###2###_',
									dataRapPath: 'Recht.Glaeubiger.besGlaeubiger.VertreterP1189BGB.Eigentuemer.Jurist.Sitz[###1###].Ort[###2###]'
								}
							]
						}
					}, {
						cardinality: 'n',
						opDelLastSubitem: true,
						label: 'Gläubigermehrheit Anteilsverhältnis',
						dynamicSubitem: {
							label: 'Gläubigermehrheit Anteilsverhältnis (###1###)  (###2###) ',
							inputFields: [{
									fldtype: 'Text',
									label: 'Gl. lfd. Nr.',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Anteilsverhaeltnis_LfdNrBeteilEig_###2###_',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Anteilsverhaeltnis.LfdNrBeteilEig[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Gem. Ant.-Verh.',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Anteilsverhaeltnis_Je_###2###_',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Anteilsverhaeltnis.Je[###2###]'
								}, {
									fldtype: 'Number',
									label: 'Ant. Zähler',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Anteilsverhaeltnis_Anteil_InZiffern_Bruch_Zaehler_###2###_',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Anteilsverhaeltnis.Anteil.InZiffern.Bruch.Zaehler[###2###]'
								}, {
									fldtype: 'Number',
									label: 'Ant. Nenner',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Anteilsverhaeltnis_Anteil_InZiffern_Bruch_Nenner_###2###_',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Anteilsverhaeltnis.Anteil.InZiffern.Bruch.Nenner[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Ant. i. W.',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Anteilsverhaeltnis_Anteil_InWorten_###2###_',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Anteilsverhaeltnis.Anteil.InWorten[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Ant. Sonstiges',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Anteilsverhaeltnis_Anteil_InZiffern_Dezimal_###2###_',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Anteilsverhaeltnis.Anteil.InZiffern.Dezimal[###2###]'
								}
							]
						}
					}, {
						cardinality: '+',
						opDelLastSubitem: true,
						label: 'Gläubigermehrheit Gemeinschaftsverhältnis',
						dynamicSubitem: {
							label: 'Gläubigermehrheit Gemeinschaftsverhältnis (###1###)  (###2###) ',
							inputFields: [{
									fldtype: 'Text',
									label: 'Gl. lfd. Nr.',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Gemeinschaftsverhaeltnis_BetLfdNrEig_###2###_',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Gemeinschaftsverhaeltnis.BetLfdNrEig[###2###]'
								}, {
									fldtype: 'Number',
									label: 'Ant. Zähler',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Gemeinschaftsverhaeltnis_Anteil_InZiffern_Bruch_Zaehler_###2###_',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Gemeinschaftsverhaeltnis.Anteil.InZiffern.Bruch.Zaehler[###2###]'
								}, {
									fldtype: 'Number',
									label: 'Ant. Nenner',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Gemeinschaftsverhaeltnis_Anteil_InZiffern_Bruch_Nenner_###2###_',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Gemeinschaftsverhaeltnis.Anteil.InZiffern.Bruch.Nenner[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Ant. i. W.',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Gemeinschaftsverhaeltnis_Anteil_InWorten_###2###_',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Gemeinschaftsverhaeltnis.Anteil.InWorten[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Ant. Sonstiges',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Gemeinschaftsverhaeltnis_Anteil_InZiffern_Dezimal_###2###_',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Gemeinschaftsverhaeltnis.Anteil.InZiffern.Dezimal[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Gemeinschaftsverhältnis',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Gemeinschaftsverhaeltnis_Art_###2###_',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Gemeinschaftsverhaeltnis.Art[###2###]',
									codestable: 'Gemeinschaftsverhaeltnis.Dropdown+'
								}
							]
						}
					}
				]
			}
		}, {
			opDelLastSubitem: true,
			label: 'Zinsen/Nebenleistung',
			cardinality: 'n',
			dynamicSubitem: {
				label: 'Zinsen/Nebenleistung (###1###) ',
				inputFields: [{
						fldtype: 'Text',
						label: 'Zins % fest i. Z.',
						id: 'Recht_Zinsen_###1###_Prozent_InZiffern',
						dataRapPath: 'Recht.Zinsen[###1###].Prozent.InZiffern'
					}, {
						fldtype: 'Text',
						label: 'Zins % fest i. W.',
						id: 'Recht_Zinsen_###1###_Prozent_InWorten',
						dataRapPath: 'Recht.Zinsen[###1###].Prozent.InWorten'
					}, {
						fldtype: 'Text',
						label: 'Zins Intervall',
						id: 'Recht_Zinsen_###1###_Intervall',
						dataRapPath: 'Recht.Zinsen[###1###].Intervall',
						codestable: 'InterestInterval.Dropdown'
					}, {
						fldtype: 'Text',
						label: 'Zins Art',
						id: 'Recht_Zinsen_###1###_Bezeichnung',
						dataRapPath: 'Recht.Zinsen[###1###].Bezeichnung',
						codestable: 'Zinstyp.Dropdown+'
					}, {
						fldtype: 'Text',
						label: 'Nebenl. % fest i.Z.',
						id: 'Recht_Nebenleistungen_###1###_Prozent_InZiffern',
						dataRapPath: 'Recht.Nebenleistungen[###1###].Prozent.InZiffern'
					}, {
						fldtype: 'Text',
						label: 'Nebenl. % fest i.W.',
						id: 'Recht_Nebenleistungen_###1###_Prozent_InWorten',
						dataRapPath: 'Recht.Nebenleistungen[###1###].Prozent.InWorten'
					}, {
						fldtype: 'Text',
						label: 'Nebenl. Intervall',
						id: 'Recht_Nebenleistungen_###1###_Intervall',
						dataRapPath: 'Recht.Nebenleistungen[###1###].Intervall',
						codestable: 'Nebenleistungsintervall.Dropdown'
					}, {
						fldtype: 'Text',
						label: 'Nebenleistung Art',
						id: 'Recht_Nebenleistungen_###1###_Bezeich',
						dataRapPath: 'Recht.Nebenleistungen[###1###].Bezeich',
						codestable: 'Nebenleistungsbezeichnung.Auto'
					}
				],
				subitems: [{
						cardinality: '+',
						opDelLastSubitem: true,
						label: 'Zinsen sonstiges',
						dynamicSubitem: {
							label: 'Zinsen sonstiges (###1###)  (###2###) ',
							inputFields: [{
									fldtype: 'Text',
									label: '% variabel',
									id: 'Recht_Zinsen_###1###_Prozent_Berechnung_###2###_',
									dataRapPath: 'Recht.Zinsen[###1###].Prozent.Berechnung[###2###]',
									codestable: 'BerechnungsvorschriftZinsen.Auto'
								}, {
									fldtype: 'Text',
									label: 'Bezugsbetrag i. Z.',
									id: 'Recht_Zinsen_###1###_Prozent_Betrag_Wert_InZiffern_###2###_',
									dataRapPath: 'Recht.Zinsen[###1###].Prozent.Betrag.Wert.InZiffern[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Bezugsbetrag Währung KF',
									id: 'Recht_Zinsen_###1###_Prozent_Betrag_Waehrung_InAbk_###2###_',
									dataRapPath: 'Recht.Zinsen[###1###].Prozent.Betrag.Waehrung.InAbk[###2###]',
									codestable: 'Waehrungscode.Auto'
								}, {
									fldtype: 'Text',
									label: 'Bezugsbetrag i. W.',
									id: 'Recht_Zinsen_###1###_Prozent_Betrag_Wert_InWorten_###2###_',
									dataRapPath: 'Recht.Zinsen[###1###].Prozent.Betrag.Wert.InWorten[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Bezugsbetrag Währung LF',
									id: 'Recht_Zinsen_###1###_Prozent_Betrag_Waehrung_InWorten_###2###_',
									dataRapPath: 'Recht.Zinsen[###1###].Prozent.Betrag.Waehrung.InWorten[###2###]',
									codestable: 'WaehrungInWorten.Auto'
								}, {
									fldtype: 'Text',
									label: 'Festbetrag i. Z.',
									id: 'Recht_Zinsen_###1###_Fest_Betrag_Wert_InZiffern_###2###_',
									dataRapPath: 'Recht.Zinsen[###1###].Fest.Betrag.Wert.InZiffern[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Festbetrag Währung KF',
									id: 'Recht_Zinsen_###1###_Fest_Betrag_Waehrung_InAbk_###2###_',
									dataRapPath: 'Recht.Zinsen[###1###].Fest.Betrag.Waehrung.InAbk[###2###]',
									codestable: 'Waehrungscode.Auto'
								}, {
									fldtype: 'Text',
									label: 'Festbetrag i. W.',
									id: 'Recht_Zinsen_###1###_Fest_Betrag_Wert_InWorten_###2###_',
									dataRapPath: 'Recht.Zinsen[###1###].Fest.Betrag.Wert.InWorten[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Festbetrag Währung LF',
									id: 'Recht_Zinsen_###1###_Fest_Betrag_Waehrung_InWorten_###2###_',
									dataRapPath: 'Recht.Zinsen[###1###].Fest.Betrag.Waehrung.InWorten[###2###]',
									codestable: 'WaehrungInWorten.Auto'
								}, {
									fldtype: 'Text',
									label: '% min.',
									id: 'Recht_Zinsen_###1###_ZinsBerenzung_###2###_Min',
									dataRapPath: 'Recht.Zinsen[###1###].ZinsBerenzung[###2###].Min'
								}, {
									fldtype: 'Text',
									label: '% max.',
									id: 'Recht_Zinsen_###1###_ZinsBerenzung_###2###_Max',
									dataRapPath: 'Recht.Zinsen[###1###].ZinsBerenzung[###2###].Max'
								}, {
									fldtype: 'Text',
									label: 'Zinsbegr. Zusatz',
									id: 'Recht_Zinsen_###1###_Zusatz_###2###_',
									dataRapPath: 'Recht.Zinsen[###1###].Zusatz[###2###]'
								}, {
									fldtype: 'Date',
									label: 'Datum Beginn',
									id: 'Recht_Zinsen_###1###_Beginn_Datum_###2###_',
									dataRapPath: 'Recht.Zinsen[###1###].Beginn.Datum[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Beginn i. W.',
									id: 'Recht_Zinsen_###1###_Beginn_InWorten_###2###_',
									dataRapPath: 'Recht.Zinsen[###1###].Beginn.InWorten[###2###]',
									codestable: 'BeginnInWorten.Auto'
								}, {
									fldtype: 'Checkbox',
									label: 'Bed.',
									id: 'Recht_Zinsen_###1###_Bedingung_bedingt_###2###_',
									dataRapPath: 'Recht.Zinsen[###1###].Bedingung.bedingt[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Bed. Text',
									id: 'Recht_Zinsen_###1###_Bedingung_Text_###2###_',
									dataRapPath: 'Recht.Zinsen[###1###].Bedingung.Text[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Bed. Art',
									id: 'Recht_Zinsen_###1###_Bedingung_Art_###2###_',
									dataRapPath: 'Recht.Zinsen[###1###].Bedingung.Art[###2###]',
									codestable: 'BedingungP10ZVG.Auto'
								}, {
									fldtype: 'Checkbox',
									label: 'Befr.',
									id: 'Recht_Zinsen_###1###_Befristung_befristet_###2###_',
									dataRapPath: 'Recht.Zinsen[###1###].Befristung.befristet[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Befr. Berechnungsvorschr.',
									id: 'Recht_Zinsen_###1###_Befristung_Berechnung_###2###_',
									dataRapPath: 'Recht.Zinsen[###1###].Befristung.Berechnung[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Befr. Endtermin',
									id: 'Recht_Zinsen_###1###_Befristung_Ende_###2###_',
									dataRapPath: 'Recht.Zinsen[###1###].Befristung.Ende[###2###]'
								}
							]
						}
					}, {
						cardinality: '+',
						opDelLastSubitem: true,
						label: 'Nebenleistung sonstiges',
						dynamicSubitem: {
							label: 'Nebenleistung sonstiges (###1###)  (###2###) ',
							inputFields: [{
									fldtype: 'Text',
									label: 'NL variabel',
									id: 'Recht_Nebenleistungen_###1###_Prozent_Berechnung_###2###_',
									dataRapPath: 'Recht.Nebenleistungen[###1###].Prozent.Berechnung[###2###]',
									codestable: 'BerechnungsvorschriftNebenleistungen.Auto'
								}, {
									fldtype: 'Text',
									label: '% min.',
									id: 'Recht_Nebenleistungen_###1###_Begrenzung_###2###_Min',
									dataRapPath: 'Recht.Nebenleistungen[###1###].Begrenzung[###2###].Min'
								}, {
									fldtype: 'Text',
									label: '% max.',
									id: 'Recht_Nebenleistungen_###1###_Begrenzung_###2###_Max',
									dataRapPath: 'Recht.Nebenleistungen[###1###].Begrenzung[###2###].Max'
								}, {
									fldtype: 'Text',
									label: 'Bezugsbetrag i. Z.',
									id: 'Recht_Nebenleistungen_###1###_Prozent_Betrag_Wert_InZiffern_###2###_',
									dataRapPath: 'Recht.Nebenleistungen[###1###].Prozent.Betrag.Wert.InZiffern[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Bezugsbetrag Währung KF',
									id: 'Recht_Nebenleistungen_###1###_Prozent_Betrag_Waehrung_InAbk_###2###_',
									dataRapPath: 'Recht.Nebenleistungen[###1###].Prozent.Betrag.Waehrung.InAbk[###2###]',
									codestable: 'Waehrungscode.Auto'
								}, {
									fldtype: 'Text',
									label: 'Bezugsbetrag i. W.',
									id: 'Recht_Nebenleistungen_###1###_Prozent_Betrag_Wert_InWorten_###2###_',
									dataRapPath: 'Recht.Nebenleistungen[###1###].Prozent.Betrag.Wert.InWorten[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Bezugsbetrag Währung LF',
									id: 'Recht_Nebenleistungen_###1###_Prozent_Betrag_Waehrung_InWorten_###2###_',
									dataRapPath: 'Recht.Nebenleistungen[###1###].Prozent.Betrag.Waehrung.InWorten[###2###]',
									codestable: 'WaehrungInWorten.Auto'
								}, {
									fldtype: 'Text',
									label: 'Festbetrag i. Z.',
									id: 'Recht_Nebenleistungen_###1###_Fest_Betrag_Wert_InZiffern_###2###_',
									dataRapPath: 'Recht.Nebenleistungen[###1###].Fest.Betrag.Wert.InZiffern[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Festbetrag Währung KF',
									id: 'Recht_Nebenleistungen_###1###_Fest_Betrag_Waehrung_InAbk_###2###_',
									dataRapPath: 'Recht.Nebenleistungen[###1###].Fest.Betrag.Waehrung.InAbk[###2###]',
									codestable: 'Waehrungscode.Auto'
								}, {
									fldtype: 'Text',
									label: 'Festbetrag i. W.',
									id: 'Recht_Nebenleistungen_###1###_Fest_Betrag_Wert_InWorten_###2###_',
									dataRapPath: 'Recht.Nebenleistungen[###1###].Fest.Betrag.Wert.InWorten[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Festbetrag Währung LF',
									id: 'Recht_Nebenleistungen_###1###_Fest_Betrag_Waehrung_InWorten_###2###_',
									dataRapPath: 'Recht.Nebenleistungen[###1###].Fest.Betrag.Waehrung.InWorten[###2###]',
									codestable: 'WaehrungInWorten.Auto'
								}, {
									fldtype: 'Date',
									label: 'Datum Beginn',
									id: 'Recht_Nebenleistungen_###1###_Beginn_Datum_###2###_',
									dataRapPath: 'Recht.Nebenleistungen[###1###].Beginn.Datum[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Beginn i. W.',
									id: 'Recht_Nebenleistungen_###1###_Beginn_InWorten_###2###_',
									dataRapPath: 'Recht.Nebenleistungen[###1###].Beginn.InWorten[###2###]',
									codestable: 'BeginnInWorten.Auto'
								}, {
									fldtype: 'Checkbox',
									label: 'Bedingt',
									id: 'Recht_Nebenleistungen_###1###_Bedingung_bedingt_###2###_',
									dataRapPath: 'Recht.Nebenleistungen[###1###].Bedingung.bedingt[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Bed. Text',
									id: 'Recht_Nebenleistungen_###1###_Bedingung_Text_###2###_',
									dataRapPath: 'Recht.Nebenleistungen[###1###].Bedingung.Text[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Bed. Art',
									id: 'Recht_Nebenleistungen_###1###_Bedingung_Art_###2###_',
									dataRapPath: 'Recht.Nebenleistungen[###1###].Bedingung.Art[###2###]',
									codestable: 'BedingungP10ZVG.Auto'
								}, {
									fldtype: 'Checkbox',
									label: 'Befristet',
									id: 'Recht_Nebenleistungen_###1###_Befristung_befristet_###2###_',
									dataRapPath: 'Recht.Nebenleistungen[###1###].Befristung.befristet[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Befr. Berechnungsvorschr.',
									id: 'Recht_Nebenleistungen_###1###_Befristung_Berechnung_###2###_',
									dataRapPath: 'Recht.Nebenleistungen[###1###].Befristung.Berechnung[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Befr. Endtermin',
									id: 'Recht_Nebenleistungen_###1###_Befristung_Ende_###2###_',
									dataRapPath: 'Recht.Nebenleistungen[###1###].Befristung.Ende[###2###]'
								}, {
									fldtype: 'Text',
									label: 'NL Zusatz',
									id: 'Recht_Nebenleistungen_###1###_Zusatz_###2###_',
									dataRapPath: 'Recht.Nebenleistungen[###1###].Zusatz[###2###]'
								}
							]
						}
					}
				]
			}
		}, {
			opDelLastSubitem: true,
			label: 'Eintragungsgrundlage',
			cardinality: 'n',
			dynamicSubitem: {
				label: 'Eintragungsgrundlage (###1###) ',
				inputFields: [{
						fldtype: 'Text',
						label: 'Eintr.Grundl.Typ',
						id: 'Recht_Eintragungsgrundlage_###1###_Art_Typ',
						dataRapPath: 'Recht.Eintragungsgrundlage[###1###].Art.Typ',
						codestable: 'Eintragungsgrundlagentyp.Dropdown+'
					}, {
						fldtype: 'Date',
						label: 'Datum',
						id: 'Recht_Eintragungsgrundlage_###1###_DatumEintrGrdLage',
						dataRapPath: 'Recht.Eintragungsgrundlage[###1###].DatumEintrGrdLage'
					}, {
						fldtype: 'Text',
						label: 'UR.-Nr.',
						id: 'Recht_Eintragungsgrundlage_###1###_UrkNr',
						dataRapPath: 'Recht.Eintragungsgrundlage[###1###].UrkNr'
					}, {
						fldtype: 'Text',
						label: 'Aktenzeichen',
						id: 'Recht_Eintragungsgrundlage_###1###_AktenZeichen',
						dataRapPath: 'Recht.Eintragungsgrundlage[###1###].AktenZeichen'
					}, {
						fldtype: 'Number',
						label: 'ON',
						id: 'Recht_Eintragungsgrundlage_###1###_VerfueHinweis_OrdNr',
						dataRapPath: 'Recht.Eintragungsgrundlage[###1###].VerfueHinweis.OrdNr'
					}, {
						fldtype: 'Text',
						label: 'Blatt ON',
						id: 'Recht_Eintragungsgrundlage_###1###_VerfueHinweis_OrdNrBlatt',
						dataRapPath: 'Recht.Eintragungsgrundlage[###1###].VerfueHinweis.OrdNrBlatt'
					}, {
						fldtype: 'Checkbox',
						label: 'Von Amts wegen',
						id: 'Recht_Eintragungsgrundlage_###1###_vonAmtsWg',
						dataRapPath: 'Recht.Eintragungsgrundlage[###1###].vonAmtsWg'
					}
				],
				subitems: [{
						cardinality: '+',
						opDelLastSubitem: true,
						label: 'Aussteller Notar',
						dynamicSubitem: {
							label: 'Aussteller Notar (###1###)  (###2###) ',
							inputFields: [{
									fldtype: 'Text',
									label: 'Amtstitel Notar',
									id: 'Recht_Eintragungsgrundlage_###1###_Aussteller_Notar_AmtsTitel_###2###_',
									dataRapPath: 'Recht.Eintragungsgrundlage[###1###].Aussteller.Notar.AmtsTitel[###2###]',
									codestable: 'AmtstitelNotar.Dropdown'
								}, {
									fldtype: 'Text',
									label: 'Titel',
									id: 'Recht_Eintragungsgrundlage_###1###_Aussteller_Notar_Titel_###2###_',
									dataRapPath: 'Recht.Eintragungsgrundlage[###1###].Aussteller.Notar.Titel[###2###]',
									codestable: 'Titel.Dropdown+'
								}, {
									fldtype: 'Text',
									label: 'Namensvorsatz',
									id: 'Recht_Eintragungsgrundlage_###1###_Aussteller_Notar_NameVorsatz_###2###_',
									dataRapPath: 'Recht.Eintragungsgrundlage[###1###].Aussteller.Notar.NameVorsatz[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Vorname',
									id: 'Recht_Eintragungsgrundlage_###1###_Aussteller_Notar_Vorname_###2###_',
									dataRapPath: 'Recht.Eintragungsgrundlage[###1###].Aussteller.Notar.Vorname[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Namenszusatz',
									id: 'Recht_Eintragungsgrundlage_###1###_Aussteller_Notar_NameZusatz_###2###_',
									dataRapPath: 'Recht.Eintragungsgrundlage[###1###].Aussteller.Notar.NameZusatz[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Nachname ',
									id: 'Recht_Eintragungsgrundlage_###1###_Aussteller_Notar_Nachname_###2###_',
									dataRapPath: 'Recht.Eintragungsgrundlage[###1###].Aussteller.Notar.Nachname[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Sitz Notar',
									id: 'Recht_Eintragungsgrundlage_###1###_Aussteller_Notar_Ort_###2###_',
									dataRapPath: 'Recht.Eintragungsgrundlage[###1###].Aussteller.Notar.Ort[###2###]'
								}
							]
						}
					}, {
						cardinality: '+',
						opDelLastSubitem: true,
						label: 'Aussteller Behörde',
						dynamicSubitem: {
							label: 'Aussteller Behörde (###1###)  (###2###) ',
							inputFields: [{
									fldtype: 'Text',
									label: 'Firma/Bezeichnung',
									id: 'Recht_Eintragungsgrundlage_###1###_Aussteller_Sonstige_Name_###2###_',
									dataRapPath: 'Recht.Eintragungsgrundlage[###1###].Aussteller.Sonstige.Name[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Sitz Ort',
									id: 'Recht_Eintragungsgrundlage_###1###_Aussteller_Sonstige_Ort_###2###_',
									dataRapPath: 'Recht.Eintragungsgrundlage[###1###].Aussteller.Sonstige.Ort[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Verfahrensart',
									id: 'Recht_Eintragungsgrundlage_###1###_AngabeVerf_Art_###2###_',
									dataRapPath: 'Recht.Eintragungsgrundlage[###1###].AngabeVerf.Art[###2###]'
								}
							]
						}
					}
				]
			}
		}, {
			opDelLastSubitem: true,
			label: 'Rangvermerk',
			cardinality: 'n',
			dynamicSubitem: {
				label: 'Rangvermerk (###1###) ',
				inputFields: [{
						fldtype: 'Text',
						label: 'Rangart',
						id: 'Recht_Rang_###1###_Art',
						dataRapPath: 'Recht.Rang[###1###].Art',
						codestable: 'Rangart.Dropdown+'
					}, {
						fldtype: 'Text',
						label: 'Rechtsart',
						id: 'Recht_Rang_###1###_Recht_Rechtsbezeichnung_Art',
						dataRapPath: 'Recht.Rang[###1###].Recht.Rechtsbezeichnung.Art',
						codestable: 'Rechtsart.Auto'
					}, {
						fldtype: 'Text',
						label: 'lfd. Nr.',
						id: 'Recht_Rang_###1###_Recht_Rechtsbezeichnung_LfdNr',
						dataRapPath: 'Recht.Rang[###1###].Recht.Rechtsbezeichnung.LfdNr'
					}, {
						fldtype: 'Text',
						label: 'Abtlg.',
						id: 'Recht_Rang_###1###_GegenRecht_Rechtsbezeichnung_Abteilung',
						dataRapPath: 'Recht.Rang[###1###].GegenRecht.Rechtsbezeichnung.Abteilung'
					}, {
						fldtype: 'Text',
						label: 'lfd. Nr.',
						id: 'Recht_Rang_###1###_GegenRecht_Rechtsbezeichnung_LfdNr',
						dataRapPath: 'Recht.Rang[###1###].GegenRecht.Rechtsbezeichnung.LfdNr'
					}, {
						fldtype: 'Text',
						label: 'lfd. Nr. Bereich',
						id: 'Recht_Rang_###1###_GegenRecht_Rechtsbezeichnung_BereichNr',
						dataRapPath: 'Recht.Rang[###1###].GegenRecht.Rechtsbezeichnung.BereichNr'
					}, {
						fldtype: 'Text',
						label: 'Ausn.Rv',
						id: 'Recht_Rang_###1###_AusnutzungRangVorBeh',
						dataRapPath: 'Recht.Rang[###1###].AusnutzungRangVorBeh',
						codestable: 'Vorbehaltsausnutzung.Dropdown+'
					}
				],
				subitems: [{
						cardinality: '1',
						opDelLastSubitem: true,
						label: 'Rangvermerk Sonstiges',
						dynamicSubitem: {
							label: 'Rangvermerk Sonstiges (###1###)  (###2###) ',
							inputFields: [{
									fldtype: 'Text',
									label: 'Art des Gegenrechts',
									id: 'Recht_Rang_###1###_GegenRecht_###2###_Rechtsbezeichnung_Art',
									dataRapPath: 'Recht.Rang[###1###].GegenRecht[###2###].Rechtsbezeichnung.Art',
									codestable: 'Rechtsart.Auto'
								}, {
									fldtype: 'Number',
									label: 'Ant. Zähler',
									id: 'Recht_Rang_###1###_Bezug_###2###_BezugInAbt1_Anteil_InZiffern_Bruch_Zaehler',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].BezugInAbt1.Anteil.InZiffern.Bruch.Zaehler'
								}, {
									fldtype: 'Number',
									label: 'Ant. Nenner',
									id: 'Recht_Rang_###1###_Bezug_###2###_BezugInAbt1_Anteil_InZiffern_Bruch_Nenner',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].BezugInAbt1.Anteil.InZiffern.Bruch.Nenner'
								}, {
									fldtype: 'Text',
									label: 'Ant. Sonst.',
									id: 'Recht_Rang_###1###_Bezug_###2###_BezugInAbt1_Anteil_InZiffern_Dezimal',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].BezugInAbt1.Anteil.InZiffern.Dezimal'
								}, {
									fldtype: 'Text',
									label: 'Ant. i. W',
									id: 'Recht_Rang_###1###_Bezug_###2###_BezugInAbt1_Anteil_InWorten',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].BezugInAbt1.Anteil.InWorten'
								}, {
									fldtype: 'Text',
									label: 'lfd. Nr. Abt. I',
									id: 'Recht_Rang_###1###_Bezug_###2###_BezugInAbt1_lfdNr',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].BezugInAbt1.lfdNr'
								}, {
									fldtype: 'Text',
									label: 'Titel',
									id: 'Recht_Rang_###1###_Bezug_###2###_BezugInAbt1_Eigentuemer_Natuer_Person_Titel',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].BezugInAbt1.Eigentuemer.Natuer.Person.Titel',
									codestable: 'Titel.Dropdown+'
								}, {
									fldtype: 'Text',
									label: 'Namensvorsatz',
									id: 'Recht_Rang_###1###_Bezug_###2###_BezugInAbt1_Eigentuemer_Natuer_Person_NameVorsatz',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].BezugInAbt1.Eigentuemer.Natuer.Person.NameVorsatz'
								}, {
									fldtype: 'Text',
									label: 'Vorname',
									id: 'Recht_Rang_###1###_Bezug_###2###_BezugInAbt1_Eigentuemer_Natuer_Person_Vorname',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].BezugInAbt1.Eigentuemer.Natuer.Person.Vorname'
								}, {
									fldtype: 'Text',
									label: 'Namenszusatz',
									id: 'Recht_Rang_###1###_Bezug_###2###_BezugInAbt1_Eigentuemer_Natuer_Person_NameZusatz',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].BezugInAbt1.Eigentuemer.Natuer.Person.NameZusatz'
								}, {
									fldtype: 'Text',
									label: 'Nachname',
									id: 'Recht_Rang_###1###_Bezug_###2###_BezugInAbt1_Eigentuemer_Natuer_Person_Nachname',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].BezugInAbt1.Eigentuemer.Natuer.Person.Nachname'
								}, {
									fldtype: 'Text',
									label: 'Geburtsname',
									id: 'Recht_Rang_###1###_Bezug_###2###_BezugInAbt1_Eigentuemer_Natuer_Person_Geburtsname',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].BezugInAbt1.Eigentuemer.Natuer.Person.Geburtsname'
								}, {
									fldtype: 'Text',
									label: 'Firma/Bezeichnung',
									id: 'Recht_Rang_###1###_Bezug_###2###_BezugInAbt1_Eigentuemer_Jurist_Bez',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].BezugInAbt1.Eigentuemer.Jurist.Bez'
								}, {
									fldtype: 'Text',
									label: 'Sitz Ort',
									id: 'Recht_Rang_###1###_Bezug_###2###_BezugInAbt1_Eigentuemer_Jurist_Sitz_Ort',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].BezugInAbt1.Eigentuemer.Jurist.Sitz.Ort'
								}, {
									fldtype: 'Text',
									label: 'KöR Bezeichnung',
									id: 'Recht_Rang_###1###_Bezug_###2###_BezugInAbt1_Eigentuemer_Koerper_Name',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].BezugInAbt1.Eigentuemer.Koerper.Name'
								}, {
									fldtype: 'Text',
									label: 'Zusatz § 15 GBV',
									id: 'Recht_Rang_###1###_Bezug_###2###_BezugInAbt1_Eigentuemer_Koerper_VermTeil',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].BezugInAbt1.Eigentuemer.Koerper.VermTeil'
								}, {
									fldtype: 'Text',
									label: 'KöR Ort',
									id: 'Recht_Rang_###1###_Bezug_###2###_BezugInAbt1_Eigentuemer_Koerper_Vertreter_Ort',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].BezugInAbt1.Eigentuemer.Koerper.Vertreter.Ort'
								}, {
									fldtype: 'Text',
									label: 'lfd. Nr. BV',
									id: 'Recht_Rang_###1###_Bezug_###2###_BuchStelle',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].BuchStelle'
								}, {
									fldtype: 'Checkbox',
									label: 'RV Bedingung',
									id: 'Recht_Rang_###1###_Bedingung_bedingt_###2###_',
									dataRapPath: 'Recht.Rang[###1###].Bedingung.bedingt[###2###]'
								}, {
									fldtype: 'Checkbox',
									label: 'RV Befristung',
									id: 'Recht_Rang_###1###_Befristung_befristet_###2###_',
									dataRapPath: 'Recht.Rang[###1###].Befristung.befristet[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Befr. Berechnungsvorschr.',
									id: 'Recht_Rang_###1###_Befristung_Berechnung_###2###_',
									dataRapPath: 'Recht.Rang[###1###].Befristung.Berechnung[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Befr. Endtermin',
									id: 'Recht_Rang_###1###_Befristung_Ende_###2###_',
									dataRapPath: 'Recht.Rang[###1###].Befristung.Ende[###2###]'
								}
							]
						}
					}, {
						cardinality: 'n',
						opDelLastSubitem: true,
						label: 'Einschränkung Rangvermerk Zinsen',
						dynamicSubitem: {
							label: 'Einschränkung Rangvermerk Zinsen (###1###)  (###2###) ',
							inputFields: [{
									fldtype: 'Text',
									label: 'Zins % fest i. Z.',
									id: 'Recht_Rang_###1###_Bezug_###2###_Zinsen_Prozent_InZiffern',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Zinsen.Prozent.InZiffern'
								}, {
									fldtype: 'Text',
									label: 'Zins % fest i. W.',
									id: 'Recht_Rang_###1###_Bezug_###2###_Zinsen_Prozent_InWorten',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Zinsen.Prozent.InWorten'
								}, {
									fldtype: 'Text',
									label: 'Zins Intervall',
									id: 'Recht_Rang_###1###_Bezug_###2###_Zinsen_Intervall',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Zinsen.Intervall',
									codestable: 'InterestInterval.Dropdown'
								}, {
									fldtype: 'Text',
									label: 'Zins Art',
									id: 'Recht_Rang_###1###_Bezug_###2###_Zinsen_Bezeichnung',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Zinsen.Bezeichnung',
									codestable: 'Zinstyp.Dropdown+'
								}, {
									fldtype: 'Text',
									label: '% variabel',
									id: 'Recht_Rang_###1###_Bezug_###2###_Zinsen_Prozent_Berechnung',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Zinsen.Prozent.Berechnung',
									codestable: 'BerechnungsvorschriftZinsen.Auto'
								}, {
									fldtype: 'Text',
									label: 'Bezugsbetrag i. Z.',
									id: 'Recht_Rang_###1###_Bezug_###2###_Zinsen_Prozent_Betrag_Wert_InZiffern',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Zinsen.Prozent.Betrag.Wert.InZiffern'
								}, {
									fldtype: 'Text',
									label: 'Bezugsbetrag Währung KF',
									id: 'Recht_Rang_###1###_Bezug_###2###_Zinsen_Prozent_Betrag_Waehrung_InAbk',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Zinsen.Prozent.Betrag.Waehrung.InAbk',
									codestable: 'Waehrungscode.Auto'
								}, {
									fldtype: 'Text',
									label: 'Bezugsbetrag i. W.',
									id: 'Recht_Rang_###1###_Bezug_###2###_Zinsen_Prozent_Betrag_Wert_InWorten',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Zinsen.Prozent.Betrag.Wert.InWorten'
								}, {
									fldtype: 'Text',
									label: 'Bezugsbetrag Währung LF',
									id: 'Recht_Rang_###1###_Bezug_###2###_Zinsen_Prozent_Betrag_Waehrung_InWorten',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Zinsen.Prozent.Betrag.Waehrung.InWorten',
									codestable: 'WaehrungInWorten.Auto'
								}, {
									fldtype: 'Text',
									label: 'Festbetrag i. Z.',
									id: 'Recht_Rang_###1###_Bezug_###2###_Zinsen_Fest_Betrag_Wert_InZiffern',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Zinsen.Fest.Betrag.Wert.InZiffern'
								}, {
									fldtype: 'Text',
									label: 'Festbetrag Währung KF',
									id: 'Recht_Rang_###1###_Bezug_###2###_Zinsen_Fest_Betrag_Waehrung_InAbk',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Zinsen.Fest.Betrag.Waehrung.InAbk',
									codestable: 'Waehrungscode.Auto'
								}, {
									fldtype: 'Text',
									label: 'Festbetrag i. W.',
									id: 'Recht_Rang_###1###_Bezug_###2###_Zinsen_Fest_Betrag_Wert_InWorten',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Zinsen.Fest.Betrag.Wert.InWorten'
								}, {
									fldtype: 'Text',
									label: 'Festbetrag Währung LF',
									id: 'Recht_Rang_###1###_Bezug_###2###_Zinsen_Fest_Betrag_Waehrung_InWorten',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Zinsen.Fest.Betrag.Waehrung.InWorten',
									codestable: 'WaehrungInWorten.Auto'
								}, {
									fldtype: 'Date',
									label: 'Datum Beginn',
									id: 'Recht_Rang_###1###_Bezug_###2###_Zinsen_Beginn_Datum',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Zinsen.Beginn.Datum'
								}, {
									fldtype: 'Text',
									label: 'Beginn i. W.',
									id: 'Recht_Rang_###1###_Bezug_###2###_Zinsen_Beginn_InWorten',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Zinsen.Beginn.InWorten',
									codestable: 'BeginnInWorten.Auto'
								}
							]
						}
					}, {
						cardinality: 'n',
						opDelLastSubitem: true,
						label: 'Einschränkung Rangvermerk Nebenleistung',
						dynamicSubitem: {
							label: 'Einschränkung Rangvermerk Nebenleistung (###1###)  (###2###) ',
							inputFields: [{
									fldtype: 'Text',
									label: 'Nebenl. % fest i.Z.',
									id: 'Recht_Rang_###1###_Bezug_###2###_Nebenleistungen_Prozent_InZiffern',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Nebenleistungen.Prozent.InZiffern'
								}, {
									fldtype: 'Text',
									label: 'Nebenl. % fest i.W.',
									id: 'Recht_Rang_###1###_Bezug_###2###_Nebenleistungen_Prozent_InWorten',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Nebenleistungen.Prozent.InWorten'
								}, {
									fldtype: 'Text',
									label: 'Nebenl. Intervall',
									id: 'Recht_Rang_###1###_Bezug_###2###_Nebenleistungen_Intervall',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Nebenleistungen.Intervall',
									codestable: 'Nebenleistungsintervall.Dropdown'
								}, {
									fldtype: 'Text',
									label: 'Nebenleistung Art',
									id: 'Recht_Rang_###1###_Bezug_###2###_Nebenleistungen_Bezeich',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Nebenleistungen.Bezeich',
									codestable: 'Nebenleistungsbezeichnung.Auto'
								}, {
									fldtype: 'Text',
									label: 'NL variabel',
									id: 'Recht_Rang_###1###_Bezug_###2###_Nebenleistungen_Prozent_Berechnung',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Nebenleistungen.Prozent.Berechnung',
									codestable: 'BerechnungsvorschriftNebenleistungen.Auto'
								}, {
									fldtype: 'Text',
									label: 'Bezugsbetrag i. Z.',
									id: 'Recht_Rang_###1###_Bezug_###2###_Nebenleistungen_Prozent_Betrag_Wert_InZiffern',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Nebenleistungen.Prozent.Betrag.Wert.InZiffern'
								}, {
									fldtype: 'Text',
									label: 'Bezugsbetrag Währung KF',
									id: 'Recht_Rang_###1###_Bezug_###2###_Nebenleistungen_Prozent_Betrag_Waehrung_InAbk',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Nebenleistungen.Prozent.Betrag.Waehrung.InAbk',
									codestable: 'Waehrungscode.Auto'
								}, {
									fldtype: 'Text',
									label: 'Bezugsbetrag i. W.',
									id: 'Recht_Rang_###1###_Bezug_###2###_Nebenleistungen_Prozent_Betrag_Wert_InWorten',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Nebenleistungen.Prozent.Betrag.Wert.InWorten'
								}, {
									fldtype: 'Text',
									label: 'Bezugsbetrag Währung LF',
									id: 'Recht_Rang_###1###_Bezug_###2###_Nebenleistungen_Prozent_Betrag_Waehrung_InWorten',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Nebenleistungen.Prozent.Betrag.Waehrung.InWorten',
									codestable: 'WaehrungInWorten.Auto'
								}, {
									fldtype: 'Text',
									label: 'Festbetrag i. Z.',
									id: 'Recht_Rang_###1###_Bezug_###2###_Nebenleistungen_Fest_Betrag_Wert_InZiffern',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Nebenleistungen.Fest.Betrag.Wert.InZiffern'
								}, {
									fldtype: 'Text',
									label: 'Festbetrag Währung KF',
									id: 'Recht_Rang_###1###_Bezug_###2###_Nebenleistungen_Fest_Betrag_Waehrung_InAbk',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Nebenleistungen.Fest.Betrag.Waehrung.InAbk',
									codestable: 'Waehrungscode.Auto'
								}, {
									fldtype: 'Text',
									label: 'Festbetrag i. W.',
									id: 'Recht_Rang_###1###_Bezug_###2###_Nebenleistungen_Fest_Betrag_Wert_InWorten',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Nebenleistungen.Fest.Betrag.Wert.InWorten'
								}, {
									fldtype: 'Text',
									label: 'Festbetrag Währung LF',
									id: 'Recht_Rang_###1###_Bezug_###2###_Nebenleistungen_Fest_Betrag_Waehrung_InWorten',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Nebenleistungen.Fest.Betrag.Waehrung.InWorten',
									codestable: 'WaehrungInWorten.Auto'
								}, {
									fldtype: 'Date',
									label: 'Datum Beginn',
									id: 'Recht_Rang_###1###_Bezug_###2###_Nebenleistungen_Beginn_Datum',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Nebenleistungen.Beginn.Datum'
								}, {
									fldtype: 'Text',
									label: 'Beginn i. W.',
									id: 'Recht_Rang_###1###_Bezug_###2###_Nebenleistungen_Beginn_InWorten',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Nebenleistungen.Beginn.InWorten',
									codestable: 'BeginnInWorten.Auto'
								}
							]
						}
					}
				]
			}
		}, {
			opDelLastSubitem: true,
			label: 'Mithaft',
			cardinality: 'n',
			dynamicSubitem: {
				label: 'Mithaft (###1###) ',
				inputFields: [{
						fldtype: 'Text',
						label: 'Belastungsform',
						id: 'Recht_Mehrfachbelastung_Art_###1###_',
						dataRapPath: 'Recht.Mehrfachbelastung.Art[###1###]',
						codestable: 'Belastungsform.Dropdown+'
					}, {
						fldtype: 'Text',
						label: 'Amtsgericht',
						id: 'Recht_Mehrfachbelastung_BezeichnungBlatt_###1###_AmtsGer',
						dataRapPath: 'Recht.Mehrfachbelastung.BezeichnungBlatt[###1###].AmtsGer'
					}, {
						fldtype: 'Text',
						label: 'Buchungsbezirk',
						id: 'Recht_Mehrfachbelastung_BezeichnungBlatt_###1###_BuchBez',
						dataRapPath: 'Recht.Mehrfachbelastung.BezeichnungBlatt[###1###].BuchBez'
					}, {
						fldtype: 'Text',
						label: 'Band',
						id: 'Recht_Mehrfachbelastung_BezeichnungBlatt_###1###_Band',
						dataRapPath: 'Recht.Mehrfachbelastung.BezeichnungBlatt[###1###].Band'
					}, {
						fldtype: 'Text',
						label: 'Blattnr.-Bereich',
						id: 'Recht_Mehrfachbelastung_BezeichnungBlatt_###1###_BlattBer',
						dataRapPath: 'Recht.Mehrfachbelastung.BezeichnungBlatt[###1###].BlattBer'
					}, {
						fldtype: 'Text',
						label: 'Blattnr',
						id: 'Recht_Mehrfachbelastung_BezeichnungBlatt_###1###_BlattNr',
						dataRapPath: 'Recht.Mehrfachbelastung.BezeichnungBlatt[###1###].BlattNr'
					}
				],
				subitems: [{
						cardinality: 'n',
						opDelLastSubitem: true,
						label: 'Weitere Blattnummern',
						dynamicSubitem: {
							label: 'Weitere Blattnummern (###1###)  (###2###) ',
							inputFields: [{
									fldtype: 'Text',
									label: 'Blattnr',
									id: 'Recht_Mehrfachbelastung_BezeichnungBlatt_###1###_BlattNr_###2###__1',
									dataRapPath: 'Recht.Mehrfachbelastung.BezeichnungBlatt[###1###].BlattNr[###2###][1]'
								}, {
									fldtype: 'Text',
									label: 'Blattnr',
									id: 'Recht_Mehrfachbelastung_BezeichnungBlatt_###1###_BlattNr_###2###__2',
									dataRapPath: 'Recht.Mehrfachbelastung.BezeichnungBlatt[###1###].BlattNr[###2###][2]'
								}, {
									fldtype: 'Text',
									label: 'Blattnr',
									id: 'Recht_Mehrfachbelastung_BezeichnungBlatt_###1###_BlattNr_###2###__3',
									dataRapPath: 'Recht.Mehrfachbelastung.BezeichnungBlatt[###1###].BlattNr[###2###][3]'
								}, {
									fldtype: 'Text',
									label: 'Blattnr',
									id: 'Recht_Mehrfachbelastung_BezeichnungBlatt_###1###_BlattNr_###2###__4',
									dataRapPath: 'Recht.Mehrfachbelastung.BezeichnungBlatt[###1###].BlattNr[###2###][4]'
								}, {
									fldtype: 'Text',
									label: 'Blattnr',
									id: 'Recht_Mehrfachbelastung_BezeichnungBlatt_###1###_BlattNr_###2###__5',
									dataRapPath: 'Recht.Mehrfachbelastung.BezeichnungBlatt[###1###].BlattNr[###2###][5]'
								}, {
									fldtype: 'Text',
									label: 'Blattnr',
									id: 'Recht_Mehrfachbelastung_BezeichnungBlatt_###1###_BlattNr_###2###__6',
									dataRapPath: 'Recht.Mehrfachbelastung.BezeichnungBlatt[###1###].BlattNr[###2###][6]'
								}, {
									fldtype: 'Text',
									label: 'Blattnr',
									id: 'Recht_Mehrfachbelastung_BezeichnungBlatt_###1###_BlattNr_###2###__7',
									dataRapPath: 'Recht.Mehrfachbelastung.BezeichnungBlatt[###1###].BlattNr[###2###][7]'
								}, {
									fldtype: 'Text',
									label: 'Blattnr',
									id: 'Recht_Mehrfachbelastung_BezeichnungBlatt_###1###_BlattNr_###2###__8',
									dataRapPath: 'Recht.Mehrfachbelastung.BezeichnungBlatt[###1###].BlattNr[###2###][8]'
								}, {
									fldtype: 'Text',
									label: 'Blattnr',
									id: 'Recht_Mehrfachbelastung_BezeichnungBlatt_###1###_BlattNr_###2###__9',
									dataRapPath: 'Recht.Mehrfachbelastung.BezeichnungBlatt[###1###].BlattNr[###2###][9]'
								}, {
									fldtype: 'Text',
									label: 'Blattnr',
									id: 'Recht_Mehrfachbelastung_BezeichnungBlatt_###1###_BlattNr_###2###__10',
									dataRapPath: 'Recht.Mehrfachbelastung.BezeichnungBlatt[###1###].BlattNr[###2###][10]'
								}, {
									fldtype: 'Text',
									label: 'Blattnr',
									id: 'Recht_Mehrfachbelastung_BezeichnungBlatt_###1###_BlattNr_###2###__11',
									dataRapPath: 'Recht.Mehrfachbelastung.BezeichnungBlatt[###1###].BlattNr[###2###][11]'
								}, {
									fldtype: 'Text',
									label: 'Blattnr',
									id: 'Recht_Mehrfachbelastung_BezeichnungBlatt_###1###_BlattNr_###2###__12',
									dataRapPath: 'Recht.Mehrfachbelastung.BezeichnungBlatt[###1###].BlattNr[###2###][12]'
								}
							]
						}
					}
				]
			}
		}, {
			opDelLastSubitem: true,
			label: 'Übertragungsvermerk',
			cardinality: '+',
			dynamicSubitem: {
				label: 'Übertragungsvermerk (###1###) ',
				inputFields: [{
						fldtype: 'Text',
						label: 'Amtsgericht',
						id: 'Recht_Uebertragungsvermerk_BezeichnungBlatt_###1###_AmtsGer',
						dataRapPath: 'Recht.Uebertragungsvermerk.BezeichnungBlatt[###1###].AmtsGer'
					}, {
						fldtype: 'Text',
						label: 'Buchungsbezirk',
						id: 'Recht_Uebertragungsvermerk_BezeichnungBlatt_###1###_BuchBez',
						dataRapPath: 'Recht.Uebertragungsvermerk.BezeichnungBlatt[###1###].BuchBez'
					}, {
						fldtype: 'Text',
						label: 'Band',
						id: 'Recht_Uebertragungsvermerk_BezeichnungBlatt_###1###_Band',
						dataRapPath: 'Recht.Uebertragungsvermerk.BezeichnungBlatt[###1###].Band'
					}, {
						fldtype: 'Text',
						label: 'Blattnr',
						id: 'Recht_Uebertragungsvermerk_BezeichnungBlatt_###1###_BlattNr',
						dataRapPath: 'Recht.Uebertragungsvermerk.BezeichnungBlatt[###1###].BlattNr'
					}, {
						fldtype: 'Text',
						label: 'Blattnr.-Bereich',
						id: 'Recht_Uebertragungsvermerk_BezeichnungBlatt_###1###_BlattBer',
						dataRapPath: 'Recht.Uebertragungsvermerk.BezeichnungBlatt[###1###].BlattBer'
					}, {
						fldtype: 'Date',
						label: 'Urspr.Eintr.-Dat.',
						id: 'Recht_Uebertragungsvermerk_UrDatum_###1###_',
						dataRapPath: 'Recht.Uebertragungsvermerk.UrDatum[###1###]'
					}, {
						fldtype: 'Text',
						label: 'Übertr. Von/aus',
						id: 'Recht_Uebertragungsvermerk_QuelleZiel_###1###_',
						dataRapPath: 'Recht.Uebertragungsvermerk.QuelleZiel[###1###]',
						codestable: 'QuelleZiel.Auto'
					}, {
						fldtype: 'Text',
						label: 'Übertr.-Grund',
						id: 'Recht_Uebertragungsvermerk_Mithaft_###1###_',
						dataRapPath: 'Recht.Uebertragungsvermerk.Mithaft[###1###]',
						codestable: 'Mithaft.Auto'
					}, {
						fldtype: 'Number',
						label: 'BV-Nr.',
						id: 'Recht_Uebertragungsvermerk_BVNr_###1###_',
						dataRapPath: 'Recht.Uebertragungsvermerk.BVNr[###1###]'
					}
				],
				subitems: [{
						cardinality: 'n',
						opDelLastSubitem: true,
						label: 'Weitere BV-Nummern',
						dynamicSubitem: {
							label: 'Weitere BV-Nummern (###1###)  (###2###) ',
							inputFields: [{
									fldtype: 'Number',
									label: 'BV-Nr.',
									id: 'Recht_Uebertragungsvermerk_BVNr_###1###__1',
									dataRapPath: 'Recht.Uebertragungsvermerk.BVNr[###1###][1]'
								}, {
									fldtype: 'Number',
									label: 'BV-Nr.',
									id: 'Recht_Uebertragungsvermerk_BVNr_###1###__2',
									dataRapPath: 'Recht.Uebertragungsvermerk.BVNr[###1###][2]'
								}, {
									fldtype: 'Number',
									label: 'BV-Nr.',
									id: 'Recht_Uebertragungsvermerk_BVNr_###1###__3',
									dataRapPath: 'Recht.Uebertragungsvermerk.BVNr[###1###][3]'
								}, {
									fldtype: 'Number',
									label: 'BV-Nr.',
									id: 'Recht_Uebertragungsvermerk_BVNr_###1###__4',
									dataRapPath: 'Recht.Uebertragungsvermerk.BVNr[###1###][4]'
								}, {
									fldtype: 'Number',
									label: 'BV-Nr.',
									id: 'Recht_Uebertragungsvermerk_BVNr_###1###__5',
									dataRapPath: 'Recht.Uebertragungsvermerk.BVNr[###1###][5]'
								}, {
									fldtype: 'Number',
									label: 'BV-Nr.',
									id: 'Recht_Uebertragungsvermerk_BVNr_###1###__6',
									dataRapPath: 'Recht.Uebertragungsvermerk.BVNr[###1###][6]'
								}, {
									fldtype: 'Number',
									label: 'BV-Nr.',
									id: 'Recht_Uebertragungsvermerk_BVNr_###1###__7',
									dataRapPath: 'Recht.Uebertragungsvermerk.BVNr[###1###][7]'
								}, {
									fldtype: 'Number',
									label: 'BV-Nr.',
									id: 'Recht_Uebertragungsvermerk_BVNr_###1###__8',
									dataRapPath: 'Recht.Uebertragungsvermerk.BVNr[###1###][8]'
								}, {
									fldtype: 'Number',
									label: 'BV-Nr.',
									id: 'Recht_Uebertragungsvermerk_BVNr_###1###__9',
									dataRapPath: 'Recht.Uebertragungsvermerk.BVNr[###1###][9]'
								}, {
									fldtype: 'Number',
									label: 'BV-Nr.',
									id: 'Recht_Uebertragungsvermerk_BVNr_###1###__10',
									dataRapPath: 'Recht.Uebertragungsvermerk.BVNr[###1###][10]'
								}, {
									fldtype: 'Number',
									label: 'BV-Nr.',
									id: 'Recht_Uebertragungsvermerk_BVNr_###1###__11',
									dataRapPath: 'Recht.Uebertragungsvermerk.BVNr[###1###][11]'
								}, {
									fldtype: 'Number',
									label: 'BV-Nr.',
									id: 'Recht_Uebertragungsvermerk_BVNr_###1###__12',
									dataRapPath: 'Recht.Uebertragungsvermerk.BVNr[###1###][12]'
								}
							]
						}
					}
				]
			}
		}, {
			opDelLastSubitem: true,
			label: 'Wirksamkeitsvermerk',
			cardinality: 'n',
			dynamicSubitem: {
				label: 'Wirksamkeitsvermerk (###1###) ',
				inputFields: [{
						fldtype: 'Text',
						label: 'Gegenrecht Art',
						id: 'Recht_Wirksamkeitsvermerk_Gegenrecht_###1###_Rechtsbezeichnung_Art',
						dataRapPath: 'Recht.Wirksamkeitsvermerk.Gegenrecht[###1###].Rechtsbezeichnung.Art',
						codestable: 'Rechtsart.Auto'
					}, {
						fldtype: 'Text',
						label: 'Abtlg.',
						id: 'Recht_Wirksamkeitsvermerk_Gegenrecht_###1###_Rechtsbezeichnung_Abteilung',
						dataRapPath: 'Recht.Wirksamkeitsvermerk.Gegenrecht[###1###].Rechtsbezeichnung.Abteilung'
					}, {
						fldtype: 'Text',
						label: 'Lfd.Nr',
						id: 'Recht_Wirksamkeitsvermerk_Gegenrecht_###1###_Rechtsbezeichnung_LfdNr',
						dataRapPath: 'Recht.Wirksamkeitsvermerk.Gegenrecht[###1###].Rechtsbezeichnung.LfdNr'
					}, {
						fldtype: 'Text',
						label: 'lfd. Nr. Bereich',
						id: 'Recht_Wirksamkeitsvermerk_Gegenrecht_###1###_Rechtsbezeichnung_BereichNr',
						dataRapPath: 'Recht.Wirksamkeitsvermerk.Gegenrecht[###1###].Rechtsbezeichnung.BereichNr'
					}, {
						fldtype: 'Checkbox',
						label: 'Wirks. ggü. Nacherb.',
						id: 'Recht_Wirksamkeitsvermerk_Gegenrecht_###1###_Nacherben',
						dataRapPath: 'Recht.Wirksamkeitsvermerk.Gegenrecht[###1###].Nacherben'
					}, {
						fldtype: 'Checkbox',
						label: 'Wirks. ggü. vorgem. Anspr.',
						id: 'Recht_Wirksamkeitsvermerk_Gegenrecht_###1###_VorgemAnspruch_VorgemAnspruch',
						dataRapPath: 'Recht.Wirksamkeitsvermerk.Gegenrecht[###1###].VorgemAnspruch.VorgemAnspruch'
					}, {
						fldtype: 'Text',
						label: 'Titel',
						id: 'Recht_Wirksamkeitsvermerk_Gegenrecht_###1###_VorgemAnspruch_Glaeubiger_normlGlaeubigerVar1_Beteiligte_Eigentuemer_Natuer_Person_Titel',
						dataRapPath: 'Recht.Wirksamkeitsvermerk.Gegenrecht[###1###].VorgemAnspruch.Glaeubiger.normlGlaeubigerVar1.Beteiligte.Eigentuemer.Natuer.Person.Titel',
						codestable: 'Titel.Dropdown+'
					}, {
						fldtype: 'Text',
						label: 'Namensvorsatz',
						id: 'Recht_Wirksamkeitsvermerk_Gegenrecht_###1###_VorgemAnspruch_Glaeubiger_normlGlaeubigerVar1_Beteiligte_Eigentuemer_Natuer_Person_NameVorsatz',
						dataRapPath: 'Recht.Wirksamkeitsvermerk.Gegenrecht[###1###].VorgemAnspruch.Glaeubiger.normlGlaeubigerVar1.Beteiligte.Eigentuemer.Natuer.Person.NameVorsatz'
					}, {
						fldtype: 'Text',
						label: 'Vorname',
						id: 'Recht_Wirksamkeitsvermerk_Gegenrecht_###1###_VorgemAnspruch_Glaeubiger_normlGlaeubigerVar1_Beteiligte_Eigentuemer_Natuer_Person_Vorname',
						dataRapPath: 'Recht.Wirksamkeitsvermerk.Gegenrecht[###1###].VorgemAnspruch.Glaeubiger.normlGlaeubigerVar1.Beteiligte.Eigentuemer.Natuer.Person.Vorname'
					}, {
						fldtype: 'Text',
						label: 'Namenszusatz',
						id: 'Recht_Wirksamkeitsvermerk_Gegenrecht_###1###_VorgemAnspruch_Glaeubiger_normlGlaeubigerVar1_Beteiligte_Eigentuemer_Natuer_Person_NameZusatz',
						dataRapPath: 'Recht.Wirksamkeitsvermerk.Gegenrecht[###1###].VorgemAnspruch.Glaeubiger.normlGlaeubigerVar1.Beteiligte.Eigentuemer.Natuer.Person.NameZusatz'
					}, {
						fldtype: 'Text',
						label: 'Nachname',
						id: 'Recht_Wirksamkeitsvermerk_Gegenrecht_###1###_VorgemAnspruch_Glaeubiger_normlGlaeubigerVar1_Beteiligte_Eigentuemer_Natuer_Person_Nachname',
						dataRapPath: 'Recht.Wirksamkeitsvermerk.Gegenrecht[###1###].VorgemAnspruch.Glaeubiger.normlGlaeubigerVar1.Beteiligte.Eigentuemer.Natuer.Person.Nachname'
					}, {
						fldtype: 'Text',
						label: 'Geburtsname',
						id: 'Recht_Wirksamkeitsvermerk_Gegenrecht_###1###_VorgemAnspruch_Glaeubiger_normlGlaeubigerVar1_Beteiligte_Eigentuemer_Natuer_Person_Geburtsname',
						dataRapPath: 'Recht.Wirksamkeitsvermerk.Gegenrecht[###1###].VorgemAnspruch.Glaeubiger.normlGlaeubigerVar1.Beteiligte.Eigentuemer.Natuer.Person.Geburtsname'
					}, {
						fldtype: 'Text',
						label: 'Firma/Bezeichnung',
						id: 'Recht_Wirksamkeitsvermerk_Gegenrecht_###1###_VorgemAnspruch_Glaeubiger_normlGlaeubigerVar1_Beteiligte_Eigentuemer_Jurist_Bez',
						dataRapPath: 'Recht.Wirksamkeitsvermerk.Gegenrecht[###1###].VorgemAnspruch.Glaeubiger.normlGlaeubigerVar1.Beteiligte.Eigentuemer.Jurist.Bez'
					}, {
						fldtype: 'Text',
						label: 'Sitz Ort',
						id: 'Recht_Wirksamkeitsvermerk_Gegenrecht_###1###_VorgemAnspruch_Glaeubiger_normlGlaeubigerVar1_Beteiligte_Eigentuemer_Jurist_Sitz_Ort',
						dataRapPath: 'Recht.Wirksamkeitsvermerk.Gegenrecht[###1###].VorgemAnspruch.Glaeubiger.normlGlaeubigerVar1.Beteiligte.Eigentuemer.Jurist.Sitz.Ort'
					}, {
						fldtype: 'Text',
						label: 'KöR Bezeichnung',
						id: 'Recht_Wirksamkeitsvermerk_Gegenrecht_###1###_VorgemAnspruch_Glaeubiger_normlGlaeubigerVar1_Beteiligte_Eigentuemer_Koerper_Name',
						dataRapPath: 'Recht.Wirksamkeitsvermerk.Gegenrecht[###1###].VorgemAnspruch.Glaeubiger.normlGlaeubigerVar1.Beteiligte.Eigentuemer.Koerper.Name'
					}, {
						fldtype: 'Text',
						label: 'Zusatz § 15 GBV',
						id: 'Recht_Wirksamkeitsvermerk_Gegenrecht_###1###_VorgemAnspruch_Glaeubiger_normlGlaeubigerVar1_Beteiligte_Eigentuemer_Koerper_VermTeil',
						dataRapPath: 'Recht.Wirksamkeitsvermerk.Gegenrecht[###1###].VorgemAnspruch.Glaeubiger.normlGlaeubigerVar1.Beteiligte.Eigentuemer.Koerper.VermTeil'
					}, {
						fldtype: 'Text',
						label: 'KöR Ort',
						id: 'Recht_Wirksamkeitsvermerk_Gegenrecht_###1###_VorgemAnspruch_Glaeubiger_normlGlaeubigerVar1_Beteiligte_Eigentuemer_Koerper_Vertreter_Ort',
						dataRapPath: 'Recht.Wirksamkeitsvermerk.Gegenrecht[###1###].VorgemAnspruch.Glaeubiger.normlGlaeubigerVar1.Beteiligte.Eigentuemer.Koerper.Vertreter.Ort'
					}
				],
				subitems: [{
						cardinality: 'n',
						opDelLastSubitem: true,
						label: 'Wirksames Recht',
						dynamicSubitem: {
							label: 'Wirksames Recht (###1###)  (###2###) ',
							inputFields: [{
									fldtype: 'Text',
									label: 'Art',
									id: 'Recht_Wirksamkeitsvermerk_BezWirkEintr_###1###_Rechtsbezeichnung_Art_###2###_',
									dataRapPath: 'Recht.Wirksamkeitsvermerk.BezWirkEintr[###1###].Rechtsbezeichnung.Art[###2###]',
									codestable: 'Rechtsart.Auto'
								}, {
									fldtype: 'Text',
									label: 'Abtlg.',
									id: 'Recht_Wirksamkeitsvermerk_BezWirkEintr_###1###_Rechtsbezeichnung_Abteilung_###2###_',
									dataRapPath: 'Recht.Wirksamkeitsvermerk.BezWirkEintr[###1###].Rechtsbezeichnung.Abteilung[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Lfd.Nr',
									id: 'Recht_Wirksamkeitsvermerk_BezWirkEintr_###1###_Rechtsbezeichnung_LfdNr_###2###_',
									dataRapPath: 'Recht.Wirksamkeitsvermerk.BezWirkEintr[###1###].Rechtsbezeichnung.LfdNr[###2###]'
								}
							]
						}
					}
				]
			}
		}, {
			opDelLastSubitem: true,
			label: 'Rangvorbehalt',
			cardinality: 'n',
			dynamicSubitem: {
				label: 'Rangvorbehalt (###1###) ',
				inputFields: [{
						fldtype: 'Text',
						label: 'Art',
						id: 'Recht_Rangvorbehalt_###1###_VorbehArt',
						dataRapPath: 'Recht.Rangvorbehalt[###1###].VorbehArt',
						codestable: 'Rangvorbehaltsart.Dropdown+'
					}, {
						fldtype: 'Text',
						label: 'Rechtsart',
						id: 'Recht_Rangvorbehalt_###1###_RechtsArt',
						dataRapPath: 'Recht.Rangvorbehalt[###1###].RechtsArt',
						codestable: 'Rechtsart.Auto'
					}, {
						fldtype: 'Text',
						label: 'einfach/mehrfach ausn.',
						id: 'Recht_Rangvorbehalt_###1###_Ausnutzung',
						dataRapPath: 'Recht.Rangvorbehalt[###1###].Ausnutzung',
						codestable: 'AusnutzbarkeitRangvorbehalt.Auto'
					}, {
						fldtype: 'Text',
						label: 'Betrag',
						id: 'Recht_Rangvorbehalt_###1###_Betrag_Wert_InZiffern',
						dataRapPath: 'Recht.Rangvorbehalt[###1###].Betrag.Wert.InZiffern'
					}, {
						fldtype: 'Text',
						label: 'Währung',
						id: 'Recht_Rangvorbehalt_###1###_Betrag_Waehrung_InAbk',
						dataRapPath: 'Recht.Rangvorbehalt[###1###].Betrag.Waehrung.InAbk',
						codestable: 'Waehrungscode.Auto'
					}, {
						fldtype: 'Text',
						label: 'Betrag i. W.',
						id: 'Recht_Rangvorbehalt_###1###_Betrag_Wert_InWorten',
						dataRapPath: 'Recht.Rangvorbehalt[###1###].Betrag.Wert.InWorten'
					}, {
						fldtype: 'Text',
						label: 'Betrag Währung LF',
						id: 'Recht_Rangvorbehalt_###1###_Betrag_Waehrung_InWorten',
						dataRapPath: 'Recht.Rangvorbehalt[###1###].Betrag.Waehrung.InWorten',
						codestable: 'WaehrungInWorten.Auto'
					}, {
						fldtype: 'Text',
						label: 'lfd. Nr. Abt. I',
						id: 'Recht_Rangvorbehalt_###1###_Bezug_BezugInAbt1_lfdNr',
						dataRapPath: 'Recht.Rangvorbehalt[###1###].Bezug.BezugInAbt1.lfdNr'
					}, {
						fldtype: 'Text',
						label: 'Vorname',
						id: 'Recht_Rangvorbehalt_###1###_Bezug_BezugInAbt1_Eigentuemer_Natuer_Person_Vorname',
						dataRapPath: 'Recht.Rangvorbehalt[###1###].Bezug.BezugInAbt1.Eigentuemer.Natuer.Person.Vorname'
					}, {
						fldtype: 'Text',
						label: 'Nachname',
						id: 'Recht_Rangvorbehalt_###1###_Bezug_BezugInAbt1_Eigentuemer_Natuer_Person_Nachname',
						dataRapPath: 'Recht.Rangvorbehalt[###1###].Bezug.BezugInAbt1.Eigentuemer.Natuer.Person.Nachname'
					}, {
						fldtype: 'Text',
						label: 'lfd. Nr. BV',
						id: 'Recht_Rangvorbehalt_###1###_Bezug_BuchStelle',
						dataRapPath: 'Recht.Rangvorbehalt[###1###].Bezug.BuchStelle'
					}
				],
				subitems: [{
						cardinality: 'n',
						opDelLastSubitem: true,
						label: 'weitere vorbehaltene Rechte',
						dynamicSubitem: {
							label: 'weitere vorbehaltene Rechte (###1###)  (###2###) ',
							inputFields: [{
									fldtype: 'Text',
									label: 'Rechtsart',
									id: 'Recht_Rangvorbehalt_###1###_RechtsArt_###2###__1',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].RechtsArt[###2###][1]',
									codestable: 'Rechtsart.Auto'
								}, {
									fldtype: 'Text',
									label: 'Rechtsart',
									id: 'Recht_Rangvorbehalt_###1###_RechtsArt_###2###__2',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].RechtsArt[###2###][2]',
									codestable: 'Rechtsart.Auto'
								}, {
									fldtype: 'Text',
									label: 'Rechtsart',
									id: 'Recht_Rangvorbehalt_###1###_RechtsArt_###2###__3',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].RechtsArt[###2###][3]',
									codestable: 'Rechtsart.Auto'
								}, {
									fldtype: 'Text',
									label: 'Rechtsart',
									id: 'Recht_Rangvorbehalt_###1###_RechtsArt_###2###__4',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].RechtsArt[###2###][4]',
									codestable: 'Rechtsart.Auto'
								}, {
									fldtype: 'Text',
									label: 'Rechtsart',
									id: 'Recht_Rangvorbehalt_###1###_RechtsArt_###2###__5',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].RechtsArt[###2###][5]',
									codestable: 'Rechtsart.Auto'
								}
							]
						}
					}, {
						cardinality: 'n',
						opDelLastSubitem: true,
						label: 'Rangvorbehalt Zinsen',
						dynamicSubitem: {
							label: 'Rangvorbehalt Zinsen (###1###)  (###2###) ',
							inputFields: [{
									fldtype: 'Text',
									label: 'Zins Intervall',
									id: 'Recht_Rangvorbehalt_###1###_Zinsen_###2###_Intervall',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Zinsen[###2###].Intervall',
									codestable: 'InterestInterval.Dropdown'
								}, {
									fldtype: 'Text',
									label: 'Zins Art',
									id: 'Recht_Rangvorbehalt_###1###_Zinsen_###2###_Bezeichnung',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Zinsen[###2###].Bezeichnung',
									codestable: 'Zinstyp.Dropdown+'
								}, {
									fldtype: 'Text',
									label: 'Zins % fest i. Z.',
									id: 'Recht_Rangvorbehalt_###1###_Zinsen_###2###_Prozent_InZiffern',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Zinsen[###2###].Prozent.InZiffern'
								}, {
									fldtype: 'Text',
									label: '% variabel',
									id: 'Recht_Rangvorbehalt_###1###_Zinsen_###2###_Prozent_Berechnung',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Zinsen[###2###].Prozent.Berechnung',
									codestable: 'BerechnungsvorschriftZinsen.Auto'
								}, {
									fldtype: 'Text',
									label: 'Zins % fest i. W.',
									id: 'Recht_Rangvorbehalt_###1###_Zinsen_###2###_Prozent_InWorten',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Zinsen[###2###].Prozent.InWorten'
								}, {
									fldtype: 'Text',
									label: 'Bezugsbetrag i. Z.',
									id: 'Recht_Rangvorbehalt_###1###_Zinsen_###2###_Prozent_Betrag_Wert_InZiffern',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Zinsen[###2###].Prozent.Betrag.Wert.InZiffern'
								}, {
									fldtype: 'Text',
									label: 'Bezugsbetrag Währung KF',
									id: 'Recht_Rangvorbehalt_###1###_Zinsen_###2###_Prozent_Betrag_Waehrung_InAbk',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Zinsen[###2###].Prozent.Betrag.Waehrung.InAbk',
									codestable: 'Waehrungscode.Auto'
								}, {
									fldtype: 'Text',
									label: 'Bezugsbetrag i. W.',
									id: 'Recht_Rangvorbehalt_###1###_Zinsen_###2###_Prozent_Betrag_Wert_InWorten',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Zinsen[###2###].Prozent.Betrag.Wert.InWorten'
								}, {
									fldtype: 'Text',
									label: 'Bezugsbetrag Währung LF',
									id: 'Recht_Rangvorbehalt_###1###_Zinsen_###2###_Prozent_Betrag_Waehrung_InWorten',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Zinsen[###2###].Prozent.Betrag.Waehrung.InWorten',
									codestable: 'WaehrungInWorten.Auto'
								}, {
									fldtype: 'Text',
									label: '% max.',
									id: 'Recht_Rangvorbehalt_###1###_Zinsen_###2###_ZinsBerenzung_Max',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Zinsen[###2###].ZinsBerenzung.Max'
								}, {
									fldtype: 'Date',
									label: 'Datum Beginn',
									id: 'Recht_Rangvorbehalt_###1###_Zinsen_###2###_Beginn_Datum',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Zinsen[###2###].Beginn.Datum'
								}, {
									fldtype: 'Text',
									label: 'Beginn i. W.',
									id: 'Recht_Rangvorbehalt_###1###_Zinsen_###2###_Beginn_InWorten',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Zinsen[###2###].Beginn.InWorten',
									codestable: 'BeginnInWorten.Auto'
								}
							]
						}
					}, {
						cardinality: 'n',
						opDelLastSubitem: true,
						label: 'Rangvorbehalt Nebenleistung',
						dynamicSubitem: {
							label: 'Rangvorbehalt Nebenleistung (###1###)  (###2###) ',
							inputFields: [{
									fldtype: 'Text',
									label: 'Nebenleistung Art',
									id: 'Recht_Rangvorbehalt_###1###_Nebenleistungen_###2###_Bezeich',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Nebenleistungen[###2###].Bezeich',
									codestable: 'Nebenleistungsbezeichnung.Auto'
								}, {
									fldtype: 'Text',
									label: 'Nebenl. Intervall',
									id: 'Recht_Rangvorbehalt_###1###_Nebenleistungen_###2###_Intervall',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Nebenleistungen[###2###].Intervall',
									codestable: 'Nebenleistungsintervall.Dropdown'
								}, {
									fldtype: 'Text',
									label: 'Nebenl. % fest i.Z.',
									id: 'Recht_Rangvorbehalt_###1###_Nebenleistungen_###2###_Prozent_InZiffern',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Nebenleistungen[###2###].Prozent.InZiffern'
								}, {
									fldtype: 'Text',
									label: 'NL variabel',
									id: 'Recht_Rangvorbehalt_###1###_Nebenleistungen_###2###_Prozent_Berechnung',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Nebenleistungen[###2###].Prozent.Berechnung',
									codestable: 'BerechnungsvorschriftNebenleistungen.Auto'
								}, {
									fldtype: 'Text',
									label: 'Nebenl. % fest i.W.',
									id: 'Recht_Rangvorbehalt_###1###_Nebenleistungen_###2###_Prozent_InWorten',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Nebenleistungen[###2###].Prozent.InWorten'
								}, {
									fldtype: 'Text',
									label: 'Bezugsbetrag i. Z.',
									id: 'Recht_Rangvorbehalt_###1###_Nebenleistungen_###2###_Prozent_Betrag_Wert_InZiffern',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Nebenleistungen[###2###].Prozent.Betrag.Wert.InZiffern'
								}, {
									fldtype: 'Text',
									label: 'Bezugsbetrag Währung KF',
									id: 'Recht_Rangvorbehalt_###1###_Nebenleistungen_###2###_Prozent_Betrag_Waehrung_InAbk',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Nebenleistungen[###2###].Prozent.Betrag.Waehrung.InAbk',
									codestable: 'Waehrungscode.Auto'
								}, {
									fldtype: 'Text',
									label: 'Bezugsbetrag i. W.',
									id: 'Recht_Rangvorbehalt_###1###_Nebenleistungen_###2###_Prozent_Betrag_Wert_InWorten',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Nebenleistungen[###2###].Prozent.Betrag.Wert.InWorten'
								}, {
									fldtype: 'Text',
									label: 'Bezugsbetrag Währung LF',
									id: 'Recht_Rangvorbehalt_###1###_Nebenleistungen_###2###_Prozent_Betrag_Waehrung_InWorten',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Nebenleistungen[###2###].Prozent.Betrag.Waehrung.InWorten',
									codestable: 'WaehrungInWorten.Auto'
								}, {
									fldtype: 'Date',
									label: 'Datum Beginn',
									id: 'Recht_Rangvorbehalt_###1###_Nebenleistungen_###2###_Beginn_Datum',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Nebenleistungen[###2###].Beginn.Datum'
								}, {
									fldtype: 'Text',
									label: 'Beginn i. W.',
									id: 'Recht_Rangvorbehalt_###1###_Nebenleistungen_###2###_Beginn_InWorten',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Nebenleistungen[###2###].Beginn.InWorten',
									codestable: 'BeginnInWorten.Auto'
								}, {
									fldtype: 'Checkbox',
									label: 'Bedingt',
									id: 'Recht_Rangvorbehalt_###1###_Nebenleistungen_###2###_Bedingung_bedingt',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Nebenleistungen[###2###].Bedingung.bedingt'
								}, {
									fldtype: 'Checkbox',
									label: 'Befristet',
									id: 'Recht_Rangvorbehalt_###1###_Nebenleistungen_###2###_Befristung_befristet',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Nebenleistungen[###2###].Befristung.befristet'
								}
							]
						}
					}, {
						cardinality: 'n',
						opDelLastSubitem: true,
						label: 'Rangvorbehalt Ber. Nat. Pers.',
						dynamicSubitem: {
							label: 'Rangvorbehalt Ber. Nat. Pers. (###1###)  (###2###) ',
							inputFields: [{
									fldtype: 'Text',
									label: 'Titel',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Natuer_Person_Titel',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Natuer.Person.Titel',
									codestable: 'Titel.Dropdown+'
								}, {
									fldtype: 'Text',
									label: 'Namensvorsatz',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Natuer_Person_NameVorsatz',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Natuer.Person.NameVorsatz'
								}, {
									fldtype: 'Text',
									label: 'Vorname',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Natuer_Person_Vorname',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Natuer.Person.Vorname'
								}, {
									fldtype: 'Text',
									label: 'Rufname',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Natuer_Person_NameGenannt',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Natuer.Person.NameGenannt'
								}, {
									fldtype: 'Text',
									label: 'Namenszusatz',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Natuer_Person_NameZusatz',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Natuer.Person.NameZusatz'
								}, {
									fldtype: 'Text',
									label: 'Nachname ',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Natuer_Person_Nachname',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Natuer.Person.Nachname'
								}, {
									fldtype: 'Text',
									label: 'Geburtsname',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Natuer_Person_Geburtsname',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Natuer.Person.Geburtsname'
								}, {
									fldtype: 'Date',
									label: 'Geburtsdatum',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Natuer_Person_Geburtsdatum',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Natuer.Person.Geburtsdatum'
								}, {
									fldtype: 'Text',
									label: 'PLZ',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Natuer_Person_PLZ',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Natuer.Person.PLZ'
								}, {
									fldtype: 'Text',
									label: 'Wohnort',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Natuer_Person_Ort',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Natuer.Person.Ort'
								}, {
									fldtype: 'Text',
									label: 'Straße',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Natuer_Person_Strasse',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Natuer.Person.Strasse'
								}, {
									fldtype: 'Text',
									label: 'Haus-Nr.',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Natuer_Person_HausNr',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Natuer.Person.HausNr'
								}, {
									fldtype: 'Text',
									label: 'Beruf',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Natuer_Person_Beruf',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Natuer.Person.Beruf'
								}
							]
						}
					}, {
						cardinality: 'n',
						opDelLastSubitem: true,
						label: 'Rangvorbehalt Ber. Jur. Pers',
						dynamicSubitem: {
							label: 'Rangvorbehalt Ber. Jur. Pers (###1###)  (###2###) ',
							inputFields: [{
									fldtype: 'Text',
									label: 'Firma/Bezeichnung',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Jurist_Bez',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Jurist.Bez'
								}, {
									fldtype: 'Text',
									label: 'Sitz PLZ',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Jurist_Sitz_PLZ_1',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Jurist.Sitz.PLZ[1]'
								}, {
									fldtype: 'Text',
									label: 'Sitz PLZ',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Jurist_Sitz_PLZ_2',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Jurist.Sitz.PLZ[2]'
								}, {
									fldtype: 'Text',
									label: 'Sitz PLZ',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Jurist_Sitz_PLZ_3',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Jurist.Sitz.PLZ[3]'
								}, {
									fldtype: 'Text',
									label: 'Sitz Ort',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Jurist_Sitz_Ort_1',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Jurist.Sitz.Ort[1]'
								}, {
									fldtype: 'Text',
									label: 'Sitz Ort',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Jurist_Sitz_Ort_2',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Jurist.Sitz.Ort[2]'
								}, {
									fldtype: 'Text',
									label: 'Sitz Ort',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Jurist_Sitz_Ort_3',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Jurist.Sitz.Ort[3]'
								}, {
									fldtype: 'Text',
									label: 'Reg.Gericht',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Jurist_Register_Gericht',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Jurist.Register.Gericht'
								}, {
									fldtype: 'Text',
									label: 'Reg.Art',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Jurist_Register_Art',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Jurist.Register.Art',
									codestable: 'Registerart.Dropdown+'
								}, {
									fldtype: 'Number',
									label: 'Reg.Nr',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Jurist_Register_Nr',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Jurist.Register.Nr'
								}
							]
						}
					}, {
						cardinality: 'n',
						opDelLastSubitem: true,
						label: 'Rangvorbehalt Ber. KöR',
						dynamicSubitem: {
							label: 'Rangvorbehalt Ber. KöR (###1###)  (###2###) ',
							inputFields: [{
									fldtype: 'Text',
									label: 'KöR Bezeichnung',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Koerper_Name',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Koerper.Name'
								}, {
									fldtype: 'Text',
									label: 'Zusatz § 15 GBV',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Koerper_VermTeil',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Koerper.VermTeil'
								}, {
									fldtype: 'Text',
									label: 'KöR Ort',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Koerper_Sitz_Ort',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Koerper.Sitz.Ort'
								}
							]
						}
					}
				]
			}
		}
	],
	AbtIIIEWiderspruch: [{
			label: 'Allgemeine Parameter',
			cardinality: '1',
			inputFields: [{
					fldtype: 'Text',
					label: 'lfd. Nr.',
					id: 'BuchGgst_lfdNr',
					dataRapPath: 'BuchGgst.lfdNr'
				}, {
					fldtype: 'Text',
					label: 'lfd. Nr. BV',
					id: 'BuchGgst_eingtRecht_belastGgst',
					dataRapPath: 'BuchGgst.eingtRecht.belastGgst'
				}, {
					fldtype: 'Text',
					label: 'Betrag i. Z.',
					id: 'SpalteBetrag_Ursp_Wert',
					dataRapPath: 'SpalteBetrag.Ursp.Wert'
				}, {
					fldtype: 'Text',
					label: 'Währung i. KF',
					id: 'SpalteBetrag_Ursp_Waehrung',
					dataRapPath: 'SpalteBetrag.Ursp.Waehrung',
					codestable: 'Waehrungscode.Auto'
				}
			],
			subitems: [{
					cardinality: 'n',
					opDelLastSubitem: true,
					label: 'Weitere BV-Nummern',
					dynamicSubitem: {
						label: 'Weitere BV-Nummern (###1###) ',
						inputFields: [{
								fldtype: 'Text',
								label: 'lfd. Nr. BV',
								id: 'BuchGgst_eingtRecht_belastGgst_###1###_',
								dataRapPath: 'BuchGgst.eingtRecht.belastGgst[###1###]'
							}
						]
					}
				}, {
					cardinality: 'n',
					opDelLastSubitem: true,
					label: 'Anteilsbelastung',
					dynamicSubitem: {
						label: 'Anteilsbelastung (###1###) ',
						inputFields: [{
								fldtype: 'Number',
								label: 'Ant. Zähler',
								id: 'Recht_Anteilsbelastung_BezugInAbt1_###1###_Anteil_InZiffern_Bruch_Zaehler',
								dataRapPath: 'Recht.Anteilsbelastung.BezugInAbt1[###1###].Anteil.InZiffern.Bruch.Zaehler'
							}, {
								fldtype: 'Number',
								label: 'Ant. Nenner',
								id: 'Recht_Anteilsbelastung_BezugInAbt1_###1###_Anteil_InZiffern_Bruch_Nenner',
								dataRapPath: 'Recht.Anteilsbelastung.BezugInAbt1[###1###].Anteil.InZiffern.Bruch.Nenner'
							}, {
								fldtype: 'Text',
								label: 'Ant. Sonst.',
								id: 'Recht_Anteilsbelastung_BezugInAbt1_###1###_Anteil_InZiffern_Dezimal',
								dataRapPath: 'Recht.Anteilsbelastung.BezugInAbt1[###1###].Anteil.InZiffern.Dezimal'
							}, {
								fldtype: 'Text',
								label: 'Ant. i. W',
								id: 'Recht_Anteilsbelastung_BezugInAbt1_###1###_Anteil_InWorten',
								dataRapPath: 'Recht.Anteilsbelastung.BezugInAbt1[###1###].Anteil.InWorten'
							}, {
								fldtype: 'Checkbox',
								label: 'ehem. Ant.',
								id: 'Recht_Anteilsbelastung_BezugInAbt1_###1###_ehemAnteil',
								dataRapPath: 'Recht.Anteilsbelastung.BezugInAbt1[###1###].ehemAnteil'
							}, {
								fldtype: 'Text',
								label: 'lfd. Nr. Abt. I',
								id: 'Recht_Anteilsbelastung_BezugInAbt1_###1###_lfdNr',
								dataRapPath: 'Recht.Anteilsbelastung.BezugInAbt1[###1###].lfdNr'
							}, {
								fldtype: 'Text',
								label: 'Titel',
								id: 'Recht_Anteilsbelastung_BezugInAbt1_###1###_Eigentuemer_Natuer_Person_Titel',
								dataRapPath: 'Recht.Anteilsbelastung.BezugInAbt1[###1###].Eigentuemer.Natuer.Person.Titel',
								codestable: 'Titel.Dropdown+'
							}, {
								fldtype: 'Text',
								label: 'Namensvorsatz',
								id: 'Recht_Anteilsbelastung_BezugInAbt1_###1###_Eigentuemer_Natuer_Person_NameVorsatz',
								dataRapPath: 'Recht.Anteilsbelastung.BezugInAbt1[###1###].Eigentuemer.Natuer.Person.NameVorsatz'
							}, {
								fldtype: 'Text',
								label: 'Vorname',
								id: 'Recht_Anteilsbelastung_BezugInAbt1_###1###_Eigentuemer_Natuer_Person_Vorname',
								dataRapPath: 'Recht.Anteilsbelastung.BezugInAbt1[###1###].Eigentuemer.Natuer.Person.Vorname'
							}, {
								fldtype: 'Text',
								label: 'Namenszusatz',
								id: 'Recht_Anteilsbelastung_BezugInAbt1_###1###_Eigentuemer_Natuer_Person_NameZusatz',
								dataRapPath: 'Recht.Anteilsbelastung.BezugInAbt1[###1###].Eigentuemer.Natuer.Person.NameZusatz'
							}, {
								fldtype: 'Text',
								label: 'Nachname',
								id: 'Recht_Anteilsbelastung_BezugInAbt1_###1###_Eigentuemer_Natuer_Person_Nachname',
								dataRapPath: 'Recht.Anteilsbelastung.BezugInAbt1[###1###].Eigentuemer.Natuer.Person.Nachname'
							}, {
								fldtype: 'Text',
								label: 'Geburtsname',
								id: 'Recht_Anteilsbelastung_BezugInAbt1_###1###_Eigentuemer_Natuer_Person_Geburtsname',
								dataRapPath: 'Recht.Anteilsbelastung.BezugInAbt1[###1###].Eigentuemer.Natuer.Person.Geburtsname'
							}, {
								fldtype: 'Text',
								label: 'Firma/Bezeichnung',
								id: 'Recht_Anteilsbelastung_BezugInAbt1_###1###_Eigentuemer_Jurist_Bez',
								dataRapPath: 'Recht.Anteilsbelastung.BezugInAbt1[###1###].Eigentuemer.Jurist.Bez'
							}, {
								fldtype: 'Text',
								label: 'Sitz Ort',
								id: 'Recht_Anteilsbelastung_BezugInAbt1_###1###_Eigentuemer_Jurist_Sitz_Ort',
								dataRapPath: 'Recht.Anteilsbelastung.BezugInAbt1[###1###].Eigentuemer.Jurist.Sitz.Ort'
							}, {
								fldtype: 'Text',
								label: 'KöR Bezeichnung',
								id: 'Recht_Anteilsbelastung_BezugInAbt1_###1###_Eigentuemer_Koerper_Name',
								dataRapPath: 'Recht.Anteilsbelastung.BezugInAbt1[###1###].Eigentuemer.Koerper.Name'
							}, {
								fldtype: 'Text',
								label: 'Zusatz § 15 GBV',
								id: 'Recht_Anteilsbelastung_BezugInAbt1_###1###_Eigentuemer_Koerper_VermTeil',
								dataRapPath: 'Recht.Anteilsbelastung.BezugInAbt1[###1###].Eigentuemer.Koerper.VermTeil'
							}, {
								fldtype: 'Text',
								label: 'KöR Ort',
								id: 'Recht_Anteilsbelastung_BezugInAbt1_###1###_Eigentuemer_Koerper_Sitz_Ort',
								dataRapPath: 'Recht.Anteilsbelastung.BezugInAbt1[###1###].Eigentuemer.Koerper.Sitz.Ort'
							}
						]
					}
				}, {
					cardinality: 'n',
					opDelLastSubitem: true,
					label: 'Teilflächenbelastung ',
					dynamicSubitem: {
						label: 'Teilflächenbelastung  (###1###) ',
						inputFields: [{
								fldtype: 'Number',
								label: 'Teilfl. BV-Nr.',
								id: 'Recht_Teilflaechenbelastung_###1###_Flurstuecke_betroffenesFlurstueck_BVNr',
								dataRapPath: 'Recht.Teilflaechenbelastung[###1###].Flurstuecke.betroffenesFlurstueck.BVNr'
							}, {
								fldtype: 'Checkbox',
								label: 'ehem. Flst.',
								id: 'Recht_Teilflaechenbelastung_###1###_Flurstuecke_ehemalig',
								dataRapPath: 'Recht.Teilflaechenbelastung[###1###].Flurstuecke.ehemalig'
							}, {
								fldtype: 'Text',
								label: 'Gemarkung',
								id: 'Recht_Teilflaechenbelastung_###1###_Flurstuecke_betroffenesFlurstueck_Gemark',
								dataRapPath: 'Recht.Teilflaechenbelastung[###1###].Flurstuecke.betroffenesFlurstueck.Gemark'
							}, {
								fldtype: 'Number',
								label: 'Flur',
								id: 'Recht_Teilflaechenbelastung_###1###_Flurstuecke_betroffenesFlurstueck_Flur',
								dataRapPath: 'Recht.Teilflaechenbelastung[###1###].Flurstuecke.betroffenesFlurstueck.Flur'
							}, {
								fldtype: 'Number',
								label: 'Flst. Zähler',
								id: 'Recht_Teilflaechenbelastung_###1###_Flurstuecke_betroffenesFlurstueck_FlurNr_Zaehler',
								dataRapPath: 'Recht.Teilflaechenbelastung[###1###].Flurstuecke.betroffenesFlurstueck.FlurNr.Zaehler'
							}, {
								fldtype: 'Number',
								label: 'Flst. Nenner',
								id: 'Recht_Teilflaechenbelastung_###1###_Flurstuecke_betroffenesFlurstueck_FlurNr_Nenner',
								dataRapPath: 'Recht.Teilflaechenbelastung[###1###].Flurstuecke.betroffenesFlurstueck.FlurNr.Nenner'
							}
						]
					}
				}
			]
		}, {
			label: 'Widerspruch Nichteintragung/Löschung',
			cardinality: '1',
			inputFields: [{
					fldtype: 'Text',
					label: 'Widerspruch Art',
					id: 'Recht_Widerspruch_Ggst_Art',
					dataRapPath: 'Recht.Widerspruch.Ggst.Art',
					codestable: 'Widerspruchsart.Auto'
				}, {
					fldtype: 'Text',
					label: 'Widerspruch Grundlage',
					id: 'Recht_Widerspruch_Grundlage',
					dataRapPath: 'Recht.Widerspruch.Grundlage',
					codestable: 'Widerspruchsgrundlage'
				}, {
					fldtype: 'Date',
					label: 'Widerspruch Eintragungsdatum',
					id: 'Recht_Widerspruch_Eintragungsdatum',
					dataRapPath: 'Recht.Widerspruch.Eintragungsdatum'
				}
			],
		}, {
			opDelLastSubitem: true,
			label: 'Widerspruch Eintragungsgrundlage',
			cardinality: 'n',
			dynamicSubitem: {
				label: 'Widerspruch Eintragungsgrundlage (###1###) ',
				inputFields: [{
						fldtype: 'Text',
						label: 'Eintr.Grundl.Typ',
						id: 'Recht_Widerspruch_Eintragungsgrundlage_###1###_Art_Typ',
						dataRapPath: 'Recht.Widerspruch.Eintragungsgrundlage[###1###].Art.Typ',
						codestable: 'Eintragungsgrundlagentyp.Dropdown+'
					}, {
						fldtype: 'Date',
						label: 'Datum',
						id: 'Recht_Widerspruch_Eintragungsgrundlage_###1###_DatumEintrGrdLage',
						dataRapPath: 'Recht.Widerspruch.Eintragungsgrundlage[###1###].DatumEintrGrdLage'
					}, {
						fldtype: 'Text',
						label: 'Urkundennr.',
						id: 'Recht_Widerspruch_Eintragungsgrundlage_###1###_UrkNr',
						dataRapPath: 'Recht.Widerspruch.Eintragungsgrundlage[###1###].UrkNr'
					}, {
						fldtype: 'Text',
						label: 'Aktenzeichen',
						id: 'Recht_Widerspruch_Eintragungsgrundlage_###1###_AktenZeichen',
						dataRapPath: 'Recht.Widerspruch.Eintragungsgrundlage[###1###].AktenZeichen'
					}, {
						fldtype: 'Number',
						label: 'ON',
						id: 'Recht_Widerspruch_Eintragungsgrundlage_###1###_VerfueHinweis_OrdNr',
						dataRapPath: 'Recht.Widerspruch.Eintragungsgrundlage[###1###].VerfueHinweis.OrdNr'
					}, {
						fldtype: 'Text',
						label: 'Blatt ON',
						id: 'Recht_Widerspruch_Eintragungsgrundlage_###1###_VerfueHinweis_OrdNrBlatt',
						dataRapPath: 'Recht.Widerspruch.Eintragungsgrundlage[###1###].VerfueHinweis.OrdNrBlatt'
					}, {
						fldtype: 'Checkbox',
						label: 'Von Amts wegen',
						id: 'Recht_Widerspruch_Eintragungsgrundlage_###1###_vonAmtsWg',
						dataRapPath: 'Recht.Widerspruch.Eintragungsgrundlage[###1###].vonAmtsWg'
					}
				],
				subitems: [{
						cardinality: '+',
						opDelLastSubitem: true,
						label: 'Aussteller Behörde',
						dynamicSubitem: {
							label: 'Aussteller Behörde (###1###)  (###2###) ',
							inputFields: [{
									fldtype: 'Text',
									label: 'Firma/Bezeichnung',
									id: 'Recht_Widerspruch_Eintragungsgrundlage_###1###_Aussteller_Sonstige_Name_###2###_',
									dataRapPath: 'Recht.Widerspruch.Eintragungsgrundlage[###1###].Aussteller.Sonstige.Name[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Sitz Ort',
									id: 'Recht_Widerspruch_Eintragungsgrundlage_###1###_Aussteller_Sonstige_Ort_###2###_',
									dataRapPath: 'Recht.Widerspruch.Eintragungsgrundlage[###1###].Aussteller.Sonstige.Ort[###2###]'
								}
							]
						}
					}, {
						cardinality: '+',
						opDelLastSubitem: true,
						label: 'Aussteller Notar',
						dynamicSubitem: {
							label: 'Aussteller Notar (###1###)  (###2###) ',
							inputFields: [{
									fldtype: 'Text',
									label: 'Amtstitel Notar',
									id: 'Recht_Widerspruch_Eintragungsgrundlage_###1###_Aussteller_Notar_AmtsTitel_###2###_',
									dataRapPath: 'Recht.Widerspruch.Eintragungsgrundlage[###1###].Aussteller.Notar.AmtsTitel[###2###]',
									codestable: 'AmtstitelNotar.Dropdown'
								}, {
									fldtype: 'Text',
									label: 'Titel',
									id: 'Recht_Widerspruch_Eintragungsgrundlage_###1###_Aussteller_Notar_Titel_###2###_',
									dataRapPath: 'Recht.Widerspruch.Eintragungsgrundlage[###1###].Aussteller.Notar.Titel[###2###]',
									codestable: 'Titel.Dropdown+'
								}, {
									fldtype: 'Text',
									label: 'Namensvorsatz',
									id: 'Recht_Widerspruch_Eintragungsgrundlage_###1###_Aussteller_Notar_NameVorsatz_###2###_',
									dataRapPath: 'Recht.Widerspruch.Eintragungsgrundlage[###1###].Aussteller.Notar.NameVorsatz[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Vorname',
									id: 'Recht_Widerspruch_Eintragungsgrundlage_###1###_Aussteller_Notar_Vorname_###2###_',
									dataRapPath: 'Recht.Widerspruch.Eintragungsgrundlage[###1###].Aussteller.Notar.Vorname[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Namenszusatz',
									id: 'Recht_Widerspruch_Eintragungsgrundlage_###1###_Aussteller_Notar_NameZusatz_###2###_',
									dataRapPath: 'Recht.Widerspruch.Eintragungsgrundlage[###1###].Aussteller.Notar.NameZusatz[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Nachname ',
									id: 'Recht_Widerspruch_Eintragungsgrundlage_###1###_Aussteller_Notar_Nachname_###2###_',
									dataRapPath: 'Recht.Widerspruch.Eintragungsgrundlage[###1###].Aussteller.Notar.Nachname[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Sitz Notar',
									id: 'Recht_Widerspruch_Eintragungsgrundlage_###1###_Aussteller_Notar_Ort_###2###_',
									dataRapPath: 'Recht.Widerspruch.Eintragungsgrundlage[###1###].Aussteller.Notar.Ort[###2###]'
								}
							]
						}
					}
				]
			}
		}, {
			label: 'Recht Abteilung III',
			cardinality: '1',
			inputFields: [{
					fldtype: 'Text',
					label: 'Rechtsart',
					id: 'Recht_Art',
					dataRapPath: 'Recht.Art',
					codestable: 'BelastungstypAbt3.Dropdown'
				}, {
					fldtype: 'Text',
					label: 'Betrag i.W.',
					id: 'Recht_Betrag_Wert_InWorten',
					dataRapPath: 'Recht.Betrag.Wert.InWorten'
				}, {
					fldtype: 'Text',
					label: 'Währung i. LF',
					id: 'Recht_Betrag_Waehrung_InWorten',
					dataRapPath: 'Recht.Betrag.Waehrung.InWorten',
					codestable: 'WaehrungInWorten.Auto'
				}, {
					fldtype: 'Checkbox',
					label: 'o.Brief',
					id: 'Recht_Brieflos',
					dataRapPath: 'Recht.Brieflos'
				}, {
					fldtype: 'Text',
					label: '§800 ZPO',
					id: 'Recht_Vollstreckbarkeit_Vollstreckbar',
					dataRapPath: 'Recht.Vollstreckbarkeit.Vollstreckbar',
					codestable: 'Vollstreckbarkeit.Dropdown+'
				}, {
					fldtype: 'Date',
					label: 'Unterschr.-Datum',
					id: 'Recht_EintrDatum',
					dataRapPath: 'Recht.EintrDatum'
				}
			],
			subitems: [{
					cardinality: '+',
					opDelLastSubitem: true,
					label: 'Einschr. Vollstreckbarkeit allg',
					dynamicSubitem: {
						label: 'Einschr. Vollstreckbarkeit allg (###1###) ',
						inputFields: [{
								fldtype: 'Text',
								label: 'Betrag i.W.',
								id: 'Recht_Vollstreckbarkeit_Teil_Betrag_Wert_InWorten_###1###_',
								dataRapPath: 'Recht.Vollstreckbarkeit.Teil.Betrag.Wert.InWorten[###1###]'
							}, {
								fldtype: 'Text',
								label: 'Währung lang',
								id: 'Recht_Vollstreckbarkeit_Teil_Betrag_Waehrung_InWorten_###1###_',
								dataRapPath: 'Recht.Vollstreckbarkeit.Teil.Betrag.Waehrung.InWorten[###1###]',
								codestable: 'WaehrungInWorten.Auto'
							}, {
								fldtype: 'Text',
								label: 'Betrag i. Z.',
								id: 'Recht_Vollstreckbarkeit_Teil_Betrag_Wert_InZiffern_###1###_',
								dataRapPath: 'Recht.Vollstreckbarkeit.Teil.Betrag.Wert.InZiffern[###1###]'
							}, {
								fldtype: 'Text',
								label: 'Währung i. KF',
								id: 'Recht_Vollstreckbarkeit_Teil_Betrag_Waehrung_InAbk_###1###_',
								dataRapPath: 'Recht.Vollstreckbarkeit.Teil.Betrag.Waehrung.InAbk[###1###]',
								codestable: 'Waehrungscode.Auto'
							}, {
								fldtype: 'Text',
								label: 'Zusatz',
								id: 'Recht_Vollstreckbarkeit_Teil_Zusatz_###1###_',
								dataRapPath: 'Recht.Vollstreckbarkeit.Teil.Zusatz[###1###]'
							}
						]
					}
				}, {
					cardinality: 'n',
					opDelLastSubitem: true,
					label: 'Einschr. Vollstreckbarkeit MEA/BuSt.',
					dynamicSubitem: {
						label: 'Einschr. Vollstreckbarkeit MEA/BuSt. (###1###) ',
						inputFields: [{
								fldtype: 'Text',
								label: 'lfd. Nr. BV',
								id: 'Recht_Vollstreckbarkeit_BVNr_###1###_',
								dataRapPath: 'Recht.Vollstreckbarkeit.BVNr[###1###]'
							}, {
								fldtype: 'Number',
								label: 'Ant. Zähler',
								id: 'Recht_Vollstreckbarkeit_BezugInAbt1_###1###_Anteil_InZiffern_Bruch_Zaehler',
								dataRapPath: 'Recht.Vollstreckbarkeit.BezugInAbt1[###1###].Anteil.InZiffern.Bruch.Zaehler'
							}, {
								fldtype: 'Number',
								label: 'Ant. Nenner',
								id: 'Recht_Vollstreckbarkeit_BezugInAbt1_###1###_Anteil_InZiffern_Bruch_Nenner',
								dataRapPath: 'Recht.Vollstreckbarkeit.BezugInAbt1[###1###].Anteil.InZiffern.Bruch.Nenner'
							}, {
								fldtype: 'Text',
								label: 'Ant. Sonst.',
								id: 'Recht_Vollstreckbarkeit_BezugInAbt1_###1###_Anteil_InZiffern_Dezimal',
								dataRapPath: 'Recht.Vollstreckbarkeit.BezugInAbt1[###1###].Anteil.InZiffern.Dezimal'
							}, {
								fldtype: 'Text',
								label: 'Ant. i. W',
								id: 'Recht_Vollstreckbarkeit_BezugInAbt1_###1###_Anteil_InWorten',
								dataRapPath: 'Recht.Vollstreckbarkeit.BezugInAbt1[###1###].Anteil.InWorten'
							}, {
								fldtype: 'Text',
								label: 'lfd. Nr. Abt. I',
								id: 'Recht_Vollstreckbarkeit_BezugInAbt1_###1###_lfdNr',
								dataRapPath: 'Recht.Vollstreckbarkeit.BezugInAbt1[###1###].lfdNr'
							}, {
								fldtype: 'Text',
								label: 'Titel',
								id: 'Recht_Vollstreckbarkeit_BezugInAbt1_###1###_Eigentuemer_Natuer_Person_Titel',
								dataRapPath: 'Recht.Vollstreckbarkeit.BezugInAbt1[###1###].Eigentuemer.Natuer.Person.Titel',
								codestable: 'Titel.Dropdown+'
							}, {
								fldtype: 'Text',
								label: 'Namensvorsatz',
								id: 'Recht_Vollstreckbarkeit_BezugInAbt1_###1###_Eigentuemer_Natuer_Person_NameVorsatz',
								dataRapPath: 'Recht.Vollstreckbarkeit.BezugInAbt1[###1###].Eigentuemer.Natuer.Person.NameVorsatz'
							}, {
								fldtype: 'Text',
								label: 'Vorname',
								id: 'Recht_Vollstreckbarkeit_BezugInAbt1_###1###_Eigentuemer_Natuer_Person_Vorname',
								dataRapPath: 'Recht.Vollstreckbarkeit.BezugInAbt1[###1###].Eigentuemer.Natuer.Person.Vorname'
							}, {
								fldtype: 'Text',
								label: 'Namenszusatz',
								id: 'Recht_Vollstreckbarkeit_BezugInAbt1_###1###_Eigentuemer_Natuer_Person_NameZusatz',
								dataRapPath: 'Recht.Vollstreckbarkeit.BezugInAbt1[###1###].Eigentuemer.Natuer.Person.NameZusatz'
							}, {
								fldtype: 'Text',
								label: 'Nachname',
								id: 'Recht_Vollstreckbarkeit_BezugInAbt1_###1###_Eigentuemer_Natuer_Person_Nachname',
								dataRapPath: 'Recht.Vollstreckbarkeit.BezugInAbt1[###1###].Eigentuemer.Natuer.Person.Nachname'
							}, {
								fldtype: 'Text',
								label: 'Geburtsname',
								id: 'Recht_Vollstreckbarkeit_BezugInAbt1_###1###_Eigentuemer_Natuer_Person_Geburtsname',
								dataRapPath: 'Recht.Vollstreckbarkeit.BezugInAbt1[###1###].Eigentuemer.Natuer.Person.Geburtsname'
							}, {
								fldtype: 'Text',
								label: 'Firma/Bezeichnung',
								id: 'Recht_Vollstreckbarkeit_BezugInAbt1_###1###_Eigentuemer_Jurist_Bez',
								dataRapPath: 'Recht.Vollstreckbarkeit.BezugInAbt1[###1###].Eigentuemer.Jurist.Bez'
							}, {
								fldtype: 'Text',
								label: 'Sitz Ort',
								id: 'Recht_Vollstreckbarkeit_BezugInAbt1_###1###_Eigentuemer_Jurist_Sitz_Ort',
								dataRapPath: 'Recht.Vollstreckbarkeit.BezugInAbt1[###1###].Eigentuemer.Jurist.Sitz.Ort'
							}, {
								fldtype: 'Text',
								label: 'KöR Bezeichnung',
								id: 'Recht_Vollstreckbarkeit_BezugInAbt1_###1###_Eigentuemer_Koerper_Name',
								dataRapPath: 'Recht.Vollstreckbarkeit.BezugInAbt1[###1###].Eigentuemer.Koerper.Name'
							}, {
								fldtype: 'Text',
								label: 'Zusatz § 15 GBV',
								id: 'Recht_Vollstreckbarkeit_BezugInAbt1_###1###_Eigentuemer_Koerper_VermTeil',
								dataRapPath: 'Recht.Vollstreckbarkeit.BezugInAbt1[###1###].Eigentuemer.Koerper.VermTeil'
							}, {
								fldtype: 'Text',
								label: 'KöR Ort',
								id: 'Recht_Vollstreckbarkeit_BezugInAbt1_###1###_Eigentuemer_Koerper_Sitz_Ort',
								dataRapPath: 'Recht.Vollstreckbarkeit.BezugInAbt1[###1###].Eigentuemer.Koerper.Sitz.Ort'
							}
						]
					}
				}, {
					cardinality: 'n',
					opDelLastSubitem: true,
					label: 'Recht Abteilung III sonstiges',
					dynamicSubitem: {
						label: 'Recht Abteilung III sonstiges (###1###) ',
						inputFields: [{
								fldtype: 'Checkbox',
								label: 'Bed.',
								id: 'Recht_Bedingung_bedingt_###1###_',
								dataRapPath: 'Recht.Bedingung.bedingt[###1###]'
							}, {
								fldtype: 'Text',
								label: 'Bed. Text',
								id: 'Recht_Bedingung_Text_###1###_',
								dataRapPath: 'Recht.Bedingung.Text[###1###]'
							}, {
								fldtype: 'Text',
								label: 'Bed. Art',
								id: 'Recht_Bedingung_Art_###1###_',
								dataRapPath: 'Recht.Bedingung.Art[###1###]',
								codestable: 'BedingungP10ZVG.Auto'
							}, {
								fldtype: 'Checkbox',
								label: 'Befr.',
								id: 'Recht_Befristung_befristet_###1###_',
								dataRapPath: 'Recht.Befristung.befristet[###1###]'
							}, {
								fldtype: 'Text',
								label: 'Befr. Berechnungsvorschr.',
								id: 'Recht_Befristung_Berechnung_###1###_',
								dataRapPath: 'Recht.Befristung.Berechnung[###1###]'
							}, {
								fldtype: 'Text',
								label: 'Befr. Endtermin',
								id: 'Recht_Befristung_Ende_###1###_',
								dataRapPath: 'Recht.Befristung.Ende[###1###]'
							}, {
								fldtype: 'Text',
								label: 'Verf.-Beschr.',
								id: 'Recht_VerfBeschr_###1###_',
								dataRapPath: 'Recht.VerfBeschr[###1###]'
							}, {
								fldtype: 'Text',
								label: 'LöschAusschl',
								id: 'Recht_AusschlussLoeschungsanspruch_AusschlLoeAnsp_###1###_',
								dataRapPath: 'Recht.AusschlussLoeschungsanspruch.AusschlLoeAnsp[###1###]'
							}, {
								fldtype: 'Text',
								label: 'LöschAusschl. Vorschr.',
								id: 'Recht_AusschlussLoeschungsanspruch_Paragraph_###1###_',
								dataRapPath: 'Recht.AusschlussLoeschungsanspruch.Paragraph[###1###]',
								codestable: 'Ausschluss1179Paragraph.Auto'
							}, {
								fldtype: 'Checkbox',
								label: 'LöschAusschl. teilw.',
								id: 'Recht_AusschlussLoeschungsanspruch_teilweise_###1###_',
								dataRapPath: 'Recht.AusschlussLoeschungsanspruch.teilweise[###1###]'
							}, {
								fldtype: 'Text',
								label: 'LöschAusschl. Recht Abt.',
								id: 'Recht_Rang_###1###_Recht_Rechtsbezeichnung_Abteilung',
								dataRapPath: 'Recht.Rang[###1###].Recht.Rechtsbezeichnung.Abteilung'
							}, {
								fldtype: 'Text',
								label: 'LöschAusschl. Recht Nr.',
								id: 'Recht_AusschlussLoeschungsanspruch_betrRechte_###1###_Rechtsbezeichnung_LfdNr',
								dataRapPath: 'Recht.AusschlussLoeschungsanspruch.betrRechte[###1###].Rechtsbezeichnung.LfdNr'
							}, {
								fldtype: 'Text',
								label: 'LöschAusschl. Rechtsart',
								id: 'Recht_AusschlussLoeschungsanspruch_betrRechte_###1###_Rechtsbezeichnung_Art',
								dataRapPath: 'Recht.AusschlussLoeschungsanspruch.betrRechte[###1###].Rechtsbezeichnung.Art',
								codestable: 'Rechtsart.Auto'
							}, {
								fldtype: 'Text',
								label: 'Betrag i.W.',
								id: 'Recht_AusschlussLoeschungsanspruch_betrRechte_###1###_Betrag_Wert_InWorten',
								dataRapPath: 'Recht.AusschlussLoeschungsanspruch.betrRechte[###1###].Betrag.Wert.InWorten'
							}, {
								fldtype: 'Text',
								label: 'Währung lang',
								id: 'Recht_AusschlussLoeschungsanspruch_betrRechte_###1###_Betrag_Waehrung_InWorten',
								dataRapPath: 'Recht.AusschlussLoeschungsanspruch.betrRechte[###1###].Betrag.Waehrung.InWorten',
								codestable: 'WaehrungInWorten.Auto'
							}, {
								fldtype: 'Text',
								label: 'Betrag i. Z.',
								id: 'Recht_AusschlussLoeschungsanspruch_betrRechte_###1###_Betrag_Wert_InZiffern',
								dataRapPath: 'Recht.AusschlussLoeschungsanspruch.betrRechte[###1###].Betrag.Wert.InZiffern'
							}, {
								fldtype: 'Text',
								label: 'Währung i. KF',
								id: 'Recht_AusschlussLoeschungsanspruch_betrRechte_###1###_Betrag_Waehrung_InAbk',
								dataRapPath: 'Recht.AusschlussLoeschungsanspruch.betrRechte[###1###].Betrag.Waehrung.InAbk',
								codestable: 'Waehrungscode.Auto'
							}, {
								fldtype: 'Text',
								label: 'AbtrAusschl. Art',
								id: 'Recht_AbtretungsUndVerpfaendungsausschluss_Art_###1###_',
								dataRapPath: 'Recht.AbtretungsUndVerpfaendungsausschluss.Art[###1###]',
								codestable: 'Abtretungsausschluss.Dropdown+'
							}, {
								fldtype: 'Text',
								label: 'ZH Eintr.-Grund',
								id: 'Recht_ZwangSiHypo_Grund_###1###_',
								dataRapPath: 'Recht.ZwangSiHypo.Grund[###1###]',
								codestable: 'EintragungsgrundAbt3.Auto'
							}, {
								fldtype: 'Checkbox',
								label: 'Bed. § 10 ZVG',
								id: 'Recht_ZwangSiHypo_P10ZVG_BedingungP10ZVG_###1###_',
								dataRapPath: 'Recht.ZwangSiHypo.P10ZVG.BedingungP10ZVG[###1###]'
							}, {
								fldtype: 'Text',
								label: '§ 10 ZVG Betrag i. Z.',
								id: 'Recht_ZwangSiHypo_P10ZVG_Betrag_Wert_InZiffern_###1###_',
								dataRapPath: 'Recht.ZwangSiHypo.P10ZVG.Betrag.Wert.InZiffern[###1###]'
							}, {
								fldtype: 'Text',
								label: '§ 10 ZVG Währung KF',
								id: 'Recht_ZwangSiHypo_P10ZVG_Betrag_Waehrung_InAbk_###1###_',
								dataRapPath: 'Recht.ZwangSiHypo.P10ZVG.Betrag.Waehrung.InAbk[###1###]',
								codestable: 'Waehrungscode.Auto'
							}, {
								fldtype: 'Text',
								label: '§ 10 ZVG Betrag i. W.',
								id: 'Recht_ZwangSiHypo_P10ZVG_Betrag_Wert_InWorten_###1###_',
								dataRapPath: 'Recht.ZwangSiHypo.P10ZVG.Betrag.Wert.InWorten[###1###]'
							}, {
								fldtype: 'Text',
								label: '§ 10 ZVG Währung LF',
								id: 'Recht_ZwangSiHypo_P10ZVG_Betrag_Waehrung_InWorten_###1###_',
								dataRapPath: 'Recht.ZwangSiHypo.P10ZVG.Betrag.Waehrung.InWorten[###1###]',
								codestable: 'WaehrungInWorten.Auto'
							}, {
								fldtype: 'Checkbox',
								label: 'Umschr. Vorm.',
								id: 'Recht_UmschreibungAusVormerkung_###1###_',
								dataRapPath: 'Recht.UmschreibungAusVormerkung[###1###]'
							}, {
								fldtype: 'Checkbox',
								label: 'Umschr. Widerspr.',
								id: 'Recht_UmschreibungAusWiderspruch_###1###_',
								dataRapPath: 'Recht.UmschreibungAusWiderspruch[###1###]'
							}, {
								fldtype: 'Text',
								label: 'Fälligkeit',
								id: 'Recht_Sonstiges_###1###_Faellig',
								dataRapPath: 'Recht.Sonstiges[###1###].Faellig'
							}, {
								fldtype: 'Checkbox',
								label: 'Verz. Widerspr.',
								id: 'Recht_Sonstiges_###1###_VerzWidSprch',
								dataRapPath: 'Recht.Sonstiges[###1###].VerzWidSprch'
							}, {
								fldtype: 'Text',
								label: 'Kündigungsbedingungen',
								id: 'Recht_Sonstiges_###1###_Kündigungsbedindungen',
								dataRapPath: 'Recht.Sonstiges[###1###].Kündigungsbedindungen'
							}
						]
					}
				}, {
					cardinality: '+',
					opDelLastSubitem: true,
					label: 'Rentenschuld',
					dynamicSubitem: {
						label: 'Rentenschuld (###1###) ',
						inputFields: [{
								fldtype: 'Text',
								label: 'Rente Betrag i. Z.',
								id: 'Recht_Rentenschuld_Betrag_Wert_InZiffern_###1###_',
								dataRapPath: 'Recht.Rentenschuld.Betrag.Wert.InZiffern[###1###]'
							}, {
								fldtype: 'Text',
								label: 'Rente Währung KF',
								id: 'Recht_Rentenschuld_Betrag_Waehrung_InAbk_###1###_',
								dataRapPath: 'Recht.Rentenschuld.Betrag.Waehrung.InAbk[###1###]',
								codestable: 'Waehrungscode.Auto'
							}, {
								fldtype: 'Text',
								label: 'Rente Betrag i. W.',
								id: 'Recht_Rentenschuld_Betrag_Wert_InWorten_###1###_',
								dataRapPath: 'Recht.Rentenschuld.Betrag.Wert.InWorten[###1###]'
							}, {
								fldtype: 'Text',
								label: 'Rente Währung LF',
								id: 'Recht_Rentenschuld_Betrag_Waehrung_InWorten_###1###_',
								dataRapPath: 'Recht.Rentenschuld.Betrag.Waehrung.InWorten[###1###]',
								codestable: 'WaehrungInWorten.Auto'
							}, {
								fldtype: 'Text',
								label: 'Zahlungsbed.',
								id: 'Recht_Rentenschuld_Zahlungsbedingungen_###1###_',
								dataRapPath: 'Recht.Rentenschuld.Zahlungsbedingungen[###1###]'
							}, {
								fldtype: 'Date',
								label: 'Starttermin',
								id: 'Recht_Rentenschuld_Starttermin_###1###_',
								dataRapPath: 'Recht.Rentenschuld.Starttermin[###1###]'
							}, {
								fldtype: 'Text',
								label: 'Intervall',
								id: 'Recht_Rentenschuld_Intervall_###1###_',
								dataRapPath: 'Recht.Rentenschuld.Intervall[###1###]',
								codestable: 'Nebenleistungsintervall.Dropdown'
							}
						]
					}
				}
			]
		}, {
			opDelLastSubitem: true,
			label: 'Gläubiger',
			cardinality: 'n',
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
					}, {
						fldtype: 'Text',
						label: 'Sitz Ort',
						id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_Eigentuemer_Jurist_Sitz_Ort_1',
						dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte.Eigentuemer.Jurist.Sitz.Ort[1]'
					}, {
						fldtype: 'Text',
						label: 'Sitz Ort',
						id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_Eigentuemer_Jurist_Sitz_Ort_2',
						dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte.Eigentuemer.Jurist.Sitz.Ort[2]'
					}, {
						fldtype: 'Text',
						label: 'Sitz Ort',
						id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_Eigentuemer_Jurist_Sitz_Ort_3',
						dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte.Eigentuemer.Jurist.Sitz.Ort[3]'
					}, {
						fldtype: 'Text',
						label: 'Reg.Gericht',
						id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_Eigentuemer_Jurist_Register_Gericht',
						dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte.Eigentuemer.Jurist.Register.Gericht'
					}, {
						fldtype: 'Text',
						label: 'Reg.Art',
						id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_Eigentuemer_Jurist_Register_Art',
						dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte.Eigentuemer.Jurist.Register.Art',
						codestable: 'Registerart.Dropdown+'
					}, {
						fldtype: 'Number',
						label: 'Reg.Nr',
						id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_Eigentuemer_Jurist_Register_Nr',
						dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte.Eigentuemer.Jurist.Register.Nr'
					}, {
						fldtype: 'Text',
						label: 'Sitz PLZ',
						id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_Eigentuemer_Jurist_Sitz_PLZ_1',
						dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte.Eigentuemer.Jurist.Sitz.PLZ[1]'
					}, {
						fldtype: 'Text',
						label: 'Sitz PLZ',
						id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_Eigentuemer_Jurist_Sitz_PLZ_2',
						dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte.Eigentuemer.Jurist.Sitz.PLZ[2]'
					}, {
						fldtype: 'Text',
						label: 'Sitz PLZ',
						id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_Eigentuemer_Jurist_Sitz_PLZ_3',
						dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte.Eigentuemer.Jurist.Sitz.PLZ[3]'
					}, {
						fldtype: 'Text',
						label: 'Sitz Staat',
						id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_Eigentuemer_Jurist_Sitz_Staat',
						dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte.Eigentuemer.Jurist.Sitz.Staat'
					}, {
						fldtype: 'Number',
						label: 'Ant. Zähler',
						id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_Anteil_InZiffern_Bruch_Zaehler',
						dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte.Anteil.InZiffern.Bruch.Zaehler'
					}, {
						fldtype: 'Number',
						label: 'Ant. Nenner',
						id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_Anteil_InZiffern_Bruch_Nenner',
						dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte.Anteil.InZiffern.Bruch.Nenner'
					}, {
						fldtype: 'Text',
						label: 'Ant. i. W.',
						id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_Anteil_InWorten',
						dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte.Anteil.InWorten'
					}, {
						fldtype: 'Text',
						label: 'Ant. Sonstiges',
						id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_Anteil_InZiffern_Dezimal',
						dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte.Anteil.InZiffern.Dezimal'
					}
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
								}, {
									fldtype: 'Text',
									label: 'Ort',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_###2###_Eigentuemer_Koerper_Sitz_Ort',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte[###2###].Eigentuemer.Koerper.Sitz.Ort'
								}, {
									fldtype: 'Text',
									label: 'Zusatz § 15 GBV',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_###2###_Eigentuemer_Koerper_VermTeil',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte[###2###].Eigentuemer.Koerper.VermTeil'
								}, {
									fldtype: 'Text',
									label: 'Vertreter',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_###2###_Eigentuemer_Koerper_Vertreter_Bezeichnung',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte[###2###].Eigentuemer.Koerper.Vertreter.Bezeichnung'
								}, {
									fldtype: 'Text',
									label: 'Vertr. Sitz',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_###2###_Eigentuemer_Koerper_Vertreter_Ort',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte[###2###].Eigentuemer.Koerper.Vertreter.Ort'
								}
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
								}, {
									fldtype: 'Text',
									label: 'Vorname',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_###2###_Eigentuemer_Natuer_Person_Vorname',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte[###2###].Eigentuemer.Natuer.Person.Vorname'
								}, {
									fldtype: 'Text',
									label: 'Rufname',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_###2###_Eigentuemer_Natuer_Person_NameGenannt',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte[###2###].Eigentuemer.Natuer.Person.NameGenannt'
								}, {
									fldtype: 'Text',
									label: 'Namenszusatz',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_###2###_Eigentuemer_Natuer_Person_NameZusatz',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte[###2###].Eigentuemer.Natuer.Person.NameZusatz'
								}, {
									fldtype: 'Text',
									label: 'Nachname ',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_###2###_Eigentuemer_Natuer_Person_Nachname',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte[###2###].Eigentuemer.Natuer.Person.Nachname'
								}, {
									fldtype: 'Text',
									label: 'Geburtsname',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_###2###_Eigentuemer_Natuer_Person_Geburtsname',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte[###2###].Eigentuemer.Natuer.Person.Geburtsname'
								}, {
									fldtype: 'Date',
									label: 'Geburtsdatum',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_###2###_Eigentuemer_Natuer_Person_Geburtsdatum',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte[###2###].Eigentuemer.Natuer.Person.Geburtsdatum'
								}, {
									fldtype: 'Text',
									label: 'PLZ',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_###2###_Eigentuemer_Natuer_Person_PLZ',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte[###2###].Eigentuemer.Natuer.Person.PLZ'
								}, {
									fldtype: 'Text',
									label: 'Wohnort',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_###2###_Eigentuemer_Natuer_Person_Ort',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte[###2###].Eigentuemer.Natuer.Person.Ort'
								}, {
									fldtype: 'Text',
									label: 'Straße',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_###2###_Eigentuemer_Natuer_Person_Strasse',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte[###2###].Eigentuemer.Natuer.Person.Strasse'
								}, {
									fldtype: 'Text',
									label: 'Haus-Nr.',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_###2###_Eigentuemer_Natuer_Person_HausNr',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte[###2###].Eigentuemer.Natuer.Person.HausNr'
								}, {
									fldtype: 'Text',
									label: 'Beruf',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Beteiligte_###2###_Eigentuemer_Natuer_Person_Beruf',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Beteiligte[###2###].Eigentuemer.Natuer.Person.Beruf'
								}
							]
						}
					}, {
						cardinality: '+',
						opDelLastSubitem: true,
						label: 'Besonderer Gläubiger ',
						dynamicSubitem: {
							label: 'Besonderer Gläubiger  (###1###)  (###2###) ',
							inputFields: [{
									fldtype: 'Text',
									label: 'Besonderer Gläubiger',
									id: 'Recht_Glaeubiger_besGlaeubiger_Bezeichnung_###1###_',
									dataRapPath: 'Recht.Glaeubiger.besGlaeubiger.Bezeichnung[###1###]'
								}, {
									fldtype: 'Text',
									label: 'GB-Vertr.',
									id: 'Recht_Glaeubiger_besGlaeubiger_VertreterP1189BGB_Vertreter_###1###_',
									dataRapPath: 'Recht.Glaeubiger.besGlaeubiger.VertreterP1189BGB.Vertreter[###1###]'
								}, {
									fldtype: 'Text',
									label: 'GB-Vertr. Titel',
									id: 'Recht_Glaeubiger_besGlaeubiger_VertreterP1189BGB_Eigentuemer_Natuer_Person_Titel_###1###_',
									dataRapPath: 'Recht.Glaeubiger.besGlaeubiger.VertreterP1189BGB.Eigentuemer.Natuer.Person.Titel[###1###]',
									codestable: 'Titel.Dropdown+'
								}, {
									fldtype: 'Text',
									label: 'GB-Vertr. Namensvorsatz',
									id: 'Recht_Glaeubiger_besGlaeubiger_VertreterP1189BGB_Eigentuemer_Natuer_Person_NameVorsatz_###1###_',
									dataRapPath: 'Recht.Glaeubiger.besGlaeubiger.VertreterP1189BGB.Eigentuemer.Natuer.Person.NameVorsatz[###1###]'
								}, {
									fldtype: 'Text',
									label: 'GB-Vertr. Vorname',
									id: 'Recht_Glaeubiger_besGlaeubiger_VertreterP1189BGB_Eigentuemer_Natuer_Person_Vorname_###1###_',
									dataRapPath: 'Recht.Glaeubiger.besGlaeubiger.VertreterP1189BGB.Eigentuemer.Natuer.Person.Vorname[###1###]'
								}, {
									fldtype: 'Text',
									label: 'GB-Vertr. Namenszusatz',
									id: 'Recht_Glaeubiger_besGlaeubiger_VertreterP1189BGB_Eigentuemer_Natuer_Person_NameZusatz_###1###_',
									dataRapPath: 'Recht.Glaeubiger.besGlaeubiger.VertreterP1189BGB.Eigentuemer.Natuer.Person.NameZusatz[###1###]'
								}, {
									fldtype: 'Text',
									label: 'GB-Vertr. Nachname',
									id: 'Recht_Glaeubiger_besGlaeubiger_VertreterP1189BGB_Eigentuemer_Natuer_Person_Nachname_###1###_',
									dataRapPath: 'Recht.Glaeubiger.besGlaeubiger.VertreterP1189BGB.Eigentuemer.Natuer.Person.Nachname[###1###]'
								}, {
									fldtype: 'Text',
									label: 'GB-Vertr. Geb.-Name',
									id: 'Recht_Glaeubiger_besGlaeubiger_VertreterP1189BGB_Eigentuemer_Natuer_Person_Geburtsname_###1###_',
									dataRapPath: 'Recht.Glaeubiger.besGlaeubiger.VertreterP1189BGB.Eigentuemer.Natuer.Person.Geburtsname[###1###]'
								}, {
									fldtype: 'Date',
									label: 'GB-Vertr. Geb.-Datum',
									id: 'Recht_Glaeubiger_besGlaeubiger_VertreterP1189BGB_Eigentuemer_Natuer_Person_Geburtsdatum_###1###_',
									dataRapPath: 'Recht.Glaeubiger.besGlaeubiger.VertreterP1189BGB.Eigentuemer.Natuer.Person.Geburtsdatum[###1###]'
								}, {
									fldtype: 'Text',
									label: 'GB-Vertr. Wohnort',
									id: 'Recht_Glaeubiger_besGlaeubiger_VertreterP1189BGB_Eigentuemer_Natuer_Person_Ort_###1###_',
									dataRapPath: 'Recht.Glaeubiger.besGlaeubiger.VertreterP1189BGB.Eigentuemer.Natuer.Person.Ort[###1###]'
								}, {
									fldtype: 'Text',
									label: 'Firma/Bezeichnung',
									id: 'Recht_Glaeubiger_besGlaeubiger_VertreterP1189BGB_Eigentuemer_Jurist_Bez_###1###_',
									dataRapPath: 'Recht.Glaeubiger.besGlaeubiger.VertreterP1189BGB.Eigentuemer.Jurist.Bez[###1###]'
								}, {
									fldtype: 'Text',
									label: 'Sitz Ort',
									id: 'Recht_Glaeubiger_besGlaeubiger_VertreterP1189BGB_Eigentuemer_Jurist_Sitz_###1###_Ort_###2###_',
									dataRapPath: 'Recht.Glaeubiger.besGlaeubiger.VertreterP1189BGB.Eigentuemer.Jurist.Sitz[###1###].Ort[###2###]'
								}
							]
						}
					}, {
						cardinality: 'n',
						opDelLastSubitem: true,
						label: 'Gläubigermehrheit Anteilsverhältnis',
						dynamicSubitem: {
							label: 'Gläubigermehrheit Anteilsverhältnis (###1###)  (###2###) ',
							inputFields: [{
									fldtype: 'Text',
									label: 'Gl. lfd. Nr.',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Anteilsverhaeltnis_LfdNrBeteilEig_###2###_',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Anteilsverhaeltnis.LfdNrBeteilEig[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Gem. Ant.-Verh.',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Anteilsverhaeltnis_Je_###2###_',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Anteilsverhaeltnis.Je[###2###]'
								}, {
									fldtype: 'Number',
									label: 'Ant. Zähler',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Anteilsverhaeltnis_Anteil_InZiffern_Bruch_Zaehler_###2###_',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Anteilsverhaeltnis.Anteil.InZiffern.Bruch.Zaehler[###2###]'
								}, {
									fldtype: 'Number',
									label: 'Ant. Nenner',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Anteilsverhaeltnis_Anteil_InZiffern_Bruch_Nenner_###2###_',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Anteilsverhaeltnis.Anteil.InZiffern.Bruch.Nenner[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Ant. i. W.',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Anteilsverhaeltnis_Anteil_InWorten_###2###_',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Anteilsverhaeltnis.Anteil.InWorten[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Ant. Sonstiges',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Anteilsverhaeltnis_Anteil_InZiffern_Dezimal_###2###_',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Anteilsverhaeltnis.Anteil.InZiffern.Dezimal[###2###]'
								}
							]
						}
					}, {
						cardinality: '+',
						opDelLastSubitem: true,
						label: 'Gläubigermehrheit Gemeinschaftsverhältnis',
						dynamicSubitem: {
							label: 'Gläubigermehrheit Gemeinschaftsverhältnis (###1###)  (###2###) ',
							inputFields: [{
									fldtype: 'Text',
									label: 'Gl. lfd. Nr.',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Gemeinschaftsverhaeltnis_BetLfdNrEig_###2###_',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Gemeinschaftsverhaeltnis.BetLfdNrEig[###2###]'
								}, {
									fldtype: 'Number',
									label: 'Ant. Zähler',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Gemeinschaftsverhaeltnis_Anteil_InZiffern_Bruch_Zaehler_###2###_',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Gemeinschaftsverhaeltnis.Anteil.InZiffern.Bruch.Zaehler[###2###]'
								}, {
									fldtype: 'Number',
									label: 'Ant. Nenner',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Gemeinschaftsverhaeltnis_Anteil_InZiffern_Bruch_Nenner_###2###_',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Gemeinschaftsverhaeltnis.Anteil.InZiffern.Bruch.Nenner[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Ant. i. W.',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Gemeinschaftsverhaeltnis_Anteil_InWorten_###2###_',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Gemeinschaftsverhaeltnis.Anteil.InWorten[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Ant. Sonstiges',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Gemeinschaftsverhaeltnis_Anteil_InZiffern_Dezimal_###2###_',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Gemeinschaftsverhaeltnis.Anteil.InZiffern.Dezimal[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Gemeinschaftsverhältnis',
									id: 'Recht_Glaeubiger_normlGlaeubigerVar1_###1###_Gemeinschaftsverhaeltnis_Art_###2###_',
									dataRapPath: 'Recht.Glaeubiger.normlGlaeubigerVar1[###1###].Gemeinschaftsverhaeltnis.Art[###2###]',
									codestable: 'Gemeinschaftsverhaeltnis.Dropdown+'
								}
							]
						}
					}
				]
			}
		}, {
			opDelLastSubitem: true,
			label: 'Zinsen/Nebenleistung',
			cardinality: 'n',
			dynamicSubitem: {
				label: 'Zinsen/Nebenleistung (###1###) ',
				inputFields: [{
						fldtype: 'Text',
						label: 'Zins % fest i. Z.',
						id: 'Recht_Zinsen_###1###_Prozent_InZiffern',
						dataRapPath: 'Recht.Zinsen[###1###].Prozent.InZiffern'
					}, {
						fldtype: 'Text',
						label: 'Zins % fest i. W.',
						id: 'Recht_Zinsen_###1###_Prozent_InWorten',
						dataRapPath: 'Recht.Zinsen[###1###].Prozent.InWorten'
					}, {
						fldtype: 'Text',
						label: 'Zins Intervall',
						id: 'Recht_Zinsen_###1###_Intervall',
						dataRapPath: 'Recht.Zinsen[###1###].Intervall',
						codestable: 'InterestInterval.Dropdown'
					}, {
						fldtype: 'Text',
						label: 'Zins Art',
						id: 'Recht_Zinsen_###1###_Bezeichnung',
						dataRapPath: 'Recht.Zinsen[###1###].Bezeichnung',
						codestable: 'Zinstyp.Dropdown+'
					}, {
						fldtype: 'Text',
						label: 'Nebenl. % fest i.Z.',
						id: 'Recht_Nebenleistungen_###1###_Prozent_InZiffern',
						dataRapPath: 'Recht.Nebenleistungen[###1###].Prozent.InZiffern'
					}, {
						fldtype: 'Text',
						label: 'Nebenl. % fest i.W.',
						id: 'Recht_Nebenleistungen_###1###_Prozent_InWorten',
						dataRapPath: 'Recht.Nebenleistungen[###1###].Prozent.InWorten'
					}, {
						fldtype: 'Text',
						label: 'Nebenl. Intervall',
						id: 'Recht_Nebenleistungen_###1###_Intervall',
						dataRapPath: 'Recht.Nebenleistungen[###1###].Intervall',
						codestable: 'Nebenleistungsintervall.Dropdown'
					}, {
						fldtype: 'Text',
						label: 'Nebenleistung Art',
						id: 'Recht_Nebenleistungen_###1###_Bezeich',
						dataRapPath: 'Recht.Nebenleistungen[###1###].Bezeich',
						codestable: 'Nebenleistungsbezeichnung.Auto'
					}
				],
				subitems: [{
						cardinality: '+',
						opDelLastSubitem: true,
						label: 'Zinsen sonstiges',
						dynamicSubitem: {
							label: 'Zinsen sonstiges (###1###)  (###2###) ',
							inputFields: [{
									fldtype: 'Text',
									label: '% variabel',
									id: 'Recht_Zinsen_###1###_Prozent_Berechnung_###2###_',
									dataRapPath: 'Recht.Zinsen[###1###].Prozent.Berechnung[###2###]',
									codestable: 'BerechnungsvorschriftZinsen.Auto'
								}, {
									fldtype: 'Text',
									label: 'Bezugsbetrag i. Z.',
									id: 'Recht_Zinsen_###1###_Prozent_Betrag_Wert_InZiffern_###2###_',
									dataRapPath: 'Recht.Zinsen[###1###].Prozent.Betrag.Wert.InZiffern[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Bezugsbetrag Währung KF',
									id: 'Recht_Zinsen_###1###_Prozent_Betrag_Waehrung_InAbk_###2###_',
									dataRapPath: 'Recht.Zinsen[###1###].Prozent.Betrag.Waehrung.InAbk[###2###]',
									codestable: 'Waehrungscode.Auto'
								}, {
									fldtype: 'Text',
									label: 'Bezugsbetrag i. W.',
									id: 'Recht_Zinsen_###1###_Prozent_Betrag_Wert_InWorten_###2###_',
									dataRapPath: 'Recht.Zinsen[###1###].Prozent.Betrag.Wert.InWorten[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Bezugsbetrag Währung LF',
									id: 'Recht_Zinsen_###1###_Prozent_Betrag_Waehrung_InWorten_###2###_',
									dataRapPath: 'Recht.Zinsen[###1###].Prozent.Betrag.Waehrung.InWorten[###2###]',
									codestable: 'WaehrungInWorten.Auto'
								}, {
									fldtype: 'Text',
									label: 'Festbetrag i. Z.',
									id: 'Recht_Zinsen_###1###_Fest_Betrag_Wert_InZiffern_###2###_',
									dataRapPath: 'Recht.Zinsen[###1###].Fest.Betrag.Wert.InZiffern[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Festbetrag Währung KF',
									id: 'Recht_Zinsen_###1###_Fest_Betrag_Waehrung_InAbk_###2###_',
									dataRapPath: 'Recht.Zinsen[###1###].Fest.Betrag.Waehrung.InAbk[###2###]',
									codestable: 'Waehrungscode.Auto'
								}, {
									fldtype: 'Text',
									label: 'Festbetrag i. W.',
									id: 'Recht_Zinsen_###1###_Fest_Betrag_Wert_InWorten_###2###_',
									dataRapPath: 'Recht.Zinsen[###1###].Fest.Betrag.Wert.InWorten[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Festbetrag Währung LF',
									id: 'Recht_Zinsen_###1###_Fest_Betrag_Waehrung_InWorten_###2###_',
									dataRapPath: 'Recht.Zinsen[###1###].Fest.Betrag.Waehrung.InWorten[###2###]',
									codestable: 'WaehrungInWorten.Auto'
								}, {
									fldtype: 'Text',
									label: '% min.',
									id: 'Recht_Zinsen_###1###_ZinsBerenzung_###2###_Min',
									dataRapPath: 'Recht.Zinsen[###1###].ZinsBerenzung[###2###].Min'
								}, {
									fldtype: 'Text',
									label: '% max.',
									id: 'Recht_Zinsen_###1###_ZinsBerenzung_###2###_Max',
									dataRapPath: 'Recht.Zinsen[###1###].ZinsBerenzung[###2###].Max'
								}, {
									fldtype: 'Text',
									label: 'Zinsbegr. Zusatz',
									id: 'Recht_Zinsen_###1###_Zusatz_###2###_',
									dataRapPath: 'Recht.Zinsen[###1###].Zusatz[###2###]'
								}, {
									fldtype: 'Date',
									label: 'Datum Beginn',
									id: 'Recht_Zinsen_###1###_Beginn_Datum_###2###_',
									dataRapPath: 'Recht.Zinsen[###1###].Beginn.Datum[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Beginn i. W.',
									id: 'Recht_Zinsen_###1###_Beginn_InWorten_###2###_',
									dataRapPath: 'Recht.Zinsen[###1###].Beginn.InWorten[###2###]',
									codestable: 'BeginnInWorten.Auto'
								}, {
									fldtype: 'Checkbox',
									label: 'Bed.',
									id: 'Recht_Zinsen_###1###_Bedingung_bedingt_###2###_',
									dataRapPath: 'Recht.Zinsen[###1###].Bedingung.bedingt[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Bed. Text',
									id: 'Recht_Zinsen_###1###_Bedingung_Text_###2###_',
									dataRapPath: 'Recht.Zinsen[###1###].Bedingung.Text[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Bed. Art',
									id: 'Recht_Zinsen_###1###_Bedingung_Art_###2###_',
									dataRapPath: 'Recht.Zinsen[###1###].Bedingung.Art[###2###]',
									codestable: 'BedingungP10ZVG.Auto'
								}, {
									fldtype: 'Checkbox',
									label: 'Befr.',
									id: 'Recht_Zinsen_###1###_Befristung_befristet_###2###_',
									dataRapPath: 'Recht.Zinsen[###1###].Befristung.befristet[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Befr. Berechnungsvorschr.',
									id: 'Recht_Zinsen_###1###_Befristung_Berechnung_###2###_',
									dataRapPath: 'Recht.Zinsen[###1###].Befristung.Berechnung[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Befr. Endtermin',
									id: 'Recht_Zinsen_###1###_Befristung_Ende_###2###_',
									dataRapPath: 'Recht.Zinsen[###1###].Befristung.Ende[###2###]'
								}
							]
						}
					}, {
						cardinality: '+',
						opDelLastSubitem: true,
						label: 'Nebenleistung sonstiges',
						dynamicSubitem: {
							label: 'Nebenleistung sonstiges (###1###)  (###2###) ',
							inputFields: [{
									fldtype: 'Text',
									label: 'NL variabel',
									id: 'Recht_Nebenleistungen_###1###_Prozent_Berechnung_###2###_',
									dataRapPath: 'Recht.Nebenleistungen[###1###].Prozent.Berechnung[###2###]',
									codestable: 'BerechnungsvorschriftNebenleistungen.Auto'
								}, {
									fldtype: 'Text',
									label: '% min.',
									id: 'Recht_Nebenleistungen_###1###_Begrenzung_###2###_Min',
									dataRapPath: 'Recht.Nebenleistungen[###1###].Begrenzung[###2###].Min'
								}, {
									fldtype: 'Text',
									label: '% max.',
									id: 'Recht_Nebenleistungen_###1###_Begrenzung_###2###_Max',
									dataRapPath: 'Recht.Nebenleistungen[###1###].Begrenzung[###2###].Max'
								}, {
									fldtype: 'Text',
									label: 'Bezugsbetrag i. Z.',
									id: 'Recht_Nebenleistungen_###1###_Prozent_Betrag_Wert_InZiffern_###2###_',
									dataRapPath: 'Recht.Nebenleistungen[###1###].Prozent.Betrag.Wert.InZiffern[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Bezugsbetrag Währung KF',
									id: 'Recht_Nebenleistungen_###1###_Prozent_Betrag_Waehrung_InAbk_###2###_',
									dataRapPath: 'Recht.Nebenleistungen[###1###].Prozent.Betrag.Waehrung.InAbk[###2###]',
									codestable: 'Waehrungscode.Auto'
								}, {
									fldtype: 'Text',
									label: 'Bezugsbetrag i. W.',
									id: 'Recht_Nebenleistungen_###1###_Prozent_Betrag_Wert_InWorten_###2###_',
									dataRapPath: 'Recht.Nebenleistungen[###1###].Prozent.Betrag.Wert.InWorten[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Bezugsbetrag Währung LF',
									id: 'Recht_Nebenleistungen_###1###_Prozent_Betrag_Waehrung_InWorten_###2###_',
									dataRapPath: 'Recht.Nebenleistungen[###1###].Prozent.Betrag.Waehrung.InWorten[###2###]',
									codestable: 'WaehrungInWorten.Auto'
								}, {
									fldtype: 'Text',
									label: 'Festbetrag i. Z.',
									id: 'Recht_Nebenleistungen_###1###_Fest_Betrag_Wert_InZiffern_###2###_',
									dataRapPath: 'Recht.Nebenleistungen[###1###].Fest.Betrag.Wert.InZiffern[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Festbetrag Währung KF',
									id: 'Recht_Nebenleistungen_###1###_Fest_Betrag_Waehrung_InAbk_###2###_',
									dataRapPath: 'Recht.Nebenleistungen[###1###].Fest.Betrag.Waehrung.InAbk[###2###]',
									codestable: 'Waehrungscode.Auto'
								}, {
									fldtype: 'Text',
									label: 'Festbetrag i. W.',
									id: 'Recht_Nebenleistungen_###1###_Fest_Betrag_Wert_InWorten_###2###_',
									dataRapPath: 'Recht.Nebenleistungen[###1###].Fest.Betrag.Wert.InWorten[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Festbetrag Währung LF',
									id: 'Recht_Nebenleistungen_###1###_Fest_Betrag_Waehrung_InWorten_###2###_',
									dataRapPath: 'Recht.Nebenleistungen[###1###].Fest.Betrag.Waehrung.InWorten[###2###]',
									codestable: 'WaehrungInWorten.Auto'
								}, {
									fldtype: 'Date',
									label: 'Datum Beginn',
									id: 'Recht_Nebenleistungen_###1###_Beginn_Datum_###2###_',
									dataRapPath: 'Recht.Nebenleistungen[###1###].Beginn.Datum[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Beginn i. W.',
									id: 'Recht_Nebenleistungen_###1###_Beginn_InWorten_###2###_',
									dataRapPath: 'Recht.Nebenleistungen[###1###].Beginn.InWorten[###2###]',
									codestable: 'BeginnInWorten.Auto'
								}, {
									fldtype: 'Checkbox',
									label: 'Bedingt',
									id: 'Recht_Nebenleistungen_###1###_Bedingung_bedingt_###2###_',
									dataRapPath: 'Recht.Nebenleistungen[###1###].Bedingung.bedingt[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Bed. Text',
									id: 'Recht_Nebenleistungen_###1###_Bedingung_Text_###2###_',
									dataRapPath: 'Recht.Nebenleistungen[###1###].Bedingung.Text[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Bed. Art',
									id: 'Recht_Nebenleistungen_###1###_Bedingung_Art_###2###_',
									dataRapPath: 'Recht.Nebenleistungen[###1###].Bedingung.Art[###2###]',
									codestable: 'BedingungP10ZVG.Auto'
								}, {
									fldtype: 'Checkbox',
									label: 'Befristet',
									id: 'Recht_Nebenleistungen_###1###_Befristung_befristet_###2###_',
									dataRapPath: 'Recht.Nebenleistungen[###1###].Befristung.befristet[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Befr. Berechnungsvorschr.',
									id: 'Recht_Nebenleistungen_###1###_Befristung_Berechnung_###2###_',
									dataRapPath: 'Recht.Nebenleistungen[###1###].Befristung.Berechnung[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Befr. Endtermin',
									id: 'Recht_Nebenleistungen_###1###_Befristung_Ende_###2###_',
									dataRapPath: 'Recht.Nebenleistungen[###1###].Befristung.Ende[###2###]'
								}, {
									fldtype: 'Text',
									label: 'NL Zusatz',
									id: 'Recht_Nebenleistungen_###1###_Zusatz_###2###_',
									dataRapPath: 'Recht.Nebenleistungen[###1###].Zusatz[###2###]'
								}
							]
						}
					}
				]
			}
		}, {
			opDelLastSubitem: true,
			label: 'Eintragungsgrundlage',
			cardinality: 'n',
			dynamicSubitem: {
				label: 'Eintragungsgrundlage (###1###) ',
				inputFields: [{
						fldtype: 'Text',
						label: 'Eintr.Grundl.Typ',
						id: 'Recht_Eintragungsgrundlage_###1###_Art_Typ',
						dataRapPath: 'Recht.Eintragungsgrundlage[###1###].Art.Typ',
						codestable: 'Eintragungsgrundlagentyp.Dropdown+'
					}, {
						fldtype: 'Date',
						label: 'Datum',
						id: 'Recht_Eintragungsgrundlage_###1###_DatumEintrGrdLage',
						dataRapPath: 'Recht.Eintragungsgrundlage[###1###].DatumEintrGrdLage'
					}, {
						fldtype: 'Text',
						label: 'Urkundennr.',
						id: 'Recht_Eintragungsgrundlage_###1###_UrkNr',
						dataRapPath: 'Recht.Eintragungsgrundlage[###1###].UrkNr'
					}, {
						fldtype: 'Text',
						label: 'Aktenzeichen',
						id: 'Recht_Eintragungsgrundlage_###1###_AktenZeichen',
						dataRapPath: 'Recht.Eintragungsgrundlage[###1###].AktenZeichen'
					}, {
						fldtype: 'Number',
						label: 'ON',
						id: 'Recht_Eintragungsgrundlage_###1###_VerfueHinweis_OrdNr',
						dataRapPath: 'Recht.Eintragungsgrundlage[###1###].VerfueHinweis.OrdNr'
					}, {
						fldtype: 'Text',
						label: 'Blatt ON',
						id: 'Recht_Eintragungsgrundlage_###1###_VerfueHinweis_OrdNrBlatt',
						dataRapPath: 'Recht.Eintragungsgrundlage[###1###].VerfueHinweis.OrdNrBlatt'
					}
				],
				subitems: [{
						cardinality: '+',
						opDelLastSubitem: true,
						label: 'Aussteller Notar',
						dynamicSubitem: {
							label: 'Aussteller Notar (###1###)  (###2###) ',
							inputFields: [{
									fldtype: 'Text',
									label: 'Amtstitel Notar',
									id: 'Recht_Eintragungsgrundlage_###1###_Aussteller_Notar_AmtsTitel_###2###_',
									dataRapPath: 'Recht.Eintragungsgrundlage[###1###].Aussteller.Notar.AmtsTitel[###2###]',
									codestable: 'AmtstitelNotar.Dropdown'
								}, {
									fldtype: 'Text',
									label: 'Titel',
									id: 'Recht_Eintragungsgrundlage_###1###_Aussteller_Notar_Titel_###2###_',
									dataRapPath: 'Recht.Eintragungsgrundlage[###1###].Aussteller.Notar.Titel[###2###]',
									codestable: 'Titel.Dropdown+'
								}, {
									fldtype: 'Text',
									label: 'Namensvorsatz',
									id: 'Recht_Eintragungsgrundlage_###1###_Aussteller_Notar_NameVorsatz_###2###_',
									dataRapPath: 'Recht.Eintragungsgrundlage[###1###].Aussteller.Notar.NameVorsatz[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Vorname',
									id: 'Recht_Eintragungsgrundlage_###1###_Aussteller_Notar_Vorname_###2###_',
									dataRapPath: 'Recht.Eintragungsgrundlage[###1###].Aussteller.Notar.Vorname[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Namenszusatz',
									id: 'Recht_Eintragungsgrundlage_###1###_Aussteller_Notar_NameZusatz_###2###_',
									dataRapPath: 'Recht.Eintragungsgrundlage[###1###].Aussteller.Notar.NameZusatz[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Nachname ',
									id: 'Recht_Eintragungsgrundlage_###1###_Aussteller_Notar_Nachname_###2###_',
									dataRapPath: 'Recht.Eintragungsgrundlage[###1###].Aussteller.Notar.Nachname[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Sitz Notar',
									id: 'Recht_Eintragungsgrundlage_###1###_Aussteller_Notar_Ort_###2###_',
									dataRapPath: 'Recht.Eintragungsgrundlage[###1###].Aussteller.Notar.Ort[###2###]'
								}
							]
						}
					}, {
						cardinality: '+',
						opDelLastSubitem: true,
						label: 'Aussteller Behörde',
						dynamicSubitem: {
							label: 'Aussteller Behörde (###1###)  (###2###) ',
							inputFields: [{
									fldtype: 'Text',
									label: 'Firma/Bezeichnung',
									id: 'Recht_Eintragungsgrundlage_###1###_Aussteller_Sonstige_Name_###2###_',
									dataRapPath: 'Recht.Eintragungsgrundlage[###1###].Aussteller.Sonstige.Name[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Sitz Ort',
									id: 'Recht_Eintragungsgrundlage_###1###_Aussteller_Sonstige_Ort_###2###_',
									dataRapPath: 'Recht.Eintragungsgrundlage[###1###].Aussteller.Sonstige.Ort[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Verfahrensart',
									id: 'Recht_Eintragungsgrundlage_###1###_AngabeVerf_Art_###2###_',
									dataRapPath: 'Recht.Eintragungsgrundlage[###1###].AngabeVerf.Art[###2###]'
								}
							]
						}
					}
				]
			}
		}, {
			opDelLastSubitem: true,
			label: 'Rangvermerk',
			cardinality: 'n',
			dynamicSubitem: {
				label: 'Rangvermerk (###1###) ',
				inputFields: [{
						fldtype: 'Text',
						label: 'Rangart',
						id: 'Recht_Rang_###1###_Art',
						dataRapPath: 'Recht.Rang[###1###].Art',
						codestable: 'Rangart.Dropdown+'
					}, {
						fldtype: 'Text',
						label: 'Rechtsart',
						id: 'Recht_Rang_###1###_Recht_Rechtsbezeichnung_Art',
						dataRapPath: 'Recht.Rang[###1###].Recht.Rechtsbezeichnung.Art',
						codestable: 'Rechtsart.Auto'
					}, {
						fldtype: 'Text',
						label: 'lfd. Nr.',
						id: 'Recht_Rang_###1###_Recht_Rechtsbezeichnung_LfdNr',
						dataRapPath: 'Recht.Rang[###1###].Recht.Rechtsbezeichnung.LfdNr'
					}, {
						fldtype: 'Text',
						label: 'Abtlg.',
						id: 'Recht_Rang_###1###_GegenRecht_Rechtsbezeichnung_Abteilung',
						dataRapPath: 'Recht.Rang[###1###].GegenRecht.Rechtsbezeichnung.Abteilung'
					}, {
						fldtype: 'Text',
						label: 'lfd. Nr.',
						id: 'Recht_Rang_###1###_GegenRecht_Rechtsbezeichnung_LfdNr',
						dataRapPath: 'Recht.Rang[###1###].GegenRecht.Rechtsbezeichnung.LfdNr'
					}, {
						fldtype: 'Text',
						label: 'lfd. Nr. Bereich',
						id: 'Recht_Rang_###1###_GegenRecht_Rechtsbezeichnung_BereichNr',
						dataRapPath: 'Recht.Rang[###1###].GegenRecht.Rechtsbezeichnung.BereichNr'
					}, {
						fldtype: 'Text',
						label: 'Ausn.Rangvorbehalt',
						id: 'Recht_Rang_###1###_AusnutzungRangVorBeh',
						dataRapPath: 'Recht.Rang[###1###].AusnutzungRangVorBeh',
						codestable: 'Vorbehaltsausnutzung.Dropdown+'
					}
				],
				subitems: [{
						cardinality: '1',
						opDelLastSubitem: true,
						label: 'Rangvermerk Sonstiges',
						dynamicSubitem: {
							label: 'Rangvermerk Sonstiges (###1###)  (###2###) ',
							inputFields: [{
									fldtype: 'Text',
									label: 'Art des Gegenrechts',
									id: 'Recht_Rang_###1###_GegenRecht_###2###_Rechtsbezeichnung_Art',
									dataRapPath: 'Recht.Rang[###1###].GegenRecht[###2###].Rechtsbezeichnung.Art',
									codestable: 'Rechtsart.Auto'
								}, {
									fldtype: 'Number',
									label: 'Ant. Zähler',
									id: 'Recht_Rang_###1###_Bezug_###2###_BezugInAbt1_Anteil_InZiffern_Bruch_Zaehler',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].BezugInAbt1.Anteil.InZiffern.Bruch.Zaehler'
								}, {
									fldtype: 'Number',
									label: 'Ant. Nenner',
									id: 'Recht_Rang_###1###_Bezug_###2###_BezugInAbt1_Anteil_InZiffern_Bruch_Nenner',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].BezugInAbt1.Anteil.InZiffern.Bruch.Nenner'
								}, {
									fldtype: 'Text',
									label: 'Ant. Sonst.',
									id: 'Recht_Rang_###1###_Bezug_###2###_BezugInAbt1_Anteil_InZiffern_Dezimal',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].BezugInAbt1.Anteil.InZiffern.Dezimal'
								}, {
									fldtype: 'Text',
									label: 'Ant. i. W',
									id: 'Recht_Rang_###1###_Bezug_###2###_BezugInAbt1_Anteil_InWorten',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].BezugInAbt1.Anteil.InWorten'
								}, {
									fldtype: 'Text',
									label: 'lfd. Nr. Abt. I',
									id: 'Recht_Rang_###1###_Bezug_###2###_BezugInAbt1_lfdNr',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].BezugInAbt1.lfdNr'
								}, {
									fldtype: 'Text',
									label: 'Titel',
									id: 'Recht_Rang_###1###_Bezug_###2###_BezugInAbt1_Eigentuemer_Natuer_Person_Titel',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].BezugInAbt1.Eigentuemer.Natuer.Person.Titel',
									codestable: 'Titel.Dropdown+'
								}, {
									fldtype: 'Text',
									label: 'Namensvorsatz',
									id: 'Recht_Rang_###1###_Bezug_###2###_BezugInAbt1_Eigentuemer_Natuer_Person_NameVorsatz',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].BezugInAbt1.Eigentuemer.Natuer.Person.NameVorsatz'
								}, {
									fldtype: 'Text',
									label: 'Vorname',
									id: 'Recht_Rang_###1###_Bezug_###2###_BezugInAbt1_Eigentuemer_Natuer_Person_Vorname',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].BezugInAbt1.Eigentuemer.Natuer.Person.Vorname'
								}, {
									fldtype: 'Text',
									label: 'Namenszusatz',
									id: 'Recht_Rang_###1###_Bezug_###2###_BezugInAbt1_Eigentuemer_Natuer_Person_NameZusatz',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].BezugInAbt1.Eigentuemer.Natuer.Person.NameZusatz'
								}, {
									fldtype: 'Text',
									label: 'Nachname',
									id: 'Recht_Rang_###1###_Bezug_###2###_BezugInAbt1_Eigentuemer_Natuer_Person_Nachname',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].BezugInAbt1.Eigentuemer.Natuer.Person.Nachname'
								}, {
									fldtype: 'Text',
									label: 'Geburtsname',
									id: 'Recht_Rang_###1###_Bezug_###2###_BezugInAbt1_Eigentuemer_Natuer_Person_Geburtsname',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].BezugInAbt1.Eigentuemer.Natuer.Person.Geburtsname'
								}, {
									fldtype: 'Text',
									label: 'Firma/Bezeichnung',
									id: 'Recht_Rang_###1###_Bezug_###2###_BezugInAbt1_Eigentuemer_Jurist_Bez',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].BezugInAbt1.Eigentuemer.Jurist.Bez'
								}, {
									fldtype: 'Text',
									label: 'Sitz Ort',
									id: 'Recht_Rang_###1###_Bezug_###2###_BezugInAbt1_Eigentuemer_Jurist_Sitz_Ort',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].BezugInAbt1.Eigentuemer.Jurist.Sitz.Ort'
								}, {
									fldtype: 'Text',
									label: 'KöR Bezeichnung',
									id: 'Recht_Rang_###1###_Bezug_###2###_BezugInAbt1_Eigentuemer_Koerper_Name',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].BezugInAbt1.Eigentuemer.Koerper.Name'
								}, {
									fldtype: 'Text',
									label: 'Zusatz § 15 GBV',
									id: 'Recht_Rang_###1###_Bezug_###2###_BezugInAbt1_Eigentuemer_Koerper_VermTeil',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].BezugInAbt1.Eigentuemer.Koerper.VermTeil'
								}, {
									fldtype: 'Text',
									label: 'KöR Ort',
									id: 'Recht_Rang_###1###_Bezug_###2###_BezugInAbt1_Eigentuemer_Koerper_Sitz_Ort',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].BezugInAbt1.Eigentuemer.Koerper.Sitz.Ort'
								}, {
									fldtype: 'Text',
									label: 'lfd. Nr. BV',
									id: 'Recht_Rang_###1###_Bezug_###2###_BuchStelle',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].BuchStelle'
								}, {
									fldtype: 'Checkbox',
									label: 'RV Bedingung',
									id: 'Recht_Rang_###1###_Bedingung_bedingt_###2###_',
									dataRapPath: 'Recht.Rang[###1###].Bedingung.bedingt[###2###]'
								}, {
									fldtype: 'Checkbox',
									label: 'RV Befristung',
									id: 'Recht_Rang_###1###_Befristung_befristet_###2###_',
									dataRapPath: 'Recht.Rang[###1###].Befristung.befristet[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Befr. Berechnungsvorschr.',
									id: 'Recht_Rang_###1###_Befristung_Berechnung_###2###_',
									dataRapPath: 'Recht.Rang[###1###].Befristung.Berechnung[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Befr. Endtermin',
									id: 'Recht_Rang_###1###_Befristung_Ende_###2###_',
									dataRapPath: 'Recht.Rang[###1###].Befristung.Ende[###2###]'
								}
							]
						}
					}, {
						cardinality: 'n',
						opDelLastSubitem: true,
						label: 'Einschränkung Rangvermerk Zinsen',
						dynamicSubitem: {
							label: 'Einschränkung Rangvermerk Zinsen (###1###)  (###2###) ',
							inputFields: [{
									fldtype: 'Text',
									label: 'Zins % fest i. Z.',
									id: 'Recht_Rang_###1###_Bezug_###2###_Zinsen_Prozent_InZiffern',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Zinsen.Prozent.InZiffern'
								}, {
									fldtype: 'Text',
									label: 'Zins % fest i. W.',
									id: 'Recht_Rang_###1###_Bezug_###2###_Zinsen_Prozent_InWorten',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Zinsen.Prozent.InWorten'
								}, {
									fldtype: 'Text',
									label: 'Zins Intervall',
									id: 'Recht_Rang_###1###_Bezug_###2###_Zinsen_Intervall',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Zinsen.Intervall',
									codestable: 'InterestInterval.Dropdown'
								}, {
									fldtype: 'Text',
									label: 'Zins Art',
									id: 'Recht_Rang_###1###_Bezug_###2###_Zinsen_Bezeichnung',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Zinsen.Bezeichnung',
									codestable: 'Zinstyp.Dropdown+'
								}, {
									fldtype: 'Text',
									label: '% variabel',
									id: 'Recht_Rang_###1###_Bezug_###2###_Zinsen_Prozent_Berechnung',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Zinsen.Prozent.Berechnung',
									codestable: 'BerechnungsvorschriftZinsen.Auto'
								}, {
									fldtype: 'Text',
									label: 'Bezugsbetrag i. Z.',
									id: 'Recht_Rang_###1###_Bezug_###2###_Zinsen_Prozent_Betrag_Wert_InZiffern',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Zinsen.Prozent.Betrag.Wert.InZiffern'
								}, {
									fldtype: 'Text',
									label: 'Bezugsbetrag Währung KF',
									id: 'Recht_Rang_###1###_Bezug_###2###_Zinsen_Prozent_Betrag_Waehrung_InAbk',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Zinsen.Prozent.Betrag.Waehrung.InAbk',
									codestable: 'Waehrungscode.Auto'
								}, {
									fldtype: 'Text',
									label: 'Bezugsbetrag i. W.',
									id: 'Recht_Rang_###1###_Bezug_###2###_Zinsen_Prozent_Betrag_Wert_InWorten',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Zinsen.Prozent.Betrag.Wert.InWorten'
								}, {
									fldtype: 'Text',
									label: 'Bezugsbetrag Währung LF',
									id: 'Recht_Rang_###1###_Bezug_###2###_Zinsen_Prozent_Betrag_Waehrung_InWorten',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Zinsen.Prozent.Betrag.Waehrung.InWorten',
									codestable: 'WaehrungInWorten.Auto'
								}, {
									fldtype: 'Text',
									label: 'Festbetrag i. Z.',
									id: 'Recht_Rang_###1###_Bezug_###2###_Zinsen_Fest_Betrag_Wert_InZiffern',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Zinsen.Fest.Betrag.Wert.InZiffern'
								}, {
									fldtype: 'Text',
									label: 'Festbetrag Währung KF',
									id: 'Recht_Rang_###1###_Bezug_###2###_Zinsen_Fest_Betrag_Waehrung_InAbk',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Zinsen.Fest.Betrag.Waehrung.InAbk',
									codestable: 'Waehrungscode.Auto'
								}, {
									fldtype: 'Text',
									label: 'Festbetrag i. W.',
									id: 'Recht_Rang_###1###_Bezug_###2###_Zinsen_Fest_Betrag_Wert_InWorten',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Zinsen.Fest.Betrag.Wert.InWorten'
								}, {
									fldtype: 'Text',
									label: 'Festbetrag Währung LF',
									id: 'Recht_Rang_###1###_Bezug_###2###_Zinsen_Fest_Betrag_Waehrung_InWorten',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Zinsen.Fest.Betrag.Waehrung.InWorten',
									codestable: 'WaehrungInWorten.Auto'
								}, {
									fldtype: 'Date',
									label: 'Datum Beginn',
									id: 'Recht_Rang_###1###_Bezug_###2###_Zinsen_Beginn_Datum',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Zinsen.Beginn.Datum'
								}, {
									fldtype: 'Text',
									label: 'Beginn i. W.',
									id: 'Recht_Rang_###1###_Bezug_###2###_Zinsen_Beginn_InWorten',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Zinsen.Beginn.InWorten',
									codestable: 'BeginnInWorten.Auto'
								}
							]
						}
					}, {
						cardinality: 'n',
						opDelLastSubitem: true,
						label: 'Einschränkung Rangvermerk Nebenleistung',
						dynamicSubitem: {
							label: 'Einschränkung Rangvermerk Nebenleistung (###1###)  (###2###) ',
							inputFields: [{
									fldtype: 'Text',
									label: 'Nebenl. % fest i.Z.',
									id: 'Recht_Rang_###1###_Bezug_###2###_Nebenleistungen_Prozent_InZiffern',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Nebenleistungen.Prozent.InZiffern'
								}, {
									fldtype: 'Text',
									label: 'Nebenl. % fest i.W.',
									id: 'Recht_Rang_###1###_Bezug_###2###_Nebenleistungen_Prozent_InWorten',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Nebenleistungen.Prozent.InWorten'
								}, {
									fldtype: 'Text',
									label: 'Nebenl. Intervall',
									id: 'Recht_Rang_###1###_Bezug_###2###_Nebenleistungen_Intervall',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Nebenleistungen.Intervall',
									codestable: 'Nebenleistungsintervall.Dropdown'
								}, {
									fldtype: 'Text',
									label: 'Nebenleistung Art',
									id: 'Recht_Rang_###1###_Bezug_###2###_Nebenleistungen_Bezeich',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Nebenleistungen.Bezeich',
									codestable: 'Nebenleistungsbezeichnung.Auto'
								}, {
									fldtype: 'Text',
									label: 'NL variabel',
									id: 'Recht_Rang_###1###_Bezug_###2###_Nebenleistungen_Prozent_Berechnung',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Nebenleistungen.Prozent.Berechnung',
									codestable: 'BerechnungsvorschriftNebenleistungen.Auto'
								}, {
									fldtype: 'Text',
									label: 'Bezugsbetrag i. Z.',
									id: 'Recht_Rang_###1###_Bezug_###2###_Nebenleistungen_Prozent_Betrag_Wert_InZiffern',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Nebenleistungen.Prozent.Betrag.Wert.InZiffern'
								}, {
									fldtype: 'Text',
									label: 'Bezugsbetrag Währung KF',
									id: 'Recht_Rang_###1###_Bezug_###2###_Nebenleistungen_Prozent_Betrag_Waehrung_InAbk',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Nebenleistungen.Prozent.Betrag.Waehrung.InAbk',
									codestable: 'Waehrungscode.Auto'
								}, {
									fldtype: 'Text',
									label: 'Bezugsbetrag i. W.',
									id: 'Recht_Rang_###1###_Bezug_###2###_Nebenleistungen_Prozent_Betrag_Wert_InWorten',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Nebenleistungen.Prozent.Betrag.Wert.InWorten'
								}, {
									fldtype: 'Text',
									label: 'Bezugsbetrag Währung LF',
									id: 'Recht_Rang_###1###_Bezug_###2###_Nebenleistungen_Prozent_Betrag_Waehrung_InWorten',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Nebenleistungen.Prozent.Betrag.Waehrung.InWorten',
									codestable: 'WaehrungInWorten.Auto'
								}, {
									fldtype: 'Text',
									label: 'Festbetrag i. Z.',
									id: 'Recht_Rang_###1###_Bezug_###2###_Nebenleistungen_Fest_Betrag_Wert_InZiffern',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Nebenleistungen.Fest.Betrag.Wert.InZiffern'
								}, {
									fldtype: 'Text',
									label: 'Festbetrag Währung KF',
									id: 'Recht_Rang_###1###_Bezug_###2###_Nebenleistungen_Fest_Betrag_Waehrung_InAbk',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Nebenleistungen.Fest.Betrag.Waehrung.InAbk',
									codestable: 'Waehrungscode.Auto'
								}, {
									fldtype: 'Text',
									label: 'Festbetrag i. W.',
									id: 'Recht_Rang_###1###_Bezug_###2###_Nebenleistungen_Fest_Betrag_Wert_InWorten',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Nebenleistungen.Fest.Betrag.Wert.InWorten'
								}, {
									fldtype: 'Text',
									label: 'Festbetrag Währung LF',
									id: 'Recht_Rang_###1###_Bezug_###2###_Nebenleistungen_Fest_Betrag_Waehrung_InWorten',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Nebenleistungen.Fest.Betrag.Waehrung.InWorten',
									codestable: 'WaehrungInWorten.Auto'
								}, {
									fldtype: 'Date',
									label: 'Datum Beginn',
									id: 'Recht_Rang_###1###_Bezug_###2###_Nebenleistungen_Beginn_Datum',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Nebenleistungen.Beginn.Datum'
								}, {
									fldtype: 'Text',
									label: 'Beginn i. W.',
									id: 'Recht_Rang_###1###_Bezug_###2###_Nebenleistungen_Beginn_InWorten',
									dataRapPath: 'Recht.Rang[###1###].Bezug[###2###].Nebenleistungen.Beginn.InWorten',
									codestable: 'BeginnInWorten.Auto'
								}
							]
						}
					}
				]
			}
		}, {
			opDelLastSubitem: true,
			label: 'Mithaft',
			cardinality: 'n',
			dynamicSubitem: {
				label: 'Mithaft (###1###) ',
				inputFields: [{
						fldtype: 'Text',
						label: 'Belastungsform',
						id: 'Recht_Mehrfachbelastung_Art_###1###_',
						dataRapPath: 'Recht.Mehrfachbelastung.Art[###1###]',
						codestable: 'Belastungsform.Dropdown+'
					}, {
						fldtype: 'Text',
						label: 'Amtsgericht',
						id: 'Recht_Mehrfachbelastung_BezeichnungBlatt_###1###_AmtsGer',
						dataRapPath: 'Recht.Mehrfachbelastung.BezeichnungBlatt[###1###].AmtsGer'
					}, {
						fldtype: 'Text',
						label: 'Buchungsbezirk',
						id: 'Recht_Mehrfachbelastung_BezeichnungBlatt_###1###_BuchBez',
						dataRapPath: 'Recht.Mehrfachbelastung.BezeichnungBlatt[###1###].BuchBez'
					}, {
						fldtype: 'Text',
						label: 'Band',
						id: 'Recht_Mehrfachbelastung_BezeichnungBlatt_###1###_Band',
						dataRapPath: 'Recht.Mehrfachbelastung.BezeichnungBlatt[###1###].Band'
					}, {
						fldtype: 'Text',
						label: 'Blattnr.-Bereich',
						id: 'Recht_Mehrfachbelastung_BezeichnungBlatt_###1###_BlattBer',
						dataRapPath: 'Recht.Mehrfachbelastung.BezeichnungBlatt[###1###].BlattBer'
					}, {
						fldtype: 'Text',
						label: 'Blattnr',
						id: 'Recht_Mehrfachbelastung_BezeichnungBlatt_###1###_BlattNr',
						dataRapPath: 'Recht.Mehrfachbelastung.BezeichnungBlatt[###1###].BlattNr'
					}
				],
				subitems: [{
						cardinality: '1',
						opDelLastSubitem: true,
						label: 'Weitere Blattnummern',
						dynamicSubitem: {
							label: 'Weitere Blattnummern (###1###)  (###2###) ',
							inputFields: [{
									fldtype: 'Text',
									label: 'Blattnr',
									id: 'Recht_Mehrfachbelastung_BezeichnungBlatt_###1###_BlattNr_###2###__1',
									dataRapPath: 'Recht.Mehrfachbelastung.BezeichnungBlatt[###1###].BlattNr[###2###][1]'
								}, {
									fldtype: 'Text',
									label: 'Blattnr',
									id: 'Recht_Mehrfachbelastung_BezeichnungBlatt_###1###_BlattNr_###2###__2',
									dataRapPath: 'Recht.Mehrfachbelastung.BezeichnungBlatt[###1###].BlattNr[###2###][2]'
								}, {
									fldtype: 'Text',
									label: 'Blattnr',
									id: 'Recht_Mehrfachbelastung_BezeichnungBlatt_###1###_BlattNr_###2###__3',
									dataRapPath: 'Recht.Mehrfachbelastung.BezeichnungBlatt[###1###].BlattNr[###2###][3]'
								}, {
									fldtype: 'Text',
									label: 'Blattnr',
									id: 'Recht_Mehrfachbelastung_BezeichnungBlatt_###1###_BlattNr_###2###__4',
									dataRapPath: 'Recht.Mehrfachbelastung.BezeichnungBlatt[###1###].BlattNr[###2###][4]'
								}, {
									fldtype: 'Text',
									label: 'Blattnr',
									id: 'Recht_Mehrfachbelastung_BezeichnungBlatt_###1###_BlattNr_###2###__5',
									dataRapPath: 'Recht.Mehrfachbelastung.BezeichnungBlatt[###1###].BlattNr[###2###][5]'
								}, {
									fldtype: 'Text',
									label: 'Blattnr',
									id: 'Recht_Mehrfachbelastung_BezeichnungBlatt_###1###_BlattNr_###2###__6',
									dataRapPath: 'Recht.Mehrfachbelastung.BezeichnungBlatt[###1###].BlattNr[###2###][6]'
								}, {
									fldtype: 'Text',
									label: 'Blattnr',
									id: 'Recht_Mehrfachbelastung_BezeichnungBlatt_###1###_BlattNr_###2###__7',
									dataRapPath: 'Recht.Mehrfachbelastung.BezeichnungBlatt[###1###].BlattNr[###2###][7]'
								}, {
									fldtype: 'Text',
									label: 'Blattnr',
									id: 'Recht_Mehrfachbelastung_BezeichnungBlatt_###1###_BlattNr_###2###__8',
									dataRapPath: 'Recht.Mehrfachbelastung.BezeichnungBlatt[###1###].BlattNr[###2###][8]'
								}, {
									fldtype: 'Text',
									label: 'Blattnr',
									id: 'Recht_Mehrfachbelastung_BezeichnungBlatt_###1###_BlattNr_###2###__9',
									dataRapPath: 'Recht.Mehrfachbelastung.BezeichnungBlatt[###1###].BlattNr[###2###][9]'
								}, {
									fldtype: 'Text',
									label: 'Blattnr',
									id: 'Recht_Mehrfachbelastung_BezeichnungBlatt_###1###_BlattNr_###2###__10',
									dataRapPath: 'Recht.Mehrfachbelastung.BezeichnungBlatt[###1###].BlattNr[###2###][10]'
								}, {
									fldtype: 'Text',
									label: 'Blattnr',
									id: 'Recht_Mehrfachbelastung_BezeichnungBlatt_###1###_BlattNr_###2###__11',
									dataRapPath: 'Recht.Mehrfachbelastung.BezeichnungBlatt[###1###].BlattNr[###2###][11]'
								}, {
									fldtype: 'Text',
									label: 'Blattnr',
									id: 'Recht_Mehrfachbelastung_BezeichnungBlatt_###1###_BlattNr_###2###__12',
									dataRapPath: 'Recht.Mehrfachbelastung.BezeichnungBlatt[###1###].BlattNr[###2###][12]'
								}
							]
						}
					}
				]
			}
		}, {
			opDelLastSubitem: true,
			label: 'Übertragungsvermerk',
			cardinality: '+',
			dynamicSubitem: {
				label: 'Übertragungsvermerk (###1###) ',
				inputFields: [{
						fldtype: 'Text',
						label: 'Amtsgericht',
						id: 'Recht_Uebertragungsvermerk_BezeichnungBlatt_###1###_AmtsGer',
						dataRapPath: 'Recht.Uebertragungsvermerk.BezeichnungBlatt[###1###].AmtsGer'
					}, {
						fldtype: 'Text',
						label: 'Buchungsbezirk',
						id: 'Recht_Uebertragungsvermerk_BezeichnungBlatt_###1###_BuchBez',
						dataRapPath: 'Recht.Uebertragungsvermerk.BezeichnungBlatt[###1###].BuchBez'
					}, {
						fldtype: 'Text',
						label: 'Band',
						id: 'Recht_Uebertragungsvermerk_BezeichnungBlatt_###1###_Band',
						dataRapPath: 'Recht.Uebertragungsvermerk.BezeichnungBlatt[###1###].Band'
					}, {
						fldtype: 'Text',
						label: 'Blattnr',
						id: 'Recht_Uebertragungsvermerk_BezeichnungBlatt_###1###_BlattNr',
						dataRapPath: 'Recht.Uebertragungsvermerk.BezeichnungBlatt[###1###].BlattNr'
					}, {
						fldtype: 'Text',
						label: 'Blattnr.-Bereich',
						id: 'Recht_Uebertragungsvermerk_BezeichnungBlatt_###1###_BlattBer',
						dataRapPath: 'Recht.Uebertragungsvermerk.BezeichnungBlatt[###1###].BlattBer'
					}, {
						fldtype: 'Date',
						label: 'Urspr.Eintr.-Dat.',
						id: 'Recht_Uebertragungsvermerk_UrDatum_###1###_',
						dataRapPath: 'Recht.Uebertragungsvermerk.UrDatum[###1###]'
					}, {
						fldtype: 'Text',
						label: 'Übertr. Von/aus',
						id: 'Recht_Uebertragungsvermerk_QuelleZiel_###1###_',
						dataRapPath: 'Recht.Uebertragungsvermerk.QuelleZiel[###1###]',
						codestable: 'QuelleZiel.Auto'
					}, {
						fldtype: 'Text',
						label: 'Übertr.-Grund',
						id: 'Recht_Uebertragungsvermerk_Mithaft_###1###_',
						dataRapPath: 'Recht.Uebertragungsvermerk.Mithaft[###1###]',
						codestable: 'Mithaft.Auto'
					}, {
						fldtype: 'Number',
						label: 'BV-Nr.',
						id: 'Recht_Uebertragungsvermerk_BVNr_###1###_',
						dataRapPath: 'Recht.Uebertragungsvermerk.BVNr[###1###]'
					}
				],
				subitems: [{
						cardinality: '1',
						opDelLastSubitem: true,
						label: 'Weitere BV-Nummern',
						dynamicSubitem: {
							label: 'Weitere BV-Nummern (###1###)  (###2###) ',
							inputFields: [{
									fldtype: 'Number',
									label: 'BV-Nr.',
									id: 'Recht_Uebertragungsvermerk_BVNr_###1###__1',
									dataRapPath: 'Recht.Uebertragungsvermerk.BVNr[###1###][1]'
								}, {
									fldtype: 'Number',
									label: 'BV-Nr.',
									id: 'Recht_Uebertragungsvermerk_BVNr_###1###__2',
									dataRapPath: 'Recht.Uebertragungsvermerk.BVNr[###1###][2]'
								}, {
									fldtype: 'Number',
									label: 'BV-Nr.',
									id: 'Recht_Uebertragungsvermerk_BVNr_###1###__3',
									dataRapPath: 'Recht.Uebertragungsvermerk.BVNr[###1###][3]'
								}, {
									fldtype: 'Number',
									label: 'BV-Nr.',
									id: 'Recht_Uebertragungsvermerk_BVNr_###1###__4',
									dataRapPath: 'Recht.Uebertragungsvermerk.BVNr[###1###][4]'
								}, {
									fldtype: 'Number',
									label: 'BV-Nr.',
									id: 'Recht_Uebertragungsvermerk_BVNr_###1###__5',
									dataRapPath: 'Recht.Uebertragungsvermerk.BVNr[###1###][5]'
								}, {
									fldtype: 'Number',
									label: 'BV-Nr.',
									id: 'Recht_Uebertragungsvermerk_BVNr_###1###__6',
									dataRapPath: 'Recht.Uebertragungsvermerk.BVNr[###1###][6]'
								}, {
									fldtype: 'Number',
									label: 'BV-Nr.',
									id: 'Recht_Uebertragungsvermerk_BVNr_###1###__7',
									dataRapPath: 'Recht.Uebertragungsvermerk.BVNr[###1###][7]'
								}, {
									fldtype: 'Number',
									label: 'BV-Nr.',
									id: 'Recht_Uebertragungsvermerk_BVNr_###1###__8',
									dataRapPath: 'Recht.Uebertragungsvermerk.BVNr[###1###][8]'
								}, {
									fldtype: 'Number',
									label: 'BV-Nr.',
									id: 'Recht_Uebertragungsvermerk_BVNr_###1###__9',
									dataRapPath: 'Recht.Uebertragungsvermerk.BVNr[###1###][9]'
								}, {
									fldtype: 'Number',
									label: 'BV-Nr.',
									id: 'Recht_Uebertragungsvermerk_BVNr_###1###__10',
									dataRapPath: 'Recht.Uebertragungsvermerk.BVNr[###1###][10]'
								}, {
									fldtype: 'Number',
									label: 'BV-Nr.',
									id: 'Recht_Uebertragungsvermerk_BVNr_###1###__11',
									dataRapPath: 'Recht.Uebertragungsvermerk.BVNr[###1###][11]'
								}, {
									fldtype: 'Number',
									label: 'BV-Nr.',
									id: 'Recht_Uebertragungsvermerk_BVNr_###1###__12',
									dataRapPath: 'Recht.Uebertragungsvermerk.BVNr[###1###][12]'
								}
							]
						}
					}
				]
			}
		}, {
			opDelLastSubitem: true,
			label: 'Wirksamkeitsvermerk',
			cardinality: 'n',
			dynamicSubitem: {
				label: 'Wirksamkeitsvermerk (###1###) ',
				inputFields: [{
						fldtype: 'Text',
						label: 'Gegenrecht Art',
						id: 'Recht_Wirksamkeitsvermerk_Gegenrecht_###1###_Rechtsbezeichnung_Art',
						dataRapPath: 'Recht.Wirksamkeitsvermerk.Gegenrecht[###1###].Rechtsbezeichnung.Art',
						codestable: 'Rechtsart.Auto'
					}, {
						fldtype: 'Text',
						label: 'Abtlg.',
						id: 'Recht_Wirksamkeitsvermerk_Gegenrecht_###1###_Rechtsbezeichnung_Abteilung',
						dataRapPath: 'Recht.Wirksamkeitsvermerk.Gegenrecht[###1###].Rechtsbezeichnung.Abteilung'
					}, {
						fldtype: 'Text',
						label: 'Lfd.Nr',
						id: 'Recht_Wirksamkeitsvermerk_Gegenrecht_###1###_Rechtsbezeichnung_LfdNr',
						dataRapPath: 'Recht.Wirksamkeitsvermerk.Gegenrecht[###1###].Rechtsbezeichnung.LfdNr'
					}, {
						fldtype: 'Text',
						label: 'lfd. Nr. Bereich',
						id: 'Recht_Wirksamkeitsvermerk_Gegenrecht_###1###_Rechtsbezeichnung_BereichNr',
						dataRapPath: 'Recht.Wirksamkeitsvermerk.Gegenrecht[###1###].Rechtsbezeichnung.BereichNr'
					}, {
						fldtype: 'Checkbox',
						label: 'Wirks. ggü. Nacherb.',
						id: 'Recht_Wirksamkeitsvermerk_Gegenrecht_###1###_Nacherben',
						dataRapPath: 'Recht.Wirksamkeitsvermerk.Gegenrecht[###1###].Nacherben'
					}, {
						fldtype: 'Checkbox',
						label: 'Wirks. ggü. vorgem. Anspr.',
						id: 'Recht_Wirksamkeitsvermerk_Gegenrecht_###1###_VorgemAnspruch_VorgemAnspruch',
						dataRapPath: 'Recht.Wirksamkeitsvermerk.Gegenrecht[###1###].VorgemAnspruch.VorgemAnspruch'
					}, {
						fldtype: 'Text',
						label: 'Titel',
						id: 'Recht_Wirksamkeitsvermerk_Gegenrecht_###1###_VorgemAnspruch_Glaeubiger_normlGlaeubigerVar1_Beteiligte_Eigentuemer_Natuer_Person_Titel',
						dataRapPath: 'Recht.Wirksamkeitsvermerk.Gegenrecht[###1###].VorgemAnspruch.Glaeubiger.normlGlaeubigerVar1.Beteiligte.Eigentuemer.Natuer.Person.Titel',
						codestable: 'Titel.Dropdown+'
					}, {
						fldtype: 'Text',
						label: 'Namensvorsatz',
						id: 'Recht_Wirksamkeitsvermerk_Gegenrecht_###1###_VorgemAnspruch_Glaeubiger_normlGlaeubigerVar1_Beteiligte_Eigentuemer_Natuer_Person_NameVorsatz',
						dataRapPath: 'Recht.Wirksamkeitsvermerk.Gegenrecht[###1###].VorgemAnspruch.Glaeubiger.normlGlaeubigerVar1.Beteiligte.Eigentuemer.Natuer.Person.NameVorsatz'
					}, {
						fldtype: 'Text',
						label: 'Vorname',
						id: 'Recht_Wirksamkeitsvermerk_Gegenrecht_###1###_VorgemAnspruch_Glaeubiger_normlGlaeubigerVar1_Beteiligte_Eigentuemer_Natuer_Person_Vorname',
						dataRapPath: 'Recht.Wirksamkeitsvermerk.Gegenrecht[###1###].VorgemAnspruch.Glaeubiger.normlGlaeubigerVar1.Beteiligte.Eigentuemer.Natuer.Person.Vorname'
					}, {
						fldtype: 'Text',
						label: 'Namenszusatz',
						id: 'Recht_Wirksamkeitsvermerk_Gegenrecht_###1###_VorgemAnspruch_Glaeubiger_normlGlaeubigerVar1_Beteiligte_Eigentuemer_Natuer_Person_NameZusatz',
						dataRapPath: 'Recht.Wirksamkeitsvermerk.Gegenrecht[###1###].VorgemAnspruch.Glaeubiger.normlGlaeubigerVar1.Beteiligte.Eigentuemer.Natuer.Person.NameZusatz'
					}, {
						fldtype: 'Text',
						label: 'Nachname',
						id: 'Recht_Wirksamkeitsvermerk_Gegenrecht_###1###_VorgemAnspruch_Glaeubiger_normlGlaeubigerVar1_Beteiligte_Eigentuemer_Natuer_Person_Nachname',
						dataRapPath: 'Recht.Wirksamkeitsvermerk.Gegenrecht[###1###].VorgemAnspruch.Glaeubiger.normlGlaeubigerVar1.Beteiligte.Eigentuemer.Natuer.Person.Nachname'
					}, {
						fldtype: 'Text',
						label: 'Geburtsname',
						id: 'Recht_Wirksamkeitsvermerk_Gegenrecht_###1###_VorgemAnspruch_Glaeubiger_normlGlaeubigerVar1_Beteiligte_Eigentuemer_Natuer_Person_Geburtsname',
						dataRapPath: 'Recht.Wirksamkeitsvermerk.Gegenrecht[###1###].VorgemAnspruch.Glaeubiger.normlGlaeubigerVar1.Beteiligte.Eigentuemer.Natuer.Person.Geburtsname'
					}, {
						fldtype: 'Text',
						label: 'Firma/Bezeichnung',
						id: 'Recht_Wirksamkeitsvermerk_Gegenrecht_###1###_VorgemAnspruch_Glaeubiger_normlGlaeubigerVar1_Beteiligte_Eigentuemer_Jurist_Bez',
						dataRapPath: 'Recht.Wirksamkeitsvermerk.Gegenrecht[###1###].VorgemAnspruch.Glaeubiger.normlGlaeubigerVar1.Beteiligte.Eigentuemer.Jurist.Bez'
					}, {
						fldtype: 'Text',
						label: 'Sitz Ort',
						id: 'Recht_Wirksamkeitsvermerk_Gegenrecht_###1###_VorgemAnspruch_Glaeubiger_normlGlaeubigerVar1_Beteiligte_Eigentuemer_Jurist_Sitz_Ort',
						dataRapPath: 'Recht.Wirksamkeitsvermerk.Gegenrecht[###1###].VorgemAnspruch.Glaeubiger.normlGlaeubigerVar1.Beteiligte.Eigentuemer.Jurist.Sitz.Ort'
					}, {
						fldtype: 'Text',
						label: 'KöR Bezeichnung',
						id: 'Recht_Wirksamkeitsvermerk_Gegenrecht_###1###_VorgemAnspruch_Glaeubiger_normlGlaeubigerVar1_Beteiligte_Eigentuemer_Koerper_Name',
						dataRapPath: 'Recht.Wirksamkeitsvermerk.Gegenrecht[###1###].VorgemAnspruch.Glaeubiger.normlGlaeubigerVar1.Beteiligte.Eigentuemer.Koerper.Name'
					}, {
						fldtype: 'Text',
						label: 'Zusatz § 15 GBV',
						id: 'Recht_Wirksamkeitsvermerk_Gegenrecht_###1###_VorgemAnspruch_Glaeubiger_normlGlaeubigerVar1_Beteiligte_Eigentuemer_Koerper_VermTeil',
						dataRapPath: 'Recht.Wirksamkeitsvermerk.Gegenrecht[###1###].VorgemAnspruch.Glaeubiger.normlGlaeubigerVar1.Beteiligte.Eigentuemer.Koerper.VermTeil'
					}, {
						fldtype: 'Text',
						label: 'KöR Ort',
						id: 'Recht_Wirksamkeitsvermerk_Gegenrecht_###1###_VorgemAnspruch_Glaeubiger_normlGlaeubigerVar1_Beteiligte_Eigentuemer_Koerper_Sitz_Ort',
						dataRapPath: 'Recht.Wirksamkeitsvermerk.Gegenrecht[###1###].VorgemAnspruch.Glaeubiger.normlGlaeubigerVar1.Beteiligte.Eigentuemer.Koerper.Sitz.Ort'
					}
				],
				subitems: [{
						cardinality: 'n',
						opDelLastSubitem: true,
						label: 'Wirksames Recht',
						dynamicSubitem: {
							label: 'Wirksames Recht (###1###)  (###2###) ',
							inputFields: [{
									fldtype: 'Text',
									label: 'Art',
									id: 'Recht_Wirksamkeitsvermerk_BezWirkEintr_###1###_Rechtsbezeichnung_Art_###2###_',
									dataRapPath: 'Recht.Wirksamkeitsvermerk.BezWirkEintr[###1###].Rechtsbezeichnung.Art[###2###]',
									codestable: 'Rechtsart.Auto'
								}, {
									fldtype: 'Text',
									label: 'Abtlg.',
									id: 'Recht_Wirksamkeitsvermerk_BezWirkEintr_###1###_Rechtsbezeichnung_Abteilung_###2###_',
									dataRapPath: 'Recht.Wirksamkeitsvermerk.BezWirkEintr[###1###].Rechtsbezeichnung.Abteilung[###2###]'
								}, {
									fldtype: 'Text',
									label: 'Lfd.Nr',
									id: 'Recht_Wirksamkeitsvermerk_BezWirkEintr_###1###_Rechtsbezeichnung_LfdNr_###2###_',
									dataRapPath: 'Recht.Wirksamkeitsvermerk.BezWirkEintr[###1###].Rechtsbezeichnung.LfdNr[###2###]'
								}
							]
						}
					}
				]
			}
		}, {
			opDelLastSubitem: true,
			label: 'Rangvorbehalt',
			cardinality: 'n',
			dynamicSubitem: {
				label: 'Rangvorbehalt (###1###) ',
				inputFields: [{
						fldtype: 'Text',
						label: 'Art',
						id: 'Recht_Rangvorbehalt_###1###_VorbehArt',
						dataRapPath: 'Recht.Rangvorbehalt[###1###].VorbehArt',
						codestable: 'Rangvorbehaltsart.Dropdown+'
					}, {
						fldtype: 'Text',
						label: 'Rechtsart',
						id: 'Recht_Rangvorbehalt_###1###_RechtsArt',
						dataRapPath: 'Recht.Rangvorbehalt[###1###].RechtsArt',
						codestable: 'Rechtsart.Auto'
					}, {
						fldtype: 'Text',
						label: 'einfach/mehrfach ausn.',
						id: 'Recht_Rangvorbehalt_###1###_Ausnutzung',
						dataRapPath: 'Recht.Rangvorbehalt[###1###].Ausnutzung',
						codestable: 'AusnutzbarkeitRangvorbehalt.Auto'
					}, {
						fldtype: 'Text',
						label: 'Betrag',
						id: 'Recht_Rangvorbehalt_###1###_Betrag_Wert_InZiffern',
						dataRapPath: 'Recht.Rangvorbehalt[###1###].Betrag.Wert.InZiffern'
					}, {
						fldtype: 'Text',
						label: 'Währung',
						id: 'Recht_Rangvorbehalt_###1###_Betrag_Waehrung_InAbk',
						dataRapPath: 'Recht.Rangvorbehalt[###1###].Betrag.Waehrung.InAbk',
						codestable: 'Waehrungscode.Auto'
					}, {
						fldtype: 'Text',
						label: 'Betrag i. W.',
						id: 'Recht_Rangvorbehalt_###1###_Betrag_Wert_InWorten',
						dataRapPath: 'Recht.Rangvorbehalt[###1###].Betrag.Wert.InWorten'
					}, {
						fldtype: 'Text',
						label: 'Betrag Währung LF',
						id: 'Recht_Rangvorbehalt_###1###_Betrag_Waehrung_InWorten',
						dataRapPath: 'Recht.Rangvorbehalt[###1###].Betrag.Waehrung.InWorten',
						codestable: 'WaehrungInWorten.Auto'
					}, {
						fldtype: 'Text',
						label: 'lfd. Nr. Abt. I',
						id: 'Recht_Rangvorbehalt_###1###_Bezug_BezugInAbt1_lfdNr',
						dataRapPath: 'Recht.Rangvorbehalt[###1###].Bezug.BezugInAbt1.lfdNr'
					}, {
						fldtype: 'Text',
						label: 'Vorname',
						id: 'Recht_Rangvorbehalt_###1###_Bezug_BezugInAbt1_Eigentuemer_Natuer_Person_Vorname',
						dataRapPath: 'Recht.Rangvorbehalt[###1###].Bezug.BezugInAbt1.Eigentuemer.Natuer.Person.Vorname'
					}, {
						fldtype: 'Text',
						label: 'Nachname',
						id: 'Recht_Rangvorbehalt_###1###_Bezug_BezugInAbt1_Eigentuemer_Natuer_Person_Nachname',
						dataRapPath: 'Recht.Rangvorbehalt[###1###].Bezug.BezugInAbt1.Eigentuemer.Natuer.Person.Nachname'
					}, {
						fldtype: 'Text',
						label: 'lfd. Nr. BV',
						id: 'Recht_Rangvorbehalt_###1###_Bezug_BuchStelle',
						dataRapPath: 'Recht.Rangvorbehalt[###1###].Bezug.BuchStelle'
					}
				],
				subitems: [{
						cardinality: 'n',
						opDelLastSubitem: true,
						label: 'weitere vorbehaltene Rechte',
						dynamicSubitem: {
							label: 'weitere vorbehaltene Rechte (###1###)  (###2###) ',
							inputFields: [{
									fldtype: 'Text',
									label: 'Rechtsart',
									id: 'Recht_Rangvorbehalt_###1###_RechtsArt_###2###__1',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].RechtsArt[###2###][1]',
									codestable: 'Rechtsart.Auto'
								}, {
									fldtype: 'Text',
									label: 'Rechtsart',
									id: 'Recht_Rangvorbehalt_###1###_RechtsArt_###2###__2',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].RechtsArt[###2###][2]',
									codestable: 'Rechtsart.Auto'
								}, {
									fldtype: 'Text',
									label: 'Rechtsart',
									id: 'Recht_Rangvorbehalt_###1###_RechtsArt_###2###__3',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].RechtsArt[###2###][3]',
									codestable: 'Rechtsart.Auto'
								}, {
									fldtype: 'Text',
									label: 'Rechtsart',
									id: 'Recht_Rangvorbehalt_###1###_RechtsArt_###2###__4',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].RechtsArt[###2###][4]',
									codestable: 'Rechtsart.Auto'
								}, {
									fldtype: 'Text',
									label: 'Rechtsart',
									id: 'Recht_Rangvorbehalt_###1###_RechtsArt_###2###__5',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].RechtsArt[###2###][5]',
									codestable: 'Rechtsart.Auto'
								}
							]
						}
					}, {
						cardinality: 'n',
						opDelLastSubitem: true,
						label: 'Rangvorbehalt Zinsen',
						dynamicSubitem: {
							label: 'Rangvorbehalt Zinsen (###1###)  (###2###) ',
							inputFields: [{
									fldtype: 'Text',
									label: 'Zins Intervall',
									id: 'Recht_Rangvorbehalt_###1###_Zinsen_###2###_Intervall',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Zinsen[###2###].Intervall',
									codestable: 'InterestInterval.Dropdown'
								}, {
									fldtype: 'Text',
									label: 'Zins Art',
									id: 'Recht_Rangvorbehalt_###1###_Zinsen_###2###_Bezeichnung',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Zinsen[###2###].Bezeichnung',
									codestable: 'Zinstyp.Dropdown+'
								}, {
									fldtype: 'Text',
									label: 'Zins % fest i. Z.',
									id: 'Recht_Rangvorbehalt_###1###_Zinsen_###2###_Prozent_InZiffern',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Zinsen[###2###].Prozent.InZiffern'
								}, {
									fldtype: 'Text',
									label: '% variabel',
									id: 'Recht_Rangvorbehalt_###1###_Zinsen_###2###_Prozent_Berechnung',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Zinsen[###2###].Prozent.Berechnung',
									codestable: 'BerechnungsvorschriftZinsen.Auto'
								}, {
									fldtype: 'Text',
									label: 'Zins % fest i. W.',
									id: 'Recht_Rangvorbehalt_###1###_Zinsen_###2###_Prozent_InWorten',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Zinsen[###2###].Prozent.InWorten'
								}, {
									fldtype: 'Text',
									label: 'Bezugsbetrag i. Z.',
									id: 'Recht_Rangvorbehalt_###1###_Zinsen_###2###_Prozent_Betrag_Wert_InZiffern',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Zinsen[###2###].Prozent.Betrag.Wert.InZiffern'
								}, {
									fldtype: 'Text',
									label: 'Bezugsbetrag Währung KF',
									id: 'Recht_Rangvorbehalt_###1###_Zinsen_###2###_Prozent_Betrag_Waehrung_InAbk',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Zinsen[###2###].Prozent.Betrag.Waehrung.InAbk',
									codestable: 'Waehrungscode.Auto'
								}, {
									fldtype: 'Text',
									label: 'Bezugsbetrag i. W.',
									id: 'Recht_Rangvorbehalt_###1###_Zinsen_###2###_Prozent_Betrag_Wert_InWorten',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Zinsen[###2###].Prozent.Betrag.Wert.InWorten'
								}, {
									fldtype: 'Text',
									label: 'Bezugsbetrag Währung LF',
									id: 'Recht_Rangvorbehalt_###1###_Zinsen_###2###_Prozent_Betrag_Waehrung_InWorten',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Zinsen[###2###].Prozent.Betrag.Waehrung.InWorten',
									codestable: 'WaehrungInWorten.Auto'
								}, {
									fldtype: 'Text',
									label: '% max.',
									id: 'Recht_Rangvorbehalt_###1###_Zinsen_###2###_ZinsBerenzung_Max',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Zinsen[###2###].ZinsBerenzung.Max'
								}, {
									fldtype: 'Date',
									label: 'Datum Beginn',
									id: 'Recht_Rangvorbehalt_###1###_Zinsen_###2###_Beginn_Datum',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Zinsen[###2###].Beginn.Datum'
								}, {
									fldtype: 'Text',
									label: 'Beginn i. W.',
									id: 'Recht_Rangvorbehalt_###1###_Zinsen_###2###_Beginn_InWorten',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Zinsen[###2###].Beginn.InWorten',
									codestable: 'BeginnInWorten.Auto'
								}
							]
						}
					}, {
						cardinality: 'n',
						opDelLastSubitem: true,
						label: 'Rangvorbehalt Nebenleistung ',
						dynamicSubitem: {
							label: 'Rangvorbehalt Nebenleistung  (###1###)  (###2###) ',
							inputFields: [{
									fldtype: 'Text',
									label: 'Nebenleistung Art',
									id: 'Recht_Rangvorbehalt_###1###_Nebenleistungen_###2###_Bezeich',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Nebenleistungen[###2###].Bezeich',
									codestable: 'Nebenleistungsbezeichnung.Auto'
								}, {
									fldtype: 'Text',
									label: 'Nebenl. Intervall',
									id: 'Recht_Rangvorbehalt_###1###_Nebenleistungen_###2###_Intervall',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Nebenleistungen[###2###].Intervall',
									codestable: 'Nebenleistungsintervall.Dropdown'
								}, {
									fldtype: 'Text',
									label: 'Nebenl. % fest i.Z.',
									id: 'Recht_Rangvorbehalt_###1###_Nebenleistungen_###2###_Prozent_InZiffern',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Nebenleistungen[###2###].Prozent.InZiffern'
								}, {
									fldtype: 'Text',
									label: 'NL variabel',
									id: 'Recht_Rangvorbehalt_###1###_Nebenleistungen_###2###_Prozent_Berechnung',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Nebenleistungen[###2###].Prozent.Berechnung',
									codestable: 'BerechnungsvorschriftNebenleistungen.Auto'
								}, {
									fldtype: 'Text',
									label: 'Nebenl. % fest i.W.',
									id: 'Recht_Rangvorbehalt_###1###_Nebenleistungen_###2###_Prozent_InWorten',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Nebenleistungen[###2###].Prozent.InWorten'
								}, {
									fldtype: 'Text',
									label: 'Bezugsbetrag i. Z.',
									id: 'Recht_Rangvorbehalt_###1###_Nebenleistungen_###2###_Prozent_Betrag_Wert_InZiffern',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Nebenleistungen[###2###].Prozent.Betrag.Wert.InZiffern'
								}, {
									fldtype: 'Text',
									label: 'Bezugsbetrag Währung KF',
									id: 'Recht_Rangvorbehalt_###1###_Nebenleistungen_###2###_Prozent_Betrag_Waehrung_InAbk',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Nebenleistungen[###2###].Prozent.Betrag.Waehrung.InAbk',
									codestable: 'Waehrungscode.Auto'
								}, {
									fldtype: 'Text',
									label: 'Bezugsbetrag i. W.',
									id: 'Recht_Rangvorbehalt_###1###_Nebenleistungen_###2###_Prozent_Betrag_Wert_InWorten',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Nebenleistungen[###2###].Prozent.Betrag.Wert.InWorten'
								}, {
									fldtype: 'Text',
									label: 'Bezugsbetrag Währung LF',
									id: 'Recht_Rangvorbehalt_###1###_Nebenleistungen_###2###_Prozent_Betrag_Waehrung_InWorten',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Nebenleistungen[###2###].Prozent.Betrag.Waehrung.InWorten',
									codestable: 'WaehrungInWorten.Auto'
								}, {
									fldtype: 'Date',
									label: 'Datum Beginn',
									id: 'Recht_Rangvorbehalt_###1###_Nebenleistungen_###2###_Beginn_Datum',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Nebenleistungen[###2###].Beginn.Datum'
								}, {
									fldtype: 'Text',
									label: 'Beginn i. W.',
									id: 'Recht_Rangvorbehalt_###1###_Nebenleistungen_###2###_Beginn_InWorten',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Nebenleistungen[###2###].Beginn.InWorten',
									codestable: 'BeginnInWorten.Auto'
								}, {
									fldtype: 'Checkbox',
									label: 'Bedingt',
									id: 'Recht_Rangvorbehalt_###1###_Nebenleistungen_###2###_Bedingung_bedingt',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Nebenleistungen[###2###].Bedingung.bedingt'
								}, {
									fldtype: 'Checkbox',
									label: 'Befristet',
									id: 'Recht_Rangvorbehalt_###1###_Nebenleistungen_###2###_Befristung_befristet',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Nebenleistungen[###2###].Befristung.befristet'
								}
							]
						}
					}, {
						cardinality: 'n',
						opDelLastSubitem: true,
						label: 'Rangvorbehalt Ber. Nat. Pers.',
						dynamicSubitem: {
							label: 'Rangvorbehalt Ber. Nat. Pers. (###1###)  (###2###) ',
							inputFields: [{
									fldtype: 'Text',
									label: 'Titel',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Natuer_Person_Titel',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Natuer.Person.Titel',
									codestable: 'Titel.Dropdown+'
								}, {
									fldtype: 'Text',
									label: 'Namensvorsatz',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Natuer_Person_NameVorsatz',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Natuer.Person.NameVorsatz'
								}, {
									fldtype: 'Text',
									label: 'Vorname',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Natuer_Person_Vorname',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Natuer.Person.Vorname'
								}, {
									fldtype: 'Text',
									label: 'Rufname',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Natuer_Person_NameGenannt',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Natuer.Person.NameGenannt'
								}, {
									fldtype: 'Text',
									label: 'Namenszusatz',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Natuer_Person_NameZusatz',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Natuer.Person.NameZusatz'
								}, {
									fldtype: 'Text',
									label: 'Nachname ',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Natuer_Person_Nachname',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Natuer.Person.Nachname'
								}, {
									fldtype: 'Text',
									label: 'Geburtsname',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Natuer_Person_Geburtsname',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Natuer.Person.Geburtsname'
								}, {
									fldtype: 'Date',
									label: 'Geburtsdatum',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Natuer_Person_Geburtsdatum',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Natuer.Person.Geburtsdatum'
								}, {
									fldtype: 'Text',
									label: 'PLZ',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Natuer_Person_PLZ',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Natuer.Person.PLZ'
								}, {
									fldtype: 'Text',
									label: 'Wohnort',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Natuer_Person_Ort',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Natuer.Person.Ort'
								}, {
									fldtype: 'Text',
									label: 'Straße',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Natuer_Person_Strasse',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Natuer.Person.Strasse'
								}, {
									fldtype: 'Text',
									label: 'Haus-Nr.',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Natuer_Person_HausNr',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Natuer.Person.HausNr'
								}, {
									fldtype: 'Text',
									label: 'Beruf',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Natuer_Person_Beruf',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Natuer.Person.Beruf'
								}
							]
						}
					}, {
						cardinality: 'n',
						opDelLastSubitem: true,
						label: 'Rangvorbehalt Ber. Jur. Pers',
						dynamicSubitem: {
							label: 'Rangvorbehalt Ber. Jur. Pers (###1###)  (###2###) ',
							inputFields: [{
									fldtype: 'Text',
									label: 'Firma/Bezeichnung',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Jurist_Bez',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Jurist.Bez'
								}, {
									fldtype: 'Text',
									label: 'Sitz PLZ',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Jurist_Sitz_PLZ_1',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Jurist.Sitz.PLZ[1]'
								}, {
									fldtype: 'Text',
									label: 'Sitz PLZ',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Jurist_Sitz_PLZ_2',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Jurist.Sitz.PLZ[2]'
								}, {
									fldtype: 'Text',
									label: 'Sitz PLZ',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Jurist_Sitz_PLZ_3',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Jurist.Sitz.PLZ[3]'
								}, {
									fldtype: 'Text',
									label: 'Sitz Ort',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Jurist_Sitz_Ort_1',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Jurist.Sitz.Ort[1]'
								}, {
									fldtype: 'Text',
									label: 'Sitz Ort',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Jurist_Sitz_Ort_2',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Jurist.Sitz.Ort[2]'
								}, {
									fldtype: 'Text',
									label: 'Sitz Ort',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Jurist_Sitz_Ort_3',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Jurist.Sitz.Ort[3]'
								}, {
									fldtype: 'Text',
									label: 'Reg.Gericht',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Jurist_Register_Gericht',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Jurist.Register.Gericht'
								}, {
									fldtype: 'Text',
									label: 'Reg.Art',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Jurist_Register_Art',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Jurist.Register.Art',
									codestable: 'Registerart.Dropdown+'
								}, {
									fldtype: 'Number',
									label: 'Reg.Nr',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Jurist_Register_Nr',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Jurist.Register.Nr'
								}
							]
						}
					}, {
						cardinality: 'n',
						opDelLastSubitem: true,
						label: 'Rangvorbehalt Ber. KöR',
						dynamicSubitem: {
							label: 'Rangvorbehalt Ber. KöR (###1###)  (###2###) ',
							inputFields: [{
									fldtype: 'Text',
									label: 'KöR Bezeichnung',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Koerper_Name',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Koerper.Name'
								}, {
									fldtype: 'Text',
									label: 'Zusatz § 15 GBV',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Koerper_VermTeil',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Koerper.VermTeil'
								}, {
									fldtype: 'Text',
									label: 'KöR Ort',
									id: 'Recht_Rangvorbehalt_###1###_Glaeubiger_normlGlaeubigerVar1_###2###_Beteiligte_Eigentuemer_Koerper_Vertreter_Ort',
									dataRapPath: 'Recht.Rangvorbehalt[###1###].Glaeubiger.normlGlaeubigerVar1[###2###].Beteiligte.Eigentuemer.Koerper.Vertreter.Ort'
								}
							]
						}
					}
				]
			}
		}, {
			opDelLastSubitem: true,
			label: 'Abtretungsvermerk',
			cardinality: '+',
			dynamicSubitem: {
				label: 'Abtretungsvermerk (###1###) ',
				inputFields: [{
						fldtype: 'Checkbox',
						label: 'Abtr.-Verm.',
						id: 'Recht_Abtrvermerk_Art_###1###_',
						dataRapPath: 'Recht.Abtrvermerk.Art[###1###]'
					}, {
						fldtype: 'Checkbox',
						label: 'Abtr. Zins',
						id: 'Recht_Abtrvermerk_AbtrZinsen_###1###_Bezeichnung',
						dataRapPath: 'Recht.Abtrvermerk.AbtrZinsen[###1###].Bezeichnung'
					}, {
						fldtype: 'Date',
						label: 'Abtr. Zins ab Datum',
						id: 'Recht_Abtrvermerk_AbtrZinsen_###1###_Beginn_Datum',
						dataRapPath: 'Recht.Abtrvermerk.AbtrZinsen[###1###].Beginn.Datum'
					}, {
						fldtype: 'Text',
						label: 'Abtr. Zins ab Beschr.',
						id: 'Recht_Abtrvermerk_AbtrZinsen_###1###_Beginn_InWorten',
						dataRapPath: 'Recht.Abtrvermerk.AbtrZinsen[###1###].Beginn.InWorten',
						codestable: 'BeginnInWorten.Auto'
					}, {
						fldtype: 'Text',
						label: 'Abtr. NL',
						id: 'Recht_Abtrvermerk_AbtrNebLstg_###1###_Bezeichnung',
						dataRapPath: 'Recht.Abtrvermerk.AbtrNebLstg[###1###].Bezeichnung'
					}, {
						fldtype: 'Date',
						label: 'Abtr. NL ab Datum',
						id: 'Recht_Abtrvermerk_AbtrNebLstg_###1###_Beginn_Datum',
						dataRapPath: 'Recht.Abtrvermerk.AbtrNebLstg[###1###].Beginn.Datum'
					}, {
						fldtype: 'Text',
						label: 'Abtr. NL ab Beschr.',
						id: 'Recht_Abtrvermerk_AbtrNebLstg_###1###_Beginn_InWorten',
						dataRapPath: 'Recht.Abtrvermerk.AbtrNebLstg[###1###].Beginn.InWorten',
						codestable: 'BeginnInWorten.Auto'
					}
				]
			}
		}
	],
	AbtIIIEGelöschtvermerk: [{
			label: 'Gelöschtvermerk',
			cardinality: '1',
			inputFields: [{
					fldtype: 'Text',
					label: 'lfd. Nr.',
					id: 'BuchGgst_lfdNr_1',
					dataRapPath: 'BuchGgst.lfdNr[1]'
				}, {
					fldtype: 'Text',
					label: 'lfd. Nr.',
					id: 'BuchGgst_lfdNr_2',
					dataRapPath: 'BuchGgst.lfdNr[2]'
				}, {
					fldtype: 'Text',
					label: 'lfd. Nr.',
					id: 'BuchGgst_lfdNr_3',
					dataRapPath: 'BuchGgst.lfdNr[3]'
				}, {
					fldtype: 'Text',
					label: 'lfd. Nr.',
					id: 'BuchGgst_lfdNr_4',
					dataRapPath: 'BuchGgst.lfdNr[4]'
				}, {
					fldtype: 'Text',
					label: 'lfd. Nr.',
					id: 'BuchGgst_lfdNr_5',
					dataRapPath: 'BuchGgst.lfdNr[5]'
				}, {
					fldtype: 'Text',
					label: 'lfd. Nr.',
					id: 'BuchGgst_lfdNr_6',
					dataRapPath: 'BuchGgst.lfdNr[6]'
				}, {
					fldtype: 'Text',
					label: 'lfd. Nr.',
					id: 'BuchGgst_lfdNr_7',
					dataRapPath: 'BuchGgst.lfdNr[7]'
				}, {
					fldtype: 'Text',
					label: 'lfd. Nr.',
					id: 'BuchGgst_lfdNr_8',
					dataRapPath: 'BuchGgst.lfdNr[8]'
				}, {
					fldtype: 'Checkbox',
					label: 'Gelöscht',
					id: 'BuchGgst_geloescht',
					dataRapPath: 'BuchGgst.geloescht'
				}
			],
		}
	]
}
esvMasks.renameProperty('AbtIIIERecht', 'A3E_Recht');
esvMasks.renameProperty('AbtIIIEVormerkung', 'A3E_Vormerkung');
esvMasks.renameProperty('AbtIIIEWiderspruch', 'A3E_Widerspruch');
esvMasks.renameProperty('AbtIIIEGelöschtvermerk', 'A3E_Geloeschtvermerk');
