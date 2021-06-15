<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>{{'Yovita Reacts | Sistem Manajemen Produk'}}</title>
    <link href="https://fonts.googleapis.com/css?family=Work+Sans:100,200,300,400,500,600,700,800,900" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
            rel="stylesheet">
    <!-- Styles -->
    <link href="{{ mix('/users/css/app.css') }}" rel="stylesheet">
</head>
<body>
<div class="loader-wrapper">
    <div class="loader"></div>
</div>
<div id="app">
    @yield('content')
</div>
<link rel="stylesheet" type="text/css" href="" media="screen" id="color">

<!-- Scripts -->
<script src="{{ mix('/users/js/manifest.js') }}"></script>
<script src="{{ mix('/users/js/vendor.js') }}"></script>
<script src="{{ mix('/users/js/app.js') }}"></script>
</body>
</html>

