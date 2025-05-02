import React from 'react'

const Button = ({title, icon}) => {
    return (
        <>
            <a href='#!' className="btn">
                {title} {icon}
            </a>
        </>
    )
}

export default Button
