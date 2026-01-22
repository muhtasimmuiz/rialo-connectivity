import React, { useContext } from 'react';
import { USER_CONTEXT } from './context';

const Logo = () => (
  <div className='w-12 h-12 fixed top-0 left-0 m-6'>
    <img src="/logo.webp" alt="" className='w-full' />
  </div>
);

const LoginView = ({ setView }) => {
  const { setUser, user } = useContext(USER_CONTEXT);

  const handleLogin = () => {

    setView('home');
  }

  return (
    <div className="w-full max-w-md">
      <h1 className="text-white text-3xl font-semibold text-center mb-8">Real World Connectivity</h1>
      <div className="bg-zinc-900 rounded-lg p-8 space-y-4">
        <input
          type="email"
          onChange={(e) => setUser({ email: e.target.value, ...user })}
          placeholder="Email"
          className="w-full bg-black border border-zinc-700 rounded-md px-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-zinc-600"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full bg-black border border-zinc-700 rounded-md px-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-zinc-600"
        />
        <button onClick={handleLogin} className="w-full bg-stone-300 hover:bg-stone-200 text-black font-medium rounded-md px-4 py-3 transition-colors">
          Log in
        </button>
        <div className="text-center">
          <button
            onClick={() => setView('forgot')}
            className="text-gray-400 text-sm hover:text-gray-300 transition-colors"
          >
            Forgot password?
          </button>
        </div>
        <button
          onClick={() => setView('signup')}
          className="w-full bg-transparent border border-zinc-700 hover:border-zinc-600 text-white font-medium rounded-md px-4 py-3 transition-colors"
        >
          Create an account
        </button>
      </div>
    </div>
  )
}

const SignupView = ({ setView }) => {
  const { setUser, user } = useContext(USER_CONTEXT);

  const handleLogin = () => {

    setView('home');
  }
  return (
    <div className="w-full max-w-md">
      <h1 className="text-white text-3xl font-semibold text-center mb-2">Real World Connectivity</h1>
      <p className="text-gray-400 text-center mb-8">Create an new account</p>
      <div className="bg-zinc-900 rounded-lg p-8 space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <input
            onChange={(e) => setUser({ name: e.target.value, ...user })}
            type="text"
            placeholder="First name"
            className="bg-black border border-zinc-700 rounded-md px-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-zinc-600"
          />
          <input
            type="text"
            placeholder="Lastname"
            className="bg-black border border-zinc-700 rounded-md px-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-zinc-600"
          />
        </div>
        <div>
          <label className="text-gray-400 text-sm block mb-2">Date of birth</label>
          <div className="grid grid-cols-3 gap-3">
            <select className="bg-black border border-zinc-700 rounded-md px-3 py-3 text-gray-400 focus:outline-none focus:border-zinc-600">
              <option>Day</option>
            </select>
            <select className="bg-black border border-zinc-700 rounded-md px-3 py-3 text-gray-400 focus:outline-none focus:border-zinc-600">
              <option>Month</option>
            </select>
            <select className="bg-black border border-zinc-700 rounded-md px-3 py-3 text-gray-400 focus:outline-none focus:border-zinc-600">
              <option>Year</option>
            </select>
          </div>
        </div>
        <input
          onChange={(e) => setUser({ email: e.target.value, ...user })}
          type="email"
          placeholder="Email"
          className="w-full bg-black border border-zinc-700 rounded-md px-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-zinc-600"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full bg-black border border-zinc-700 rounded-md px-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-zinc-600"
        />
        <p className="text-gray-500 text-xs">
          By clicking Sign up, you agree to our Terms, Privacy Policy and Cookies Policy
        </p>
        <button onClick={handleLogin} className="w-full bg-stone-300 hover:bg-stone-200 text-black font-medium rounded-md px-4 py-3 transition-colors">
          Sign up
        </button>
        <div className="text-center">
          <span className="text-gray-400 text-sm">Already have an account? </span>
          <button
            onClick={() => setView('login')}
            className="text-white text-sm hover:underline"
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  )
}

const ForgotView = ({ setView }) => (
  <div className="w-full max-w-md">
    <h1 className="text-white text-3xl font-semibold text-center mb-8">Forgot Password</h1>
    <div className="bg-zinc-900 rounded-lg p-8 space-y-4">
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full bg-black border border-zinc-700 rounded-md px-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-zinc-600"
      />
      <button className="w-full bg-stone-300 hover:bg-stone-200 text-black font-medium rounded-md px-4 py-3 transition-colors">
        Reset Password
      </button>
      <div className="text-center">
        <span className="text-gray-400 text-sm">Remembered your password? </span>
        <button
          onClick={() => setView('login')}
          className="text-white text-sm hover:underline"
        >
          Log in
        </button>
      </div>
    </div>
  </div>
);

const AuthUI = ({ setView, view }) => {

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">


      <Logo />
      <div
        className="fixed inset-0 -z-50"
        style={{
          backgroundImage: 'url(/bg.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 1
        }}
      ></div>

      {/* Decorative blur effect */}
      {/* <div className="absolute bottom-0 right-0 w-96 h-96 bg-zinc-800 rounded-full filter blur-[150px] opacity-30" /> */}

      {view === 'login' && <LoginView setView={setView} />}
      {view === 'signup' && <SignupView setView={setView} />}
      {view === 'forgot' && <ForgotView setView={setView} />}

      {view === 'login' && (
        <div className="absolute bottom-6 left-0 right-0">
          <div className="flex justify-center gap-6 text-gray-500 text-sm mb-2">
            <a href="#" className="hover:text-gray-400">Terms</a>
            <a href="#" className="hover:text-gray-400">Help</a>
            <a href="#" className="hover:text-gray-400">Contact</a>
            <a href="#" className="hover:text-gray-400">Settings</a>
            <a href="#" className="hover:text-gray-400">Activity log</a>
          </div>
          <p className="text-center text-gray-600 text-xs">Rialo © 2026</p>
        </div>
      )}
    </div>
  );
};

export default AuthUI;