/** @format */

import { Link, useNavigate } from "react-router-dom";
import bg from "../../asset/world.jpg";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const AdminSignIn = () => {
  const navigate = useNavigate();
  const schema = yup.object({
    email: yup.string().required().email(),
    password: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit(async (res: any) => {
    console.log("submit", res);

    navigate("/userSignIn");
  });
  return (
    <div
      className="w-full h-[100vh] bg-gray-300 flex items-center justify-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-full h-[100vh] backdrop-blur-[4px] flex items-center justify-center ">
        <form
          className="w-[350px] min-h-[100px] rounded  flex-col bg-black"
          onSubmit={onSubmit}
        >
          <div className="w-[350px] h-[90px] bg-black items-center justify-center flex text-white">
            Sign In
          </div>
          <div className="w-[350px] min-h-[290px] bg-white rounded-tl-[100px] flex items-center justify-center flex-col">
            <div className="mb-3">
              <input
                type="text"
                placeholder="Enter your email"
                className="outline-none border-[1px] bg-white w-[300px] h-[40px] pl-3"
                {...register("email")}
              />
              <div className="flex justify-end text-red-500 text-[9px]">
                {errors?.email?.message}
              </div>
            </div>
            <div className="mb-3">
              <input
                type="text"
                placeholder="Enter your password"
                className="outline-none border-[1px] bg-white w-[300px] h-[40px] pl-3"
                {...register("password")}
              />
              <div className="flex justify-end  text-red-500 text-[9px]">
                {errors?.password?.message}
              </div>
            </div>
            <button
              type="submit"
              className="w-[300px] h-[40px] bg-black text-white rounded-tl-[10px] rounded-bl-[10px] rounded-br-[10px]"
            >
              SignIn
            </button>
            <br />
            <div className="flex">
              <div>Don't have an account?</div>
              <Link to="/userSignUp" className="ml-1">
                {" "}
                SignUp
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminSignIn;
