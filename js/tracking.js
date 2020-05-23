function getTrackingData() {
  const search = getQueryVariable('search_order');
  const busqueda = JSON.stringify({
    search
  });
  console.log(search);
  console.log(busqueda);
  $.post('php/consultareastreo.php', { busqueda }, response => {
    let resp = JSON.parse(response);
    if (resp.data) {
      $('input[name=search_order]').val(resp.data.Id_Venta);
        $('input[name=orderid]').val("Su pedido se hizo el "+resp.data.Fecha+" y esta en "+resp.data.Status+".");
    } else {
        $('#response-message-container').html(
            'No se pudo obtener la informacion del usuario seleccionado'
        );
        $('#response-message-container').addClass('error');
    }
});
window.scrollTo(0,350)
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

 