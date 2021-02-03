import React from 'react'
import { css } from '@emotion/react'
import Link from 'next/link'
import to from '@core/routepath'
import { useAuth } from '@core/contexts/AuthContext'

const AuthLinks = () => {
    const { authState } = useAuth()

    return (
        <div css={style} className="flex -cc -col">
            <Link href={to.saved}><button className="btn saved-btn">Lihat Resep Tersimpan</button></Link>
            <br/>
            <div className="flex -cc">
                { authState === 'guest' && <Link href={to.login}><button className="btn">Login</button></Link> }
                { authState === 'guest' && <Link href={to.register}><button className="btn">Register</button></Link> }
                { authState === 'user' && <Link href={to.dashboard}><button className="btn">Dashboard</button></Link> }
            </div>
        </div>
    )
}

const style = css`
    margin-top: 24px;
    
    .saved-btn{
        margin-bottom: 24px;
    }
`

export default AuthLinks
