var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        //if you use protected you can access other extended class the variable
        this.employees = [];
    }
    Department.prototype.describe = function () {
        console.log("Department is : " + this.id + "  " + this.name);
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.moreInformationEmployee = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
;
//inherit department
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = _super.call(this, id, 'IT') || this;
        _this.admins = admins;
        return _this;
    }
    return ITDepartment;
}(Department));
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, reports) {
        var _this = _super.call(this, id, 'Accounting') || this;
        _this.reports = reports;
        return _this;
    }
    AccountingDepartment.prototype.addEmployee = function (name) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    };
    AccountingDepartment.prototype.addReport = function (text) {
        this.reports.push(text);
    };
    AccountingDepartment.prototype.viewReport = function () {
        console.log(this.reports);
    };
    return AccountingDepartment;
}(Department));
/*
const it=new ITDepartment('d1', ['Ali']);
it.describe();
it.addEmployee('Ali');
it.addEmployee('Veli');
it.moreInformationEmployee();
*/
var accounting = new AccountingDepartment('d2', []);
accounting.viewReport();
accounting.describe();
accounting.addReport('New reports!');
accounting.viewReport();
accounting.addEmployee('Hasan');
accounting.addEmployee('Max');
accounting.addEmployee('Maxiii');
accounting.moreInformationEmployee();
