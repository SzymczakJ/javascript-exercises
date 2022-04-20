var SetIntervalTime =[];
var SetTimeoutTime = [];
var N = 50;
var M;
var start_button  = document.getElementById("start");
start_button.onclick = start;
var stop_button  = document.getElementById("stop");
stop_button.onclick = stop;

// tablice zawierające pary(x,y) dla danej funkcji liniowej
var data_interval = [];
var data_timeout = [];
// id wywolania procesow potrzebne do ich zakonczenia
var id_timeout1;
var id_timeout2;
var id_interval;
var id_animation1;
var id_animation2;

function doTimeConsumingCallculationsWithSetInterval(){
    let start_time = performance.now();
    SetIntervalTime.push(start_time);
    if(SetIntervalTime.length > N){
        SetIntervalTime.shift();
    }
    calculatePrimes(1000, 100000);
}

function doTimeConsumingCallculationsWithSetTimeout(){
    M = document.getElementById("delay").value;
    let start_time = performance.now();
    SetTimeoutTime.push(start_time);
    if(SetTimeoutTime.length > N){
        SetTimeoutTime.shift();
    }
    calculatePrimes(1000, 100000);
    id_timeout2 = window.setTimeout(doTimeConsumingCallculationsWithSetTimeout, M);
}

function drawChart(){
    // obliczanie punktow wykresu dla IntervalTime
    var len_interval = SetIntervalTime.length;
    var sum_interval = 0;
    
    for(var i=0; i<len_interval-1; i++){
        sum_interval += SetIntervalTime[i+1]-SetIntervalTime[i];
    }
    
    var mean_interval = sum_interval/(len_interval-1);
    data_interval.push(mean_interval);
    if(data_interval.length > N){
        data_interval.shift();
    }
    var dataPoints_interval = [];
    for (var i = 0; i < N; i++) {
        dataPoints_interval.push({
            x: i,
            y: data_interval[i]
        });
    }

    // obliczanie punktow wykresu dla TimeoutTime
    var len_timeout = SetTimeoutTime.length;
    var sum_timeout = 0;
    for(var i=0; i<len_timeout-1; i++){
        sum_timeout += SetTimeoutTime[i+1]-SetTimeoutTime[i];
    }
    
    var mean_timeout = sum_timeout/(len_timeout-1);
    data_timeout.push(mean_timeout);
    if(data_timeout.length > N){
        data_timeout.shift();
    }
    var dataPoints_timeout = [];
    for (var i = 0; i < N; i++) {
        dataPoints_timeout.push({
            x: i,
            y: data_timeout[i]
        });
    }

    // rysowanie wykresu
    var chart = new CanvasJS.Chart("chartContainer",{

      title:{
      text: "Chart"
      },
      axisY:{ 
		title: "Time",
		includeZero: true
	    },
       data: [
      {
        type: "line",
        name: "IntervalTime",
        dataPoints: dataPoints_interval,
        showInLegend: true
      },
      {
        type: "line",
        name: "Timeout",
        dataPoints: dataPoints_timeout,
        showInLegend: true
      }
      ]
    });

    chart.render();
    id_animation2 = window.requestAnimationFrame(drawChart);

}

function start(){
    M = document.getElementById("delay").value;
    id_interval = window.setInterval(doTimeConsumingCallculationsWithSetInterval, M);
    id_timeout1 = window.setTimeout(doTimeConsumingCallculationsWithSetTimeout, M);
    id_animation1 = window.requestAnimationFrame(drawChart);

}

function stop(){
    window.clearTimeout(id_timeout1);
    window.clearTimeout(id_timeout2);
    window.clearInterval(id_interval);
    window.cancelAnimationFrame(id_animation1);
    window.cancelAnimationFrame(id_animation2);
}


function calculatePrimes(iterations, multiplier) {
    var primes = [];
    for (var i = 0; i < iterations; i++) {
        var candidate = i * (multiplier * Math.random());
        var isPrime = true;
        for (var c = 2; c <= Math.sqrt(candidate); ++c) {
        if (candidate % c === 0) {
            isPrime = false;
            break;
            }
        }
        if (isPrime) {
        primes.push(candidate);
        }
    }
}

// ZAOBSEERWUJ:
// 1. Srednie nie mają zblizonych wartosci , widać ze srednia czasu wywołania IntervalTime jest krótsza od Timeout
// 2. Czas pomiędzy kolejnym wywołaniem kodu nie jest zawsze taki jak poany. W przypadku Timeout czas ten jest wydłużony. 
// Przy małych wartościach opóźnienia obie funkcje wydłużają ten czas
// JavaScript engines only have a single thread, forcing asynchronous events to queue waiting for execution.
