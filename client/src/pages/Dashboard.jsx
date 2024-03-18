// import { NavLink } from "react-router-dom";

// export default function Dashboard() {
//     return (
//         <div className="absolute w-[166px] h-[633px]">
//             <div className="flex flex-col gap-4">
//         {/* ayyKori */}
//         <div className="flex flex-row items-start">
//           <img src="/src/assets/logo.png" alt="logo of ayyKori" className="w-[129px] h-[32px]" />
//         </div>
//         <div className="h-4" />
  
//         {/* Menu */}

//           <p className="font-barlow font-bold text-xs leading-none text-black">Menu</p>
//           <div className="flex flex-col space-x-4">
//             <NavLink to='/'>
//             <div className="w-[166px] h-[36px] bg-[#11998E] rounded-lg">Dashboard</div>
//             </NavLink>
            
//             <div className="w-[80px] h-[24px]">
//             <img src="/src/assets/Group 4.png" alt="" />
//             <img src="/src/assets/Group 5.png" alt="" />
          
//             </div>
//             </div>
//         <div className="h-4" />
  
//         {/* recruitment */}
//         <p className="font-barlow font-bold text-xs leading-none text-black">Recruitment</p>
//           <div className="flex flex-col space-x-4">
//             <div className="w-[80px] h-[24px]  space-y-2 space-x-4">
//             <img src="/src/assets/Group 6.png" alt="" />
//             <NavLink to='/application'>
//             <img src="/src/assets/Application.png" alt="" />
//             </NavLink>
//             <img src="/src/assets/Group 8.png" alt="" />
//             <img src="/src/assets/My Referrals.png" alt="" />
          
//             </div>
//             </div>
//         <div className="h-4" />
  
//         {/* organization */}
//         <p className="font-barlow font-bold text-xs leading-none text-black pt-12">Organization</p>
//           <div className="flex flex-col space-x-4">
//             <div className="w-[80px] h-[24px]  space-y-2 space-x-4">
//             <img src="/src/assets/Group 10.png" alt="" />
//             <img src="/src/assets/Structure.png" alt="" />
//             <img src="/src/assets/Report.png" alt="" />
//             <img src="/src/assets/Settings.png" alt="" />
//             <img src="/src/assets/logout.png" alt="" />
          
//             </div>
//             </div>
//       </div>

//         </div>
      
//     );
//   }
  

export default function Dashboard() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="absolute w-1280 h-796 bg-white shadow-md transform -rotate-0.3">
        <div className="flex flex-row gap-4">
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
          <div>
            Good morning Page
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
