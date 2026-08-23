import { NextResponse } from "next/server";
import { v4 } from "uuid";

export interface User {
  id: string;
  userName: string;
  password: string;
}

const adminUsers: User[] = [
  {
    id: v4(),
    userName: "sobhanjafarii87@gmail.com",
    password: "Sobhan 1387",
  },
];

export async function GET(): Promise<NextResponse> {
  return NextResponse.json(adminUsers);
}
