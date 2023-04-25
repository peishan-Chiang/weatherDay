/*從中央氣象API抓資料*/
//Request URL
fetch("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-FB932B53-7A4D-44FD-B7D3-7E99FDEBA724")
.then(function(response){
    //從JSON格式轉回Js物件
    return response.json()
})
.then(function(data){
  
    console.log(data);
    sourceData={...data};//因為最外面框架是{}
})
.catch(function(error) {
    //抓資料不成功，錯誤，進catch
    console.log(error);

})

let arr=[];
let sourceData=[];
const tool =document.querySelector("#tool");
const result =document.querySelector("#reflectBlock");
const site =document.querySelector("#location");
const explain =document.querySelector("#explain");
const temMin =document.querySelector("#temperatureMin");

const rain =document.querySelector("#rain");
// const rainIcon =document.querySelector(".rainIcon");
// const cloudIcon =document.querySelector("#cloudIcon");

const show =document.querySelector("#show");
const hidden =document.querySelector("#hidden");
const hidden2 =document.querySelector("#hidden2");



tool.addEventListener("change",function(e){
    arr=sourceData;
    
    let tool = e.target;
    let messageSite;
    let messageExplain;
    let messageTemMin;
    let messageTemMax;
    let messageRainPar;
    let i;
    switch (tool.value) {
        case "0":
        i=0;
        messageSite=arr.records.location[i].locationName;
        messageExplain=arr.records.location[i].weatherElement[0].time[0].parameter.parameterName;
        messageTemMin=arr.records.location[i].weatherElement[2].time[0].parameter.parameterName;
        messageTemMax=arr.records.location[i].weatherElement[4].time[0].parameter.parameterName;
        messageRainPar=arr.records.location[i].weatherElement[1].time[0].parameter.parameterName;
        break;

        case "1":
        i=1;
        messageSite=arr.records.location[i].locationName;
        messageExplain=arr.records.location[i].weatherElement[0].time[0].parameter.parameterName;
        messageTemMin=arr.records.location[i].weatherElement[2].time[0].parameter.parameterName;
        messageTemMax=arr.records.location[i].weatherElement[4].time[0].parameter.parameterName;
        messageRainPar=arr.records.location[i].weatherElement[1].time[0].parameter.parameterName;
        break;

        case "2":
        i=2;
        messageSite=arr.records.location[i].locationName;
        messageExplain=arr.records.location[i].weatherElement[0].time[0].parameter.parameterName;
        messageTemMin=arr.records.location[i].weatherElement[2].time[0].parameter.parameterName;
        messageTemMax=arr.records.location[i].weatherElement[4].time[0].parameter.parameterName;
        messageRainPar=arr.records.location[i].weatherElement[1].time[0].parameter.parameterName;
        break;

        case "3":
            i=3;
            messageSite=arr.records.location[i].locationName;
            messageExplain=arr.records.location[i].weatherElement[0].time[0].parameter.parameterName;
            messageTemMin=arr.records.location[i].weatherElement[2].time[0].parameter.parameterName;
            messageTemMax=arr.records.location[i].weatherElement[4].time[0].parameter.parameterName;
            messageRainPar=arr.records.location[i].weatherElement[1].time[0].parameter.parameterName;
        break;
            

        case "4":
        i=4;
        messageSite=arr.records.location[i].locationName;
        messageExplain=arr.records.location[i].weatherElement[0].time[0].parameter.parameterName;
        messageTemMin=arr.records.location[i].weatherElement[2].time[0].parameter.parameterName;
        messageTemMax=arr.records.location[i].weatherElement[4].time[0].parameter.parameterName;
        messageRainPar=arr.records.location[i].weatherElement[1].time[0].parameter.parameterName;
        break;

        case "5":
        i=5;
        messageSite=arr.records.location[i].locationName;
        messageExplain=arr.records.location[i].weatherElement[0].time[0].parameter.parameterName;
        messageTemMin=arr.records.location[i].weatherElement[2].time[0].parameter.parameterName;
        messageTemMax=arr.records.location[i].weatherElement[4].time[0].parameter.parameterName;
        messageRainPar=arr.records.location[i].weatherElement[1].time[0].parameter.parameterName;
        break;

        case "6":
            i=6;
            messageSite=arr.records.location[i].locationName;
            messageExplain=arr.records.location[i].weatherElement[0].time[0].parameter.parameterName;
            messageTemMin=arr.records.location[i].weatherElement[2].time[0].parameter.parameterName;
            messageTemMax=arr.records.location[i].weatherElement[4].time[0].parameter.parameterName;
            messageRainPar=arr.records.location[i].weatherElement[1].time[0].parameter.parameterName;
        break;

        case "7":
            i=7;
            messageSite=arr.records.location[i].locationName;
            messageExplain=arr.records.location[i].weatherElement[0].time[0].parameter.parameterName;
            messageTemMin=arr.records.location[i].weatherElement[2].time[0].parameter.parameterName;
            messageTemMax=arr.records.location[i].weatherElement[4].time[0].parameter.parameterName;
            messageRainPar=arr.records.location[i].weatherElement[1].time[0].parameter.parameterName;
        break;

        case "8":
            i=8;
            messageSite=arr.records.location[i].locationName;
            messageExplain=arr.records.location[i].weatherElement[0].time[0].parameter.parameterName;
            messageTemMin=arr.records.location[i].weatherElement[2].time[0].parameter.parameterName;
            messageTemMax=arr.records.location[i].weatherElement[4].time[0].parameter.parameterName;
            messageRainPar=arr.records.location[i].weatherElement[1].time[0].parameter.parameterName;
        break;

        case "9":
            i=9;
            messageSite=arr.records.location[i].locationName;
            messageExplain=arr.records.location[i].weatherElement[0].time[0].parameter.parameterName;
            messageTemMin=arr.records.location[i].weatherElement[2].time[0].parameter.parameterName;
            messageTemMax=arr.records.location[i].weatherElement[4].time[0].parameter.parameterName;
            messageRainPar=arr.records.location[i].weatherElement[1].time[0].parameter.parameterName;
        break;

        case "10":
            i=10;
            messageSite=arr.records.location[i].locationName;
            messageExplain=arr.records.location[i].weatherElement[0].time[0].parameter.parameterName;
            messageTemMin=arr.records.location[i].weatherElement[2].time[0].parameter.parameterName;
            messageTemMax=arr.records.location[i].weatherElement[4].time[0].parameter.parameterName;
            messageRainPar=arr.records.location[i].weatherElement[1].time[0].parameter.parameterName;
        break;

        case "11":
            i=11;
            messageSite=arr.records.location[i].locationName;
            messageExplain=arr.records.location[i].weatherElement[0].time[0].parameter.parameterName;
            messageTemMin=arr.records.location[i].weatherElement[2].time[0].parameter.parameterName;
            messageTemMax=arr.records.location[i].weatherElement[4].time[0].parameter.parameterName;
            messageRainPar=arr.records.location[i].weatherElement[1].time[0].parameter.parameterName;
        break;

        case "12":
            i=12;
            messageSite=arr.records.location[i].locationName;
            messageExplain=arr.records.location[i].weatherElement[0].time[0].parameter.parameterName;
            messageTemMin=arr.records.location[i].weatherElement[2].time[0].parameter.parameterName;
            messageTemMax=arr.records.location[i].weatherElement[4].time[0].parameter.parameterName;
            messageRainPar=arr.records.location[i].weatherElement[1].time[0].parameter.parameterName;
        break;

        case "13":
            i=13;
            messageSite=arr.records.location[i].locationName;
            messageExplain=arr.records.location[i].weatherElement[0].time[0].parameter.parameterName;
            messageTemMin=arr.records.location[i].weatherElement[2].time[0].parameter.parameterName;
            messageTemMax=arr.records.location[i].weatherElement[4].time[0].parameter.parameterName;
            messageRainPar=arr.records.location[i].weatherElement[1].time[0].parameter.parameterName;
        break;

        case "14":
            i=14;
            messageSite=arr.records.location[i].locationName;
            messageExplain=arr.records.location[i].weatherElement[0].time[0].parameter.parameterName;
            messageTemMin=arr.records.location[i].weatherElement[2].time[0].parameter.parameterName;
            messageTemMax=arr.records.location[i].weatherElement[4].time[0].parameter.parameterName;
            messageRainPar=arr.records.location[i].weatherElement[1].time[0].parameter.parameterName;
        break;

        case "15":
            i=15;
            messageSite=arr.records.location[i].locationName;
            messageExplain=arr.records.location[i].weatherElement[0].time[0].parameter.parameterName;
            messageTemMin=arr.records.location[i].weatherElement[2].time[0].parameter.parameterName;
            messageTemMax=arr.records.location[i].weatherElement[4].time[0].parameter.parameterName;
            messageRainPar=arr.records.location[i].weatherElement[1].time[0].parameter.parameterName;
        break;

        case "16":
            i=16;
            messageSite=arr.records.location[i].locationName;
            messageExplain=arr.records.location[i].weatherElement[0].time[0].parameter.parameterName;
            messageTemMin=arr.records.location[i].weatherElement[2].time[0].parameter.parameterName;
            messageTemMax=arr.records.location[i].weatherElement[4].time[0].parameter.parameterName;
            messageRainPar=arr.records.location[i].weatherElement[1].time[0].parameter.parameterName;
        break;

        case "17":
            i=17;
            messageSite=arr.records.location[i].locationName;
            messageExplain=arr.records.location[i].weatherElement[0].time[0].parameter.parameterName;
            messageTemMin=arr.records.location[i].weatherElement[2].time[0].parameter.parameterName;
            messageTemMax=arr.records.location[i].weatherElement[4].time[0].parameter.parameterName;
            messageRainPar=arr.records.location[i].weatherElement[1].time[0].parameter.parameterName;
        break;

        case "18":
            i=18;
            messageSite=arr.records.location[i].locationName;
            messageExplain=arr.records.location[i].weatherElement[0].time[0].parameter.parameterName;
            messageTemMin=arr.records.location[i].weatherElement[2].time[0].parameter.parameterName;
            messageTemMax=arr.records.location[i].weatherElement[4].time[0].parameter.parameterName;
            messageRainPar=arr.records.location[i].weatherElement[1].time[0].parameter.parameterName;
        break;

        case "19":
            i=19;
            messageSite=arr.records.location[i].locationName;
            messageExplain=arr.records.location[i].weatherElement[0].time[0].parameter.parameterName;
            messageTemMin=arr.records.location[i].weatherElement[2].time[0].parameter.parameterName;
            messageTemMax=arr.records.location[i].weatherElement[4].time[0].parameter.parameterName;
            messageRainPar=arr.records.location[i].weatherElement[1].time[0].parameter.parameterName;
        break;
        case "20":
            i=20;
            messageSite=arr.records.location[i].locationName;
            messageExplain=arr.records.location[i].weatherElement[0].time[0].parameter.parameterName;
            messageTemMin=arr.records.location[i].weatherElement[2].time[0].parameter.parameterName;
            messageTemMax=arr.records.location[i].weatherElement[4].time[0].parameter.parameterName;
            messageRainPar=arr.records.location[i].weatherElement[1].time[0].parameter.parameterName;
        break;

        case "21":
            i=21;
            messageSite=arr.records.location[i].locationName;
            messageExplain=arr.records.location[i].weatherElement[0].time[0].parameter.parameterName;
            messageTemMin=arr.records.location[i].weatherElement[2].time[0].parameter.parameterName;
            messageTemMax=arr.records.location[i].weatherElement[4].time[0].parameter.parameterName;
            messageRainPar=arr.records.location[i].weatherElement[1].time[0].parameter.parameterName;
        break;

    
    }
    
    site.textContent = messageSite;
    explain.textContent= messageExplain;
    temMin.innerText=`${messageTemMin}~${messageTemMax}°C`;
    rain.innerText=`${messageRainPar}%`;


    //多雲短暫雨，陰短暫雨
    let checkString1='多雲短暫雨';
    let checkString2='陰短暫雨';
 
    let checkString3='多雲';
   
   
    // else if(messageExplain.includes(checkString3)){
    //     rainIcon.setAttribute("class","fa-solid fa-clouds");
        
    // }
    if(messageExplain.includes(checkString2)){
        hidden2.setAttribute("class","reflectBlock_R-show");
    }else{
        hidden2.setAttribute("class","reflectBlock_R-hidden");
    }

     
    if(messageExplain===(checkString1)){
        hidden.setAttribute("class","reflectBlock_R-show");
    }
    else{
        hidden.setAttribute("class","reflectBlock_R-hidden");
    }


    if(messageExplain===(checkString3)){
        show.setAttribute("class","reflectBlock_R-show");
       
    }else{
        show.setAttribute("class","reflectBlock_R-hidden");
    }


    // }else{
    //     cloudIcon.setAttribute("class","reflectBlock_R-hidden");
        
    // }


    })
