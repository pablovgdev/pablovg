import { Container } from '@chakra-ui/react'
import GithubSection from 'components/section/GithubSection'
import getGithubRepos from 'constants/getGithubRepos'
import React from 'react'
import styles from 'styles/Home.module.css'
import { GitRepo } from 'types/gitRepo'

interface IGithubPage {
	repos: GitRepo[]
}

const GithubPage: React.FC<IGithubPage> = ({ repos }) => {
	console.log({ repos })
	return (
		<div className={styles.container}>
			<main>
				<Container maxW="container.lg" mt={['5', '10']} mb={['5', '10']}>
					<GithubSection repos={repos} />
				</Container>
			</main>
		</div>
	)
}

export async function getStaticProps() {
	const repos = await getGithubRepos(process.env.GITHUB_USERNAME || '')

	return {
		props: {
			repos: repos || null
		}
	}
}

export default GithubPage
