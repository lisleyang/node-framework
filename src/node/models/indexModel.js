import rp from 'request-promise';

class indexModel {
    getData() {
        return rp('http://news.baidu.com/');
    }
}

export default indexModel;