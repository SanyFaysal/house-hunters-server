const {
  addHouseService,
  getHouseService,
  getSingleHouseService,
  updateHouseService,
  deleteHouseService,
  getMyHouseService,
  addQuestionService,
  makeAnswerService,
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
    console.log('come')
    const filter = JSON.parse(req.query.filter);
    const sort = JSON.parse(req.query.sort);

    let pagination = {};
    // for pagination
    const skip = (sort?.pageNumber - 1) * parseInt(sort.perPage);
    pagination.skip = skip;
    pagination.limit = sort.perPage;

    const { result, pageFound, total } = await getHouseService(
      sort,
      filter,
      pagination
    );

    res.status(200).json({
      status: 'Success',
      message: 'Successfully retrieve houses',
      data: result,
      pageFound,
      total,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      error: error.message,
    });
  }
};
exports.getMyHouses = async (req, res) => {
  try {
    const { email } = req.user;
    console.log(email);
    const result = await getMyHouseService(email);
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
    const data = req.body;
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


exports.addQuestion = async (req, res) => {
  try {
    const { id } = req.params;

    const data = req.body;
    const result = await addQuestionService(id, data);

    res.status(200).json({
      status: 'Success',
      message: 'Successfully added question',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      error: error.message,
    });
  }
};
exports.makeAnswer = async (req, res) => {
  try {
    const { houseId,questionId } = req.params;

    const data = req.body;
    const result = await makeAnswerService(houseId, questionId, data);

    res.status(200).json({
      status: 'Success',
      message: 'Successfully make answer',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      error: error.message,
    });
  }
};