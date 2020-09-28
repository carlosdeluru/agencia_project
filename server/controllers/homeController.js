const Viaje = require('../modelos/Viajes');
const Testimonial = require('../modelos/Testimoniales');

exports.consultasHomepage = async (req, res) =>{ 

    const viajes = await Viaje.findAll({limit: 3})

    const testimonial = await Testimonial.findAll({limit: 3})

    res.render('index',{
        pagina:'Proximos Viajes',
        clase: 'home',
        viajes,
        testimonial
    })
}