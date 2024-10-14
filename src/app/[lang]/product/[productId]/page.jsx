"use client"
import ProductZoom from '@/Components/ProductZoom';
import Rating from '@mui/material/Rating';
import QuantityBox from '@/Components/QuantityBox';
import Button from '@mui/material/Button';
import { BsCartFill } from "react-icons/bs";
import { useContext, useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineCompareArrows } from "react-icons/md";
import Tooltip from '@mui/material/Tooltip';
import RelatedProducts from "./RelatedProducts";

import CircularProgress from '@mui/material/CircularProgress';
import { MyContext } from "@/context/ThemeContext";
import { FaHeart } from "react-icons/fa";
import { fetchDataFromApi, postData } from "@/utils/api";
import Dialog from '@mui/material/Dialog';
import { MdClose } from "react-icons/md";
import Image from 'next/image';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';



const ProductDetails = ({params}) => {

    const [activeSize, setActiveSize] = useState(null);
    const [activeTabs, setActiveTabs] = useState(0);
    const [productData, setProductData] = useState([]);
    const [relatedProductData, setRelatedProductData] = useState([]);
    const [recentlyViewdProducts, setRecentlyViewdProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [reviewsData, setreviewsData] = useState([]);
    const [isAddedToMyList, setSsAddedToMyList] = useState(false);

    const [isOpenImageModal, setIsOpenImageModal] = useState(false);
    const [largeImage, setLargeImage] = useState('');


    let [cartFields, setCartFields] = useState({});
    let [productQuantity, setProductQuantity] = useState();
    const [tabError, setTabError] = useState(false);

    const id = params.productId;

    const context = useContext(MyContext);

    const isActive = (index) => {
        setActiveSize(index);
        setTabError(false);
    }

    const handleImage = (img) => {
        setIsOpenImageModal(true)
        setLargeImage(img)
    }



    useEffect(() => {
        window.scrollTo(0, 0);
        setActiveSize(null);


        const ppdcts1 = '{"_id":"66f5416f9cbc265e152f75d9","name":"AMALIA","description":"A-line bridal gown made from lace and chiffon","images":["https://res.cloudinary.com/dwjcuweew/image/upload/v1727427405/1727427405488_bianco-evento-bridal-dress-amalia-_1_.jpg"],"brand":"New","price":300,"oldPrice":450,"catName":"Dresses","catId":"66f517b1a53b62ebfb4dbc8d","subCatId":"","subCat":"","subCatName":"","category":{"_id":"66f517b1a53b62ebfb4dbc8d","name":"Dresses","slug":"fruits-vegetables","images":["https://res.cloudinary.com/dwjcuweew/image/upload/v1727338415/1727338413453_logo512.png"],"color":"Red","createdAt":"2024-09-26T08:13:37.624Z","updatedAt":"2024-09-26T08:28:49.604Z","__v":0,"id":"66f517b1a53b62ebfb4dbc8d"},"countInStock":2,"rating":4,"isFeatured":true,"discount":90,"productRam":["ramm"],"size":["M","L","XL","2XL","S"],"productWeight":["60"],"location":"All","dateCreated":"2024-09-26T11:11:43.009Z","__v":0,"id":"66f5416f9cbc265e152f75d9"}'
        const ppdcts2 = JSON.parse(ppdcts1)
        setProductData(ppdcts2);
        if (ppdcts2?.productRam.length === 0 && ppdcts2?.productWeight.length === 0 && ppdcts2?.size.length === 0) {
            setActiveSize(1);
        }

        const subcat1 = '[{"_id":"66f51c8fe70c7b4030fb000e","name":"ADELINA","description":"A-line bridal dress made of high quality stretch crepe","images":["https://res.cloudinary.com/dwjcuweew/image/upload/v1727424484/1727424484762_bianco-evento-bridal-dress-adelina-_1_.jpg"],"brand":"Brandd","price":429.85,"oldPrice":577.76,"catName":"Dresses","catId":"66f517b1a53b62ebfb4dbc8d","subCatId":"66f517e9a53b62ebfb4dbc94","subCat":"Cuts & Sprouts","subCatName":"Cuts & Sprouts","category":{"_id":"66f517b1a53b62ebfb4dbc8d","name":"Dresses","slug":"fruits-vegetables","images":["https://res.cloudinary.com/dwjcuweew/image/upload/v1727338415/1727338413453_logo512.png"],"color":"Red","createdAt":"2024-09-26T08:13:37.624Z","updatedAt":"2024-09-26T08:28:49.604Z","__v":0,"id":"66f517b1a53b62ebfb4dbc8d"},"countInStock":10,"rating":2,"isFeatured":true,"discount":50,"productRam":["ramm"],"size":["S","M","L","XL","2XL"],"productWeight":["60"],"location":"All","dateCreated":"2024-09-26T08:34:23.412Z","__v":0,"id":"66f51c8fe70c7b4030fb000e"},{"_id":"66f52b5be70c7b4030fb014b","name":"ADELINA Plus Sizes","description":"A-line bridal dress made of high quality stretch crepe","images":["https://res.cloudinary.com/dwjcuweew/image/upload/v1727427274/1727427275207_bianco-evento-bridal-dress-adelina-_2__1.jpg"],"brand":"New","price":200,"oldPrice":300,"catName":"Dresses","catId":"66f517b1a53b62ebfb4dbc8d","subCatId":"","subCat":"","subCatName":"","category":{"_id":"66f517b1a53b62ebfb4dbc8d","name":"Dresses","slug":"fruits-vegetables","images":["https://res.cloudinary.com/dwjcuweew/image/upload/v1727338415/1727338413453_logo512.png"],"color":"Red","createdAt":"2024-09-26T08:13:37.624Z","updatedAt":"2024-09-26T08:28:49.604Z","__v":0,"id":"66f517b1a53b62ebfb4dbc8d"},"countInStock":10,"rating":2,"isFeatured":false,"discount":12,"productRam":["ramm"],"size":["S","M","L","XL","2XL"],"productWeight":["60"],"location":"All","dateCreated":"2024-09-26T09:37:31.698Z","__v":0,"id":"66f52b5be70c7b4030fb014b"},{"_id":"66f5416f9cbc265e152f75d9","name":"AMALIA","description":"A-line bridal gown made from lace and chiffon","images":["https://res.cloudinary.com/dwjcuweew/image/upload/v1727427405/1727427405488_bianco-evento-bridal-dress-amalia-_1_.jpg"],"brand":"New","price":300,"oldPrice":450,"catName":"Dresses","catId":"66f517b1a53b62ebfb4dbc8d","subCatId":"","subCat":"","subCatName":"","category":{"_id":"66f517b1a53b62ebfb4dbc8d","name":"Dresses","slug":"fruits-vegetables","images":["https://res.cloudinary.com/dwjcuweew/image/upload/v1727338415/1727338413453_logo512.png"],"color":"Red","createdAt":"2024-09-26T08:13:37.624Z","updatedAt":"2024-09-26T08:28:49.604Z","__v":0,"id":"66f517b1a53b62ebfb4dbc8d"},"countInStock":2,"rating":4,"isFeatured":true,"discount":90,"productRam":["ramm"],"size":["M","L","XL","2XL","S"],"productWeight":["60"],"location":"All","dateCreated":"2024-09-26T11:11:43.009Z","__v":0,"id":"66f5416f9cbc265e152f75d9"},{"_id":"66f541ed9cbc265e152f75ed","name":"ASTRID","description":"Astrid is an elegant wedding jumpsuit made from stretch crepe and lace. This stylish sleeveless jumpsuit has a keyhole back and a scoop neckline with a natural waistline enhancing the silhouette. It features intricate lace embroidery adding refined beauty and epitomizing modern bridal elegance. All Bianco Evento jumpsuits are carefully designed in EU and manufactured in our in-house production facilities.","images":["https://res.cloudinary.com/dwjcuweew/image/upload/v1727427952/1727427951582_bianco-evento-bridal-jumpsuit-astrid-_1_.jpg"],"brand":"New","price":250,"oldPrice":400,"catName":"Dresses","catId":"66f517b1a53b62ebfb4dbc8d","subCatId":"","subCat":"","subCatName":"","category":{"_id":"66f517b1a53b62ebfb4dbc8d","name":"Dresses","slug":"fruits-vegetables","images":["https://res.cloudinary.com/dwjcuweew/image/upload/v1727338415/1727338413453_logo512.png"],"color":"Red","createdAt":"2024-09-26T08:13:37.624Z","updatedAt":"2024-09-26T08:28:49.604Z","__v":0,"id":"66f517b1a53b62ebfb4dbc8d"},"countInStock":12,"rating":4,"isFeatured":true,"discount":50,"productRam":["ramm"],"size":["S","M","L","XL","2XL"],"productWeight":["60"],"location":"All","dateCreated":"2024-09-26T11:13:49.126Z","__v":0,"id":"66f541ed9cbc265e152f75ed"},{"_id":"66f542669cbc265e152f7622","name":"CERSEY Plus Sizes","description":"Cersey is a modern wedding dress crafted from exquisite lace and pure tulle highlighting elegance with its stunning cathedral train. This bridal gown features a sophisticated low back and a graceful scoop neckline complemented by a natural waistline. The bodice is adorned with intricate leaf and floral patterned lace embroidery detailing making it a true standout. The elegant long illusion sleeves highlight timeless beauty with modern sophistication. All Bianco Evento dresses are carefully designed in EU and manufactured in our in-house production facilities.","images":["https://res.cloudinary.com/dwjcuweew/image/upload/v1727428022/1727428021799_bianco-evento-bridal-dress-cersey-_1__1.jpg"],"brand":"Quaker","price":600.85,"oldPrice":800,"catName":"Dresses","catId":"66f517b1a53b62ebfb4dbc8d","subCatId":"","subCat":"","subCatName":"","category":{"_id":"66f517b1a53b62ebfb4dbc8d","name":"Dresses","slug":"fruits-vegetables","images":["https://res.cloudinary.com/dwjcuweew/image/upload/v1727338415/1727338413453_logo512.png"],"color":"Red","createdAt":"2024-09-26T08:13:37.624Z","updatedAt":"2024-09-26T08:28:49.604Z","__v":0,"id":"66f517b1a53b62ebfb4dbc8d"},"countInStock":1,"rating":3,"isFeatured":false,"discount":50,"productRam":["ramm"],"size":["S","M","L","XL","2XL"],"productWeight":["60"],"location":"All","dateCreated":"2024-09-26T11:15:50.417Z","__v":0,"id":"66f542669cbc265e152f7622"},{"_id":"66f542c69cbc265e152f7648","name":"RAISA","description":"Raisa is an elegant A-line bridal skirt crafted from chiffon with a champagne lining. It features a natural waistline and a sophisticated slit. It has a sweeping train. All Bianco Evento skirts are carefully designed in EU and manufactured in our in-house production facilities.","images":["https://res.cloudinary.com/dwjcuweew/image/upload/v1727428064/1727428064421_bianco-evento-bridal-skirt-raisa-_1__1.jpg"],"brand":"New","price":175,"oldPrice":200,"catName":"Dresses","catId":"66f517b1a53b62ebfb4dbc8d","subCatId":"","subCat":"","subCatName":"","category":{"_id":"66f517b1a53b62ebfb4dbc8d","name":"Dresses","slug":"fruits-vegetables","images":["https://res.cloudinary.com/dwjcuweew/image/upload/v1727338415/1727338413453_logo512.png"],"color":"Red","createdAt":"2024-09-26T08:13:37.624Z","updatedAt":"2024-09-26T08:28:49.604Z","__v":0,"id":"66f517b1a53b62ebfb4dbc8d"},"countInStock":2,"rating":5,"isFeatured":false,"discount":15,"productRam":["ramm"],"size":["S","M","L","XL","2XL"],"productWeight":["60"],"location":"All","dateCreated":"2024-09-26T11:17:26.309Z","__v":0,"id":"66f542c69cbc265e152f7648"}]'
        const subcat2 = JSON.parse(subcat1);
        const filteredData = subcat2?.products?.filter(item => item.id !== id);
        setRelatedProductData(filteredData)

        // fetchDataFromApi(`/api/products/${id}`).then((res) => {           
           
        //     setProductData(res);

        //     if (res?.productRam.length === 0 && res?.productWeight.length === 0 && res?.size.length === 0) {
        //         setActiveSize(1);
        //     }

        //     fetchDataFromApi(`/api/products?subCatId=${res?.subCatId}`)
        //         .then((res) => {
        //             console.log('sub cat')
        //             console.log(JSON.stringify(res))

        //             const filteredData = res?.products?.filter(item => item.id !== id);
        //             setRelatedProductData(filteredData)
        //         })



        // })


        // fetchDataFromApi(`/api/productReviews?productId=${id}`).then((res) => {
        //     setreviewsData(res)
        // })

        setreviewsData([])


        const user = JSON.parse(localStorage.getItem("user"));

        // fetchDataFromApi(`/api/my-list?productId=${id}&userId=${user?.userId}`).then((res) => {
        //     if (res.length !== 0) {
        //         setSsAddedToMyList(true);
        //     }
        // })

        if(user && user?.userId){
            setSsAddedToMyList([]);
        }

    }, [id]);


    const [rating, setRating] = useState(1);
    const [reviews, setReviews] = useState({
        productId: "",
        customerName: "",
        customerId: "",
        review: "",
        customerRating: 0
    });

    const onChangeInput = (e) => {
        setReviews(() => ({
            ...reviews,
            [e.target.name]: e.target.value
        }))
    }

    const changeRating = (e) => {
        setRating(e.target.value)
        reviews.customerRating = e.target.value
    }

    const addReview = (e) => {
        e.preventDefault();

        const user = JSON.parse(localStorage.getItem("user"));

        reviews.customerName = user?.name;
        reviews.customerId = user?.userId;
        reviews.productId = id

        setIsLoading(true);

        postData("/api/productReviews/add", reviews).then((res) => {
            setIsLoading(false);

            reviews.customerRating = 1;

            setReviews({
                review: "",
                customerRating: 1
            })

            fetchDataFromApi(`/api/productReviews?productId=${id}`).then((res) => {
                setreviewsData(res);
            })
        })

    }

    const quantity = (val) => {
        setProductQuantity(val)
    }

    const addtoCart = () => {

        if (activeSize !== null) {

            const user = JSON.parse(localStorage.getItem("user"));

            cartFields.productTitle = productData?.name
            cartFields.image = productData?.images[0]
            cartFields.rating = productData?.rating
            cartFields.price = productData?.price
            cartFields.quantity = productQuantity
            cartFields.subTotal = parseInt(productData?.price * productQuantity)
            cartFields.productId = productData?.id
            cartFields.countInStock = productData?.countInStock
            cartFields.userId = user?.userId


            context.addToCart(cartFields);
        } else {
            setTabError(true);
        }

    }

    const selectedItem = () => {

    }



    const gotoReviews = () => {
        window.scrollTo({
            top: 550,
            behavior: 'smooth',
        })

        setActiveTabs(2)
    }

    const handleActive = (index) => {
        isActive(index)
        console.log(productData)
        setProductData(prevState => ({
            ...prevState,
            price: index == 1 ? prevState.price : (index >2 ? 300 : 200)
        }));
        //setProductData()
    }


    const addToMyList = (id) => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user !== undefined && user !== null && user !== "") {
            const data = {
                productTitle: productData?.name,
                image: productData?.images[0],
                rating: productData?.rating,
                price: productData?.price,
                productId: id,
                userId: user?.userId
            }
            postData(`/api/my-list/add/`, data).then((res) => {
                if (res.status !== false) {
                    context.setAlertBox({
                        open: true,
                        error: false,
                        msg: "the product added in my list"
                    })

            
                    fetchDataFromApi(`/api/my-list?productId=${id}&userId=${user?.userId}`).then((res) => {
                        if (res.length !== 0) {
                            setSsAddedToMyList(true);
                        }
                    })


                } else {
                    context.setAlertBox({
                        open: true,
                        error: true,
                        msg: res.msg
                    })
                }

            })
        } else {
            context.setAlertBox({
                open: true,
                error: true,
                msg: "Please Login to continue"
            })
        }

    }



    return (
        <>
        <Dialog 
       
        open={isOpenImageModal}
        className="imageModal" 
        >
            {/* <h4 className="mb-1 font-weight-bold pr-5 mb-4">Products</h4> */}
            <Button className='close_' onClick={() => setIsOpenImageModal(false)}><MdClose /></Button>
            <div  >
                
                <div className="imageWrapper">
                        <InnerImageZoom
                            zoomType="hover" zoomScale={2}
                            src={largeImage} />
                </div>
            </div>


        </Dialog>
        {productData?.length === 0 ? (
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ minHeight: "300px" }}
            >
              <CircularProgress />
            </div>
          ) :

            <section className="productDetails section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 pl-5 part1">
                            <ProductZoom images={productData?.images} discount={productData?.discount}  handleImage={handleImage} />
                        </div>

                        <div className="col-md-7 pl-5 pr-5 part2">
                            <h2 className="hd text-capitalize">{productData?.name}</h2>
                            <ul className="list list-inline d-flex align-items-center">
                                <li className="list-inline-item">
                                    <div className="d-flex align-items-center">
                                        <span className="text-light mr-2">Brands : </span>
                                        <span>{productData?.brand}</span>
                                    </div>
                                </li>

                                <li className="list-inline-item">
                                    <div className="d-flex align-items-center">
                                        <Rating name="read-only" value={parseInt(productData?.rating)} precision={0.5} readOnly size="small" />

                                        <span className="text-light cursor ml-2" onClick={gotoReviews}>{reviewsData?.length} Review</span>
                                    </div>
                                </li>

                            </ul>



                            <div className="d-flex info mb-3">
                                <span className="oldPrice">Rs: {productData?.oldPrice}</span>
                                <span className="netPrice text-danger ml-2">Rs: {productData?.price}</span>
                            </div>

                            {
                                productData?.countInStock >= 1 ?
                                    <span className="badge badge-success">{context.useLanguage('IN_STOCK')}</span>
                                    :
                                    <span className="badge badge-danger">OUT OF STOCK</span>
                            }



                            <p className="mt-3">Rs: {productData?.description}
                            </p>


                            {/* {
                                productData?.productRam?.length !== 0 &&
                                <div className='productSize d-flex align-items-center'>
                                    <span>RAM:</span>
                                    <ul className={`list list-inline mb-0 pl-4 ${tabError === true && 'error'}`}>
                                        {
                                            productData?.productRam?.map((item, index) => {
                                                return (
                                                    <li className='list-inline-item'><a className={`tag ${activeSize === index ? 'active' : ''}`} onClick={() => isActive(index)}>{item}</a></li>
                                                )
                                            })
                                        }

                                    </ul>
                                </div>
                            } */}


                            {
                                productData?.size?.length !== 0 &&
                                <div className='productSize d-flex align-items-center'>
                                    <span>Size:</span>
                                    <ul className={`list list-inline mb-0 pl-4 ${tabError === true && 'error'}`}>
                                        {
                                            productData?.size?.map((item, index) => {
                                                return (
                                                    <li className='list-inline-item'><a className={`tag ${activeSize === index ? 'active' : ''}`} onClick={() => handleActive(index)}>{item}</a></li>
                                                )
                                            })
                                        }

                                    </ul>
                                </div>
                            }


                            {/* {
                                productData?.productWeight?.length !== 0 &&
                                <div className='productSize d-flex align-items-center'>
                                    <span>Weight:</span>
                                    <ul className={`list list-inline mb-0 pl-4 ${tabError === true && 'error'}`}>
                                        {
                                            productData?.productWeight?.map((item, index) => {
                                                return (
                                                    <li className='list-inline-item'><a className={`tag ${activeSize === index ? 'active' : ''}`} onClick={() => isActive(index)}>{item}</a></li>
                                                )
                                            })
                                        }

                                    </ul>
                                </div>
                            } */}


                            <div className="d-flex align-items-center mt-3 actions_">
                                <QuantityBox quantity={quantity} item={productData} selectedItem={selectedItem} value={1} />

                                <div className="d-flex align-items-center btnActions">
                                <Button className="btn-blue btn-lg btn-big btn-round bg-red" onClick={() => addtoCart()}>
                                    <BsCartFill /> &nbsp;
                                    {
                                        context.addingInCart === true ? "adding..." : " Add to cart"
                                    }

                                </Button>

                                <Tooltip title={`${isAddedToMyList === true ? 'Added to Wishlist' : 'Add to Wishlist'}`} placement="top">
                                    <Button className={`btn-blue btn-lg btn-big btn-circle ml-4`} onClick={() => addToMyList(id)}>
                                        {
                                            isAddedToMyList === true ? <FaHeart className="text-danger" />

                                                :
                                                <FaRegHeart />
                                        }

                                    </Button>
                                </Tooltip>

                                {/* <Tooltip title="Add to Compare" placement="top">
                                    <Button className="btn-blue btn-lg btn-big btn-circle ml-2">
                                        <MdOutlineCompareArrows />
                                    </Button>
                                </Tooltip> */}

                                </div>

                            </div>


                        </div>
                    </div>


                    <br />



                    <div className='card mt-5 p-5 detailsPageTabs'>
                        <div className='customTabs'>
                            <ul className='list list-inline'>
                                <li className='list-inline-item'>
                                    <Button className={`${activeTabs === 0 && 'active'}`}
                                        onClick={() => {
                                            setActiveTabs(0)
                                        }}
                                    >Description</Button>
                                </li>
                                <li className='list-inline-item'>
                                    <Button className={`${activeTabs === 1 && 'active'}`}
                                        onClick={() => {
                                            setActiveTabs(1)

                                        }}
                                    >Additional info</Button>
                                </li>
                                <li className='list-inline-item'>
                                    <Button className={`${activeTabs === 2 && 'active'}`}
                                        onClick={() => {
                                            setActiveTabs(2)

                                        }}
                                    >Reviews ({reviewsData?.length})</Button>
                                </li>

                            </ul>


                            <br />

                            {
                                activeTabs === 0 &&
                                <div className='tabContent'>
                                    {productData?.description}
                                </div>

                            }


                            {
                                activeTabs === 1 &&

                                <div className='tabContent'>
                                    <div className='table-responsive'>
                                        <table className='table table-bordered'>
                                            <tbody>
                                                <tr className="stand-up">
                                                    <th>Stand Up</th>
                                                    <td>
                                                        <p>35″L x 24″W x 37-45″H(front to back wheel)</p>
                                                    </td>
                                                </tr>
                                                <tr className="folded-wo-wheels">
                                                    <th>Folded (w/o wheels)</th>
                                                    <td>
                                                        <p>32.5″L x 18.5″W x 16.5″H</p>
                                                    </td>
                                                </tr>
                                                <tr className="folded-w-wheels">
                                                    <th>Folded (w/ wheels)</th>
                                                    <td>
                                                        <p>32.5″L x 24″W x 18.5″H</p>
                                                    </td>
                                                </tr>
                                                <tr className="door-pass-through">
                                                    <th>Door Pass Through</th>
                                                    <td>
                                                        <p>24</p>
                                                    </td>
                                                </tr>
                                                <tr className="frame">
                                                    <th>Frame</th>
                                                    <td>
                                                        <p>Aluminum</p>
                                                    </td>
                                                </tr>
                                                <tr className="weight-wo-wheels">
                                                    <th>Weight (w/o wheels)</th>
                                                    <td>
                                                        <p>20 LBS</p>
                                                    </td>
                                                </tr>
                                                <tr className="weight-capacity">
                                                    <th>Weight Capacity</th>
                                                    <td>
                                                        <p>60 LBS</p>
                                                    </td>
                                                </tr>
                                                <tr className="width">
                                                    <th>Width</th>
                                                    <td>
                                                        <p>24″</p>
                                                    </td>
                                                </tr>
                                                <tr className="handle-height-ground-to-handle">
                                                    <th>Handle height (ground to handle)</th>
                                                    <td>
                                                        <p>37-45″</p>
                                                    </td>
                                                </tr>
                                                <tr className="wheels">
                                                    <th>Wheels</th>
                                                    <td>
                                                        <p>12″ air / wide track slick tread</p>
                                                    </td>
                                                </tr>
                                                <tr className="seat-back-height">
                                                    <th>Seat back height</th>
                                                    <td>
                                                        <p>21.5″</p>
                                                    </td>
                                                </tr>
                                                <tr className="head-room-inside-canopy">
                                                    <th>Head room (inside canopy)</th>
                                                    <td>
                                                        <p>25″</p>
                                                    </td>
                                                </tr>
                                                <tr className="pa_color">
                                                    <th>Color</th>
                                                    <td>
                                                        <p>Black, Blue, Red, White</p>
                                                    </td>
                                                </tr>
                                                <tr className="pa_size">
                                                    <th>Size</th>
                                                    <td>
                                                        <p>M, S</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            }



                            {
                                activeTabs === 2 &&

                                <div className='tabContent'>
                                    <div className='row'>
                                        <div className='col-md-8'>
                                            <h3>Customer questions & answers</h3>
                                            <br />



                                            {
                                                reviewsData?.length !== 0 && reviewsData?.slice(0)?.reverse()?.map((item, index) => {
                                                    return (
                                                        <div className='reviewBox mb-4 border-bottom' key={index}>

                                                            <div className='info'>
                                                                <div className='d-flex align-items-center w-100'>
                                                                    <h5>{item?.customerName}</h5>

                                                                    <div className='ml-auto'>
                                                                        <Rating name="half-rating-read"
                                                                            value={item?.customerRating} readOnly size="small" />
                                                                    </div>
                                                                </div>

                                                                <h6 className='text-light'>{item?.dateCreated}</h6>

                                                                <p>{item?.review} </p>
                                                            </div>

                                                        </div>

                                                    )
                                                })
                                            }



                                            <br className='res-hide' />


                                            <form className='reviewForm' onSubmit={addReview}>

                                                <h4>Add a review</h4>
                                                <div className='form-group'>
                                                    <textarea className='form-control shadow' placeholder='Write a Review'
                                                        name='review' value={reviews.review} onChange={onChangeInput} ></textarea>
                                                </div>

                                                <div className='row'>

                                                    <div className='col-md-6'>
                                                        <div className='form-group'>
                                                            <Rating name="rating" value={rating} precision={0.5}
                                                                onChange={changeRating}
                                                            />
                                                        </div>
                                                    </div>

                                                </div>


                                                <br />
                                                <div className='form-group mb-0'>
                                                    <Button type='submit' className='btn-blue btn-lg btn-big btn-round'>
                                                        {isLoading === true ? <CircularProgress color="inherit" className="loader" /> : 'Submit Review'}

                                                    </Button>
                                                </div>

                                            </form>

                                        </div>


                                    </div>
                                </div>
                            }




                        </div>
                    </div>


                    <br />

                    {
                        relatedProductData?.length !== 0 && <RelatedProducts title="RELATED PRODUCTS" data={relatedProductData} />
                    }



                </div>
            </section>


        }
        </>
    )
}

export default ProductDetails;