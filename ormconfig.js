// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('config');

const data = config.get('db');

module.exports = {
  "name": data.name,
  "type": data.type,
  "host": data.host,
  "port": data.port,
  "username": data.username,
  "password": data.password,
  "database": data.database,
  "logging": data.logging,
  "synchronize": data.synchronize,
  "entities": [data.entities],
  "ssl": {
    rejectUnauthorized: false
  }
}