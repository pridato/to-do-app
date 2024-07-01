import i18next from 'i18next';
import React from 'react';

interface CustomToastProps {
  openToast: (() => void) | null;
  message:string
  redirect:string
}

const CustomToast: React.FC<CustomToastProps> = ({ openToast, message, redirect }) => {
  return (
    <div className="flex items-center justify-between text-white rounded-lg shadow-lg text-base " >
      <div className="flex items-center">
        <span>{i18next.t(message)}</span>
        <a href="#" className="underline ml-1">{i18next.t(redirect)}</a>
      </div>
      {
        openToast && (
          <button onClick={openToast} className='text-[#FFAAA1]'>{i18next.t('abrir')}</button>
        )
      
      }
    </div>
  );
};

export default CustomToast;

// 1 tarea completada -> Deshacer