/*
we have to write a logic let us define what what we want


*/
document.addEventListener('DOMContentLoaded', function() {
     let Selector=(id)=>{
        let div=document.querySelector(`.${id}`);
        
        return div;
     }
     let matched_pairs=0;
     let flag=true;
     let totalMoves=document.querySelector('#tm');
     let tm=0;
     let sucessMoves=document.querySelector("#sm");
     let sm=0;
      let makeVisible=(box)=>{
      

         let e=document.querySelector(`.${box.className} .item-hidden`);
          lastTwoBoxClass.push(box.className);
          tm++;
          totalMoves.innerHTML=`Total Moves :${tm}`;
          
         e.style.opacity='1';
      }
      let check= ()=>{
        if(lastTwoBoxClass.length==2){
           let currClass1=lastTwoBoxClass[0];
           let currClass2=lastTwoBoxClass[1];
           let innerChild1=document.querySelector(`.${currClass1} .item-hidden img`);
           let innerChild2=document.querySelector(`.${currClass2} .item-hidden img`);
             if(innerChild1.src==innerChild2.src &&(currClass1!=currClass2)){
                innerChild1.style.visibility='hidden';
                innerChild2.style.visibility='hidden';
                sm++;
                matched_pairs++;
                sucessMoves.innerHTML=`sucessFull Moves:${sm}`;

                lastTwoBoxClass=[];
             }
             else {
                let ele1=document.querySelector(`.${currClass1} .item-hidden`);
                let ele2=document.querySelector(`.${currClass2} .item-hidden`);
                ele1.style.opacity='0';
                ele2.style.opacity='0';
                lastTwoBoxClass=[];
             }
            }
             if(matched_pairs==6){
               clearInterval(setInt);
               let won=document.querySelector("#won");
               let efficency;
               
               if(tm<18){
                  won.innerHTML='YOU WON <img src="first.jpg">';
                   won.style.visibility='visible';

               }
               else if(tm>18 &&tm<24){
                  won.innerHTML='YOU WON <img src="second.jpg">';
                  won.style.visibility='visible';


               }
               else {
                  won.innerHTML='YOU WON <img src="last.jpg">';
                  won.style.visibility='visible';


               }

             }


        
      }
      let setInt =setInterval(check,1500);
      let lastTwoBoxClass=[];
     let div1=Selector('a');
     let div2=Selector('b');
     let div3=Selector('c');
     let div4=Selector('d');
     let div5=Selector('e');
     let div6=Selector('f');
     let div7=Selector('g');
     let div8=Selector('h');
     let div9=Selector('i');
     let div10=Selector('j');
     let div11=Selector('k');
     let div12=Selector('l');
     let lastTwoBox=[];
      div1.addEventListener('click',(event)=>{
        makeVisible(div1);
     })
     div2.addEventListener('click',(event)=>{
        makeVisible(div2);
     })
     div3.addEventListener('click',(event)=>{
        makeVisible(div3);
     })
     div4.addEventListener('click',(event)=>{
        makeVisible(div4);
     })
     div5.addEventListener('click',(event)=>{
        makeVisible(div5);
     })
     div6.addEventListener('click',(event)=>{
        makeVisible(div6);
     })
     div7.addEventListener('click',(event)=>{
        makeVisible(div7);
     })
     div8.addEventListener('click',(event)=>{
        makeVisible(div8);
     })
     div9.addEventListener('click',(event)=>{
        makeVisible(div9);
     })
     div10.addEventListener('click',(event)=>{
        makeVisible(div10);
     })
     div11.addEventListener('click',(event)=>{
        makeVisible(div11);
     })
     div12.addEventListener('click',(event)=>{
        makeVisible(div12);
     })
});

