'use strict';
const {
  productRepository,
  customerRepository,
  userRepository,
  roleRepository,
  productTypeRepository,
  brandRepository,
  cartRepository,
  orderRepository,
} = require('../data');

const ProductService = require('./Product');
const CustomerService = require('./Customer');
const RoleService = require('./role');
const ProductTypeService = require('./productType');
const BrandService = require('./Brand');
const PolicyService = require('./Policy');
const UserService = require('./user');
const CartService = require('./Cart');
const OrderService = require('./Order');
const MomoPaymentService = require('./Momo');
const { redisClient, axios } = require('../infrastructures');

const policyService = new PolicyService({}, redisClient);
const productService = new ProductService(
  {},
  policyService,
  productRepository,
  customerRepository,
  orderRepository,
  userRepository,
  productTypeRepository,
  brandRepository,
  axios,
);
const customerService = new CustomerService(
  {},
  policyService,
  customerRepository,
  productRepository,
  orderRepository,
  cartRepository,
  roleRepository,
  axios,
);
const productTypeService = new ProductTypeService(
  {},
  policyService,
  productTypeRepository,
);
const brandService = new BrandService(
  {},
  policyService,
  productRepository,
  customerRepository,
  orderRepository,
  roleRepository,
  brandRepository,
);
const userService = new UserService(
  {},
  policyService,
  productRepository,
  customerRepository,
  orderRepository,
  userRepository,
  roleRepository,
);
const roleService = new RoleService({}, policyService, roleRepository);
const cartService = new CartService(
  {},
  policyService,
  cartRepository,
  customerRepository,
  productRepository,
  orderRepository,
  userRepository,
);
const orderService = new OrderService(
  {},
  policyService,
  orderRepository,
  cartRepository,
  customerRepository,
  productRepository,
);
const momoPaymentService = new MomoPaymentService({});
module.exports = {
  productService,
  customerService,
  productTypeService,
  brandService,
  userService,
  roleService,
  cartService,
  orderService,
  momoPaymentService,
};
