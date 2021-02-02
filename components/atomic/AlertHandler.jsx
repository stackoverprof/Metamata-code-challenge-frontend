import React, { useState } from 'react'
import { css } from '@emotion/react'

const AlertHandler = ({message, messageDeleter = () => {}, color = 'default',}) => {
    const [show, setShow] = useState(Boolean(message))

    const remover = () => {
        messageDeleter()
        setShow(false)
    }

    return (
    <>        
        {show && (
            <div css={style} className={`flex -bc ${color}`}>
                <p>{message}</p>
                <button onClick={remover} className="no-btn">x</button>
            </div>
        )}
    </>
    )
}

const style = css`
    position: fixed;
    padding: 12px 8px 12px 24px;
    border-radius: 8px;
    bottom: 40px;

    button{
        margin-left: 24px;
    }

    &.default{
        background: #7fa6f0aa;
        border: 1px solid #335ba5;
        
        p, button {
            font-weight: bold;
            color: #164191;
        }
    }
    &.red{
        background: #f07f7faa;
        border: 1px solid #cf2727;
        
        p, button {
            font-weight: bold;
            color: #941010;
        }
    }
`

export default AlertHandler