export class userT{
    /*
    user_id: number;
    user_name: string;
    email: string;
    created_at: Date;
    last_login: Date;
    first_name: string;
    last_name: string;
    is_admin: boolean;
    password: string;

    constructor(user_id: number, user_name: string, email: string, created_at: Date, last_login: Date, first_name: string, last_name: string, is_admin: boolean, password: string){
        this.user_id = user_id;
        this.user_name = user_name;
        this.email = email;
        this.created_at = created_at;
        this.last_login = last_login;
        this.first_name = first_name;
        this.last_name = last_name;
        this.is_admin = is_admin;
        this.password = password;
    }
    */

    constructor(
        public user_id: number,
        public user_name: string,
        public email: string,
        public created_at: Date,
        public last_login: Date,
        public first_name: string,
        public last_name: string,
        public is_admin: boolean,
        public password: string
    ) {}

    static fromDb(user: any): userT{
        return new userT(
            user.user_id,
            user.user_name,
            user.email,
            user.created_at,
            user.last_login,
            user.first_name,
            user.last_name,
            user.is_admin,
            user.password
        )
    }
}
