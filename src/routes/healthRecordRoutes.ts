import { Router } from 'express';
import { check } from 'express-validator';
import { validateFields } from '../middleware/index';
import {
  getRecordByName,
  saveRecord,
  getRecordsByDate,
} from '../controller/healthRecordController';

export const router = Router();

router.get('/date/:visitDate', getRecordsByDate);

router.get(
  '/name/:petName',
  [check('petName', 'petName is required').not().isEmpty(), validateFields],
  getRecordByName,
);

router.post('/', saveRecord);
