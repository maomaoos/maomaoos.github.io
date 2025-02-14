function calcularIMC() {
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Por favor, ingrese valores válidos para peso y altura.");
        return;
    }

    altura = altura / 100;

    let imc = peso / (altura * altura);

    document.getElementById("resultado").textContent = ''; // Limpiar el campo antes de mostrar el resultado

    document.querySelectorAll('.result-box').forEach(function(box) {
        box.style.opacity = '0.3';
    });

    let linkElement = '';
    let resultadoTexto = '';
    if (imc < 18.5) {
        document.querySelector('.bajo').style.opacity = '1';
        linkElement = 'link-bajo';
        document.getElementById(linkElement).href = "https://ericflag.com/es/blogs/información/dieta-para-ganar-peso?srsltid=AfmBOorkOgFeANkgYJlDwz15DUVBFxXCnEBZYEwY0FgQ4njQa2Enim_e";
        resultadoTexto = 'Bajo peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        document.querySelector('.normal').style.opacity = '1';
        linkElement = 'link-normal';
        document.getElementById(linkElement).href = "https://buenosaires.gob.ar/desarrolloeconomico/desarrollo-saludable/alimentacion-y-nutricion/alimentacion-saludable-y-actividad-fisica";
        resultadoTexto = 'Peso normal';
    } else {
        document.querySelector('.sobrepeso').style.opacity = '1';
        linkElement = 'link-sobrepeso';
        document.getElementById(linkElement).href = "https://www.lavanguardia.com/vivo/salud/20160720/403333869788/perder-peso-dieta.html";
        resultadoTexto = 'Sobrepeso';
    }

    // Mostrar el resultado con el texto
    document.getElementById("resultado").textContent = resultadoTexto;
}
