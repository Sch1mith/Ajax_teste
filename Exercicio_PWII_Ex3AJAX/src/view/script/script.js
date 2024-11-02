let urlSiteContoller = "http://localhost:3400/src/controller/APPcontroller.php";
const reqSiteController = new Request(urlSiteContoller);

function processarResposta(resp){
    resp.text().then(function(txt){
        console.log(document.getElementById("resposta").innerHTML = txt);
    });
}
console.log("Carregando");
fetch(reqSiteController).then(processarResposta);
console.log("Carregando");
fetch(reqSiteController).then(processarResposta);
console.log("Carregando");
fetch(reqSiteController).then(processarResposta);
console.log("Carregando");
fetch(reqSiteController).then(processarResposta);

console.log("Final da execução");