import * as dotenv from 'dotenv';
import { createConnection } from 'typeorm';
import { item } from './item';

dotenv.config();

createConnection({
    url : process.env.DATABASE,
    entities: [item],
    type: "postgres",
    extra:{
        ssl:{
            rejectUnauthorized:false,
        }
    }
})