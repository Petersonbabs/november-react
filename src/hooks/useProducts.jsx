import { useState } from "react"

const useProduct = () => {
    const [singleProduct, setSingleProduct] = useState({
        name: "Gucci bag",
        price: 7890
    })
    const [loading, setLoading] = useState(false)

    const getSingleProduct = () => {
        alert(JSON.stringify(singleProduct))
    }
    return {
        singleProduct,
        getSingleProduct,
        loading,
        setLoading
    }
}

export default useProduct