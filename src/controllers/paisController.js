const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM pais', (err, pais) => {
            if ( err ) {
                res.json(err);
            } 
            res.render('paises', {data: pais});
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO pais set ?', [data], (err, pais) => {
            res.redirect('/paises');
        });
    });
};

controller.edit = (req, res) => {
    const {id} = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM pais WHERE  idPais = ?', [id], (err, pais) => {
            res.render('pais_update', {data: pais[0]});
        });
    });
};

controller.update = (req, res) => {
    const {id} = req.params;
    const newPais = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE pais set ? where idPais = ?', [newPais, id], (err, pais) => {
            res.redirect('/paises');
        });  
    });
}

controller.delete = (req, res) => {
    const {id} = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM pais where idPais = ?', [id], (err, pais) => {
            res.redirect('/paises');
        });
    })
};

module.exports = controller;