"use client"
import { useRouter } from "next/navigation";
import useUserStore from "../context/userStore";
import { useEffect } from "react";

interface ProtectedRoutesProps {
  children: React.ReactNode;
}

/**
 * un layout padre que comprueba si el usuario existe, sino envia a login
 * @param param0 
 * @returns 
 */
const ProtectedRoutes: React.FC<ProtectedRoutesProps> = ({ children }) => { 

  const router = useRouter()
  const user = useUserStore(e => e.user) 

  useEffect(() => {
    if (!user) {
      router.push('/auth/login')
    }
  }
  , [user, router]) // -> se renderiza x cada cambio de usuario o de router

  return <>{children}</>
}

export default ProtectedRoutes;