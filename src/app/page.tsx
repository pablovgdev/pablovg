'use client'

import { Divider } from '@chakra-ui/react'
import ProfileSection from 'components/ProfileSection'
import SideProjectSection from 'components/SideProjectSection'
import TechStackSection from 'components/TechStackSection'

export default function Home() {
	return (
		<>
			<ProfileSection />
			<Divider my={10} />
			<TechStackSection />
			<Divider my={10} />
			<SideProjectSection />
		</>
	)
}
