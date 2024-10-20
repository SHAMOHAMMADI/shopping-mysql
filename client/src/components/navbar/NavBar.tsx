import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../container/Container'

function NavBar() {
  return (
      
      <div className="flex flex-row-reverse bg-blue-50 justify-end w-full items-center shadow-inner border border-b-slate-300 shadow-xl h-24">
        <img src="/new1403.jpg" className="w-24 h-12 me-6" alt="" />
        <Container>
        <div className="flex justify-evenly items-center w-full flex-row-reverse">
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
            <div className=" flex w-3/12 ms-8 justify-start " >
                <ul className=' border'>
                <li className="text-center bg-red-600 text-white  px-2 py-1 rounded hover:inner-shadow hover:font-bold">
                    <Link to="/login">حساب کاربری</Link>
                </li>
                </ul>

            </div>
        </div>
    </Container>
    </div>
  )
}

export default NavBar