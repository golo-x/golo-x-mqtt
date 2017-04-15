let mqtt = require('mqtt')
let client  = mqtt.connect('mqtt://localhost:1883')

client.on('connect', () => {
  client.publish('/hello/world', 'Hello 🌍')
  client.subscribe('/hi')

})

client.on('message', (topic, message) => {
  console.log(topic, message.toString())
})
