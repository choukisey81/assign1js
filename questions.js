const pi=3.14;
var volume_cyl=()=>{
    let r=document.getElementById('radius').value;
    let h=document.getElementById('height').value;
    let a=document.getElementById('volume');
    let volume=pi*r*r*h;
    a.value="volume is :"+volume
}
var surface_cyl=()=>{
    let r=document.getElementById('radius').value;
    let h=document.getElementById('height').value;
    let a=document.getElementById('volume');
    let surfacearea=(2*pi*r*h)+(2*pi*r*r);
    a.value="Surface area is :"+surfacearea
}
var power_calc=()=>{
    var c=document.getElementById('current').value;
    var v=document.getElementById('voltage').value; 
    let a=document.getElementById('power');
    var power=c*v;
    a.value="Power is : "+ power
}

let wall=()=>{
    var bucket_paint_area=document.getElementById('bucket_area').value;
    var wall_width=document.getElementById('wall_width').value;
    var wall_height=document.getElementById('wall_height').value;
    var answer=document.getElementById('answer_bucket')
    var wall_area=wall_width*wall_height;
    var bucket_req=wall_area/bucket_paint_area;
    answer.value="You need to have "+bucket_req+" buckets of paint. "
}