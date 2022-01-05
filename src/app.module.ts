import {AppController} from './app.controller'
import {AppService} from './app.service'
import {Logger, Module} from '@nestjs/common'
import {MqttModule} from 'nest-mqtt'

@Module({
	imports: [
		MqttModule.forRoot({
			port: 4000,
			protocol: 'ws',
			logger: {
				useValue: new Logger('MqttClient')
			}
		})
	],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
