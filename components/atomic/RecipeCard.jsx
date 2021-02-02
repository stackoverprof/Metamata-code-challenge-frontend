import React from 'react'
import { css } from '@emotion/react'

const RecipeCard = ({title, imageURL}) => {

    return (
        <div css={style}>
            <img src={imageURL} alt=""/>
            <div className="content flex -bc">
                <p>{title}</p>
                <button className="btn-green">favorit</button>
            </div>
        </div>
    )
}

const style = css`
    display: block;
    width: 100%;
    background: #3A3C42;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 0 4px #0005;

    .content{
        height: 40px;
        font-family: Roboto;
        font-weight: bold;
        font-size: 18px;
        white-space: nowrap;
        padding: 8px 12px;
        padding-bottom: 12px;
        
        color: #9CCD62;
        
        button{
            background: #9CCD62;
            border-radius: 10px;
            padding: 8px 12px;
            color: black;
            font-weight: bold;
            margin: 0;
        }

        p{
            max-width: calc(100% - 78px);
            overflow: hidden;
            margin-right: 4px;
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