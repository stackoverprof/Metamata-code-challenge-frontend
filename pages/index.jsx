import React from 'react'
import { css } from '@emotion/react'
import useResize from 'use-resizing'

import HomeLayout from '@components/layouts/HomeLayout'
import Hero from '@components/molecular/Hero'
import SearchBar from '@components/molecular/SearchBar'
import AuthLinks from '@components/molecular/AuthLinks'
import Etalase from '@components/molecular/Etalase'

const Home = () => {
    const screen = useResize().width

    return (
        <HomeLayout style={style({screen})} className="flex -cc -col">
            <Hero />
            <SearchBar />
            <Etalase />
            <AuthLinks />
        </HomeLayout>
    )
}

const style = ({screen}) => css`

`
    
export default Home