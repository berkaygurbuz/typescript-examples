class Department{
    
    //if you use protected you can access other extended class the variable
    protected employees:string[]=[];

    constructor(private readonly id:string,public name:string){
        
    }

    describe(this:Department){
        console.log("Department is : "+this.id+"  "+this.name)
    }

    addEmployee(employee:string){
        this.employees.push(employee);
    }

    moreInformationEmployee(){
        console.log(this.employees.length);
        console.log(this.employees);
    }
};

//inherit department
class ITDepartment extends Department{

    admins:string[];
    constructor(id:string,admins:string[]){
        super(id,'IT');
        this.admins=admins;
    }

}

class AccountingDepartment extends Department{
    constructor(id:string, private reports:string[]){
        super(id,'Accounting')
        
    }

    addEmployee(name:string){
        if (name === 'Max') {
            return;
          }
          this.employees.push(name);

    }

    addReport(text:string){
        this.reports.push(text);
    }
    viewReport(){
        console.log(this.reports);
    }
}

/*
const it=new ITDepartment('d1', ['Ali']);
it.describe();
it.addEmployee('Ali');
it.addEmployee('Veli');
it.moreInformationEmployee();
*/
const accounting=new AccountingDepartment('d2',[]);



accounting.viewReport();
accounting.describe();
accounting.addReport('New reports!');
accounting.viewReport();

accounting.addEmployee('Hasan');
accounting.addEmployee('Max');
accounting.addEmployee('Maxiii');
accounting.moreInformationEmployee();