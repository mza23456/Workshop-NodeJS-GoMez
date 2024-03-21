const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT;

const db = require('./app/models');
db.sequelize.sync({force:false}).then(() => {
  console.log('Database syncing...')
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

require('./app/routes/employee.route')(app);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
