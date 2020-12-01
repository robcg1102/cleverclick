const { model, Schema } = require("mongoose");

const admissionSchema = new Schema({
  data: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Admission = model("Admission", admissionSchema);

module.exports = Admission;
