var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var foo = 123;
var str = "123";
var boo = true;
var obj = [];
var arr = [1, 2, 3];
var arr2 = ["1", "2"];
var arr3 = [1, 2, "3", true];
var arr4 = [1, 2, 3, "13"];
var arr5 = ['1', 2];
var a = 123;
a = "123";
var b = null;
var n = undefined;
var u = null;
function fun0(n1, n2) {
    return "";
}
fun0(1, 2);
var fun2 = function () {
};
var fun3 = function (n1, n2) {
};
fun3(1);
var Fun4 = /** @class */ (function () {
    function Fun4(x, y) {
        this.x = x;
        this.y = y;
    }
    Fun4.prototype.add = function () {
        return this.x + this.y;
    };
    return Fun4;
}());
var Fun44 = /** @class */ (function (_super) {
    __extends(Fun44, _super);
    function Fun44(x, y, z) {
        return _super.call(this, x, y) || this;
    }
    Fun44.prototype.sum = function () {
        return this.x + this.y + this.z;
    };
    return Fun44;
}(Fun4));
var f1 = new Fun4(1, 2);
console.log(f1.add());
function fun6(person) {
}
var person = { username: "hello", name: "abc" };
fun6(person);
var Fun7 = /** @class */ (function () {
    function Fun7() {
    }
    return Fun7;
}());
function fun7(n) {
    return n;
}
fun7("str");
var QF;
(function (QF) {
    function fun() {
    }
    QF.fun = fun;
})(QF || (QF = {}));
QF.fun();
