export class User {
    constructor(
        public username: string,
        public nombre: string,
        public apellidoP: string,
        public apellidoM: string,
        public CURP: string,
        public sexo: string,
        public rol: 'companion' | 'accompanied'
    ){}
}
