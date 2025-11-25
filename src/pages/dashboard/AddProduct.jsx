import { useState } from "react"
import { useForm } from "react-hook-form"
import * as yup from "yup" // wildcard
import { yupResolver } from "@hookform/resolvers/yup"

const productFormSchema = yup.object({
    name: yup.string().required("Name is required").min(3, "Must be at lease 3 characters"),
    // email: yup.string().email("Enter valid email").required("Email is required"),
    description: yup.string().required("Description is required").min(10, "Must be at least 10 characters").max(200, "Max of 200 characters"),
    price: yup.number("Must be a valid number").required("Price is requried"),
    category: yup.string().oneOf(["fashion", "gadget", "electronics"]).required("Category is required")
})


const AddProduct = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(productFormSchema),
        defaultValues: {
            name: "",
            price: ""
        }
    })
    console.log(errors)
    const [submitting, setSubmitting] = useState(false)


    const handleAddProduct = (data) => {
        console.log(data)
    }
    return (
        <div>
            <h1>Add Product</h1>

            <form className='space-y-4' onSubmit={handleSubmit(handleAddProduct)}>
                <div className='flex flex-col space-y-2'>
                    <label htmlFor="name">Product name</label>
                    <input
                        type="text"
                        placeholder='E.g Nike shoe'
                        className={`border px-4 py-2 rounded ${errors.name && "border-red-500"} `}
                        {...register("name")}
                    />
                </div>
                {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
                <div className='flex flex-col space-y-2'>
                    <label htmlFor="description">Description</label>
                    <input
                        type="text"
                        placeholder='Start typing...'
                        className={`border px-4 py-2 rounded ${errors.description && "border-red-500"} `}
                        {...register("description")}
                    />
                </div>
                {errors.description && <p className="text-sm text-red-500">{errors.description.message}</p>}
                <div className='flex flex-col space-y-2'>
                    <label htmlFor="price">Price</label>
                    <input
                        type="number"
                        placeholder='5,000'
                        className={`border px-4 py-2 rounded ${errors.price && "border-red-500"} `}
                        {...register("price")}
                    />
                </div>
                {errors.price && <p className="text-sm text-red-500">{errors.price.message}</p>}
                <div className='flex flex-col space-y-2'>
                    <label htmlFor="category">Category</label>
                    <select id="category" {...register("category")} className={`border px-4 py-2 rounded ${errors.category && "border-red-500"} `}>
                        <option value="">Select category</option>
                        {
                            ["fashion", "gadget", "electronics"].map((category, index) => (
                                <option value={category} className="capitalize" key={index}>{category}</option>
                            ))
                        }
                    </select>
                </div>
                {errors.category && <p className="text-sm text-red-500">{errors.category.message}</p>}

                <button className='bg-black block w-full px-4 py-2 rounded  border-none text-white'>{submitting ? "Creating account..." : "Add Product"}</button>
            </form >
        </div >
    )
}

export default AddProduct