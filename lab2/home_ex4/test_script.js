"use strict";
let covid_cases_database = new Map();
var checked = false;

function addCountryToDb(string) {
    if (string.length != 4) {
        console.log("wrong")
    }
    else {
        var covid_data = new Array(parseInt(string[2]), parseInt(string[3]));
        if (checked == false) {
            if (!covid_cases_database.has(string[1])) {
                console.log("I do dis")
                covid_cases_database.set(string[1], covid_data);
            }
            else {
                console.log("wrong")
            }
        }
        else {
            if (localStorage.getItem(string[1]) === null) {
                localStorage.setItem(string[1], covid_data);
            }
            else {
                console.log("wrong")
            }
        }
    }
}

function readCountry(string) {
    if (string.length != 2) {
    }
    else {
        if (checked == false) {
            if (covid_cases_database.has(string[1])) {
                var covid_data = covid_cases_database.get(string[1]);
                var allCases = covid_data[0];
                var recentCases = covid_data[1];
                window.alert(string[1] + " - all cases: " + allCases + "  recent cases: " + recentCases);
            }
            else {
                console.log("wrong")
            }
        }
        else {
            if (localStorage.getItem(string[1]) === null) {
                console.log("wrong")
            }
            else {
                var other_data = localStorage[string[1]];
                data = other_data.split(',');
                window.alert(string[1] + " - all cases: " + data[0] + "  recent cases: " + data[1]);
            }
        }
    }
}

function update(string) {
    if (string.length != 3) {
        console.log("wrong")
    }
    else {
        if (checked == false) {
            if (covid_cases_database.has(string[1])) {
                var covid_data = covid_cases_database.get(string[1]);
                var allCases = covid_data[0];
                var recentCases = covid_data[1];
                var new_covid_data = new Array(allCases + recentCases, parseInt(string[2]));
                covid_cases_database.set(string[1], new_covid_data);
            }
            else {
                console.log("wrong")
            }
        }
        else {
            if (localStorage.getItem(string[1]) !== null) {
                var covid_data = localStorage.getItem(string[1]).split(',');
                var allCases = parseInt(covid_data[0]);
                var recentCases = parseInt(covid_data[1]);
                var new_covid_data = new Array(allCases + recentCases, parseInt(string[2]));
                localStorage.removeItem(string[1]);
                localStorage.setItem(string[1], new_covid_data);
            }
            else {
                console.log("wrong")
            }
        }
    }
}

function remove(string) {
    if (string.length != 2) {
        console.log("wrong")
    }
    else {
        if (checked == false) {
            if (covid_cases_database.has(string[1])) {
                covid_cases_database.delete(string[1]);
            }
            else {
                console.log("wrong")
            }
        }
        else {
            if (localStorage.getItem(string[1]) === null) {
                console.log("wrong")
            }
            else {
                localStorage.removeItem(string[1]);
            }
        }
    }
}

var expect = chai.expect;

describe('Functions for Map', function() {
    it('Adds Poland to Map', function() {
        var text = "create poland 100 100";
        var string = text.split(' ');
        checked = false;
        addCountryToDb(string);
        expect(covid_cases_database.size).to.equal(1);
    });
    it('Poland has 100 covid cases', function() {
        console.log(covid_cases_database);
        var covid_data = covid_cases_database.get("poland")
        expect(covid_data[0]).to.equal(100);
    });
    it('Poland has 100 new cases', function() {
        var covid_data = covid_cases_database.get("poland")
        expect(covid_data[1]).to.equal(100);
    });
    it('No other Poland is added', function() {
        var text = "create poland 100 100";
        var string = text.split(' ');
        addCountryToDb(string);
        expect(covid_cases_database.size).to.equal(1);
    });
    it('Update to Poland is correct', function() {
        var text = "update poland 100";
        var string = text.split(' ');
        update(string);
        var covid_data = covid_cases_database.get("poland")
        expect(covid_data[0]).to.equal(200);
    });
    it('', function() {
        var text = "remove poland";
        var string = text.split(' ');
        remove(string);
        expect(covid_cases_database.size).to.equal(0);
    });
})

checked = true;

describe('Functions for localStorage', function() {
    it('Adds Poland to Map', function() {
        var help_text = "delete poland";
        var help_string = help_text.split(' ');
        remove(help_string);
        var curr_size = localStorage.length
        var text = "create poland 100 100";
        checked = true;
        var string = text.split(' ');
        addCountryToDb(string);
        expect(localStorage.length).to.equal(curr_size + 1);
    });
    it('Poland has 100 covid cases and 100 new cases', function() {
        var covid_data = localStorage.getItem("poland")
        expect(covid_data).to.equal("100,100");
    });
    it('No other Poland is added', function() {
        var text = "create poland 100 100";
        var string = text.split(' ');
        var curr_size = localStorage.length;
        addCountryToDb(string);
        expect(localStorage.length).to.equal(curr_size);
    });
    it('Update to Poland is correct', function() {
        var text = "update poland 100";
        var string = text.split(' ');
        update(string);
        var covid_data = localStorage.getItem("poland");
        expect(covid_data).to.equal("200,100");
    });
    it('', function() {
        var text = "remove poland";
        var string = text.split(' ');
        var curr_size = localStorage.length;
        remove(string);
        expect(localStorage.length).to.equal(curr_size - 1);
    });
})