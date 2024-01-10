import Server from './src/server';
import dotenv from 'dotenv';

//For env File 
dotenv.config();
dotenv.config({ path: process.env.ENV_MODE });
let server = new Server().app

//console.log("process.env.PORT",process.env.ENV_MODE)
console.log("process.env.RESEND",process.env.RESEND)

const port = process.env.PORT || 8000;



server.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
