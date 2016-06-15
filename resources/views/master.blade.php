<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta property="csrf-token" name="csrf-token" content="{{ csrf_token() }}">
    <title>@yield('pagetitle')Angular2 Laravel</title>
    <link rel="stylesheet" type="text/css" href="{{ url('css/jquery-ui.min.css') }}">
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="{{ url('css/bootstrap-flaty.min.css') }}">

    <!-- Required For MODAL POPUP -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.0/jquery.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/js/bootstrap.js"></script>

 <!-- Load libraries -->
            <!-- IE required polyfills, in this exact order -->
            <script src="../node_modules/es6-shim/es6-shim.min.js"></script>
            <script src="../node_modules/zone.js/dist/zone.js"></script>
            <script src="../node_modules/reflect-metadata/Reflect.js"></script>
            <script src="../node_modules/systemjs/dist/system.src.js"></script>
            <script src="systemjs.config.js"></script>


             <script>
                System.config({
                        "defaultJSExtensions": true,
                        packages: {
                            app: {
                                format: 'register',
                                defaultExtension: 'js'
                            }
                        },
                        map: {
                            moment: '../node_modules/moment/moment.js',
                            'ng2-bs3-modal': '../node_modules/ng2-bs3-modal' /* Required For MODAL POPUP */
                        }
                    });


                  System.import('js/custom_angular/boot')
                            .then(null, console.error.bind(console));

                </script>

                <!-- Required For DatePicker -->
                <script src="https://cdnjs.cloudflare.com/ajax/libs/ng2-bootstrap/1.0.17/ng2-bootstrap.js"></script>
                <!-- Required For MODAL POPUP -->
                <script src="../node_modules/ng2-bs3-modal/bundles/ng2-bs3-modal.js"></script>


</head>
<body>
    <div class="container">

        @if(Auth::user())
        <div class="row">
            <div class="col-sm-12">
            </div>

        </div>
        @endif

        <div class="row">
            <div class="col-xs-12">@include('nav')</div>
        </div>


        @yield('content')
    </div>
    <script> var base_url = "{{url('/')}}/";</script>

</body>
</html>
