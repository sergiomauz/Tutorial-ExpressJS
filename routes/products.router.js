const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    {
      "ID": 1,
      "Product": "Product one",
      "Price": 250.75
    },
    {
      "ID": 2,
      "Product": "Product two",
      "Price": 450.25
    },
    {
      "ID": 3,
      "Product": "Product three",
      "Price": 650.55
    }
  ])
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const productsList = [
    {
      "ID": 1,
      "Product": "Product one",
      "Price": 250.75
    },
    {
      "ID": 2,
      "Product": "Product two",
      "Price": 450.25
    },
    {
      "ID": 3,
      "Product": "Product three",
      "Price": 650.55
    }
  ];

  let selectedProduct = productsList.filter(q => q.ID == id);
  if (selectedProduct.length > 0) {
    res.json(selectedProduct);
  }
  else {
    res.send('Product not found');
  }
});

module.exports = router;
