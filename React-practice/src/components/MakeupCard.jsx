
import styles from '../Card.module.css'

export default function MakeupCard({name , brand , price , rating, img}){
    return(
        <div className={styles.container}>
            <img className={styles.img} src={img} alt="makeup-image" />
            <p className={styles.text}>name : {name}</p>
            <p className={styles.text}>brand : {brand}</p>
            <p className={styles.text}>price : {price}</p>
            <p className={styles.text}>rating : {rating}</p>
        </div>
    )
}