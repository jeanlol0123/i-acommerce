import { Router } from "express";
import { getPersons, postPerson, deletePersons, updatePerson, getSinglePerson} from "../controllers/user.controller.js";
const router = Router();

router.post('/person', postPerson);

router.get('/persons', getPersons);

router.get('/person/:id', getSinglePerson);

router.delete('/person/:id', deletePersons);

router.put('/person/:id', updatePerson);





export default router;