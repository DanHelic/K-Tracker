export class userT{
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
