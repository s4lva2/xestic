from django.db import models

# Create your models here.

class DeviceType(models.Model):

    dtype = models.CharField(max_length=30)

    def __str__(self):
        return self.type
        
        
class Location(models.Model):

    localization = models.CharField(max_length=30)
    
    def __str__(self):
        return self.localization
        
            
class Department(models.Model):

    department = models.CharField(max_length=30)     

    def __str__(self):
        return self.department
        
        
class DeviceData(models.Model):

    fk_typeDev = models.ForeignKey('DeviceType')
    brand = models.CharField(max_length=30)
    model = models.CharField(max_length=30)
    serialno = models.CharField(max_length=30)
    mac = models.CharField(max_length=30, null=True)
    so = models.CharField(max_length=30, null=True)
    sokey = models.CharField(max_length=30, null=True)
    domain = models.CharField(max_length=30, null=True)
    devname = models.CharField(max_length=30)
    devuser = models.CharField(max_length=30, null=True)
    fk_localization =models.ForeignKey('Location')
    fk_depart = models.ForeignKey('Department')
    ts_Create = models.DateField(auto_now_add=True)
    
    def __str__(self):
        return self.brand