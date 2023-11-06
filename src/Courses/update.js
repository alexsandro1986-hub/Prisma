import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


async function main() {
  const result = await prisma.Courses.update({
    where: {
      id: "1642d0b5-c2b1-46d1-a613-5a796d6d58cd",
    },
    data: {
     
      name: "Hellena",
      fullname:"Silva",
      cpf:2345681,
    },
  });


  console.log(result);
}
main()