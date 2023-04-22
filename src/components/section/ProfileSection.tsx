import {
	Avatar,
	Box,
	Button,
	ButtonGroup,
	HStack,
	Heading,
	Link,
	VStack
} from '@chakra-ui/react'
import Paragraph from 'components/Paragraph'
import SocialButton from 'components/SocialButton'
import { resume } from 'constants/data'
import { BiPhoneCall } from 'react-icons/bi'

export default function ProfileSection() {
	return (
		<Box>
			<HStack justify='space-around' w='full'>
				<VStack>
					<Heading
						as='h1'
						fontSize={{ base: '28px', md: '40px', lg: '48px' }}
						mb={3}
					>
						Hey, I am Pablo! <span className='waving-hand'>👋</span>
					</Heading>
					<Paragraph textProps={{ fontSize: '2xl', lineHeight: 1.6 }}>
						Software Engineer from Spain 🇪🇸
					</Paragraph>
					<Paragraph textProps={{ fontSize: '2xl', lineHeight: 1.6 }}>
						Currently working at <Link color='#03ab81'>Swapcard</Link>
					</Paragraph>
					<Paragraph textProps={{ fontSize: '2xl', lineHeight: 1.6 }}>
						Focused on Backend Development (NodeJS)
					</Paragraph>
				</VStack>
				<Avatar name='Pablo Verdugo' src='/profile.jpg' mb={5} size='2xl' />
			</HStack>
			<Box mt={5}>
				<ButtonGroup>
					<SocialButton social={resume} />
					<Link href={'/contact'} style={{ textDecoration: 'none' }}>
						<Button
							colorScheme='blue'
							size='sm'
							margin={'5px'}
							leftIcon={<BiPhoneCall />}
						>
							Contact Me
						</Button>
					</Link>
				</ButtonGroup>
			</Box>
		</Box>
	)
}
