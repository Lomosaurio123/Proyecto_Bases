const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM cartelera', (err, cartelera) => {
            if ( err ) {
                res.json(err);
            } 
            res.render('cartelera', {data: cartelera});
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO cartelera set ?', [data], (err, cartelera) => {
            res.redirect('/');
        });
    });
};

controller.edit = (req, res) => {
    const {id} = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM cartelera WHERE  idCartelera = ?', [id], (err, cartelera) => {
            console.log(cartelera);
            res.render('cartelera_update', {data: cartelera[0]});
        });
    });
};

controller.update = (req, res) => {
    const {id} = req.params;
    const newCartelera = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE cartelera set ? where idCartelera = ?', [newCartelera, id], (err, cartelera) => {
            res.redirect('/');
        });  
    });
}

controller.delete = (req, res) => {
    const {id} = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM cartelera where idCartelera = ?', [id], (err, cartelera) => {
            res.redirect('/');
        });
    })
};

module.exports = controller;