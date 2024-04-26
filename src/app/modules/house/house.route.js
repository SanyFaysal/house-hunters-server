const express = require('express');

const houseController = require('./house.controller');
const { authorization } = require('../../middlewares/authorization');

const { verifyToken } = require('../../middlewares/verifyToken');
const router = express.Router();

router.post(
  '/addHouse',
  verifyToken,
  authorization('houseOwner'),
  houseController.addHouse
);

router.get('/', houseController.getHouse);
router.get(
  '/myHouse',
  verifyToken,
  authorization('houseOwner'),
  houseController.getMyHouses
);
router.route('/:id/question').patch(houseController.addQuestion)
router.route('/make-answer/:houseId/:questionId').patch(houseController.makeAnswer)
router
  .route('/:id')
  .get(houseController.getSingleHouse)
  .patch(verifyToken, authorization('houseOwner'), houseController.updateHouse)
  .delete(
    verifyToken,
    authorization('houseOwner'),
    houseController.deleteHouse
  );

module.exports = router;
