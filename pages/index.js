import React, { useState, useEffect } from 'react'

const Main = () => {
    const [state, setState] = useState('')
    useEffect(() => {
        setState('Helllo world')
    }, [])
    return (
        <div>
            Hello world
            {state}
        </div>
    )
}

export default () => (
    <div>
        <div>Helo world</div>
        <Main />
    </div>
)