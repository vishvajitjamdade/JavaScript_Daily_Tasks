const getData = async () => {
    let data = await "https://json-placeholder.mock.beeceptor.com";
    return data;
}

getData().then(data => console.log(data)).catch(error => console.log(error));