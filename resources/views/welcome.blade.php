<!DOCTYPE html>
<html>
    <head>
        <title>Laravel</title>

        <link href="https://fonts.googleapis.com/css?family=Lato:100" rel="stylesheet" type="text/css">
        <meta property="csrf-token" name="csrf-token" content="{{ csrf_token() }}">

        <style>
            html, body {
                height: 100%;
            }

            body {
                margin: 0;
                padding: 0;
                width: 100%;
                display: table;
                font-weight: 100;
                font-family: 'Lato';
            }

            .container {
                text-align: center;
                display: table-cell;
                vertical-align: middle;
            }

            .content {
                text-align: center;
                display: inline-block;
            }

            .title {
                font-size: 96px;
            }
        </style>
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
                        }
                    });
                  System.import('js/custom_angular/boot')
                            .then(null, console.error.bind(console));
                </script>
    </head>
    <body>
        <div class="container">
            <div class="content">
                <div class="title">Laravel 5</div>
            </div>
        </div>
    </body>
</html>
