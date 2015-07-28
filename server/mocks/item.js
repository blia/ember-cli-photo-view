module.exports = function(app) {
  var express = require('express');
  var itemRouter = express.Router();

  itemRouter.get('/', function(req, res) {
    res.send({
      'item': [
        {
          id: 1,
          title: 'test',
          links: {
            photos: '/api/item/1/photos'
          }
        }
      ]
    });
  });

  itemRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  itemRouter.get('/:id', function(req, res) {
    res.send({
      'item': {
        id: 1,
        title: 'test',
        links: {
          photos: '/api/items/1/photos'
        }
      }
    });
  });

  itemRouter.get('/:id/photos', function(req, res) {
    res.send({
      'photo': [
        {
          id: 1,
          title: 'test',
          source: '1-source',
          source2x: '1-source2x',
          thumb: '1-thumb',
          thumb2x: '1-thumb2x'
        },
        {
          id: 2,
          title: 'test 2',
          source: '2-source',
          source2x: '2-source2x',
          thumb: '2-thumb',
          thumb2x: '2-thumb2x'
        },
        {
          id: 3,
          title: 'test 3',
          source: '3-source',
          source2x: '3-source2x',
          thumb: '3-thumb',
          thumb2x: '3-thumb2x'
        }
      ]
    });
  });

  itemRouter.put('/:id', function(req, res) {
    res.send({
      'item': {
        id: req.params.id
      }
    });
  });

  itemRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/items', itemRouter);
};
