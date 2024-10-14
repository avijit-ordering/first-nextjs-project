"use client"

import { MyContext } from "./ThemeContext";
import { fetchDataFromApi, postData } from "@/utils/api";
import { useEffect, useState } from "react";
import axios from 'axios';
import { json } from "react-router-dom";


const ThemeProvider = ({ children, setPageLoading }) => {

  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setselectedCountry] = useState('');
  const [isOpenProductModal, setisOpenProductModal] = useState(false);
  const [isHeaderFooterShow, setisHeaderFooterShow] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const [productData, setProductData] = useState([]);

  const [categoryData, setCategoryData] = useState([]);
  const [subCategoryData, setsubCategoryData] = useState([]);
  const [addingInCart, setAddingInCart] = useState(false);

  const [cartData, setCartData] = useState();
  const [searchData, setSearchData] = useState([]);
  const [isOpenNav, setIsOpenNav] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window && window.innerWidth);

  const [alertBox, setAlertBox] = useState({
    msg: '',
    error: false,
    open: false
  })

  const [user, setUser] = useState({
    name: "",
    email: "",
    userId: ""
  })



  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/");


    // fetchDataFromApi("/api/category").then((res) => {
    //   console.log(JSON.stringify(res))
      
    //   setCategoryData(res.categoryList);
    // })

     const categoris1 = '[{"_id":"66f50809a533fb64a5e2ba8e","id":"66f50809a533fb64a5e2ba8e","name":"aaaa","images":["https://www.jiomart.com/images/product/original/590001266/sweet-corn-1-pc-approx-250-g-450-g-product-images-o590001266-p590001266-0-202409171907.jpg","https://www.jiomart.com/images/product/original/590003516/potato-1-kg-product-images-o590003516-p590003516-0-202408070949.jpg"],"slug":"sdsdsd","children":[]},{"_id":"66f5087fec7bb128766c1571","id":"66f5087fec7bb128766c1571","name":"bbb","images":["https://www.jiomart.com/images/product/original/590002136/onion-5-kg-pack-product-images-o590002136-p590002136-0-202408070949.jpg",""],"slug":"bbb","children":[]},{"_id":"66f50996ec7bb128766c1573","id":"66f50996ec7bb128766c1573","name":"ccc","images":["https://www.jiomart.com/images/product/original/590000086/big-coconut-1-pc-approx-350-g-600-g-product-images-o590000086-p590000086-0-202408070949.jpg"],"slug":"ccc","children":[]},{"_id":"66f517b1a53b62ebfb4dbc8d","id":"66f517b1a53b62ebfb4dbc8d","name":"Dresses","images":["https://res.cloudinary.com/dwjcuweew/image/upload/v1727338415/1727338413453_logo512.png"],"color":"Red","slug":"fruits-vegetables","children":[{"_id":"66f517e9a53b62ebfb4dbc94","id":"66f517e9a53b62ebfb4dbc94","name":"Cuts & Sprouts","images":[],"slug":"Cuts & Sprouts","children":[]}]}]'
     const categoris2 = {
      'categoryList': JSON.parse(categoris1)
     };
     setCategoryData(categoris2.categoryList);


    const user = JSON.parse(localStorage.getItem("user"));
    // fetchDataFromApi(`/api/cart?userId=${user?.userId}`).then((res) => {
      
    //   setCartData(res)
    // });

   
    if(user && user?.userId){
      const cart1 = '[{"_id":"66fe2819df6ec57efa5d4284","productTitle":"ADELINA Plus Sizes","image":"https://res.cloudinary.com/dwjcuweew/image/upload/v1727427274/1727427275207_bianco-evento-bridal-dress-adelina-_2__1.jpg","rating":2,"price":200,"quantity":1,"subTotal":200,"productId":"66f52b5be70c7b4030fb014b","countInStock":10,"userId":"66fbfefe4a8c014c24072576","__v":0,"id":"66fe2819df6ec57efa5d4284"}]'
      setCartData(JSON.parse(cart1))
    }


    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

     const location = localStorage.getItem("location");
    if (location !== null && location !== "" && location !== undefined) {
      setselectedCountry(location)
    }


    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, []);


  const getCartData = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    fetchDataFromApi(`/api/cart?userId=${user?.userId}`).then((res) => {
      setCartData(res)
    });
  }


  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token !== "" && token !== undefined && token !== null) {
      setIsLogin(true);

      const userData = JSON.parse(localStorage.getItem("user"));

      setUser(userData);

    } else {
      setIsLogin(false);
    }
  }, [isLogin]);


  const openProductDetailsModal = (id, status) => {
    fetchDataFromApi(`/api/products/${id}`).then((res) => {
      setProductData(res);
      setisOpenProductModal(status);
    })
  }

  const getCountry = async (url) => {
    const responsive = await axios.get(url).then((res) => {
      setCountryList(res.data.data)
    })
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setAlertBox({
      open: false
    });
  };

  const useLanguage = (lang) => {
   
    const all_language = children[0].props.t;
    let count = false;
      
    for (let i=0; i < all_language.length; i++) {
      if (all_language[i].key == lang) {
          count = true;
          return all_language[i].value;
      }
    }
    if(!count){
      return lang;
    }

   // return "aadsdsfs"

  }
  const handleLoading = () => {
    setPageLoading(true)    
  }
  const addToCart = (data) => {

    if(isLogin===true){
      setAddingInCart(true);
      postData(`/api/cart/add`, data).then((res) => {
        if (res.status !== false) {
          setAlertBox({
            open: true,
            error: false,
            msg: "Item is added in the cart"
          })
  
          setTimeout(() => {
            setAddingInCart(false);
          }, 1000);
  
          getCartData();
  
        }
        else {
          setAlertBox({
            open: true,
            error: true,
            msg: res.msg
          })
          setAddingInCart(false);
        }
  
      })
    }
    else{
      setAlertBox({
        open:true,
        error:true,
        msg:"Please login first"
      })
    }
   
  }

  const values = {
    countryList,
    setselectedCountry,
    selectedCountry,
    isOpenProductModal,
    setisOpenProductModal,
    isHeaderFooterShow,
    setisHeaderFooterShow,
    isLogin,
    setIsLogin,
    categoryData,
    setCategoryData,
    subCategoryData,
    setsubCategoryData,
    openProductDetailsModal,
    alertBox,
    setAlertBox,
    addToCart,
    addingInCart,
    setAddingInCart,
    cartData,
    setCartData,
    getCartData,
    searchData,
    setSearchData,
    windowWidth,
    isOpenNav,
    setIsOpenNav,
    productData,
    useLanguage,
    handleLoading
    
  }


  return (
    <MyContext.Provider value={values}>
      {children}
    </MyContext.Provider>
  )
}

export default ThemeProvider;