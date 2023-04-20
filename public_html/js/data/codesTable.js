var codesTables = (function () {

    var cachedValues = {
        waehrung: ["", "EUR", "GBP", "GIP", "USD", "DKK", "SEK", "CHF", "LTL", "PLN", "CZK", "HUF", "RON", "BGN"],
        waehrungscode: ["", "EUR", "DM"],
        titel: ["", "Dr.", "Dr. Dr.", "Prof.", "Prof. Dr."],
        quelleziel: ["", "von", "aus", "nach"],
        intervall: ["", "Jeden Monat", "Jede Woche", "Jeden Tag"],
        rechtsart: ['', 'Rechtsart1', 'Rechtsart2']
    };

    var getValuesFromServer = function getValuesFromServer(codesTableName) {
        var translateNames = {'Zinsintervall': 'InterestInterval'}; // just to patch a bug in codestable

        var res = [];

        codesTableName = translateNames[codesTableName] ? translateNames[codesTableName] : codesTableName;
        $.ajax({
            url: '../codestableServlet?codestable=' + codesTableName,
            async: false,
            success: function (data) {
                res = JSON.parse(data);
            }
        });
        return res;
    }

    var getValues = function getValues(codesTableName) {
        codesTableName = codesTableName.split('.')[0];
        var ctn = codesTableName.toLowerCase();
        if (cachedValues[ctn]) {
            return cachedValues[ctn];
        }
        var res = getValuesFromServer(codesTableName);
        if (res.length) {
            cachedValues[ctn] = res
        }
        return cachedValues[ctn] || [];
    }
    // api
    return {
        getValues: getValues,
    }
})();