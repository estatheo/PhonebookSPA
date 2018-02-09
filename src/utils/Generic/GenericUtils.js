
export function Get (url){
    
    let result = fetch(url)
        .then((data) => {
            return data.json().then(data => data)})
        .catch(function(error) {
            console.log(error);
            return (null);
        });
    return result;
}
