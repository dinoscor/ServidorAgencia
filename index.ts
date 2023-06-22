import express, { NextFunction } from 'express';
import { Request, Response, Express } from 'express';
import cors from 'cors';
// Instanciamos express
const app: Express = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(express.static('public'));
app.use(cors());
app.use(express.json());

app.get('/api', (req: Request, res: Response) => {
  res.send('<h1>Hola mundo</h1>');
});

// Puesta en marcha
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
