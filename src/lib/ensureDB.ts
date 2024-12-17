import dbConnect from "@/util/connectDB";

export async function ensureDBConnection() {
  try {
    await dbConnect();
  } catch (error) {
    throw new Error("Database connection failed");
  }
}

// Implemented from https://github.com/vercel/next.js/blob/canary/examples/with-mongodb/app/actions.ts
// "use server";

// import client from "@/lib/db";

// export async function testDatabaseConnection() {
//   let isConnected = false;
//   try {
//     const mongoClient = await client.connect();
//     // Send a ping to confirm a successful connection
//     await mongoClient.db("admin").command({ ping: 1 });
//     console.log(
//       "Pinged your deployment. You successfully connected to MongoDB!"
//     ); // because this is a server action, the console.log will be outputted to your terminal not in the browser
//     return !isConnected;
//   } catch (e) {
//     console.error(e);
//     return isConnected;
//   }
// }