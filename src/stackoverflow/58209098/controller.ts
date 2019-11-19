import { VMBilling } from './model';

const getDetails = records => {
  console.log(records);
};

const getMultipleRecords = async (req, res, next) => {
  try {
    console.log('getMultipleRecords()');
    let records = await VMBilling.findAll({
      include: [
        {
          model: 'ErrorMessage'
        }
      ],
      where: [
        {
          id: req.body.records
        }
      ]
    });

    let recordsWithDetails = exports.getDetails(records);
    console.log(recordsWithDetails);
    return res.status(200).json(recordsWithDetails);
  } catch (error) {
    next(error);
  }
};

exports.getMultipleRecords = getMultipleRecords;
exports.getDetails = getDetails;
