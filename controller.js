const Pet = require('./models');

module.exports = {
    allPets: (req, res)=>{ // Retrieve all Pets
        Pet.find({})
            .then(data=>{
                // console.log("In allPets",data)
                res.json(data)})

            .catch(err=>res.json(err))
    },
    get_pet: (req, res)=>{ // Retrieve a Pet by ID
        console.log('The Pet id requested is:', req.params.id);
        Pet.findById(req.params.id)
            .then(data=>res.json(data))
            .catch(err=>res.json(err))
    },
    add_pet: (req, res)=>{ // Create a Pet
        var pet = new Pet(req.body);
        console.log('The Pet obj requested is:', req.body);
        pet.save(req.body)
            .then(data=>res.json(data))
            .catch(err=>res.json(err))
    },
    update_pet: (req, res)=>{ // Update a Pet by ID
        console.log('The Pet id requested is:', req.params.id);
        Pet.findByIdAndUpdate(req.params.id, {$set:req.body})
            .then(data=>res.json(data))
            .catch(err=>res.json(err))
    },
    delete_pet: (req, res)=>{ // Delete a Pet by ID
        console.log('The Pet id requested is:', req.params.id);
        Pet.remove({_id: req.params.id})
            .then(data=>res.json(data))
            .catch(err=>res.json(err))
    },
}