
const API = 'http://localhost:5000/amigos'


let allFriends = function () {

    $.get(`${API}`, function (datos) {
        datos.forEach( d =>
            $(`<li id="${d.id}">${d.name}</li>`).appendTo('ul'))
    })
}
$('#boton').click(allFriends)

let seachFriends = function () {
        //let input = document.getElementById('input')     // una forma de obtener un elemento del html
        // console.log(input.value)
        // let input = $('#input')    //Es otr forma de llamar elementos de html con jquery ajax
        // console.log(input[0].value)
    let input = document.getElementById('input');
    let aux = Number(input.value);
    $.get(`${API}/${aux}`, function (datos) {
        let span = document.getElementById('amigo');
        span.innerHTML = datos.name
    })
}
$('#search').click(seachFriends)

let deletFrined = function () {
    $('#delete').click(function () {
        let aux = $(`#inputDelete`).val()
        let dat
        $.get(`${API}/${aux}`, function (datos) {
            dat = datos
        })
        $.ajax({
            url: `${API}/${aux}`,
            type: 'DELETE',
            success: function (data) {
                let span = document.getElementById('success')
                span.innerHTML = `tu amigo ${dat.name} fue borrado`
            }
        })
    })
}
deletFrined()

