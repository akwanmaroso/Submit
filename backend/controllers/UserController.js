const User = require('../models/User');
const validatejs = require('validatorjs');

exports.index = (req, res) => {
  res.send('halo');
}

exports.login = async (req, res) => {
  const data = {
    username: req.body.username,
    password: req.body.password
  };
  const rules = {
    username: 'required|min:3',
    password: 'required|min:4',
  }
  const validate = new validatejs(data, rules);
  if(validate.fails()) {
    res.status(422).send({
      message: {
        username: validate.errors.first('username'),
        password: validate.errors.first('password')
      }
    });
  }
  
  const user = await User.findOne({username: data.username, password: data.password});
  
  if (!user) {
    res.status(401).send({
      message: 'username dan password salah'
    })
  }else {
      res.status(201).send({
        message: 'berhasil login',
        data: user
      })
  }
}

exports.createdata = (req, res) => {
  const data = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    nama: req.body.nama,
    money: req.body.money,
  };
  const rules = {
    username: 'required|min:3',
    email: 'required|email',
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
    });
  } catch (error) {
    console.log(`Message = ${error} ` );
  }
}

exports.showData = (req, res) => {
  User.findById(req.params.id, (err, data) => {
    if (err) {
      res.status(401).send({
        message: `erorr ${err}`
      })
    };
    res.status(200).send({
      data
    });
  });
}

exports.updateData = (req, res) => {
  User.findByIdAndUpdate(req.params.id, {$set: req.body}, (err, data) => {
    if (err) {
      res.status(401).send({
        message: err,
      });
    }
    res.status(200).send({
      data: data,
      message: 'data berhasil diupdate'
    })
  });
}