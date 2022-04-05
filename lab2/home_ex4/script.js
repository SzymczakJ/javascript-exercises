var button = document.getElementById("button");
var checkBox = document.getElementById("webStorage")
button.onclick = eventHandlerButton;

let covid_cases_database = new Map();
function eventHandlerButton() {
    var text = document.getElementById("txtarea").value;
    const arguments = text.split(' ');
    if ("create" == arguments[0]) {
        addCountryToDb(arguments);
    }
    else if ("read" == arguments[0]) {
        readCountry(arguments);
    }
    else if ("update" == arguments[0]) {
        update(arguments);
    }
    else if ("delete" == arguments[0]) {
        remove(arguments);
    }
    else {
        window.alert("No such operation");
    }
}

function addCountryToDb(arguments) {
    if (arguments.length != 4) {
        window.alert("Wrong number of arguments");
    }
    else {
        var covid_data = new Array(parseInt(arguments[2]), parseInt(arguments[3]));
        if (checkBox.checked == false) {
            if (!covid_cases_database.has(arguments[1])) {
                covid_cases_database.set(arguments[1], covid_data);
            }
            else {
                window.alert("Country already in database");
            }
        }
        else {
            if (localStorage.getItem(arguments[1]) === null) {
                localStorage.setItem(arguments[1], covid_data);
            }
            else {
                window.alert("Country already in database");
            }
        }
    }
}

function readCountry(arguments) {
    if (arguments.length != 2) {
        window.alert("Wrong number of arguments")
    }
    else {
        if (checkBox.checked == false) {
            if (covid_cases_database.has(arguments[1])) {
                var covid_data = covid_cases_database.get(arguments[1]);
                var allCases = covid_data[0];
                var recentCases = covid_data[1];
                window.alert(arguments[1] + " - all cases: " + allCases + "  recent cases: " + recentCases);
            }
            else {
                window.alert("Country not in database");
            }
        }
        else {
            if (localStorage.getItem(arguments[1]) === null) {
                window.alert("Country not in database");
            }
            else {
                var other_data = localStorage[arguments[1]];
                data = other_data.split(',');
                window.alert(arguments[1] + " - all cases: " + data[0] + "  recent cases: " + data[1]);
            }
        }
    }
}

function update(arguments) {
    if (arguments.length != 3) {
        window.alert("Wrong number of arguments")
    }
    else {
        if (checkBox.checked == false) {
            if (covid_cases_database.has(arguments[1])) {
                var covid_data = covid_cases_database.get(arguments[1]);
                var allCases = covid_data[0];
                var recentCases = covid_data[1];
                var new_covid_data = new Array(allCases + recentCases, parseInt(arguments[2]));
                covid_cases_database.set(arguments[1], new_covid_data);
            }
            else {
                window.alert("Country not in database");
            }
        }
        else {
            if (localStorage.getItem(arguments[1]) !== null) {
                var covid_data = localStorage.getItem(arguments[1]).split(',');
                var allCases = parseInt(covid_data[0]);
                var recentCases = parseInt(covid_data[1]);
                var new_covid_data = new Array(allCases + recentCases, parseInt(arguments[2]));
                localStorage.removeItem(arguments[1]);
                localStorage.setItem(arguments[1], new_covid_data);
            }
            else {
                window.alert("Country not in database");
            }
        }
    }
}

function remove(arguments) {
    if (arguments.length != 2) {
        window.alert("Wrong number of arguments")
    }
    else {
        if (checkBox.checked == false) {
            if (covid_cases_database.has(arguments[1])) {
                covid_cases_database.delete(arguments[1]);
            }
            else {
                window.alert("Country not in database");
            }
        }
        else {
            if (localStorage.getItem(arguments[1]) === null) {
                window.alert("Country not in database");
            }
            else {
                localStorage.removeItem(arguments[1]);
            }
        }
    }
}