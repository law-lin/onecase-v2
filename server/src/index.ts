import * as dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { postgraphileServer } from './postgraphile';
import multer from 'multer';
import multerS3 from 'multer-s3';
import AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';

const { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_S3_BUCKET } = process.env;

async function main() {
  const app = express();

  const s3 = new AWS.S3({
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
  });

  const upload = multer({
    storage: multerS3({
      s3: s3,
      bucket: AWS_S3_BUCKET as string,
      key: (req: any, file: any, cb: any) => cb(null, `${uuidv4()}`),
      acl: 'public-read',
    }),
  });

  const { PORT } = process.env;

  app.use(cors({ credentials: true }));

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../../build')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../../build', 'index.html'));
    });
  }

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(postgraphileServer);

  app.post('/upload', upload.array('images'), (req: any, res: any) => {
    let urls: any = [];
    req.files.forEach((file: any) => {
      urls.push(file.location);
    });
    res.json(urls);
  });

  app.listen({ port: PORT || 8080 }, () =>
    console.log(`Server running on port ${PORT}`)
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
