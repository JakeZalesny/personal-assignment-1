const express = require('express');
const app = express();

const router = require('./routes/contacts');

app.use('/api/contacts', router);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});