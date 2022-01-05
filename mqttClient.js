const mqtt = require('mqtt')

const client = mqtt.connect('ws://localhost:3000/mqtt', {rejectUnauthorized: false})

client.on('#', (topic, message) => {
	console.log('topic:', topic)
	console.log('message:', message.toString())
})
