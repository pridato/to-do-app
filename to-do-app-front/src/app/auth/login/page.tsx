"use client";
import { useState } from "react";
import Stack from "@mui/joy/Stack";
import Input from "@mui/joy/Input";
import LinearProgress from "@mui/joy/LinearProgress";
import Typography from "@mui/joy/Typography";
import { minLength } from "@/app/consts";
import Image from "next/image";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  /**
   * comprueba que el email sea valido
   * @param email string del email que pasa el usuario
   */
  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    if (!re.test(email)) {
      setEmailError("Email is invalid");
    }
    else {
      setEmailError("");
    }
  };

  /**
   * metodo para manejar el cambio de email y comprobar si hay errores
   * @param e el propio input del email
   */
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    validateEmail(emailValue)
  }

  /**
   * metodo para accionar el login del usuario
   * @param e buton login
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    validateEmail(email)
    if (emailError || password.length < minLength/2 || !email) {
      return;
    }

    console.log("Email: ", email, "Password: ", password);
  };

  return (
    <div className="flex flex-col ml-28 gap-y-5 mt-28">
      {/* grid para separar el input y una imagen */}
      <div className="flex items-center justify-center ">
        {/* formulario */}
        <form onSubmit={handleSubmit} className="rounded-lg max-w-lg px-10 py-4 w-[30vw]">
          <h1 className="text-3xl ml-10 font-semibold mb-10">Iniciar sesión</h1>

          {/* boton google */}
          <button type="button" className="py-2 mb-5 px-4 flex justify-center items-center gap-5 text-lg text-black hover:bg-gray-200 w-full transition ease-in duration-200 text-center font-semibold rounded-lg border">
            {/* Icono de google */}
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-google" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ff4500" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M20.945 11a9 9 0 1 1 -3.284 -5.997l-2.655 2.392a5.5 5.5 0 1 0 2.119 6.605h-4.125v-3h7.945z" />
            </svg>
            <span>Sign in with Google</span>
          </button>

          {/* email form */}
          <div className="relative">
            <label className="text-gray-700">
              Email
              {emailError && <span className="text-red-500 required-dot">*</span>}
            </label>
            <input
              type="text"
              id="on-error-email"
              className={`rounded-lg border flex-1 appearance-none w-full py-2 px-4 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 ${emailError ? "ring-red-500" : "border-gray-300"}`}
              name="email"
              placeholder="Your email"
              value={email}
              onChange={handleEmailChange}
            />
            {emailError && (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  fill="currentColor"
                  className="absolute text-red-500 right-2 bottom-3"
                  viewBox="0 0 1792 1792"
                >
                  <path d="M1024 1375v-190q0-14-9.5-23.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 23.5v190q0 14 9.5 23.5t22.5 9.5h192q13 0 22.5-9.5t9.5-23.5zm-2-374l18-459q0-12-10-19-13-11-24-11h-220q-11 0-24 11-10 7-10 21l17 457q0 10 10 16.5t24 6.5h185q14 0 23.5-6.5t10.5-16.5zm-14-934l768 1408q35 63-2 126-17 29-46.5 46t-63.5 17h-1536q-34 0-63.5-17t-46.5-46q-37-63-2-126l768-1408q17-31 47-49t65-18 65-18 47-49z"></path>
                </svg>
                <p className="absolute text-sm text-red-500 -bottom-6">
                  {emailError}
                </p>
              </>
            )}
          </div>

          {/* Campo de Contraseña */}
          <div className="mt-10">
            <label htmlFor="password">Contraseña</label>
            {/* Password input */}
            <Stack spacing={0.5} sx={{ "--hue": Math.min(password.length * 10, 120) }}>
              <Input
                type="password"
                startDecorator={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-key"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#9e9e9e"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M16.555 3.843l3.602 3.602a2.877 2.877 0 0 1 0 4.069l-2.643 2.643a2.877 2.877 0 0 1 -4.069 0l-.301 -.301l-6.558 6.558a2 2 0 0 1 -1.239 .578l-.175 .008h-1.172a1 1 0 0 1 -.993 -.883l-.007 -.117v-1.172a2 2 0 0 1 .467 -1.284l.119 -.13l.414 -.414h2v-2h2v-2l2.144 -2.144l-.301 -.301a2.877 2.877 0 0 1 0 -4.069l2.643 -2.643a2.877 2.877 0 0 1 4.069 0z" />
                    <path d="M15 9h.01" />
                  </svg>
                }
                placeholder="Escribir tu contraseña..."
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <LinearProgress
                determinate
                size="sm"
                value={Math.min((password.length * 100) / minLength, 100)}
                sx={{
                  bgcolor: "background.level3",
                  color: "hsl(var(--hue) 80% 40%)",
                }}
              />
              <Typography
                level="body-xs"
                sx={{ alignSelf: "flex-end", color: "hsl(var(--hue) 80% 30%)" }}
              >
                {password.length < 3 && "Muy débil"}
                {password.length >= 3 && password.length < 6 && "Débil"}
                {password.length >= 6 && password.length < 10 && "Fuerte"}
                {password.length >= 10 && "Muy fuerte"}
              </Typography>
            </Stack>
          </div>

          {/* Boton de login */}
          <button type="submit" className="w-full mt-10 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg">
            Iniciar sesión
          </button>
        </form>
        <Image width={600} height={600} src="https://todoist.b-cdn.net/assets/images/44245fc51c3e2ab05ee6d92c13e2e08a.png" alt="Todoist" />
      </div>
    </div>
  );
}
