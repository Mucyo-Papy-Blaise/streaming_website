import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useUserContext } from "./AuthContext";

const LoginUser = () => {
    const [showPassword, setShowPassword] = useState<Boolean>(false);
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [userData, setUserdata] = useState({
        email: "",
        password: "",
    })

    const { checkAuthUser } = useUserContext();

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
            if(!userData.email || !userData.password){
                setError("All fields must be filled.")
                return;
            };
            
            const response = await fetch("http://localhost:5000/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)
            });
            
            const data = await response.json();

            localStorage.setItem("token", data.token);

            await checkAuthUser();
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        } finally {
                setLoading(false)
        }
    }
  return (
    <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6 relative">
        {error && (
            <div className="text-white font-bold font-raleway bg-red-500 p-2 rounded-lg">
                <p>{error}</p>
            </div>
        )}
        <input
            type="text"
            value={userData.email}
            name="email"
            onChange={handleChange}
            placeholder="Username or Email"
            className="bg-transparent border-b-2 p-2 outline-none text-white font-raleway rounded w-80"
        />

        <div className="relative">
            <input
            type={showPassword ? "text" : "password"}
            value={userData.password}
            name="password"
            onChange={handleChange}
            placeholder="Password"
            className="bg-transparent border-b-2 p-2 outline-none text-white font-raleway rounded w-80"
            />
            <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-2 text-white"
            >
            {showPassword ? (
                <EyeOff className="h-5 w-5" />
            ) : (
                <Eye className="h-5 w-5" />
            )}
            </button>
        </div>
    
        <button className="bg-[#fa0153] p-2 hover:bg-[#b8486e]">
            {loading ? "Login...": "Login"}
        </button>
        </form>
  )
}

export default LoginUser
