import {AiOutlineSearch} from "react-icons/ai"
import { Link } from "react-router-dom"
import pix from "../asset/download.jpg"
const LandingPage = () => {
  return (
    <div>
        {/* Header */}
        <div className="w-[full] h-[60px] bg-[silver] flex items-center justify-center border-b-[1px] border-[white]">
            {/* main */}
            <div className="w-[95%] h-[100%]  flex items-center justify-between">

            {/* right */}
            <div>
            <div>Logo</div>
            </div>
            {/* right */}
            {/* left */}
            <div className="flex items-center gap-[5px]">
                {/* inputHolder */}
                <div className="flex items-center jc
                 h-[35px] border-[1px] border-[white] px-[3px] rounded gap-[5px]">
                    {/* icon */}
                    <div className="text-[20px] text-white"><AiOutlineSearch/></div>
                    {/* input */}
                    <input placeholder="Search"  className="w-[180px] h-[90%] rounded bg-transparent placeholder:text-white text-[14px] outline-none border-none"/>
                </div>
                {/* inputHolder */}
                {/* Button */}
               <Link to="opinionPage">
               <div className="py-[6px] px-[15px] bg-[orange] rounded text-white">
                    Get Started
                </div>  
               </Link>
                {/* Button */}
            </div>
            {/* left */}
        </div>
                        
        </div>
            {/* main */}
            {/* Homepage */}
            <div className="w-full h-[89vh] bg-[silver] flex items-center justify-center">
                <div className="w-[95%] h-[100%] items-center justify-between flex">
                    {/* right */}
                    <div className="flex flex-col">
                        <div className="text-[50px] text-white w-[70%] leading-[1.3] font-[500]">Do Your best work, sopported by your subscribers</div>
                        <div className="text-[15px] w-[50%] text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate consequatur itaque ducimus, reprehenderit sed repellat vitae sit repellendus ullam perferendis.</div>
                    </div>
                    {/* left */}
                    <img src={pix} className="w-[40%]"/>
                </div>
            </div>
            {/* Homepage */}
        {/* Header */}
    </div>
  )
}

export default LandingPage