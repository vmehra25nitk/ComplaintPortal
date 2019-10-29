exports.getAdminSignIn = (req, res) => {
    req.session.adminId = req.body.adminId;
    req.session.cookie.maxAge = 24 * 60 * 60 * 1000;
    res.redirect('/adminHomePage');
}

exports.getAdminHomePage = (req, res) => {
    res.send('homeAdmin');
}