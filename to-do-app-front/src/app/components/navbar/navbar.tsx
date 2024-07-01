import { Avatar, useDisclosure} from '@chakra-ui/react'
import OptionsNavbar from './optionsNavbar';
import useUserStore from '@/app/context/userStore';
import ModalFormTask from '../tasks/modal-form-task';


interface NavbarProps {
  toggleNavbar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleNavbar }) => {


  const user = useUserStore();
  const { isOpen, onOpen, onClose } = useDisclosure()

  

  return (
    <div className='bg-[#FCFAF8] shadow-md '>
      <ModalFormTask isOpen={isOpen} onClose={onClose} />
      <div className="flex items-center justify-center gap-4 mt-4">
        <button className="flex items-center justify-center hover:bg-gray-200 rounded-lg px-4 py-1">
          <Avatar bg='red.500' size='sm'></Avatar>
          <span className="ml-4 max-w-[5vw]">{user?.user?.username}</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 icon icon-tabler icon-tabler-chevron-down" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#9e9e9e" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6 9l6 6l6 -6" />
          </svg>
        </button>

        <div className="flex items-center justify-center gap-2">
          {/* alert */}
          <button className="hover:bg-gray-200 rounded-3xl px-2 py-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer icon icon-tabler icon-tabler-bell" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#504F4F" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
              <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
            </svg>
          </button>

          {/* menu */}
          <button onClick={toggleNavbar} className="hover:bg-gray-200 rounded-3xl px-2 py-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer icon icon-tabler icon-tabler-layout-sidebar" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#504F4F" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
              <path d="M9 4l0 16" />
            </svg>
          </button>
        </div>

      </div>
      <OptionsNavbar />
    </div>
  )
}

export default Navbar;