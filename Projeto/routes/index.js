const express = require("express");
//Rotas (quando o servidor for acessado, para onde ele vai?)
const router = express.Router();

router.get('/', (req,res) => { //Primeira rotta//funçaõ  anonima//dois parametoros
    let obj={
        nome:req.query.nome,
    };
    res.render('home',obj);
});
router.get('/rota1', (req,res) => { //Primeira rotta//funçaõ  anonima//dois parametoros
        let obj={
            materia1:[{nome:'Algoritmo e Lógica de Programação', status:'Aprovado',nota:'7,6',frequencia:'100%'}],
            materia2:[{nome:'Modelagem de Banco de Dados', status:'Aprovado',nota:'6,4',frequencia:'95%'}],
            materia3:[{nome:'Engenharia de Software I', status:'Aprovado',nota:'8,2',frequencia:'95%'}],
            materia4:[{nome:'Sistemas Operacionais e Redes de Computadores', status:'Aprovado',nota:'6.7',frequencia:'95%'}],
            materia5:[{nome:'Desenvolvimento Web I', status:'Aprovado',nota:'9,6',frequencia:'75.00%'}],
            materia6:[{nome:'Design Digital', status:'Aprovado',nota:'9,8',frequencia:'95%'}],
            //Segundo semestre
            materia7:[{nome:'Banco de Dados Relacional', status:'Aprovado',nota:'8,0',frequencia:'85%'}],
            materia8:[{nome:'Engenharia de Software II', status:'Aprovado',nota:'7,4',frequencia:'90%'}],
            materia9:[{nome:'Técnica de Programação I ', status:'Aprovado',nota:'8,2',frequencia:'95%'}],
            materia10:[{nome:'Matemática para Computação', status:'Aprovado',nota:'8,4',frequencia:'95%'}], 
        };
    res.render('rota1',obj);
});
router.get('/rota2', (req,res) => { //Primeira rotta//funçaõ  anonima//dois parametoros
    let obj={
        nome:req.query.nome,
    };
    res.render('rota2',obj);
});

module.exports = router;