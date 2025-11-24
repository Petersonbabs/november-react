import { Eye, EyeClosed } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// email
// fullName
// password
// gender
// age

const Signup = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        fullName: "",
        gender: "",
        age: ""
    })
    const [showPassword, setShowPassword] = useState(false)
    const [submitting, setSubmitting] = useState(false)
    const baseUrl = import.meta.env.VITE_BASE_URL
    const navigate = useNavigate()

    // handle input
    const handleInput = (e) => {
        const { value, name } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    // handle submit
    const handleSubmit = async (e) => {
        e.preventDefault()
        setSubmitting(true)
        if (!formData.email) {
            alert("Eamil is required")
            return
        }
        try {
            const res = await fetch(`${baseUrl}/api/auth/signup`, {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data = await res.json()
            if (data.success) {
                navigate("/login")
            }
        } catch (error) {
            console.log(error)
        } finally {
            setSubmitting(false)
        }
    }

    const togglePassword = () => {
        setShowPassword(prev => !prev)
    }

    return (
        <div className='space-y-6 my-8 max-w-[600px] mx-auto w-[90vw] border p-4 rounded-lg'>
            <h2 className='text-center'>Create Account on LEX CLOTHING</h2>
            <form onSubmit={handleSubmit} className='space-y-4'>
                <div className='flex flex-col space-y-2'>
                    <label htmlFor="email">Email</label>
                    <input name='email' type="email" placeholder='Stevejobs@dev.com' className='border px-4 py-2 rounded ' onChange={handleInput} />
                </div>
                {/* full name */}
                <div className='flex flex-col space-y-2'>
                    <label htmlFor="fullName">Full name</label>
                    <input name='fullName' type="text" placeholder='Steve jobs' className='border px-4 py-2 rounded ' onChange={handleInput} />
                </div>
                {/* age */}
                <div className='flex flex-col space-y-2'>
                    <label htmlFor="age">Age (optional)</label>
                    <input name='age' type="text" placeholder='18' className='border px-4 py-2 rounded ' onChange={handleInput} />
                </div>
                {/* gender */}
                <div className='flex flex-col space-y-2'>
                    <label htmlFor="gender">Gender</label>
                    <select name="gender" id="gender" onChange={handleInput} className='border px-4 py-2 rounded '>
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>

                </div>
                {/* password */}
                <div className='flex flex-col space-y-2'>
                    <label htmlFor="password">Password</label>
                    <div className='flex border px-4 py-2 rounded '>
                        <input name='password' type={showPassword ? "text" : "password"} placeholder='********' className='border-none focus:outline-none flex-1' onChange={handleInput} />
                        <span onClick={togglePassword}>
                            {showPassword ? <Eye /> : <EyeClosed />}
                        </span>
                    </div>
                </div>

                <button className='bg-black block w-full px-4 py-2 rounded  border-none text-white'>{submitting ? "Creating account..." : "Submit"}</button>
            </form>
        </div>
    )
}

export default Signup