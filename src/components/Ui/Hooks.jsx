import { useEffect, useState } from "react"
import useProduct from "../../hooks/useProducts";

const productsList = [
    {
        id: 1,
        name: "Wireless Bluetooth Headphones",
        price: 25000,
        category: "Electronics",
        seller: "TechZone Store"
    },
    {
        id: 2,
        name: "Leather Office Chair",
        price: 55000,
        category: "Furniture",
        seller: "HomePlus"
    },
    {
        id: 3,
        name: "Men's Running Sneakers",
        price: 18000,
        category: "Fashion",
        seller: "UrbanWear"
    },
    {
        id: 4,
        name: "Stainless Steel Water Bottle",
        price: 3500,
        category: "Home & Kitchen",
        seller: "GreenLife"
    },
    {
        id: 5,
        name: "Portable Rechargeable Fan",
        price: 15000,
        category: "Electronics",
        seller: "CoolBreeze Store"
    },
    {
        id: 6,
        name: "Smart Fitness Band",
        price: 20000,
        category: "Electronics",
        seller: "FitTrack"
    },
    {
        id: 7,
        name: "Wooden Study Desk",
        price: 60000,
        category: "Furniture",
        seller: "FurniCraft"
    },
    {
        id: 8,
        name: "Cotton Bed Spread (6x6)",
        price: 12000,
        category: "Home & Kitchen",
        seller: "ComfortBlankets Co."
    },
    {
        id: 9,
        name: "Gaming Keyboard with RGB Lights",
        price: 17000,
        category: "Electronics",
        seller: "GamerHive"
    },
    {
        id: 10,
        name: "Ladies Handbag (Leather)",
        price: 22000,
        category: "Fashion",
        seller: "StyleBoutique"
    }
];


const Hooks = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [filter, setFilter] = useState("")
    const [products, setProducts] = useState([])
    const { singleProduct, setLoading, loading, getSingleProduct } = useProduct()

    // useEffect(function, [dependencies array])

    useEffect(() => {
        fetchProducts()
        getSingleProduct()
        console.log(singleProduct)
    }, [searchQuery, filter])

    const fetchProducts = () => {
        const filteredProducts = productsList.filter(product => product.name.toLowerCase().includes(searchQuery.toLowerCase()) && product.category.toLowerCase().includes(filter.toLowerCase()))
        setProducts(filteredProducts)
    }
    return (
        <div>
            <div style={{
                display: "flex",
                gap: "1rem",
                alignItems: "center"
            }}>
                <input type="text" onChange={(e) => {
                    setSearchQuery(e.target.value)
                }} />
                <select name="filter" id="filter" onChange={(e) => {
                    setFilter(e.target.value)
                }}>
                    <option value="">All</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Home & Kitchen">Home & Kitchen</option>
                </select>
            </div>

            {
                products?.map((product, index) => (
                    <div>
                        {index + 1}
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Hooks