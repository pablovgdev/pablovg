import { menuLinks } from '../constant'
import ColorModeSwitcher from './ColorModeSwitcher'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import {
	Avatar,
	Box,
	Flex,
	HStack,
	IconButton,
	Link as CharkaLink,
	Stack,
	useColorModeValue,
	useDisclosure
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

export default function NavBar() {
	const { isOpen, onOpen, onClose } = useDisclosure()

	const router = useRouter()
	const { asPath } = router

	const navItem = (
		<>
			{menuLinks.map((link) => (
				<NextLink href={link.route} key={link.name} passHref>
					<CharkaLink
						href={link.route}
						px={2}
						py={1}
						rounded={'md'}
						_hover={{
							textDecoration: 'none',
							bg: useColorModeValue('gray.200', 'gray.900')
						}}
						bg={
							link.route === asPath
								? useColorModeValue('gray.200', 'gray.900')
								: 'none'
						}
						color={
							link.route === asPath
								? useColorModeValue('blue.500', 'white')
								: useColorModeValue('black', 'white')
						}
						onClick={isOpen ? onClose : onOpen}
						fontWeight='medium'
					>
						{link.name}
					</CharkaLink>
				</NextLink>
			))}
		</>
	)

	return (
		<>
			<Box bg={useColorModeValue('white', 'gray.700')} px={4} boxShadow={'lg'}>
				<Flex
					h={16}
					alignItems={'center'}
					justifyContent={'space-between'}
					w={['95%', '95%', '95%']}
					maxW={'container.lg'}
					mx="auto"
				>
					<IconButton
						size={'md'}
						icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
						aria-label={'Open Menu'}
						display={['inherit', 'inherit', 'none']}
						onClick={isOpen ? onClose : onOpen}
					/>
					<HStack spacing={8} alignItems={'center'}>
						<Avatar
							as={CharkaLink}
							size="sm"
							href="/"
							src="/profile_picture.png"
							_hover={{ borderColor: 'blue.500' }}
						/>
						<HStack as="nav" spacing="4" display={{ base: 'none', md: 'flex' }}>
							{navItem}
						</HStack>
					</HStack>
					<Flex alignItems={'center'}>
						<ColorModeSwitcher
							justifySelf="flex-end"
							aria-label='Theme switch'
						/>
					</Flex>
				</Flex>

				{isOpen && (
					<Box
						pb={4}
						w={['100%', '100%', '80%']}
						maxW={'container.lg'}
						display={['inherit', 'inherit', 'none']}
					>
						<Stack as={'nav'} spacing={4}>
							{navItem}
						</Stack>
					</Box>
				)}
			</Box>
		</>
	)
}
