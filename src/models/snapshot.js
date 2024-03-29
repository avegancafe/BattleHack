var mongoose = require('mongoose');

module.exports = function() {
    var PersonLocationSchema = mongoose.Schema({
        latitude: Number,
        longitude: Number,
        weight: { type: Number, required: false }
    });

    var SnapshotSchema = mongoose.Schema({
        timestamp: Date,
        locations: [ PersonLocationSchema ]
    });

    return mongoose.models.Snapshot ? mongoose.models.Snapshot : mongoose.model('Snapshot', SnapshotSchema);
};