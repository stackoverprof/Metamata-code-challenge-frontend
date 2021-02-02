import React, { useState, useEffect } from 'react'
import { css } from '@emotion/react'
import TypeIt from "typeit-react"

const food = ['Pancake', 'Fried Rice', 'Spaghetti', 'Potato Wedges']

const SearchBar = () => {
    
    useEffect(() => {
        
    }, [])
    
    return (
        <div css={style} className="flex-cc">
            <div className="contain-size--m flex-cc">
                <div className="inner flex-cc"> 
                    <div className="btn-container flex-cc">
                        <InputAnimated placeholder={food} />
                        <button className="btn">Cari</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const InputAnimated = ({placeholder}) => {
    const [focused, setFocused] = useState(false)
    
    const setting = {
        strings: placeholder,
        speed: 150,
        waitUntilVisible: true,
        startDelay: 4000,
        nextStringDelay: 4000,
        breakLines: false,
        loop: true
    }

    return (
        <div className="animated">
            <input type="text" onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}/>
            <div className="placeholder flex-cc" style={{opacity: focused ? 0 : 1}}>
                <TypeIt options={setting} element={'label'} className="noselect"/>
            </div>
        </div>
    )

}

const style = css`
    margin: 24px;

    .animated{
        position: relative;
        background: #FFFFFF;
        border: 1px solid #9CCD62;
        box-sizing: border-box;
        border-radius: 50px;
        margin: 6px;
        overflow: hidden;

        .placeholder{
            height: 40px;
            position: absolute;
            top: -2px;
            pointer-events: none;
            padding: 0 20px;
            color: gray;
        }
    }

    .inner{
        position: relative;
        width: 80%;
    }
    
    input{
        padding: 0 20px;
        height: 40px;
        width: 100%;
        border: none;
    }

    .btn-container{
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