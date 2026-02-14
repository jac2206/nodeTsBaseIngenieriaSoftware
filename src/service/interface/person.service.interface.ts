export interface Person {
  name: string;
  lastName: string;
}

export interface IPersonServiceInterface {
  getPerson(): Promise<Person>;
  createPerson(name: string, lastName: string): Promise<Person>;
}