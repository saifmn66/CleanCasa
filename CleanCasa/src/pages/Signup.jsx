import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    pass: ""
  });
  const [errors, setErrors] = useState({
    firstname: false,
    lastname: false,
    email: false,
    pass: false
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    newErrors.firstname = !form.firstname;
    newErrors.lastname = !form.lastname;
    newErrors.email = !form.email;
    newErrors.pass = !form.pass;
    setErrors(newErrors);
    return !Object.values(newErrors).includes(true);
  };

  const handleSubmit = () => {
    if (validateForm()) {
      axios.post('http://localhost:3000/signup/adduser', form)
        .then(function (response) {
          console.log(response);
          toast.success("Your Account is Created successfully!");
          localStorage.setItem('token', response.data.token);
          navigate('/'); // Redirect to the homepage after successful submission
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <div>
      <div className="font-[sans-serif] bg-white mb-40 md:h-screen">
        <div className="grid md:grid-cols-2 pt-28 items-center gap-8 h-full">
          <div className="max-md:order-1 p-4 bg-gray-50 h-full">
            <img src="https://readymadeui.com/signin-image.webp" className="lg:max-w-[90%] w-full h-full object-contain block mx-auto" alt="login-image" />
          </div>

          <div className="flex items-center p-6 h-full w-full">
            <form className="max-w-lg w-full mx-auto">
              <div className="mb-12">
                <h3 className="text-blue-500 md:text-3xl text-2xl font-extrabold max-md:text-center">Create an account</h3>
              </div>

              <div>
                <label className="text-gray-800 text-xs block mb-2">First Name</label>
                <div className="relative flex items-center">
                  <input 
                    name="firstname" 
                    onChange={handleChange} 
                    type="text" 
                    required 
                    className={`w-full bg-transparent text-sm border-b ${errors.firstname ? 'border-red-500' : 'border-gray-300'} focus:border-blue-500 px-2 py-3 outline-none`} 
                    placeholder="Enter firstname" 
                  />
                </div>
              </div>
              <div className="mt-6">
                <label className="text-gray-800 text-xs block mb-2">Last Name</label>
                <div className="relative flex items-center">
                  <input 
                    name="lastname" 
                    onChange={handleChange} 
                    type="text" 
                    required 
                    className={`w-full bg-transparent text-sm border-b ${errors.lastname ? 'border-red-500' : 'border-gray-300'} focus:border-blue-500 px-2 py-3 outline-none`} 
                    placeholder="Enter lastname" 
                  />
                </div>
              </div>
              <div className="mt-6">
                <label className="text-gray-800 text-xs block mb-2">Email</label>
                <div className="relative flex items-center">
                  <input 
                    name="email" 
                    onChange={handleChange} 
                    type="text" 
                    required 
                    className={`w-full bg-transparent text-sm border-b ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:border-blue-500 px-2 py-3 outline-none`} 
                    placeholder="Enter email" 
                  />
                </div>
              </div>
              <div className="mt-6">
                <label className="text-gray-800 text-xs block mb-2">Password</label>
                <div className="relative flex items-center">
                  <input 
                    name="pass" 
                    onChange={handleChange} 
                    type="password" 
                    required 
                    className={`w-full bg-transparent text-sm border-b ${errors.pass ? 'border-red-500' : 'border-gray-300'} focus:border-blue-500 px-2 py-3 outline-none`} 
                    placeholder="Enter password" 
                  />
                </div>
              </div>
              <div className="flex items-center mt-6">
                <input id="remember-me" onChange={handleChange} name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 rounded" />
                <label className="ml-3 block text-sm text-gray-800">
                  I accept the <a href="" className="text-blue-500 font-semibold hover:underline ml-1">Terms and Conditions</a>
                </label>
              </div>

              <div className="mt-12">
                <button type="button" onClick={handleSubmit} className="w-full py-3 px-6 text-sm tracking-wider font-semibold rounded-md bg-blue-600 hover:bg-blue-700 text-white focus:outline-none">
                  Create an account
                </button>
                <p className="text-sm mt-6 text-gray-800">Already have an account? <Link to="/signin" className="text-blue-500 font-semibold hover:underline ml-1">Login here</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
