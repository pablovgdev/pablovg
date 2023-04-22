import { ChakraProvider } from '@chakra-ui/react'
import MainLayout from 'components/MainLayout'
import Meta from 'components/Meta'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import 'styles/globals.css'
import theme from 'styles/theme'

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
