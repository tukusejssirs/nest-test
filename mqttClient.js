const mqtt = require('mqtt')

// Case A
const client = mqtt.connect('http://localhost:3000/mqtt', {rejectUnauthorized: false})

// Case B
// const client = mqtt.connect('ws://localhost:3000/mqtt', {rejectUnauthorized: false})

client.on('#', (topic, message) => {
	console.log('topic:', topic)
	console.log('message:', message.toString())
})
