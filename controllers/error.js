exports.getError = (req, res, next) => {
    res.status(404).render('error', { title: 'Page not found', path: ''})
}
