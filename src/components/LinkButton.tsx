import { Link } from '@chakra-ui/next-js'
import { Button } from '@chakra-ui/react'
import { LinkButtonData } from 'constants/data'

interface LinkButtonProps {
	data: LinkButtonData
}

export default function LinkButton({ data }: LinkButtonProps) {
	return (
		<Link href={data.url} style={{ textDecoration: 'none' }} target='_blank'>
			<Button colorScheme='purple' size='md' leftIcon={data.icon}>
				{data.name}
			</Button>
		</Link>
	)
}
