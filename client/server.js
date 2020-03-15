const express = require('express');
const PORT = 3306;
const cors = require('cors');

const app = express();

// Parse Request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
// import DB shema
const db = require("./models");

require("./routes/api-routes.js")(app);

// Setup Sequialize
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
