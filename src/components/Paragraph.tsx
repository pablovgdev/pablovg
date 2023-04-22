import { Text, TextProps, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

interface ParagraphProps {
	children: React.ReactNode
	textProps?: TextProps
}

export default function Paragraph({ children, textProps }: ParagraphProps) {
	const textColor = useColorModeValue('gray.600', 'gray.400')

	return (
		<Text color={textColor} {...textProps}>
			{children}
		</Text>
	)
}
