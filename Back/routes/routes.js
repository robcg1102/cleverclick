const router = require("express").Router();
const controllerUser = require("../controllers/controller.Users");

router.get("/users/admission", controllerUser.admissionGet);
router.get("/users/engineering", controllerUser.engineeringGet);
router.get("/users/technical", controllerUser.technicalGet);

router.post("/users/create", controllerUser.home);

module.exports = router;
