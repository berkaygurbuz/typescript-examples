class Department{
    name:string;
    private employees:string[]=[];

    constructor(n:string){
        this.name=n;
    }

    describe(this:Department){
        console.log("Department is : "+this.name)
    }

    addEmployee(employee:string){
        this.employees.push(employee);
    }

    moreInformationEmployee(){
        console.log(this.employees.length);
        console.log(this.employees);
    }
};


const accounting=new Department('Accounting');
accounting.describe();



accounting.addEmployee('Ali');
accounting.addEmployee('Veli');

//you cant use this because our variable is private
//accounting.employees[2]="Ayşe";,

accounting.moreInformationEmployee();