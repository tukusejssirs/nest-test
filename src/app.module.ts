import {AppController} from './app.controller'
import {AppService} from './app.service'
import {Logger, Module} from '@nestjs/common'
import {MikroOrmModule} from '@mikro-orm/nestjs'
import {MqttModule} from 'nest-mqtt'

@Module({
	imports: [
		MikroOrmModule.forRoot(),
		MqttModule.forRoot({
			port: 1883,
			logger: {
				useValue: new Logger('MqttClient')
			}
		})
	],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
