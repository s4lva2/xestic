$(document).ready(function() {
    $('#tabla').DataTable({  
        "ordering": true,
        "info":     false,    
        "paging":   true,  
        "language": {
                url: "js/localizacion/es_ES.json",
        }
    });
} );