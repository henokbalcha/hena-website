import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FingerPrintIcon, KeyIcon } from '@heroicons/react/24/outline';

const Login = () => {
  const [isBiometric, setIsBiometric] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent"
          >
            Welcome Back
          </motion.h1>
          <p className="text-gray-400 mt-2">Access your secure digital vault</p>
        </div>

        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
              </div>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-cyber-gray border border-cyber-blue/20 rounded-lg pl-10 pr-4 py-2 text-white focus:outline-none focus:border-cyber-blue"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <KeyIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-cyber-gray border border-cyber-blue/20 rounded-lg pl-10 pr-4 py-2 text-white focus:outline-none focus:border-cyber-blue"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 text-cyber-blue border-cyber-blue/20 rounded focus:ring-cyber-blue"
              />
              <label htmlFor="remember" className="ml-2 block text-sm text-gray-300">
                Remember me
              </label>
            </div>
            <a href="#" className="text-sm text-cyber-blue hover:text-cyber-purple transition-colors">
              Forgot password?
            </a>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-gradient-to-r from-cyber-blue to-cyber-purple text-white py-3 rounded-lg hover:shadow-lg hover:shadow-cyber-blue/20 transition-shadow"
          >
            Sign In
          </motion.button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-cyber-blue/20"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-cyber-dark text-gray-400">Or continue with</span>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={() => setIsBiometric(!isBiometric)}
            className="w-full bg-cyber-gray/50 border border-cyber-blue/20 text-white py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-cyber-gray/80 transition-colors"
          >
            <FingerPrintIcon className="w-5 h-5 text-cyber-blue" />
            <span>Biometric Authentication</span>
          </motion.button>
        </motion.form>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-center text-sm text-gray-400"
        >
          Don't have an account?{' '}
          <a href="#" className="text-cyber-blue hover:text-cyber-purple transition-colors">
            Sign up
          </a>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Login; 