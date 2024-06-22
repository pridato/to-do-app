import Image from "next/image";

export default function Navbar() {
  return (
    <div className="col-span-1 bg-[#FCFAF8] p-4">
      {/* Sidebar title */}
      <div className="flex items-center justify-between">
        {/* perfil */}
        <button className="flex items-center justify-center ">
          <Image src="/vercel.svg" alt="Logo" width={50} height={50} />
          <span className="ml-4">david...</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 icon icon-tabler icon-tabler-chevron-down" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#9e9e9e" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6 9l6 6l6 -6" />
          </svg>
        </button>

        <div className="flex items-center justify-center gap-2">
          {/* alert */}
          <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer icon icon-tabler icon-tabler-bell" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#252424" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
            <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
          </svg>

          {/* menu */}
          <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer icon icon-tabler icon-tabler-layout-sidebar" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#252424" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
            <path d="M9 4l0 16" />
          </svg>
        </div>

      </div>
      {/* Sidebar links */}
      <ul>
        <li className="mb-2"><a href="#" className="hover:underline">Link 1</a></li>
        <li className="mb-2"><a href="#" className="hover:underline">Link 2</a></li>
        <li className="mb-2"><a href="#" className="hover:underline">Link 3</a></li>
      </ul>
    </div>
  )
}

