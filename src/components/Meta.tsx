import Head from 'next/head'
import { useRouter } from 'next/router'
import { capitalise } from 'utils/capitalise'

export default function Meta() {
	const router = useRouter()

	let title
	if (router.pathname === '/') {
		title = 'pablovgdev'
	} else {
		const path = router.pathname.split('/').pop()
		title = `Teo | ${capitalise(path)}`
	}

	return (
		<Head>
			<link rel='icon' href='/profile.jpg' />
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link
				href="https://fonts.googleapis.com/css2?family=Readex+Pro:wght@300;400;500;600;700&display=swap"
				rel="stylesheet"
			/>
			<meta name='title' content='pablovgdev' />
			<meta name='description' content='Pablo Verdugo | Software Engineer' />
			<meta
				name='keywords'
				content='React, NodeJS, Javascript, Typescript, NextJS'
			/>
			<title>{title}</title>
		</Head>
	)
}
