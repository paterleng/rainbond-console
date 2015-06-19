DEBUG = True

TEMPLATE_DEBUG = True

DATABASES = {
    #'default': {
    #    'ENGINE': 'django.db.backends.sqlite3',
    #    'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    #}
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'goodrain',
        'USER': 'root',
        'PASSWORD': 'root',
        'HOST': '127.0.0.1',
        'PORT': '3306',
    },
}

BEANSTALKD = {"host": "127.0.0.1", "port": 11300, "tube": "default"}

INFLEXDB ={
    "host" : "10.3.1.2",
    "port": 8086,
    "user": "root",
    "password": "root",
}

ETCD= {"host": "127.0.0.1", "port": 4001}

REGION_SERVICE_API = {
    'url': 'http://192.168.7.18:8080',
    'apitype': 'region service',
}

GITLAB_SERVICE_API = {
    'url': 'http://code1.goodrain.com/',
    'admin_user': 'app1',
    'admin_email': 'app1@goodrain.com',
    'admin_password': 'gr123465',
    'apitype': 'gitlab service',
}

#CACHES = {
#    'default': {
#        'BACKEND': 'django.core.cache.backends.memcached.PyLibMCCache',
#        'LOCATION': '192.168.7.11:11211',
#    },
#    'session': {
#        'BACKEND': 'django.core.cache.backends.memcached.PyLibMCCache',
#        'LOCATION': '192.168.7.11:11211',
#    }
#}


#SESSION_ENGINE = "django.contrib.sessions.backends.cache"
SESSION_CACHE_ALIAS = 'session'
SESSION_COOKIE_DOMAIN = '.goodrain.com'
SESSION_COOKIE_AGE = 3600
