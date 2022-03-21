import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import useLoginPage from "./useLoginPage";

export default function LoginPage() {
  const { handleInputChange, handleSubmit, isButtonDisabled } = useLoginPage();

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="max-w-md flex flex-col space-y-4 items-center "
      >
        <h1 className="text-3xl font-bold">Speak friend, and enter</h1>

        <input
          type="email"
          name="email"
          aria-label="email"
          placeholder="Tu email..."
          onChange={handleInputChange}
          className=" w-full h-12 mt-2 mb-3 px-3 border-solid border-2 border-slate-400 rounded-md"
        />
        <input
          type="password"
          name="password"
          aria-label="password"
          placeholder="Tu contraseña..."
          onChange={handleInputChange}
          className=" w-full h-12 mt-2 mb-3 px-3 border-solid border-2 border-slate-400 rounded-md"
        />

        <Button disabled={isButtonDisabled}>Entrar</Button>
        <p>
          ¿No tienes cuenta? <Link to="/signup">SignUp</Link>
        </p>
      </form>
    </div>
  );
}
