import { NavLink } from "react-router-dom";

export default function Dashboard() {
    return (
        <div className="absolute w-[166px] h-[633px]">
            <div className="flex flex-col gap-4">
        {/* ayyKori */}
        <div className="flex flex-row items-start">
          <img src="/src/assets/logo.png" alt="logo of ayyKori" className="w-[129px] h-[32px]" />
        </div>
        <div className="h-4" />
  
        {/* Menu */}

          <p className="font-barlow font-bold text-xs leading-none text-black">Menu</p>
          <div className="flex flex-col space-x-4">
            <NavLink to='/'>
            <div className="w-[166px] h-[36px] bg-[#11998E] rounded-lg">Dashboard</div>
            </NavLink>
            
            <div className="w-[80px] h-[24px]">
            <img src="/src/assets/Group 4.png" alt="" />
            <img src="/src/assets/Group 5.png" alt="" />
          
            </div>
            </div>
        <div className="h-4" />
  
        {/* recruitment */}
        <p className="font-barlow font-bold text-xs leading-none text-black">Recruitment</p>
          <div className="flex flex-col space-x-4">
            <div className="w-[80px] h-[24px]  space-y-2 space-x-4">
            <img src="/src/assets/Group 6.png" alt="" />
            <NavLink to='/application'>
            <img src="/src/assets/Application.png" alt="" />
            </NavLink>
            <img src="/src/assets/Group 8.png" alt="" />
            <img src="/src/assets/My Referrals.png" alt="" />
          
            </div>
            </div>
        <div className="h-4" />
  
        {/* organization */}
        <p className="font-barlow font-bold text-xs leading-none text-black pt-12">Organization</p>
          <div className="flex flex-col space-x-4">
            <div className="w-[80px] h-[24px]  space-y-2 space-x-4">
            <img src="/src/assets/Group 10.png" alt="" />
            <img src="/src/assets/Structure.png" alt="" />
            <img src="/src/assets/Report.png" alt="" />
            <img src="/src/assets/Settings.png" alt="" />
            <img src="/src/assets/logout.png" alt="" />
          
            </div>
            </div>
      </div>

        </div>
      
    );
  }
  