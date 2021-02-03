import React, { useState, useEffect } from 'react'
import { css } from '@emotion/react'
import useResize from 'use-resizing'
import Link from 'next/link'

import to from '@core/routepath'
import HomeLayout from '@components/layouts/HomeLayout'
import Etalase from '@components/molecular/Etalase'
import AlertHandler from '@components/atomic/AlertHandler'

const Home = () => {
    const [menuData, setMenuData] = useState(null)
    const [error, setError] = useState('')
    const screen = useResize().width


    useEffect(() => {
        if (!Array.isArray(JSON.parse(localStorage.getItem('fullDataSave')))) {
            localStorage.setItem('fullDataSave', JSON.stringify([]))
            setMenuData([])
        } else {
            setMenuData(JSON.parse(localStorage.getItem('fullDataSave')))
        }
    }, [])

    return (
        <HomeLayout style={style({screen})} className="flex -cc -col">
            <Etalase header="Resep tersimpan" data={menuData} error={error}/>
            <div className="flex -cc">
                <Link href={to.home}><button className="btn">Kembali</button></Link>
            </div>
            { error && <AlertHandler message={error} closeHandler={() => setError('')} color="red"/>}
        </HomeLayout>
    )
}

const style = ({screen}) => css`

`
    
export default Home