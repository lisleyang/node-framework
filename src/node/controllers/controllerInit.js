import IndexController from './indexController';
const controllerInit = {
    getAllRouters(app, router) {
        app.use(router(_ => {
            _.get('/', IndexController.index());
            _.get('/index.html', IndexController.index());
        }));
    }
}

export default controllerInit;