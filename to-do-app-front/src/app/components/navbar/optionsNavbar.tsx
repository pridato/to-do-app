export default function OptionsNavbar() {
  return (
    <ul className='mt-2 mx-4 text-[#504F4F] text-sm'>
      {/** opcion buscador */}
      <li className="">
        <a href="#" className="hover:bg-gray-200 rounded-lg px-4 py-2 flex items-start justify-start gap-2 ">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-calendar-search" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#504F4F" fill="none" strokeLinecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M11.5 21h-5.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4.5" />
            <path d="M16 3v4" />
            <path d="M8 3v4" />
            <path d="M4 11h16" />
            <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
            <path d="M20.2 20.2l1.8 1.8" />
          </svg>
          <span>Buscador</span>
        </a>
      </li>

      {/** opcion bandeja de entrada */}
      <li className="">
        <a href="#" className="hover:bg-gray-200 rounded-lg px-4 py-2 flex items-start justify-start gap-2 ">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-inbox" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#504F4F" fill="none" strokeLinecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
            <path d="M4 13h3l3 3h4l3 -3h3" />
          </svg>
          <span>Bandeja de Entrada</span>
        </a>
      </li>

      {/** opcion hoy */}
      <li className="">
        <a href="#" className="hover:bg-gray-200 rounded-lg px-4 py-2 flex items-start justify-start gap-2 ">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-calendar-check" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#504F4F" fill="none" strokeLinecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M11.5 21h-5.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6" />
            <path d="M16 3v4" />
            <path d="M8 3v4" />
            <path d="M4 11h16" />
            <path d="M15 19l2 2l4 -4" />
          </svg>
          <span>Hoy</span>
        </a>
      </li>

      {/** opcion proximos eventos*/}
      <li className="">
        <a href="#" className="hover:bg-gray-200 rounded-lg px-4 py-2 flex items-start justify-start gap-2 ">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-calendar-search" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#504F4F" fill="none" strokeLinecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M11.5 21h-5.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4.5" />
            <path d="M16 3v4" />
            <path d="M8 3v4" />
            <path d="M4 11h16" />
            <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
            <path d="M20.2 20.2l1.8 1.8" />
          </svg>
          <span>Próximo</span>
        </a>
      </li>
    </ul>
  )
}