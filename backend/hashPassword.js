const bcrypt = require('bcrypt');

async function hashPassword() {
    const plainPassword = 'hashedPassword1';
    const hashedPassword = await bcrypt.hash(plainPassword, 10);
    console.log('Hashed Password:', hashedPassword);
}

hashPassword();
