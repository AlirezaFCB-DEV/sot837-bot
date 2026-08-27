from django.db import models

# Create your models here.

class Message (models.Model) :
    class MessageChoices (models.TextChoices) :
        USER = "user" , "User"
        BOT = "bot" , "Bot"
    
    content = models.TextField()
    date = models.DateField(auto_now_add=True)
    time = models.TimeField(auto_now_add=True)
    type = models.CharField(max_length=5 , choices=MessageChoices.choices)
    
    class Meta : 
        ordering = ["-date" , "-time"]