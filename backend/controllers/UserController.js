const User = require('../models/User');
const validatejs = require('validatorjs');

exports.index = (req, res) => {
  res.send('halo');
}

exports.login = (req, res) => {
  
}

exports.createdata = (req, res) => {
  const data = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    nama: req.body.nama,
  };
  const rules = {
    username: 'required|min:3',
    email: 'required',
    password: 'required|min:4',
    nama: 'required|min:4',
  };

  const validate = new validatejs(data, rules);
  if (validate.fails()) {
    res.status(422).send({
      errors: {
        username: validate.errors.first('username'),
        email: validate.errors.first('email'),
        password: validate.errors.first('password'),
        nama: validate.errors.first('nama')
      }
    })
  }

  const user = new User(data);

  try {
    user.save();
    console.log(user);
    res.status(201).send({
      message: 'user berhasil ditambahkan'
    })
  } catch (error) {
    console.log(`Nessage = ${error} ` );
    
  }
  // return data;

}

exports.showData = (req, res) => {

}