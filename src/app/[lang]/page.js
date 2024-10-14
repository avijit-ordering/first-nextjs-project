/* eslint-disable */
"use client";

import Button from "@mui/material/Button";
import { IoIosArrowRoundForward } from "react-icons/io";
import React, { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import ProductItem from "@/Components/ProductItem";
import HomeCat from "@/Components/HomeCat";

import CircularProgress from "@mui/material/CircularProgress";
import Link from "next/link";
import { MyContext } from "@/context/ThemeContext";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { fetchDataFromApi } from "@/utils/api";
import HomeBanner from "@/Components/HomeBanner";
import Image from "next/image";

import homeBannerPlaceholder from "../../assets/images/homeBannerPlaceholder.jpg";
import Banners from "@/Components/banners";
import { getDictionary } from "../../../getDictionary"


export default function Home({params}) {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [productsData, setProductsData] = useState([]);
  const [selectedCat, setselectedCat] = useState();
  const [filterData, setFilterData] = useState([]);
  const [homeSlides, setHomeSlides] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [value, setValue] = React.useState(0);

  const [bannerList, setBannerList] = useState([]);
  const [randomCatProducts, setRandomCatProducts] = useState([]);
  const [homeSideBanners, setHomeSideBanners] = useState([]);
  const [homeBottomBanners, setHomeBottomBanners] = useState([]);

  // const lang = await getDictionary(params.lang);
  // console.log(lang, 'params for home')

  useEffect(() => {
    const fetchData = async () => {
    const lang = await getDictionary(params.lang);
    
    }
    fetchData();

  },[])

  const context = useContext(MyContext);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const selectCat = (cat) => {
    setselectedCat(cat);
  };



  useEffect(() => {
    window.scrollTo(0, 0);

    setselectedCat(context.categoryData[0]?.name);

    const location = localStorage.getItem("location");
    if (location !== null && location !== "" && location !== undefined) {
      // fetchDataFromApi(`/api/products/featured?location=${location}`).then(
      //   (res) => {
          
      //     setFeaturedProducts(res);
      //   }
      // );

      const feature_product = '[{"_id":"66f51c8fe70c7b4030fb000e","name":"ADELINA","description":"A-line bridal dress made of high quality stretch crepe","images":["https://res.cloudinary.com/dwjcuweew/image/upload/v1727424484/1727424484762_bianco-evento-bridal-dress-adelina-_1_.jpg"],"brand":"Brandd","price":429.85,"oldPrice":577.76,"catName":"Dresses","catId":"66f517b1a53b62ebfb4dbc8d","subCatId":"66f517e9a53b62ebfb4dbc94","subCat":"Cuts & Sprouts","subCatName":"Cuts & Sprouts","category":"66f517b1a53b62ebfb4dbc8d","countInStock":10,"rating":2,"isFeatured":true,"discount":50,"productRam":["ramm"],"size":["S","M","L","XL","2XL"],"productWeight":["60"],"location":"All","dateCreated":"2024-09-26T08:34:23.412Z","__v":0,"id":"66f51c8fe70c7b4030fb000e"},{"_id":"66f5416f9cbc265e152f75d9","name":"AMALIA","description":"A-line bridal gown made from lace and chiffon","images":["https://res.cloudinary.com/dwjcuweew/image/upload/v1727427405/1727427405488_bianco-evento-bridal-dress-amalia-_1_.jpg"],"brand":"New","price":300,"oldPrice":450,"catName":"Dresses","catId":"66f517b1a53b62ebfb4dbc8d","subCatId":"","subCat":"","subCatName":"","category":"66f517b1a53b62ebfb4dbc8d","countInStock":2,"rating":4,"isFeatured":true,"discount":90,"productRam":["ramm"],"size":["M","L","XL","2XL","S"],"productWeight":["60"],"location":"All","dateCreated":"2024-09-26T11:11:43.009Z","__v":0,"id":"66f5416f9cbc265e152f75d9"},{"_id":"66f541ed9cbc265e152f75ed","name":"ASTRID","description":"Astrid is an elegant wedding jumpsuit made from stretch crepe and lace. This stylish sleeveless jumpsuit has a keyhole back and a scoop neckline with a natural waistline enhancing the silhouette. It features intricate lace embroidery adding refined beauty and epitomizing modern bridal elegance. All Bianco Evento jumpsuits are carefully designed in EU and manufactured in our in-house production facilities.","images":["https://res.cloudinary.com/dwjcuweew/image/upload/v1727427952/1727427951582_bianco-evento-bridal-jumpsuit-astrid-_1_.jpg"],"brand":"New","price":250,"oldPrice":400,"catName":"Dresses","catId":"66f517b1a53b62ebfb4dbc8d","subCatId":"","subCat":"","subCatName":"","category":"66f517b1a53b62ebfb4dbc8d","countInStock":12,"rating":4,"isFeatured":true,"discount":50,"productRam":["ramm"],"size":["S","M","L","XL","2XL"],"productWeight":["60"],"location":"All","dateCreated":"2024-09-26T11:13:49.126Z","__v":0,"id":"66f541ed9cbc265e152f75ed"}]'
      setFeaturedProducts(JSON.parse(feature_product));

      // fetchDataFromApi(
      //   `/api/products?page=1&perPage=8&location=${location}`
      // ).then((res) => {
      //   console.log('res')

      //   console.log(JSON.stringify(res))
      //   setProductsData(res);
      // });

      const pp1 = '[{"_id":"66f51c8fe70c7b4030fb000e","name":"ADELINA","description":"A-line bridal dress made of high quality stretch crepe","images":["https://res.cloudinary.com/dwjcuweew/image/upload/v1727424484/1727424484762_bianco-evento-bridal-dress-adelina-_1_.jpg"],"brand":"Brandd","price":429.85,"oldPrice":577.76,"catName":"Dresses","catId":"66f517b1a53b62ebfb4dbc8d","subCatId":"66f517e9a53b62ebfb4dbc94","subCat":"Cuts & Sprouts","subCatName":"Cuts & Sprouts","category":{"_id":"66f517b1a53b62ebfb4dbc8d","name":"Dresses","slug":"fruits-vegetables","images":["https://res.cloudinary.com/dwjcuweew/image/upload/v1727338415/1727338413453_logo512.png"],"color":"Red","createdAt":"2024-09-26T08:13:37.624Z","updatedAt":"2024-09-26T08:28:49.604Z","__v":0,"id":"66f517b1a53b62ebfb4dbc8d"},"countInStock":10,"rating":2,"isFeatured":true,"discount":50,"productRam":["ramm"],"size":["S","M","L","XL","2XL"],"productWeight":["60"],"location":"All","dateCreated":"2024-09-26T08:34:23.412Z","__v":0,"id":"66f51c8fe70c7b4030fb000e"},{"_id":"66f52b5be70c7b4030fb014b","name":"ADELINA Plus Sizes","description":"A-line bridal dress made of high quality stretch crepe","images":["https://res.cloudinary.com/dwjcuweew/image/upload/v1727427274/1727427275207_bianco-evento-bridal-dress-adelina-_2__1.jpg"],"brand":"New","price":200,"oldPrice":300,"catName":"Dresses","catId":"66f517b1a53b62ebfb4dbc8d","subCatId":"","subCat":"","subCatName":"","category":{"_id":"66f517b1a53b62ebfb4dbc8d","name":"Dresses","slug":"fruits-vegetables","images":["https://res.cloudinary.com/dwjcuweew/image/upload/v1727338415/1727338413453_logo512.png"],"color":"Red","createdAt":"2024-09-26T08:13:37.624Z","updatedAt":"2024-09-26T08:28:49.604Z","__v":0,"id":"66f517b1a53b62ebfb4dbc8d"},"countInStock":10,"rating":2,"isFeatured":false,"discount":12,"productRam":["ramm"],"size":["S","M","L","XL","2XL"],"productWeight":["60"],"location":"All","dateCreated":"2024-09-26T09:37:31.698Z","__v":0,"id":"66f52b5be70c7b4030fb014b"},{"_id":"66f5416f9cbc265e152f75d9","name":"AMALIA","description":"A-line bridal gown made from lace and chiffon","images":["https://res.cloudinary.com/dwjcuweew/image/upload/v1727427405/1727427405488_bianco-evento-bridal-dress-amalia-_1_.jpg"],"brand":"New","price":300,"oldPrice":450,"catName":"Dresses","catId":"66f517b1a53b62ebfb4dbc8d","subCatId":"","subCat":"","subCatName":"","category":{"_id":"66f517b1a53b62ebfb4dbc8d","name":"Dresses","slug":"fruits-vegetables","images":["https://res.cloudinary.com/dwjcuweew/image/upload/v1727338415/1727338413453_logo512.png"],"color":"Red","createdAt":"2024-09-26T08:13:37.624Z","updatedAt":"2024-09-26T08:28:49.604Z","__v":0,"id":"66f517b1a53b62ebfb4dbc8d"},"countInStock":2,"rating":4,"isFeatured":true,"discount":90,"productRam":["ramm"],"size":["M","L","XL","2XL","S"],"productWeight":["60"],"location":"All","dateCreated":"2024-09-26T11:11:43.009Z","__v":0,"id":"66f5416f9cbc265e152f75d9"},{"_id":"66f541ed9cbc265e152f75ed","name":"ASTRID","description":"Astrid is an elegant wedding jumpsuit made from stretch crepe and lace. This stylish sleeveless jumpsuit has a keyhole back and a scoop neckline with a natural waistline enhancing the silhouette. It features intricate lace embroidery adding refined beauty and epitomizing modern bridal elegance. All Bianco Evento jumpsuits are carefully designed in EU and manufactured in our in-house production facilities.","images":["https://res.cloudinary.com/dwjcuweew/image/upload/v1727427952/1727427951582_bianco-evento-bridal-jumpsuit-astrid-_1_.jpg"],"brand":"New","price":250,"oldPrice":400,"catName":"Dresses","catId":"66f517b1a53b62ebfb4dbc8d","subCatId":"","subCat":"","subCatName":"","category":{"_id":"66f517b1a53b62ebfb4dbc8d","name":"Dresses","slug":"fruits-vegetables","images":["https://res.cloudinary.com/dwjcuweew/image/upload/v1727338415/1727338413453_logo512.png"],"color":"Red","createdAt":"2024-09-26T08:13:37.624Z","updatedAt":"2024-09-26T08:28:49.604Z","__v":0,"id":"66f517b1a53b62ebfb4dbc8d"},"countInStock":12,"rating":4,"isFeatured":true,"discount":50,"productRam":["ramm"],"size":["S","M","L","XL","2XL"],"productWeight":["60"],"location":"All","dateCreated":"2024-09-26T11:13:49.126Z","__v":0,"id":"66f541ed9cbc265e152f75ed"},{"_id":"66f542669cbc265e152f7622","name":"CERSEY Plus Sizes","description":"Cersey is a modern wedding dress crafted from exquisite lace and pure tulle highlighting elegance with its stunning cathedral train. This bridal gown features a sophisticated low back and a graceful scoop neckline complemented by a natural waistline. The bodice is adorned with intricate leaf and floral patterned lace embroidery detailing making it a true standout. The elegant long illusion sleeves highlight timeless beauty with modern sophistication. All Bianco Evento dresses are carefully designed in EU and manufactured in our in-house production facilities.","images":["https://res.cloudinary.com/dwjcuweew/image/upload/v1727428022/1727428021799_bianco-evento-bridal-dress-cersey-_1__1.jpg"],"brand":"Quaker","price":600.85,"oldPrice":800,"catName":"Dresses","catId":"66f517b1a53b62ebfb4dbc8d","subCatId":"","subCat":"","subCatName":"","category":{"_id":"66f517b1a53b62ebfb4dbc8d","name":"Dresses","slug":"fruits-vegetables","images":["https://res.cloudinary.com/dwjcuweew/image/upload/v1727338415/1727338413453_logo512.png"],"color":"Red","createdAt":"2024-09-26T08:13:37.624Z","updatedAt":"2024-09-26T08:28:49.604Z","__v":0,"id":"66f517b1a53b62ebfb4dbc8d"},"countInStock":1,"rating":3,"isFeatured":false,"discount":50,"productRam":["ramm"],"size":["S","M","L","XL","2XL"],"productWeight":["60"],"location":"All","dateCreated":"2024-09-26T11:15:50.417Z","__v":0,"id":"66f542669cbc265e152f7622"},{"_id":"66f542c69cbc265e152f7648","name":"RAISA","description":"Raisa is an elegant A-line bridal skirt crafted from chiffon with a champagne lining. It features a natural waistline and a sophisticated slit. It has a sweeping train. All Bianco Evento skirts are carefully designed in EU and manufactured in our in-house production facilities.","images":["https://res.cloudinary.com/dwjcuweew/image/upload/v1727428064/1727428064421_bianco-evento-bridal-skirt-raisa-_1__1.jpg"],"brand":"New","price":175,"oldPrice":200,"catName":"Dresses","catId":"66f517b1a53b62ebfb4dbc8d","subCatId":"","subCat":"","subCatName":"","category":{"_id":"66f517b1a53b62ebfb4dbc8d","name":"Dresses","slug":"fruits-vegetables","images":["https://res.cloudinary.com/dwjcuweew/image/upload/v1727338415/1727338413453_logo512.png"],"color":"Red","createdAt":"2024-09-26T08:13:37.624Z","updatedAt":"2024-09-26T08:28:49.604Z","__v":0,"id":"66f517b1a53b62ebfb4dbc8d"},"countInStock":2,"rating":5,"isFeatured":false,"discount":15,"productRam":["ramm"],"size":["S","M","L","XL","2XL"],"productWeight":["60"],"location":"All","dateCreated":"2024-09-26T11:17:26.309Z","__v":0,"id":"66f542c69cbc265e152f7648"}]'
      const productsa = {
        'products': JSON.parse(pp1),
        'totalPages':1,
        'page':1     
      }
      
      setProductsData(productsa);
      //console.log(JSON.stringify(productsa))
    } else {
      // setselectedCountry("All");
      localStorage.setItem("location", "All");
    }

    // fetchDataFromApi("/api/homeBanner").then((res) => {    
    // console.log(JSON.stringify(res))

    //   setHomeSlides(res);
    // });

    const homeSlides = '[{"_id":"66f52a4fe70c7b4030fb0115","images":["https://res.cloudinary.com/dwjcuweew/image/upload/v1727343180/1727343179782_slideBanner1.jpg"],"__v":0,"id":"66f52a4fe70c7b4030fb0115"},{"_id":"66f52a56e70c7b4030fb011f","images":["https://res.cloudinary.com/dwjcuweew/image/upload/v1727343188/1727343187371_slideBanner2.jpg"],"__v":0,"id":"66f52a56e70c7b4030fb011f"}]'
    setHomeSlides(JSON.parse(homeSlides));

    // fetchDataFromApi("/api/banners").then((res) => {
    //   setBannerList(res);
    // });
    const banners1 = '[{"_id":"66f52923e70c7b4030fb0065","images":["https://res.cloudinary.com/dwjcuweew/image/upload/v1727342874/1727342873494_banner1.jpg"],"catId":"66f517b1a53b62ebfb4dbc8d","catName":"Dresses","subCatId":"66f517e9a53b62ebfb4dbc94","subCatName":"Cuts & Sprouts","__v":0,"id":"66f52923e70c7b4030fb0065"},{"_id":"66f5292fe70c7b4030fb006f","images":["https://res.cloudinary.com/dwjcuweew/image/upload/v1727342893/1727342892549_banner2.jpg"],"catId":"66f517b1a53b62ebfb4dbc8d","catName":"Dresses","subCatId":"66f517e9a53b62ebfb4dbc94","subCatName":"Cuts & Sprouts","__v":0,"id":"66f5292fe70c7b4030fb006f"}]'
    setBannerList(JSON.parse(banners1));


    // fetchDataFromApi("/api/homeSideBanners").then((res) => {
    //   setHomeSideBanners(res);
    // });
    const homeSlideBanners1 = '[{"_id":"66f5295fe70c7b4030fb0092","images":["https://res.cloudinary.com/dwjcuweew/image/upload/v1727343017/1727343016934_banner1.jpg"],"catId":"66f517b1a53b62ebfb4dbc8d","catName":null,"subCatId":"66f517e9a53b62ebfb4dbc94","subCatName":null,"__v":0,"id":"66f5295fe70c7b4030fb0092"},{"_id":"66f52972e70c7b4030fb00a0","images":["https://res.cloudinary.com/dwjcuweew/image/upload/v1727343026/1727343026587_banner2.jpg"],"catId":"66f517b1a53b62ebfb4dbc8d","catName":null,"subCatId":null,"subCatName":null,"__v":0,"id":"66f52972e70c7b4030fb00a0"}]'
    setHomeSideBanners(JSON.parse(homeSlideBanners1));


    // fetchDataFromApi("/api/homeBottomBanners").then((res) => {
    //   setHomeBottomBanners(res);
    // });

    const homeBottomBanner1 = '[{"_id":"66f529cfe70c7b4030fb00ee","images":["https://res.cloudinary.com/dwjcuweew/image/upload/v1727343052/1727343051870_banner3.jpg"],"catId":"66f517b1a53b62ebfb4dbc8d","catName":"Dresses","subCatId":null,"subCatName":null,"__v":0,"id":"66f529cfe70c7b4030fb00ee"}]'
    setHomeBottomBanners(JSON.parse(homeBottomBanner1));

   
  }, []);

  useEffect(() => {
    if (context.categoryData[0] !== undefined)
     {
      setselectedCat(context.categoryData[0].name);
     }


    if (context.categoryData?.length !== 0) {
      const randomIndex = Math.floor(
        Math.random() * context.categoryData.length
      );

     
      // fetchDataFromApi(
      //   `/api/products/catId?catId=${
      //     context.categoryData[randomIndex]?.id
      //   }&location=${localStorage.getItem("location")}`
      // ).then((res) => {
      //   console.log(JSON.stringify(res))
      //   setRandomCatProducts({
      //     catName: context.categoryData[randomIndex]?.name,
      //     catId: context.categoryData[randomIndex]?.id,
      //     products: res?.products,
      //   });
      // });

      const pp_cart = '[{"_id":"66f51c8fe70c7b4030fb000e","name":"ADELINA","description":"A-line bridal dress made of high quality stretch crepe","images":["https://res.cloudinary.com/dwjcuweew/image/upload/v1727424484/1727424484762_bianco-evento-bridal-dress-adelina-_1_.jpg"],"brand":"Brandd","price":429.85,"oldPrice":577.76,"catName":"Dresses","catId":"66f517b1a53b62ebfb4dbc8d","subCatId":"66f517e9a53b62ebfb4dbc94","subCat":"Cuts & Sprouts","subCatName":"Cuts & Sprouts","category":{"_id":"66f517b1a53b62ebfb4dbc8d","name":"Dresses","slug":"fruits-vegetables","images":["https://res.cloudinary.com/dwjcuweew/image/upload/v1727338415/1727338413453_logo512.png"],"color":"Red","createdAt":"2024-09-26T08:13:37.624Z","updatedAt":"2024-09-26T08:28:49.604Z","__v":0,"id":"66f517b1a53b62ebfb4dbc8d"},"countInStock":10,"rating":2,"isFeatured":true,"discount":50,"productRam":["ramm"],"size":["S","M","L","XL","2XL"],"productWeight":["60"],"location":"All","dateCreated":"2024-09-26T08:34:23.412Z","__v":0,"id":"66f51c8fe70c7b4030fb000e"},{"_id":"66f52b5be70c7b4030fb014b","name":"ADELINA Plus Sizes","description":"A-line bridal dress made of high quality stretch crepe","images":["https://res.cloudinary.com/dwjcuweew/image/upload/v1727427274/1727427275207_bianco-evento-bridal-dress-adelina-_2__1.jpg"],"brand":"New","price":200,"oldPrice":300,"catName":"Dresses","catId":"66f517b1a53b62ebfb4dbc8d","subCatId":"","subCat":"","subCatName":"","category":{"_id":"66f517b1a53b62ebfb4dbc8d","name":"Dresses","slug":"fruits-vegetables","images":["https://res.cloudinary.com/dwjcuweew/image/upload/v1727338415/1727338413453_logo512.png"],"color":"Red","createdAt":"2024-09-26T08:13:37.624Z","updatedAt":"2024-09-26T08:28:49.604Z","__v":0,"id":"66f517b1a53b62ebfb4dbc8d"},"countInStock":10,"rating":2,"isFeatured":false,"discount":12,"productRam":["ramm"],"size":["S","M","L","XL","2XL"],"productWeight":["60"],"location":"All","dateCreated":"2024-09-26T09:37:31.698Z","__v":0,"id":"66f52b5be70c7b4030fb014b"},{"_id":"66f5416f9cbc265e152f75d9","name":"AMALIA","description":"A-line bridal gown made from lace and chiffon","images":["https://res.cloudinary.com/dwjcuweew/image/upload/v1727427405/1727427405488_bianco-evento-bridal-dress-amalia-_1_.jpg"],"brand":"New","price":300,"oldPrice":450,"catName":"Dresses","catId":"66f517b1a53b62ebfb4dbc8d","subCatId":"","subCat":"","subCatName":"","category":{"_id":"66f517b1a53b62ebfb4dbc8d","name":"Dresses","slug":"fruits-vegetables","images":["https://res.cloudinary.com/dwjcuweew/image/upload/v1727338415/1727338413453_logo512.png"],"color":"Red","createdAt":"2024-09-26T08:13:37.624Z","updatedAt":"2024-09-26T08:28:49.604Z","__v":0,"id":"66f517b1a53b62ebfb4dbc8d"},"countInStock":2,"rating":4,"isFeatured":true,"discount":90,"productRam":["ramm"],"size":["M","L","XL","2XL","S"],"productWeight":["60"],"location":"All","dateCreated":"2024-09-26T11:11:43.009Z","__v":0,"id":"66f5416f9cbc265e152f75d9"},{"_id":"66f541ed9cbc265e152f75ed","name":"ASTRID","description":"Astrid is an elegant wedding jumpsuit made from stretch crepe and lace. This stylish sleeveless jumpsuit has a keyhole back and a scoop neckline with a natural waistline enhancing the silhouette. It features intricate lace embroidery adding refined beauty and epitomizing modern bridal elegance. All Bianco Evento jumpsuits are carefully designed in EU and manufactured in our in-house production facilities.","images":["https://res.cloudinary.com/dwjcuweew/image/upload/v1727427952/1727427951582_bianco-evento-bridal-jumpsuit-astrid-_1_.jpg"],"brand":"New","price":250,"oldPrice":400,"catName":"Dresses","catId":"66f517b1a53b62ebfb4dbc8d","subCatId":"","subCat":"","subCatName":"","category":{"_id":"66f517b1a53b62ebfb4dbc8d","name":"Dresses","slug":"fruits-vegetables","images":["https://res.cloudinary.com/dwjcuweew/image/upload/v1727338415/1727338413453_logo512.png"],"color":"Red","createdAt":"2024-09-26T08:13:37.624Z","updatedAt":"2024-09-26T08:28:49.604Z","__v":0,"id":"66f517b1a53b62ebfb4dbc8d"},"countInStock":12,"rating":4,"isFeatured":true,"discount":50,"productRam":["ramm"],"size":["S","M","L","XL","2XL"],"productWeight":["60"],"location":"All","dateCreated":"2024-09-26T11:13:49.126Z","__v":0,"id":"66f541ed9cbc265e152f75ed"},{"_id":"66f542669cbc265e152f7622","name":"CERSEY Plus Sizes","description":"Cersey is a modern wedding dress crafted from exquisite lace and pure tulle highlighting elegance with its stunning cathedral train. This bridal gown features a sophisticated low back and a graceful scoop neckline complemented by a natural waistline. The bodice is adorned with intricate leaf and floral patterned lace embroidery detailing making it a true standout. The elegant long illusion sleeves highlight timeless beauty with modern sophistication. All Bianco Evento dresses are carefully designed in EU and manufactured in our in-house production facilities.","images":["https://res.cloudinary.com/dwjcuweew/image/upload/v1727428022/1727428021799_bianco-evento-bridal-dress-cersey-_1__1.jpg"],"brand":"Quaker","price":600.85,"oldPrice":800,"catName":"Dresses","catId":"66f517b1a53b62ebfb4dbc8d","subCatId":"","subCat":"","subCatName":"","category":{"_id":"66f517b1a53b62ebfb4dbc8d","name":"Dresses","slug":"fruits-vegetables","images":["https://res.cloudinary.com/dwjcuweew/image/upload/v1727338415/1727338413453_logo512.png"],"color":"Red","createdAt":"2024-09-26T08:13:37.624Z","updatedAt":"2024-09-26T08:28:49.604Z","__v":0,"id":"66f517b1a53b62ebfb4dbc8d"},"countInStock":1,"rating":3,"isFeatured":false,"discount":50,"productRam":["ramm"],"size":["S","M","L","XL","2XL"],"productWeight":["60"],"location":"All","dateCreated":"2024-09-26T11:15:50.417Z","__v":0,"id":"66f542669cbc265e152f7622"},{"_id":"66f542c69cbc265e152f7648","name":"RAISA","description":"Raisa is an elegant A-line bridal skirt crafted from chiffon with a champagne lining. It features a natural waistline and a sophisticated slit. It has a sweeping train. All Bianco Evento skirts are carefully designed in EU and manufactured in our in-house production facilities.","images":["https://res.cloudinary.com/dwjcuweew/image/upload/v1727428064/1727428064421_bianco-evento-bridal-skirt-raisa-_1__1.jpg"],"brand":"New","price":175,"oldPrice":200,"catName":"Dresses","catId":"66f517b1a53b62ebfb4dbc8d","subCatId":"","subCat":"","subCatName":"","category":{"_id":"66f517b1a53b62ebfb4dbc8d","name":"Dresses","slug":"fruits-vegetables","images":["https://res.cloudinary.com/dwjcuweew/image/upload/v1727338415/1727338413453_logo512.png"],"color":"Red","createdAt":"2024-09-26T08:13:37.624Z","updatedAt":"2024-09-26T08:28:49.604Z","__v":0,"id":"66f517b1a53b62ebfb4dbc8d"},"countInStock":2,"rating":5,"isFeatured":false,"discount":15,"productRam":["ramm"],"size":["S","M","L","XL","2XL"],"productWeight":["60"],"location":"All","dateCreated":"2024-09-26T11:17:26.309Z","__v":0,"id":"66f542c69cbc265e152f7648"}]'
      
      const catID1 = {
        'page' : 1,
        'products': JSON.parse(pp_cart),
        'totalPages':1

      }

      setRandomCatProducts({
        catName: context.categoryData[randomIndex]?.name,
        catId: context.categoryData[randomIndex]?.id,
        products: catID1.products,
      });



    }
  }, [context.categoryData]);

  useEffect(() => {
    if (selectedCat !== undefined) {
      setFilterData([]);
      setIsLoading(false);
      // setIsLoading(true);
      // const location = localStorage.getItem("location");
      // fetchDataFromApi(
      //   `/api/products/catName?catName=${selectedCat}&location=${location}`
      // ).then((res) => {
      //   setFilterData(res.products);
      //   setIsLoading(false);       
      // });
    }
  }, [selectedCat]);

  return (
    <>

      <div className="marginTop"></div>
     
      {homeSlides?.length !== 0 ? (
        <HomeBanner data={homeSlides} />
      ) : (
        <div className="container mt-3">
          <div className="homeBannerSection">
            <Image
              src={homeBannerPlaceholder}
              className="w-100"
              width={1000}
              height={500}
              style={{ height: "auto" }}
              alt="placeholder"
            />
          </div>
        </div>
      )}

      {context.categoryData?.length !== 0 && (
        <HomeCat catData={context.categoryData} />
      )}

      <section className="homeProducts">
        <div className="container">
          <div className="row homeProductsRow">
            <div className="col-md-3">
              <div className="sticky">
         {homeSideBanners?.length !== 0 &&
                  homeSideBanners?.map((item, index) => {
                    return (
                      <div className="banner mb-3" key={index}>
                        {item?.subCatId !== null ? (
                          <Link
                            href={`/category/subCat/${item?.subCatId}`}
                            className="box"
                          >
                            <img
                              src={item?.images[0]}
                              className="w-100 transition"
                              alt="banner img"
                            />
                          </Link>
                        ) : (
                          <Link
                            href={`/category/${item?.catId}`}
                            className="box"
                          >
                            <img
                              src={item?.images[0]}
                              className="cursor w-100 transition"
                              alt="banner img"
                            />
                          </Link>
                        )}
                      </div>
                    );
                  })}
              </div>
            </div>

            <div className="col-md-9 productRow">
              {/* <div className="d-flex align-items-center res-flex-column">
                <div className="info" style={{ width: "35%" }}>
                  <h3 className="mb-0 hd">Popular Products</h3>
                  <p className="text-light text-sml mb-0">
                    Do not miss the current offers until the end of March.
                  </p>
                </div>

                <div
                  className="ml-auto d-flex align-items-center justify-content-end res-full"
                  style={{ width: "65%" }}
                >
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    className="filterTabs"
                  >
                    {context.categoryData?.map((item, index) => {
                      return (
                        <Tab
                          className="item"
                          label={item.name}
                          onClick={() => selectCat(item.name)}
                        />
                      );
                    })}
                  </Tabs>
                </div>
              </div> */}

              <div
                className="product_row w-100 mt-2"
                style={{ opacity: `${isLoading === true ? "0.5" : "1"}` }}
              >
                {/* {filterData?.length === 0 && (
                  <div
                    className="d-flex align-items-center justify-content-center"
                    style={{ minHeight: "300px" }}
                  >
                    <CircularProgress />
                  </div>
                )} */}

                {context.windowWidth > 992 ? (
                  <Swiper
                    slidesPerView={4}
                    spaceBetween={0}
                    navigation={true}
                    slidesPerGroup={context.windowWidth > 992 ? 3 : 1}
                    modules={[Navigation]}
                    className="mySwiper"
                  >
                    {filterData?.length !== 0 &&
                      filterData
                        ?.slice(0)
                        ?.reverse()
                        ?.map((item, index) => {
                          return (
                            <SwiperSlide key={index}>
                              <ProductItem item={item} />
                            </SwiperSlide>
                          );
                        })}
                    <SwiperSlide style={{ opacity: 0 }}>
                      <div className={`productItem`}></div>
                    </SwiperSlide>
                  </Swiper>
                ) : (
                  <div className="productScroller">
                    {filterData?.length !== 0 &&
                      filterData
                        ?.slice(0)
                        ?.reverse()
                        ?.map((item, index) => {
                          return <ProductItem item={item} key={index} />;
                        })}
                  </div>
                )}
              </div>

             
              <div className="d-flex align-items-center mt-2">
                <div className="info w-75">
                  <h3 className="mb-0 hd">NEW PRODUCTS</h3>
                  <p className="text-light text-sml mb-0">
                    New products with updated stocks.
                  </p>
                </div>
              </div>

              <div className="product_row productRow2 w-100 mt-4 d-flex productScroller ml-0 mr-0">
                {productsData?.products?.length === 0 && (
                  <div
                    className="d-flex align-items-center justify-content-center"
                    style={{ minHeight: "300px" }}
                  >
                    <CircularProgress />
                  </div>
                )}

                {productsData?.products?.length !== 0 &&
                  productsData?.products
                    ?.slice(0)
                    .reverse()
                    .map((item, index) => {
                      return <ProductItem key={index} item={item} />;
                    })}
              </div>


               {bannerList?.length !== 0 && (
                <Banners data={bannerList} col={3} />
              )}

              <div className="d-flex align-items-center mt-4">
                <div className="info">
                  <h3 className="mb-0 hd">featured products</h3>
                  <p className="text-light text-sml mb-0">
                    Do not miss the current offers until the end of March.
                  </p>
                </div>
              </div>

              {featuredProducts?.length === 0 && (
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{ minHeight: "300px" }}
                >
                  <CircularProgress />
                </div>
              )}

              <div className="product_row w-100 mt-2">
                {context.windowWidth > 992 ? (
                  <Swiper
                    slidesPerView={4}
                    spaceBetween={0}
                    navigation={true}
                    slidesPerGroup={context.windowWidth > 992 ? 3 : 1}
                    modules={[Navigation]}
                    className="mySwiper"
                    breakpoints={{
                      300: {
                        slidesPerView: 1,
                        spaceBetween: 5,
                      },
                      400: {
                        slidesPerView: 2,
                        spaceBetween: 5,
                      },
                      600: {
                        slidesPerView: 3,
                        spaceBetween: 5,
                      },
                      750: {
                        slidesPerView: 4,
                        spaceBetween: 5,
                      },
                    }}
                  >
                    {featuredProducts?.length !== 0 &&
                      featuredProducts
                        ?.slice(0)
                        ?.reverse()
                        ?.map((item, index) => {
                          return (
                            <SwiperSlide key={index}>
                              <ProductItem item={item} />
                            </SwiperSlide>
                          );
                        })}
                    <SwiperSlide style={{ opacity: 0 }}>
                      <div className={`productItem`}></div>
                    </SwiperSlide>
                  </Swiper>
                ) : (
                  <div className="productScroller">
                    {featuredProducts?.length !== 0 &&
                      featuredProducts
                        ?.slice(0)
                        ?.reverse()
                        ?.map((item, index) => {
                          return <ProductItem item={item} key={index} />;
                        })}
                  </div>
                )}
              </div>
            </div>
          </div>

           {bannerList?.length !== 0 && (
            <Banners data={homeBottomBanners} col={3} />
          )}

          
        </div>
      </section>



        <div className="container">
        {randomCatProducts?.length !== 0 && (
          <>
            <div className="d-flex align-items-center mt-1 pr-3">
              <div className="info">
                <h3 className="mb-0 hd">{randomCatProducts?.catName}</h3>
                <p className="text-light text-sml mb-0">
                  Do not miss the current offers until the end of March.
                </p>
              </div>

              <Link
                href={`/category/${randomCatProducts?.catId}`}
                className="ml-auto"
              >
                <Button className="viewAllBtn">
                  View All <IoIosArrowRoundForward />
                </Button>
              </Link>
            </div>

            {randomCatProducts?.length === 0 ? (
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ minHeight: "300px" }}
              >
                <CircularProgress />
              </div>
            ) : (
              <div className="product_row w-100 mt-2">
                {context.windowWidth > 992 ? (
                  <Swiper
                    slidesPerView={5}
                    spaceBetween={0}
                    navigation={true}
                    slidesPerGroup={context.windowWidth > 992 ? 3 : 1}
                    modules={[Navigation]}
                    className="mySwiper"
                    breakpoints={{
                      300: {
                        slidesPerView: 1,
                        spaceBetween: 5,
                      },
                      400: {
                        slidesPerView: 2,
                        spaceBetween: 5,
                      },
                      600: {
                        slidesPerView: 4,
                        spaceBetween: 5,
                      },
                      750: {
                        slidesPerView: 5,
                        spaceBetween: 5,
                      },
                    }}
                  >
                    {randomCatProducts?.length !== 0 &&
                      randomCatProducts?.products
                        ?.slice(0)
                        ?.reverse()
                        ?.map((item, index) => {
                          return (
                            <SwiperSlide key={index}>
                              <ProductItem item={item} />
                            </SwiperSlide>
                          );
                        })}

                    <SwiperSlide style={{ opacity: 0 }}>
                      <div className={`productItem`}></div>
                    </SwiperSlide>
                  </Swiper>
                ) : (
                  <div className="productScroller">
                    {randomCatProducts?.length !== 0 &&
                      randomCatProducts?.products
                        ?.slice(0)
                        ?.reverse()
                        ?.map((item, index) => {
                          return <ProductItem item={item} key={index} />;
                        })}
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>


    </>
  );
}
