#### Express

> Used for middleware to create various CRUD endpoints

#### Mongoose

> Managing data in MongoDB

#### Nodemon

> To start and restart server

#### Dotenv

> To manage a .env file

#### index.js

> Entry point for application

#### Routes

> For the endpoints

#### Endpoints

- Posting data to Database
- Getting all the data from Database
- Getting data based on ID
- Updating data based on ID
- Deleting data based on ID

> In callback have req and res. Use res to sending response to client like postman. Use req for recieving request from client

```
router.get('/getOne/:id', (req, res) => res.send(req.params.id))
```

> Take response from client. Getting the ID using req.params.id, and then sending it to the client app using res.send

#### Model

> Model define our database structure.
