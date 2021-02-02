import React, { useState, useEffect } from 'react'
import { css } from '@emotion/react'
import TypeIt from "typeit-react"
import axios from 'axios'

const SearchBar = () => {
    const [query, setQuery] = useState('')
    const [suggestions, setSuggestions] = useState(null)
    
    const fetchSuggestions = async () => {
        const res = await axios.post('/api/public/recipe/menu', {
            amount: 20
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
        console.log(query)
        setQuery('')
    }

    useEffect(() => {
        fetchSuggestions()
    }, [])
    
    return (
        <div css={style} className="flex-cc">
            <div className="contain-size--m flex-cc">
                <div className="inner flex-cc"> 
                    <form onSubmit={handleSearch} className="flex-cc">
                        <InputAnimated placeholder={suggestions} query={query} setQuery={setQuery}/>
                        <button type="submit" className="btn">Cari</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

const InputAnimated = ({placeholder, query, setQuery}) => {
    const [focused, setFocused] = useState(false)
    
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
            <input type="text" value={query} onChange={e => setQuery(e.target.value)} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}/>
            <div className="placeholder flex-sc" style={{opacity: focused ? 0 : 1}}>
                {placeholder && !query && <TypeIt options={setting} element={'label'} className="noselect"/>}
            </div>
        </div>
    )

}

const style = css`
    margin: 24px;

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
    }

    form{
        width: 100%;
        height: 40px;
        margin: 6px;
        transition: all 0.25s, background 0.1s;

        @media (max-width: 580px) {
            position: absolute;
            top: 0;
            right: 0;
            height: 40px;
        }
    }
    button{
        height: 100%;
        padding: 0 40px;
        transition: all 0.25s, background 0.1s;

        @media (max-width: 580px) {
            height: 72%;
            padding: 0 24px;
            margin-right: 6px;
            font-size: 16px;
        }
    }
`

export default SearchBar