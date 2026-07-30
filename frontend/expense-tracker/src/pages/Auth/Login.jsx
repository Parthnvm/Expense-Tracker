import React from 'react'
import AuthLayout from '../../components/layouts/AuthLayout'

export const login = () => {
  return (
    <AuthLayout>
      <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
        <h3 cassName="text-xl font-semibold text-black">Welcome Back</h3>
        <p clasName="text-xs text-state-700 mt-[5px] mb-6"></p>
      </div>
    </AuthLayout>
  )
}

export default Login 