"use client";
import { useState } from "react";
import { minLength } from "@/app/consts";
import Image from "next/image";
import { login } from "@/app/services/userService";
import { useRouter } from 'next/navigation';
import useUserStore from "@/app/context/userStore";

export default function Login() {

  const { addUser } = useUserStore();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [formError, setFormError] = useState("");
  const router = useRouter();

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
   * metodo para manejar el cambio de password y comprobar si hay errores
   * @param e html input event
   */
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    // password tiene que tener 8 digitos, 1 mayus y 1 numero
    if (e.target.value.length < minLength / 2) {
      setFormError("Password must be at least 8 characters long");
    }
    else {
      setFormError("");
    }
  }

  /**
   * metodo para accionar el login del usuario
   * @param e buton login
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    validateEmail(email)
    if (emailError || password.length < minLength / 2 || !email) {
      return;
    }

    // si todo ok hace el login de userService recoge o error o el usuario
    login({ email, password })
      .then((response) => {
        addUser(response.data)
        router.push('/app');
      })
      .catch((error) => {
        console.log(error.response.data);
        if(error.response.data.message){
          setFormError(error.response.data.message)
        }
      })
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
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M20.945 11a9 9 0 1 1 -3.284 -5.997l-2.655 2.392a5.5 5.5 0 1 0 2.119 6.605h-4.125v-3h7.945z" />
            </svg>
            <span>Sign in with Google</span>
          </button>

          { formError && <p className="text-red-500 text-sm mb-5">{formError}</p> }

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
            <input 
              type="password"  
              className={`rounded-lg border flex-1 appearance-none w-full py-2 px-4 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 ${formError ? "ring-red-500" : "border-gray-300"}`} 
              name="password"
              placeholder="Tu contraseña..."
              value={password}
              onChange={handlePasswordChange}
            />
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
