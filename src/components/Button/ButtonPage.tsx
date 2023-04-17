//Props
interface ButtonProps {
  name: string;
  onClick: () => void
}

function ButtonPage({ name, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className="group relative flex w-full justify-center rounded-md bg-green-600 py-2 px-3 text-sm font-semibold text-white hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-300 my-6  ">
      {name}
    </button>
  );
}

export default ButtonPage;