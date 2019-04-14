function theSeriesOfFibonacci(theSize){
    var theResult;
    var theCounter;
    var theResult =[];
    for(theCounter=1;theCounter<theSize;theCounter++){
        theResult[theCounter]=(theResult[theCounter-1]||1)+theResult[Math.max(0,theCounter-2)];
    }
    return theResult;
}
console.log(theSeriesOfFibonacci(10));