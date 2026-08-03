import { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "rounded-xl px-6 py-3 font-semibold transition-all duration-300",
        variant === "primary"
          ? "bg-blue-600 text-white hover:bg-blue-700"
          : "border border-slate-300 hover:bg-slate-100"
      )}
    >
      {children}
    </button>
  );
}