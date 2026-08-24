import { ComponentProps, ReactNode } from "react";

type Props = ComponentProps<"button">;

export default function IconButton({
  children,
  className,
  ...otherProps
}: Props): ReactNode {
  return (
    <button
      className={`flex justify-center items-center cursor-pointer transition-all duration-150 ease-in-out hover:opacity-80 active:opacity-30 outline-0 ${className}`}
      {...otherProps}
    >
      {children}
    </button>
  );
}
