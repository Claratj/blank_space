import useLoginPage from "./useLoginPage";

export default function LoginPage() {
  const { handleInputChange, handleSubmit } = useLoginPage();

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="max-w-md flex flex-col space-y-4 items-center bg-red-200"
      >
        <h1 className="text-3xl font-bold">Speak friend, and enter</h1>

        <input
          type="email"
          name="email"
          aria-label="email"
          placeholder="Tu email..."
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          aria-label="password"
          placeholder="Tu contraseña..."
          onChange={handleInputChange}
        />

        <button>Entrar</button>
      </form>
    </div>
  );
}
