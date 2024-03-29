import express = require('express');
import { Request, Response } from 'express'
import { createProductVarirant, getProductVarirant } from './controller';


const router: express.Router = express.Router();

router.get('/getProductVariant', async (req: Request, res: Response) => {

	const response = await getProductVarirant();
	res.json(response)

})

router.post('/createProductVariant', async (req: Request, res: Response) => {

	const response = await createProductVarirant(req.body);
	res.json(response)

})
export { router }