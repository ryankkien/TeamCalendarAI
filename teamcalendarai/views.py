from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['POST'])
def create_game_session(request):
    # Logic to create a new game session or user
    # For demonstration purposes, we'll return a simple message
    return Response({"message": "Game session created!"})
