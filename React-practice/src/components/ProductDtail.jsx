
import { Link, useParams } from 'react-router-dom'
export default function HomePage(){

    const products = [
        {id: 1, name: 'Iphone-16', price:'400$', img:'/src/assets/iPhone-16.jpg', dtail:'there is some dtail'},
        {id: 2, name: 'MacBook-Air', price:'600$', img:'/src/assets/macBook-air.jpg', dtail:'there is some dtail'},
        {id: 3, name: 'Sony-WH', price:'400$', img:'/src/assets/sony-wh.jpg', dtail:'there is some dtail'},
    ]

    let id = useParams().id;

    let product = products.find(
        item => item.id == id
    )

    return (
            <div className="inline-block mx-20 my-20" >
                <img className="h-48" src={product.img} alt="product-image" />
                <h2>{product.name}</h2>
                <p>{product.price}</p>
                <p>{product.dtail}</p>
                <Link to="/" >Back to home page</Link>
            </div>

    )
}