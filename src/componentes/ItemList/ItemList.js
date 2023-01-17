import Item from "../Item/Item"
const ItemList = ({products}) =>{
    return(
        <div className="uwu">
            {products.map(prod=> <Item key={prod.id} {...prod}></Item>)}
        </div>
    )
}

export default ItemList