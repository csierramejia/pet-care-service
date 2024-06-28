import { response, request } from 'express';
import { logger } from '../config/logger.js';
import { Request, Response } from 'express';
import {
  getHealthRecordByName,
  saveHealthRecord,
  getHealthRecordsByDate,
} from '../services/healthRecordService.js';

// * Gets health records by visit date.
export const getRecordsByDate = async (req: Request, res: Response) => {
  const { visitDate } = req.params;
  logger.info(`controller getRecordsByDate`);
  try {
    const healthRecords = await getHealthRecordsByDate(new Date(visitDate));
    res.json({ healthRecords });
  } catch (error) {
    logger.error(`Error retrieving health records by date: ${error}`);
    res.status(500).json({ message: 'Error retrieving health records' });
  }
};

// * Gets a health record by pet name.
export const getRecordByName = async (req: Request, res: Response) => {
  const { petName } = req.params;
  try {
    const healthRecord = await getHealthRecordByName(petName);
    res.json({ healthRecord });
  } catch (error) {
    logger.error(`Error retrieving health record by name: ${error}`);
    res.status(500).json({ message: 'Error retrieving health record' });
  }
};

// * Saves a new health record.
export const saveRecord = async (req: Request, res: Response) => {
  try {
    const healthRecord = await saveHealthRecord(req.body);
    res.status(201).json({ healthRecord });
  } catch (error) {
    logger.error(`Error saving health record: ${error}`);
    res.status(500).json({ message: 'Error saving health record' });
  }
};
