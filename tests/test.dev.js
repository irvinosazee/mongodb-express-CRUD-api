const bcrypt = require('bcrypt');

const password = 'password123';
const passwordCheck = 'password1223';

(async () => {
    console.time('Hashing Time');
    const hashedPassword = await bcrypt.hash(password, 14);
    console.timeEnd('Hashing Time');
    console.log({ password, hashedPassword });

    console.time('UnHashing Time');
    const isPassword = await bcrypt.compare(passwordCheck, hashedPassword);
    console.timeEnd('UnHashing Time');

    console.log({ passwordCheck, isPassword });
})();
