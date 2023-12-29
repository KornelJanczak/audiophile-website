import { ICartData, INewCartData, Product } from "@/models/@type-props";
import { MongoClient } from "mongodb";

export async function connect(): Promise<MongoClient> {
  if (!process.env.MONGO_URL)
    throw new Error("Invalind enviroment variable: MONGODB_URL");
  const client = await MongoClient.connect(process.env.MONGO_URL as string);
  return client;
}

export async function mongoClient() {
  if (!process.env.MONGO_URL)
    throw new Error("Invalind enviroment variable: MONGODB_URL");

  const url = process.env.MONGO_URL;
  const options = {};

  let client;
  let clientPromise: Promise<MongoClient>;

  let globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise: Promise<MongoClient>;
  };

  if (process.env.NODE_ENV === "development") {
    if (!globalWithMongo._mongoClientPromise) {
      client = new MongoClient(url, options);
      globalWithMongo._mongoClientPromise = client.connect();
    }
    clientPromise = globalWithMongo._mongoClientPromise;
  } else {
    client = new MongoClient(url, options);
    clientPromise = client.connect();
  }

  return clientPromise;
}

export async function fetchData(dbName: string, dbCollection: string) {
  const client = await connect();

  const db = client.db(dbName);
  const data = await db
    .collection(dbCollection)
    .find()
    .sort({ id: -1 })
    .map((data) => {
      return {
        ...data,
        _id: data._id.toString(),
      };
    })
    .toArray();
  client.close();
  return data as Product[];
}
