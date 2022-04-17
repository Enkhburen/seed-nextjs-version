import React from 'react'
import { CacheProvider } from '@emotion/react'
import { ThemeProvider, CssBaseline } from '@mui/material'

import createEmotionCache from '../utils/createEmotionCache'
import lightTheme from '../styles/theme/lightTheme'
import '../styles/globals.css'
// import '../styles/slick.min.css'
// import '../styles/slick.theme.min.css'

import SeedMenu from '../components/menu'

const clientSideEmotionCache = createEmotionCache()

const MyApp = (props: any) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <SeedMenu />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp