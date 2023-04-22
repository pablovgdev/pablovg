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
import ColorModeSwitcher from './ColorModeSwitcher'

export default function NavBar() {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const router = useRouter()
	const { asPath } = router
	const bgColor = useColorModeValue('purple.500', 'purple.200')

	const navItem = (
		<>
			{menuLinks.map((link) => (
				<Link
					href={link.route}
					px={3}
					py={1}
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
						w='95%'
						maxW='container.lg'
						px={4}
					>
						<IconButton
							size={'md'}
							icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
							aria-label={'Open Menu'}
							display={['inherit', 'inherit', 'none']}
							onClick={isOpen ? onClose : onOpen}
						/>
						<HStack as='nav' spacing='4' display={{ base: 'none', md: 'flex' }}>
							{navItem}
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
