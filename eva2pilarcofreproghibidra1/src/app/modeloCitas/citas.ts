export class Citas {
    constructor(
        public frase:string = "", //funcionalidad util donde los parametros del constructor
        //  se define tambien como propiedades o atributos de la clase, 
        // por eso se utiliza la visibilidad de publica para que no sean solo parametros
        public autor:string = ""
    ){}

}
