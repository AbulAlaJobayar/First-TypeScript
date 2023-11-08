{
    //Access modifiers


class BankAccount{
readonly id:number;
public name:string;
protected _balance:number;
constructor(id:number,name:string,_balance:number){
    this.id=id;
    this.name=name;
    this._balance=_balance;
}
addDeposit(amount:number){
this._balance=this._balance+amount
}
getBallance(){
    return this._balance
}
}
const goribmanuserAccount=new BankAccount(111,"jobayar",20)
goribmanuserAccount.addDeposit(50)
 const result=goribmanuserAccount.getBallance()
 console.log(result)



 class student extends BankAccount{
    test(){
        this._balance
    }
    // constructor(id:number,name:string,_ballence:number){
    //     super(id,name,_ballence)
    // }
 }
    //
}