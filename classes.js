"use strict";
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
exports.__esModule = true;
// Public: Freely accessible.
// Private: Only accessible from class.
// Protected: Only accessible from class and classes derived from it.
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning " + this.employeeName);
    };
    return Employee;
}());
var Manger = /** @class */ (function (_super) {
    __extends(Manger, _super);
    function Manger(managerName, managerID) {
        if (managerID === void 0) { managerID = 0; }
        var _this = _super.call(this, managerName) || this;
        _this.managerID = 0;
        _this.managerID = managerID;
        return _this;
    }
    Manger.prototype.getManagerID = function () {
        console.log("Name:" + this.employeeName + ", Manager ID:" + this.managerID);
    };
    return Manger;
}(Employee));
var emp1 = new Employee("Liam");
emp1.greet();
var mngr1 = new Manger("Jake", 25);
mngr1.greet();
mngr1.getManagerID();
var mngr2 = new Manger("Hannah");
mngr2.greet();
mngr2.getManagerID();
