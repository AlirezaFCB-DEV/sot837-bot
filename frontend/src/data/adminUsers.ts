import { v4 } from "uuid";

export interface User {
  id: string;
  userName: string;
  password: string;
}

export const AdminUsers: User[] = [
  {
    id: v4(),
    userName: "sobhanjafarii87@gmail.com",
    password: "Sobhan 1387",
  },
];
