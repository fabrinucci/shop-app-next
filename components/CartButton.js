import style from "../styles/Button.module.css";
import { useAppContext } from "./StateWrapper";

const CartButton = ({ item }) => {

  const cart = useAppContext()

  const handleClick = () => {
    cart.addItemToCart(item)
  }

  return (
    <button 
      className={ style.btn }
      onClick={ handleClick }
    >
      Add to Cart
    </button>
  )
}

export default CartButton