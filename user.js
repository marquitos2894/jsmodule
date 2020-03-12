export default class User {
    /*constructor (name, age){
        this.name = name;
        this.age = age;
    }*/

    saludar(params) {
        console.log(`hola ${params}`);
    }
}

export function despedir(params){
    console.log(`Adios ${params}`);
}