'use client'

import React, { useState } from 'react';
import styles from './login.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
interface FormData {
    email: string;
    password: string;
}

const Login = () => {
    const router = useRouter()
    const [formData, setFormData] = useState<FormData>({
        email: '',
        password: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        router.push('/')
    };

    // Disable the submit button if email or password is an empty string
    const isSubmitDisabled = formData.email.trim() === '' || formData.password.trim() === '';

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
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <input 
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder='Email'
                        />
                        <input 
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder='Password'
                        />
                        <div>
                            <p>Forgot password?</p>
                            <p id='signup'>Sign up</p>
                        </div>
                        <button 
                            type='submit'
                            disabled={isSubmitDisabled}
                        >
                            log in
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login

