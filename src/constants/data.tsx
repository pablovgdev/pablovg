import { CgAlbum } from 'react-icons/cg'
import { FaGithub, FaJs, FaLinkedin, FaNodeJs, FaReact } from 'react-icons/fa'
import {
	SiAmazonaws,
	SiChakraui,
	SiFirebase,
	SiGmail,
	SiGoland,
	SiJenkins,
	SiPython,
	SiRedux,
	SiTypescript
} from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'

const menuLinks = [
	{ name: 'About Me', route: '/' },
	{ name: 'Slides', route: '/slides' }
]

const siteConfig = {
	copyright: `Copyright © ${new Date().getFullYear()} Pablo Verdugo Garrido. All Rights Reserved.`,
	author: {
		name: 'Pablo Verdugo',
		accounts: [
			{
				url: 'https://github.com/pablovgdev',
				icon: <FaGithub />,
				name: 'Github',
				type: 'gray'
			},
			{
				url: 'https://www.linkedin.com/in/pablovgdev',
				icon: <FaLinkedin />,
				name: 'Linkedin',
				type: 'linkedin'
			},
			{
				url: 'mailto:pablovgdev@gmail.com',
				icon: <SiGmail />,
				name: 'Gmail',
				type: 'red'
			}
		]
	}
}

const resume = {
	url: 'https://drive.google.com/file/d/1KGmRWIUJHt4falWmepVtdt3cRG-dIxYY/view?usp=sharing',
	icon: <CgAlbum />,
	name: 'Resume'
}

const backendTechStacks = [
	{
		name: 'Typescript',
		icon: <SiTypescript fontSize='20px' />,
		url: 'https://www.typescriptlang.org'
	},
	{
		name: 'NodeJS',
		icon: <FaNodeJs fontSize='20px' />,
		url: 'https://www.nodejs.org'
	},
	{
		name: 'Golang',
		icon: <SiGoland fontSize='20px' />,
		url: 'https://go.dev'
	},
	{
		name: 'Python',
		icon: <SiPython fontSize='20px' />,
		url: 'https://www.python.org'
	}
]

const frontendTechStacks = [
	{
		name: 'React',
		icon: <FaReact fontSize='20px' />,
		url: 'https://reactnative.dev'
	},
	{
		name: 'NextJS',
		icon: <TbBrandNextjs fontSize='20px' />,
		url: 'https://nextjs.org'
	},
	{
		name: 'Typescript',
		icon: <SiTypescript fontSize='20px' />,
		url: 'https://www.typescriptlang.org'
	},
	{
		name: 'Javascript',
		icon: <FaJs fontSize='20px' />,
		url: 'https://www.javascript.com'
	},
	{
		name: 'Redux',
		icon: <SiRedux fontSize='20px' />,
		url: 'https://redux.js.org'
	},
	{
		name: 'Chakra UI',
		icon: <SiChakraui fontSize='20px' />,
		url: 'https://chakra-ui.com'
	}
]

const cicdTechStacks = [
	{
		name: 'Jenkins',
		icon: <SiJenkins fontSize='20px' />,
		url: 'https://www.jenkins.io'
	},
	{
		name: 'Firebase',
		icon: <SiFirebase fontSize='20px' />,
		url: 'https://firebase.google.com'
	},
	{
		name: 'Github',
		icon: <FaGithub fontSize='20px' />,
		url: 'https://www.github.com'
	},
	{
		name: 'AWS',
		icon: <SiAmazonaws fontSize='20px' />,
		url: 'https://aws.amazon.com'
	}
]

const sideProjects = [
	{
		name: '3CommasClub NFT',
		imageUrl: '/3commas.png',
		alt: '3commasclub',
		summary:
			'NFC business card builder linked with unique NFT. Build business profile embed with NFC that allows others to scan and connect.',
		link: 'https://nextjs-3commasclub-frontend.vercel.app',
		tech: ['NextJS', 'ChakraUI', 'Ant Design', 'Ant Design Pro']
	},
	{
		name: 'KlusterX Player Portal',
		imageUrl: '/klusterx_player.png',
		alt: 'klusterx',
		summary:
			'Online Casino Player Portal, built with NextJS, TailwindCSS and MantineUI',
		tech: ['NextJS', 'TailwindCSS', 'MantineUI', 'Zustand']
	},
	{
		name: 'KlusterX Tenant Portal',
		imageUrl: '/klusterx_tenant.png',
		alt: 'klusterx',
		summary: 'Online Casino Tenant Portal, built with Ant Design Pro',
		tech: ['UmiJS', 'Ant Design', 'Ant Design Pro']
	},
	{
		name: 'Chativo',
		imageUrl:
			'https://play-lh.googleusercontent.com/tgLiP-ZL-sBuZt2RzDU1tN88Cp7NPbdjF7c0311_dui86f1HrAQM0j4gXaRE0pb5zW0=s360-rw',
		alt: 'chativo',
		summary:
			'Enterprise ready live-chat base customer support & engagement software',
		tech: ['Android', 'Kotlin', 'Android Jetpack', 'Coroutine Flow'],
		link: 'https://play.google.com/store/apps/details?id=io.chativo.chat'
	},
	{
		name: 'ChativoV',
		imageUrl:
			'https://play-lh.googleusercontent.com/5U5s7sSIuzP6CygPkU2ZYxyOXT-MKv7oiyweGKHgkEgVameOcYt44rnXqCTWZJNZgVqn=s360-rw',
		alt: 'chativo-v',
		summary:
			'Live-chat specifically designed for visitors to communicate with real-time agent instantly',
		tech: ['React Native', 'Javascript', 'Redux', 'Redux Saga', 'RealmJS'],
		link: 'https://play.google.com/store/apps/details?id=io.chativo.visitor'
	}
]

export {
	menuLinks,
	frontendTechStacks as webTechStacks,
	backendTechStacks,
	cicdTechStacks as otherTechStacks,
	siteConfig,
	resume,
	sideProjects
}
