let products = [
  {
    id: 1,
    serialNo: 1,
    name: "Product A",
    price: 100,
    stock: 50,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

let invoices = [
  {
    id: 1,
    customerName: "John Doe",
    phoneNumber: "123456789",
    address: "123 Main St",
    productName: "Product A",
    quantity: 2,
    price: 100,
    tax: 28,
    deliveryFee: 10,
    amountPaid: 200,
    remainingBalance: 38,
    notes: "Urgent delivery",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

// Fetch all products
export const fetchAllProducts = () => Promise.resolve(products);

// Fetch product by ID
export const fetchProductById = (id) => {
  const product = products.find((product) => product.id === id);
  return product
    ? Promise.resolve(product)
    : Promise.reject(new Error("Product not found"));
};

// Add product
export const addProduct = (newProduct) => {
  if (!newProduct.name || !newProduct.price || !newProduct.stock) {
    return Promise.reject(new Error("Invalid product data"));
  }
  newProduct.id = Date.now();
  newProduct.serialNo = products.length + 1;
  newProduct.createdAt = new Date().toISOString();
  newProduct.updatedAt = new Date().toISOString();
  products.push(newProduct);
  return Promise.resolve(newProduct);
};

// Delete product
export const deleteProduct = (id) => {
  const initialLength = products.length;
  products = products.filter((product) => product.id !== id);
  return initialLength > products.length
    ? Promise.resolve(true)
    : Promise.reject(new Error("Product not found"));
};

// Edit product
export const editProduct = (updatedProduct) => {
  const index = products.findIndex((product) => product.id === updatedProduct.id);
  if (index === -1) {
    return Promise.reject(new Error("Product not found"));
  }
  products[index] = {
    ...products[index],
    ...updatedProduct,
    updatedAt: new Date().toISOString(),
  };
  return Promise.resolve(products[index]);
};

// Fetch all invoices
export const fetchAllInvoices = () => Promise.resolve(invoices);

// Fetch invoice by ID
export const fetchInvoiceById = (id) => {
  const invoice = invoices.find((invoice) => invoice.id === id);
  return invoice
    ? Promise.resolve(invoice)
    : Promise.reject(new Error("Invoice not found"));
};

// Add invoice
export const addInvoice = (newInvoice) => {
  if (!newInvoice.customerName || !newInvoice.productName || !newInvoice.quantity) {
    return Promise.reject(new Error("Invalid invoice data"));
  }
  newInvoice.id = Date.now();
  newInvoice.createdAt = new Date().toISOString();
  newInvoice.updatedAt = new Date().toISOString();
  invoices.push(newInvoice);
  return Promise.resolve(newInvoice);
};

// Delete invoice
export const deleteInvoice = (id) => {
  const initialLength = invoices.length;
  invoices = invoices.filter((invoice) => invoice.id !== id);
  return initialLength > invoices.length
    ? Promise.resolve(true)
    : Promise.reject(new Error("Invoice not found"));
};

// Edit invoice
export const editInvoice = (updatedInvoice) => {
  const index = invoices.findIndex((invoice) => invoice.id === updatedInvoice.id);
  if (index === -1) {
    return Promise.reject(new Error("Invoice not found"));
  }
  invoices[index] = {
    ...invoices[index],
    ...updatedInvoice,
    updatedAt: new Date().toISOString(),
  };
  return Promise.resolve(invoices[index]);
};
