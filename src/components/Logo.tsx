import { ComponentProps, ReactNode } from "react";

export default function Logo({
  children,
  className,
  ...otherProps
}: ComponentProps<"h3">): ReactNode {
  return (
    <h3
      className={`bg-linear-to-l from-blue-700 to-black/80 dark:to-white bg-clip-text text-transparent  font-bold ${className}`}
      {...otherProps}
    >
      sot837{children}
    </h3>
  );
}
