"use strict";
import { digits } from "./functions.js";
import { letters } from "./functions.js";
import { sum } from "./functions.js";

var data = window.prompt("podaj dane");
while (data != null) {
  var d = digits(data);
  var l = letters(data);
  var s = sum(data);
  var result = "\t" + d.toString() + "\t" + l.toString() + "\t" + s.toString();
  console.log(result);
  var window_prompt = "wyniki:" + "    " + d.toString() + "    " + l.toString() + "    " + s.toString() + " podaj dane";
  data = window.prompt(window_prompt);
}