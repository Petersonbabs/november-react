import { useParams, useSearchParams } from "react-router-dom"


const ProductDetail = () => {
    const { id } = useParams()
    const [searchParams] = useSearchParams()
    console.log(searchParams.get("name"))


    console.log(id)
    return (
        <div>ProductDetail</div>
    )
}

export default ProductDetail