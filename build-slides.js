import { readdir } from 'node:fs/promises'
import { join } from 'node:path'

const markdownRoot = 'src/slides'
const htmlRoot = 'public/slides'

const walk = async (dirPath) =>
	Promise.all(
		await readdir(dirPath, { withFileTypes: true }).then((entries) =>
			entries.map((entry) => {
				const childPath = join(dirPath, entry.name)
				return entry.isDirectory() ? walk(childPath) : childPath
			})
		)
	)

const toHtml = (path) =>
	path.replace(markdownRoot, htmlRoot).replace('.md', '.html')

const toDir = (path) =>
	path.replace(markdownRoot, htmlRoot).split('/').slice(0, -1).join('/')

const build = async (path) => {
	await $`mkdir -p ${toDir(path)}`
	await $`marp ${path} -o ${toHtml(path)}`
}

const buildFiles = async (files) => {
	for (const file of files) {
		if (typeof file === 'string') {
			await build(file)
		} else {
			await buildFiles(file)
		}
	}
}

const files = await walk(markdownRoot)

await buildFiles(files)
