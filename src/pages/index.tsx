import { Container, Divider } from '@chakra-ui/react'
import ProfileSection from 'components/section/ProfileSection'
import SideProjectSection from 'components/section/SideProjectSection'
import TechStackSection from 'components/section/TechStackSection'

export default function Home() {
	return (
		<Container maxW='container.lg' mt={['5', '10']} mb={['5', '10']}>
			<ProfileSection />
			<Divider my={10} />
			<TechStackSection />
			<Divider my={10} />
			<SideProjectSection />
		</Container>
	)
}
