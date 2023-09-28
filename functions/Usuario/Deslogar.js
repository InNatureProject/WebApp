async function Deslogar(res) {
    res.clearCookie('Token');
    res.redirect('/');
    res.end()
}

module.exports = Deslogar;