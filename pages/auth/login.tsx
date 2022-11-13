import type { NextPage } from 'next'
import Default from '@/layouts/Auth'
import Image from 'next/image'
import LoginUser from '@/images/login_user.svg'

const Login: NextPage = () => {
  return (
    <Default title="Login">
      <>
        <Image src={LoginUser} width={500} alt={"Login user"} />
      </>

      <>
        <h1>Welcome</h1>
        <p>Enter details to login.</p>
        <input type="email" name="" id="" placeholder='Email' />
        <input type="password" name="" id="" placeholder='Password' />
        <div>FORGOT PASSWORD?</div>
        <div><button type="submit" className='w100 button'>LOG IN</button></div>
      </>

    </Default >

  )
}

export default Login
