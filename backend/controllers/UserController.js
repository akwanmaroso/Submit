const User = require('../models/User');

exports.index = (req, res) => {
  res.send('halo');
}

exports.login = (req, res) => {
  
}

exports.createdata = (req, res) => {
  let data = {req};

  // let rules = {
  //   username: 'required|min:3',
  //   email: 'required',
  //   password: 'required|min:4',
  //   nama: 'required|min:4',
  //   money: 'required',
  // };
  console.log(data);
  return data;

}

exports.showData = (req, res) => {

}