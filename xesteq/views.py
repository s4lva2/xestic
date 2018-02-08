from django.shortcuts import render
from django.views.generic import ListView, DetailView

from xesteq.models import DeviceData

class ListadoEquiposView(ListView):
    model = DeviceData
    template_name = 'equipos.html'
    context_object_name = 'equipos'

    '''Esto fue con proposito de debug
    def get_context_data(self, **kwargs):
        # Call the base implementation first to get a context
        context = super(ListadoEquiposView, self).get_context_data(**kwargs)
        # Add in a QuerySet of all the books
        #context['book_list'] = Book.objects.all()
        print(context['equipos'][0].ts_Create)
        return context
    '''

class DetalleEquipoView(DetailView):
    pass
'''    
    model = DeviceData
    template_name = 'equipos.html'
'''