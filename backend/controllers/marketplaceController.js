const { Product, User } = require('../models');

const getProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [{ model: User, attributes: ['username', 'profilePicture'] }]
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const { name, type, price, description, imageUrl, digitalFileUrl, stockQuantity } = req.body;
    const product = await Product.create({
      name,
      type,
      price,
      sellerId: req.user.id,
      description,
      imageUrl,
      digitalFileUrl,
      stockQuantity
    });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    
    if (product.sellerId !== req.user.id && req.user.role !== 'admin') {
      return res.status(401).json({ message: 'Not authorized' });
    }

    const { name, type, price, description, imageUrl, digitalFileUrl, stockQuantity } = req.body;
    product.name = name || product.name;
    product.type = type || product.type;
    product.price = price || product.price;
    product.description = description || product.description;
    product.imageUrl = imageUrl || product.imageUrl;
    product.digitalFileUrl = digitalFileUrl || product.digitalFileUrl;
    product.stockQuantity = stockQuantity !== undefined ? stockQuantity : product.stockQuantity;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    
    if (product.sellerId !== req.user.id && req.user.role !== 'admin') {
      return res.status(401).json({ message: 'Not authorized' });
    }

    await product.destroy();
    res.json({ message: 'Product removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getProducts, createProduct, updateProduct, deleteProduct };
