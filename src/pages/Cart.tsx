import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';

const Cart = () => {
  
  const {products, currency, cartItems} = useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(()=>{

    const tempData = [];
    for(const items in cartItems){
      for(const item in cartItems[items]){
        if(cartItems[items][item] > 0){
          tempData.push({
            _id:items,
            size: item,
            quantity:cartItems[items][item]
          })
        }
      }
    }

setCartData(tempData);
  },[cartItems])




  return (
    <div className='border-t pt-14'>
      
      <div className='text-2xl mb-3'>

        <Title text1={'YOUR'} text2={'CART'}/>
      </div>
      <div>
        {
          cartData.map((item,index)=>{

            const productData = products.find((product)=> product._id === item._id);
            return(
              <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4' >
                <div className='flex items-start gap-6'>
                  <img className='w-16 sm:w-20' src={productData.image[0]} alt="" />
                  <div>
                    <p className=' text-xs sm:text-lg font-medium'>{productData.name}</p>
                  </div>
                </div>
              </div>

            )
          })
        }
      </div>
    </div>
  )
}

export default Cart;

// import React, { useContext, useEffect, useState } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import Title from '../components/Title';

// const Cart = () => {
//   const { products, currency, cartItems } = useContext(ShopContext);
//   const [cartData, setCartData] = useState([]);

//   useEffect(() => {
//     const tempData = [];
//     for (const itemId in cartItems) {
//       for (const size in cartItems[itemId]) {
//         if (cartItems[itemId][size] > 0) {
//           tempData.push({
//             _id: itemId,
//             size: size,
//             quantity: cartItems[itemId][size]
//           });
//         }
//       }
//     }
//     setCartData(tempData); // Update state with new cart data
//   }, [cartItems]);

//   return (
//     <div className='border-t pt-14'>
//       <div className='text-2xl mb-3'>
//         <Title text1={'YOUR'} text2={'CART'} />
//       </div>
//       <div>
//         {
//           cartData.map((item) => {
//             const productData = products.find((product) => product._id === item._id);
//             if (!productData) return null; // Handle case where product is not found

//             return (
//               <div key={item._id} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
//                 <div className='flex items-start gap-6'>
//                   <img className='w-16 sm:w-20' src={productData.image[0]} alt={productData.name} />
//                   <div>
//                     <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
//                     <p className='text-xs sm:text-sm'>Size: {item.size}</p>
//                     <p className='text-xs sm:text-sm'>Quantity: {item.quantity}</p>
//                   </div>
//                 </div>
//               </div>
//             );
//           })
//         }
//       </div>
//     </div>
//   );
// };

// export default Cart;