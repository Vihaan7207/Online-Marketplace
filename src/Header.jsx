import "./main.css";

export default function Header() {
  return (
    <>
      <a href="/">
        <h1 className="text-center text-7xl mt-1 font-tiltneon select-none text-headercolor">
          AnyStore
        </h1>
      </a>
      <hr className="mt-3 w-full h-0.5" />
    </>
  );
}
