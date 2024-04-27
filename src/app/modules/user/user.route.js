const express = require("express");
const userController = require("./user.controller");
const { verifyToken } = require("../../middlewares/verifyToken");
const router = express.Router();

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/me", verifyToken, userController.getMe);

router
  .route("/wishlist")
  .get(verifyToken, userController.getWishlist)
  .patch(verifyToken, userController.addToWishlist)
router
  .route("/remove-wishlist")
  .patch(verifyToken, userController.removeFromWishlist)

module.exports = router;
