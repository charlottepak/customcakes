const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema ( {
    size: String,
    cakeFlavor: String,
    baseType: String,
    flavor: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Order', orderSchema);