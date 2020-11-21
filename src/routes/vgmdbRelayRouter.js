const Router = require('@koa/router');
const router = new Router({prefix: '/vgmdb-relay'});

const {handleGetAlbum,handleSearchCatalog} = require('../controllers/vgmdbRelayController');

router.get('/album/:id', handleGetAlbum);
router.get('/search/catalog/:id', handleSearchCatalog);

module.exports = router;
