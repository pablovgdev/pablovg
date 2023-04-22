import { Link } from '@chakra-ui/next-js'
import {
	Box,
	Flex,
	IconButton,
	Stack,
	Text,
	useColorModeValue
} from '@chakra-ui/react'
import { siteConfig } from 'constants/data'

const iconProps = {
	variant: 'ghost',
	size: 'lg',
	isRound: true
}

export default function Footer() {
	return (
		<Stack
			as='footer'
			isInline
			spacing={[1, 2]}
			p={4}
			justifyContent='space-between'
			alignItems='center'
			w={['100%', '90%', '90%']}
			maxW='container.lg'
			mx='auto'
		>
			<Flex
				flexDirection={['column', 'column', 'row']}
				flexFlow={['column-reverse', 'column-reverse']}
				justifyContent={['center', 'space-between']}
				alignItems='center'
				w='100%'
			>
				<Text
					textAlign='center'
					fontSize='sm'
					color={useColorModeValue('gray.500', 'gray.200')}
				>
					© {new Date().getFullYear()} Pablo Verdugo Garrido{' '}
				</Text>

				<Box textAlign='center'>
					{siteConfig.author.accounts.map((sc) => (
						<IconButton
							key={sc.name}
							as={Link}
							aria-label={sc.name}
							href={sc.url}
							colorScheme={sc.type}
							icon={sc.icon}
							target='_blank'
							{...iconProps}
						/>
					))}
				</Box>
			</Flex>
		</Stack>
	)
}
