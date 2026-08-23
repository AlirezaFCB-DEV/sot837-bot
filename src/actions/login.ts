"use server";

import { User } from "@/app/api/admin-users/route";
import { FetchData } from "@/helpers/FetchData";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { v4 } from "uuid";

export const handleLoginAction = async (formData: FormData): Promise<void> => {
  const userName = formData.get("user-name") as string;
  const password = formData.get("password") as string;
  const remember = formData.get("remember-me") as string;

  const adminUsers = await FetchData<User[]>(
    "http://localhost:3000/api/admin-users",
  );

  const isUserAdmin: boolean = adminUsers.some(
    (user) => user.userName === userName && user.password === password,
  );

  if (isUserAdmin) {
    const cookie = await cookies();

    cookie.set("AUTH_TOKEN", v4(), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      ...(remember === "on" ? { maxAge: 60 * 60 * 24 * 30 } : {}),
    });

    redirect("/");
  }
};
