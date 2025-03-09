import micromatch from 'micromatch'
import { readFileSync, writeFileSync } from 'node:fs'

const TEMP_TSCONFIG_FILE = '.tsconfig'

export default function config(files: string[]) {
  const javascriptExtensions = generateCodeExtensions('js')
  const typescriptExtensions = generateCodeExtensions('ts')
  const codeExtensions = [javascriptExtensions, typescriptExtensions].flat()
  // prettier-ignore
  const markupExtensions = ['css', 'scss', 'html', 'json', 'json5', 'jsonc', 'md', 'markdown', 'mdx', 'yaml', 'yml', 'graphql', 'gql']
  const codeFiles = micromatch.match(files, generateMatchers(codeExtensions))
  const markupFiles = micromatch.match(files, generateMatchers(markupExtensions))
  const filesToFormat = [codeFiles, markupFiles].flat()
  const tscTask = `tsc --project ${TEMP_TSCONFIG_FILE}`
  const tscCleanupTask = `rimraf ${TEMP_TSCONFIG_FILE}`
  const formatTask = `prettier ${filesToFormat.join(' ')} --write`
  const lintTask = `eslint ${codeFiles.join(' ')} --fix`
  const tasks = []
  createTemporaryTsconfig(codeFiles)
  if (codeFiles.length > 0) tasks.push(tscTask, tscCleanupTask)
  if (filesToFormat.length > 0) tasks.push(formatTask)
  if (codeFiles.length > 0) tasks.push(lintTask)
  return tasks
}

function createTemporaryTsconfig(files: string[]) {
  const tsconfigContent = readFileSync('./tsconfig.json', { encoding: 'utf8' })
  const rootConfigs = JSON.parse(tsconfigContent)
  const config = {
    compilerOptions: { ...rootConfigs.compilerOptions, incremental: false },
    exclude: [...rootConfigs.exclude, 'eslint.config.ts'],
    include: files,
  }
  writeFileSync(TEMP_TSCONFIG_FILE, JSON.stringify(config))
}

function generateCodeExtensions(suffix: string) {
  const base = ['', 'm', 'c']
  return base.map((value) => `${value}${suffix}`)
}

function generateMatchers(extensions: string[]) {
  return extensions.map((extension) => `**/*.${extension}`)
}
