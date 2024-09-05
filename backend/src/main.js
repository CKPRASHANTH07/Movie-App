import { app } from "./routes/server.js";
import { PORTT, HOST } from "./utils/config_env.js";
app.listen(PORTT, HOST, () =>
	console.log(`running on port ${PORTT} and HOST ${HOST}`),
);
