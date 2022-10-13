const mongoose = require("mongoose");
const mongoConn = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("base de Datos conectada");
  } catch (e) {
    throw new Error("Error de conexión");
  }
};
module.exports = { mongoConn };
