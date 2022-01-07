import { Button } from "antd";
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Cookies from "js-cookie";
import "./index.scss";
import { AUTH_TOKEN } from "@/constants/ApiConstant";
import { useRecoilState } from "recoil";
import { userDetail } from "@/store/auth";

const Navbar: React.FC = () => {
  const navigate = useRouter();
  const [_, setUser] = useRecoilState(userDetail);
  const handleClick = () => {
    Cookies.remove(AUTH_TOKEN);
    setUser({ isAuth: false });
    navigate.push("/");
  };
  return (
    <div className="navbar__layout">
      <Link href="/main">
        <a>Main</a>
      </Link>
      <Link href="/math">
        <a>Math</a>
      </Link>
      <Button onClick={handleClick} type="link">
        Logout
      </Button>
    </div>
  );
};

export default Navbar;
