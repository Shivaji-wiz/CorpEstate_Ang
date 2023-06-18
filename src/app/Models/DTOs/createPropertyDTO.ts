import { User } from "../User";

export class createPropertyDTO {
    property_Name!: string;
    property_Price!: string;
    property_Description!: string;
    imageUrl!: string;
    property_CreatedTime?: Date;
    property_UpdatedTime?: Date;
    userID!: number; //userId corresponds to UserID in API which is a foreign key from User table;
    user!: User;
    seller_Name!: string;
    seller_Contact!: string;
    approved: boolean = false;
}