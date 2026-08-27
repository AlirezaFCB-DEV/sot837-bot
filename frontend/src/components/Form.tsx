"use client";

import { ReactNode, useState } from "react";
import FormField from "./FormField";
import Image from "next/image";
import { handleLoginAction } from "@/actions/login";
import Logo from "./Logo";

export default function Form(): ReactNode {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickButton = (): void => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-full md:flex lg:container">
      <div className="hidden w-1/2 md:flex flex-col justify-start gap-25 items-start p-5 rounded-l-2xl bg-linear-to-br from-blue-100 dark:from-blue-950/50 via-gray-200 dark:via-black/75 to-gray-200 dark:to-black/80 border border-gray-300 dark:border-gray-700 border-r-0">
        <div className="flex justify-between items-center gap-3">
          <Image
            src={"/logo.svg"}
            alt="logo image"
            width={2000}
            height={2000}
            className="w-10 lg:w-12"
          />

          <Logo className="text-2xl lg:text-3xl" />
        </div>

        <div className="flex flex-col justify-between items-start gap-5">
          <h3 className="text-gray-500 lg:text-lg">Login to your account</h3>

          <h1 className="text-2xl lg:text-3xl font-bold bg-linear-to-r from-cyan-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
            Get a new experience of <br /> imagination
          </h1>

          <p className="text-gray-500 text-sm lg:text-md">
            Every idea starts as a scattered thought sign <br /> in and bring
            yours into focus.
          </p>
        </div>
      </div>

      <div className="w-full md:w-1/2 bg-white dark:bg-black/75 rounded-2xl md:rounded-l-none border border-gray-300 dark:border-gray-700 p-5 grid grid-cols-1 gap-2">
        <h3 className="text-gray-500 text-sm lg:text-md">
          Login to your account
        </h3>

        <h1 className="text-xl font-bold text-cyan-600 md:hidden">
          Get a new experience of <br /> imagination
        </h1>

        <h1 className="hidden md:block text-2xl lg:text-3xl font-bold text-gray-500">
          Welcome back
        </h1>

        <form
          className="w-full flex flex-col justify-between items-start gap-5 lg:gap-8 mt-5 lg:mt-10"
          action={handleLoginAction}
        >
          <FormField
            label="Username"
            id="user-name"
            placeholder="user name"
            name="user-name"
          />

          <FormField
            label="Password"
            id="password"
            placeholder="password"
            type={showPassword ? "text" : "password"}
            name="password"
            className="relative"
          >
            <button
              type="button"
              onClick={handleClickButton}
              className="text-gray-500 dark:text-gray-300 outline-0 absolute top-11 lg:top-15 right-3 bg-white dark:bg-black/0 p-1 text-sm lg:text-lg"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </FormField>

          <div className="flex justify-start items-center gap-2 lg:gap-4">
            <input type="checkbox" id="remember-me" name="remember-me" />

            <label htmlFor="remember-me" className="text-gray-500 lg:text-lg">
              Remember me
            </label>
          </div>

          <button
            type="submit"
            className="p-3 lg:p-5 w-full rounded-xl bg-cyan-500 dark:bg-cyan-600 text-white lg:text-lg font-bold cursor-pointer transition-colors saturate-100 active:bg-cyan-600"
          >
            SIGN IN
          </button>
        </form>
      </div>
    </div>
  );
}
