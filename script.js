
function myname(){
    let inputval=document.querySelector(".nameval").value;
  
    if(inputval=="ankit"||inputval=="ANKIT" ||inputval=="ankit chauhan"||inputval=="Ankit Chauhan"){
      document.getElementById("para").innerHTML=`Dear ${inputval} 2023 mai aap ko GIRLFRIEND mil gay gi.puresoftware mai hi try kare.Agar GF jaldi chahiye to baba ke pass aaye.`
      
        
    }
    else if (inputval=="rajesh"||inputval=="Rajesh"||inputval=="RAJESH"||inputval=="Rajesh yadav"){
        document.getElementById("para").innerHTML=`Dear ${inputval} 2023 mai Greater Noida jana kam kare, Aur apne GF ko Ankit Ko transfer kare.Aap carrer banaye.`
         
      }
      else if (inputval=="jatin"||inputval=="JATIN"){
        document.getElementById("para").innerHTML=`Dear ${inputval} 2023 Mai aapki shadi ho gaygi.Kisse hogi yah janne ke liye SAIF baba se contact kare`
         
      }
      else if (inputval=="saif"||inputval=="SAIF"){
        document.getElementById("para").innerHTML=`Dear ${inputval} 2023 mai aap IAS banege es ki sambhavna lag rahi hai."Sani" aap ke upper hai es liye baba se contact kare.`
         
      }
      else if (inputval=="montu"||inputval=="mantu"||inputval=="mantoo"){
        document.getElementById("para").innerHTML=`Dear ${inputval} 2023 mai aap koe bussiness start karege.`
         
      }
      else if (inputval=="pawan"||inputval=="PAWAN"){
        document.getElementById("para").innerHTML=`Dear ${inputval} aap es hi desh ki seva karte harege.2023 mai aapke shadi ka yog ban raha hai.`
         
      }
      else if (inputval=="asif"||inputval=="ASIF"||inputval=="AASIF" ||inputval=="aashif"){
        document.getElementById("para").innerHTML=`Dear ${inputval} 2023 mai aap "Software Engineer" ban gayge.Aap ki job Google mai lagege wah bhi ONE Crore/per month.`
         
    }     else if (inputval==""){
        document.getElementById("para").innerHTML="";
         
    }
       

    else{
        document.getElementById("para").innerHTML=`Dear ${inputval}  Wishing you good health and a good life in the coming year. May you find everything you have been searching for in life. Congrats for new year 2023.`
    }
}