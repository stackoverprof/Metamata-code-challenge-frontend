import React, { useState, useEffect } from 'react'
import { css } from '@emotion/react'
import TypeIt from "typeit-react"
import axios from 'axios'
import { AiFillCloseCircle } from 'react-icons/ai'

import Etalase from '@components/molecular/Etalase'

const SearchBar = ({setMenuData, setError, fetchMenu, menuData, error}) => {
    const [query, setQuery] = useState('')
    const [suggestions, setSuggestions] = useState(null)
    const [totalResults, setTotalResults] = useState(null)
    
    const fetchSuggestions = async () => {
        const res = await axios.post('/api/public/get-menu', {
            amount: 12
        })
        .catch(err => console.log(err))

        const data = res.data.body

        let filler = []
        data.forEach(item => {
            filler.push(item.title)
        })
        
        setSuggestions(filler)
    }

    const handleSearch = (e) => {
        e.preventDefault()
        let keyword = query
        if (!query) {
            const suggested = document.getElementById('suggested').innerHTML.split('<')[0]
            keyword = suggested
            setQuery(keyword)
        }

        axios.post('/api/public/search', {
            keyword: keyword,
            amount: 12
        })
        .then(res => {
            setMenuData(res.data.body.results)
            setTotalResults(res.data.body.totalResults)
        })
        .catch(err => setError(err.response.data.message))
    }

    const closeSearch = () => {
        fetchMenu()
        setTotalResults(null)
    }

    useEffect(() => {
        fetchSuggestions()
    }, [])
    
    return (
        <>
        <section css={style} className="flex -cc -col">
            <div className="contain-size--m flex -cc">
                <div className="inner flex -cc"> 
                    <form onSubmit={handleSearch} className="flex -cc">
                        <InputAnimated placeholder={suggestions} query={query} setQuery={setQuery} fetchMenu={fetchMenu} setTotalResults={setTotalResults}/>
                        <div className="btn-container flex -cc">
                            <button className="btn-green" type="submit">Cari</button>
                        </div>
                    </form>
                </div>
            </div>
            {totalResults !== null && (
                <div className="subheader flex -cc">
                    <p className="header">Sebanyak {totalResults} resep ditemukan</p>
                    <button onClick={closeSearch}>tutup pencarian <AiFillCloseCircle /></button>
                </div>
            )}
            {totalResults === 0 && <p className="header">Lakukan pencarian dalam bahasa inggris</p>}
        </section>
        <Etalase header={totalResults ? 'Hasil Pencarian Resep' : 'Rekomendasi Resep Kami' } data={menuData} error={error}/> 
        </>
    )
}

const InputAnimated = ({placeholder, query, setQuery, fetchMenu, setTotalResults}) => {
    const [focused, setFocused] = useState(false)

    const handleChange = e => {
        if (e.target.value === '') {
            fetchMenu()
            setTotalResults(null)
        }
        setQuery(e.target.value)
    }

    const setting = {
        strings: placeholder,
        speed: 100,
        deleteSpeed: 10,
        waitUntilVisible: true,
        startDelay: 4000,
        nextStringDelay: 4000,
        breakLines: false,
        loop: true
    }

    return (
        <div className="animated">
            <input type="text" value={query} onChange={handleChange} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}/>
            <div className="placeholder flex -sc" style={{opacity: focused ? 0 : 1}}>
                {placeholder && !query && <TypeIt options={setting} element={'label'} id="suggested" className="noselect"/>}
            </div>
        </div>
    )

}

const style = css`
    margin: 24px;

    p.header{
        font-family: Raleway;
        font-size: 16px;
        text-align: center;
        
        color: black;
        margin: 24px;
    }

    .subheader{
        button{
            padding: 4px 12px;
            background: #ddd;
            border: none;
            border-radius: 12px;
        }
    }

    .animated{
        width: 100%;
        position: relative;
        background: #FFFFFF;
        border: 1px solid #9CCD62;
        box-sizing: border-box;
        border-radius: 50px;
        margin: 6px;
        overflow: hidden;

        .placeholder{
            min-width: 100%;
            height: 40px;
            position: absolute;
            top: -2px;
            right: 0;
            pointer-events: none;
            padding: 0 20px;
            color: gray;
            white-space: nowrap;
            text-align: left;

            @media (max-width: 580px) {
                min-width: calc(100% - 74px);
                right: 74px;
            }
        }
    }

    .inner{
        position: relative;
        width: 80%;
    }
    
    input{
        padding: 12px 20px;
        height: 40px;
        width: 100%;
        border: none;
        
        @media (max-width: 580px) {
            padding-right: 94px;
        }
    }

    form{
        width: 100%;
        height: 40px;
        margin: 6px;
        transition: all 0.25s, background 0.1s;

        @media (max-width: 580px) {
            position: relative;
            top: 0;
            right: 0;
            height: 40px;
        }
    }
    button{
        height: 100%;
        padding: 0 40px;
        transition: all 0.25s, background 0.1s;
        margin: 0;
        
        @media (max-width: 580px) {
            height: 72%;
            padding: 0 24px;
            margin-right: 6px;
            font-size: 16px;
        }
    }
    
    .btn-container{
        margin:  0 6px;
        height: 100%;
        @media (max-width: 580px) {
            position: absolute;
            top: 0;
            right: 0;
        }
    }
`

export default SearchBar