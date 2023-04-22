import { extendTheme } from '@chakra-ui/react'

const fonts = {
	body: 'Readex Pro, sans-serif',
	heading: 'Readex Pro, serif',
	mono: 'Menlo, monospace'
}

const config = {
	useSystemColorMode: false,
	initialColorMode: 'dark'
}

const theme = extendTheme({ fonts, config })
export default theme
