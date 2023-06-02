import clsx from "clsx";
import { LoadingSpinner } from "../loading";
import { Link } from "react-router-dom";

export const Button = ({ loading = false, variant = "primary", size = "md", ...props }) => {
  const buttonSize = clsx("w-full h-auto hover:opacity-75", {
    "p-2 text-sm": size === "sm",
    "p-4 text-md": size === "md",
    "p-6 text-lg": size === "lg",
  });

  const buttonVariant = clsx(
    "rounded-lg font-medium disabled:bg-gray-400 disabled:text-gray-50 disabled:border-gray-400 appearance-none",
    {
      "bg-blue-500 text-white border border-blue-500 ": variant === "primary",
      "bg-white text-blue-500 border border-blue-500 ": variant === "primary-outline",
      "bg-red-600 text-white border border-red-600 ": variant === "error",
      "bg-white text-red-600 border border-red-600 ": variant === "error-outline",
      "bg-yellow-600 text-white border border-yellow-600 ": variant === "warning",
      "bg-white text-yellow-600 border border-yellow-600 ": variant === "warning-outline",
      "text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white":
        variant === "icon-close",
      "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800":
        variant === "submit-button",
      "text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600":
        variant === "close-button",
    },
  );

  const className = [...buttonVariant, ...buttonSize].join("");

  props.href && (
    <Link role="link" to={props.href}>
      <button role="button" {...props} className={className}>
        {loading ? <LoadingSpinner /> : props.children}
      </button>
    </Link>
  );
  return (
    <button role="button" {...props} className={className}>
      {loading ? <LoadingSpinner /> : props.children}
    </button>
  );
};
