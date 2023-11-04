{
    //nullAble Type

    const searchName = (value: string |null) => {
        if (value) {
            console.log("searching")
        }
        else{
            console.log('there is no value')
        }
    }
    // searchName(null)
    searchName('jobayar')


// unknown typeof

    const getSpeedPerSecond=(value:unknown)=>{
        if(typeof value==="number"){
            const convertSpeed=(1000*value) / 3600;
            console.log(convertSpeed)
        }
        else if(typeof value ==="string"){
            // const result= parseFloat(value)
            const [result,unit,]= value.split(' ')

            const convertSpeed=(parseFloat(result)*1000) / 3600;
            console.log(convertSpeed,unit)
        }else{
           console.log('wrong input') 
        }
    }
// getSpeedPerSecond(`1000 per second`)
getSpeedPerSecond(1000)

const throwError=(msg:string):never=>{
    throw new Error(msg)
}
throwError('invalid user, cannot find user')

}