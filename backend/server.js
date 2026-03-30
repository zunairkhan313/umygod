if (!Object.hasOwn) {
    Object.defineProperty(Object, "hasOwn", {
        value: function (instance, prop) {
            return Object.prototype.hasOwnProperty.call(instance, prop);
        },
        configurable: true,
        enumerable: false,
        writable: true
    });
}
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { sequelize } = require('./models');
const authRoutes = require('./routes/authRoutes');
const musicRoutes = require('./routes/musicRoutes');
const marketplaceRoutes = require('./routes/marketplaceRoutes');
const networkingRoutes = require('./routes/networkingRoutes');
const membershipRoutes = require('./routes/membershipRoutes');
const path = require('path');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

app.use('/api/auth', authRoutes);
app.use('/api/music', musicRoutes);
app.use('/api/products', marketplaceRoutes);
app.use('/api/networking', networkingRoutes);
app.use('/api/membership', membershipRoutes);

app.get('/', (req, res) => {
    res.send('UMyGod API is running...');
});

const PORT = process.env.PORT || 5000;

sequelize.sync({ alter: true }).then(() => {
    console.log('Database connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => {
    console.error('Database connection failed', err);
});
