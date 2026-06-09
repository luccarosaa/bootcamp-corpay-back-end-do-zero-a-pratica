const databaseType = {
    userType: "admin",
    typeData: "datalocal"
}

async function connectToDatabase(dataName) {
    //logica de conexão
    console.log(`Connecting to database: ${dataName}...`);
}

async function disconnectFromDatabase() {
    //logica de desconexão
    console.log("Disconnecting...");
}

export {
    connectToDatabase,
    disconnectFromDatabase,
    databaseType,
};