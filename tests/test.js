// Tests
const baseURI = 'https://mongodb-express-crud-api.vercel.app/'
const URI = `${baseURI}/api/p/product/67e08264c377ada66f1128dc`;
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