import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


async function main() {
  const result = await prisma.Courses.delete({
    where: {
      id: "6472ea1e-0632-47a2-933b-074314595e51",
    },
  });


  console.log(result);
}


main();