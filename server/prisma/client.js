import { PrismaClient } from "@prisma/client";

// Reuse one client and connection pool throughout this Node.js process.
const prisma = new PrismaClient();

export default prisma;
