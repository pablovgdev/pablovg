import '../../styles/globals.css'
import MainLayout from '../components/MainLayout'
import Meta from '../components/Meta'
import theme from '../layout/theme'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
	const [domLoaded, setDomLoaded] = useState(false)

	useEffect(() => {
		setDomLoaded(true)
	}, [])

	if (!domLoaded) return <></>

	return (
		<>
			<Meta />
			<ChakraProvider theme={theme}>
				<MainLayout>
					<Component {...pageProps} />
				</MainLayout>
			</ChakraProvider>
		</>
	)
}

export default MyApp
