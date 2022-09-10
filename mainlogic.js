let Alabama={
    name:'Alabama',
    power: 9,
    id:1,
    innovative:1,
}

let Alaska={
    name:'Alaska',
    power: 3,
    id:2,
    innovative:2,
}

let Arizona={
    name:'Arizona',
    power: 11,
    id:3,
    innovative:1,
}

let Arkansas={
    name:'Arkansas',
    power: 6,
    id:4,
    innovative:0,
}



let California={
    name:'California',
    power: 55,
    id:5,
    innovative:0,
}

let Colorado={
    name:'Colorado',
    power:9,
    id:6,
    innovative:0,
}
let Connecticut = {
    name:'Conneticut',
    power:7,
    id:7,
    innovative:0,
}
let Delaware={
    name:'Delaware',
    power:3,
    id:8,
    innovative:0,
}
let Florida={
    name:'Florida',
    power:29,
    id:9,
    innovative:0,
}
let Georgia={
    name:'Georgia',
    power:16,
    id:10,
    innovative:0,
}
let Hawaii={
    name:'Hawaii',
    power:4,
    id:11,
    innovative:0,
}
let Idaho={
    name:"Idaho",
    power:4,
    id:12,
    innovative:0,
}
let Illinois={
    name:'Illinois',
    power:20,
    id:13,
    innovative:0,
}
let Indiana={
    name:'Indiana',
    power:11,
    id:14,
    innovative:0,
}

let Iowa={
    name:"Iowa",
    power:6,
    innovative:0,
}
let Kansas={
    name:"Kansas",
    power:6,
    innovative:0,
}
let Kentucky={
    name:'Kentucky',
    power:8,
    innovative:0,
}
let Louisiana={
    name:'Louisiana',
    power:8,
    innovative:0,
}
let Maine={
    name:'Maine',
    power:4,
    innovative:0,
}
let Maryland={
    name:'Maryland',
    power:10,
    innovative:0,
}
let Massachusetts={
    name:'Massachusetts',
    power:11,
    innovative:0,
}
let Michigan={
    name:'Michigan',
    power:16,
    innovative:0,
}
let Minnesota={
    name:'Minnesota',
    power:10,
    innovative:0,
}
let Mississippi={
    name:'Mississippi',
    power:6,
    innovative:0,
}
let Missouri={
    name:'Missouri',
    power:10,
    innovative:0,
}
let Montana={
    name:'Montana',
    power:3,
    innovative:0,
}
let Nebraska={
    name:'Nebraska',
    power:5,
    innovative:0,
}
let Nevada={
    name:'Nevada',
    power:6,
    innovative:0,
}
let NewHampshire={
    name:'New Hampshire',
    power:4,
    innovative:0,
}
let NewJersey={
    name:'New Jersey',
    power:14,
    innovative:0,
}
let NewMexico={
    name:'New Mexico',
    power:5,
    innovative:0,
}
let NewYork={
    name:'New York',
    power:29,
    innovative:0,
}
let NorthCarolina={
    name:'North Carolina',
    power:15,
    innovative:0,
}
let NorthDakota={
    name:'North Dakota',
    power:3,
    innovative:0,
}
let Ohio={
    name:'Ohio',
    power:18,
    innovative:0,
}
let Oklahoma={
    name:'Oklahoma',
    power:7,
    innovative:5,
}
let Oregon={
    name:'Oregon',
    power:7,
    innovative:0,
}
let Pennsylvania={
    name:'Pennsylvania',
    power:20,
    innovative:0,
}
let RhodeIsland={
    name:'Rhode Island',
    power:4,
    innovative:0,
}
let SouthCarolina={
    name:'South Carolina',
    power:9,
    innovative:0,
}
let SouthDakota={
    name:'South Dakota',
    power:3,
    innovative:0,
}
let Tennessee={
    name:'Tennessee',
    power:11,
    innovative:0,
}
let Texas={
    name:'Texas',
    power:38,
    innovative:0,
}
let Utah={
    name:'Utah',
    power:6,
    innovative:0,
}
let Vermont={
    name:'Vermont',
    power:3,
    innovative:0,
}
let Virginia={
    name:'Virginia',
    power:13,
    innovative:0,
}
let Washington={
    name:'Washington',
    power:12,
    innovative:0,
}
let WestVirginia={
    name:'West Virginia',
    power:5,
    innovative:1,
}
let Wisconsin={
    name:'Wisconsin',
    power:10,
    innovative:0,
}
let Wyoming={
    name:'Wyoming',
    power:3,
    innovative:0,
}


const stateNames = [
    Alabama , Alaska , Arizona , Arkansas , California , Colorado , Connecticut ,
    Delaware , Florida , Georgia , Hawaii , Idaho , Illinois , Indiana , Iowa , Kansas ,
    Kentucky , Louisiana , Maine , Maryland , Massachusetts , Michigan , Minnesota , 
    Mississippi , Missouri , Montana , Nebraska , Nevada , NewHampshire , NewJersey , 
    NewMexico , NewYork , NorthCarolina , NorthDakota , Ohio , Oklahoma , Oregon ,
    Pennsylvania , RhodeIsland , SouthCarolina , SouthDakota , Tennessee , Texas , Utah , 
    Vermont , Virginia , Washington , WestVirginia , Wisconsin , Wyoming 
   ];
