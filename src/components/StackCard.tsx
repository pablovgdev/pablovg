import {
	Flex,
	IconButton,
	LinkBox,
	LinkOverlay,
	Text,
	useColorModeValue
} from '@chakra-ui/react'
import { TechStack } from 'types/social'
import { MotionBox } from 'utils/motion'

interface StackCardProps {
	stack: TechStack
}

export default function StackCard({ stack }: StackCardProps) {
	return (
		<MotionBox whileHover={{ y: -5 }}>
			<LinkBox
				as="article"
				w="100%"
				p={4}
				borderColor={useColorModeValue('gray.300', 'gray.700')}
				borderRadius={5}
				borderWidth="1px"
				transition=".5s"
				cursor="pointer"
				display="flex"
				role="group"
				_hover={{
					borderColor: 'blue.500'
				}}
			>
				<Flex alignItems="center" justifyContent="space-between">
					<IconButton
						as="a"
						aria-label={stack?.name}
						mr={3}
						_groupHover={{ color: 'blue.500' }}
						icon={stack?.icon}
					/>
					<LinkOverlay href={stack?.url} rel="noopener" isExternal>
						<Flex>
							<Text size="sm" _hover={{ color: 'blue.500' }}>
								{stack?.name}
							</Text>
						</Flex>
					</LinkOverlay>
				</Flex>
			</LinkBox>
		</MotionBox>
	)
}
