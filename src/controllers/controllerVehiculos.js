const Vehiculo = require("../models/Vehiculos");

const vehiculoSave = async (req, res) => {
    try {
        const vehiculo = new Vehiculo(req.body);
        await vehiculo.save();
        res.send("Vehiculo guardado correctamente.");
    } catch (error) {
        console.error(error);
    }
}

// Listar
const vehiculosList = async (req, res) => {
    try {
        const listaVehiculos = await Vehiculo.find();
        res.status(200).send(listaVehiculos);
    } catch (error) {
        console.error(error);
    }
}

// Consultar por Id
const vehiculoXid = async (req, res) => {
    try {
        const id = req.params.id;
        if(id){
            const vehiculo = await Vehiculo.findById(id);
            if (vehiculo) {
                res.status(200).send(vehiculo);
            } else {
                res.send("No existe vehiculo con ese Id.")
            }
        } else{
            res.send("No se puede tramitar la petición.")
        }
    } catch (error) {
        console.error(error);
    }
}


module.exports = {
    vehiculoSave,
    vehiculosList,
    vehiculoXid
}