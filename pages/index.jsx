import React, { useState, useEffect } from 'react'
import { css } from '@emotion/react'
import useResize from 'use-resizing'
import axios from 'axios'

import HomeLayout from '@components/layouts/HomeLayout'
import Hero from '@components/molecular/Hero'
import SearchBar from '@components/molecular/SearchBar'
import AuthLinks from '@components/molecular/AuthLinks'
import Etalase from '@components/molecular/Etalase'

const Home = () => {
    const [menuData, setMenuData] = useState(null)
    const [error, setError] = useState('')
    const screen = useResize().width

    const fetchMenu = () => {
        axios.post('/api/public/get-menu', { amount: 12 })
        .then(res => setMenuData(res.data.body))
        .catch(err => setError(err.response.data.message))
    }

    useEffect(fetchMenu, [])

    return (
        <HomeLayout style={style({screen})} className="flex -cc -col">
            <Hero />
            <SearchBar setMenuData={setMenuData} setError={setError}/>
            <Etalase data={menuData} error={error}/>
            <AuthLinks />

            { error && <AlertHandler message={error} closeHandler={() => setError('')} color="red"/>}
        </HomeLayout>
    )
}

const style = ({screen}) => css`

`
    
export default Home