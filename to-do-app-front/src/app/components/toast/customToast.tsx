import React from 'react';

interface CustomToastProps {
  openToast: () => void;
  message:string
  redirect:string
}

const CustomToast: React.FC<CustomToastProps> = ({ openToast, message, redirect }) => {
  return (
    <div className="flex items-center justify-between text-white rounded-lg shadow-lg text-base " >
      <div className="flex items-center">
        <span>{message}</span>
        <a href="#" className="underline ml-1">{redirect}</a>
      </div>
      <button onClick={openToast} className='text-[#FFAAA1]'>abrir</button>
    </div>
  );
};

export default CustomToast;

// 1 tarea completada -> Deshacer