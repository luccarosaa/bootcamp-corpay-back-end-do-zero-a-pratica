const { getFullName, productType } = require("./services/products");
const config = require("./services/config");
const database = require("./services/database");

async function main() {
    console.log('Carrinho de compras');

    getFullName("1", "teclado");
    // product.getFullName("408", "mousepad");
    // product.getFullName("508", "mouse");
    // product.getFullName("608", "monitor");

    // console.log(config.client);

    database.connectToDatabase("my_database");
    database.disconnectToDatabase();
}

main()