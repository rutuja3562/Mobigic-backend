const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://Rutu:Rsp3562@cluster0.4soie.mongodb.net/mobigic?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
};

module.exports = connect;
