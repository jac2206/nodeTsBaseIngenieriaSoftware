import {  describe, it, expect } from "vitest";
import {LoyaltyService} from "../../src/service/loyalty.service"

describe("LoyaltyService", () => {
  it("should return a Create Generic entity with expected data", async () => {
    // Arrange
    const service = new LoyaltyService();
    const value = 10000;

    // Act
    const result = await service.addPoints(value);

    // Assert
    expect(result).toBeDefined();
    expect(result).toEqual(10);
  });
});