import React from 'react'
import { css } from '@emotion/react'
import RecipeCard from '@components/atomic/RecipeCard'
import useResize from 'use-resizing'

const Etalase = ({data}) => {
    const screen = useResize().width

    return (
        <section css={style} className="flex -cc -col">
            <p className="header">Hasil Pencarian Resep</p>
            <div className={`contain-size--m ${screen <= 616 ? 'maw-300' : ''} ${data && data.length === 1 ? 'maw-300' :''} ${data && data.length === 2 ? 'maw-600' :''}`}>
                <div className="gridder">
                    {data?.map((item) => (
                        <RecipeCard key={item.id} data={item}/>
                    ))}
                    {!data && <p>Loading...</p>}
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
    
    .maw-300{
        max-width: 300px;
    }
    .maw-600{
        max-width: 600px;
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