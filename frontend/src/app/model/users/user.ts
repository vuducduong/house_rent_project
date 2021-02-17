
export class User{
    id!: any;
    name!: any;
    email!:any;
    password!: any;
    address!: any;
    phone!: any;
    avatar!: any;
    constructor (
      name: string,
      email: string,
      password: string
      ) {
      this.name = name;
      this.email = email;
      this.password = password;
    }
}
