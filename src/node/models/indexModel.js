import rp from 'request-promise';
import cheerio from 'cheerio';

class indexModel {
    getData() {
        return new Promise((resolve, reject) => {
            rp("https://malls.3g.fang.com/api/shop/GetCityInfo?cityShort=bj").then(function(htmlString) {
                console.log(htmlString);
                resolve(htmlString)
                    /* const $ = cheerio.load(htmlString);
                    console.log($('#pane-news .hotnews ul'));
                    resolve(); */
            }).catch((err) => {
                reject(err);
            })
        })
    }
}

export default indexModel;