import { Container } from '@chakra-ui/react'
import LinkButton from 'components/LinkButton'
import { SiTypescript } from 'react-icons/si'

export default function Home() {
	return (
		<Container maxW='5xl' mt={['5', '10']} mb={['5', '10']}>
			<LinkButton
				data={{
					name: 'Typescript',
					url: '/slides/typescript.html',
					icon: <SiTypescript />
				}}
			/>
		</Container>
	)
}
