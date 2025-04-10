//CLASE
class Mascota{
    name 
    type 
    race
    year     
    //Función
    get vocalizacion(){
        return "Hola Viduri";
    }
    //creamos un Constructor
    constructor(nombre, tipo, raza, edad ){
        this.name = nombre;
        this.type = tipo;
        this.race = raza;
        this.year = edad;

    }
    // metodo
     truco(truco){
        //Template string
        return `${this.name}  y ${truco}`;
    }

    changeName(nombre){

        this.name = nombre;
    }
    changePatas(numberfoot){



    }


}

const mascota1 = new Mascota("Lymbert", "Canino", "Doberman", "3");
console.log("El primer animal se llama "+ mascota1.name);
console.log("y es de espcie de tipo "+mascota1.type);
console.log("De la raza de los "+mascota1.race, "de edad tiene ", mascota1.year +" años");
console.log(mascota1.vocalizacion);

console.log("________________");


const mascota2 = new Mascota("Kyara", "Canino", "Doberman", "4 meses");
console.log(`El siguiente animal se llama ${mascota2.name} y es de tipo ${mascota2.type} de raza ${mascota2.race} y tiene ${mascota2.year}`);

console.log(mascota2.truco("Se para en dos patas"));
console.log(mascota2.name);
mascota2.changeName("Angela");
console.log(mascota2.name);





const Alumno =(Persona)=>{
    
    return `Hola mi nombre es ${Persona.name} `
}

const changeName2 = (nombre)=>{

    //funcion que se conecta a una base de datos y cambie el dato

}

const Alejandro ={
    name:"Alejandro"

}

console.log(Alumno(Alejandro));


let iterador=0;




