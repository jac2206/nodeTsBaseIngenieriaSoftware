export interface ILoyaltyServiceInterface {
    addPoints(amount: number): Promise<number>;
}