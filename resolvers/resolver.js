export default {
    Query:{
        allCats: async (parent, args, { entities: { Cat } }) => {
            const cats = await Cat.find();
            return cats.map(cat => {
                cat._id = cat._id.toString();
                return cat;
            });
        },
        allDogs: async (parent, args, { entities: { Dog } }) => {
            const dogs = await Dog.find();
            return dogs.map(dog => {
                dog._id = dog._id.toString();
                return dog;
            });
        }
    },
    Mutation:{
        createCat: async (parent, args, { entities: { Cat } } ) => {
            const kitty = await new Cat(args).save();
            kitty._id = kitty._id;
            return kitty;
        },
        createDog: async (parent, args, { entities: { Dog } } ) => {
            const fido = await new Dog(args).save();
            fido._id = fido._id;
            return fido;
        }
    }
}