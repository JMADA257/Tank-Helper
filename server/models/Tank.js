const { Schema, model } = require("mongoose");

const tanksSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    Caliber: {
      type: String,
      required: true,
    },
    Country: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Tanks = model("Tanks", tanksSchema);

module.exports = Tanks;
