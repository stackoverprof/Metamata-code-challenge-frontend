import React, { useEffect, useRef, useState } from 'react'
import { css } from '@emotion/react'

const RecipeCard = ({title, imageURL}) => {
    const [mover, setMover] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        setTimeout(() => {
            setMover(true)
        }, 3000)
    }, [])

    return (
        <div css={style({mover, ref})}>
            <img src={imageURL} alt=""/>
            <div className="content">
                <div className="title flex -sc">
                    <p className="flex -cc" ref={ref}>{title}</p>
                </div>
                <button className="btn-green">favorit</button>
            </div>
        </div>
    )
}

const style = ({mover, ref}) => css`
    display: block;
    width: 100%;
    background: #3A3C42;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 0 4px #0005;

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
        
        button{
            position: absolute;
            right: 12px;
            background: #9CCD62;
            border-radius: 10px;
            padding: 8px 12px;
            color: black;
            font-weight: bold;
            margin: 0;
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
                transition: 1s;
                top: 0;
                margin-left: 12px;
                height: 100%;
                left: ${!mover ? '0' : `-${ref.current.offsetWidth - 178 }px`};
            }
        }

        img{
            margin: 0;
        }
    }

    img{
        border-radius: 8px;
        height: 150px;
        width: 100%;
        object-fit: cover;
    }
`

export default RecipeCard