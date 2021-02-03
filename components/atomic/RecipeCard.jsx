import React, { useRef, useState } from 'react'
import { css } from '@emotion/react'

const RecipeCard = ({data}) => {
    const [mover, setMover] = useState(false)
    const child = useRef(null)
    const parent = useRef(null)

    const stringify = (array) => {
        return JSON.stringify(array)
    }
    const parse = (str) => {
        return JSON.parse(str)
    }
    
    const isAlreadySaved = (id) => {
        if (localStorage.getItem('rememberMe') == null) {
            return false
        }
        const fetch = parse(localStorage.getItem('savedRecipes'))

        return fetch.includes(id)
    }

    const handleFavorite = () => {
        // if (!isAlreadySaved(data.id)){
            
        //     const fetch = localStorage.getItem('savedRecipes')
        //     const update = [...fetch, data.id]
        //     localStorage.setItem('savedRecipes', stringify(update))
        // } else {
        //     console.log('already saved')
        // }
        localStorage.setItem('savedRecipes', stringify([12378,18888]))
    }

    const imagePlaceholder = (e) =>{
        e.target.onerror = null
        e.target.src = '/img/fallback-image.svg'
    }

    return (
        <div css={style({mover, child, parent})} onMouseOver={() => setMover(true)} onMouseLeave={() => setMover(false)}>
            <div className="image">
                <img src={data.image} onError={imagePlaceholder} alt=""/>
            </div>
            <div className="content">
                <div className="title flex -sc" ref={parent}>
                    <p className="flex -cc" ref={child}>{data.title}</p>
                </div>
                <div className="btn-container flex -cc">
                    <button onClick={handleFavorite} className="btn-green">favorit</button>
                </div>
            </div>
        </div>
    )
}

const style = ({mover, child, parent}) => css`
    display: block;
    width: 100%;
    background: #3A3C42;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 0 4px #0005;

    &:hover p{
        transition: ${!mover ? '0' : child.current.offsetWidth/90}s ease-out;
    }

    .content{
        position: relative;
        height: 40px;
        font-family: Roboto;
        font-weight: bold;
        font-size: 18px;
        white-space: nowrap;
        padding: 8px 12px;
        padding-bottom: 12px;
        
        color: #9CCD62;
        
        .btn-container{
            position: absolute;
            top: 0;
            right: 0;
            height: 100%;
            padding: 0 12px 0 8px;
            background: #3A3C42;

            button{
                background: #9CCD62;
                border-radius: 10px;
                padding: 8px 12px;
                color: black;
                font-weight: bold;
                margin: 0;
            }
        }

        .title{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            margin-right: 4px;

            p{
                position: absolute;
                top: 0;
                margin-left: 12px;
                height: 100%;
                left: ${!mover ? '0' : `-${child.current.offsetWidth - parent.current.offsetWidth + 112}px`};
            }
        }

    }

    div.image{
        margin: 0;
        background: url('/img/fallback-image.svg'), #fffa;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        border-radius: 8px;
        height: 150px;
        width: 100%;
        overflow:hidden;
        
        img{
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
    }
`

export default RecipeCard