arrayArtistas = [
    {nombre: 'Charly Garcia',
    imagen: 'https://i.pinimg.com/474x/f5/14/cd/f514cd4c2cf13c7c3d5e164d3b335ea2.jpg',
    link: 'https://www.youtube.com/watch?v=pt92esV--Bg',
    id: 1},
    {nombre: 'Luis Alberto Spinetta',
    imagen: 'https://www.laprimerapiedra.com.ar/wp-content/uploads/luis-alberto-spinetta-citas.jpg',
    id: 2,
    link: 'https://www.youtube.com/watch?v=Egj4PSgMAfA'}, 
    {nombre: 'Gustavo Ceratti',
    imagen: 'https://lifestyle.americaeconomia.com/sites/lifestyle.americaeconomia.com/files/styles/gallery_image/public/descarga_2_9.jpeg?itok=p8ZYpkjg',
    link: 'https://www.youtube.com/watch?v=eAO7CEcCD3s',
    id:3
    }

];

$(document).ready( () => {

arrayArtistas.forEach(e => {
    $('#artistas').append(`
    <button class='btn btn danger' id=id${e.id}>${e.nombre}</button>;
    `)
    $(`#id${e.id}`).click(function (){
        
    $('#imagenes').append(`<img src=${e.imagen} alt= ${e.nombre}>`)
    $('#imagenes').animate({
        opacity: 0.50,
        slideUp: 2000
    
    }, 4000, function (){
        $('.mensaje').prepend (`<h1 border>Gracias por votar a ${e.nombre}, te dejo acá un link para escuchar uno de sus temas favoritos <br>
        <a href='${e.link}'>${e.link}</a></h1>`)
        $('#imagenes').fadeOut(1000);
       
  
        
    })



    })
    
    
    
    
});

   





console.log('Se cargo la página')
})


  









    
