import { User } from "../../model/user";

export class Acompanied extends User{
    constructor(
        nombre: string,
        sexo: string,
        edad: number,
        ciudad:  string,
        orientacion: string,
        public curp: string
        ){
            super (nombre, sexo, edad, ciudad, orientacion)
        }
}
