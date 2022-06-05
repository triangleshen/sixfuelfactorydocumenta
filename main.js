let $id = document.getElementById;
let choose_topic;


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
        topic.style.opacity = '0';
        topic.style.zIndex = '-1';
        img.style.opacity = '.2';
        word.style.opacity = '1';
        back.style.width = '50px';

        // ===== 關閉pizza中央標題 ===== //
        if(!!document.getElementById('topic_center') == true){
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
            case '情史派':
                choose_topic = loveArr;
                break;
            case '名人派':
                choose_topic = celeArr;
                break;
            case '打拚派':
                choose_topic = workArr;
                break;
            case '回味派':
                choose_topic = memoArr;
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
            case '教育派':
                choose_topic = eduArr;
                break;
            case '學習派':
                choose_topic = learnArr;
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
            case '戰爭派':
                choose_topic = warArr;
                break;
            case '康樂派':
                choose_topic = clArr;
                break;
            case '交通派':
                choose_topic = traArr;
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

        for(let i = 1; i < choose_topic.length;i++){
            word_text.innerHTML += `<div class="txt">${choose_topic[i]}</div>`;
        }  
}


// ===== 返回主選單 ===== //
function goBack(){
    let lt = document.getElementById('lt');
    let topic_center =document.getElementById('topic_center');
    let topic =document.getElementById('topic');
    let img =document.getElementById('img');
    let word =document.getElementById('word');
    let back = document.getElementById('back');
    

    lt.style.display = 'block';
    topic.style.opacity = '1';
    topic.style.zIndex = '1';
    img.style.opacity = '1';
    word.style.opacity = '0';
    back.style.width = '0px';

    word_text.innerHTML = '';

    // ===== 關閉pizza中央標題 ===== //
    if(!!document.getElementById('topic_center') == true){ 
        topic_center.style.display = 'block';
    }

}

function init(){

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