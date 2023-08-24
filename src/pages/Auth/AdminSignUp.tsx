/** @format */

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import bg from "../../asset/world.jpg";
// import {  } from "../../apis/AuthAPI"

const AdminSignUp = () => {
  const navigate = useNavigate();
  const [image, setimage] = useState<string>("");
  const [avatar, setavatar] = useState<string>();

  const onHandleImage = (e: any) => {
    const localImage = e.target.files[0];
    const saveImage = URL.createObjectURL(localImage);
    setimage(localImage);
    setavatar(saveImage);
  };

  const model = yup.object({
    name: yup.string().required(),
    email: yup.string().required().email(),
    password: yup.string().required().min(5),
    confirm: yup.string().oneOf([yup.ref("password")]),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(model),
  });

  const onSubmit = handleSubmit(async (res: any) => {
    console.log("submit", res);

    navigate("/adminSignIn");
  });
  // const onSubmit = handleSubmit(async (data) => {
  //   const { name, email, password } = data;

  //   const formData = new FormData();
  //   formData.append("", name);
  //   formData.append("", email);
  //   formData.append("", password);
  //   formData
  //     .append(
  //       "",
  //       image
  //     )(formData)
  //     .then(() => {
  //       navigate("/Admin-sign-in");
  //     });
  // });
  return (
    <div
      className="w-full h-[100vh] flex items-center justify-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-full h-[100vh] backdrop-blur-[4px] flex items-center justify-center">
        <form
          className="w-[350px] min-h-[100px] rounded flex-col bg-black"
          onSubmit={onSubmit}
        >
          <div className="w-[350px] h-[90px] bg-black items-center justify-center flex text-white">
            Sign UP
          </div>
          <div className="w-[350px] h-[480px] bg-white rounded-tl-[100px] flex items-center justify-center flex-col">
            <div>
              <input
                type="text"
                placeholder="Enter Name"
                className="outline-none border-[1px] bg-white w-[300px] h-[40px] pl-3 mb-6"
                {...register("name")}
              />
              <div className="flex justify-end  text-red-500 text-[9px]">
                {errors?.name?.message}
              </div>
            </div>
            <div>
              <input
                type="text"
                placeholder="Enter your email"
                className="outline-none border-[1px] bg-white w-[300px] h-[40px] pl-3 mb-6"
                {...register("email")}
              />
              <div className="flex justify-end  text-red-500 text-[9px]">
                {errors?.email?.message}
              </div>
            </div>
            <div>
              <input
                type="text"
                placeholder="Enter your password"
                className="outline-none border-[1px] bg-white w-[300px] h-[40px] pl-3 mb-6"
                {...register("password")}
              />
              <div className="flex justify-end  text-red-500 text-[9px]">
                {errors?.password?.message}
              </div>
            </div>
            <div>
              <input
                type="text"
                placeholder="Enter your confirm"
                className="outline-none border-[1px] bg-white w-[300px] h-[40px] pl-3 mb-6"
                {...register("confirm")}
              />
              <div className="flex justify-end text-red-500 text-[9px]">
                {errors?.confirm?.message}
              </div>
            </div>
            <button
              type="submit"
              className="w-[300px] h-[40px] bg-black text-white rounded-tl-[10px] rounded-bl-[10px] rounded-br-[10px] mt-3"
            >
              Sign Up
            </button>
            <br />
            <div className="flex">
              <div>Already have an account?</div>
              <Link to="/adminSignIn" className="ml-1">
                {" "}
                SignIn
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminSignUp;
