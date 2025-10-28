const mongoose = require("mongoose");

require("./Product");

const schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  bodytxt: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  isAccepted: {
    type: Boolean,
    required: false,
  },
  date: {
    type: Date,
    default: () => Date.now(),
    immutable: false,
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
});

const model = mongoose.models.Comment || mongoose.model("Comment", schema);

export default model;
