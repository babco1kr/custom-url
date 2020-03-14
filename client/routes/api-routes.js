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


app.get('/finds/:tiny_url', async (req, res) => {
  
  const url = await db.Url.findOne({ where: { tiny_url: req.params.tiny_url }});
  // if (url.data.target_url === null) {
  //   res.json(url)
  // } else {
  //   res.redirect(url.data.target_url);
  // }

  // res.redirect(url.target_url, 302);
  const object = {
    data: {
      type: 'find',
      id: url.tiny_url,
      attributes: {
        url: url.target_url,
      }
      // tiny_url: url.tiny_url
    }
  }
  res.json(object);
})
}