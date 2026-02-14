import { describe, it, expect } from "vitest";
import {PersonService} from '../../src/service/person.service'

describe("PersonService", () => {
  it("should return a create person entity with expected data", async () => {
    // Arrange
    const service = new PersonService();
    const user = {
        name: "Julian",
        lastName: "Arango",
    }

    // Act
    const result = await service.createPerson(user.name, user.lastName);

    // Assert
    expect(result).toBeDefined();
    expect(result).toEqual({
      name: "Julian",
      lastName: "Arango",
    });
  });
  it("should return a get person entity with expected data", async () => {
    // Arrange
    const service = new PersonService();

    // Act
    const result = await service.getPerson();

    // Assert
    expect(result).toBeDefined();
    expect(result).toEqual({
      name: "Julian",
      lastName: "Arango",
    });
  });
});