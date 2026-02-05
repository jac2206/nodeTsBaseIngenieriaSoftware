import { PersonService } from "./service/person.service";
import { createInterface } from "readline/promises";
import { stdin as input, stdout as output } from "process";

const service = new PersonService();
const rl = createInterface({ input, output });

const main = async () => {
  const name = await rl.question("Ingrese su nombre: ");
  const lastName = await rl.question("Ingrese su apellido: ");
  const person = await service.createPerson(name, lastName);
  console.log(`Hola ${person.name} ${person.lastName} 👋`);
  rl.close();
};

main();
