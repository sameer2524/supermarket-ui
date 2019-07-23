export class SignUpInfo {
    name: string;
    username: string;
    email: string;
    role: string[];
    password: string;
    contact:Number;

    constructor(name: string, username: string, email: string, password: string,contact:Number) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.contact=contact;
        this.role = ['user'];
    }
}
