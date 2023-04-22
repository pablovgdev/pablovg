import {
	Box,
	Flex,
	HStack,
	Icon,
	LinkBox,
	Tag,
	Text,
	Tooltip,
	VStack,
	useColorModeValue
} from '@chakra-ui/react'
import { BiGitRepoForked, BiStar } from 'react-icons/bi'
import { FiGithub } from 'react-icons/fi'
import { GitRepo } from 'types/gitRepo'
import { MotionBox } from 'utils/motion'

interface GithubCardProps {
	gitRepo: GitRepo
}

export default function GithubCard({ gitRepo }: GithubCardProps) {
	return (
		<MotionBox whileHover={{ y: -5 }}>
			<LinkBox
				py={2}
				px={[2, 4]}
				mt={2}
				rounded="xl"
				borderWidth="1px"
				bg={useColorModeValue('white', 'gray.800')}
				borderColor={useColorModeValue('gray.300', 'gray.700')}
				_hover={{ borderColor: 'blue.500' }}
				minH="120px"
			>
				<VStack overflow="hidden" align="start" spacing={1}>
					<VStack spacing={1} align="start" w="100%">
						<Flex
							justifyContent={'space-between'}
							width="100%"
							onClick={(e) => window.open(gitRepo.url)}
						>
							<Tooltip hasArrow label={gitRepo.url} placement="top">
								<HStack cursor={'pointer'}>
									<Icon as={FiGithub} boxSize="0.9em" mt={'1px'} />
									<Text
										fontSize="sm"
										noOfLines={1}
										fontWeight="600"
										align="left"
										color={'blue.400'}
									>
										{gitRepo.name}
									</Text>
								</HStack>
							</Tooltip>
							<HStack>
								<Box _hover={{ color: 'blue.500' }}>
									<Icon as={BiStar} boxSize="0.9em" mt={'1px'} />
									<Box as="span" ml="1" fontSize="sm">
										{gitRepo.stargazers_count}
									</Box>
								</Box>
								{gitRepo.forks_count && (
									<Box _hover={{ color: 'blue.500' }}>
										<Icon as={BiGitRepoForked} boxSize="0.9em" mt={'1px'} />
										<Box as="span" ml="1" fontSize="sm">
											{gitRepo.forks_count}
										</Box>
									</Box>
								)}
							</HStack>
						</Flex>
						{gitRepo.language && (
							<Flex justifyContent={'space-between'} width="100%">
								<Box>
									<HStack spacing="1">
										<Tag size="sm">
											<Text fontSize={['0.55rem', 'inherit', 'inherit']}>
												{gitRepo.language}
											</Text>
										</Tag>
									</HStack>
								</Box>
							</Flex>
						)}
					</VStack>
					<Box>
						<Text fontSize="sm" noOfLines={2} textAlign="left">
							{gitRepo.description}
						</Text>
					</Box>{' '}
				</VStack>
			</LinkBox>
		</MotionBox>
	)
}
