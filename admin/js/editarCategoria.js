function getCategoryInfo() {
  const categoryId = getQueryVariable('IdCategoria');
  if (categoryId) {
    $.post('php/obtieneCamposCategoria.php', { categoryId }, response => {
      let resp = JSON.parse(response);
      if (resp.data) {
        $('input[name=category]').val(resp.data.Nombre);
        $('input[name=description]').val(resp.data.Descripcion);
      } else {
        $('#response-message-container').html(
          'No se pudo obtener la informacion de la categoría seleccionada'
        );
        $('#response-message-container').addClass('error');
      }
    });
  } else {
    $('#response-message-container').html(
      'No se pudo obtener la informacion de la categoría seleccionada'
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

function editCategory() {
  let category = {};
  const categoryId = getQueryVariable('IdCategoria');
  if (categoryId) {
    category.id = categoryId;
    category.name = $('input[name=category]').val();
    category.description = $('input[name=description]').val();
    category = JSON.stringify(category);
    $.post('php/modificarCategoria.php', { category }, response => {
      let resp = JSON.parse(response);
      if (resp.status === 200) {
        $('input[name=category]').value = '';
        $('input[name=description]').value = '';
      }
      $('#response-message-container').html(resp.message);
      $('#response-message-container').addClass(resp.class);
    });
  } else {
    $('#response-message-container').html(
      'La categoría seleccionada es invalida'
    );
    $('#response-message-container').addClass('error');
  }
}
