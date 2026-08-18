type ButtonProps = {
  text: string;
  type?: "button" | "submit";
  onclick?: () => void;
};

export default function Button(props: ButtonProps) {
  return (
    <button
      className={`
            bg-cyan-600 text-white
            px-5 py-3
            cursor-pointer
            block
            text-2xl
            `}
      type={props.type}
      onClick={props.onclick ? props.onclick : () => {}}
    >
      {props.text}
    </button>
  );
}
