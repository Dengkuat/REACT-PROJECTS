import { useState } from "react"

export default function Form() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [darkMode, setDarkMode] = useState(false)


  return (

    <div>
      <div className={`min-h-screen flex items-center justify-center px-4
  transition-colors duration-300 ease-in-out
  ${darkMode ? "bg-gray-900" : "bg-gray-100"}`}>
        <div className={`w-full max-w-md rounded-2xl shadow-lg p-8 
  ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"} transition-colors duration-300 ease-in-out`}>
          <h2 className="text-2xl font-bold text-centre mb-6">Create Account</h2>

          <button onClick={() => setDarkMode(!darkMode)} className="mb-4 px-2  rounded-2xl border">
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>

          <form className="space-y-7">
            {/* names  */}
            <div>
              <label className="block text-sm font-medium mb-1 text-center">
                Full Names
              </label>
              <input
                type="text"
                placeholder="Enter Full Names"
                className={`w-full rounded-2xl px-3 py-2 text-center
  focus:outline-none focus:ring-2 focus:ring-blue-700
  transition-colors duration-300 ease-in-out
  ${darkMode
                    ? "bg-gray-700 border border-gray-600 text-white"
                    : "bg-white border border-gray-300 text-black"}`}
              />
            </div>

            {/* email  */}
            <div>
              <label className="block text-sm font-medium mb-1 text-center">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className={`w-full rounded-2xl px-3 py-2 text-center
  focus:outline-none focus:ring-2 focus:ring-blue-700
  transition-colors duration-300 ease-in-out
  ${darkMode
                    ? "bg-gray-700 border border-gray-600 text-white"
                    : "bg-white border border-gray-300 text-black"}`}
              />
            </div>

            {/* password  */}
            <div className="relative">
              <label className="block text-sm font-medium mb-1 text-center">
                Password
              </label>

              <input
                type={showPassword ? "text" : "password"}
                placeholder="********"
                className={`w-full rounded-2xl px-3 py-2 pr-16 text-center
  focus:outline-none focus:ring-2 focus:ring-blue-700
  transition-colors duration-300 ease-in-out
  ${darkMode
                    ? "bg-gray-700 border border-gray-600 text-white"
                    : "bg-white border border-gray-300 text-black"}`}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-9 text-sm text-blue-600 font-medium"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            {/* confirm password  */}
            <div className="relative">
              <label className="block text-sm font-medium mb-1 text-center">
                Confirm Password
              </label>

              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="********"
                className={`w-full rounded-2xl px-3 py-2 pr-16 text-center
  focus:outline-none focus:ring-2 focus:ring-blue-700
  transition-colors duration-300 ease-in-out
  ${darkMode
                    ? "bg-gray-700 border border-gray-600 text-white"
                    : "bg-white border border-gray-300 text-black"}`}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-9 text-sm text-blue-600 font-medium"
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </button>
            </div>

            <button
              type="submit"
              className="text-center w-full bg-blue-700 text-white py-2 rounded-2xl font-semibold hover:bg-blue-800 transition-500 duration-500"
            >
              Register
            </button>


          </form>
        </div>
      </div>
    </div>
  )
}