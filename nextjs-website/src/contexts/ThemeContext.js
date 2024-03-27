'use client'

import { ReactElement, createContext, useState } from 'react'

import { themeData } from '@/data/themeData'

export const ThemeContext = createContext()

// export const ThemeContext = createContext({
//     theme: {},
//     drawerOpen: false,
//     setHandleDrawer: () => {}
// })

// interface ThemePropsInterface {
//     children?: JSX.Element | Array<JSX.Element>;
// }

// function ThemeContextProvider(
//     props: ThemePropsInterface
// ) {
function ThemeContextProvider({ children }) {
    // eslint-disable-next-line
    const [theme, setTheme] = useState(themeData.theme)
    const [drawerOpen, setDrawerOpen] = useState(false)

    const setHandleDrawer = () => {
        setDrawerOpen(!drawerOpen)
    }

    const value = { theme, drawerOpen, setHandleDrawer }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}


export default ThemeContextProvider