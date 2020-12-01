const { model, Schema } = require("mongoose");

const engineeringSchema = new Schema({
  data: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Engineering = model("Engineering", engineeringSchema);

module.exports = Engineering;
