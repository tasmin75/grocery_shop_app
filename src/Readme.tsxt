import React from 'react';
import style from './Cart.module.css';
import HeroSection2 from '../../commonUI/herosection2/HeroSection2';
import { MdDelete } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem } from '../../redux/userSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector(state => state.cart.cartItems);
  const totalAmount =useSelector(state => state.cart.totalAmount);
  console.log(cartItem);

  return (
    <div className={style.shopping_cart}>
      <HeroSection2 title="Shopping Cart" />

      <div className={style.product_cart}>
        {cartItem.length === 0 ? (
          <h2>Cart is empty</h2>
        ) : (
          <table className={style.product_table}>
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {cartItem.map((item, index )=> (
                <tr key={item.id}>
                  <td><img src={item.imgUrl} /></td>
                  <td>{item.productName}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}px</td>
                  <td><MdDelete onClick={()=>dispatch(deleteItem(item.id))}/></td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div className={style.subTotal }>
                  <h2>₹{totalAmount}</h2>
      </div>
    </div>
  );
}

export default Cart;
