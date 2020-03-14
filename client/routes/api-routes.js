const db = require('../models');
const shortid = require('shortid');

module.exports = function(app) {

  // right now using a get request to perform a post. Should refactor to do a post using one route like /urls
  app.get('/creates/:target_url', async (req, res) => {
    const url = await db.Url.create({
      target_url: req.params.target_url,
    tiny_url: shortid.generate()
    })

    const object = {
      data: {
        type: 'create',
        id: url.target_url,
        attributes: {
          urlid: url.id,
          url: url.target_url,
          tiny: url.tiny_url
        }
      }
    }
    res.json(object);
  })


  // should refactor to /urls
app.get('/finds/:tiny_url', async (req, res) => {
  
  const url = await db.Url.findOne({ where: { tiny_url: req.params.tiny_url }});
  // response has to be structured this way for Ember to accept it and not throw and error
  const object = {
    data: {
      type: 'find',
      id: url.tiny_url,
      attributes: {
        url: url.target_url,
        tiny: url.tiny_url
      }
    }
  }
  res.json(object);
})

// Simple get to the service to redirect to the target_url without needing the front end
app.get('/:tiny_url', async (req, res) => {
  const url = await db.Url.findOne({ where: {tiny_url: req.params.id}});

  res.redirect(url.target_url);
})
}