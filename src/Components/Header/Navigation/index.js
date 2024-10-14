import Button from "@mui/material/Button";
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { useContext, useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { MyContext } from "@/context/ThemeContext";
import CountryDropdown from "@/Components/CountryDropdown";
import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navigation = (props) => {
  const [isopenSidebarVal, setisopenSidebarVal] = useState(false);
  const [isOpenNav, setIsOpenNav] = useState(false);
  const [isOpenSubMenuIndex, setIsOpenSubMenuIndex] = useState(null);
  const [isOpenSubMenu_, setIsOpenSubMenu_] = useState(false);

  const context = useContext(MyContext);

  useEffect(() => {
    setIsOpenNav(props.isOpenNav);
  }, [props.isOpenNav]);

  const IsOpenSubMenu = (index) => {
    setIsOpenSubMenuIndex(index);
    setIsOpenSubMenu_(!isOpenSubMenu_);
  };

  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-2 navPart1 ">
            <div className="catWrapper">
              <Button
                className="allCatTab align-items-center res-hide"
                onClick={() => setisopenSidebarVal(!isopenSidebarVal)}
              >
                <span className="icon1 mr-2">
                  <IoIosMenu />
                </span>
                <span className="text">ALL CATEGORIES</span>
                <span className="icon2  ml-2">
                  <FaAngleDown />
                </span>
              </Button>

              <div
                className={`sidebarNav ${
                  isopenSidebarVal === true ? "open" : ""
                }`}
              >
                <ul>
                  {props.navData?.map((item, index) => {
                    return (
                      <li key={item?._id}>
                        <Link href={`/category/${item?._id}`}>
                          <Button>
                            {item?.name} <FaAngleRight className="ml-auto" />
                          </Button>
                        </Link>
                        {item?.children?.length !== 0 && (
                          <div className="submenu">
                            {item?.children?.map((subCat, key) => {
                              return (
                                <Link
                                  href={`/category/subCat/${subCat?._id}`}
                                  key={key}
                                >
                                  <Button>{subCat?.name}</Button>
                                </Link>
                              );
                            })}
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

          <div
            className={`col-sm-10 navPart2  align-items-center res-nav-wrapper ${
              isOpenNav === true ? "open" : "close"
            }`}
          >
            <div className="res-nav-overlay" onClick={props.closeNav}></div>

            <ul className="list list-inline ml-auto res-nav">
              {context.windowWidth < 992 && (
                <>
                  {context.isLogin !== true && (
                    <li className="list-inline-item pl-3">
                      <Link href="/signIn">
                        <Button className="btn-blue btn-round mr-3">
                          Sign In
                        </Button>
                      </Link>
                    </li>
                  )}

                  <li className="list-inline-item">
                    <div className="p-3">
                      {context.countryList.length !== 0 &&
                        context.windowWidth < 992 && <CountryDropdown />}
                    </div>
                  </li>
                </>
              )}
             {
               <li className="list-inline-item" onClick={props.closeNav}>
                <Link href="/" onClick={()=>context.handleLoading()}>
                  <Button>{context.useLanguage('HOME')}</Button>
                </Link>
              </li>
              }
              {props.navData
                .filter((item, idx) => idx < 8)
                .map((item, index) => {
                  return (
                    <li key={item?._id} className="list-inline-item">
                      <Link
                        href={`/category/${item?._id}`}
                        onClick={props.closeNav}
                      >
                        <Button onClick={()=>context.handleLoading()}>{item?.name}</Button>
                      </Link>

                      {item?.children?.length !== 0 &&
                        context.windowWidth < 992 && (
                          <span className={`arrow ${
                                isOpenSubMenuIndex === index &&
                                isOpenSubMenu_ === true &&
                                "rotate"
                              }`}
                              onClick={() => IsOpenSubMenu(index)}
                              >
                            <FaAngleDown />
                          </span>
                        )}

                      {item?.children?.length !== 0 && (
                        <div
                          className={`submenu ${
                            isOpenSubMenuIndex === index &&
                            isOpenSubMenu_ === true &&
                            "open"
                          }`}
                        >
                          {item?.children?.map((subCat, key) => {
                            return (
                              <Link
                                href={`/category/subCat/${subCat?._id}`}
                                key={key}
                                onClick={props.closeNav}
                              >
                                <Button>{subCat?.name}</Button>
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </li>
                  );
                })}


          

              <li className="list-inline-item">
                <Button onClick={props.closeNav} className=" shop-nav">

                  <Link
                    href="#"
                    onClick={props.closeNav}
                    className="shop-link"
                  >
                    <Button>{context.useLanguage('SHOP')}</Button> <MdKeyboardArrowDown style={{ color: '#000' }} />
                  </Link>
                </Button>
               

                {
                  context.windowWidth < 992 && (
                    <span className={`arrow ${
                      isOpenSubMenu_ === true &&
                      "rotate"
                      }`}
                      onClick={() => IsOpenSubMenu(index)}
                    >
                      <FaAngleDown />
                    </span>
                  )}


                <div
                  className={`submenu dropdown_menu megaMenu w-100 ${isOpenSubMenu_ === true &&
                    "open"
                    }`}
                >
                 <ul className="sub-menu">
                  <li >
                    <span className="text">Shop List</span>
                    <ul className="dropdown">
                      <li>
                      <span className="text">Shop Default</span>
                      </li>
                      <li>
                      <span  className="text">Shop Right Sidebar</span>
                      </li>
                      <li>
                      <span  className="text">Shop Wide</span>
                      </li>
                    </ul>
                  </li>
                  <li >
                    <span className="text">Product List</span>
                    <ul className="dropdown">
                      <li>
                      <span className="text">Product Default</span>
                      </li>
                      <li>
                      <span  className="text">Product Right Sidebar</span>
                      </li>
                      <li>
                      <span  className="text">Product Wide</span>
                      </li>
                    </ul>
                  </li>

                 
                 </ul>
                  
                </div>

              </li>


            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
