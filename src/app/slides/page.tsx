'use client'

import { HStack } from '@chakra-ui/react'
import LinkButton from 'components/LinkButton'
import { SiNodedotjs, SiTypescript } from 'react-icons/si'

export default function Home() {
	return (
		<HStack>
			<LinkButton
				data={{
					name: 'NodeJS',
					url: '/slides/nodejs.html',
					icon: <SiNodedotjs />
				}}
			/>
			<LinkButton
				data={{
					name: 'Typescript',
					url: '/slides/typescript.html',
					icon: <SiTypescript />
				}}
			/>
		</HStack>
	)
}
