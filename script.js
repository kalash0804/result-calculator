// function show_result(){
//     let c=document.getElementById("#c").value;
//     let mt=document.getElementById("#mt").value;
//     let ph=document.getElementById("#ph").value;
//     let ja=document.getElementById("#ja").value;
//     let csa=document.getElementById("#csa").value; 
    

//     let to=parseFloat(c)+parseFloat(mt)+parseFloat(ph)+parseFloat(ja)+parseFloat(csa);
//     let per=(to*100)/500;

//     if(per>=90){
//         document.querySelector(".gra").innerHTML="a+";
//     }else if(per>=80){
//          document.querySelector(".gra").innerHTML="a";
//     }else if(per>=70){
//         document.querySelector(".gra").innerHTML="b+";
//     }else if(per>=60){
//         document.querySelector(".gra").innerHTML="b";
//     }else if(per>=50){
//         document.querySelector(".gra").innerHTML="c+";
//     }else if(per>=40){
//         document.querySelector(".gra").innerHTML="c";
//     }else if(per>=35){
//         document.querySelector(".gra").innerHTML="d+";
//     }else if(per>=30){
//         document.querySelector(".gra").innerHTML="d";
//     }else{
//         document.querySelector(".gra").innerHTML="you are fail";
//     }

//     document.querySelector(".to").innerHTML=to;
//     document.querySelector(".per").innerHTML=per;

//     if(per>30){
//         document.querySelector(".result h2").innerHTML="you are pass";
//     }else{
//         document.querySelector(".result h2").innerHTML="you are fail";  
//      }
// }

function show_result() {
    // Fetching values using correct ID selectors
    let c = document.getElementById("C").value;
    let mt = document.getElementById("mt").value;
    let ph = document.getElementById("ph").value;
    let ja = document.getElementById("ja").value;
    let csa = document.getElementById("csa").value;

    // Calculating total and percentage
    let to = parseFloat(c) + parseFloat(mt) + parseFloat(ph) + parseFloat(ja) + parseFloat(csa);
    let per = (to * 100) / 500;

    // Assigning grade based on percentage
    if (per >= 90) {
        document.getElementById("gra").innerText = "A+";
    } else if (per >= 80) {
        document.getElementById("gra").innerText = "A";
    } else if (per >= 70) {
        document.getElementById("gra").innerText = "B+";
    } else if (per >= 60) {
        document.getElementById("gra").innerText = "B";
    } else if (per >= 50) {
        document.getElementById("gra").innerText = "C+";
    } else if (per >= 40) {
        document.getElementById("gra").innerText = "C";
    } else if (per >= 35) {
        document.getElementById("gra").innerText = "D+";
    } else if (per >= 30) {
        document.getElementById("gra").innerText = "D";
    } else {
        document.getElementById("gra").innerText = "You are fail";
    }

    // Displaying total and percentage
    document.getElementById("to").innerText = to;
    document.getElementById("per").innerText = per;

    // Checking pass/fail status
    if (per > 30) {
        document.querySelector(".result h2").innerText = "You are pass";
    } else {
        document.querySelector(".result h2").innerText = "You are fail";
    }
}
