import React from 'react'

const Color = (Vadapav) => {
    const selectColor = ['red','green','blue','yellow','pink'];
    const randomColor = selectColor[Math.floor(Math.random()*5)];
    const className = randomColor+'-text';

    return (props) => {
        return (
            <div className={className}>
                <Vadapav {...props}/>
            </div>
        )
    }
}

export default Color