import { Property } from "./Property";

export class Review {
    reviewId!: number;
    rating!: number;
    comment!: string;
    propertyId!: number;
    property!: Property;
}