import { sideProjects } from '../../constant'
import { Project } from '../../types/project'
import SideProjectCard from '../SideProjectCard'
import {
	Heading,
	SimpleGrid,
	SlideFade,
	Text,
	useColorModeValue
} from '@chakra-ui/react'

interface SideProjectSectionProps {
	project?: Project
}

export default function SideProjectSection({
	project
}: SideProjectSectionProps) {
	return (
		<SlideFade in offsetY={80}>
			<Heading
				as="h1"
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
		</SlideFade>
	)
}
