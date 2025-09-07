import React, { useState } from 'react'
import Header from './Header'
import '../App.css'

const Login = () => {
  const [issignup, setIssignup] = useState(false);
  return (
    <div
      className="login-page h-screen w-screen flex bg-cover bg-center justify-center items-center"
      style={{
        backgroundImage:
          "url('https://assets.nflxext.com/ffe/siteui/vlv3/cb72daa5-bd8d-408b-b949-1eaef000c377/web/IN-en-20250825-TRIFECTA-perspective_a3209894-0b01-4ddb-b57e-f32165e20a3f_medium.jpg')",
      }}
    >
      <Header />

      <div className="bg-black/60 p-10 rounded-md flex flex-col gap-5">
        <h1 className="text-white text-5xl font-bold text-center">
          { issignup ? "Sign Up" : "Sign In"} 
        </h1>
      <form
  onSubmit={(e) => e.preventDefault()}
  className=" flex flex-col w-full gap-2 py-10 rounded-lg px-10"
>
  <input
    className="border-[0.5px] border-white rounded-md p-2 placeholder-white bg-black/80 text-white"
    type="email"
    placeholder="Email or phone number"
  />

  {issignup && (
    <input
      className="border-[0.5px] border-white rounded-md p-2 placeholder-white bg-black/80 mt-2 text-white" 
      type="text"
      placeholder="Username"
    />
  )}

  <input
    className="border-[0.5px] border-white rounded-md p-2 placeholder-white bg-black/80 mt-2 text-white"
    type="password"
    placeholder="Password"
  />
  


  <button className="bg-red-500 rounded-md p-2 cursor-pointer  mt-2">Sign In</button>
</form>
        <div className="text-white text-center">
          {issignup ? "Already have an account?" : "New to Netflix?"}{" "}
          <span
            className="text-red-600 cursor-pointer"
            onClick={() => setIssignup(!issignup)}
          >
            {issignup ? "Sign In" : "Sign Up Now"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login
