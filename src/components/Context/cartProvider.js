import { useState } from "react"
import { CartContext } from './cartContext'

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState ([]);

    const addToCart = (item, cantidad) => {
        if (isInCart(item.id)) {
            alert('Ya esta en el carrito')
        }else {
            setCart([...cart, {...item, cantidad}]);
        }
    };

    const isInCart = (id) => {
        return cart.some((item) => item.id === id);
    };

    const removeItem = (productId) => {
        setCart(cart.filter((product) => product.id !== productId));
    };

    const clear = () => {
        setCart([]);
    }

    const totalItems = () => {
        return cart.reduce((acc, cartItem) => acc + cartItem.cantidad, 0);
    };

    return (
        <CartContext.Provider value={{cart, addToCart, removeItem, clear, totalItems}}>
            {children}
        </CartContext.Provider>
    )
};