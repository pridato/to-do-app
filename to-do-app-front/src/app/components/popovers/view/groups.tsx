import { GroupByOptions } from "@/app/enums/GroupByOptions";
import { PopoverArrow, PopoverContent } from "@chakra-ui/react";

export default function GroupBy() {
  return (
    <PopoverContent boxShadow='xl' padding={2} maxWidth={60}  >
      <PopoverArrow></PopoverArrow>
      <div className="flex flex-col ">
      {Object.values(GroupByOptions).map(option => (
          <button key={option} className="px-2 py-1 rounded-md hover:bg-gray-100 flex items-start justify-start">
            {option}
          </button>
        ))}
      </div>
    </PopoverContent>
  )
}