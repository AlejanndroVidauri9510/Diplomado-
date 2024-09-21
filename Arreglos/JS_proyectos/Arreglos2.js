let numero = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

for (let i = 0; i < numero.length; i+=3) {
       
    // Slice obtiene un subconjunto del arreglo desde i hasta i+3
    console.log(numero.slice(i, i + 3).join(' - '));

}
