import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "@/lib/mongodb";
import { User } from "@/models/User";
import bcrypt from "bcrypt";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();

  const hashed = await bcrypt.hash("123456", 10);
  await User.create({
    name: "Admin",
    email: "admin@example.com",
    password: hashed,
    role: "admin",
  });

  res.send("Tạo user admin thành công");
}
