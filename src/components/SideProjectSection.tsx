import { Heading, SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react'
import SideProjectCard from 'components/SideProjectCard'
import { sideProjects } from 'constants/data'

export default function SideProjectSection() {
	return (
		<>
			<Heading
				as='h1'
				fontSize={{ base: '24px', md: '30px', lg: '36px' }}
				mb={3}
			>
				Projects
			</Heading>
			<Text
				textColor={useColorModeValue('gray.600', 'gray.400')}
				fontSize={'lg'}
			>
				List of projects that I have made in the past.
			</Text>

			<SimpleGrid columns={[1, 1, 2, 2]} mt={5}>
				{sideProjects.map((project) => {
					return <SideProjectCard key={project.name} project={project} />
				})}
			</SimpleGrid>
		</>
	)
}
