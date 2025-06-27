const { model } = require("mongoose");

const { PositionSchema } = require("../schema/PositionSchema");

const PositionsModel =  model("position", PositionSchema);

module.exports = { PositionsModel };
