'use client'

import MainLayout from './MainLayout'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { ReactNode, useEffect, useState } from 'react'
import theme from 'styles/theme'

export default function Providers({
	children
}: {
	children: ReactNode
}) {
	const [domLoaded, setDomLoaded] = useState(false)

	useEffect(() => {
		setDomLoaded(true)
	}, [])

	if (!domLoaded) return <></>

	return (
		<CacheProvider>
			<ChakraProvider theme={theme}>
				<MainLayout>{children}</MainLayout>
			</ChakraProvider>
		</CacheProvider>
	)
}
