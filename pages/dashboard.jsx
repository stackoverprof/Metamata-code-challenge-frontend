import React, { useState } from 'react'
import { css } from '@emotion/react'
import Link from 'next/link'
import axios from 'axios'
import to from '../core/routepath'
import { useAuth } from '../core/contexts/AuthContext'
import UserOnlyRoute from '../core/routeblocks/UserOnlyRoute'

import MainLayout from '../components/layouts/MainLayout'
import Spinner from '../components/atomic/spinner/Circle'
    
const Dashboard = () => {
    const { currentUser, role, authMethods } = useAuth()
    const [alert, setAlert] = useState('')
    const [issuedEmail, setIssuedEmail] = useState('')

    const handleSetAdmin = async (e) => {
        e.preventDefault()
        setAlert(null)
        
        axios.post('/api/private/admin/set', {
            userToken: await currentUser.getIdToken(),
            email: issuedEmail
        })
        .then(res => setAlert(res.data.message))
        .catch(err => setAlert(err.response.data.message))
    }

    return (
        <UserOnlyRoute redirect={to.login}>
            {currentUser && (
                <MainLayout style={style}>
                    <p>Dashboard of {currentUser.displayName}</p>
                    <div>
                        <img src={currentUser.photoURL} alt=""/>
                        <Link href={to.home}><button className="btn">Back Home</button></Link>
                        <button className="btn red" onClick={authMethods.handleSignout}>LOGOUT</button>
                    </div>
                    <p>Admin Status : {role.admin ? 'admin' : 'false'}</p>
                    {role.admin && (
                        <form onSubmit={handleSetAdmin}>
                            <input type="email" value={issuedEmail} required onChange={e => setIssuedEmail(e.target.value)}/>
                            <button className="btn" type="submit">{alert === null ? <Spinner /> : 'set admin'}</button>
                        </form>
                    )}
                    {alert && <p className="alert-box">{alert}</p>}
                </MainLayout>
            )}
        </UserOnlyRoute>
    )
}
const style = css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .alert-box{
        position: fixed;
        bottom: 32px;
        padding: 12px 32px;
        background: #0006;
        border-radius: 4px;
        color: white;
    }
    
    div{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    p{

        margin-top: 54px;
        text-align: center;
    }

    img{
        margin: 24px;
    }

    input{
        border: 1px solid #000;
    }
`
    
export default Dashboard