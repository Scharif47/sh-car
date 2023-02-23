import { PrismaClient } from '@prisma/client';

// Create a new Prisma Client instance
const prisma = new PrismaClient();

// Define a model for the Car entity
async function main() {
  // Create a new car from the Car model
  const cars = await prisma.car.findMany();
  console.log(cars);
}

// Call the main function
main()
  .catch((e) => console.error(e)) // Catch any errors
  .finally(async () => {        
    await prisma.$disconnect(); // Disconnect from the database
  });
