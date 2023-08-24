/** @format */

import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import pix from "../asset/download.jpg";

const GetStartedPage = () => {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <div className="w-[100%] h-[100%] flex flex-col items-center justify-center">
        <div className="w-[400px] h-[300px]">
          <img src={pix} className="w-[100%] h-[100%] object-cover" />
        </div>
        <div className="text-[30px] font-[500]">Hello !</div>
        <div className="flex gap-[10px] m-[10px]">
          <Link to="/adminSignUp">
            <div className="py-[7px] px-[10px] bg-[orange] rounded text-white">
              SignUp as Admin
            </div>
          </Link>
          <Link to="/userSignUp">
            <div className="py-[7px] px-[10px] bg-[orange] rounded text-white">
              SignUp as User
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GetStartedPage;
