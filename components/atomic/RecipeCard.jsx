import React, { useRef, useState } from 'react'
import { css } from '@emotion/react'
import AlertHandler from '@components/atomic/AlertHandler'

const RecipeCard = ({data}) => {
    const [mover, setMover] = useState(false)
    const [error, setError] = useState('')
    const [saved, setSaved] = useState(false)
    const child = useRef(null)
    const parent = useRef(null)

    const stringify = (array) => {
        return JSON.stringify(array)
    }
    const parser = (str) => {
        return JSON.parse(str)
    }
    
    const isAlreadySaved = (id) => {
        if (!Array.isArray(parser(localStorage.getItem('savedRecipes')))) {
            localStorage.setItem('savedRecipes', stringify([]))
            return false
        }
        const fetch = parser(localStorage.getItem('savedRecipes'))
        return fetch.includes(id)
    }

    const handleFavorite = () => {
        if (!isAlreadySaved(data.id)){
            let fetch = parser(localStorage.getItem('savedRecipes'))
                fetch.unshift(data.id)
                localStorage.setItem('savedRecipes', stringify(fetch))

            fullDataSave()
            setSaved(true)
        } else {
            setError('This item has already been saved')
        }
    }

    const fullDataSave = () => {
        if (!Array.isArray(parser(localStorage.getItem('fullDataSave')))) {
            localStorage.setItem('fullDataSave', stringify([]))
        }

        let fetch = parser(localStorage.getItem('fullDataSave'))
            fetch.unshift(data)
            localStorage.setItem('fullDataSave', stringify(fetch))
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
                    <button onClick={handleFavorite} className={`btn-green ${saved ? 'btn-saved' : ''}`}>{saved ? 'saved' : 'favorit'}</button>
                </div>
            </div>
            { error && <AlertHandler message={error} closeHandler={() => setError('')} color="red"/>}
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
    max-width: 500px;

    .btn-saved{
        background: #3A3C42 !important;
        border: 1px solid #9CCD62 !important;
        color: #9CCD62 !important;
    }

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

                &:hover{  
                    background: #7ca14e;
                    color: white;
                }
                &:focus{  
                    background: #6a8845;
                    color: white;
                }
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