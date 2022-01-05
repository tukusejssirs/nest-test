const aedes = require('aedes')()
const {createServer} = require('aedes-server-factory')
const server = createServer(aedes, {ws: true})
const port = 4000

server.listen(port, () => {
	console.log('Server started and listening on port ' + port + '.')
})

aedes.subscribe('#', (packet, cb) => {
	packet.payload = packet.payload.toString()
	console.log(packet)
})
