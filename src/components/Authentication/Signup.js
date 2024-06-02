import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../../config_env.js'
const Signup = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
      });

      const [error, setError] = useState('');

      const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
      };
      const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
          var response = await axios.post(`http://localhost:3003/sign-up`, formData);
              console.log(response.data);
              const accessToken  =response.data.accesstoken;
            localStorage.setItem('accessToken', accessToken);
            console.log(response.status)
                window.location.href = '/Signin';
        } catch (error) {
            if( error.response.status ===409){
                setError('Username Already Exists. Login Instead')
            }
            else{
                setError('Signup failed. Please try again.');
          console.error('Error:', error);
            }
          
        }
      };
  return (
    <section className="bg-white">
    <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
            <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Sign up</h2>
                <p className="mt-2 text-base text-gray-600">Already have an account? <Link to="../signin" className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 hover:underline focus:text-blue-700">Login</Link></p>

                {error && <div className="mt-4 text-red-600">{error}</div>}

                <form onSubmit={handleSubmit} method="POST" className="mt-8">
                    <div className="space-y-5">
                        <div>
                            {/* <label for="" className="text-base font-medium text-gray-900"> Full Name </label> */}
                            {/* <div className="mt-2.5">
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder="Enter your full name"
                                    className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                />
                            </div> */}
                        </div>

                        <div>
                            <label for="" className="text-base font-medium text-gray-900"> Email address </label>
                            <div className="mt-2.5">
                                <input
                                    type="email"
                                    name="username"
                                    id="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    placeholder="Enter email to get started"
                                    className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                />
                            </div>
                        </div>

                        <div>
                            <label for="" className="text-base font-medium text-gray-900"> Password </label>
                            <div className="mt-2.5">
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Enter your password"
                                    className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                />
                            </div>
                        </div>
                        <div>
                            <button type="submit" className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">
                                Create free account
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>

  )
}

export default Signup