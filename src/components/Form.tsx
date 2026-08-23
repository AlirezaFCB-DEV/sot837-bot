"use client";

import { ReactNode, useState } from "react";
import FormField from "./FormField";

export default function Form(): ReactNode {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickButton = (): void => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-full bg-white dark:bg-black/75 rounded-2xl border border-gray-300 dark:border-gray-700 p-5 grid grid-cols-1 gap-2">
      <h3 className="text-gray-500 text-sm">Login to your account</h3>

      <h1 className="text-xl font-bold text-cyan-600">
        Get a new experience of <br /> imagination
      </h1>

      <form
        method="POST"
        className="w-full flex flex-col justify-between items-start gap-5 mt-5"
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
            className="text-gray-500 dark:text-gray-300 outline-0 absolute top-11 right-3 bg-white dark:bg-black/1 p-1 text-sm"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </FormField>

        <div className="flex justify-start items-center gap-2">
          <input type="checkbox" id="remember-me" />

          <label htmlFor="remember-me" className="text-gray-500">
            Remember me
          </label>
        </div>

        <button
          type="submit"
          className="p-3 w-full rounded-xl bg-cyan-500 dark:bg-cyan-600 text-white font-bold cursor-pointer transition-colors saturate-100 active:bg-cyan-600"
        >
          SIGN IN
        </button>
      </form>
    </div>
  );
}
