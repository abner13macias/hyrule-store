function getConsolaInfo() {
    const consolaId = getQueryVariable('IdConsola');
    if (consolaId) {
        $.post('php/obtieneCamposConsola.php', { consolaId }, response => {
            let resp = JSON.parse(response);
            if (resp.data) {
                $('input[name=consola]').val(resp.data.Nombre);
                $('input[name=idMarca]').val(resp.data.IdMarca);
                $('input[name=descripcion]').val(resp.data.Descripcion);
            } else {
                $('#response-message-container').html(
                    'No se pudo obtener la informacion de la consola seleccionad'
                );
                $('#response-message-container').addClass('error');
            }
        });
    } else {
        $('#response-message-container').html(
            'No se pudo obtener la informacion de la consola seleccionada'
        );
        $('#response-message-container').addClass('error');
    }
}

function getQueryVariable(variableName) {
    const query = window.location.search.substring(1);
    const vars = query.split('&');
    for (const i in vars) {
        let pair = vars[i].split('=');
        if (pair[0] === variableName) {
            return pair[1];
        }
    }
    return false;
}

function editConsola() {
    let consola = {};
    const consolaId = getQueryVariable('IdConsola');
    if (consolaId) {
        consola.id = consolaId;
        consola.name = $('input[name=consola]').val();
        consola.IdMarca = $('input[name=idMarca]').val();
        consola.Descripcion = $('input[name=descripcion]').val();
        consola = JSON.stringify(consola);
        $.post('php/modificarConsola.php', { consola }, response => {
            let resp = JSON.parse(response);
            if (resp.status === 200) {
                $('input[name=consola]').value = '';
                $('input[name=idMarca]').value = '';
                $('input[name=descirpcion]').value = '';
            }
            $('#response-message-container').html(resp.message);
            $('#response-message-container').addClass(resp.class);
        });
    } else {
        $('#response-message-container').html(
            'La consola seleccionada es invalido'
        );
        $('#response-message-container').addClass('error');
    }
}