"use client"
import Sidebar from '@/Components/Sidebar';
import Button from '@mui/material/Button';
import { IoIosMenu } from "react-icons/io";
import { CgMenuGridR } from "react-icons/cg";
import { HiViewGrid } from "react-icons/hi";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { FaAngleDown } from "react-icons/fa6";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useContext, useEffect, useState } from "react";
import ProductItem from '@/Components/ProductItem';
import Pagination from '@mui/material/Pagination';

import CircularProgress from '@mui/material/CircularProgress';
import { FaFilter } from "react-icons/fa";

import { MyContext } from '@/context/ThemeContext';
import { fetchDataFromApi } from '@/utils/api';



const Listing = ({ params }) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const [productView, setProductView] = useState('four');
    const [productData, setProductData] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    const [filterId, setFilterId] = useState("");
    const [isOpenFilter, setIsOpenFilter] = useState(false);

    const [isOpenFilterPanel, setIsOpenFilterPanel] = useState(false);


    const openDropdown = Boolean(anchorEl);

    const context = useContext(MyContext);

   

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const id = params.categoryId



    useEffect(() => {
        window.scrollTo(0, 0);

        let url = window.location.href;
       // let apiEndPoint = `/api/products/catId?catId=${id}&location=${localStorage.getItem("location")}&page=1&perPage=8`;


        setisLoading(true);
        // fetchDataFromApi(`${apiEndPoint}`).then((res) => {
        //     console.log(JSON.stringify(res))
        //     setProductData(res)
        //     setisLoading(false);
        // })
        const catid1 = '[{"_id":"66f51c8fe70c7b4030fb000e","name":"ADELINA","description":"A-line bridal dress made of high quality stretch crepe","images":["https://res.cloudinary.com/dwjcuweew/image/upload/v1727424484/1727424484762_bianco-evento-bridal-dress-adelina-_1_.jpg"],"brand":"Brandd","price":429.85,"oldPrice":577.76,"catName":"Dresses","catId":"66f517b1a53b62ebfb4dbc8d","subCatId":"66f517e9a53b62ebfb4dbc94","subCat":"Cuts & Sprouts","subCatName":"Cuts & Sprouts","category":{"_id":"66f517b1a53b62ebfb4dbc8d","name":"Dresses","slug":"fruits-vegetables","images":["https://res.cloudinary.com/dwjcuweew/image/upload/v1727338415/1727338413453_logo512.png"],"color":"Red","createdAt":"2024-09-26T08:13:37.624Z","updatedAt":"2024-09-26T08:28:49.604Z","__v":0,"id":"66f517b1a53b62ebfb4dbc8d"},"countInStock":10,"rating":2,"isFeatured":true,"discount":50,"productRam":["ramm"],"size":["S","M","L","XL","2XL"],"productWeight":["60"],"location":"All","dateCreated":"2024-09-26T08:34:23.412Z","__v":0,"id":"66f51c8fe70c7b4030fb000e"},{"_id":"66f52b5be70c7b4030fb014b","name":"ADELINA Plus Sizes","description":"A-line bridal dress made of high quality stretch crepe","images":["https://res.cloudinary.com/dwjcuweew/image/upload/v1727427274/1727427275207_bianco-evento-bridal-dress-adelina-_2__1.jpg"],"brand":"New","price":200,"oldPrice":300,"catName":"Dresses","catId":"66f517b1a53b62ebfb4dbc8d","subCatId":"","subCat":"","subCatName":"","category":{"_id":"66f517b1a53b62ebfb4dbc8d","name":"Dresses","slug":"fruits-vegetables","images":["https://res.cloudinary.com/dwjcuweew/image/upload/v1727338415/1727338413453_logo512.png"],"color":"Red","createdAt":"2024-09-26T08:13:37.624Z","updatedAt":"2024-09-26T08:28:49.604Z","__v":0,"id":"66f517b1a53b62ebfb4dbc8d"},"countInStock":10,"rating":2,"isFeatured":false,"discount":12,"productRam":["ramm"],"size":["S","M","L","XL","2XL"],"productWeight":["60"],"location":"All","dateCreated":"2024-09-26T09:37:31.698Z","__v":0,"id":"66f52b5be70c7b4030fb014b"},{"_id":"66f5416f9cbc265e152f75d9","name":"AMALIA","description":"A-line bridal gown made from lace and chiffon","images":["https://res.cloudinary.com/dwjcuweew/image/upload/v1727427405/1727427405488_bianco-evento-bridal-dress-amalia-_1_.jpg"],"brand":"New","price":300,"oldPrice":450,"catName":"Dresses","catId":"66f517b1a53b62ebfb4dbc8d","subCatId":"","subCat":"","subCatName":"","category":{"_id":"66f517b1a53b62ebfb4dbc8d","name":"Dresses","slug":"fruits-vegetables","images":["https://res.cloudinary.com/dwjcuweew/image/upload/v1727338415/1727338413453_logo512.png"],"color":"Red","createdAt":"2024-09-26T08:13:37.624Z","updatedAt":"2024-09-26T08:28:49.604Z","__v":0,"id":"66f517b1a53b62ebfb4dbc8d"},"countInStock":2,"rating":4,"isFeatured":true,"discount":90,"productRam":["ramm"],"size":["M","L","XL","2XL","S"],"productWeight":["60"],"location":"All","dateCreated":"2024-09-26T11:11:43.009Z","__v":0,"id":"66f5416f9cbc265e152f75d9"},{"_id":"66f541ed9cbc265e152f75ed","name":"ASTRID","description":"Astrid is an elegant wedding jumpsuit made from stretch crepe and lace. This stylish sleeveless jumpsuit has a keyhole back and a scoop neckline with a natural waistline enhancing the silhouette. It features intricate lace embroidery adding refined beauty and epitomizing modern bridal elegance. All Bianco Evento jumpsuits are carefully designed in EU and manufactured in our in-house production facilities.","images":["https://res.cloudinary.com/dwjcuweew/image/upload/v1727427952/1727427951582_bianco-evento-bridal-jumpsuit-astrid-_1_.jpg"],"brand":"New","price":250,"oldPrice":400,"catName":"Dresses","catId":"66f517b1a53b62ebfb4dbc8d","subCatId":"","subCat":"","subCatName":"","category":{"_id":"66f517b1a53b62ebfb4dbc8d","name":"Dresses","slug":"fruits-vegetables","images":["https://res.cloudinary.com/dwjcuweew/image/upload/v1727338415/1727338413453_logo512.png"],"color":"Red","createdAt":"2024-09-26T08:13:37.624Z","updatedAt":"2024-09-26T08:28:49.604Z","__v":0,"id":"66f517b1a53b62ebfb4dbc8d"},"countInStock":12,"rating":4,"isFeatured":true,"discount":50,"productRam":["ramm"],"size":["S","M","L","XL","2XL"],"productWeight":["60"],"location":"All","dateCreated":"2024-09-26T11:13:49.126Z","__v":0,"id":"66f541ed9cbc265e152f75ed"},{"_id":"66f542669cbc265e152f7622","name":"CERSEY Plus Sizes","description":"Cersey is a modern wedding dress crafted from exquisite lace and pure tulle highlighting elegance with its stunning cathedral train. This bridal gown features a sophisticated low back and a graceful scoop neckline complemented by a natural waistline. The bodice is adorned with intricate leaf and floral patterned lace embroidery detailing making it a true standout. The elegant long illusion sleeves highlight timeless beauty with modern sophistication. All Bianco Evento dresses are carefully designed in EU and manufactured in our in-house production facilities.","images":["https://res.cloudinary.com/dwjcuweew/image/upload/v1727428022/1727428021799_bianco-evento-bridal-dress-cersey-_1__1.jpg"],"brand":"Quaker","price":600.85,"oldPrice":800,"catName":"Dresses","catId":"66f517b1a53b62ebfb4dbc8d","subCatId":"","subCat":"","subCatName":"","category":{"_id":"66f517b1a53b62ebfb4dbc8d","name":"Dresses","slug":"fruits-vegetables","images":["https://res.cloudinary.com/dwjcuweew/image/upload/v1727338415/1727338413453_logo512.png"],"color":"Red","createdAt":"2024-09-26T08:13:37.624Z","updatedAt":"2024-09-26T08:28:49.604Z","__v":0,"id":"66f517b1a53b62ebfb4dbc8d"},"countInStock":1,"rating":3,"isFeatured":false,"discount":50,"productRam":["ramm"],"size":["S","M","L","XL","2XL"],"productWeight":["60"],"location":"All","dateCreated":"2024-09-26T11:15:50.417Z","__v":0,"id":"66f542669cbc265e152f7622"},{"_id":"66f542c69cbc265e152f7648","name":"RAISA","description":"Raisa is an elegant A-line bridal skirt crafted from chiffon with a champagne lining. It features a natural waistline and a sophisticated slit. It has a sweeping train. All Bianco Evento skirts are carefully designed in EU and manufactured in our in-house production facilities.","images":["https://res.cloudinary.com/dwjcuweew/image/upload/v1727428064/1727428064421_bianco-evento-bridal-skirt-raisa-_1__1.jpg"],"brand":"New","price":175,"oldPrice":200,"catName":"Dresses","catId":"66f517b1a53b62ebfb4dbc8d","subCatId":"","subCat":"","subCatName":"","category":{"_id":"66f517b1a53b62ebfb4dbc8d","name":"Dresses","slug":"fruits-vegetables","images":["https://res.cloudinary.com/dwjcuweew/image/upload/v1727338415/1727338413453_logo512.png"],"color":"Red","createdAt":"2024-09-26T08:13:37.624Z","updatedAt":"2024-09-26T08:28:49.604Z","__v":0,"id":"66f517b1a53b62ebfb4dbc8d"},"countInStock":2,"rating":5,"isFeatured":false,"discount":15,"productRam":["ramm"],"size":["S","M","L","XL","2XL"],"productWeight":["60"],"location":"All","dateCreated":"2024-09-26T11:17:26.309Z","__v":0,"id":"66f542c69cbc265e152f7648"}]'
        const catid2 = {
            'page' : 1,
            'products': JSON.parse(catid1),
            'totalPages' : 1
        }
        setisLoading(false);
        setProductData(catid2)
    }, [id]);


    const filterData = (catId) => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
        setFilterId(catId)
        setisLoading(true);

        fetchDataFromApi(`/api/products/catId?catId=${catId}&location=${localStorage.getItem("location")}&page=1&perPage=8`).then((res) => {
            setProductData(res);
            setisLoading(false);
        })
    }

    const filterByPrice = (price, catId, subCatId) => {

        setisLoading(true);
        

        if (filterId === "") {
            if (catId !== "" && catId !== null && catId !== undefined) {
                fetchDataFromApi(`/api/products/fiterByPrice?minPrice=${price[0]}&maxPrice=${price[1]}&catId=${catId}&location=${localStorage.getItem("location")}&page=1&perPage=8`).then((res) => {
                    setProductData(res)
                    setisLoading(false);
                    // window.scrollTo({
                    //     top: 0,
                    //     behavior: 'smooth',
                    // })
                })
            }
        }


        if(filterId!==""){
            fetchDataFromApi(`/api/products/fiterByPrice?minPrice=${price[0]}&maxPrice=${price[1]}&catId=${filterId}&location=${localStorage.getItem("location")}&page=1&perPage=8`).then((res) => {
                setProductData(res)
                setisLoading(false);
                // window.scrollTo({
                //     top: 0,
                //     behavior: 'smooth',
                // })
            })
    }

    }

    const filterByRating = (rating, catId, subCatId) => {
        console.log(catId, subCatId)
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
        setisLoading(true);

        if (catId !== "" && catId !== null && catId !== undefined) {
            fetchDataFromApi(`/api/products/rating?rating=${rating}&catId=${filterId!=="" ? filterId : catId}&location=${localStorage.getItem("location")}&page=1&perPage=8`).then((res) => {
                setProductData(res)
                setisLoading(false);
            })
        }



    }


    const handleChange = (event, value) => {
        setisLoading(true);
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
        fetchDataFromApi(`/api/products?category=${id}&page=${value}&perPage=6&location=${localStorage.getItem("location")}`).then((res) => {
            setProductData(res);
            setisLoading(false);
        })
    };


    const openFilters = () => {
        setIsOpenFilter(!isOpenFilter)
    }

    const showFilterPanel = () => {
        setIsOpenFilterPanel(!isOpenFilterPanel)
    }

    return (
        <>
        <div className='list-banner'>

        </div>
            <section className="product_Listing_Page">
                <div className="container">
                    <div className="productListing d-flex">
                    {
                        isOpenFilterPanel && context.categoryData?.length !== 0 &&
                        <Sidebar filterData={filterData} filterByPrice={filterByPrice} filterByRating={filterByRating} isOpenFilter={isOpenFilter} catId={params.categoryId} subCatId={params.subcatid} catData={context.categoryData}/>
                    }

                        <div className="content_right" style={{width: isOpenFilterPanel ? '78%' : '100%'}}>

                            <div className="showBy mt-0 mb-3 d-flex align-items-center">
                                <div className="d-flex align-items-center btnWrapper">
                                    <Button className={productView === 'one' && 'act'} onClick={() => setProductView('one')}><IoIosMenu />
                                    </Button>

                                    <Button className={productView === 'three' && 'act'} onClick={() => setProductView('three')}>
                                        <CgMenuGridR /></Button>
                                    <Button className={productView === 'four' && 'act'} onClick={() => setProductView('four')}><TfiLayoutGrid4Alt /></Button>
                                
                                
                                </div>
                                <div className={`show_hide_filter ${isOpenFilterPanel ? "filter-div" : "filter-div-reset"}`} onClick={()=>showFilterPanel()}><FaFilter />{' ' }{context.useLanguage('SHOWFILTER')}</div>
                                

                             {
                            //     <div className="ml-auto showByFilter">
                            //     <Button onClick={handleClick}>Show 9 <FaAngleDown /></Button>
                            //     <Menu
                            //         className="w-100 showPerPageDropdown"
                            //         id="basic-menu"
                            //         anchorEl={anchorEl}
                            //         open={openDropdown}
                            //         onClose={handleClose}
                            //         MenuListProps={{
                            //             'aria-labelledby': 'basic-button',
                            //         }}
                            //     >
                            //         <MenuItem onClick={handleClose}>10</MenuItem>
                            //         <MenuItem onClick={handleClose}>20</MenuItem>
                            //         <MenuItem onClick={handleClose}>30</MenuItem>
                            //         <MenuItem onClick={handleClose}>40</MenuItem>
                            //         <MenuItem onClick={handleClose}>50</MenuItem>
                            //         <MenuItem onClick={handleClose}>60</MenuItem>
                            //     </Menu>
                            // </div>
                             }
                            </div>


                            <div className="productListing">
                                {
                                    isLoading === true ?
                                        <div className="loading d-flex align-items-center justify-content-center">
                                            <CircularProgress color="inherit" />
                                        </div>
                                        :

                                        <>
                                            {
                                                productData?.products?.map((item, index) => {
                                                    return (
                                                        <ProductItem key={index} itemView={productView} item={item} />
                                                    )
                                                })
                                            }
                                        </>

                                }



                            </div>




                        </div>
                    </div>
                </div>
            </section>


            {
                context.windowWidth < 992 &&
                <>
                    {
                        context.isOpenNav === false &&
                        <div className="fixedBtn row">
                            <div className="col">
                                <Button className='btn-blue bg-red btn-lg btn-big' onClick={openFilters}>
                                    <FaFilter />
                                    {isOpenFilter === true ? 'Close Filters' : 'Open Filters'}

                                </Button>
                            </div>
                        </div>
                    }
                </>

            }


        </>
    )
}

export default Listing;