import request from 'superagent'

let caller = {
    fetchData: (url, params, callback) => {
        debugger;
        return request
            .post(url)
            .withCredentials()
            .set('Access-Control-Allow-Origin', '*')
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .send(params)
            .end((err, res) => {
                debugger;
                if (err) {
                    callback(err)
                }
                if(res) {
                    callback(res)
                }
            });
    }
}

export default caller
