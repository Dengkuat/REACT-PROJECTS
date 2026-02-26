import { useState } from "react"

export default function Form() {
  const [darkMode, setDarkMode] = useState(false)
  const [isLogin, setIsLogin] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center px-4
      transition-colors duration-300 ease-in-out
      ${darkMode ? "bg-gray-900" : "bg-gray-100"}`}
    >

      
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`mb-6 px-4 py-2 rounded-xl border font-medium
        transition-colors duration-300 ease-in-out
        ${darkMode
            ? "bg-gray-800 text-white border-gray-600"
            : "bg-white text-black border-gray-300"}`}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      
      <div
        className={`w-full max-w-md rounded-2xl shadow-lg p-8
        transition-colors duration-300 ease-in-out
        ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}
      >
        <h2 className="text-2xl font-bold text-center mb-6">
          {isLogin ? "Sign In" : "Create Account"}
        </h2>

        <form className="space-y-6">

         
          {!isLogin && (
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
          )}

          
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

         
          {!isLogin && (
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
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
                className="absolute right-4 top-9 text-sm text-blue-600 font-medium"
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </button>
            </div>
          )}

         
          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-2 rounded-2xl font-semibold hover:bg-blue-800 transition duration-300"
          >
            {isLogin ? "Sign In" : "Register"}
          </button>
        </form>

        
        <p className="text-center mt-6 text-sm">
          {isLogin
            ? "Don't have an account?"
            : "Already have an account?"}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="ml-2 text-blue-600 font-medium"
          >
            {isLogin ? "Register" : "Sign In"}
          </button>
        </p>

      </div>
    </div>
  )
}