import { Property } from "./Property";

export class APIResponse {
    statusCode!: number;
    isSuccess: boolean = false;
    errorMessages!: string[];
    result!: any[];
}