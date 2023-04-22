import { Box, Heading, SimpleGrid, SlideFade, Text } from '@chakra-ui/react'
import { GitRepo } from 'types/gitRepo'
import GithubCard from '../GithubCard'
import Paragraph from '../Paragraph'

interface GithubSectionProps {
	repos: GitRepo[]
}

export default function GithubSection({ repos }: GithubSectionProps) {
	if (!repos) return <></>
	console.log({ repos })
	return (
		<SlideFade in offsetY={80} delay={0.2}>
			<Heading
				as="h1"
				fontSize={{ base: '24px', md: '30px', lg: '36px' }}
				mb={3}
			>
				Github
			</Heading>
			<Paragraph>
				<Text>List of my top featured github repositories. 🔖</Text>
				<Text>
					Feel free to pay a visit and don't forget to leave me a star! ⭐{' '}
				</Text>
			</Paragraph>
			<Box my={5}>
				<SimpleGrid columns={[1, 1, 2]} spacing={4} mt={4}>
					{repos.map((repo) => (
						<GithubCard gitRepo={repo} key={repo.name} />
					))}
				</SimpleGrid>
			</Box>
		</SlideFade>
	)
}
