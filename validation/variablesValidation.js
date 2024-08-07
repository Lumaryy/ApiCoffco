import { check } from "express-validator";

export const validateVariables = [
    check('nombre', 'El nombre es obligatorio').not().isEmpty().isLength({ max: 20 }),
    check('estado', 'El estado es obligatorio').not().isEmpty().isLength({ max: 10 }),
    check('fk_idVersiones', 'El id de versiones es obligatorio').not().isEmpty().isLength({ max: 10 }),
]