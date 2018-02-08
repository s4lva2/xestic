$(document).ready(function() {
    $('#tabla').DataTable({  
        "ordering": true,
        "info":     false,    
        "paging":   true,  
        "language": {
                url: "/static/js/localizacion/es_ES.json",
        }
    });
} );