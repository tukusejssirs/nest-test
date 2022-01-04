import {Logger} from '@nestjs/common'
import {Options} from '@mikro-orm/core'
import {SqlHighlighter} from '@mikro-orm/sql-highlighter'
import {TsMorphMetadataProvider} from '@mikro-orm/reflection'

const logger = new Logger('MikroORM')

const config = {
	entities: ['dist/**/*.entity.js'],
	entitiesTs: ['src/**/*.entity.ts'],
	dbName: 'nest_test_4',
	type: 'postgresql',
	host: 'localhost',
	port: 5432,
	// FIXME: Consider disabling highlighting, for potential performance issues.
	highlighter: new SqlHighlighter(),
	debug: false,
	logger: logger.log.bind(logger),
	user: 'postgres',
	password: '',
	synchronize: true,
	metadataProvider: TsMorphMetadataProvider,
	migrations: {
		tableName: 'mikro_orm_migrations', // name of database table with log of executed transactions
		path: './src/migrations', // path to the folder with migrations
		pattern: /^[\w-]+\d+\.ts$/, // regex pattern for the migration files
		transactional: true, // wrap each migration in a transaction
		disableForeignKeys: true, // wrap statements with `set foreign_key_checks = 0` or equivalent
		allOrNothing: true, // wrap all migrations in master transaction
		dropTables: true, // allow to disable table dropping
		safe: true, // allow to disable table and column dropping; TODO: Do we need this to set to `true`?
		emit: 'ts' // migration generation mode
	},
	pool: {min: 0, max: 100}
} as Options

export default config
