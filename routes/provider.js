// Load express and our Schema
const express = require('express');
const router = express.Router();

// TODO
// If needed add a post endpoint

const { getAllProvider, getProviderZip } = require('../controllers/providers');

router.get('/', getAllProvider);
router.get('/zip', getProviderZip);

// router.route('/').get((req, res) => {
// 	Provider.aggregate([{ $sample: { size: 1 } }])
// 		// Card.find()
// 		.then((providers) => res.json(providers))
// 		.catch((err) => res.status(400).json('Error: ' + err));
// });

// // GET Endpoint
// router.route('/', async (req, res) => {
// 	// response.json(request.body);
// 	const providers = await Provider.find();

// 	res.send(providers);
// 	// // Try - Catch
// 	// try {
// 	// 	res.send(providers);
// 	// } catch (error) {
// 	// 	res.status(500).send(error);
// 	// }
// });

// Export endpoints
module.exports = router;
