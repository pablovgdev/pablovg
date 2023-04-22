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

const cloudTechStacks = [
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
		name: 'subRental',
		imageUrl: '/subrental.png',
		alt: 'subRental',
		summary: 'A beautiful landing page for a rent to rent company.',
		link: 'https://subrental.vercel.app',
		tech: ['NextJS', 'ChakraUI', 'React']
	},
	{
		name: 'Fang Careers',
		imageUrl: '/fang.webp',
		alt: 'Fang Careers',
		summary: 'A job board with offers from the best companies in the world.',
		link: 'https://fang-careers.vercel.app',
		tech: ['NextJS', 'React', 'Golang']
	},
	{
		name: 'Game of Life',
		imageUrl: '/gol.webp',
		alt: 'Game of Life',
		summary: "An implementation of Conway's Game of Life in React.",
		link: 'https://pablovgdev.github.io/game-of-life/',
		tech: ['React', 'Typescript', 'CSS modules']
	},
	{
		name: 'MineSweeper',
		imageUrl: './minesweeper.webp',
		alt: 'minesweeper',
		summary: 'An implementation of the classic Minesweeper game in React.',
		link: 'https://pablovgdev.github.io/minesweeper/',
		tech: ['React', 'Typescript', 'SASS']
	}
]

export {
	menuLinks,
	frontendTechStacks as webTechStacks,
	backendTechStacks,
	cloudTechStacks as otherTechStacks,
	siteConfig,
	resume,
	sideProjects
}
