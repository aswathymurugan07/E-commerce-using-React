import { useDispatch } from 'react-redux'
import '../App.css'
import { itemsAdded } from '../reducers/cartSlice'
import { toast } from 'react-toastify'


const ProductCart = (props) => {
    // console.log(props.product)
    const {title, description, price, image} =props.product || {}
    const dispatch = useDispatch()

    const addItems = () => {
        dispatch(itemsAdded(props.product))
        toast.success("Product was successfully added to cart")
    }
    return(
    <>
        
        <div className="product-card">
            <img src={image} />
            <div className='title'>{title}</div>
            <div className='description'>{description}</div>
            <div className='price'>${price}</div>
            <button className='add' onClick={addItems}>Add to cart</button>
        </div>
    </>
    )
}
export default ProductCart