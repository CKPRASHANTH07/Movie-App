const { PORT, HOST } = require('./utils/config_env.js');

app.listen(PORT, HOST, () =>
  console.log(`Running on port ${PORT} and HOST ${HOST}`)
);

