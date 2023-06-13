const handleRegister = (req, res, db, bcrypt ) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json('Incorrect form submission');
  }
  const hash = bcrypt.hashSync(password);
  db.transaction((trx) => {
    trx
      .insert({
        hash: hash,
        email: email,
      })
      .into("login")
      .returning("email")
      .then((loginEmail) => {
        return trx("users")
          .returning("*")
          .insert({
            email: loginEmail[0].email,
            name: name,
            joined: new Date(),
          })
          .then((user) => {
            res.status(200).json(user[0]);
          });
      })
      .then(trx.commit)
      .catch(trx.rollback);
  })
  .catch((err) => {
    res.status(400).json("Unable to register!");
  });
}

module.exports = {
  handleRegister: handleRegister
};