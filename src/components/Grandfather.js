import React, {useState} from 'react'
import Dad from './Dad'
import styles from './Grandfather.module.css'

const Grandfather = () => {

  const [colorTheme, setColorTheme] = useState('light');
  const themeHandler = () => {
      colorTheme === 'light' ? setColorTheme('dark') : setColorTheme('light');

  }

  return (
    <>
        <div className={(colorTheme == 'light') ? styles['light'] : styles['dark']}>
          {/* <button onClick={themeHandler}>Toggle</button> */}
                <button onClick={themeHandler} text="Toggle Theme" />
                <h1>Grandfather</h1>
                <Dad />
            </div>
    </>
  )
}

export default Grandfather