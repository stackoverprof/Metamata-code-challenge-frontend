import React from 'react'
import { css } from '@emotion/react'
import Link from 'next/link'
import useResize from 'use-resizing'
import { useAuth } from '../core/contexts/AuthContext'
import to from '../core/routepath'

import HomeLayout from '../components/layouts/HomeLayout'
import Hero from '../components/molecular/Hero'
    
const Home = () => {
    const screen = useResize().width
    const { authState } = useAuth()

    return (
        <HomeLayout style={style({screen})}>
            <Hero />
            <div className="links">
                { authState === 'guest' && <Link href={to.login}><button>Login</button></Link> }
                { authState === 'guest' && <Link href={to.register}><button>Register</button></Link> }
                { authState === 'user' && <Link href={to.dashboard}><button>Dashboard</button></Link> }
            </div>
        </HomeLayout>
    )
}

const style = ({screen}) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1{
        font-size: 54px;
        margin: 120px 0 8px 0;
    }

    h2{
        font-size: 16px;
        font-weight: bold;
    }

    p{
        margin-bottom: 32px;
        max-width: 520px;
        width: 90%;
        min-width: 320px;
        text-align: center;
    }
    .links{
        margin-top: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

`
    
export default Home