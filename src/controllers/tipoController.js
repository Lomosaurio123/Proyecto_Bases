const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM tipocine', (err, tipo) => {
            if ( err ) {
                res.json(err);
            } 
            res.render('tipos', {data: tipo});
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO tipocine set ?', [data], (err, tipo) => {
            res.redirect('/tipos');
        });
    });
};

controller.edit = (req, res) => {
    const {id} = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM tipocine WHERE  idTipoCine = ?', [id], (err, tipo) => {
            res.render('tipos_update', {data: tipo[0]});
        });
    });
};

controller.update = (req, res) => {
    const {id} = req.params;
    const newTipo = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE tipocine set ? where idTipoCine = ?', [newTipo, id], (err, tipo) => {
            res.redirect('/tipos');
        });  
    });
}

controller.delete = (req, res) => {
    const {id} = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM tipocine where idTipoCine = ?', [id], (err, tipo) => {
            res.redirect('/tipos');
        });
    })
};

module.exports = controller;