const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query("SELECT * FROM peliculaview; SELECT * FROM director; SELECT * FROM pais; SELECT * FROM tipocine;", (err, pelicula) => {
            if ( err ) {
                res.json(err);
            } 
            res.render('pelicula', {data: pelicula});
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO pelicula set ?', [data], (err, pelicula) => {
            res.redirect('/peliculas');
        });
    });
};

controller.edit = (req, res) => {
    const {id} = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM pelicula WHERE  idPelicula = ?; SELECT * FROM peliculaview where idPelicula = ?; SELECT * FROM director; SELECT * FROM pais; SELECT * FROM tipocine;', [id, id], (err, pelicula) => {
            res.render('pelicula_update', {data: pelicula});
        });
    });
};

controller.update = (req, res) => {
    const {id} = req.params;
    const newPelicula = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE pelicula set ? where idPelicula = ?', [newPelicula, id], (err, pelicula) => {
            res.redirect('/peliculas');
        });  
    });
}

controller.delete = (req, res) => {
    const {id} = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM pelicula where idPelicula = ?', [id], (err, pelicula) => {
            res.redirect('/peliculas');
        });
    })
};

module.exports = controller;