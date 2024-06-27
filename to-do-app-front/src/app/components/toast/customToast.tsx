const CustomToast = (closeToast:any) => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-900 text-white rounded-lg shadow-lg">
      <div className="flex items-center">
        <span>Añadido a </span>
        <a href="#" className="underline ml-1">Bandeja de entrada</a>
      </div>
      <div className="flex items-center">
        <button onClick={() => { /* Lógica para abrir */ }} className="text-pink-400 ml-4">Abrir</button>
        <button onClick={closeToast} className="ml-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CustomToast