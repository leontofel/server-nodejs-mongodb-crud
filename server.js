import app from './src/app.js';

const port = process.env.PORT || 8000;



app.listen(port, () => {
    console.log(`Server is listening in http://localhost:${port}`);
});

