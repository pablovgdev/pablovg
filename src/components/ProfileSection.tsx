import { Image, Link } from '@chakra-ui/next-js'
import { Box, Flex, Heading, VStack } from '@chakra-ui/react'
import Paragraph from 'components/Paragraph'
import SocialButton from 'components/SocialButton'
import { resume } from 'constants/data'

export default function ProfileSection() {
	return (
		<Box>
			<Flex
				justify='space-between'
				w='full'
				direction={{ base: 'column-reverse', md: 'row' }}
			>
				<VStack align='flex-start' w={{ base: '100%', md: '50%' }}>
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
						Currently working at{' '}
						<Link
							color='#03ab81'
							href='https://swapcard.com'
							target='_blank'
							fontWeight='bold'
						>
							Swapcard
						</Link>
					</Paragraph>
					<Paragraph textProps={{ fontSize: '2xl', lineHeight: 1.6 }}>
						Focused on Backend Development
					</Paragraph>
					<Box pt={5}>
						<SocialButton social={resume} />
					</Box>
				</VStack>
				<Flex
					w={{ base: '100%', md: '50%' }}
					justify='center'
					pt={{ md: 10 }}
					py={3}
				>
					<Image
						src='/profile.jpg'
						mb={5}
						width={220}
						height={220}
						borderRadius='50%'
						alt='profile picture'
					/>
				</Flex>
			</Flex>
		</Box>
	)
}
