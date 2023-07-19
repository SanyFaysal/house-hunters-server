const express = require('express');

const houseController = require('./house.controller');
const router = express.Router();

router.post('/addHouse', houseController.addHouse);

router.get('/', houseController.getHouse);
router
  .route('/:id')
  .get(houseController.getSingleHouse)
  .patch(houseController.updateHouse)
  .delete(houseController.deleteHouse);

module.exports = router;
