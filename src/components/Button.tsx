interface ButtonProps {
  text: string;
  tip: string;
  onClick: (caption: string) => void;
}
function Button({ text, tip, onClick }: ButtonProps) {
  let btnClassName = "btn btn-primary";
  if (tip === "secondary") btnClassName = "btn btn-secondary";
  return (
    <button
      type="button"
      className={btnClassName}
      onClick={() => onClick(text)}
    >
      {text}
    </button>
  );
}

export default Button;
