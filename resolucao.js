var request = require('./broken-database.json'); // requisição da base de dados
var data = JSON.parse(JSON.stringify(request)); // transformando a requisição JSON em um arquivo objeto JS para manipulação
fix_name(data);

function fix_name(data) {
    for (i = 0; i < 10; i++) {
        aux = data[i].name.substring(); //conve
        aux = aux.replace(/¢/g, "c").replace(/æ/g, "a").replace(/æ/g,).replace(/ø/g, "o").replace(/ß/g, "b");
        console.log(aux);
    }
};
function fix_price(data) { };
function fix_quantity(data) { };