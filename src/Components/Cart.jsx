import { useSelector } from "react-redux"
import CartItem from "./CartItem"



const Cart = () =>{
    const items = useSelector((state) => state.cart.items)
    return(
        <>
         {items.map((item) => <CartItem key={item.id} item={item}/>)}
         
        </>
    )
}

export default Cart