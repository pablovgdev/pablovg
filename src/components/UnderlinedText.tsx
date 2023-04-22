import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface UnderlinedTextProps {
	children: ReactNode
}

export default function UnderlinedText({ children }: UnderlinedTextProps) {
	return (
		<Box as="span" display="inline-block" position="relative">
			{children}
			<Box
				as="span"
				display="block"
				position="absolute"
				bg={'gray.300'}
				w={'100%'}
				h={'1px'}
				bottom={-2}
			/>
		</Box>
	)
}
