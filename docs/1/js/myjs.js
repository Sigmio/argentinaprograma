let usuario;


function obtener_json(){
    $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function(data) {
            usuario = data['results'][0];
            print_data(usuario);
            setTimeout(function(){
                $('#loader').hide();
                $('#usuario').show();
            }, 50)
            
            
        }
    });
}

function print_data(usuario){
    
    $('#nombre').html(usuario['name']['first']+' '+usuario['name']['last'])
    $('#foto').attr("src", usuario['picture']['large'])
    $('#pais').html(usuario['location']['country'])
    $('#ciudad').html(usuario['location']['city'])
    $('#direccion_calle').html(usuario['location']['street']['name'])
    $('#direccion_num').html(usuario['location']['street']['number'])
    $('#email').html(usuario['email'])
    $('#telefono').html(usuario['phone'])
    $('#cel').html(usuario['cell'])
    let profile = 'background_'+usuario['gender']
    $('div[name="profile"]').attr("id",profile);
    
}

function refresh(){
    window.location.reload();
}





