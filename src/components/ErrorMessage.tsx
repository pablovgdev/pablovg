import { Alert, AlertDescription, AlertIcon, Box } from '@chakra-ui/react'

interface ErrorMessageProps {
	message: string
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
	return (
		<Box my={4}>
			<Alert status="error" borderRadius={4}>
				<AlertIcon />
				<AlertDescription>{message}</AlertDescription>
			</Alert>
		</Box>
	)
}
