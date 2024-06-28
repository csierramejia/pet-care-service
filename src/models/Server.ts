import express, { Application } from 'express';
import cors from 'cors';
import { router } from '../routes/healthRecordRoutes';
import { DBConnection } from '../config/dbConfig';

export class Server {
  private app: Application;
  private port: string;
  private apiPaths = {
    healthRecords: '/api/pets',
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '';

    // Connect to database
    this.connectDB();

    // Middlewares
    this.middlewares();

    // Routes
    this.routes();
  }

  async connectDB() {
    await DBConnection();
  }

  middlewares() {
    // CORS
    this.app.use(cors());

    // Body parsing
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.apiPaths.healthRecords, router);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Server running on port', this.port);
    });
  }
}
