export class approvePropertyDTO{
    property_ID!: number;
    property_Name!: string;
    property_Price!: string;
    property_Description!: string;
    imageUrl!: string;
    property_ApprovedTime?: Date;
    userID!: number;
    seller_Name!: string;
    seller_Contact!: string;
    approved!: boolean;
}