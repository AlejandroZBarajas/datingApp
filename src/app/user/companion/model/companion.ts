import { User } from "../../model/user";

export class Companion extends User{
    
    constructor(

        nombre: string,
        sexo: string,
        edad: number,
        ciudad:  string,
        orientacion: string,
        public estatura: string,
        public peso: string,
        public complexion: string,
        public piel: string,
        public cabello: string
        ){
            super ( nombre, sexo, edad, ciudad, orientacion)
        }
}
