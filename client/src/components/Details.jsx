

export default function Details() {
  return (
    <div className="flex flex-row mx-auto justify-between gap-72">
        <div className="flex flex-row mx-auto gap-4">
            {/* naam,chobi */}
            <div>
                <img src="/src/assets/Image-24.png" alt="" className="h-[44px] left-[254px] top-[228px] bg-gradient-to-b from-opacity-20 to-opacity-20 rounded-full"/>
            </div>
            <div className="flex flex-col max-auto gap-2 w-[138px] h-[42px] left-[308px] top-[238px]">
            <div className="h-[20px] left-[308px] top-[238px] font-barlow font-semibold text-[14px] leading-[20px] text-center text-black">Nihad Adnan</div>

            <div className="font-barlow font-medium text-xs leading-4 text-gray-600">4 year exp.|Expected 45k</div>

            </div>
        </div>
        <div className="text-teal-500 font-bold">
            {/* status */}
            Shortlisted
        </div>
        <div className="w-[51px] h-[16px] left-[1175px] top-[242px] font-barlow font-bold text-xs leading-[16px] text-center text-gray-700">14/03/24</div>

    </div>
  )
}
