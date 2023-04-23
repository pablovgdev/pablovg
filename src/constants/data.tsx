import { ReactElement } from 'react'
import { CgAlbum } from 'react-icons/cg'
import { FaGithub, FaJs, FaLinkedin, FaNodeJs, FaReact } from 'react-icons/fa'
import {
	SiAmazonaws,
	SiChakraui,
	SiFirebase,
	SiGmail,
	SiGoland,
	SiJenkins,
	SiMongodb,
	SiMysql,
	SiPython,
	SiRedux,
	SiTypescript
} from 'react-icons/si'
import { TbBrandNextjs, TbBrandVercel } from 'react-icons/tb'

export const menuLinks = [
	{ name: 'About Me', route: '/' },
	{ name: 'Slides', route: '/slides' }
]

export const siteConfig = {
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

export interface LinkButtonData {
	name: string
	url: string
	icon?: ReactElement
}

export const resume: LinkButtonData = {
	name: 'Resume',
	url: 'https://drive.google.com/file/d/1KGmRWIUJHt4falWmepVtdt3cRG-dIxYY/view?usp=sharing',
	icon: <CgAlbum />
}

export const backendTechStacks: LinkButtonData[] = [
	{
		name: 'Typescript',
		url: 'https://www.typescriptlang.org',
		icon: <SiTypescript fontSize='20px' />
	},
	{
		name: 'NodeJS',
		url: 'https://www.nodejs.org',
		icon: <FaNodeJs fontSize='20px' />
	},
	{
		name: 'Golang',
		url: 'https://go.dev',
		icon: <SiGoland fontSize='20px' />
	},
	{
		name: 'Python',
		url: 'https://www.python.org',
		icon: <SiPython fontSize='20px' />
	},
	{
		name: 'MySQL',
		url: 'https://www.mysql.com',
		icon: <SiMysql fontSize='20px' />
	},
	{
		name: 'MongoDB',
		url: 'https://www.mongodb.com',
		icon: <SiMongodb fontSize='20px' />
	}
]

export const frontendTechStacks: LinkButtonData[] = [
	{
		name: 'React',
		url: 'https://react.dev',
		icon: <FaReact fontSize='20px' />
	},
	{
		name: 'NextJS',
		url: 'https://nextjs.org',
		icon: <TbBrandNextjs fontSize='20px' />
	},
	{
		name: 'Typescript',
		url: 'https://www.typescriptlang.org',
		icon: <SiTypescript fontSize='20px' />
	},
	{
		name: 'Javascript',
		url: 'https://www.javascript.com',
		icon: <FaJs fontSize='20px' />
	},
	{
		name: 'Redux',
		url: 'https://redux.js.org',
		icon: <SiRedux fontSize='20px' />
	},
	{
		name: 'Chakra UI',
		url: 'https://chakra-ui.com',
		icon: <SiChakraui fontSize='20px' />
	}
]

export const cloudTechStacks: LinkButtonData[] = [
	{
		name: 'Jenkins',
		url: 'https://www.jenkins.io',
		icon: <SiJenkins fontSize='20px' />
	},
	{
		name: 'Firebase',
		url: 'https://firebase.google.com',
		icon: <SiFirebase fontSize='20px' />
	},
	{
		name: 'Github',
		url: 'https://www.github.com',
		icon: <FaGithub fontSize='20px' />
	},
	{
		name: 'AWS',
		url: 'https://aws.amazon.com',
		icon: <SiAmazonaws fontSize='20px' />
	},
	{
		name: 'Vercel',
		url: 'https://vercel.com',
		icon: <TbBrandVercel fontSize='20px' />
	}
]

export interface SideProject {
	name: string
	imageUrl: string
	alt: string
	summary: string
	tech: string[]
	link?: string
}

export const sideProjects: SideProject[] = [
	{
		name: 'subRental',
		imageUrl: '/img/subrental.png',
		alt: 'subRental',
		summary: 'A beautiful landing page for a rent to rent company.',
		link: 'https://subrental.vercel.app',
		tech: ['NextJS', 'ChakraUI', 'React']
	},
	{
		name: 'Fang Careers',
		imageUrl: '/img/fang.webp',
		alt: 'Fang Careers',
		summary: 'A job board with offers from the best companies in the world.',
		link: 'https://fang-careers.vercel.app',
		tech: ['NextJS', 'React', 'Golang']
	},
	{
		name: 'Game of Life',
		imageUrl: '/img/gol.webp',
		alt: 'Game of Life',
		summary: "An implementation of Conway's Game of Life in React.",
		link: 'https://pablovgdev.github.io/game-of-life/',
		tech: ['React', 'Typescript', 'CSS modules']
	},
	{
		name: 'MineSweeper',
		imageUrl: '/img/minesweeper.webp',
		alt: 'minesweeper',
		summary: 'An implementation of the classic Minesweeper game in React.',
		link: 'https://pablovgdev.github.io/minesweeper/',
		tech: ['React', 'Typescript', 'SASS']
	}
]
