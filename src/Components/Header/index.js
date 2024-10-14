"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Logo from "../../assets/images/logo.jpg";
import Button from "@mui/material/Button";
import CountryDropdown from "../CountryDropdown";
import { FiUser } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";
import SearchBox from "./SearchBox";
import Navigation from "./Navigation";
import { useContext } from "react";
import { MyContext } from "@/context/ThemeContext";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import { FaClipboardCheck } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { RiLogoutCircleRFill } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { FaAngleLeft } from "react-icons/fa6";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePathname } from 'next/navigation'
import { i18n } from '../../../i18n'
import { setCookie, getCookie } from 'cookies-next';


const Header = (props) => {



  const [anchorEl, setAnchorEl] = useState(null);
  const [isOpenNav, setIsOpenNav] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [selectedLang, setselectedLang] = useState('');

  const open = Boolean(anchorEl);

  const headerRef = useRef();
  const context = useContext(MyContext);
  const history = useRouter();
  const pathName = usePathname()

  const useLanguage = props.t;


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const logout = () => {
    setAnchorEl(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    context.setIsLogin(false);
    history.push("/signIn");
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let position = window.pageYOffset;
      if (headerRef.current) {
        if (position > 100) {
          headerRef.current.classList.add("fixed");
        } else {
          headerRef.current.classList.remove("fixed");
        }
      }
    });
  }, []);

  const selectChange = (e) => {
  
    const locale = e.target.value

    const segments = pathName.split('/')
    segments[1] = locale
    history.push(segments.join('/'));
    setselectedLang(locale)
    //return segments.join('/')
    setCookie('lang', locale)
   

  };

  const openNav = () => {
    setIsOpenNav(!isOpenNav);
    context.setIsOpenNav(true);
  };

  const closeNav = () => {
    setIsOpenNav(false);
    context.setIsOpenNav(false);
  };

  const openSearch = () => {
    setIsOpenSearch(!isOpenSearch);
  };

  const closeSearch = () => {
    setIsOpenSearch(false);
  };



  return (
    <>
     
    {
        context.isHeaderFooterShow===true &&
        <div className="headerWrapperFixed" ref={headerRef}>
        <div className="headerWrapper">
          <div className="top-strip bg-blue">
            <div className="container">
              <p className="mb-0 mt-0 text-center">
               {context.useLanguage('COVID_MSG')}
              </p>
            </div>
          </div>

          <header className="header">
            <div className="container">
              <div className="row">
                <div className="logoWrapper d-flex align-items-center col-sm-2">
                  <Link href={"/"} onClick={()=>context.handleLoading()}>
                    <Image src={Logo} alt="Logo" />
                  </Link>
                </div>

                <div className="col-sm-10 d-flex align-items-center part2">
                  {context.countryList.length !== 0 &&
                    context.windowWidth > 992 && <CountryDropdown />}

                  <div
                    className={`headerSearchWrapper ${
                      isOpenSearch === true && "open"
                    }`}
                  >
                    <div className=" d-flex align-items-center">
                      <span
                        className="closeSearch mr-3"
                        onClick={() => setIsOpenSearch(false)}
                      >
                        <FaAngleLeft />
                      </span>
                      <SearchBox closeSearch={closeSearch} />
                    </div>
                  </div>

                  <div className="part3 d-flex align-items-center ml-auto">
                    {context.windowWidth < 992 && (
                      <Button
                        className="circle ml-3 toggleNav"
                        onClick={openSearch}
                      >
                        <IoIosSearch />
                      </Button>
                    )}

                    {context.isLogin !== true && context.windowWidth > 992 && (
                      <Link href="/signIn">
                        <Button className="btn-blue btn-round mr-3" onClick={()=>context.handleLoading()}>
                         
                        {context.useLanguage('SIGNIN')}
                        </Button>
                      </Link>
                    )}

                    {context.isLogin === true && (
                      <>
                        <Button className="circle mr-3" onClick={handleClick}>
                          <FiUser />
                        </Button>
                        <Menu
                          anchorEl={anchorEl}
                          id="accDrop"
                          open={open}
                          onClose={handleClose}
                          onClick={handleClose}
                          transformOrigin={{
                            horizontal: "right",
                            vertical: "top",
                          }}
                          anchorOrigin={{
                            horizontal: "right",
                            vertical: "bottom",
                          }}
                        >
                          <Link href="/myAccount" onClick={()=>context.handleLoading()}>
                            <MenuItem onClick={handleClose}>
                              <ListItemIcon>
                                <FaUserAlt fontSize="small" />
                              </ListItemIcon>
                              My Account
                            </MenuItem>
                          </Link>
                          <Link href="/orders" onClick={()=>context.handleLoading()}>
                            <MenuItem onClick={handleClose}>
                              <ListItemIcon>
                                <FaClipboardCheck fontSize="small" />
                              </ListItemIcon>
                              Orders
                            </MenuItem>
                          </Link>
                          <Link href="/myList" onClick={()=>context.handleLoading()}>
                            <MenuItem onClick={handleClose}>
                              <ListItemIcon>
                                <FaHeart fontSize="small" />
                              </ListItemIcon>
                              My List
                            </MenuItem>
                          </Link>
                          <MenuItem onClick={logout}>
                            <ListItemIcon>
                              <RiLogoutCircleRFill fontSize="small" />
                            </ListItemIcon>
                            Logout
                          </MenuItem>
                        </Menu>
                      </>
                    )}

                    <div className="ml-auto cartTab d-flex align-items-center">
                      {context.windowWidth > 1000 && (
                        <span className="price">
                          {(context.cartData?.length !== 0
                            ? context.cartData
                                ?.map(
                                  (item) => parseInt(item.price) * item.quantity
                                )
                                .reduce((total, value) => total + value, 0)
                            : 0
                          )?.toLocaleString("en-US", {
                            style: "currency",
                            currency: "INR",
                          })}
                        </span>
                      )}

                      <div className="position-relative ml-2">
                        <Link href="/cart" onClick={()=>context.handleLoading()}>
                          <Button className="circle">
                            <IoBagOutline />
                          </Button>
                          <span className="count d-flex align-items-center justify-content-center">
                            {context.cartData?.length > 0
                              ? context.cartData?.length
                              : 0}
                          </span>
                        </Link>
                      </div>

                      {context.windowWidth < 992 && (
                        <Button
                          className="circle ml-3 toggleNav"
                          onClick={openNav}
                        >
                          <IoMdMenu />
                        </Button>
                      )}
                     
                     <div className="select-dropdown cursor-pointer">
                          <select className="dropdown-select cursor-pointer" onChange={(e) => selectChange(e)} defaultValue={props?.params && props?.params?.lang}>
                            {i18n.locales.map(locale => (
                              <option key={locale} value={locale}>


                                <div style={{ color: 'red' }}>{locale.toUpperCase()}</div>

                              </option>
                            ))}
                          </select>
                          </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {context.categoryData?.length !== 0 && (
            <Navigation
              navData={context.categoryData}
              isOpenNav={isOpenNav}
              closeNav={closeNav}
            />
          )}
        </div>
      </div>

    }
     
    </>
  );
};

export default Header;