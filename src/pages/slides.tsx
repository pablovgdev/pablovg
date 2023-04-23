import { Container } from '@chakra-ui/react'
import LinkButton from 'components/LinkButton'
import { SiTypescript } from 'react-icons/si'

export default function Slides() {
	return (
		<Container maxW='5xl' mt={['5', '10']} mb={['5', '10']}>
			<LinkButton
				data={{
					name: 'Typescript',
					url: 'https://google.com',
					icon: <SiTypescript fontSize='20px' />
				}}
			/>
		</Container>
	)
}
