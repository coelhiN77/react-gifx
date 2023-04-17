//Props
interface ButtonProps {
  name: string;
  onClick: () => void
}

function Button({ name, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className="text-white group relative flex justify-center rounded-md bg-green-600 py-2 px-5 hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-300 my-6 m-10 font-bold">
      {name}
    </button>
  );
}

export default Button;