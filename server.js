const express = require('express');
const PORT = process.env.PORT || 5500;
const dbConnection = require('./configs/db-config');
const publicRoute = require('./routes/public-route');
const authRoute = require('./routes/auth-route');
const adminRoute = require('./routes/admin-route');
const errorMiddleware = require('./middlewares/error-middleware');
const { auth, authRole } = require('./middlewares/auth-middleware');
const cors = require('cors');
const app = express();

const cookieParser = require('cookie-parser');
app.use(cookieParser());

const corsOption = {
    origin: ['http://localhost:3000', 'https://online-mcq.vercel.app', 'http://online-mcq.vercel.app'],
    credentials: true
}

app.use(cors(corsOption));

app.use(express.json());

app.use('/api/public', auth, publicRoute);
app.use('/api/auth', authRoute);
app.use('/api/admin', auth, authRole('admin'), adminRoute);


app.use((req, res, next) => {
    return res.status(404).json({ success: false, message: 'Resource Not Found' });
})

app.use(errorMiddleware);



app.listen(PORT, () => console.log(`Listining On Port ${PORT}`));