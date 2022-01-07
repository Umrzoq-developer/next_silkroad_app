import React from "react";
import { useForm } from "react-hook-form";
import { Button, message as ms } from "antd";
import { FormType } from "../types";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "./scheme";
import FormItem from "../FormItem";
import { useRecoilState } from "recoil";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import { userDetail } from "@/store/auth";
import { AUTH_TOKEN } from "@/constants/ApiConstant";
import styles from "styles/mainForm.module.scss";

// import { useLoginWithEmailMutation } from "@/graphql/user";

const MainForm: React.FC = () => {
  const [_cookie, setCookie] = useCookies([AUTH_TOKEN]);
  const [_, setUser] = useRecoilState(userDetail);
  const navigate = useRouter();

  // const [loginWithEmailMutation, loginWithEmailMutationResult] =
  //   useLoginWithEmailMutation({
  //     onCompleted: ({ result }) => {
  //       setCookie(AUTH_TOKEN, result, {
  //         path: "/",
  //       });
  //       const res = getValues();
  //       setUser({ ...res, isAuth: true });
  //       navigate.push("/main");
  //     },
  //     onError: ({ message }) => {
  //       // setError("Email or password is incorrect!");
  //       ms.error({
  //         content: message,
  //         style: {
  //           marginTop: "30px",
  //         },
  //       });
  //     },
  //   });

  const defaultValues = {
    email: "",
    password: "",
  };

  const {
    handleSubmit,
    control,
    getValues,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    criteriaMode: "firstError",
    defaultValues,
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: FormType) => {
    console.log(data, "data");
    // loginWithEmailMutation({
    //   variables: {
    //     email: data.email,
    //     password: data.password,
    //   },
    // });
  };

  return (
    <>
      <form className={styles.main__form} onSubmit={handleSubmit(onSubmit)}>
        <FormItem
          errorMessage={errors.email?.message}
          control={control}
          name="email"
          type="email"
          placeholder="Email"
        />
        <FormItem
          errorMessage={errors.password?.message}
          control={control}
          name="password"
          type="password"
          placeholder="Password"
        />

        <Button
          // loading={loginWithEmailMutationResult.loading}
          type="primary"
          htmlType="submit"
        >
          Sign In
        </Button>
      </form>
      {/* <p className={styles.error__text}>
        {JSON.stringify(loginWithEmailMutationResult.error?.message)}
      </p> */}
    </>
  );
};

export default MainForm;
