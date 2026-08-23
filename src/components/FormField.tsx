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
    <div className={`flex flex-col gap-2 w-full ${className}`} {...otherProps}>
      <label htmlFor={id} className="text-gray-500">
        {label}
      </label>

      {children}

      <input
        type={type}
        placeholder={placeholder}
        id={id}
        name={name}
        className="p-3 w-full border border-gray-300 rounded-lg outline-gray-400"
      />
    </div>
  );
}
