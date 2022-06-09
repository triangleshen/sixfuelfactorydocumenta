let $id = document.getElementById;
let choose_topic;
let pie_time = 3000;
let pizza_time = 7700;


// ===== 點開主選單 ===== //
function clickBtn(e){
    let lt = document.getElementById('lt');
    let topic =document.getElementById('topic');
    let img =document.getElementById('img');
    let word =document.getElementById('word');
    let word_title_txt =document.getElementById('word_title_txt');
    let word_text =document.getElementById('word_text');
    let back = document.getElementById('back');

    // pizza 用的中央標題 //
    if(!!document.getElementById('topic_center') == true){
        var topic_center = document.getElementById('topic_center');
    }

    
    lt.style.display = 'none';
    lt.classList.remove('animate__fadeInDown');
    topic.style.opacity = '0';
    topic.classList.remove('animate__fadeIn');
    topic.style.display = 'none';
    topic.style.zIndex = '-1';
    img.style.opacity = '.2';
    word.style.opacity = '1';
    back.style.width = '50px';

    // ===== 關閉pizza中央標題 ===== //
    if(!!document.getElementById('topic_center') == true){
        topic_center.classList.remove('animate__fadeIn');
        topic_center.style.display = 'none';
    }

    
    // ===== 建立關鍵字介面 ===== //
    switch (e.target.innerText){
        // ===== 千層派主題 ===== //
        case '惜蝠派':
            choose_topic = batArr1;
            break;
        case '厭蝠派':
            choose_topic = batArr2;
            break;
        case '田園派':
            choose_topic = fieldArr;
            break;
        case '眷味派':
            choose_topic = mdvArr;
            break;
        case '國宅派':
            choose_topic = phArr;
            break;
        case '童樂派':
            choose_topic = childArr;
            break;
        case '打拚派':
            choose_topic = workArr;
            break;
        case '名人派':
            choose_topic = celeArr;
            break;
        case '戰爭派':
            choose_topic = warArr;
            break;
        case '交通派':
            choose_topic = traArr;
            break;
        case '覓食派':
            choose_topic = foodArr;
            break;
        case '市集派':
            choose_topic = marketArr;
            break;
        case '失根派':
            choose_topic = rootArr1;
            break;
        case '尋根派':
            choose_topic = rootArr2;
            break;
        case '移居派':
            choose_topic = liveArr;
            break;
        case '教師派':
            choose_topic = teaArr;
            break;
        case '學生派':
            choose_topic = stuArr;
            break;
        case '保溫派':
            choose_topic = bwArr;
            break;
        case '懷舊派':
            choose_topic = oldArr;
            break;
        case '猜謎派':
            choose_topic = quizArr;
            break;
        case '廢墟派':
            choose_topic = ruinArr;
            break;

        // ===== 披薩主題 ===== //
        case '藝文創作':
            choose_topic = artArr;
            break;
        case '新媒體':
            choose_topic = mediaArr;
            break;
        case '能源科技':
            choose_topic = techArr;
            break;
        case '水資源':
            choose_topic = waterArr;
            break;
        case '生態':
            choose_topic = ecoArr;
            break;
        case '食農':
            choose_topic = farmArr;
            break;
        case '商家':
            choose_topic = storeArr;
            break;
        case '眷村味':
            choose_topic = mdv_pizza;
            break;
        case '遊樂':
            choose_topic = gameArr;
            break;
        case '圖書':
            choose_topic = libArr;
            break;
    }
    console.log(choose_topic);
    word_title_txt.innerText = choose_topic[0];
    word_title_txt.classList.add('animate__fadeInDown');
    back.classList.add('animate__fadeInDown');

    for(let i = 1; i < choose_topic.length;i++){
        word_text.innerHTML += `<div class="txt animate__animated animate__fadeInDown"><span style="font-weight:bold;font-size:28px"># </span>${choose_topic[i]}</div>`;

    } 

    if(num.innerText == 1){
        img.src = 'img/pie.PNG';
    }if (num.innerText == 3) {
        img.src = 'img/Pizza 0087.png';
    }
}


// ===== 返回主選單 ===== //
function goBack(){
    let num =document.getElementById('num');
    let lt = document.getElementById('lt');
    let topic =document.getElementById('topic');
    let img =document.getElementById('img');
    let word_title_txt =document.getElementById('word_title_txt');
    let word =document.getElementById('word');
    let back = document.getElementById('back');
    

    lt.style.display = 'block';
    lt.style.opacity = '0';
    // topic.style.opacity = '0';
    topic.style.display = 'flex';
    topic.style.zIndex = '1';
    img.style.opacity = '1';
    word.style.opacity = '0';
    back.style.width = '0px';
    word_title_txt.classList.remove('animate__fadeInDown');
    back.classList.remove('animate__fadeInDown');

    word_text.innerHTML = '';

    // ===== 開啟pizza中央標題 ===== //
    if(!!document.getElementById('topic_center') == true){ 
        let topic_center =document.getElementById('topic_center');
        topic_center.style.opacity = '0';
    }


    // ===== gif出現與換掉 ===== //
    if(num.innerText == 1){
        img.src = 'img/pies.gif';
        setTimeout(function(){
            lt.classList.add('animate__fadeInDown');
            lt.style.opacity = '1';
            topic.classList.add('animate__fadeIn');
            topic.style.opacity = '1';
        },(pie_time-500));
        setTimeout(function(){
            img.src = 'img/pie.PNG';
        },pie_time);
    }if (num.innerText == 3) {
        img.src = 'img/Pizzas.gif';
        // setTimeout(function(){
        // },(pizza_time-500));
        setTimeout(function(){
            lt.classList.add('animate__fadeInDown');
            topic.classList.add('animate__fadeIn');
            topic_center.style.display = 'block';
            topic_center.classList.add('animate__fadeInDown');
            img.src = 'img/Pizza 0087.png';
        },pizza_time);
    }

}

function init(){
    let num =document.getElementById('num');
    let img =document.getElementById('img');
    lt.style.opacity = '0';
    topic.style.opacity = '0';

    // ===== 換掉gif ===== //
    if(num.innerText == 1){
        setTimeout(function(){
            lt.classList.add('animate__fadeInDown');
        },(pie_time-500));
        setTimeout(function(){
            img.src = 'img/pie.PNG';
            topic.classList.add('animate__fadeIn');
        },pie_time);
    }if (num.innerText == 3) {
        topic_center.style.opacity = '0';
        setTimeout(function(){
            lt.classList.add('animate__fadeInDown');
        },(pizza_time-500));
        setTimeout(function(){
            img.src = 'img/Pizza 0087.png';
            topic.classList.add('animate__fadeIn');
            topic_center.classList.add('animate__fadeInDown');
        },pizza_time);
    }

    // ===== 點主選單 ===== //
    let keywords = document.querySelectorAll('.keyWords',true);
    for(let i = 0; i<keywords.length;i++){
        keywords[i].addEventListener('click',clickBtn);
    };

    // ===== 回主選單 ===== //
    let back = document.getElementById('back');
    back.addEventListener('click',goBack);
}


window.addEventListener('load',init);