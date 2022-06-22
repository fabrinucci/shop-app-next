import Image from "next/image";
import Link from "next/link";
import { convertToPath } from "../lib/utils";
import style from "../styles/Product.module.css";
import CartButton from "./CartButton";

const Product = ({ item, showAs, quantity }) => {
  if( showAs === 'Page' ) {
    return (
      <div className={ style.page }>
        <div className={ style.image }>
          <Image 
            src={ item.image } 
            alt={ item.title } 
            width={600} 
            height={600} 
          />
        </div>
        <div className={ style.info }>
          <div>
            <h2>{ item.title }</h2>
          </div>
          <div className={ style.price }>${ item.price }</div>
          <div className={ style.description }>{ item.description }</div>
          <div>
            <CartButton item={ item }/>
          </div>
        </div>
      </div>
    )
  }

  if( showAs === 'ListItem' ) {
    return (
      <div className={ style.listItem }>
        <div>
          <Image 
            src={ item.image } 
            alt={ item.title }
            width={ 100 }
            height={ 100 }
          />
        </div>
        <div>
          <div><h4>{ item.title }</h4></div>
          <div><span>Unit Price: </span>${ item.price }</div>
          { quantity === 0 ? '' : <div><span>Units: </span>{ quantity }</div> }
          { quantity === 0 ? '' : <div><span>Subtotal: </span>${ quantity * item.price }</div> }
        </div>
    </div>
    )
  }

  return (
    <div className={ style.item }>
      <div>
        <Link href={`/store/${ convertToPath(item.title) }`}>
          <a>
            <Image
              src={ item.image } 
              alt={ item.title }
              width={ 400 }
              height={ 400 }
            />
          </a>
        </Link>
      </div>
      <div>
        <Link href={`store/${ convertToPath(item.title) }`}>
          <a>
            <h3>{ item.title }</h3>
          </a>
        </Link>
      </div>
      <div>${ item.price }</div>
      <div>
        <CartButton item={ item }/>
      </div>
    </div>
  )
}

export default Product