import React from 'react'
import { css } from '@emotion/react'
import RecipeCard from '@components/atomic/RecipeCard'
import AlertHandler from '@components/atomic/AlertHandler'

const Etalase = ({data, error}) => {

    return (
        <section css={style} className="flex -cc -col">
            <p className="header">Hasil Pencarian Resep</p>
            <div className="contain-size--m">
                <div className="gridder">
                    {data?.body.map((item) => (
                        <RecipeCard key={item.id} data={item}/>
                    ))}
                    {!data && <p>Loading...</p>}
                </div>
            </div>
            <AlertHandler message={error} color="red"/>
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
        margin: 24px;
    }
`

export default Etalase