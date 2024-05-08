import { useState } from "react";
import loginImage from "../assets/images/baza 1.png";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";
import Logo from "../assets/images/Group (1).png";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const navigate = useNavigate();
 const handleSignUp = async () => {
   const accessToken =
     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjFmODVjOWQzZTQ4MjU4OWE5YjU4NDQiLCJlbWFpbCI6ImZ1cmFoYW1vc2VzNDFAZ21haWwuY29tIiwiaWF0IjoxNzE0OTgzMzU3LCJleHAiOjE3MTUwMjY1NTd9.KrRh1CNuz3MMZfu79PFFss7BKV-ssv535765TM648Sc";
   try {
     const formDataWithPermissions = { ...formData, permissions: "user" }; // Add permissions field to formData

     const response = await fetch(
       "https://bazafarm-backend-v2-rlnd.onrender.com/api/v1/users",
       {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
           Authorization: `Bearer ${accessToken}`, // Include the access token in the Authorization header
         },
         body: JSON.stringify(formDataWithPermissions), // Stringify the modified formData object
       }
     );

     if (!response.ok) {
       throw new Error("Failed to signup");
     }

     const data = await response.json();
     console.log("Signup successful!", data);

     // Store the access token in local storage
     localStorage.setItem("accessToken", accessToken);

     navigate("/login");
   } catch (error: any) {
     console.error("Signup Error:", error.message);
   }
 };


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className="bg-[#f6faf6] min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className=" bg-white overflow-hidden md:flex md:flex-row md:items-center md:justify-center gap-4 ">
          <div className="md:w-[50%] h-[520px] ml-3">
            <img
              src={loginImage}
              alt="Login background"
              className="h-auto md:h-full max-w-xs md:max-w-none brightness-70 object-fill w-[100%]"
            />
          </div>

          <div className="px-6 py-8 lg:w-1/2 flex flex-col justify-center items-center p-8  bg-[#EAECF0] h-[520px]">
            <img className="w-24 h-auto mb-8" src={Logo} alt="Logo" />

            <div className="mb-4">
              <h2 className="text-3xl md:text-4xl text-gray-800 font-bold mb-6">
                Welcome to BazaFarm
              </h2>

              <p className="text-gray-600">Create an account to continue</p>
            </div>

            <form className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium"
                >
                  Enter you name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-400 focus:ring focus:ring-emerald-200 focus:ring-opacity-50 h-10 bg-gray-100 px-4"
                  placeholder="Enter full names"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-400 focus:ring focus:ring-emerald-200 focus:ring-opacity-50 h-10 bg-gray-100 px-4"
                  placeholder="Enter email"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-medium "
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-400 focus:ring focus:ring-emerald-200 focus:ring-opacity-50 h-10 bg-gray-100 px-4"
                    placeholder="Enter your password"
                  />
                  <a
                    href="#"
                    className="text-sm text-emerald-600 hover:text-emerald-800 absolute"
                  >
                    Forgot password?
                  </a>
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0  flex items-center px-3 focus:outline-none"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <FaEye className="h-6 w-6 text-gray-400" />
                    ) : (
                      <FaEyeSlash className="h-6 w-6 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-medium "
                >
                  Phone
                </label>
                <div className="relative">
                  <input
                    type="number"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-400 focus:ring focus:ring-emerald-200 focus:ring-opacity-50 h-10 bg-gray-100 px-4"
                    placeholder="Enter your phone"
                  />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember_me"
                    name="remember_me"
                    className="rounded text-emerald-600 focus:ring-emerald-400"
                  />
                  <label htmlFor="remember_me" className="ml-2 text-gray-700">
                    Remember me
                  </label>
                </div>
              </div>
              <button
                type="button" // Change type to "button" to prevent form submission
                onClick={(e) => {
                  e.preventDefault(); // Prevent default form submission
                  handleSignUp(); // Call your signup function
                }}
                className="w-full mt-9 bg-emerald-600 text-white font-semibold rounded-md py-2 transition  hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-opacity-50"
              >
                Create Account
              </button>

              <div className="">
                <button
                  type="button"
                  className=" w-full bg-white border border-gray-300 text-gray-700 font-semibold rounded-md py-1 transition duration-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-opacity-50"
                >
                  <span className="inline-block mr-2">
                    <span className="inline-block mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        viewBox="0 0 48 48"
                      >
                        <path
                          fill="#FFC107"
                          d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                        ></path>
                        <path
                          fill="#FF3D00"
                          d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                        ></path>
                        <path
                          fill="#4CAF50"
                          d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                        ></path>
                        <path
                          fill="#1976D2"
                          d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                        ></path>{" "}
                      </svg>
                    </span>
                  </span>
                  Sign in with Google
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
