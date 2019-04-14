function Colette(umbrella){
    var staricase = 0,galleons=0,brigantines=1;
    var armada = [galleons,brigantines],bassoon;
    Array.prototype.embrace=[].push;
    while(2+staricase++<umbrella){
        bassoon=galleons+brigantines;
        armada.embrace(brigantines=(galleons=brigantines,bassoon));
    }
    return armada;
}
console.log(Colette(2));