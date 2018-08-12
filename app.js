// using ajax request to fetch data from an api.

function getNewsAjax(url, callback) {

    let xttp = new XMLHttpRequest();
    xttp.open("GET", url, true);
    xttp.send();
    xttp.addEventListener('readystatechange', function () {

        if (this.readyState == 4 && this.status == 200) {
            callback(this);
        }
    })

}

getNewsAjax('https://newsapi.org/v1/sources', (res) => {
    let data = res.responseText;
    console.log(JSON.parse(data));
});


// using ES6 fetch Api 

function getNewsFetch(url) {
    return new Promise((res, rej) => {
        fetch(url)
            .then(r => res(r.json()))
            .catch(() => {
                // handel errors here
            })
    })
}

getNewsFetch('https://newsapi.org/v1/sources')
    .then(res => console.log(res));
