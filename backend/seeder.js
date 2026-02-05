const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { sequelize } = require('./config/db');
const Product = require('./models/Product');
const User = require('./models/User');
const bcrypt = require('bcryptjs');

dotenv.config();

const products = [
    {
        name: 'Wireless Noise Cancelling Headphones',
        imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        description:
            'Industry-leading noise cancellation technology means you hear every word, note, and tune with incredible clarity, no matter your environment.',
        price: 299.99,
        category: 'Electronics',
        stock: 10,
    },
    {
        name: 'Smartphone X Pro',
        imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        description:
            'Experience the power of the flagship processor, stunning display, and pro-grade camera system.',
        price: 999.99,
        category: 'Electronics',
        stock: 7,
    },
    {
        name: 'Cannon EOS 80D DSLR Camera',
        imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
        description:
            'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design.',
        price: 929.99,
        category: 'Electronics',
        stock: 5,
    },
    {
        name: 'Sony Playstation 5',
        imageUrl: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80',
        description:
            'The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music',
        price: 399.99,
        category: 'Electronics',
        stock: 11,
    },
    {
        name: 'Logitech G-Series Gaming Mouse',
        imageUrl: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        description:
            'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience',
        price: 49.99,
        category: 'Electronics',
        stock: 7,
    },
    {
        name: 'Amazon Echo Dot 3rd Generation',
        imageUrl: 'https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80',
        description:
            'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
        price: 29.99,
        category: 'Electronics',
        stock: 0,
    },
    {
        name: 'Classic Leather Jacket',
        imageUrl: 'https://images.unsplash.com/photo-1551028919-ac6635f0e5c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
        description: 'Premium leather jacket for a timeless look. Durable, stylish, and comfortable.',
        price: 199.99,
        category: 'Fashion',
        stock: 15
    },
    {
        name: 'Running Shoes',
        imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
        description: 'Lightweight and breathable running shoes designed for performance and comfort.',
        price: 89.99,
        category: 'Fashion',
        stock: 20
    }
];

const importData = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync(); // Ensure tables exist

        // Clear existing data
        await Product.destroy({ where: {} });
        await User.destroy({ where: {} });

        // Create Admin User
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash('123456', salt);

        await User.create({
            name: 'Admin User',
            email: 'admin@example.com',
            password: hashedPassword,
            role: 'admin'
        });

        await User.create({
            name: 'John Doe',
            email: 'john@example.com',
            password: hashedPassword,
            role: 'user'
        });

        // Create Products
        await Product.bulkCreate(products);

        console.log('Data Imported!');
        process.exit();
    } catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
};

importData();
