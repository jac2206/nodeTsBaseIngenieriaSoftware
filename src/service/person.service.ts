import { IPersonServiceInterface } from "./interface/person.service.interface";
import { Person } from "./interface/person.service.interface";

export class PersonService implements IPersonServiceInterface {
  constructor() {}

  async getPerson(): Promise<Person> {
    return {
      name: "Julian",
      lastName: "Arango"
    };
  }

  async createPerson(name: string, lastName: string): Promise<Person> {
    return {
      name,
      lastName
    };
  }

}
