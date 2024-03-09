export function callAPI(url,options)
{
    const output = fetch(url,options);
    const data = output.then((res)=>res.json());
    return data;
}