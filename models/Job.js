const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    company: {
        tyep: String,
        required: [true, 'Please provide company name!'],
        maxlength: 50
    },

    position: {
        type: String,
        required: [true, 'Please provide position!'],
        maxlength: 100
    },

    status: {
        type: String,
        enum: ['interview', 'declined', 'pending'],
        default: 'pending'
    },

    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide the user!']
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Job', JobSchema);