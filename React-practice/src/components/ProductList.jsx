
import products from "./Product.js"

export default function ProductList(){

    return(
        <ul className="card-container">
        {
            products.map(
                ({id, title, price, category, image})=>(
                    <li className="content-container" key={id}>
                        <div className="img-container"><img src={image} alt={title}/></div>
                        <h3 className="title">{title}</h3>
                        <p className="price">Price : ${price}</p>
                        <p className="category">Category : {category}</p>
                    </li>
                )
            )
        }
        </ul>
    )
}