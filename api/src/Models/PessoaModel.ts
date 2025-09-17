import mongoose from "mongoose";

const PessoaSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    Pokemon: { type: String, required: true }
});
const PessoaModel = mongoose.model('Pessoa', PessoaSchema);  
export default PessoaModel;