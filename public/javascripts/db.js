const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://rootAdministrator:rnHkSRiAnDdGilcR@metaverse-2ydnc.azure.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    var database = async function(type, collections) {
        let collection = client.db("Metaverse").collection(collections);
        let conn;
        let query;
        try {
            conn = await collection.getConnection();
            switch(type){
                    case('don'):
                        query = await conn.query('SELECT * FROM gave');
                        break;
                    case('home'):
                        query = await conn.query('SELECT * FROM benefactors');
                        break;
                    case('home'):
                        query = await conn.query('SELECT * FROM benefactors');
                        break;
                    case('home'):
                        query = await conn.query('SELECT * FROM benefactors');
                        break;
                    case('home'):
                        query = await conn.query('SELECT * FROM benefactors');
                        break;
            }
            return query;
        }
        catch(err){
            throw err;
        }
        finally{
            client.close();
        }
    }
    module.exports = database;
});