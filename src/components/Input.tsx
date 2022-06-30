import React, { HTMLInputTypeAttribute, useEffect, useState } from "react";
import { Path, useForm, UseFormRegister } from "react-hook-form";
import { BsChevronDown } from "react-icons/bs";
import { StringLiteralLike } from "typescript";

// type TypeInput = '';

interface Props {
  id?: string,
  type: HTMLInputTypeAttribute | "textarea" | "select",
  placeholder: string,
  value?: string,
  className?: string,
  options?: string[],
  inputHandler?: (valueCallback: string) => void
}

const classes =
  "bg-neutral-700 border border-neutral-600 focus:outline focus:outline-neutral-400 rounded text-sm px-5 py-3 w-full transition-outline";

const Input: React.FC<Props> = (props) => {
  const [inputValue, setInputValue] = useState("");

  const inputChangeHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  useEffect(() => {
    if (props.value) {
      if (props.type === "password") setInputValue("");
      else setInputValue(props.value);
    }
  }, []);

  if (props.type === "file")
    return (
      <>
        <label
          htmlFor={"file-upload"}
          className={`btn btn-secondary btn-full rounded-md ${
            props.className ?? ""
          }`}
        >
          {props.placeholder === '' ? 'Choose File' : props.placeholder}
        </label>
        <input id="file-upload" type="file" className="hidden" />
      </>
    );
  else if (props.type === "textarea")
    return (
      <textarea
        id={props.id}
        placeholder={props.placeholder === '' ? 'Some text...' : props.placeholder}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className={`${classes} ${props.className ?? ""}`}
      />
    );
  else if (props.type === "select") {
    let isDefaultValueExist = false;

    const options = props.options?.map((o) => {
      if (props.value === o) {
        isDefaultValueExist = true;
        return (
          <option key={o} value={o} selected className={props.className ?? ""}>
            {o}
          </option>
        );
      }
      return (
        <option key={o} value={o} className={props.className ?? ""}>
          {o}
        </option>
      );
    });

    return (
      <div className="relative">
        <div className="absolute h-full flex justify-center items-center pointer-events-none pr-5 py-2 right-0">
          <BsChevronDown aria-hidden="true" />
        </div>
        <select id={props.id} className={`appearance-none pr-12 ${classes} ${props.className ?? ""}`}>
          {props.placeholder && !isDefaultValueExist ? (
            <option disabled hidden selected>
              {props.placeholder === '' ? 'Choose an option' : props.placeholder}
            </option>
          ) : null}
          {options}
        </select>
      </div>
    );
  } else {
    return (
      <input
        id={props.id}
        onBlur={inputChangeHandler}
        type={props.type}
        placeholder={props.placeholder === '' ? `Some ${props.type}...` : props.placeholder}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className={`${classes} ${props.className ?? ""}`}
      />
    );
  }
};

// https://dev.to/umeshiscreative/use-multiple-interfaces-types-as-props-in-react-with-typescript-2bkg

interface IFormAuth {
  companyName: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
  confirmationPassword: string;
}

type AuthInputProps = {
  label: Path<IFormAuth>;
  register: UseFormRegister<IFormAuth>;
};

const InputAuth = (props: Props & AuthInputProps) => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      className={`${classes} ${props.className ?? ""}`}
      {...props.register(props.label)}
    />
  );
};

export { Input, InputAuth };
export type { IFormAuth };
