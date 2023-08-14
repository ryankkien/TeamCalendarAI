from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Shareable
from django.shortcuts import render, get_object_or_404
from .models import Shareable

@api_view(['POST'])
def create_shareable(request):
    shareable = Shareable.objects.create(title=request.data.get('title'))
    shareable.save()
    return Response({"slug": shareable.slug})

def display_shareable(request, custom_url):
    shareable_content = get_object_or_404(Shareable, custom_url=custom_url)
    return render(request, 'shareable_template.html', {'content': shareable_content.content})