import Order from "../models/Order.js";

export const createOrder = async (req, res) => {
  const order = await Order.create({
    user: req.user.id,
    items: req.body.items,
    totalPrice: req.body.totalPrice
  });
  res.json(order);
};

export const getOrders = async (req, res) => {
  res.json(await Order.find().populate("user"));
};
