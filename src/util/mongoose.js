// map() qua Object Constructor de bien thanh Object Literal
module.exports = {
    multipleMongooseToObject(mongooseArrays) {
        return mongooseArrays.map((mongooseArray) => mongooseArray.toObject());
    },
    mongooseToObject(mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    },
};
