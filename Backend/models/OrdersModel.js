const { model } = require("mongoose");

const { OrderSchema } = require("../schema/OrdersSchema");

const OrdersModel = new model("orders", OrderSchema);

module.exports = { OrdersModel };
