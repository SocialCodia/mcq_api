const McqModel = require('../models/mcq-model');

class McqService {

    createMcq = async data => McqModel.create(data);

    findMcq = async filter => McqModel.findOne(filter);

    findMcqs = async filter => McqModel.find(filter).populate({ path: 'addedBy' });

    updateMcq = async (filter, data) => McqModel.updateOne(filter, data);

}

module.exports = new McqService();