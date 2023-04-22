import {
	IconButton,
	IconButtonProps,
	Tooltip,
	useColorMode,
	useColorModeValue
} from '@chakra-ui/react'
import { FaMoon, FaSun } from 'react-icons/fa'

export default function ColorModeSwitcher(props: IconButtonProps) {
	const { toggleColorMode } = useColorMode()
	const text = useColorModeValue('dark', 'light')
	const SwitchIcon = useColorModeValue(FaMoon, FaSun)

	const handleClick = () => {
		toggleColorMode()
	}

	return (
		<Tooltip
			label={text === 'dark' ? 'Dark mode' : 'Light mode'}
			aria-label="A tooltip"
		>
			<IconButton
				size="md"
				fontSize="md"
				variant="ghost"
				color="current"
				marginLeft="2"
				onClick={handleClick}
				icon={<SwitchIcon />}
				_hover={{
					bg: useColorModeValue('gray.200', 'gray.900')
				}}
				{...props}
			/>
		</Tooltip>
	)
}
