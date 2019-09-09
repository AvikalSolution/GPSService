const Locat = require('../models').LocationModel;
var skt = require('../skt');

module.exports={
    getById(req, res) {
        return Locat
          .findOne({id:req.params.id})
          .then((location) => {
            if (!location) {
              return res.status(404).send({
                message: 'location Not Found',
              });
            }
            return res.status(200).send(location);
          })
          .catch((error) => res.status(400).send(error));
      },

      add(req, res) {
          
        return Locat
          .create({
            //id : req.body.id,
            latitude: req.body.latitude,
            longitude: req.body.longitude,
          })
          .then((locat) => 
          {
            console.log("emitting...");
            console.log(req.body);

            skt.emit('message', req.body);
            res.status(201).send(locat);
          })
          .catch((error) => res.status(400).send(error));
        },
}