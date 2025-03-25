// Tests
const baseURI = 'https://mongodb-express-crud-api.vercel.app/'
const URI = `${baseURI}`;
const test = async (URI) => {
    try {
        const response = await fetch(URI);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (err) {
        console.error(err);
        return err;
    }
}

test(URI);