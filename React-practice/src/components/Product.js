import iphone from "../assets/iPhone-16.jpg"
import samsung from "../assets/Samsung-Galaxy.jpg"
import macBook from "../assets/MacBook-Air.jpg"
import dell from "../assets/Dell-XPS.jpg"
import headPhone from "../assets/Sony-WH.jpg"
import watch from "../assets/Apple-Watch.jpg"

let products = [
    {
        id: 1,
        title: "iPhone 16",
        price: 999,
        category: "Mobile",
        image : iphone,
    },
    {
        id: 2,
        title: "Samsung Galaxy S25",
        price: 899,
        category: "Mobile",
        image : samsung,
    },
    {
        id: 3,
        title: "MacBook Air M4",
        price: 1199,
        category: "Laptop",
        image : macBook,
    },
    {
        id: 4,
        title: "Dell XPS 13",
        price: 1099,
        category: "Laptop",
        image : dell,
    },
    {
        id: 5,
        title: "Sony WH-1000XM6",
        price: 399,
        category: "Headphones",
        image : headPhone,
    },
    {
        id: 6,
        title: "Apple Watch Series 11",
        price: 499,
        category: "Smart Watch",
        image : watch,
    },
];

export default products