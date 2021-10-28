export const fetchDataGetIncludeCors = async function (url) {
    let data = await fetch(url, {
        method: 'GET',
        credentials: 'include',
        mode: 'cors'
    });
    return await data.json();
};

export const fetchJsonDataPostIncludeCors = async function (url, data) {
    fetch(url, {
        method: 'POST',
        body: data,
        credentials: 'include',
        mode: 'cors',
        headers: {
            "Content-Type": "application/json"
        },
    }).catch(err => console.error(err));
};