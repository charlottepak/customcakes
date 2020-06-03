const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema ( {
    size: Boolean,
    cakeFlavor: Boolean,
    baseType: Boolean,
    flavor: Boolean
}, {
    timestamps: true
});

module.exports = mongoose.model('Order', orderSchema);