
export default function Dashboard() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="absolute w-1280 h-796 bg-white shadow-md transform -rotate-0.3">
        <div className="flex flex-row gap-12">
          {/* 1.menubar */}
          <div className="flex flex-col gap-8">
      {/* logo */}
      <div>
        <img src="/src/assets/logo.png" alt="" className="w-32.46 h-8" />
      </div>
      {/* menu */}
      <div className="relative">
        <div className="absolute w-7.25 h-4 font-barlow font-bold text-xs leading-4 text-black">
          Menu
        </div>
        <div className="mt-4">
          <ul>
            <li>
              <button>
                <div className="flex flex-row gap-3 absolute w-[166px] h-[36px] bg-teal-500 rounded-lg items-center">
                  <img src="/src/assets/ep_menu.png" alt="" />
                  <p className="font-bold">Dashboard</p>
                </div>
              </button>
            </li>
            <li className="mt-10">
              <img src="/src/assets/Group 4.png" alt="" />
            </li>
            <li className="mt-4">
              <img src="/src/assets/Group 5.png" alt="" />
            </li>
          </ul>
        </div>
      </div>
      {/* recruitment */}
      <div className="relative">
        <div className="absolute w-7.25 h-4 font-barlow font-bold text-xs leading-4 text-black">
          Recruitment
        </div>
        <div className="mt-4">
          <ul>
            <li className="mt-4">
            <button className="w-20 h-61 relative">
      <div className="flex flex-row gap-3 absolute w-full h-full rounded-lg items-center">
        <img src="/src/assets/mdi_work.png" alt="" />
        <p className="font-bold text-sm">Jobs</p>
      </div>
    </button>
            </li>
            <li className="mt-4">
            <button className="w-20 h-61 relative">
      <div className="flex flex-row gap-3 absolute w-full h-full rounded-lg items-center">
        <img src="/src/assets/carbon_application.png" alt="" />
        <p className="font-bold text-sm">Application</p>
      </div>
    </button>
            </li>
            <li className="mt-4">
              <img src="/src/assets/Group 8.png" alt="" />
            </li>
            <li className="mt-4">
              <img src="/src/assets/Group 9.png" alt="" />
            </li>
          </ul>
        </div>
      </div>
      {/* organization */}
      <div className="relative">
        <div className="absolute w-7.25 h-4 font-barlow font-bold text-xs leading-4 text-black">
          Organization
        </div>
        <div className="mt-8">
          <ul>
          <li className="mt-4">
              <img src="/src/assets/Group 10.png" alt="" />
            </li>
            <li className="mt-4">
              <img src="/src/assets/Group 12.png" alt="" />
            </li>
          <li className="mt-4">
              <img src="/src/assets/Group 13.png" alt="" />
            </li>
            <li className="mt-4">
              <img src="/src/assets/Group 14.png" alt="" />
            </li>
            <li className="mt-4">
              <img src="/src/assets/Group 15.png" alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
          {/* 2.good morning */}
          <div className="flex flex-col gap-4">
      <div className="flex flex-row items-center gap-72">
        {/* nav bar */}
        <div>
          <img src="/src/assets/Good Morning.png" alt="" className="w-[124px] h-[25px]"/>
        </div>
        <div>
          <img src="/src/assets/Group 75.png" alt="" className="w-[284px] h-[36px]"/>
        </div>
      </div>
      <div className="flex flex-row gap-12">
        {/* stat */}
        <div className="w-[224px] h-[110px] bg-[#FFFFFF] rounded-md">
          <div className="flex flex-row gap-6">
          <div className="flex flex-col gap-4">
            {/* stats */}
            <div className=" w-[96px] h-[15px] font-barlow font-medium text-xs text-center text-black">
              Total Candidates
            </div>
            <div className="w-[29px] h-[28px] font-barlow font-bold text-xl text-center text-black">
              361
            </div>
            <div className="flex flex-row gap-2 items-center">
              <div>
              <img src="/src/assets/Group 18.png" alt="" />
              </div>
              <div className="w-[32px] h-[16px] font-barlow font-medium text-xs  text-teal-500">
      +26%Inc
    </div>
            </div>
</div>
<div className="relative">
      {/* image */}
      <div
        className="w-[50px] h-[50px] bg-cover bg-center"
        style={{ backgroundImage: `url('/src/assets/Group 17.png')` }}
      >
        {/* text */}
        <div className="flex items-center justify-center mt-3">
          <div className="w-[29px] h-[16px] font-barlow font-medium text-xs text-center text-teal-500 mt-3">
            74%
          </div>
        </div>
      </div>
    </div>
          </div>
        </div>


        <div className="w-[224px] h-[110px] bg-[#FFFFFF] rounded-md">
          <div className="flex flex-row gap-6">
          <div className="flex flex-col gap-4">
            {/* stats */}
            <div className=" w-[96px] h-[15px] font-barlow font-medium text-xs text-center text-black">
              Shortlisted Candidates
            </div>
            <div className="w-[29px] h-[28px] font-barlow font-bold text-xl text-center text-black">
              201
            </div>
            <div className="flex flex-row gap-2 items-center">
              <div>
              <img src="/src/assets/Group 18.png" alt="" />
              </div>
              <div className="w-[32px] h-[16px] font-barlow font-medium text-xs  text-[#E7B860]">
      +45%Inc
    </div>
            </div>
</div>
<div className="relative">
      {/* image */}
      <div
        className="w-[50px] h-[50px] bg-cover bg-center"
        style={{ backgroundImage: `url('/src/assets/Group 20.png')` }}
      >
        {/* text */}
        <div className="flex items-center justify-center mt-3">
          <div className="w-[29px] h-[16px] font-barlow font-medium text-xs text-center text-[#E7B860] mt-3">
            74%
          </div>
        </div>
      </div>
    </div>
          </div>
        </div>




        <div className="w-[224px] h-[110px] bg-[#FFFFFF] rounded-md">
          <div className="flex flex-row gap-6">
          <div className="flex flex-col gap-4">
            {/* stats */}
            <div className=" w-[96px] h-[15px] font-barlow font-medium text-xs text-center text-black">
              Rejected Candidates
            </div>
            <div className="w-[29px] h-[28px] font-barlow font-bold text-xl text-center text-black">
              160
            </div>
            <div className="flex flex-row gap-2 items-center">
              <div>
              <img src="/src/assets/Group 18.png" alt="" />
              </div>
              <div className="w-[32px] h-[16px] font-barlow font-medium text-xs  text-[#FF6A49]">
      +04%Dec
    </div>
            </div>
</div>
<div className="relative">
      {/* image */}
      <div
        className="w-[50px] h-[50px] bg-cover bg-center"
        style={{ backgroundImage: `url('/src/assets/Group 21.png')` }}
      >
        {/* text */}
        <div className="flex items-center justify-center mt-3">
          <div className="w-[29px] h-[16px] font-barlow font-medium text-xs text-center text-[#FF6A49] mt-3">
            74%
          </div>
        </div>
      </div>
    </div>
          </div>
        </div>



      </div>
      <div>
        {/* lines */}
        lines
      </div>
      <div>
        {/* graph */}
        graph
      </div>
    </div>
          {/* 3.welcome */}
          <div>
            Welcome Page
          </div>
        </div>
      </div>
    </div>
  );
}
