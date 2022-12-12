var wordpress = require("wordpress");

const texto = '<p>En el mundo actual, cada vez más personas se están quedando sin trabajo. Afortunadamente, existen distintos tipos de subsidio por desempleo que pueden ayudar a estas personas a pasar por esta difícil situación. Aquí explicaremos los 8 tipos de subsidio por desempleo que existen, sus requisitos y cómo solicitarlos paso a paso.</p>  <h2>Subsidio Estatal por Desempleo</h2> <p>El subsidio estatal por desempleo es uno de los 8 tipos de subsidio por desempleo y es el más común. Este se ofrece a través de los departamentos de trabajo de cada estado. Para poder solicitar este subsidio, el solicitante debe cumplir con los siguientes requisitos: tener al menos 18 años, haber trabajado durante al menos 20 semanas en los últimos 18 meses, y tener una pérdida de ingresos de al menos un 25%. Además, el solicitante debe estar disponible para trabajar, buscar trabajo activamente y aceptar un empleo si se le ofrece. Para solicitar este subsidio, el solicitante debe contactar con el departamento de trabajo de su estado y completar una solicitud. Una vez aprobada la solicitud, el solicitante recibirá el subsidio mensualmente.</p>  <h2>Subsidio Federal por Desempleo</h2> <p>El subsidio federal por desempleo es uno de los 8 tipos de subsidio por desempleo. Este se ofrece a través del Departamento de Trabajo de los Estados Unidos. Para poder solicitar este subsidio, el solicitante debe cumplir los siguientes requisitos: tener al menos 18 años, haber trabajado durante al menos 20 semanas en los últimos 18 meses, y tener una pérdida de ingresos de al menos un 25%. Además, el solicitante debe estar disponible para trabajar, buscar trabajo activamente y aceptar un empleo si se le ofrece. Para solicitar este subsidio, el solicitante debe contactar con el Departamento de Trabajo de los Estados Unidos y completar una solicitud. Una vez aprobada la solicitud, el solicitante recibirá el subsidio mensualmente.</p>  <h2>Subsidio por Desempleo para Autónomos</h2> <p>El subsidio por desempleo para autónomos es uno de los 8 tipos de subsidio por desempleo y se ofrece a través de los servicios de empleo de cada estado. Para poder solicitar este subsidio, el solicitante debe cumplir los siguientes requisitos: tener al menos 18 años, haber trabajado como autónomo durante al menos 20 semanas en los últimos 18 meses, y tener una pérdida de ingresos de al menos un 25%. Además, el solicitante debe estar disponible para trabajar como autónomo, buscar trabajo activamente y aceptar un empleo si se le ofrece. Para solicitar este subsidio, el solicitante debe contactar con el servicio de empleo de su estado y completar una solicitud. Una vez aprobada la solicitud, el solicitante recibirá el subsidio mensualmente.</p>'

var client = wordpress.createClient({
    url: "https://tutekno.com",
    username: "MiMario",
    password: "AO!q0fNEsxp2cxc7B^TldK1!"
});

client.newPost({
    title: "Subsidio por Desempleo: Existen 8 Tipos y Aquí Explicamos Sus Requisitos y Cómo Solicitarlos Paso a Paso",
    content: texto,
    status: "draft",
    termNames: {
        "category": ["Noticias de hardware"]
    }
}, function (error, data) {
    console.log(arguments);
    console.log(data);
});