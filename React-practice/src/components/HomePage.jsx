import { Link } from "react-router-dom"


export default function HomePage(){

    const products = [
        {id: 1, name: 'Iphone-16', price:'400$', img:'/src/assets/iPhone-16.jpg'},
        {id: 2, name: 'MacBook-Air', price:'600$', img:'/src/assets/macBook-air.jpg'},
        {id: 3, name: 'Sony-WH', price:'400$', img:'/src/assets/sony-wh.jpg'},
    ]

    return (
        <div>
        {
            products.map(item => (
                <div className="inline-block mx-20 my-20" key={item.id} >
                    <img className="h-48" src={item.img} alt="product-image" />
                    <h2>{item.name}</h2>
                    <p>{item.price}</p>
                    <Link to={`/productDtail/${item.id}`} >View Dtails</Link>
                </div>
            ))
        }
        </div>
    )
}