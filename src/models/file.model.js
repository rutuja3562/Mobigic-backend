const mongoose = require("mongoose");
//const { nanoid } = require("nanoid");
//const uniqueCode = nanoid(6);
const fileSchema = new mongoose.Schema(
  {
    //id: uniqueCode,
    username: { type: String, required: false },
    profilePic: [{ type: String, required: false }],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("file", fileSchema);
