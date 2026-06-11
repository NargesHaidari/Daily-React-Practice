
import styles from '../Products.module.css'
import MakeupCard from './MakeupCard'
import lipstick from '../assets/lipstick.jpg'
import foundation from '../assets/foundation.jpg'
import mascara from '../assets/mascara.jpg'
import blush from '../assets/blush.jpg'


export default function MakeupProducts(){

    let products = [
        { id: 1, name: "Lipstick Matte", brand: "Fenty Beauty", price: "$25", rating: 4.8, img:lipstick},
        { id: 2, name: "Foundation", brand: "Maybelline", price: "$18", rating: 4.5, img:foundation },
        { id: 3, name: "Mascara", brand: "L'Oréal", price: "$15", rating: 4.7, img:mascara },
        { id: 4, name: "Blush", brand: "Rare Beauty", price: "$22", rating: 4.9, img:blush }
    ]

    return(
        <div className={styles.container}>
            {
            products.map(({id, name, brand, price, rating, img}) => (
                <MakeupCard key={id} name={name} brand={brand} price={price} rating={rating} img={img} />
            ))
            }
        </div>
    )
}