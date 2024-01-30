<!DOCTYPE html>
<html>
    <head>
        <title>game</title>
        @vite(['resources/sass/app.scss', 'resources/js/app.js'])
        <link rel="stylesheet" href="{{asset('css/heroesOfAim.css')}}">
    </head>
    <body>
        <div id="container" class="container-floid w-100 bg-dark" style="height: 100vh;">
            <!-- <div class="p-5 border text-center align-items-center bg-light"> -->
            <div class="w-100 d-flex justify-content-between align-items-center text-white">
            <h1 class="mb-0 px-5">Score: <span id="score">0000</span></h1>
                <h1 class="mb-0 px-5">Time: <span id="countdown">60</span></h1>
                <h1 class="mb-0 px-5">Combo: <span id="combo">00</span></h1>
            </div>
                <hr class="text-white m-0">
                <div id="target" class="target bg-light">
                    
                </div>
        </div>
        <script src="{{ asset('js/heroesOfAim.js') }}"></script>



    </body>

</html>