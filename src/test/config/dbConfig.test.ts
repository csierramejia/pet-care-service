//import { expect } from 'chai';

import { DBConnection } from '../../config/dbConfig';

describe('DBConnection', () => {
  it('should connect to MongoDB successfully', async () => {
    await DBConnection();
    expect(true).toBe(true);
  });

});
