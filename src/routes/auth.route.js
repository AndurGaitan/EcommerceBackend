import express from 'express'
const router = express.Router();
import {login, register} from "../controller/auth.controller.js"
import {body} from 'express-validator'
import { validationResultExpress } from '../middlewares/validationResultExpress.js';

router.post(
    "/register",
    [
    body('email', 'Formato de email incorrecto').trim().isEmail().normalizeEmail(),
    body("password", "Contraseña mínimo 6 carácteres")
    .trim()
    .isLength({ min: 6 })
    .custom((value, { req }) => {
        if (value !== req.body.repassword) {
            throw new Error("No coinciden las contraseñas");
        }
        return value;
    }),
],
validationResultExpress,
register
);

router.post(
    "/login",
    [
        body("email", "Ingrese un email válido")
            .trim()
            .isEmail()
            .normalizeEmail(),
        body("password", "Contraseña mínimo 6 carácteres")
            .trim()
            .isLength({ min: 6 }),
    ],
    validationResultExpress,
    login
);
 
export default router;