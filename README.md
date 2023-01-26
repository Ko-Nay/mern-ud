#### Mongoose Custom Instance Method

- [Custom Instance Methods] (https://mogoosejs.com/docs/guide.html#methods)
- model.methods.customFunction()

#### JWT

- token
- install [jsonwebtoken] (https://www.npmjs.com/package/jsonwebtoken)
- jwt.sign(payload, secret, options)

#### JWT Secret and lifetime

- [keys generator] (https://www.allkeysgenerator.com/)

### Client Server Connection

### Separate server and client folders in jobify

- [server]
- [client]

### Connecting Server and Clilent under jobify

- for each
- [custom script] ("server" : "npm start --prefix server") -> connecting to the package.json in server folder
- [custom script] ("client" : "npm start --prefix client") -> connecting to the package.json in the client folder

## Concurrently

- by concurrently -> can run both client and server concurrently
- npm i concurrently --save-dev

- add script in the pacakage.json
  -> ("start" : " concurrently --kill-others-on-fail \" npm run server\" \" npm run client\" ")

### run command

- npm run server/client

### cors

- npm i cors ( apply cors middleware )

### proxy

- can access from everywhere
