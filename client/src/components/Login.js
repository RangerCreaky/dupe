import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../slices/authSlice';
import { Navigate } from "react-router-dom";

import App from '../App';
import Alert from './Alert';


const Login = () => {
  const isAuthenticated = useSelector((state) => state?.auth?.isAuthenticated);
  const emailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const submit = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    dispatch(loginAction({ email, password }));

    emailRef.current.value = "";
    passwordRef.current.value = "";
  }

  return (
    <>
      {isAuthenticated && (
        <Navigate to="/" replace={true} />
      )}
      <Alert />
      <div className='w-full md:h-[104px] h-[180px] -z-10 bg-white'></div>
      <div className="h-screen md:flex">
        <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr to-[#D2AC47] from-[#faf9f7] justify-around items-center hidden">
          <div>
            <img src="./images/logo/logo-full.png" alt="sample 2" classNameName="w-92 h-92" />
          </div>
          <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        </div>
        <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
          <form className="bg-white w-1/2" onSubmit={submit}>
            <h1 className="text-[#D2AC47] font-bold text-2xl mb-1">Login</h1>
            <p className="text-sm font-normal text-[#D2AC47] mb-7">Welcome Back</p>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
              <input
                ref={emailRef}
                className="pl-2 outline-none border-none"
                type="text"
                name="email"
                id=""
                placeholder="Email Address"
              />
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <input
                ref={passwordRef}
                className="pl-2 outline-none border-none"
                type="pssword"
                name="password"
                id=""
                placeholder="Password"
              />
            </div>
            <button
              type='submit'
              className="block w-full bg-[#D2AC47] hover:bg-gray-600 mt-4 py-2 rounded-2xl text-gray-200 font-semibold mb-2"
            >
              Login
            </button>
            <NavLink to="/Register" className="text-sm ml-2 text-[#D2AC47] hover:text-gray-500 cursor-pointer">
              Do not have an account?
            </NavLink>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

