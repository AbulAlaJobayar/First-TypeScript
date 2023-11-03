{
    // Union Type
    type FrontEndDeveloper="fakibazDeveloper"|"valoDeveloper"
    type FullStuckDeveloper='fullstuckDeveloper'|'frontendDeveloper'
    type Developer=FrontEndDeveloper|FullStuckDeveloper


const level1Developer :Developer="fakibazDeveloper"

type User={
    name:string;
    email?:string;
    gender:'female'|'male'
    bloodGroup:'a+'|'b+'|'c+'|'d+'|'f+';
}
const user:User={
    name:'jobayar',
    gender:'female',
    bloodGroup:'a+'
}
 

// interSection Type
type JuniorFrondendDeveloper={
    skills:string[];
    designation:"frontEndDeveloper"
}
type JuniorBackendDeveloer={
    skills:string[];
    designation:"backendDeveloper"
}
type fullstuckDeveloper=JuniorFrondendDeveloper & JuniorBackendDeveloer


}