import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, clearCart, clearRestName } from '../utils/slices/cartSlice';

const Cart = () => {
    const cartItems = useSelector(store => store.cart.items);
    const restName = useSelector(store => store.cart.restName);
    const dispatch = useDispatch();
    const deleteItem = (itemId) => {
        dispatch(removeItem(itemId));
    }
    const handleClearCart = () => {
        dispatch(clearCart());
        dispatch(clearRestName());
    }
    return (
        <div className='mx-[12%] my-0 p-[1%] bg-offWhite rounded-xl relative h-full flex flex-col backdrop-blur-[5px] top-28'>
            <div data-testid='cart-label' className='text-center'>{cartItems.length > 0 ? <h1 >{`There are ${cartItems.length} item(s) in the cart`}</h1> : <div><h1>{`Cart is Empty :(`}</h1><p className='text-lg'>Add some delicious food from restaurants!</p></div>}</div>
            {
                cartItems.length > 0 && <div className='p-2 m-2 bg-offWhiteDarker rounded-lg'>
                    {restName && (
                        <div className='flex flex-wrap justify-between'>
                            <h2 className='p-5'>{restName}</h2>
                            <button className='p-5 rounded-lg bg-gray-600 hover:bg-gray-900 text-offWhite transition-all duration-[0.4s] text-lg' onClick={() => handleClearCart()} >CLEAR CART</button>
                        </div>)}
                    {cartItems?.map(item => {
                        return (
                            <div data-testid='cart-item' key={`${item.id}`} className='flex flex-wrap items-center justify-between p-2 m-2 my-4 border-b-2 border-darkmodeheader border-solid border-2 rounded-lg '>
                                <div className='flex flex-wrap items-center'>
                                    <div className={`w-6 h-6 ${item.isVeg === 1 ? 'icon-veg content-veg' : 'icon-non-veg content-nonVeg'}`} />
                                    <h3 className='text-darkmodebody ml-2'>{item.name}</h3>
                                </div>
                                <div>
                                    <button className='p-5 rounded-lg hover:bg-gray-300 transition-all duration-[0.4s]' onClick={() => deleteItem(item.id)}>🗑️</button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            }
        </div >
    );
};

export default Cart;