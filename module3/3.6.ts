{
    //
    class BankAccount{
        readonly id:number;
       public name:string;
       protected amount:number;
        constructor(id:number,name:string,amount:number){
           this.id=id;
           this.name=name;
            this.amount=amount
        }
        // setter
        set deposit(acount:number){
this.amount=this.amount+acount
        }
        // getter
        get ballance(){
            return this.amount
        }
    }
    const goribAccount=new BankAccount(222,'jobayar',59)
    const amount=goribAccount.ballance
    console.log(amount)
    //
goribAccount.deposit=40

}