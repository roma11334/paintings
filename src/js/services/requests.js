const postData = async (url, data) => {
    let promise = await fetch(url, {
        method: "POST",
        body: data
    });

    return await promise.text();
}

const getResource = async (url) => {
    let promise = await fetch(url);

    if(!promise.ok){
        throw new Error(`Could not fetch ${url}, status: ${promise.status}`);
    }
    
    return await promise.json();
}

export {postData, getResource};