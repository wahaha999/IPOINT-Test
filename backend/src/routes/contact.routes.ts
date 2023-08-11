import { Router } from 'express';
import * as contactController from '../controllers/contact.controller';
import { validateContactDetails } from '../middlewares/contactValidation';

const router = Router();

router.post('/', validateContactDetails, contactController.createContact);

export default router;