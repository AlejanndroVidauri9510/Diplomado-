//Coliciones
class HashTable{
    //es una funcion 
    constructor(size =7){
        this.size = size; //Se guarda el tamaño coo propiedad de la instancia 
        this.data = new Array(size);
        console.log(this.data);    
    }
            
    hash(Key){ 
        //Alt + 62 para mayor ">" y para usar menor que es  Alt + 60 "<"
        //> <
        let hash = 0;         
        for(let i =0; i < Key.length; i++){
                hash=(hash + Key.charCodeAt(i)*23)% this.size;
                

        }   
        return hash;
    }
        
    set(Key, value){
        let index =this.hash(Key);
        if(!this.data[index]){
            
            this.data[index]=[];

        }
        this.data[index].push([Key, value]);
        return this;
    }

    get(key){
        let index = this.hash(key);        
        let positionSelected = this.data[index];

        if(positionSelected){
            for (let i = 0; i < positionSelected.length; i++) {
                if (positionSelected[i][0] === key) {
                    return positionSelected[i][1];                    
                }
                
            }

        }
        return undefined;        
    }

}

//Creacion de la tabla hash
const ht = new HashTable(13);
ht.set('Alejandro',100);
ht.set('Vidauri', 35);

console.log(ht.data);


/*
const size=7;
function hash(key){
    let hash =0;
    for (let i = 0; i < key.length; i++) {
        hash = hash + key.charCodeAt(i)*23 % size;

        console.log(`El caracter ${key[i]} tiene el valor de  ${key.charCodeAt[i]}`);        

        console.log(`hash: ${hash}`);

    }

}

*/
// 