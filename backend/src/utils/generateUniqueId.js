// const crypto = require('crypto');    // rocketseat
const uuid = require('uuidv4');

module.exports = function generateUniqueId() {
    return uuid.uuid();
}