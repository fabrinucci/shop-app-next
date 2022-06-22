import Layout from "../../components/layout"
import { getItems } from "../../services/itemService"
import Product from "../../components/Product"
import style from "../../styles/Product.module.css";

export default function index({ items }) {
  return (
    <Layout title="Store">
      <div className={ style.items }>
        {
          items && items.map( item => (
            <Product item={ item } showAs="Default" key={ item.id } />
          ))
        }
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await getItems();
  return {
    props: {
      items: res,
    }
  }
}