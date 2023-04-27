'use client'

import LinkButton from 'components/LinkButton'
import { SiTypescript } from 'react-icons/si'

export default function Home() {
	return (
		<LinkButton
			data={{
				name: 'Typescript',
				url: '/slides/typescript.html',
				icon: <SiTypescript />
			}}
		/>
	)
}
