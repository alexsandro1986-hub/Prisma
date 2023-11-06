import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


async function main() {
  const result = await prisma.Courses.create({
    data: {
      name: "Cintia",
      fullname: "Lima",
      cpf: 123456789,
      adress:"Rio grande",
    },
  });


  console.log(result);
}


main();