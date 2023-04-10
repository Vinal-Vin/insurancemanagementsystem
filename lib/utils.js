import bcrypt from 'bcrypt';

export const verifyHash = async (value, hash) => {
    // compare value with salted hash
    return await bcrypt.compare(value, hash);
}

export const hashValue = async (value) => {
    // generate salted hash
    return await bcrypt.hash(value, 10);
}