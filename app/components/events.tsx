import { FaArrowRightLong } from "react-icons/fa6";
import Titel from "./title";
function Events() {
    return ( 
        <div className="bg-[#0A0A0A] py-10 lg:px-20 px-8 flex gap-10 justify-between h-screen relative">
            <div className="h-full flex items-end">
                <Titel title="Events"/>
            </div>
            <div className="flex flex-col gap-32 items-center justify-center">
                <div className="flex flex-col justify-center gap-12 font-semibold">
                    <h1 className="text-2xl lg:text-6xl">Upcoming </h1>
                    <div>
                        <p className="text-xl lg:text-4xl py-2">PEGASUS’23</p>
                        <p className="lg:text-xl font-light">a solution based hackathon conducted by ieee</p>
                    </div>
                    <button className="bg-[#6C6C6C] lg:rounded-2xl rounded-xl lg:p-4 p-2 w-1/2 lg:text-xl">register now</button>
                </div>
                <div className="flex flex-col justify-center gap-12 font-semibold">
                    <h1 className="text-2xl lg:text-6xl">Past <br /> Evenessentialsts</h1>
                    <div>
                        <p className="text-xl lg:text-4xl py-2">PEGASUS’23</p>
                        <p className="lg:text-xl font-light">a solution based hackathon conducted by ieee</p>
                    </div>
                </div>
            </div>
            <div className="flex items-end">
                <button>
                <FaArrowRightLong  className="lg:text-6xl text-3xl rotate-45"/>
                </button>
            </div>
        </div>
     );
}

export default Events;