import React from 'react'

const Message = ({heroName}) => {

    if(heroName === 'joker'){
        throw new Error('not a hero')
    }
    return (
        <div>
            {heroName}
        </div>
    )
}

export default Message
