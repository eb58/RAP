/* global QUnit, filterObject, _ */


const esvData = {
    "label": "TEST Parameter",
    "isCollapsed": false,
    "inputFields": [{
        "fldtype": "Text",
        "label": "Test1",
        "dataRapPath": "BuchGgst.lfdNr1",
        "id": "testparameter1",
        "val": ""
    }, {
        "fldtype": "Text",
        "label": "Test2",
        "dataRapPath": "BuchGgst.lfdNr2",
        "id": "testparameter2",
        "val": ""
    }
    ],
    "subitems": [{
        "label": "Ergänzungen",
        "inputFields": [{
            "fldtype": "Text",
            "label": "Labeltest",
            "dataRapPath": "bbb.aaa",
            "id": "ergänzung",
            "val": "bbb "
        }
        ],
        "id": "itemid-2192154-1494171519447-0"
    }, {
        "label": "Gläubiger",
        "cardinality": "n",
        "opDelLastSubitem": true,
        "id": "itemid-2207442-1494171519449-1",
        "subitems": [{
            "label": "Datensatz(1)",
            "inputFields": [{
                "fldtype": "Text",
                "id": "Recht_Beteiligte1_Name_1",
                "label": "Name ",
                "dataRapPath": "Recht.Beteiligte[1].Name ",
                "val": "testname1"
            }, {
                "fldtype": "Text",
                "id": "Recht_Beteiligte1_Alter1",
                "label": "Alter",
                "dataRapPath": "Recht.Beteiligte[1].Alter",
                "val": 40
            }
            ],
            "id": "itemid-4219344-1494171530902-3"
        }, {
            "label": "Datensatz(2)",
            "inputFields": [{
                "fldtype": "Text",
                "id": "Recht_Beteiligte2_Name_2",
                "label": "Name ",
                "dataRapPath": "Recht.Beteiligte[2].Name ",
                "val": "testname2"
            }, {
                "fldtype": "Text",
                "id": "Recht_Beteiligte2_Alter2",
                "label": "Alter",
                "dataRapPath": "Recht.Beteiligte[2].Alter",
                "val": 41
            }
            ],
            "id": "itemid-8105501-1494171532053-4"
        }, {
            "label": "Datensatz(3)",
            "inputFields": [{
                "fldtype": "Text",
                "id": "Recht_Beteiligte3_Name_3",
                "label": "Name ",
                "dataRapPath": "Recht.Beteiligte[3].Name ",
                "val": "testname3"
            }, {
                "fldtype": "Text",
                "id": "Recht_Beteiligte3_Alter3",
                "label": "Alter",
                "dataRapPath": "Recht.Beteiligte[3].Alter",
                "val": 42
            }
            ],
            "id": "itemid-5189664-1494171532198-5"
        }, {
            "label": "Datensatz(4)",
            "inputFields": [{
                "fldtype": "Text",
                "id": "Recht_Beteiligte4_Name_4",
                "label": "Name ",
                "dataRapPath": "Recht.Beteiligte[4].Name ",
                "val": "testname4"
            }, {
                "fldtype": "Text",
                "id": "Recht_Beteiligte4_Alter4",
                "label": "Alter",
                "dataRapPath": "Recht.Beteiligte[4].Alter",
                "val": 43
            }
            ],
            "id": "itemid-6211679-1494171532545-6"
        }, {
            "label": "Datensatz(5)",
            "inputFields": [{
                "fldtype": "Text",
                "id": "Recht_Beteiligte5_Name_5",
                "label": "Name ",
                "dataRapPath": "Recht.Beteiligte[5].Name ",
                "val": "testname5"
            }, {
                "fldtype": "Text",
                "id": "Recht_Beteiligte5_Alter5",
                "label": "Alter",
                "dataRapPath": "Recht.Beteiligte[5].Alter",
                "val": 44
            }
            ],
            "id": "itemid-7308168-1494171533138-7"
        }
        ]
    }
    ],
    "id": "itemid-7776833-1494171519449-2"
};

const inIds = (o, arr) => (o) => arr.includes(o.id);

QUnit.test('testset: filterObject', function (assert) {
    var obj1 = {
        id: 'id1', data: 'test1',
        subitem1: {id: 'id11', data: 'test11', subsubitem11: {id: 'id111', data: 'test111',},},
        subitem2: {
            id: 'id21', data: 'test21',
            subsubitem21: {id: 'id211', data: 'test211', subsubitem211: {id: 'id2111', data: 'test2111',},},
            subsubitem22: {id: 'id221', data: 'test221', subsubitem221: {id: 'id2211', data: 'test2211',},},
        },
    };


    assert.deepEqual(filterObject.filter(obj1, inIds(obj1, ['id0'])), {}, 'filtered object ok');
    assert.deepEqual(filterObject.filter(obj1, inIds(obj1, ['id1'])), {
        "data": "test1",
        "id": "id1"
    }, 'filtered object ok');
    assert.deepEqual(filterObject.filter(obj1, inIds(obj1, ['id0', 'id111', 'id2211'])),
        {
            "data": "test1", "id": "id1",
            "subitem1": {"data": "test11", "id": "id11", "subsubitem11": {"data": "test111", "id": "id111"}},
            "subitem2": {
                "data": "test21",
                "id": "id21",
                "subsubitem22": {
                    "data": "test221",
                    "id": "id221",
                    "subsubitem221": {"data": "test2211", "id": "id2211"}
                }
            }
        }, 'filtered object ok');

});

QUnit.test('testset: filterObject2', function (assert) {
    const obj1 = {
        id: 'id1', data: 'test1',
        subitems1: [
            {
                id: 'id11', data: 'test11',
                subsubitems11: [{id: 'id111', data: 'test111',}],
            }],
        subitems2: [{
            id: 'id21', data: 'test21',
            subsubitems21: [{id: 'id211', data: 'test211', subsubitems211: [{id: 'id2111', data: 'test2111',}],}],
            subsubitems22: [{id: 'id221', data: 'test221', subsubitems221: [{id: 'id2211', data: 'test2211',}],}],
        }],
    };


    assert.deepEqual(filterObject.filter(obj1, inIds(obj1, ['id0'])), {}, 'filtered object ok');
    assert.deepEqual(filterObject.filter(obj1, inIds(obj1, ['id1'])), {
        "data": "test1",
        "id": "id1"
    }, 'filtered object ok');
    assert.deepEqual(filterObject.filter(obj1, inIds(obj1, ['id0', 'id111', 'id2211'])),
        {
            "data": "test1", "id": "id1",
            "subitems1": [{"data": "test11", "id": "id11", "subsubitems11": [{"data": "test111", "id": "id111"}]}],
            "subitems2": [{
                "data": "test21",
                "id": "id21",
                "subsubitems22": [{
                    "data": "test221",
                    "id": "id221",
                    "subsubitems221": [{"data": "test2211", "id": "id2211"}]
                }]
            }]
        }, 'filtered object ok');

});
