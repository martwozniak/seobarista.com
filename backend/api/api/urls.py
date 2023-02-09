from django.urls import path, include
from django.contrib.auth.models import User
from rest_framework import routers, serializers, viewsets
"""api URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

# Serializers define the API representation.
class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'is_staff']

# Serializers define the API representation.
#class SeoLinkSerializer(serializers.HyperlinkedModelSerializer):
#    class Meta:
#        model = SeoLink
#        fields = ['url', 'meta_title', 'meta_description', 'meta_keywords', 'dom_tags', 'char_count', 'letters_count', 'og_tags', 'internal_links', 'external_links', 'backlinks', 'date_published', 'date_updated']

# ViewSets define the view behavior.
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('apiv2/', include('rest_framework.urls', namespace='rest_framework'))

]
