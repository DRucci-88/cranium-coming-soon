import React, {useEffect} from "react";
import {InputAuth} from "../../components/Input";
import Button from "../../components/Button";
import {SubmitHandler} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {IFormAuth} from "../../components/Input";
import axios from "axios";
import {PortsService} from "../../config/Ports";
import {useAuth} from "../../context/AuthContext";

let renderCount = 0;

const SignIn = () => {
  // console.log('Sign In  / Login');

  const auth = useAuth();

  // Testing
  useEffect(() => {
    console.log(auth.userAuth);
    if (auth.userAuth === null) console.log('Blank User Auth');
  }, [auth.userAuth]);

  // Testing
  useEffect(() => {
    console.log(auth.accessToken);
    if (auth.accessToken === null) console.log('Blank Access Token');
  }, [auth.accessToken]);

  const validationSchema = yup.object({
    email: yup.string().required('Email is required').email('Must be a valid email'),
    password: yup.string().required('Password is required').min(8, "Password min 8 character")
  }).required();

  const {register, handleSubmit, formState: {errors}} = useForm<IFormAuth>({
    resolver: yupResolver(validationSchema)
  })

  const onSubmitSignIn: SubmitHandler<IFormAuth> = async data => {
    // console.log(data);
    await axios.post(`${PortsService.public}/auth/login`, data)
      .then(res => {
        console.log(res);
        console.log(res.data.accessToken);
        auth.jwtDecodeToken(res.data?.accessToken);
      })
      .catch(err => {
        console.log(err.response.data);
      });
  }
  // console.log(errors);
  renderCount++;
  return (
    <>
      <div className="min-h-screen bg-primary-700 flex flex-col justify-center items-center text-neutral-50">
        {/* <p>Render : {renderCount}</p> */}

        {/*ALERT*/}

        {(errors.email?.message !== undefined || errors.password?.message !== undefined) &&
          <div className="flex flex-row-reverse my-6 rounded-lg border-2 border-red-600 h-16 bg-red-400">
            <img src="images/vector/x-circle.svg" alt="Platform Development" className="mr-2"/>
            <ul className="text-neutral-50 font-sm text-center text rounded-lg h-min my-auto w-40 text-md">
              <li>{errors.email?.message}</li>
              <li>{errors.password?.message}</li>
            </ul>
          </div>
        }

        {/*<div className="flex flex-row-reverse my-4 rounded-lg border-2 border-orange-600 h-16 bg-yellow-400">*/}
        {/*  <img src="images/vector/x-circle copy.svg" alt="Platform Development" className="mr-2"/>*/}
        {/*  <p className="text-black font-sm text-center text rounded-lg h-min my-auto w-40 text-md">*/}
        {/*    {errors.password?.message}*/}
        {/*  </p>*/}
        {/*</div>*/}

        <div className="flex flex-col items-center mt-8">
          <div className="hl"/>
          <h2 className="text-neutral-50 text-2xl sm:text-4xl font-bold py-1 lg:mr-8 xl:mr-0">
            Sign In to TEMU-
          </h2>
        </div>

        <form
          onSubmit={handleSubmit(onSubmitSignIn)}
          className="w-80 text-sm text-center bg-neutral-800 border border-neutral-400 rounded-lg shadow-lg p-6 mt-8"
        >

          <InputAuth
            type="email"
            placeholder="Email"
            className="border-none mb-4"
            label={'email'}
            register={register}
          />
          <InputAuth
            type={"password"}
            placeholder="Password"
            className="border-none mb-4"
            label={'password'}
            register={register}
          />

          <Button
            size="large"
            type={'submit'}
            variant="primary"
            className="w-full mb-4"
          >
            Sign in
          </Button>
          <hr className="border-neutral-400 mb-4"/>
          <Button
            size="large"
            type="button"
            variant="primary"
            className="w-full mb-4 bg-neutral-50 border-neutral-50 hover:bg-neutral-300 hover:border-neutral-300 hover:shadow-neutral-600"
          >
            <img
              className="w-10 mr-4"
              src="./images/jpeg/logogoogle.png"
              alt="Google sign-in"
            />
            Sign in with Google
          </Button>
          <p className="text-xs -mb-1">
            Don't have an account yet?{" "}
            <Button
              href="/signup"
              variant="tertiary"
              className="inline text-xs"
              type={'button'}>
              Sign up
            </Button>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignIn;
