var Department = /** @class */ (function () {
    function Department(n) {
        this.name = n;
    }
    Department.prototype.describe = function () {
        console.log("Department is : " + this.name);
    };
    return Department;
}());
;
var accounting = new Department("Accounting");
accounting.describe();
var accountingCopy = { name: 'IT', describe: accounting.describe };
accountingCopy.describe();
