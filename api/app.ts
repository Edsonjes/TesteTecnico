
import cors from 'cors';
import router from'./src/Routers/Router.js';
import dotenv from 'dotenv';
import express from 'express';
dotenv.config();
const app = express();

app.use(cors());

app.use(express.json());

app.get('/api', (req:express.Request, res:express.Response) => {
    res.json({message:"API funcionando"});
});


app.use(router);

// Middleware para lidar com erros 
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ message: "Erro interno do servidor" });
});

// Middleware para lidar com rotas não encontradas
app.use(( err:any,req:express.Request, res:express.Response) => {
    console.error(err.stack);
    res.status(404).json({message:"Rota não encontrada"});
});

async function startServer() {

    try {
         const PORT = process.env.PORT || 3001;
            app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });
    } catch (error) {
        console.error("Erro ao iniciar o servidor:", error);
    }
}
startServer();