export class User{
    id!: number;
    name!: string;
    email!: string;
    roleName! : string;
    passwordHash!: Uint8Array;
    passwordSalt!: Uint8Array;
    createdTime!: Date;
}