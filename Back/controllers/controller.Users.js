const User = require("../models/User");
const Engineering = require("../models/Engineering");
const Technical = require("../models/Technical");
const Admission = require("../models/Admission");

const controllerUser = {
  home: (req, res) => {
    User.create(req.body)
      .then((user) => {
        if (user.career.indexOf("Ingeniería") === 0) {
          Engineering.create({ data: user._id })
            .then(() => {
              res.status(200).send({
                status: "success",
              });
            })
            .catch((err) => {
              res.status(404).send({
                status: "error",
                err,
              });
            });
        } else if (user.career.indexOf("Técnico") === 0) {
          Technical.create({ data: user._id })
            .then(() => {
              res.status(200).send({
                status: "success",
              });
            })
            .catch((err) => {
              res.status(404).send({
                status: "error",
                err,
              });
            });
        } else {
          Admission.create({ data: user._id })
            .then(() => {
              res.status(200).send({
                status: "success",
              });
            })
            .catch((err) => {
              res.status(404).send({
                status: "error",
                err,
              });
            });
        }
      })
      .catch((err) => {
        res.status(404).send({
          status: "error",
          err,
        });
      });
  },

  admissionGet: (req, res) => {
    Admission.find()
      .populate("data")
      .then((users) => {
        res.status(200).send({
          status: "success",
          users,
        });
      })
      .catch((err) => {
        res.status(404).send({
          status: "error",
          err,
        });
      });
  },

  engineeringGet: (req, res) => {
    Engineering.find()
      .populate("data")
      .then((users) => {
        res.status(200).send({
          status: "success",
          users,
        });
      })
      .catch((err) => {
        res.status(404).send({
          status: "error",
          err,
        });
      });
  },

  technicalGet: (req, res) => {
    Technical.find()
      .populate("data")
      .then((users) => {
        res.status(200).send({
          status: "success",
          users,
        });
      })
      .catch((err) => {
        res.status(404).send({
          status: "error",
          err,
        });
      });
  },
};

module.exports = controllerUser;
