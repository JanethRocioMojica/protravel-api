const express = require('express');
const {nanoid} = require('nanoid');
const app = express();

const PORT = 3000;
//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get("/", (req, res) => {
  res.send('Hi Protravel!');
});

//Routes
//Users => /api/users
//name, lastname, username, email, photo(optional), id, instagram
//fetch users: return all users
app.get('/api/users', (req,res) => {
  //get data from database
  const users = [];
  res.status(200).json({ success: true, data: users});
});

// get one user by id
//app.get();
//store one user
app.post('/api/users', (req,res) => {
  console.log(req.body);
  const { name, lastname, username, email, ...optional } = req.body;
  //validations
  if (!name || !lastname || !username || !email) {
    res.json({ success: false, message: 'validation error'});
  }
  //data processing
  const user = {
    id: nanoid(),
    name,
    lastname,
    email,
    username,
    extra: optional
  }
  // save into database

  res.status(200).json({ success: true, message: 'user has been created', data: user});
});

//update one specific user
//app.patch()
//delete one user
//app.delete();

app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
});

