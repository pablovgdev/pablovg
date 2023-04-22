import { Social } from '../types/social'
import { Button, Link } from '@chakra-ui/react'

interface SocialButtonProps {
	social: Social
}

export default function SocialButton({ social }: SocialButtonProps) {
	return (
		<Link href={social.url} isExternal style={{ textDecoration: 'none' }}>
			<Button
				colorScheme="blue"
				size="sm"
				margin={'5px'}
				leftIcon={social.icon}
			>
				{social.name}
			</Button>
		</Link>
	)
}
