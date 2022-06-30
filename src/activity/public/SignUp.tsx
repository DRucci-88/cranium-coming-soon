import React from "react";
import axios from "axios";
import Button from "../../components/Button";
import {InputAuth} from "../../components/Input";
import {useNavigate} from "react-router-dom";
import {IFormAuth} from "../../components/Input";
import {SubmitHandler, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from 'yup';
import {PortsService} from "../../config/Ports";

const SignUp = () => {
  // console.log("Sign Up / Register");
  const navigate = useNavigate();

  const validationSchema = yup.object({
    firstName: yup.string().required('First Name is Required'),
    lastName: yup.string(),
    phoneNumber: yup.string().required('Phone Number is Required'),
    email: yup.string().required('Email is required').email('Must be a valid email'),
    password: yup.string()
      .required("Password is required")
      .min(8, "Password length should be at least 8 characters"),
    confirmationPassword: yup.string()
      .required("Confirm Password is required")
      .min(8, "Password length should be at least 8 characters")
      .oneOf([yup.ref("password")], "Passwords do not match")
  });

  const { register, handleSubmit, formState: {errors} } = useForm<IFormAuth>({
    resolver: yupResolver(validationSchema)
  });

  const onSubmitSignUp: SubmitHandler<IFormAuth> = async data => {
    // console.log(data);
    await axios.post(`${PortsService.public}/auth/register`, data)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err.message);
      });
  }

  return (
    <>
      {/*<h1>Sign Up / Register</h1>*/}

      <div className="min-h-screen bg-primary-800 flex justify-center items-center text-neutral-50 transition-all">
        <div className="max-w-4xl flex flex-col md:flex-row justify-evenly items-center py-16 md:py-0">
          <div className="w-[85%] md:w-2/5 mb-10 md:mb-0 flex flex-col justify-center">
            <div className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch mt-8">
              <div className="hl lg:vl"/>
              <h2 className="text-neutral-50 text-2xl sm:text-4xl font-bold py-1 lg:mr-8 xl:mr-0">
                Sign Up to TEMU-
              </h2>
            </div>
            <p className="mt-8 mb-4">
              Ciptakan pengalaman unik dan bermakna dengan menjelajahi virtual
              space milik Anda
            </p>
            <div>
              <p>Mengapa menggunakan virtual reality?</p>
              <ul className="list-disc ml-5">
                <li>Membuat acara hybrid yang variatif</li>
                <li>
                  Meningkatkan konversi dalam acara untuk mendukung tujuan
                  bisnis/event
                </li>
                <li>Memperoleh data yang lebih relevan dengan lebih mudah</li>
              </ul>
            </div>
          </div>

          <div className="w-full md:w-2/5 flex justify-center">

            <form
              className="w-80 text-sm text-center bg-neutral-800 border border-neutral-400 rounded-lg shadow-lg p-6"
              onSubmit={handleSubmit(onSubmitSignUp)}
            >

              <InputAuth
                type="text"
                placeholder="First Name"
                className="border-none mb-2"
                label={'firstName'}
                register={register}
              />
              <p
                className="text-red-500 text-left"
              >{errors.firstName?.message}</p>

              <InputAuth
                type="text"
                placeholder="Last Name"
                className="border-none mb-2"
                label={'lastName'}
                register={register}
              />

              <InputAuth
                type="text"
                placeholder="Phone Number"
                className="border-none mb-2"
                label={'phoneNumber'}
                register={register}
              />
              <p className="text-red-500 text-left">
                {errors.phoneNumber?.message}
              </p>
              <InputAuth
                type="text"
                placeholder="Email"
                className="border-none mb-2"
                label={'email'}
                register={register}
              />
              <p className="text-red-500 text-left">
                {errors.email?.message}
              </p>
              <InputAuth
                type="password"
                placeholder="Password"
                className="border-none mb-2"
                label={'password'}
                register={register}
              />
              <p className="text-red-500 text-left">
                {errors.password?.message}
              </p>
              <InputAuth
                type="password"
                placeholder="Confirm Password"
                className="border-none mb-2"
                label={'confirmationPassword'}
                register={register}
              />
              <p className="text-red-500 text-left">
                {errors.confirmationPassword?.message}
              </p>
              <Button
                size="large"
                type="submit"
                variant="primary"
                className="w-full mb-4"
              >
                Sign Up
              </Button>
              <p className="text-xs -mb-1">
                Already have an account?{" "}
                <Button
                  href="/signin"
                  variant="tertiary"
                  className="inline text-xs"
                  type={'button'}>
                  Sign in
                </Button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
