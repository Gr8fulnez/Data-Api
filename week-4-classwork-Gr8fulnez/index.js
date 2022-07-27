"use strict";
exports.__esModule = true;
var https = require("https");
// interface Obj {
//   data: string;
//   // value: string;
// }
// let output: Obj;
var url = "https://dhq.sh/ages.json";
var result = "", arr, total = 0;
https.get(url, function (res) {
    console.log(res.statusCode);
    res.on("data", function (data) {
        result += data;
    });
    res.on("end", function () {
        result = JSON.parse(result);
        result = result.data.split(",").map(function (el) { return el.trim(); });
        arr = result.filter(function (el, i) { return i % 2 === 1; });
        for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
            var el = arr_1[_i];
            el = el.split("=");
            if (+el[1] > 25) {
                total += +el[1];
            }
            console.log(el);
        }
        console.log(result);
        console.log(arr);
        console.log(total);
    });
});
