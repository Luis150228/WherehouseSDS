// eslint.config.js
import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';

export default [
	// Reglas base JS (flat)
	js.configs.recommended,

	// TypeScript (sin “type-checked”; ligero y suficiente)
	...tseslint.configs.recommended,

	// React (flat)
	react.configs.flat.recommended,

	// Tu capa de proyecto
	{
		files: ['**/*.{ts,tsx,js,jsx}'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			parserOptions: {
				// Si quieres reglas "type-checked", cambia a:
				// project: ['./tsconfig.json', './tsconfig.app.json']
				// y arriba usa: ...tseslint.configs.recommendedTypeChecked
			},
			globals: globals.browser,
		},
		settings: {
			react: { version: 'detect' },
			// Para que el alias `@` se resuelva en las reglas de `import/*`
			'import/resolver': {
				typescript: {
					project: ['./tsconfig.json', './tsconfig.app.json'],
				},
			},
		},
		plugins: {
			import: importPlugin,
			react,
		},
		rules: {
			'react/react-in-jsx-scope': 'off',
			// Activa esta si quieres que te avise cuando falle la resolución:
			// 'import/no-unresolved': 'error',
		},
	},
];
