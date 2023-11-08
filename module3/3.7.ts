{
    //Static opp
    class Counter{
       static count:number=0
    //     increment(){
    //        return (Counter.count=Counter.count+1)
    //     }
       static increment(){
           return (Counter.count=Counter.count+1)
        }
    //     decrement(){
    //         return (Counter.count=Counter.count-1)
    //     }
       static decrement(){
            return (Counter.count=Counter.count-1)
        }
    }
// const instanse1=new Counter()
// console.log(instanse1.increment())
// console.log(instanse1.increment())
// console.log(instanse1.increment())


// const instanse2=new Counter()
// console.log(instanse2.increment())
// console.log(instanse2.increment())
// console.log(instanse2.increment())

console.log(Counter.increment())

    //
}