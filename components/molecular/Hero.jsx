import React from 'react'
import { css } from '@emotion/react'

const Hero = () => {

    return (
        <section css={style} className="flex-cc">
            <div className="hero-image contain-size--m">

            </div>
        </section>
    )
}

const style = css`
    width: 100%;

    .hero-image{
        height: 320px;
        width: 100%;

        background: url('/img/hero-image.png');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;

        border-radius: 0 0 24px 24px;
    }
`

export default Hero