
var dut = require("../simplify-ua.js");
    exp = require("./eg.js");

function check(result, intent, orig) {
  console.log(orig);
  console.log("Result:", result);
  console.log("Wanted:", intent);
  console.log("--");
}

exp.forEach(function (d) {
  let res = dut(d.id);
  check(res, d.est, d.id);
});
