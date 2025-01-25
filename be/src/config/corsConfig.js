const corsOptions = {
  origin: "*", // Adjust this as needed for security
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE']
};

module.exports = corsOptions;