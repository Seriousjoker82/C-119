function setup(){
    canvas=createCanvas(300, 300)
   
    video=createCapture(VIDEO)
    video.hide();
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/_R6ccBHfG/model.json", modelLoaded)

}

function draw(){
    image(video,0,0,300,300)
    classifier.classify(video,gotResults);
    canvas.center();

}
function modelLoaded(){
console.log("model is loaded")
}

function gotResults(error,result){
    if(error){
        console.error(error)
    }
    else{
        console.log(result)
        document.getElementById("object_name").innerHTML=result[0].label;
    Percent=result[0].confidence.toFixed(2);
    
    if(Percent>0.5  ){
        Percent=Percent*100
    document.getElementById("accuracy").innerHTML=Percent+"%"
        

    }

    }


    }

