declare module 'eslint-plugin-import' {
  const imprt: EslintPlugin
  export default imprt
}

declare module 'eslint-plugin-boundaries' {
  const boundaries: EslintPlugin
  export default boundaries
}

type EslintPlugin = import('eslint').ESLint.Plugin
