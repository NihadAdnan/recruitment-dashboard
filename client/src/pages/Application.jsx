import { NavLink } from 'react-router-dom';

export default function Application() {
  return (
    <div className="flex justify-center items-center h-screen">
<div className="absolute w-1280 h-796 bg-white shadow-md transform -rotate-0.3">
  <div className="flex flex-row gap-12">
    {/* Menubar */}
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
              <NavLink to='/'>
                <div className="flex flex-row gap-3 absolute w-[166px] h-[36px]  rounded-lg items-center">
                  <img src="/src/assets/ep_menu.png" alt="" />
                  <p className="font-bold">Dashboard</p>
                </div>
                </NavLink>
              </button>
            </li>
            <li className="mt-8">
            <button className="w-20 h-61 relative">
            <NavLink to='/application' className="flex flex-row gap-3 w-full h-full bg-teal-500 rounded-lg items-center">
      <div className='flex flex-row'>
        <img src="/src/assets/carbon_application.png" alt="" />
        <p className="font-bold text-sm">Application</p>
      </div>
      </NavLink>
    </button>
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
              <img src="/src/assets/Group 4.png" alt="" />
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

{/* details */}
  </div>

</div>
    </div>
  )
}
