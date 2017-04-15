# golo-x-mqtt

> ⚠️ 🚧 this is an experiment don't do this in production

## Setup

- build the vert-x jar dependencies: `mvn compile assembly:single`
- load nodejs dependencies (just to get a quick MQTT client): `npm install`

## Run

### Launch the MQTT "broker"

```shell
golo golo --classpath jars/*.jar --files main.golo
```

or `./golox.sh`

### Launch MQTT Clients

```shell
node client1.js
node client2.js
```
