import * as dotenv from 'dotenv';
import { createConnection } from 'typeorm';
import { indya_database } from './indya_database';

dotenv.config();

createConnection({
    url : process.env.DATABASE,
    entities: [indya_database],
    type: "postgres",
    extra:{
        ssl:{
            rejectUnauthorized:false,
        }
    }
})