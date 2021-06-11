export interface IFirebaseUser {
    name: string | null,
    picture: string | null,
    user_id: string,
    email: string | null,
    uid: string,
    getIdToken: () => Promise<string>
}