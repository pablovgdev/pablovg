import ColorModeSwitcher from './ColorModeSwitcher'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import { Link } from '@chakra-ui/next-js'
import {
	Box,
	Flex,
	HStack,
	IconButton,
	Stack,
	useColorModeValue,
	useDisclosure
} from '@chakra-ui/react'
import { menuLinks } from 'constants/data'
import { useRouter } from 'next/router'

export default function NavBar() {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const router = useRouter()
	const { asPath } = router
	const bgColor = useColorModeValue('purple.500', 'purple.200')

	const navItems = (
		<>
			{menuLinks.map((link) => (
				<Link
					href={link.route}
					px={3}
					py={2}
					rounded={'md'}
					_hover={{
						textDecoration: 'none',
						bg: bgColor,
						color: useColorModeValue('white', 'black')
					}}
					bg={link.route === asPath ? bgColor : 'none'}
					color={
						link.route === asPath
							? useColorModeValue('white', 'black')
							: useColorModeValue('black', 'white')
					}
					onClick={isOpen ? onClose : onOpen}
					fontWeight='medium'
				>
					{link.name}
				</Link>
			))}
		</>
	)

	return (
		<>
			<Box bg={useColorModeValue('white', 'gray.700')} boxShadow='md'>
				<Flex justify='center'>
					<Flex
						h={16}
						alignItems='center'
						justifyContent='space-between'
						w='full'
						maxW='5xl'
						px={4}
					>
						<IconButton
							variant={'ghost'}
							size={'md'}
							icon={isOpen ? <CloseIcon boxSize={3} /> : <HamburgerIcon />}
							aria-label={'Open Menu'}
							display={['inherit', 'inherit', 'none']}
							onClick={isOpen ? onClose : onOpen}
						/>
						<HStack as='nav' spacing='4' display={{ base: 'none', md: 'flex' }}>
							{navItems}
						</HStack>
						<Flex alignItems={'center'}>
							<ColorModeSwitcher
								justifySelf='flex-end'
								aria-label='Theme switch'
							/>
						</Flex>
					</Flex>
				</Flex>
				{isOpen && (
					<Box
						pb={4}
						w={['100%', '100%', '80%']}
						maxW='5xl'
						px={4}
						display={['inherit', 'inherit', 'none']}
					>
						<Stack as={'nav'} spacing={4}>
							{navItems}
						</Stack>
					</Box>
				)}
			</Box>
		</>
	)
}
