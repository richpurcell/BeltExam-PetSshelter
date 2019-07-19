// since the logic is in the controller.js file we must require './controller'
// This is analogous to an import statement in python
const controller = require('./controller');

// This is analagous to the urls.py file in Django
module.exports = function(app) {
    app.get('/api/pets', controller.allPets); // Retrieve all Pets
    app.get('/api/pets/:id', controller.get_pet); // Retrieve a Pet by ID
    app.post('/api/pets', controller.add_pet); // Create a Pet
    app.put('/api/pets/:id', controller.update_pet); // Update a Pet by ID
    app.delete('/api/pets/:id', controller.delete_pet); // Delete a Pet by ID
}