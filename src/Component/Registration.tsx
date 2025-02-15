import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import google from "../assets/google.png";


const Registration = () => {
    const [showPassword, setShowPassword] = useState<Boolean>(false);
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [userData, setUserdata] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
    })

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setUserdata((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        try {
            setLoading(true)
            setError("")
            if(!userData.email || !userData.firstName || !userData.lastName || !userData.password || !userData.username){
                setError("All fields must be filled.")
                return;
            };

            const formData = new FormData()
            formData.append("firstName", userData.firstName)
            formData.append("lastName", userData.lastName)
            formData.append("username", userData.username)
            formData.append("email", userData.email)
            formData.append("password", userData.password)
            
            const options = {
                method: "POST",
                body: JSON.stringify(userData)
            }

            console.log("formData", formData)

            const response = await fetch("http://localhost:5000/user/", options);
            const data = response.json();
            console.log(data)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        } finally {
                setLoading(false)
        }
    }
    
  return (
    <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-6 ">
        {error && (
            <div className="text-white font-bold font-raleway bg-red-500 p-2 rounded-lg">
            <p>{error}</p>
        </div>
        )}
        <div className="flex flex-row gap-3">
            <input
            type="text"
            value={userData.firstName}
            name="firstName"
            onChange={handleChange}
            placeholder="First Name"
            className="p-2 w-40 outline-none border-none rounded text-black font-raleway"
            />
            <input
            type="text"
            value={userData.lastName}
            name="lastName"
            onChange={handleChange}
            placeholder="Last Name"
            className="p-2 w-40 outline-none border-none rounded text-black font-raleway"
            />
        </div>

        <input
            type="text"
            value={userData.username}
            name="username"
            onChange={handleChange}
            placeholder="Choose Username"
            className="p-2 w-[330px] outline-none border-none rounded text-black font-raleway"
        />

        <input
            type="email"
            value={userData.email}
            name="email"
            onChange={handleChange}
            placeholder="Enter Your Email"
            className="p-2 w-[330px] outline-none border-none rounded text-black font-raleway"
        />

        <div className="relative">
            <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="border-none p-2 w-[330px] outline-none text-black font-raleway rounded"
            />
            <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-2 text-white"
            >
            {showPassword ? (
                <EyeOff className="h-5 w-5 text-black" />
            ) : (
                <Eye className="h-5 w-5 text-black" />
            )}
            </button>
        </div>

    <div className="relative">
        <input
        type={showPassword ? "text" : "password"}
        value={userData.password}
            name="password"
            onChange={handleChange}
        placeholder="Confirm Password"
        className="border-none p-2 w-[330px] outline-none text-black font-raleway rounded"
        />
        <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-4 top-2 text-white"
        >
        {showPassword ? (
            <EyeOff className="h-5 w-5 text-black" />
        ) : (
            <Eye className="h-5 w-5 text-black" />
        )}
        </button>
    </div>

        <button disabled={loading} className="bg-[#fa0153] p-2 hover:bg-[#b8486e] font-raleway font-bold rounded">
            {loading ? "Creating..." : "Create An Account"}
        </button>

        <div className="flex flex-row mt-2 items-center gap-2">
            <div className="bg-[#9d9d9d] w-24 h-[1px] mt-1" />
            <h1>Or Register With</h1>
            <div className="bg-[#9d9d9d] w-24 h-[1px] mt-1" />
        </div>

        <button className="bg-transparent border-white border-[1px] flex flex-row justify-center items-center gap-6 p-1 mt-4 rounded hover:bg-[#2e27297d] font-raleway font-bold text-[20px]">
            <img src={google} alt="google" className="h-5 w-5" />
            Google
        </button>
    </form>
  )
}

export default Registration
