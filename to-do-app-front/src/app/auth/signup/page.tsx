"use client"
import { useState } from "react";
import { minLength } from "@/app/consts";
import Image from "next/image";
import { signUp } from "@/app/services/userService"; 
import { useRouter } from 'next/navigation';
import useUserStore from "@/app/context/userStore";
import useToastService from "@/app/services/toastService";

export default function SignUp() {
  const { addUser } = useUserStore();
  const toastService = useToastService();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [formError, setFormError] = useState("");
  const router = useRouter();

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    if (!re.test(email)) {
      setEmailError("Email is invalid");
    } else {
      setEmailError("");
    }
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    // Validación opcional del nombre de usuario si es necesario
    // Puedes implementar validaciones aquí si es necesario
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    validateEmail(emailValue);
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (e.target.value.length < minLength / 2) {
      setFormError("Password must be at least 8 characters long");
    } else {
      setFormError("");
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    validateEmail(email);

    if (username.length === 0 || emailError || password.length < minLength / 2 || !email) {
      return;
    }

    signUp({ username, email, password }) // Llama a la función de registro con username, email y password
      .then((response) => {
        addUser(response.data);
        localStorage.setItem('user', JSON.stringify(response.data));
        router.push('/app');
      })
      .catch((error) => {
        if (error?.response?.data?.message) {
          toastService.showError(error.response.data.message);
          setFormError(error.response.data.message);
        } else {
          toastService.showError("An error occurred");
          setFormError("An error occurred");
        }
      });
  };

  return (
    <div className="flex flex-col ml-28 gap-y-5 mt-28">
      <div className="flex items-center justify-center">
        <form onSubmit={handleSubmit} className="rounded-lg max-w-lg px-10 py-4 w-[30vw]">
          <h1 className="text-3xl ml-10 font-semibold mb-10">Registro</h1>

          {/* Campo de Nombre de Usuario */}
          <div className="relative">
            <label className="text-gray-700">
              Nombre de usuario
              <span className="text-red-500 required-dot">*</span>
            </label>
            <input
              type="text"
              className={`rounded-lg border flex-1 appearance-none w-full py-2 px-4 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 ${usernameError ? "ring-red-500" : "border-gray-300"}`}
              name="username"
              placeholder="Tu nombre de usuario"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>

          {/* Campo de Email */}
          <div className="relative mt-5">
            <label className="text-gray-700">
              Email
              <span className="text-red-500 required-dot">*</span>
            </label>
            <input
              type="text"
              className={`rounded-lg border flex-1 appearance-none w-full py-2 px-4 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 ${emailError ? "ring-red-500" : "border-gray-300"}`}
              name="email"
              placeholder="Tu email"
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
          <div className="mt-5">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              className={`rounded-lg border flex-1 appearance-none w-full py-2 px-4 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 ${formError ? "ring-red-500" : "border-gray-300"}`}
              name="password"
              placeholder="Tu contraseña"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>

          {/* Mensaje de error del formulario */}
          {formError && <p className="text-red-500 text-sm mt-5">{formError}</p>}

          {/* Botón de Registro */}
          <button type="submit" className="w-full mt-8 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg">
            Registrarse
          </button>
            
            {/* Botón de redirección al login */}
            <button onClick={() => { router.push('/auth/login') }} className="mt-5 flex items-center justify-center w-full">
              ¿Ya tienes cuenta?
            </button>
        </form>

        {/* Imagen o contenido adicional */}
        <Image width={600} height={600} src="https://todoist.b-cdn.net/assets/images/44245fc51c3e2ab05ee6d92c13e2e08a.png" alt="Todoist" />
      </div>
    </div>
  );
}
