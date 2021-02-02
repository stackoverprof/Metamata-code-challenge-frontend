import React from 'react'
import { css } from '@emotion/react'
import RecipeCard from '@components/molecular/RecipeCard'

const Etalase = () => {

    return (
        <section css={style} className="flex -cc -col">
            <p className="header">Hasil Pencarian Resep</p>
            <div className="contain-size--m">
                <div className="gridder">
                    <RecipeCard title="Baked Potato with Special Cheese"/>
                    <RecipeCard title="Baked Potato with Special Cheese"/>
                    <RecipeCard title="Baked Potato with Special Cheese"/>
                    <RecipeCard title="Baked Potato with Special Cheese"/>
                    <RecipeCard title="Baked Potato with Special Cheese"/>
                </div>
            </div>
        </section>
    )
}

const style = css`
    .gridder{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        gap: 20px;
        padding: 20px;
    }

    p.header{
        font-family: Raleway;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        text-align: center;
        
        color: #9CCD62;
    }
`

export default Etalase