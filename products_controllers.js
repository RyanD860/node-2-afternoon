module.exports = {
  getAll: (req, res, next) => {
    const db = req.app.get("db");

    db
      .read_products()
      .then(resp => res.status(200).send(resp))
      .catch(() => res.status(500).send());
  },

  getOne: (req, res, next) => {
    const db = req.app.get("db");
    db
      .read_product([req.params.id])
      .then(resp => {
        return res.status(200).send(resp);
      })
      .catch(res.status(500));
  },

  create: (req, res, next) => {
    const db = req.app.get("db");
    db
      .create_product([
        req.body.name,
        req.body.description,
        req.body.price,
        req.body.imageurl
      ])
      .then(resp => {
        return res.status(200).send(resp);
      })
      .catch(res.status(500));
  },
  update: (req, res, next) => {
    const db = req.app.get("db");
    db
      .update_product([req.params.id, req.query.desc])
      .then(resp => {
        return res.status(200).send(resp);
      })
      .catch(res.status(500));
  },
  delete: (req, res, next) => {
    const db = req.app.get("db");
    db
      .delete_product([req.params.id])
      .then(resp => {
        return res.status(200).send(resp);
      })
      .catch(res.status(500));
  }
};
