function show_info(brand, model, serialno, mac, sokey, domain, ts_create)
{
    var info = $(".infoPanel");
    $(".removePanel").remove()
    info.append(" <div class='alert alert-primary mt-3 removePanel' style='min-height:100px;'>\
     <h6>DATOS DEL EQUIPO</h6>\
     <p><strong>Marca:</strong><br>" + brand + "</p>\
     <p><strong>Modelo:</strong><br>" + model + "</p>\
     <p><strong>Nº de Serie:</strong><br>" + serialno +"</p>\
     <p><strong>MAC:</strong><br>" + mac +"</p>\
     <p><strong>Clave S.O:</strong><br>" + sokey +"</p>\
     <p><strong>Dominio:</strong><br>" + domain +"</p>\
     <p><strong>Fecha de Alta:</strong><br>" + ts_create +"</p>\
     </div> ");  
     //console.log(ts_create);   
}
