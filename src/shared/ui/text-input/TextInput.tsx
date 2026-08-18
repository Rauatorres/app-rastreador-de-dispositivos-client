import { useId, type ChangeEvent } from "react";

type TextInputProps = {
  onchange: (e: ChangeEvent<HTMLInputElement>) => void;
  title: string;
  placeholder?: string;
  value?: string;
};

export default function TextInput(props: TextInputProps) {
  const id = useId();
  return (
    <label htmlFor={id}>
      <p
        className="
        text-neutral-500
      "
      >
        {props.title}
      </p>
      <input
        id={id}
        className={`
                border border-neutral-400 text-neutral-600
                block
                text-3xl
                px-7 py-5
                md:w-150 sm:w-100 w-70
                `}
        type="text"
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onchange}
      />
    </label>
  );
}
