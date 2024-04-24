import mongoose from 'mongoose';

const { Schema } = mongoose;

const productSchema = new Schema({
    userId: String,
    brandName: String,
    deliveryTime: String,
    itemCondition: String,
    itemDes: String,
    itemLocation: String,
    itemName: String,
    itemPics: [String],
    itemPrice: String,
    // itemQuantity: String,
    paymentMethod: String,
    shipping: String,
    yourEmail: String,
    yourName: String,
    // itemPics: String,
    yourNumber: String

});

const Product = mongoose.model("ads", productSchema);

export default Product;