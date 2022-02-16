const McqModel = require('../models/mcq-model');

class McqService {

    createMcq = async data => McqModel.create(data);

    findMcqs = async filter => McqModel.find(filter).populate({ path: 'addedBy' });

}

module.exports = new McqService();