import Product from "./Product";
import { useAppContext } from "./StateWrapper";
import style from "../styles/ShoppingCart.module.css";

const ShoppingCart = () => {

  const cart = useAppContext();

  const handleCloseCart = () => {
    cart.closeCart()
  }

  const getTotal = () => {
    const total = cart.items.reduce( (acc, item) => acc + item.quantity * item.price, 0 )
    return total
  }

  return (
    <div className={ style.shoppingCart } style={{ display: cart.isOpen ? "block" : "none" }}>
      <button 
        className={ style.close }
        onClick={ handleCloseCart }
      >
        Close Cart
      </button>

      {
        (cart.items.length === 0) 
        ? <div className={ style.empty }>Your cart is empty</div> 
        : (
        <>
          <h3>Your Items</h3>
          <hr />
          <div>
            {
              cart.items.map( item => <Product key={ item.id } item={ item } showAs="ListItem" quantity={ item.quantity }/>)
            }
          </div>
          <div className={ style.total }>
            Total: ${ getTotal() }
          </div>
        </>
        )
      }
    </div>
  )
}

export default ShoppingCart