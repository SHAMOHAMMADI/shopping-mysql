import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Container from "../container/Container";
import classNames from "classnames";

function NavBar() {
  const buttonRef = useRef<HTMLButtonElement>({});

  const [openMenu, setOpenMenu] = useState(true);

  const handlemenu = () => {
    setOpenMenu((prev) => !prev);
    // buttonRef.current.style.display="none"
  };
  console.log(openMenu);
  // const [opened, setOpened] = useState(false)

  return (
    <>
      {/* <div className="backPage h-screen  top-0 w-3/5 cursor-pointer  min-h-screen bg-white border rounded shadow-inner md:hidden lg:hidden "></div> */}
      <div className=" flex flex-row-reverse bg-blue-50 justkify-end w-full items-center shadow-inner border border-b-slate-300  h-24 ">
        <img src="/new1403.jpg" className="w-24 h-12 me-6" alt="" />
        <Container>
          {/* 
          <div className={openMenu ? "openMenu" : "hiddenMenu"} ref={buttonRef} onClick={handlemenu}>menu</div>
          <div className={openMenu ? "hiddenmenu" : "openMenu"} onClick={()=>setOpenMenu(true)}>links</div>
          
          
          */}
          <button
            onClick={() => setOpenMenu((prev) => !prev)}
            ref={buttonRef}
            className={
              openMenu
                ? "openMenu absolute left-6 top-30 w-6 h-2  "
                : "hamburger-menu openMenu-mul backPage hidden"
            }
          >
            <div className="openMenu p-2">
              <div className=" w-7 h-1 rounded bg-gray-900 my-1"></div>
              <div className=" w-7 h-1 rounded bg-gray-900 my-1"></div>
              <div className=" w-7 h-1 rounded bg-gray-900 my-1"></div>
            </div>
          </button>
          <div
            className={
              openMenu
                ? "openMenu hidden left-6 top-30 w-6 h-2 z-50"
                : "hamburger-menu openMenu-mul backPage absolute left-1  pt-14 top-0 w-3/5 h-screen z-50 p-2 cursor-pointer bg-white  "
            }
            onClick={() => setOpenMenu((prev) => !prev)}
          >
            <div className=" w-7 h-1 rounded bg-gray-900 my-1 -rotate-45 absolute left-3 "></div>
            <div className=" w-7 h-1 rounded bg-gray-900 my-1 hidden "></div>
            <div className=" w-7 h-1 rounded bg-gray-900 my-1 rotate-45 absolute left-3"></div>
            <ul className="hamburger-menu absolute w-4/5 pt-14 text-blue-900 top-[40px] left-4  md:hidden lg:hidden [&>*]:my-3 hover:[&>*]:text-red-600 hover:[&>*]:font-bold [&>*]:cursor-pointer hover:[&>*]:scale-105 ">
              <li>
                <Link to="/">صفحه اصلی</Link>
              </li>
              <li>
                <Link to="store">فروشگاه</Link>
              </li>
              <li>
                <Link to="/projects">پروژه</Link>
              </li>
              <li>
                <Link to="article">مقالات</Link>
              </li>
              <li>
                <Link to="aboutus">درباره ما</Link>
              </li>
              <li>
                <Link to="contactus">تماس با ما</Link>
              </li>
            </ul>
          </div>

          {/* <ul className="hamburger-menu"> */}
          <div className="hidden sm:flex justify-evenly items-center w-full flex-row-reverse ">
            <ul className="flex flex-row-reverse  w-7/12 [&>*]:m-4 hover:[&>*]:text-red-600 hover:[&>*]:font-bold">
              <li>
                <Link to="/">صفحه اصلی</Link>
              </li>
              <li>
                <Link to="/store">فروشگاه</Link>
              </li>
              <li>
                <Link to="/projects">پروژه</Link>
              </li>

              <li>
                <Link to="/article">مقالات</Link>
              </li>
              <li>
                <Link to="/aboutus">درباره ما</Link>
              </li>
              <li>
                <Link to="/contactus">تماس با ما</Link>
              </li>
            </ul>
            <div className=" flex w-3/12 ms-8 justify-start ">
              <ul className=" border">
                <li className="text-center bg-red-600 text-white  px-2 py-1 rounded hover:inner-shadow hover:font-bold">
                  <Link to="/login">حساب کاربری</Link>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default NavBar;
