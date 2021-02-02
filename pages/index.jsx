import React from 'react'
import { css } from '@emotion/react'
import useResize from 'use-resizing'
import useSWR from 'swr'
import axios from 'axios'

import HomeLayout from '@components/layouts/HomeLayout'
import Hero from '@components/molecular/Hero'
import SearchBar from '@components/molecular/SearchBar'
import AuthLinks from '@components/molecular/AuthLinks'
import Etalase from '@components/molecular/Etalase'

const Home = () => {
    const screen = useResize().width

    const { data, error } = useSWR('/api/public/recipe/menu', url => axios.post(url, {
        amount: 12
    }, { isPaused: true }).then(res => res.data))

    return (
        <HomeLayout style={style({screen})} className="flex -cc -col">
            <Hero />
            <SearchBar />
            <Etalase data={data} error={error}/>
            <AuthLinks />
        </HomeLayout>
    )
}

const style = ({screen}) => css`

`
    
export default Home