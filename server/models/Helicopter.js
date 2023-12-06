const { Schema, model } = require("mongoose");

const helicoptersSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    Country: {
      type: String,
      required: true,
    },
    PrimaryUse: {
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

const Helicopters = model("Helicopter", helicoptersSchema);

module.exports = Helicopters;
