import React, { useRef, useState, useEffect} from "react";
import style from "./ProductDetails.module.css";
import { useParams,useNavigate } from "react-router-dom";
import products from "../../assets/data/products";
import HeroSection2 from "../../commonUI/herosection2/HeroSection2";
import ProductList from "../../components/productlist/ProductList";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/userSlice";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const [tab, setTab] = useState("desc");
  const [rating, setRating] = useState(null);
  const { id } = useParams();
  const item = products.find((item) => item.id == id);
  const reviewUserRef = useRef(null);
  const reviewMsgRef = useRef(null);
  const dipatch = useDispatch()
  const navigate = useNavigate()
  const {
    imgUrl,
    productName,
    price,
    avgRating,
    reviews,
    shortDesc,
    description,
    category,
  } = item;

  const relatedProduct = products.filter((item) => item.category === category);

  const handleSumbit = (e) =>     {
    e.preventDefault();
    const username = reviewUserRef.current.value;
    const userMsg = reviewMsgRef.current.value;

    const reviewObj={
      name:username,
      text:userMsg,
      rating, 
    }
    console.log(reviewObj)
    toast.success("Review Submitted")
  };

  const handleAddToCart=()=>{
    dipatch(addToCart({  
      id,
      image:imgUrl,
      productName,
      price
    }))
    toast.success("Item added successfully")
    navigate("/cart")
  }

  useEffect(()=>{
    window.scrollTo(0,0)
  },[products])

  return (
    <div>
      <HeroSection2 title="Product details" />

      <div className={style.product_details}>
        <div className={style.product_image}>
          <img src={imgUrl} alt="loading.." />
        </div>
        <div className={style.details}>
          <h2>{productName}</h2>
          <span>⭐⭐⭐⭐⭐</span>
          <p>({avgRating}) rating.</p>

          <h5>₹{price}.00</h5>
          <p>{shortDesc}</p>

          <motion.button
            whileTap={{ scale: 0.8 }}
            className={style.cart_button}
            onClick={handleAddToCart}
          >
            Add to Cart
          </motion.button>
        </div>
      </div>

      <div className={style.comment_section}>
        <div className={style.comment_heading}>
          <h5
            className={tab === "desc" ? style.active : ""}
            onClick={() => setTab("desc")}
          >
            Description
          </h5>
          <h5
            className={tab === "review" ? style.active : ""}
            onClick={() => setTab("review")}
          >
            Reviews({reviews.length})
          </h5>
        </div>
        <div className={style.comment_details}>
          {tab === "desc" ? (
            <div className={style.description_text}>
              <p>{description}</p>
            </div>
          ) : (
            <div className={style.review_section}>
              <ul>
                {reviews.map((item, index) => (
                  <div className={style.reviews_list} key={index}>
                    <h6>Akash kr</h6>
                    <span>{item.rating} (avgRating)</span>
                    <h5>{item.text}</h5>
                  </div>
                ))}
              </ul>
              
              <form onSubmit={handleSumbit}>
              <h3>Leave your expreience</h3>
                <div className={style.user_name}>
                  <input type="text" placeholder="enter name" ref={reviewUserRef} required/>
                </div>
                <div className={style.user_rating}>
                  <motion.span whileTap={{scale:1.1}} onClick={() => setRating(1)}>1⭐</motion.span>
                  <motion.span whileTap={{scale:1.1}}  onClick={() => setRating(2)}>2⭐</motion.span>
                  <motion.span whileTap={{scale:1.1}}  onClick={() => setRating(3)}>3⭐</motion.span>
                  <motion.span whileTap={{scale:1.1}}  onClick={() => setRating(4)}>4⭐</motion.span>
                  <motion.span whileTap={{scale:1.1}}  onClick={() => setRating(5)}>5⭐</motion.span>
                </div>
                <div className={style.user_review}>
                  <textarea type="text" placeholder="review" ref={reviewMsgRef} required/>
                </div>
                <motion.button 
                  type="submit" 
                  className={style.review_button} 
                  whileTap={{scale:0.9}}
                  >
                  Submit
                </motion.button>
              </form>
            </div>
          )}
        </div>
        <div className={style.related}>
          <h2>You might also like.</h2>
          <ProductList data={relatedProduct} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
