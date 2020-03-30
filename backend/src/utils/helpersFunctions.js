const crypto = require('crypto');    // hash the password
const uuid = require('uuidv4');

module.exports = {

    generateUniqueId: () => {
        return uuid.uuid();
    },
    
    hashPassword: (pass) => {
        const hash= crypto.createHash('sha1');
        
        return hash.update(pass).digest('hex');
    }

} 