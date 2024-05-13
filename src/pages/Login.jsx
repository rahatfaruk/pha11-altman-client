import { useState } from "react"
import { toast } from "react-toastify"
import { Eye, EyeSlash, Google } from "react-bootstrap-icons"
import { Link, useLocation, useNavigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"

function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const {user, signInWithEP, signInWithGoogle} = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  console.log('login p:',user);

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const email = e.target.email.value.trim()
    const password = e.target.password.value.trim()

    const passwordPassRegex = /(?=.*[a-z])(?=.*[A-Z]).{6,}/

    // all fields is not filled
    if (!(email && password)) {
      toast.error('you must fill all fields!')
    }
    // validate password: lenght >= 6, has at least 1 uppercase, 1 lowercase
    else if( !passwordPassRegex.test(password) ) {
      toast.error('password must be at least 6 characters long, contains at least 1 uppercase and 1 lowercase letter')
    }
    // successful: sign in
    else {
      // TODO: call sign in here
      try {
        await signInWithEP(email, password);
        toast.success('successfully signed in!')
        navigate(location.state || '/')
      } catch (error) {
        console.log('signin failed!', error.message);
        toast.error('signin failed! ' + error.message);
      }
    }
  }

  // sign with google
  const handleSignWithGoogle = async () => {
    try {
      await signInWithGoogle();
      toast.success('successfully signed in!')
      navigate('/')
    } catch (error) {
      console.log('signin failed!', error.message);
      toast.error('signin failed! ' + error.message);
    }
  }

  return (  
    <section className="px-4 md:px-6 py-8 md:py-12 dark:bg-gray-800 dark:text-gray-200">
      <div className="max-w-md mx-auto p-6 md:p-8 border rounded-md shadow-md">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-cyan-600 mb-6">Sign in</h2>

        {/* other login method + signup link */}
        <div>
          <p className="text-center">
            <span>Don't have an account yet? </span>
            <Link to="/signup" className="text-cyan-600 hover:underline dark:text-cyan-400.">Sign up here</Link>
          </p>
          <div className="pt-4 space-y-4">
            <button onClick={handleSignWithGoogle} className="bg-blue-600 text-white w-full px-4 py-2 rounded-md flex items-center justify-center gap-3 hover:opacity-90"><Google/> Continue with Google</button>
          </div>
        </div>

        {/* devider */}
        <div className="py-6 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600">Or</div>

        <form onSubmit={handleSubmit}>
          <label className="block mb-4">
            <span className="block mb-1 text-sm text-gray-600 dark:text-gray-400">Your email</span>
            <input type="email" name="email" className="border w-full min-w-0 px-3 py-2 rounded-md bg-gray-50 dark:text-gray-700" placeholder="example@mail.com" />
          </label>
          <label className="block mb-4 relative">
            <span className="block mb-1 text-sm text-gray-600 dark:text-gray-400">Your password</span>
            <input type={showPassword ? "text" : "password"} name="password" className="border w-full min-w-0 px-3 py-2 rounded-md bg-gray-50 dark:text-gray-700" />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute bottom-1.5 right-1.5 p-1 text-xl">
              {showPassword ? <Eye/> : <EyeSlash/>}
            </button>
          </label>

          <div className="mt-6">
            <button type="submit" className="bg-cyan-600 text-white w-full px-4 py-2 rounded-md hover:opacity-90">Sign in</button>
          </div>
        </form>

        
      </div>
    </section>
  );
}

export default Login;