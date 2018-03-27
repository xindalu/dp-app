export interface Auth {
    userId: number;
    userName: string;
    email: string;
    accessToken: string;
    accessPermissions: any;
    userInfo?: any;
}
