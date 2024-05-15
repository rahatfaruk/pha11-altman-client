import { useState } from "react"
import { toast } from "react-toastify"
import { Eye, EyeSlash } from "react-bootstrap-icons"
import { Link, useNavigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import { updateProfile } from "firebase/auth"
import useAxios from "../hooks/useAxios"

function Signup() {
  const [showPassword, setShowPassword] = useState(false)
  const {createUserWithEP} = useAuth()
  const {axiosSecure} = useAxios()
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()
    
    const name = e.target.name.value.trim()
    const photo = e.target.photo.value.trim()
    const email = e.target.email.value.trim()
    const password = e.target.password.value.trim()

    const passwordPassRegex = /(?=.*[a-z])(?=.*[A-Z]).{6,}/

    // all fields is not filled
    if (!(email && password && name && photo)) {
      toast.error('you must fill all fields!')
    }
    // validate password: lenght >= 6, has at least 1 uppercase, 1 lowercase
    else if( !passwordPassRegex.test(password) ) {
      toast.error('password must be at least 6 characters long, contains at least 1 uppercase and 1 lowercase letter')
    }
    // validated: now submit form
    else {
      // TODO: call sign up here
      try {
        const credential = await createUserWithEP(email, password);
        // update name, photoUrl
        await updateProfile(credential.user, {displayName:name, photoURL:photo})
        // set token in cookies
        await axiosSecure.post('/jwt', {email: credential.user.email})
        toast.success('successfully created account!')
        navigate('/')
      } catch (error) {
        console.log('creating account failed!', error.message);
        toast.error('creating account failed! ' + error.message);
      }
    }
  }

  return (  
    <section className="px-4 md:px-6 py-8 md:py-12 dark:bg-gray-800 dark:text-gray-200">
      <div className="max-w-md mx-auto p-6 md:p-8 border rounded-md shadow-md">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-cyan-600 mb-6">Create an account</h2>

        {/* other login method + login link */}
        <div>
          <p className="text-center">
            <span>Already created an account? </span>
            <Link to="/login" className="text-cyan-600 hover:underline dark:text-cyan-400.">Login here</Link>
          </p>
        </div>

        {/* devider */}
        <div className="py-6 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600">Or</div>

        <form onSubmit={handleSubmit}>
          <label className="block mb-4">
            <span className="block mb-1 text-sm text-gray-600 dark:text-gray-400">Your name</span>
            <input type="text" name="name" className="border w-full min-w-0 px-3 py-2 rounded-md bg-gray-50 dark:text-gray-700" placeholder="Ali Hasan" />
          </label>
          <label className="block mb-4">
            <span className="block mb-1 text-sm text-gray-600 dark:text-gray-400">Your photo url</span>
            <input type="text" name="photo" className="border w-full min-w-0 px-3 py-2 rounded-md bg-gray-50 dark:text-gray-700" placeholder="http://www.photo.jpg" />
          </label>
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
            <button type="submit" className="bg-cyan-600 text-white w-full px-4 py-2 rounded-md hover:opacity-90">Create account</button>
          </div>
        </form>

        
      </div>
    </section>
  );
}

export default Signup;