require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./db");
const user_db = require("./models")

const app = express();

const morgan = require("morgan");

app.use(cors());
app.use(express.json());




/******************************************************************/

const Role = user_db.role;
/*user_db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync Db');
  initial();
});*/
user_db.sequelize.sync();
// auth ro11utes
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

/*****************************************************************/


require('./routes/restaurant.routes')(app);



const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`server is up and listening on port ${port}`);
});





function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
};