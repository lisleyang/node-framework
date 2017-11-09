import indexModel from '../models/indexModel'
import log4js from '../log/log4js';

const indexController = {
    index() {
        return async(ctx, next) => {
            const indexModelIns = new indexModel();
            const result = await indexModelIns.getData();
            ctx.body = await ctx.render('index', { data: result });
        }
    }
}

export default indexController;