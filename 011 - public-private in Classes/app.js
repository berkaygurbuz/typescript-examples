var Department = /** @class */ (function () {
    function Department(n) {
        this.employees = [];
        this.name = n;
    }
    Department.prototype.describe = function () {
        console.log("Department is : " + this.name);
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
var accounting = new Department('Accounting');
accounting.describe();
accounting.addEmployee('Ali');
accounting.addEmployee('Veli');
//you cant use this because our variable is private
//accounting.employees[2]="Ayşe";,
accounting.moreInformationEmployee();
