 /*********** Definición de la clase cubo ************/
class carta {
    constructor (arg1, arg2) {
    this.valor=parseInt(arg1);
    this.url=arg2;
    }    
}
//Creación de los objetos
var carta1 = new Carta(1, 2, 3);       // 1 de Oros
var carta2 = new Carta(6, 9, 4);       // 2 de Oros
var carta3 = new Carta(2, 5, 6);       // 3 de Oros
var carta4 = new Carta(12, 17, 2);     // 4 de Oros
var carta5 = new Carta(6, 8, 7);       // 5 de Oros

var arrayCartas=[carta1,carta2,carta3,carta4];