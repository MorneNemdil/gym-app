import AuthForm from '@/components/ui/auth-form'
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'

const SignUp = async () => {
  return (
    <section className='flex-center size-full max-small:px-6 '>
      <AuthForm type='sign-up' />
    </section>
  )
}

export default SignUp