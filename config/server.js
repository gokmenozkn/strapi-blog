// module.exports = ({ env }) => ({
//   host: env('HOST', '0.0.0.0'),
//   port: env.int('PORT', 1337),
// });

module.exports = {
  host: 'localhost',
  port: 1337,
  cron: {
    enabled: false,
  },
  admin: {
    path: '/', // Note: The administration will be accessible from the root of the domain (ex: http//yourfrontend.com/)
    serveAdminPanel: false, // http://yourbackend.com will not serve any static admin files
    build: {
      backend: 'https://strapi-blog1.herokuapp.com',
    },
  },
};