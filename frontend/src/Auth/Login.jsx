import { useState } from "react";
import Layout from "../Component/Layout";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const[name, setName] = useState("")
  const[email, setemail] = useState("")
  const[pass, setpass] = useState("")
  const[phone, setphone] = useState("")
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/auth/register",
        {
          name,
          email,
          pass,
          phone,
        }
      );
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };
  return (
    <Layout>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative w-96 h-96 bg-white shadow-lg rounded-lg flex flex-col items-center justify-center p-6">
        {isSignUp ? (
          <>
            <h1 className="text-xl font-bold">Create Account</h1>
            <div className="flex space-x-3 mt-2">
              <a href="#" className="text-blue-600"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-pink-600"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-red-600"><i className="fab fa-google"></i></a>
              <a href="#" className="text-gray-800"><i className="fab fa-github"></i></a>
            </div>
            <form onSubmit={handleSubmit} action="">
            <input required value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" className="w-full p-2 mt-2 border rounded" />
            <input required value={email} onChange={(e) => setemail(e.target.value)}type="email" placeholder="Email" className="w-full p-2 mt-2 border rounded" />
            <input  required value={pass} onChange={(e) => setpass(e.target.value)}type="password" placeholder="Password" className="w-full p-2 mt-2 border rounded" />
            <input  required value={phone} onChange={(e) => setphone(e.target.value)} type="text" placeholder="phone No" className="w-full p-2 mt-2 border rounded" />
            <button type="submit" placeholder="Sign in " className="w-full mt-2 bg-blue-600 text-white p-2 rounded" >Sign in </button> 
            <p className="mt-2 text-gray-500">Already have an account? <button onClick={() => setIsSignUp(false)} className="text-blue-600">Sign In</button></p>
            </form>
          </>
        ) : (
          <>
            <h1 className="text-xl font-bold">Sign In</h1>
            <div className="flex space-x-3 mt-2">
              <a href="#" className="text-blue-600"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-pink-600"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-red-600"><i className="fab fa-google"></i></a>
              <a href="#" className="text-gray-800"><i className="fab fa-github"></i></a>
            </div>
            <input type="text" placeholder="Email" className="w-full p-2 mt-2 border rounded" />
            <input type="password" placeholder="Password" className="w-full p-2 mt-2 border rounded" />
            <a href="#" className="block mt-1 text-blue-600">Forgot password?</a>
            <button className="w-full mt-2 bg-blue-600 text-white p-2 rounded">Sign In</button>
            <p className="mt-2 text-gray-500">Don't have an account? <button onClick={() => setIsSignUp(true)} className="text-blue-600">Sign Up</button></p>
          </>
        )}
      </div>
    </div>
    </Layout>
  );
}
