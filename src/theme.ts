import { extendTheme } from "@chakra-ui/react"

const config = {
    colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        gray: {
            50: '#f7fafc',
            // ...
            900: '#171923',
        },
        // ...
    },
}

const theme = extendTheme({ config });

export default theme;