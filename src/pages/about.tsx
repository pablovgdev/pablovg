import CompanyCard from '../components/CompanyCard'
import { companies, educations } from '../constant'
import {
	PageSlideFade,
	StaggerChildren
} from '../utils/animations/page-transitions'
import { MotionBox } from '../utils/motion'
import {
	Container,
	Flex,
	Heading,
	Stack,
	VStack,
	useColorMode
} from '@chakra-ui/react'
import { BsFillBriefcaseFill } from 'react-icons/bs'
import { FaGraduationCap } from 'react-icons/fa'

export default function About() {
	const { colorMode } = useColorMode()

	return (
		<Container maxW="container.lg" mt={['5', '10']} mb={['5', '10']}>
			<PageSlideFade>
				<StaggerChildren>
					<Flex alignItems="center" my={10}>
						<Flex alignItems={'center'}>
							<Stack pr={3}>
								<BsFillBriefcaseFill size={'30px'} />
							</Stack>

							<Heading>Career</Heading>
						</Flex>
					</Flex>

					<VStack
						spacing={4}
						marginBottom={6}
						align="left"
						mx={[0, 0, 6]}
						mt={5}
					>
						{companies.map((company, index) => (
							<MotionBox whileHover={{ y: -5 }} key={company.title}>
								<CompanyCard
									key={company.title}
									company={company}
									colorMode={colorMode}
								/>
							</MotionBox>
						))}
					</VStack>

					<Flex alignItems="center" my={10}>
						<Flex alignItems="center">
							<Stack pr={3}>
								<FaGraduationCap size={'30px'} />
							</Stack>
							<Heading>Education</Heading>
						</Flex>
					</Flex>

					<VStack
						spacing={4}
						marginBottom={6}
						align="left"
						mx={[0, 0, 6]}
						mt={5}
					>
						{educations.map((education, index) => (
							<MotionBox whileHover={{ y: -5 }} key={education.title}>
								<CompanyCard
									key={education.title}
									company={education}
									colorMode={colorMode}
								/>
							</MotionBox>
						))}
					</VStack>
				</StaggerChildren>
			</PageSlideFade>
		</Container>
	)
}
