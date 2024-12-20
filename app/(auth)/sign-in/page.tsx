import AuthForm from '@/components/ui/auth-form'
import React from 'react'

const SignIn = () => {
  return (
    <section className='flex-center size-full max-small:px-6 '>
      <AuthForm type='sign-in' />
    </section>
  )
}

export default SignIn