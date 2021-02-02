import React, { useState } from 'react'
import { css } from '@emotion/react'

const AlertHandler = ({message, color = 'default'}) => {
    const [show, setShow] = useState(Boolean(message))

    return (
    <>        
        {show && (
            <div css={style} className={color}>
                <p>{message}</p>
            </div>
        )}
    </>
    )
}

const style = css`
    position: fixed;
    padding: 12px 24px;
    border-radius: 8px;
    bottom: 40px;

    &.default{
        background: #7fa6f0aa;
        border: 1px solid #335ba5;
        p{
            color: #164191;
            font-weight: bold;
        }
    }
    &.red{
        background: #f07f7faa;
        border: 1px solid #cf2727;
        p{
            color: #941010;
            font-weight: bold;
        }
    }
`

export default AlertHandler