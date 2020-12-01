const { model, Schema } = require("mongoose");

const userSchema = new Schema(
  {
    name: String,
    email: String,
    phone: { type: Number, required: true },
    career: {
      type: String,
      enum: [
        "Ingeniería en Informática",
        "Técnico en Programación y Análisis de Sistemas",
        "Admisión Especial a Ingeniería en Informática",
        "Ingeniería en Conectividad y Redes",
        "Técnico en Conectividad y Redes",
        "Admisión Especial a Ingeniería en Conectividad y Redes",
        "Ingeniería en Ciberseguridad",
        "Técnico en Ciberseguridad",
        "Admisión Especial a Ingeniería en Ciberseguridad",
        "Ingeniería en Automatización y Control Industrial",
        "Técnico en Automatización y Control Industrial",
        "Técnico en Control Industrial",
        "Admisión Especial a Ingeniería en Automatización y Control Industrial",
      ],
    },
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
