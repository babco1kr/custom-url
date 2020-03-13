const db = require('../models');
const shortid = require('shortid');

module.exports = function(app) {

  app.get('/createUrl/:target_url', (req, res) => {
  db.Url.create({
    target_url: req.params.target_url,
    tiny_url: shortid.generate()
    }).then(data => {
        res.json(data);
    })
  })


app.get('/find/:tiny_url', async (req, res) => {
  
  const url = await db.Url.findOne({ where: { tiny_url: req.params.tiny_url }});
  res.json(url);
})
}