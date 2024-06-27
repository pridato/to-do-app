import { PopoverContent, PopoverArrow, PopoverHeader, PopoverBody, PopoverFooter } from "@chakra-ui/react";

const ViewPopOver = () => {
  return (
    <PopoverContent boxShadow='xl'>
      <PopoverArrow />
      <PopoverHeader >
        <div className="flex flex-col">
          <h5 className="font-semibold">Vista</h5>
          {/** configuración de como ver la vista actual */}
          <div className="flex items-center justify-center gap-1 py-1 px-2 mt-2 rounded-md bg-gray-100">
            {/** elemento lista */}
            <button className="bg-white rounded-md py-1 flex flex-col items-center justify-center w-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="none" viewBox="0 0 24 25" aria-hidden="true"><path fill="currentColor" fillRule="evenodd" d="M17.333 4.001A2.667 2.667 0 0 1 20 6.668v10.667A2.667 2.667 0 0 1 17.333 20H6.667A2.667 2.667 0 0 1 4 17.335V6.668A2.667 2.667 0 0 1 6.667 4h10.666Zm-.083 1H6.75a1.75 1.75 0 0 0-1.745 1.62L5 6.75v10.5a1.75 1.75 0 0 0 1.62 1.745l.13.005h10.5a1.75 1.75 0 0 0 1.745-1.62l.005-.13v-10.5a1.75 1.75 0 0 0-1.62-1.745l-.13-.005Zm-.75 7c0-.276-.183-.5-.41-.5H7.91l-.074.008c-.191.043-.336.247-.336.492 0 .276.183.5.41.5h8.18l.074-.008c.191-.042.336-.246.336-.492Zm-.41 3.5c.227 0 .41.224.41.5 0 .246-.145.45-.336.492l-.073.008H7.909c-.226 0-.409-.224-.409-.5 0-.245.145-.45.336-.492l.073-.008h8.182Zm.41-7.5c0-.276-.183-.5-.41-.5H7.91l-.074.008c-.191.043-.336.247-.336.492 0 .276.183.5.41.5h8.18l.074-.008c.191-.042.336-.246.336-.492Z" clipRule="evenodd"></path></svg>
              <span>Lista</span>
            </button>

            {/** elemento panel */}
            <button className="hover:bg-gray-200 rounded-md py-1 flex flex-col items-center justify-center w-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" fillRule="evenodd" d="M17.333 4.001A2.667 2.667 0 0 1 20 6.668v10.667A2.667 2.667 0 0 1 17.333 20H6.667A2.667 2.667 0 0 1 4 17.335V6.668A2.667 2.667 0 0 1 6.667 4h10.666Zm-.083 1H6.75a1.75 1.75 0 0 0-1.745 1.62L5 6.75v10.5a1.75 1.75 0 0 0 1.62 1.745l.13.005h10.5a1.75 1.75 0 0 0 1.745-1.62l.005-.13v-10.5a1.75 1.75 0 0 0-1.62-1.745l-.13-.005Zm-4.758 2.836C12.45 7.646 12.245 7.5 12 7.5c-.276 0-.5.183-.5.41v8.181l.008.074c.042.19.247.335.492.335.276 0 .5-.183.5-.409V7.91l-.008-.073ZM8 7.5c.245 0 .45.145.492.336l.008.073v8.182c0 .226-.224.41-.5.41-.245 0-.45-.145-.492-.336l-.008-.074V7.91c0-.226.224-.409.5-.409Zm8.492.336C16.45 7.646 16.245 7.5 16 7.5c-.276 0-.5.183-.5.41v8.181l.008.074c.042.19.247.335.492.335.276 0 .5-.183.5-.409V7.91l-.008-.073Z" clipRule="evenodd"></path></svg>
              <span>Panel</span>
            </button>
          </div>
        </div>
      </PopoverHeader>
      <PopoverBody>
        <div>
          <h5>Ordenar por</h5>
        </div>
      </PopoverBody>
      <PopoverFooter>
        <div>
          <h5>Filtrar por</h5>
        </div>
      </PopoverFooter>
    </PopoverContent>
  );
}

export default ViewPopOver;