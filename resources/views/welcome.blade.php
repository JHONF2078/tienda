<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Tienda</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
        <link  href="/css/all.css" rel="stylesheet">

        <script>
            (function () {
                window.Laravel = {
                    csrfToken: '{{ csrf_token() }}'
                };
            })();
        </script>

    </head>
    <body >


        <div id="app">

           @if(Auth::check())
                <mainapp :user="{{Auth::user()}}"></mainapp>
            @else
                <mainapp :user="false"></mainapp>
            @endif

        </div>

        <script>
              window.user = {!! json_encode($user); !!};
        </script>

        <script src="{{ mix('/js/app.js') }}"></script>

    </body>
</html>
