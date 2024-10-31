export class User {
    constructor(
        public username: string,
        public password: string,
        public nombre: string,
        public apellidoP: string,
        public apellidoM: string,
        public sexo: 'Hombre' | 'Mujer',
        public rol: 'Companion' | 'Accompanied'
    ){}
}
