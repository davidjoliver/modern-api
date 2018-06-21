const hapi = require('hapi');
const mongoose = require('mongoose');
const Painting = require('./models/Painting');

mongoose.connect('mongodb://davidjoliver:l8er4You@ds263710.mlab.com:63710/davidjoliver');
mongoose.connection.once('open', () => {
  console.log('connected to database');
});

const server = hapi.server({
  port: 4000,
  host: 'localhost'
});

const init = async () => {
  server.route([
    {
      method: 'GET',
      path: '/',
      handler: (request, reply) => {
        return `<h1>Hello World! TESTING</h1>`;
      }
    },
    {
      method: 'GET',
      path: '/api/v1/paintings',
      handler: (request, reply) => {
        return Painting.find();
      }
    },
    {
      method: 'POST',
      path: '/api/v1/paintings',
      handler: (request, reply) => {
        const { name, url, techniques } = request.payload;
        const painting = new Painting({
          name,
          url,
          techniques
        });

        return painting.save();
      }
    }
  ]);

  await server.start();
  console.log(`Server running at: ${server.info}`);
};

init();
