import React from 'react'
import Grandfather from './components/Grandfather'
import MoneyContext from './context/MoneyContext'
import PropertyContext from './context/PropertyContext'


const Main = () => {
    
    return (
        <div>
            <MoneyContext>
                <PropertyContext>
                    <Grandfather />
                </PropertyContext>
            </MoneyContext>

            {/* <Button clickHandler={} /> */}
        </div>
    )
}

export default Main