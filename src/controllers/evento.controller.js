const EventoService = require('../services/evento.services');

const createEvento = async(req, res, next) => {
    try {
        const { body } = req;
        const evento = await EventoService.add(body);
        res.status(201).json(evento);
    } catch(error) {
        next(error);
    }
}

const getEventos = async(req, res, next) => {
    try {
        const eventos = await EventoService.getAll();
        res.status(201).json(eventos);
    } catch(error) {
        next(error);
    }
}

const getEventoById = async(req, res, next) => {
    try {
        const { id } = req.params;
        const evento = await EventoService.getById(id);
        res.status(201).json(evento);
    } catch(error) {
        next(error);
    }
}

const updateEvento = async(req, res, next) => {
    try {
        const { id }   = req.params;
        const { body } = req;
        const evento = await EventoService.update(id, body);
        res.status(201).json(evento);
    } catch(error) {
        next(error);
    }
}

module.exports = {
    createEvento,
    getEventos,
    getEventoById,
    updateEvento
}