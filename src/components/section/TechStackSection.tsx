import {
	Grid,
	Heading,
	SlideFade,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
	useColorModeValue
} from '@chakra-ui/react'
import StackCard from 'components/StackCard'
import {
	backendTechStacks,
	otherTechStacks,
	webTechStacks
} from 'constants/data'

export default function TechStackSection() {
	return (
		<SlideFade in offsetY={80}>
			<Heading
				as="h1"
				fontSize={{ base: '24px', md: '30px', lg: '36px' }}
				mb={3}
			>
				Tech Stack
			</Heading>
			<Text
				textColor={useColorModeValue('gray.600', 'gray.400')}
				fontSize={'lg'}
			>
				A list of my favorite tools and technologies that I use on a regular
				basis.
			</Text>
			<Tabs variant="solid-rounded" mt={5}>
				<TabList>
					<Tab mx={2}>Web</Tab>
					<Tab mx={2}>Mobile</Tab>
					<Tab mx={2}>Others</Tab>
				</TabList>

				<TabPanels>
					<TabPanel>
						<Grid
							templateColumns={[
								'1fr',
								'repeat(2,1fr)',
								'repeat(3, 1fr)',
								'repeat(4, 1fr)'
							]}
							gap={[2, 5, 5, 5]}
						>
							{webTechStacks.map((stack) => (
								<StackCard stack={stack} key={stack?.name} />
							))}
						</Grid>
					</TabPanel>
					<TabPanel>
						<Grid
							templateColumns={[
								'1fr',
								'repeat(2,1fr)',
								'repeat(3, 1fr)',
								'repeat(4, 1fr)'
							]}
							gap={[2, 5, 5, 5]}
						>
							{backendTechStacks.map((stack) => (
								<StackCard stack={stack} key={stack?.name} />
							))}
						</Grid>
					</TabPanel>
					<TabPanel>
						<Grid
							templateColumns={[
								'1fr',
								'repeat(2,1fr)',
								'repeat(3, 1fr)',
								'repeat(4, 1fr)'
							]}
							gap={[2, 5, 5, 5]}
						>
							{otherTechStacks.map((stack) => (
								<StackCard stack={stack} key={stack?.name} />
							))}
						</Grid>
					</TabPanel>
				</TabPanels>
			</Tabs>
		</SlideFade>
	)
}
