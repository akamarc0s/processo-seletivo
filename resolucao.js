var request = require('./broken-database.json'); // requisição da base de dados
var data = JSON.parse(JSON.stringify(request)); // transformando a requisição JSON em um arquivo objeto JS para manipulação
fix_name(data);

function fix_name(data) { // função para alterar os caracteres especiais
    for (i = 0; i < data.length; i++) {
        aux = data[i].name.substring();
        aux = aux.replace(/¢/g, "c").replace(/æ/g, "a").replace(/æ/g,).replace(/ø/g, "o").replace(/ß/g, "b"); // expressões regulares para trocar todos os caracteres especiais.
        console.log(aux);
    }
};
function fix_price(data) { };
function fix_quantity(data) { };