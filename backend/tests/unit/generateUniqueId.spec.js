const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate Unique ID UUID-V4', () => {
    it('should generate an uinque ID UUID-V4', () => {
        const id= generateUniqueId();
        expect(id).toHaveLength(36);
    })
});