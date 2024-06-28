import { useDispatch } from "react-redux";
import { itemsDecrease, itemsIncrease, itemsRemoved } from "../reducers/cartSlice";
import { toast } from "react-toastify";

const CartItem = (props) =>{
    const {image,title,price,quantity,id} = props.item

    const dispatch = useDispatch();

    const deleteItem = () => {
        dispatch(itemsRemoved(id));
        toast.success("Item removed successfully")
    }
    const increaseItem = () => {
        dispatch(itemsIncrease(id));
    }
    const decreaseItem = () =>{
        dispatch(itemsDecrease(id))
    }
    const total=price*quantity
    
    return(
        <>
          <div className="cart-item">
            <img src={image} height="90px" width="100px"/>
            <div className='title'>{title}</div>
            <div><button className="minus" onClick={decreaseItem}>-</button></div>
            <div>{quantity}</div>
            <div><button className="plus" onClick={increaseItem}>+</button></div>
            <div>${total.toFixed(2)}</div>
            <div ><button className="remove" onClick={deleteItem}>Remove </button></div>
          </div>
          
        </>
    )
}
export default CartItem