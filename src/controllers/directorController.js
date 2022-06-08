const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM director', (err, director) => {
            if ( err ) {
                res.json(err);
            } 
            console.log(director)
            res.render('directores', {data: director});
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO director set ?', [data], (err, director) => {
            res.redirect('/directores');
        });
    });
};

controller.edit = (req, res) => {
    const {id} = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM director WHERE  idDirector = ?', [id], (err, director) => {
            console.log(director);
            res.render('director_update', {data: director[0]});
        });
    });
};

controller.update = (req, res) => {
    const {id} = req.params;
    const newDirector = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE director set ? where idDirector = ?', [newDirector, id], (err, director) => {
            res.redirect('/directores');
        });  
    });
}

controller.delete = (req, res) => {
    const {id} = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM director where idDirector = ?', [id], (err, director) => {
            res.redirect('/directores');
        });
    })
};

module.exports = controller;