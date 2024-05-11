function saklar() {
    

    let toggle1 = document.getElementById("default-toggle1");
    let toggle2 = document.getElementById("default-toggle2");
    let toggle3 = document.getElementById("default-toggle3");
  
    let lampu1 = document.getElementById("lampu1");
    let lampu2 = document.getElementById("lampu2");
    let lampu3 = document.getElementById("lampu3");

    if (toggle1.checked) {
      lampu1.src = "on.png"
    } 
    else {
      lampu1.src = "off.png";
    }
    
    if (toggle2.checked) {
      lampu2.src = "on.png"
    } else {
      lampu2.src = "off.png";
    }
  
    if (toggle3.checked) {
      lampu3.src = "on.png"
    } else {
      lampu3.src = "off.png";
    }

    let toggleruang1 = document.getElementById("default-toggle-ruang1");
    if (toggleruang1.checked) {
      lampu1.src = "on.png";
      lampu2.src = "on.png";
      lampu3.src = "on.png";

    } 
   

  }



// function saklar(action, lamp) {
//     // let toggle = document.getElementById("flexSwitchCheckChecked");
   
//     // if (toggle.checked) {
//     //     lampu1.src = "assets/images/on.png";
//     // }
//     // else {
//     //     console.log('dimatikan');
//     // }

//     let lampu1 = document.getElementById("lampu1");
//     let lampu2 = document.getElementById("lampu2");
//     let lampu3 = document.getElementById("lampu3");

//     if (action == "on") {
//         if (lamp == 1)
//         lampu1.src = "assets/images/on.png";
//         if (lamp == 2)
//         lampu2.src = "assets/images/on.png";
//         if (lamp == 3)
//         lampu3.src = "assets/images/on.png";
//     }

//     if (action == "off") {
//         if (lamp == 1)
//         lampu1.src = "assets/images/off.png";
//         if (lamp == 2)
//         lampu2.src = "assets/images/off.png";
//         if (lamp == 3)
//         lampu3.src = "assets/images/off.png";
//     }
    
// }
