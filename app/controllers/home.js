const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => res.render('home', { title: 'CryptoBlades Tracker by eD3ath - MOD by M1EL', page: 'home' }));
router.get('/logger', (req, res, next) => res.render('logger', { title: 'CryptoBlades Tracker by eD3ath - MOD by M1E', page: 'logger' }));
router.get('/calculator', (req, res, next) => res.render('calculator', { title: 'CryptoBlades Tracker by eD3ath - MOD by M1E', page: 'calculator' }));
router.get('/market', (req, res, next) => res.render('market', { title: 'CryptoBlades Tracker by eD3ath - MOD by M1E', page: 'market' }));

module.exports = router;
