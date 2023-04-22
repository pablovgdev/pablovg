import { Link } from '@chakra-ui/next-js'
import { Button } from '@chakra-ui/react'
import { Social } from 'types/social'

interface SocialButtonProps {
	social: Social
}

export default function SocialButton({ social }: SocialButtonProps) {
	return (
		<Link href={social.url} style={{ textDecoration: 'none' }} target='_blank'>
			<Button colorScheme='purple' size='md' leftIcon={social.icon}>
				{social.name}
			</Button>
		</Link>
	)
}
