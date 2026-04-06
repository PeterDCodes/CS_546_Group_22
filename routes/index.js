// INDEX FOR ROUTES
import {static as staticDir} from 'express';

const constructorMethod = (app) => {
    app.use('/', mealRoutes);
    app.use('/public', staticDir('public'));
    app.use(/(.*)/, (req, res) => {
        res.status(404).render('error');
    });
};

export default constructorMethod;