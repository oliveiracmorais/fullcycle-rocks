const express = require('express');
const mysql = require('mysql2');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Configuração do banco
const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: 3306,
    connectTimeout: 20000,
    charset: 'utf8mb4'
};

let db;
let dbConnected = false;
let isConnecting = false;

// Conexão com retry
const connectToMySQL = () => {
    if (isConnecting || dbConnected) return;
    isConnecting = true;

    console.log('Tentando conectar ao MySQL...');
    db = mysql.createConnection(dbConfig);

    db.connect((err) => {
        isConnecting = false;
        if (err) {
            console.error('Erro ao conectar ao MySQL:', err);
            setTimeout(connectToMySQL, 5000);
            return;
        }
        console.log('Conectado ao banco MySQL');
        dbConnected = true;
    });

    db.on('error', (err) => {
        console.error('Erro no banco de dados:', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            dbConnected = false;
            console.log('Conexão perdida. Reconectando...');
            setTimeout(connectToMySQL, 5000);
        } else {
            console.log('Erro de conexão, tentando novamente:', err.code);
            dbConnected = false;
            setTimeout(connectToMySQL, 5000);
        }
    });
};

connectToMySQL();

// Middleware
app.use(express.json());

// Rota principal
app.get('/', (req, res) => {
    if (!dbConnected || !db) {
        return res.status(503).send('<h1>Aguardando conexão com o banco de dados...</h1>');
    }

    const name = `Fernando_${Math.floor(Math.random() * 1000)}`;

    const insertQuery = 'INSERT INTO people (name) VALUES (?)';
    db.query(insertQuery, [name], (err) => {
        if (err) {
            console.error('Erro ao inserir nome:', err);
            return res.status(500).send('<h1>Erro ao salvar nome</h1>');
        }

        const selectQuery = 'SELECT name FROM people';
        db.query(selectQuery, (err, results) => {
            if (err) {
                console.error('Erro ao buscar nomes:', err);
                return res.status(500).send('<h1>Erro ao buscar nomes</h1>');
            }

            const namesList = results.map(row => row.name).join('<br>');
            res.send(`
        <h1>Full Cycle Rocks!</h1>
        <br>
        ${namesList}
      `);
        });
    });
});

// Health check
app.get('/health', (req, res) => {
    res.status(dbConnected ? 200 : 503).send(dbConnected ? 'OK' : 'Aguardando conexão com o banco de dados...');
});


app.listen(port, "0.0.0.0", () => {
    console.log(`Servidor Node.js rodando na porta ${port}`);
}).on('error', (err) => {
    console.error('Erro ao iniciar servidor:', err);
    process.exit(1);
});

module.exports = app;
