{
const mentor1:string[]=['abul','babul','rabul','sadul']
const mentor2:string[]=['hazi','pagi','razi']
mentor1.push(...mentor2)

const mentors1 ={
    name:'abul',
    age:22,
    post:'junior developer',
}
const mentors2 ={
    name:'abul',
    age:22,
    post:'junior developer',
}
const mentors={...mentors1,...mentors2}

}