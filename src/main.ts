import {NestFactory} from '@nestjs/core'
import {AppModule} from './app.module'
import {FastifyAdapter, NestFastifyApplication} from '@nestjs/platform-fastify'
const proxy = require('fastify-http-proxy')

async function bootstrap() {
	const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter(), {logger: ['error', 'warn', 'log']})

	app.register(proxy, {
		upstream: 'ws://127.0.0.1:4000',
		websocket: true,
		prefix: '/mqtt',
		http2: false
	})

	await app.listen(3000)
}
bootstrap()
