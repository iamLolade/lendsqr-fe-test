import React from 'react';
import styles from './login.module.scss';
import Image from 'next/image';

const Login = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <Image src='/icons/brandLogo.svg' alt='Brand Logo' width={173.765} height={36} />
            <Image src='/images/pablo-sign-in.svg' alt='Signin Illustration' width={600} height={337.569} />
        </div>
        <div className={styles.right}>
            <Image src='/icons/brandLogo.svg' alt='Brand Logo' width={173.765} height={36} className={styles.mobileLogo} />
            <div>
                <h1>Welcome!</h1>
                <p>Enter details to login.</p>
                <form className={styles.form}>
                    <input 
                        placeholder='Email'
                    />
                    <input 
                        placeholder='Password'
                    />
                    <div>
                        <p>Forgot password?</p>
                        <p>Sign up</p>
                    </div>
                    <button>
                        log in
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login

