import MenuItem from "../models/MenuItem.js";

export const getMenu = async (req, res) => {
  res.json(await MenuItem.find());
};

export const createMenu = async (req, res) => {
  res.json(await MenuItem.create(req.body));
};

export const updateMenu = async (req, res) => {
  res.json(await MenuItem.findByIdAndUpdate(req.params.id, req.body));
};

export const deleteMenu = async (req, res) => {
  await MenuItem.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};
