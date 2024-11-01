export class User {
    constructor(
        public username: string,
        public passwrd: string,
        public nombres: string,
        public apellidoP: string,
        public apellidoM: string,
        public sexo: 'Hombre' | 'Mujer',
        public rol: 'Companion' | 'Accompanied'
    ){}
}
