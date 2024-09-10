import { MouseEventHandler } from "react";

interface CardButtonProps {
  title: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

function CardButton({ title, onClick }: CardButtonProps) {
  return (
    <button
      onClick={onClick}
      className="mx-1 my-2 bg-white transition duration-150 ease-in-out focus:outline-none rounded text-gray-800 border border-gray-300 px-1 md:px-2 py-2 text-[0.5rem] md:text-xs"
    >
      {title}
    </button>
  );
}

export default CardButton;
