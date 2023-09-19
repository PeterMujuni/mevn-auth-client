export interface ILoginData {
    email: string;
    password: string;
}

export interface IRegisterData {
    first: string;
    last: string;
    email: string;
    password: string;
    confirmPassword: string;
    terms: boolean;
}