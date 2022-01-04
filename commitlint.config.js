module.exports = {
	extends: ['@commitlint/config-conventional'],
	formatter: '@commitlint/format',
	// TODO: Change this URL to our Wiki page with the description of the commit message format.
	helpUrl: 'https://github.com/conventional-changelog/commitlint/#what-is-commitlint',
	rules: {
		'body-case': [2, 'always', 'sentence-case'],
		'body-empty': [0, 'never'],
		'body-leading-blank': [2, 'always'],
		'body-full-stop': [2, 'always', '.'],
		'body-max-line-length': [0, 'never', 0],
		'footer-empty': [0, 'never'],
		'footer-leading-blank': [2, 'always'],
		'footer-max-line-length': [0, 'never', 0],
		'header-full-stop': [2, 'never', '.'],
		'header-max-length': [0, 'never', 0],
		'scope-enum': [2, 'always', [
			'alarms',
			'cron',
			'file management',
			'light indicator',
			'machine',
			'power on',
			'production'
		]],
		'subject-case': [1, 'always', 'lower-case'],
		'subject-empty': [2, 'never'],
		'subject-full-stop': [2, 'never', '.'],
		'type-case': [2, 'always', 'lower-case'],
		'type-empty': [2, 'never'],
		'type-enum': [
			2,
			'always',
			[
				'build',
				'chore',
				'ci',
				'docs',
				'feat',
				'fix',
				'perf',
				'refactor',
				'revert',
				'style',
				'test'
		 ]
		]
	},
	parserPreset: {
		parserOpts: {
			issuePrefixes: ['#']
		}
	}
}
