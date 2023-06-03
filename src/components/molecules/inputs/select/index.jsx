import clsx from "clsx";
import { useController } from "react-hook-form";
import { AiFillCloseCircle, AiFillCheckCircle } from "react-icons/ai";
import { RiErrorWarningFill } from "react-icons/ri";
import { BsChevronDown } from "react-icons/bs";

export const SelectField = (props) => {
  const { field } = useController({
    ...props,
    rules: {
      required: props.required,
      minLength: props.min,
      maxLength: props.max,
    },
  });

  const inputSize = clsx({
    "p-2 placeholder:text-sm text-sm": props.size === "sm",
    "p-4 placeholder:text-md text-md": props.size === "md",
    "p-6 placeholder:text-lg text-lg": props.size === "lg",
  });

  const inputStatus = clsx(
    "border pr-10 rounded-lg focus:ring-none focus:outline-none appearance-none",
    {
      "bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-500 ":
        props.status === "none" || !props.status,
      "bg-green-50 border-green-300 text-green-900 placeholder:text-green-500 ":
        props.status === "success",
      "bg-red-50 border-red-500 text-red-900 placeholder:text-red-500 ": props.status === "error",
      "bg-orange-50 border-orange-500 text-orange-900 placeholder:text-orange-500 ":
        props.status === "warning",
    },
  );

  const messageSize = clsx("font-regular flex gap-x-1 items-center", {
    "text-xs ": props.size === "sm" || !props.size,
    "text-sm ": props.size === "md",
    "text-md ": props.size === "lg",
  });

  const labelClassName = clsx("font-medium text-gray-600 ", {
    "text-sm ": props.size === "sm" || !props.size,
    "text-md ": props.size === "md",
    "text-lg ": props.size === "lg",
  });

  const messageStatus = clsx({
    hidden: props.status === "none" || !props.status,
    "block text-red-500 ": props.status === "error",
    "block text-green-500 ": props.status === "success",
    "block text-orange-500 ": props.status === "warning",
  });

  const inputClassName = [...inputStatus, ...inputSize].join("");

  const messageClassName = [...messageStatus, messageSize].join("");

  const chevronClassName = clsx("absolute", {
    "top-5 right-5": props.size === "md",
    "top-3 right-2": props.size === "sm",
  });

  return (
    <section className="flex flex-col gap-y-2">
      <div className="flex gap-x-1">
        <label className={labelClassName} htmlFor={props.name}>
          {props.label}
        </label>
        {props.required && <strong className="text-red-600">*</strong>}
      </div>
      <div className="flex relative flex-col gap-y-1">
        <BsChevronDown
          size={props.size === "md" || props.size === "lg" ? 20 : 16}
          className={chevronClassName}
        />
        <select className={inputClassName} {...{ ...props, ...field }}>
          <option selected className={inputClassName} disabled>
            {props.placeholder}
          </option>
          {props?.options?.map((option, key) => (
            <option className={inputClassName} value={option.value} key={key}>
              {option.label}
            </option>
          ))}
        </select>
        <span className={messageClassName}>
          {props.status === "error" && <AiFillCloseCircle />}

          {props.status === "success" && <AiFillCheckCircle />}

          {props.status === "warning" && <RiErrorWarningFill />}

          {props.message}
        </span>
      </div>
    </section>
  );
};
