import React, { useState, createContext } from 'react'
import { createMuiTheme } from "@material-ui/core/styles";

const defaultTheme = createMuiTheme({})
const { breakpoints } = defaultTheme
let initTheme = createMuiTheme({
    ...defaultTheme,
    typography: {
        subtitle1: {
            fontSize: 12,
        },
        body1: {
            fontWeight: 500,
        },
        h1: {
            fontSize: "5rem",
            [breakpoints.down("md")]: {
                fontSize: "3rem"
            }
        },
    },
    palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#f44336',
            // main: color.primary,
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            //light: '#0066ff',
            main: '#566579',
            // dark: will be calculated from palette.secondary.main,
        },
        text: {
            // primary: '#3a3535',
            // secondary: '#3a3535'
        }
    },

});

export const ThemeContext = createContext<ThemeContextInterface>({
    theme: initTheme,
    setColors: () => {
        throw new Error('setColors() not implemented');
    },
});

const ThemeContextProvider = (props: { children: React.ReactNode; }) => {
    const [theme, setTheme] = useState(initTheme)

    const setColors = (hex: string, type: string) => {
        console.log('theme', theme)
        console.log('hex', hex)
        if (type === 'primary') theme.palette.primary.main = hex
        if (type === 'secondary') theme.palette.secondary.main = hex

        setTheme({
            ...theme
        })

    }

    return (
        <ThemeContext.Provider value={{
            theme,
            setColors
        }}>
            {props.children}
        </ThemeContext.Provider>
    )

}

export default ThemeContextProvider


