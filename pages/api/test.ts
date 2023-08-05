import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  /*
  if (req.method === 'POST') {
    try {
      // Access the data sent in the request body
      const { data } = req.body;

      // Implement your data import logic here
      // Use Prisma's .create method to insert data into the database
      // For example, to insert a new user:

      /*
      const newP_Account = await prisma.p_Account.create({
        data: {
          name: "slay",
        }, 
      });

      console.log('New user created:', newP_Account);
      /

      res.status(200).json({ message: 'Data imported successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error importing data' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
  */
}