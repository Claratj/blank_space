import Button from "../../Button/Button";
import useHeader from "./useHeader";

export default function Header() {
  const { handleLogout } = useHeader();
  return (
    <header className="w-screen h-16 px-5 bg-indigo-300 flex items-center justify-between">
      <div>Hola Caracola!</div>
      <nav>
        <a href="">
          <Button onClick={handleLogout}>LogOut</Button>
        </a>
      </nav>
    </header>
  );
}
