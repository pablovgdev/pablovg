import Footer from './Footer'
import NavBar from './NavBar'
import { ReactNode } from 'react'

interface MainLayoutProps {
	children: ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
	return (
		<>
			<NavBar />
			<main>{children}</main>
			<Footer />
		</>
	)
}
