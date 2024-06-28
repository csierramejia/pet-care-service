// src/test/services/healthRecordService.test.ts

import { getHealthRecordsByDate, getHealthRecordByName, saveHealthRecord } from '../../services/healthRecordService';
import { HealthRecord } from '../../schemas/healthRecordSchema';

jest.mock('../../schemas/healthRecordSchema');

const mockFindOne = jest.fn().mockResolvedValue({
    _id: '667c7fba19ff17b4c9558ded',
    petName: 'Muneca',
    species: 'DOG',
    ownerName: 'Gina',
    ownerContact: 'Gina',
    vaccinations: [],
    allergies: [],
    medications: [],
    previousIllnesses: [],
    surgeries: [],
    reasonForVisit: 'Routine Checkup',
    visitDate: new Date('2024-06-26T20:53:14.133Z'),
    uuid: '667c7fba19ff17b4c9558ded'
  });

describe('HealthRecord Service', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch health records by date', async () => {
    HealthRecord.find = mockFindOne as jest.Mock;

    const visitDate = new Date('2024-06-28');
    const result = await getHealthRecordsByDate(visitDate);

    expect(mockFindOne).toHaveBeenCalledWith({
      visitDate: {
        $gte: expect.any(Date),
        $lt: expect.any(Date),
      },
    });
    expect(result).toEqual({
        _id: '667c7fba19ff17b4c9558ded',
        petName: 'Muneca',
        species: 'DOG',
        ownerName: 'Gina',
        ownerContact: 'Gina',
        vaccinations: [],
        allergies: [],
        medications: [],
        previousIllnesses: [],
        surgeries: [],
        reasonForVisit: 'Routine Checkup',
        visitDate: expect.any(Date),
        uuid: '667c7fba19ff17b4c9558ded'
      });
  });

 

it('should fetch a health record by pet name', async () => {
    // Mock findOne method of HealthRecord model
    HealthRecord.findOne = mockFindOne as jest.Mock;

    // Define the pet name you want to search for
    const petName = 'Muñeca';

    // Call the function under test
    const result = await getHealthRecordByName(petName);

    // Assertions
    expect(mockFindOne).toHaveBeenCalledWith({ petName });
    expect(result).toEqual({
      _id: '667c7fba19ff17b4c9558ded',
      petName: 'Muneca',
      species: 'DOG',
      ownerName: 'Gina',
      ownerContact: 'Gina',
      vaccinations: [],
      allergies: [],
      medications: [],
      previousIllnesses: [],
      surgeries: [],
      reasonForVisit: 'Routine Checkup',
      visitDate: expect.any(Date),
      uuid: '667c7fba19ff17b4c9558ded'
    });
  });

/*
  it('should save a health record', async () => {
    const mockSave = jest.fn().mockResolvedValue({ _id: '1', petName: 'Buddy', visitDate: new Date() });
    const MockHealthRecord = jest.fn().mockImplementation(() => ({ save: mockSave }));
    jest.spyOn(HealthRecord as any, 'constructor').mockImplementation(MockHealthRecord);

    const recordData = { petName: 'Buddy', visitDate: new Date() };
    const result = await saveHealthRecord(recordData);

    expect(MockHealthRecord).toHaveBeenCalledWith(recordData);
    expect(mockSave).toHaveBeenCalled();
    expect(result).toEqual({ _id: '1', petName: 'Buddy', visitDate: expect.any(Date) });
  });

  it('should handle errors when fetching health records by date fails', async () => {
    const errorMessage = 'Database error';
    const mockFind = jest.fn().mockRejectedValue(new Error(errorMessage));
    HealthRecord.find = mockFind as jest.Mock;

    const visitDate = new Date('2024-06-28');

    await expect(getHealthRecordsByDate(visitDate)).rejects.toThrow(errorMessage);
  });

  it('should handle errors when fetching health record by pet name fails', async () => {
    const errorMessage = 'Database error';
    const mockFindOne = jest.fn().mockRejectedValue(new Error(errorMessage));
    HealthRecord.findOne = mockFindOne as jest.Mock;

    const petName = 'Buddy';

    await expect(getHealthRecordByName(petName)).rejects.toThrow(errorMessage);
  });

  it('should handle errors when saving health record fails', async () => {
    const errorMessage = 'Database error';
    const mockSave = jest.fn().mockRejectedValue(new Error(errorMessage));
    const MockHealthRecord = jest.fn().mockImplementation(() => ({ save: mockSave }));
    jest.spyOn(HealthRecord as any, 'constructor').mockImplementation(MockHealthRecord);

    const recordData = { petName: 'Buddy', visitDate: new Date() };

    await expect(saveHealthRecord(recordData)).rejects.toThrow(errorMessage);
  });
*/  
});
