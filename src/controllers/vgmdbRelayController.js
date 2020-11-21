const Vgmdbinfo = require('../services/Vgmdbinfo');

async function handleGetAlbum(ctx) {
    const album = await Vgmdbinfo.getAlbum(ctx.params.id);

    const name = `##name##\n${album.names.ja}\n##name-end##\n`;
    const catalog = `##catalog##\n${album.catalog}\n##catalog-end##\n`;
    let tracks = album.discs.reduce((acc, disc) =>
            disc.tracks.reduce((acc1, item) => acc1 + item.names.Japanese + '\n', acc)
        , '');
    tracks = `##tracks##\n${tracks}##tracks-end##\n`;

    let performers = album.performers.reduce((acc, performer) =>
        performer.names.ja && acc + performer.names.ja + '\n' || acc
        , '');
    performers = `##performers##\n${performers}##performers-end##\n`;

    ctx.body = name + catalog + tracks + performers;
}

async function handleSearchCatalog(ctx) {
    const {results: {albums: [album]}} = await Vgmdbinfo.searchAlbum(ctx.params.id);

    if (album) {
        ctx.redirect(`/vgmdb-relay/${album.link}`);
    } else {
        ctx.statusCode = 404;
    }
}

module.exports = {
    handleGetAlbum,
    handleSearchCatalog
};
