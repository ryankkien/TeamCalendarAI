from django.db import models
import uuid

class Shareable(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True, default=uuid.uuid4, editable=False)

    def __str__(self):
        return self.title
