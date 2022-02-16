const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mcqSchema = new Schema({
    addedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    question: {
        type: String,
        minlength: 3,
        maxlength: 500,
        required: true,
    },
    opOne: {
        type: String,
        maxlength: 200,
    },
    opTwo: {
        type: String,
        maxlength: 200,
    },
    opThree: {
        type: String,
        maxlength: 200,
    },
    opFour: {
        type: String,
        maxlength: 200,
    },
    answer: {
        type: Number,
        min: 1,
        max: 4,
        required: true
    },
    verified: {
        type: Boolean,
        required: true
    }
}, {
    timestamps: true
});


module.exports = new mongoose.model('Mcq', mcqSchema, 'mcqs');