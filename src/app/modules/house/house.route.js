const express = require('express');

const houseController = require('./house.controller');
const router = express.Router();

router.post('/addHouse', houseController.addHouse);

router.get('/', houseController.getHouse);
router
  .route('/:id')
  .get(houseController.getHouse)
  .patch(houseController.getHouse)
  .delete(houseController.addHouse);

module.exports = router;
