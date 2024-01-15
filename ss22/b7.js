var a = parseFloat(prompt("Nhập a: "));
var b = parseFloat(prompt("Nhập b: "));
var c = parseFloat(prompt("Nhập c: "));
var delta = b**2 - 4*a*c;
if (delta < 0) {
    console.log("Phương trình vô nghiệm.");
} else if (delta === 0) {
    var x = -b / (2*a);
    console.log("Phương trình có nghiệm kép x =", x);
} else {
    var x1 = (-b + Math.sqrt(delta)) / (2*a);
    var x2 = (-b - Math.sqrt(delta)) / (2*a);
    console.log("Phương trình có hai npb: x1 =", x1, ", x2 =", x2);
}