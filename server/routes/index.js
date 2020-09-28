const express = require('express');
const router = express.Router();

const Viaje = require('../modelos/Viajes');
const Testimonial = require('../modelos/Testimoniales');
//controladores
const nosotrosController = require('../controllers/nosotrosController');
const homeController = require('../controllers/homeController');
const viajesController = require('../controllers/viajesController');
const testiomonialesController = require('../controllers/testimonialesController');

module.exports = function(){
    router.get('/', homeController.consultasHomepage );
    
    router.get('/nosotros', nosotrosController.infoNosotros );
    
    router.get('/viajes', viajesController.mostrarViajes);
    
    router.get('/viajes/:id', viajesController.mostrarViaje);

    router.get('/testimoniales', testiomonialesController.mostrarTestimoniales);

    router.post('/testimoniales', testiomonialesController.agregarTestimonial)
    
    return router;
}