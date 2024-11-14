import React from "react";

import Input from "../../components/Input";
import { useFormik } from "formik";
import { signUpSchema } from "../../schemas/signUpSchema";
import Button from "../../components/Button/button";
import logo from "../../assests/logo.png";
import styles from "./login.module.css";

const Login = () => {
  const { values, errors, handleChange, handleSubmit, handleBlur } = useFormik({
    initialValues: {
      mobile: "",
      password: "",
    },
    onSubmit: async (values, action) => {
      console.log("🚀 ~ Login ~ values:", values);
    },
    validationSchema: signUpSchema,
    validateOnChange: false,
  });

  return (
    <div>
      <div className="max-w-[1195px] w-full mx-auto my-0 ">
        <div className={styles.logoContainer}>
          <img src={logo} alt="logo" className={styles.logo} />
        </div>
        <div className="w-1/2 py-20">
          <div className="w-[465px]">
            <div className="text-[80px] font-[450] break-words leading-[85px] tracking-[-4px]">
              <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-[#0088FF] from-[-6.87%] via-[#A033FF] via-26.54%  to-[#FF5C87] to-58.58%">
                A place for meaningful conversations
              </h1>
            </div>
            <div className="my-5 text-base text-slate-500">
              <p>
                Connect with your friends and family, build your community and
                deepen your interests.
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <Input
                name={"mobile"}
                autoComplete="off"
                placeholder={"Mobile No."}
                value={values.mobile}
                onChange={handleChange}
                error={errors?.mobile}
                className={
                  "w-72 rounded-lg overflow-hidden px-5 py-2 bg-gray-400/20 border-none my-2"
                }
              />
              <Input
                name={"password"}
                placeholder={"password"}
                value={values.password}
                onChange={handleChange}
                error={errors?.password}
                className={
                  "w-72 rounded-lg overflow-hidden px-5 py-2 bg-gray-400/20 border-none my-2"
                }
              />
              <Button
                children={"Submit"}
                size={"medium"}
                variant="success"
                className={"text-black w-72"}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
