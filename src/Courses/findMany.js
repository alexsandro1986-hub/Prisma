import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


async function main() {
  const courses = await prisma.Courses.findMany();
  console.log(courses);
}


main();