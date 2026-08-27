import { ComponentProps, ReactNode } from "react";

type Props = ComponentProps<"div"> & {
  label: string;
  type?: string;
  placeholder?: string;
  name: string;
};

export default function FormField({
  label,
  type = "text",
  placeholder,
  name,
  id,
  className,
  children,
  ...otherProps
}: Props): ReactNode {
  return (
    <div
      className={`flex flex-col gap-2 lg:gap-4 w-full ${className}`}
      {...otherProps}
    >
      <label
        htmlFor={id}
        className="text-gray-500 dark:text-gray-400 lg:text-lg"
      >
        {label}
      </label>

      {children}

      <input
        type={type}
        placeholder={placeholder}
        id={id}
        name={name}
        required
        className="p-3 lg:p-5 w-full border border-gray-300 dark:border-gray-600 rounded-lg outline-gray-400 dark:outline-0 dark:placeholder:text-gray-500 dark:focus:bg-black/80 dark:text-white lg:text-lg"
      />
    </div>
  );
}
