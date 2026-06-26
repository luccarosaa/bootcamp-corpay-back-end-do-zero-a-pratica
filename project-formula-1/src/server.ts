import fastify from "fastify";
import cors from "@fastify/cors";

const server = fastify({ logger: true });

server.register(cors, {
    origin: "*",
    methods: ["GET", "POST"],
});

const teams = [
    { id: 1, name: "Mercedes", base: "Brackley, United Kingdom" },
    { id: 2, name: "Red Bull", base: "Milton Keynes, United Kingdom" },
    { id: 3, name: "Ferrari", base: "Maranello, Itália" },
    { id: 4, name: "McLaren", base: "Woking, United Kingdom" },
    { id: 5, name: "Aston Martin", base: "Silverstone, United Kingdom" },
    { id: 6, name: "Alpine", base: "Enstone, United Kingdom" },
    { id: 7, name: "Williams", base: "Grove, United Kingdom" },
    { id: 8, name: "AlphaTauri", base: "Faenza, Itália" },
    { id: 9, name: "Alfa Romeo", base: "Hinwil, Suíça" },
    { id: 10, name: "Haas", base: "Kannapolis, United States" },
];

const drivers = [
    { id: 1, name: "Lewis Hamilton", team: "Mercedes" },
    { id: 2, name: "Max Verstappen", team: "Red Bull" },
    { id: 3, name: "Charles Leclerc", team: "Ferrari" },
    { id: 4, name: "Lando Norris", team: "McLaren" },
    { id: 5, name: "George Russell", team: "Mercedes" },
    { id: 6, name: "Sergio Pérez", team: "Red Bull" },
    { id: 7, name: "Carlos Sainz", team: "Ferrari" },
    { id: 8, name: "Oscar Piastri", team: "McLaren" },
    { id: 9, name: "Fernando Alonso", team: "Aston Martin" },
    { id: 10, name: "Lance Stroll", team: "Aston Martin" },
    { id: 11, name: "Esteban Ocon", team: "Alpine" },
    { id: 12, name: "Pierre Gasly", team: "Alpine" },
    { id: 13, name: "Alexander Albon", team: "Williams" },
    { id: 14, name: "Logan Sargeant", team: "Williams" },
    { id: 15, name: "Yuki Tsunoda", team: "AlphaTauri" },
    { id: 16, name: "Daniel Ricciardo", team: "AlphaTauri" },
    { id: 17, name: "Valtteri Bottas", team: "Alfa Romeo" },
    { id: 18, name: "Guanyu Zhou", team: "Alfa Romeo" },
    { id: 19, name: "Kevin Magnussen", team: "Haas" },
    { id: 20, name: "Nico Hülkenberg", team: "Haas" },
];

server.get("/teams", async (request, response) => {
    response.type("application/json").code(200);
    return { teams };
});

server.get("/drivers", async (request, response) => {
    response.type("application/json").code(200);
    return { drivers };
});

interface DriverParams {
    id : string
}

server.get<{Params: DriverParams}>("/drivers/:id", async (request, response) => {
    const id = parseInt(request.params.id);
    const driver = drivers.find((d) => d.id === id);

    if(!driver) {
        response.type("application/json").code(404);
        return { message: "Driver not found" };
    } else {
        response.type("application/json").code(200);
        return { driver };
    }
});

server.listen({ port: 3333 }, () => {
    console.log("Server init");
});