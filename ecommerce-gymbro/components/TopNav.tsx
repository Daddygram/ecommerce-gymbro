import { IoBag } from "react-icons/io5";
import { FaCreditCard } from "react-icons/fa6";
import { FaTruck } from "react-icons/fa";

const TopNav = () => {
  return (
    <div className=' bg-black text-[white] h-[40px] mb-1 z-10 overflow-hidden'>
        <div className='navbar-container m-auto max-w-7xl '>
            <ul className='leading-10 animated'>
                <li className="flex-center gap-2"><IoBag /> 100%-ით ავთენტური პროდუქტი</li>
                <li className="flex-center gap-2"><FaCreditCard /> ადგილზე გადახდა</li>
                <li className="flex-center gap-2"><FaTruck /> უფასო მიტანის სერვისი</li>
            </ul>
            <div className='flex-center h-[40px]'>
                <span>GEO</span>
            </div>
        </div>
    </div>
  )
}

export default TopNav