import { Head, Html, Main, NextScript } from 'next/document'

export default function NextDocument() {
	return (
		<Html lang='en'>
			<Head>
				<link rel='icon' href='/profile.jpg' />
				<meta name='title' content='pablovgdev' />
				<meta name='description' content='Pablo Verdugo | Software Engineer' />
				<meta
					name='keywords'
					content='React, NodeJS, Javascript, Typescript, NextJS'
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
