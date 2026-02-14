import { PersonService } from "./service/person.service";
import { createInterface } from "readline/promises";
import { stdin as input, stdout as output } from "process";
import { LoyaltyService } from "./service/loyalty.service";

const service = new PersonService();
const loyaltyService = new LoyaltyService();
const rl = createInterface({ input, output });

// const main = async () => {
//   const name = await rl.question("Ingrese su nombre: ");
//   const lastName = await rl.question("Ingrese su apellido: ");
//   const person = await service.createPerson(name, lastName);
//   console.log(`Hola ${person.name} ${person.lastName} 👋`);
//   rl.close();
// };

const loyaltySystem = async () => {
  while (true) {
    const purchase = await rl.question("¿Desea realizar una compra? (s/n): ");
    if (purchase.toLowerCase() === "s") {
      const amount = await rl.question("Ingrese el monto de la compra: ");
      if (isNaN(Number(amount)) || Number(amount) <= 0) {
        console.log("Por favor ingrese un monto válido.");
        continue;
      }
      const resultLoyalty = await loyaltyService.addPoints(Number(amount));
      console.log(`Has ganado ${resultLoyalty} puntos por tu compra de ${amount} pesos.`);
    }
    else {
      console.log("¡Gracias por visitarnos! Vuelve pronto.");
      rl.close();
      return;
      break;
    }
  }
};

// main();
loyaltySystem();
