import { ILoyaltyServiceInterface } from "./interface/loyalty.service.interface";

export  class LoyaltyService implements ILoyaltyServiceInterface {
    constructor() {}

    async addPoints(amount: number): Promise<number> {
        const points = Math.floor(amount / 1000); 
        return points;
    }
}