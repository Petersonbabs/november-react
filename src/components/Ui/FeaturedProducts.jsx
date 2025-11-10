import React, { useState } from 'react'

const FeaturedProducts = () => {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const fetchProducts = async () => {
        setIsLoading(true)
        try {
            const res = await fetch("https://fakestoreapi.com/products")
            const data = await res.json()
            console.log(data)
            setProducts(data)
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    // fetchProducts() useEffect
    return (
        <div className='featured-products'>
            <button onClick={fetchProducts}>Fetch Products</button>

            <h2>Feature products</h2>
            {
                isLoading ? (
                    <div className='loader'>
                        <h3>Loading...</h3>
                    </div>
                ) : (
                    <section>
                        {
                            products.length == 0 ? (
                                <div className='empty'>
                                    <h3>No product</h3>
                                </div>
                            ) : (
                                <div className='products-list'>
                                    {
                                        products.map((product, index) => (
                                            <div className='product-card'>
                                                <img src={product.image} alt={product.title} />
                                                <h2>{product.title}</h2>
                                                <p>${product.price}</p>
                                                <p>{product.category}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            )
                        }
                    </section>
                )
            }
        </div>
    )
}

export default FeaturedProducts