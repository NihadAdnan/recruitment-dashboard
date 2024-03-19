

export default function Jobs() {
  return (
    <div className="w-[242px] h-[50px] mt-2 relative">
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
      <p className="font-barlow font-medium text-xs leading-4 text-center text-black">Product Engineer</p>
      <p className="font-barlow font-light text-xs leading-4 text-center text-black">Total Application</p>
    </div>
    {/* Shape */}
    <div className="absolute top-0 left-0 w-[34px] h-[34px] bg-teal-500 rounded-sm flex items-center justify-center">
      <p className="text-white text-xs font-bold">54</p>
    </div>
    <div className="w-full h-full bg-teal-200 rounded-md"></div>
  </div>
  )
}
