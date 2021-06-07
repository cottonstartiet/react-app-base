export interface IResponseLocals {
    user: IFirebaseUser;
}

export interface IFirebaseUser {
    name: string,
    picture: string,
    auth_time: number,
    user_id: string,
    email: string,
    uid: string
}