const { model, Schema } = require("mongoose");

const technicalSchema = new Schema({
  data: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Technical = model("Technical", technicalSchema);

module.exports = Technical;
