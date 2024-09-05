import { PORT, HOST } from './utils/config_env.js';
import { app } from './routes/server.js'; // Correct path to import named export

app.listen(PORT, HOST, () =>
  console.log(`Running on port ${PORT} and HOST ${HOST}`)
);
