export interface IUserProfile {
    name: string;
    uid: string;
    title?: string;
    subtitle?: string;
}

export interface IUserProfileUpdate {
    title?: string;
    subtitle?: string;
}