import { Container, SlideFade } from '@chakra-ui/react'
import { ReactNode } from 'react'
import Footer from './Footer'
import NavBar from './NavBar'

interface MainLayoutProps {
	children: ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
	return (
		<>
			<NavBar />
			<main>
				<Container maxW='5xl' mt={['5', '10']} mb={['5', '10']}>
					<SlideFade in offsetY={80}>
						{children}
					</SlideFade>
				</Container>
			</main>
			<Footer />
		</>
	)
}
