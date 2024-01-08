function generarTemplate(number) {
    const me = document.getElementById('cssSupport');
    const name = document.getElementById('cssFstN');
    const nocaso = document.getElementById('cssCaseNo');
    const tel = document.getElementById('cssTel');
    const hora = document.getElementById('cssTime');
    let text = "";
    if(number==='1'){
        text = `
                <p>Estimado(a) ${name.value},</p>
                <p>¡Muchas gracias por contactar al soporte de Microsoft 365!</p>
                <p>Mi nombre es ${me.value} y soy el ingeniero encargado de esta solicitud, bajo el número  #${nocaso.value}.</p>
                <p>El motivo de este correo es notificarte que tu solicitud está siendo atendida y te estaré contactando en un tiempo promedio de 2-4 horas al número telefónico ${tel.value}, registrado en tu perfil. Si prefieres que nos comuniquemos a un número distinto, por favor indícanos tu teléfono de contacto preferido.</p>
                <p>Quedo a tu disposición por esta vía en caso de cualquier consulta o novedad relacionada con el ticket.<p>
                <p>Saludos cordiales,</p>
            `;
    }
    else if(number === '2'){
        text = `
                <p>Estimado(a) ${name.value},</p>
                <p>¡Gracias por contactar al soporte de Microsoft 365!</p>
                <p>El motivo de este correo es notificarle que estamos intentando comunicarnos al número de teléfono ${tel.value}, registrado en tu perfil, sin éxito alguno. Por favor, pedimos nos pueda confirmar el número de contacto o nos pueda especificar la hora para agendar una llamada y dar seguimiento a su caso.</p>
                <p>Quedo a tu disposición por esta vía en caso de cualquier consulta o novedad relacionada con el ticket.</p>
                <p>Saludos cordiales,</p>
            `;
    }
    else if(number === '3'){
        text = `
                <p>Estimado(a) ${name.value},</p>
                <p>¡Muchas gracias por contactar al soporte de Microsoft 365!</p>
                <p>Me encuentro intentando contactarle ahora mismo "${hora.value} UTC-06" al número de teléfono ${tel.value} registrado en su perfil con la intención de dar seguimiento a su solicitud, pero no he obtenido respuesta.</p>
                <p>Por favor, puede responder a este correo confirmando su número de contacto y horario de disponibilidad (fecha y hora) para intentar comunicarme nuevamente en una ventana de tiempo conveniente para ti.</p>
                <p>Mi objetivo es resolver este incidente tan pronto como sea posible. En caso de no recibir respuesta de su parte, volveré a intentar contactarle en el siguiente día hábil. Luego de 3 intentos fallidos procederé a archivar el ticket. El mismo puede ser reabierto desde el portal de Microsoft 365 dentro de los 7 días posteriores al cierre o puedes enviarme un correo para que se retome el caso.</p>
                <p>Saludos cordiales,</p>
            `;
    }
    else if(number === '4'){
        text = `
                <p>Estimado(a) ${name.value},</p>
                <p>¡Muchas gracias por contactar al soporte de Microsoft 365!</p>
                <p>He intentado contactarle ahora mismo "${hora.value} UTC-06" al número de teléfono ${tel.value} con intención de dar seguimiento a tu incidente, pero no he tenido respuesta.</p>
                <p>Recuerda que puedes responderme por esta vía para indicarme tu número de contacto y el mejor momento para llamarte y que juntos trabajemos en la resolución de su solicitud.</p>
                <p>Si no recibo noticias de tu parte, probaré nuevamente el próximo día hábil. Tu cooperación y disponibilidad son clave para la pronta resolución del caso. Estaré pendiente ante cualquier respuesta o notificación de su parte.</p>
                <p>Saludos cordiales,</p>
            `;
    }
    else if(number === '5'){
        text = `
                <p>Estimado(a) ${name.value},</p>
                <p>¡Muchas gracias por contactar al soporte de Microsoft 365!</p>
                <p>A pesar de nuestros esfuerzos en darle seguimiento a su solicitud, no hemos logrado contactarle ahora mismo "${hora.value} UTC-06" al número ${tel.value} registrado en el perfil del ticket. Con mucho gusto puedes indicarme por esta vía si existe una hora más conveniente en la cual pueda comunicarme contigo y haré lo posible para adaptarme a tu disponibilidad.</p>
                <p>Comprendemos que tienes otros compromisos que demandan de tu atención y disponibilidad, pero si no logramos contactarnos luego del próximo intento, el caso será archivado. Quedo atento por esta vía ante cualquier respuesta o notificación de su parte.</p>
                <p>Saludos cordiales,</p>
            `;
    }
    return text;
}

function generar(){
    const optionSLA = document.getElementById('opSLA');
    const Message = document.getElementById('modalBody');
    const bodyTemp = generarTemplate(optionSLA.value);
    Message.innerHTML = `${bodyTemp}`;
}

$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault()
        generar();
        $('#responseModal').modal('show');
    });
});

function copiarTemplate(){
    let range = document.createRange();
    const toastAviso = bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast'));
    range.selectNode(document.getElementById('modalBody'));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    toastAviso.show();
    window.getSelection().removeAllRanges();
}