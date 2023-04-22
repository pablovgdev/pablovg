import { Container, Divider } from '@chakra-ui/react'
import ProfileSection from 'components/ProfileSection'
import SideProjectSection from 'components/SideProjectSection'
import TechStackSection from 'components/TechStackSection'

export default function Home() {
	return (
		<Container maxW='5xl' mt={['5', '10']} mb={['5', '10']}>
			<ProfileSection />
			<Divider my={10} />
			<TechStackSection />
			<Divider my={10} />
			<SideProjectSection />
		</Container>
	)
}
