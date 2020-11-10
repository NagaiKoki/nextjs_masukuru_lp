import React, { useEffect, createContext, useState } from 'react'
import { mediaQuery } from '../utils/mediaQuery'
import './styles.css'

export const AppContext = createContext({})

// This default export is required in a new `pages/_app.js` file.
const MyApp = ({ Component, pageProps }: { Component: any, pageProps: any }) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const isMobile = mediaQuery(428)
    setIsMobile(isMobile)
  }, [])
  
  return (
    <AppContext.Provider value={isMobile}>
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}

export default MyApp