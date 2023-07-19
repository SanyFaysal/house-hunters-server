const {
  addHouseService,
  getHouseService,
  getSingleHouseService,
  updateHouseService,
  deleteHouseService,
} = require('./house.service');

exports.addHouse = async (req, res) => {
  try {
    const data = req.body;
    const result = await addHouseService(data);
    res.status(200).json({
      status: 'Success',
      message: 'Successfully added house',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      error: error.message,
    });
  }
};
exports.getHouse = async (req, res) => {
  try {
    const result = await getHouseService();
    res.status(200).json({
      status: 'Success',
      message: 'Successfully retrieve houses',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      error: error.message,
    });
  }
};
exports.getSingleHouse = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await getSingleHouseService(id);
    res.status(200).json({
      status: 'Success',
      message: 'Successfully retrieve house',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      error: error.message,
    });
  }
};
exports.updateHouse = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.data;
    const result = await updateHouseService(id, data);
    res.status(200).json({
      status: 'Success',
      message: 'Successfully update houses',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      error: error.message,
    });
  }
};
exports.deleteHouse = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await deleteHouseService(id);
    res.status(200).json({
      status: 'Success',
      message: 'Successfully deleted houses',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      error: error.message,
    });
  }
};
