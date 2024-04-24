import { FaArrowRightLong } from "react-icons/fa6";
import Titel from "./title";
function Awards() {
    return ( 
        <div className="bg-[#0A0A0A] py-10 lg:px-20 px-8 flex gap-10 justify-between h-screen relative overflow-hidden">
            <div className="h-full flex items-end">
                <Titel title="awards"/>
            </div>
            <div>
                Coming Soon
            </div>
            <div className="flex items-end">
                <button>
                <FaArrowRightLong  className="lg:text-6xl text-3xl rotate-45"/>
                </button>
            </div>
        </div>
     );
}

export default Awards;