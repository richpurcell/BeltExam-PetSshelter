const mongoose = require('mongoose');

// This is how we connect to the mongodb database using mongoose -- "puppy_mongoose" is the name ofcopy
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/pet_shelter');

const PetSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Name is required"], minlength: [3, "The name must be at least 3 characters"]},
    type: {type: String, required: [true, "Type is required"], minlength: [3, "Type must be more than 3 characters"]},
    description: {type: String, required: [true, "description is required"], minlength: [3, "The description must be at least 3 characters"]},
    created_at: {type: Date, default: Date()},
    updated_at: {type: Date, default: Date()},
    skill1: {type: String, required:false},
    skill2: {type: String, required: false},
    skill3: {type: String, required: false}
})
mongoose.model('Pet', PetSchema);
var Pet = mongoose.model('Pet');


module.exports = Pet;
