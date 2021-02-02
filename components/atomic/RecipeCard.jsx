import React, { useRef, useState } from 'react'
import { css } from '@emotion/react'

const RecipeCard = ({title, imageURL}) => {
    const [mover, setMover] = useState(false)
    const child = useRef(null)
    const parent = useRef(null)

    return (
        <div css={style({mover, child, parent})} onMouseOver={() => setMover(true)} onMouseLeave={() => setMover(false)}>
            <img src={imageURL} alt=""/>
            <div className="content">
                <div className="title flex -sc" ref={parent}>
                    <p className="flex -cc" ref={child}>{title}</p>
                </div>
                <div className="btn-container flex -cc">
                    <button className="btn-green">favorit</button>
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
            top: -2px;
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