const causes = [
    ' after they insulted them!', ' after they assasinated their leader!', ' after they blocked their trade!', ' to humiliate them!'
]
var total = 187;
var bool = false;
var per = 0
var ev;
var ev1;
var ev2;
var ev3;
var node;
var para;
var element;
var el=document.getElementById("div1");
var round =2
var h1;
var button=document.getElementsByClassName('button')
var clone;
var done = false;
var winp;
function Simulate(){
    for (var i in stateNames){
        var dice = Math.floor(Math.random()*25)
        if (stateNames.length > 1){
            var s1=Math.floor(Math.random()*stateNames.length);
            var s2=Math.floor(Math.random()*stateNames.length);
            console.log(s1);
            console.log(stateNames);
            var country1 = stateNames[s1];
            var country2 = stateNames[s2];
            if (country1.power>country2.power){
                ev=Math.abs(country2.power/country1.power)
                ev1=Math.abs(ev*100)
                ev2=Math.abs(100-ev1)
                ev3=Math.abs(ev2/3)
                per = Math.floor(Math.abs((country1.power-country2.power)/2))

                dice = Math.floor(Math.random()*per)
                console.log(per+' '+dice)
                if (dice==1){
                    console.log(per+" "+dice+ "ud")
                    country2.power= country1.power+country2.power;
                    console.log(country2.name + " has defeated "+country1.name+" "+causes[Math.floor(Math.random()*causes.length)]);
                    stateNames.splice(s1,1)
                    s=country2.name + " has defeated "+country1.name+" "+causes[Math.floor(Math.random()*causes.length)]
                    newp=document.createElement("p")
                    
                     para = document.createElement("p");
                     node = document.createTextNode(s);
                    para.appendChild(node);
                     element = document.getElementById("div1");
                    element.appendChild(para);
                    para.classList.add("events");
                }else{
                    country1.power= country1.power+country2.power;
                    s=country1.name + " has defeated "+country2.name+" "+causes[Math.floor(Math.random()*causes.length)];
                    stateNames.splice(s2,1)
                     para = document.createElement("p");
                     node = document.createTextNode(s);
                    para.appendChild(node);
                     element = document.getElementById("div1");
                    element.appendChild(para);
                    para.classList.add("events");
                }
            }else if(country2.power>country1.power){
                ev=Math.abs(country1.power/country2.power)
                ev1=Math.abs(ev*100)
                ev2=Math.abs(100-ev1)
                ev3=Math.abs(ev2/3)
                per = ev3
                per = Math.floor(Math.abs((country2.power-country1.power)/2))
                console.log(per+' '+dice)
                dice = Math.floor(Math.random()*per)
                if (dice==1){
                    console.log(per+" "+dice+ "ud")
                    country1.power= country1.power+country2.power;
                    console.log(country1.name + " has defeated "+country2.name+" "+causes[Math.floor(Math.random()*causes.length)]);
                    stateNames.splice(s2,1)
                     para = document.createElement("p");
                    s=country1.name + " has defeated "+country2.name+" "+causes[Math.floor(Math.random()*causes.length)];
                     node = document.createTextNode(s);
                    para.appendChild(node);
                     element = document.getElementById("div1");
                    element.appendChild(para);
                    para.classList.add("events");
                }else{
                    country2.power= country1.power+country2.power;
                    console.log(country2.name + " has defeated "+country1.name+" "+causes[Math.floor(Math.random()*causes.length)]);
                    stateNames.splice(s1,1)
                    s=country2.name + " has defeated "+country1.name+" "+causes[Math.floor(Math.random()*causes.length)]
                     para = document.createElement("p");
                     node = document.createTextNode(s);
                    para.appendChild(node);
                     element = document.getElementById("div1");
                    element.appendChild(para);
                    para.classList.add("events");
                }
            }else if(country1.name==country2.name){
                console.log('same countries');
                s='period of peace in '+country1.name
                 para = document.createElement("p");
                 node = document.createTextNode(s);
                para.appendChild(node);
                 element = document.getElementById("div1");
                element.appendChild(para);
                para.classList.add("events");
            }else{
                console.log(country1.name+country2.name+' negociated peace.')
                s=country1.name+country2.name+' negociated peace.'
                 para = document.createElement("p");
                 node = document.createTextNode(s);
                para.appendChild(node);
                 element = document.getElementById("div1");
                element.appendChild(para);
                para.classList.add("events");
            }
        }else{
            console.log(stateNames[0].name+' has won');
            s=stateNames[0].name+' has won'
            winp = document.createElement("h1");
            node = document.createTextNode(s);
            winp.appendChild(node);
            element = document.getElementById("div1");
            element.appendChild(winp);
            winp.setAttribute('id','win')
            scrolls();
            done = true
    }
    
    }
    if (done==false){
        h1 = document.createElement("h1");
    node = document.createTextNode('Round '+round);
    h1.appendChild(node);
    element = document.getElementById("div1");
    element.appendChild(h1);
    h1.setAttribute('id','rounds')
    round++
    let btn = document.createElement("input");
    btn.textContent = "Simulate";
    btn.type='button'
    btn.classList.add("inp"+round)
    btn.setAttribute('onclick',  'Simulate()');
    btn.value='Simulate Round '+ (round-1   )
    var sz=document.createElement("hr")
    
    document.getElementById("div1").appendChild(btn);
    hr=document.createElement("hr");
    hr.setAttribute('id','hr'+round);
    element.appendChild(hr);
    
    location.hash='hr'+round
    
    document.querySelector('#hr'+round).scrollIntoView({ 
        behavior: 'smooth' 
      });
   
    
    
    
    }
    
    

}
function scrolls(){
    document.querySelector('#win').scrollIntoView({ 
        behavior: 'smooth' 
    });   
}
/*  */