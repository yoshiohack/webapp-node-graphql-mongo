import mongoose from 'mongoose';


const Dog = mongoose.model('Dog', {
    name: String
});

export default Dog;