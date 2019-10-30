exports.getAdminSignIn = (req, res) => {
    if (req.session.isAdmin && req.session.isLoggedIn) {
        res.render('signInAdmin', {
            pageTitle: 'Admin Sign In'
        })
    } else if (req.session.isLoggedIn && req.session.isStudent) {
        res.redirect('/studentHomePage');
    } else {
        res.render('signInAdmin', {
            pageTitle: 'Admin Sign In'
        });
    }
}

exports.getAdminHomePage = (req, res) => {
    if (req.session.isLoggedIn == true && req.session.isAdmin) {
        res.render('homeAdmin');
    } else if (req.session.isLoggedIn && req.session.isStudent) {
        res.redirect('/studentHomePage');
    } else {
        res.redirect('/adminSignIn');
    }
}

exports.postAdminSignIn = (req, res) => {
    const adminPassword = req.body.password;
    if (adminPassword === process.env.ADMIN_LOGIN) {
        console.log('Correct password admin');
        req.session.adminPassword = req.body.adminPassword;
        req.session.isLoggedIn = true;
        req.session.isAdmin = true;
        req.session.isStudent = false;
        req.session.cookie.maxAge = 24 * 60 * 60 * 1000;
        res.redirect('/adminHomePage');
    } else {
        console.log('Incorrect password admin');
        res.redirect('/adminSignIn');
    }
}


exports.postAdminSignOut = (req, res) => {
    req.session.destroy();
    res.redirect('/adminSignIn');
}