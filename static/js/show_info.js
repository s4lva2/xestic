function show_info(brand, model, so, devuser, ts_create)
{
    var info = $(".infoPanel");
    $(".removePanel").remove()
    info.append(" <div class='alert alert-primary mt-3 removePanel' style='min-height:100px;'>\
     <h6>DATOS DEL EQUIPO</h6>\
     <p><strong>Marca:</strong><br>" + brand + "</p>\
     <p><strong>Modelo:</strong><br>" + model + "</p>\
     <p><strong>Sistema Operativo:</strong><br>" + so +"</p>\
     <p><strong>Usuario:</strong><br>" + devuser +"</p>\
     <p><strong>Fecha de Alta:</strong><br>" + ts_create +"</p>\
     </div> ");  
     console.log(ts_create);   
}
