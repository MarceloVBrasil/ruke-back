import express from "express"
import cors from "cors"
import dotenv from "dotenv"

import authRoutes from "./routes/authRoutes"
import userRoutes from "./routes/userRoutes"
import tenantsRoutes from "./routes/tenantsRoutes"
import produtosRoutes from "./routes/produtosRoutes"
import planosRoutes from "./routes/planosRoutes"
import trabalhistaRoutes from "./routes/trabalhistaRoutes"
import planosContratadosRoutes from "./routes/planoContratadoRoutes"
import superendividamentoRoutes from "./routes/superendividamentoRoutes"
import bancosRoutes from "./routes/bancoRoutes"
import processosRoutes from "./routes/processosRoutes"
import bpcRoutes from "./routes/bpcRoutes"
import pessoaRoutes from "./routes/pessoasRoutes"
import doencaRoutes from "./routes/doencasRoutes"
import rmcRoutes from "./routes/rmcRoutes"
import ocrRoutes from "./routes/ocrRoutes"

dotenv.config()
const { PORT } = process.env

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/auth', authRoutes)
app.use('/tenants', tenantsRoutes)
app.use('/produtos', produtosRoutes)
app.use('/planos', planosRoutes)
app.use('/planos-contratados', planosContratadosRoutes)
app.use('/users', userRoutes)
app.use('/trabalhista', trabalhistaRoutes)
app.use('/superendividamento', superendividamentoRoutes)
app.use('/bancos', bancosRoutes)
app.use('/processos', processosRoutes)
app.use('/bpc', bpcRoutes)
app.use('/pessoas', pessoaRoutes)
app.use('/doencas', doencaRoutes)
app.use('/rmc', rmcRoutes)
app.use('/ocr', ocrRoutes)

app.listen(PORT, () => console.log(`listening on port ${PORT}`))