const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      userId: {
        type: String,
        required: true,
      },
      username: {
        type: String,
        required: true,
      },
    },
    comments: [
      {
        _id: {
          type: Schema.Types.ObjectId,
          default: () => new mongoose.Types.ObjectId(),
        },
        userId: {
          type: String,
          required: true,
        },
        username: {
          type: String,
          required: true,
        },
        comment: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true },
);

module.exports = mongoose.model("Blog", blogSchema);
