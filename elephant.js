//========= 關鍵字資料庫 =========//
// ---故事詮釋的移動--- //
let storyArr = new Array(
    '故事詮釋的移動',
    '從真正經歷過的人口中述說很重要，由二、三代來講老一輩的故事，透過自己家族的人收集會更有意義。--大煙囪原眷戶後代',
    '培訓在地的爺爺奶奶來導覽，讓長輩有第二舞台發揮專長，從長輩口中發掘歷史、傳承歷史。--親子共學團',
    '兒子看到新聞播的烏俄戰爭，問家裡有誰經歷過，正好爺爺奶奶有，可以趁這個時間點講歷史。--大煙囪原眷戶後代',
    '我常常帶老父母重返故地旅遊，就會有他們的記憶故事可聽。--生態研究員',
    '之前參訪台南社大，培力退休教師轉型為在地導覽員，導覽費一場還有三千元。--社大講師'
);

// ---記憶味道的移動--- //
let memotestArr = new Array(
    '記憶味道的移動',
    '食物與人較有連結，美食的分享要保留下來，像我現在回來大煙囪附近還是會吃老店。--大煙囪原眷戶後代',
    '現在回去光顧小時候的那些老店家，不是為了吃好吃，而是吃回憶。--國宅返鄉創業後代'
);

// ---人員參與的移動--- //
let pplArr = new Array(
    '人員參與的移動',
    '因研究人力單薄，調查成果就有限，像霜毛蝠是用飛的，有時人被紅綠燈困住就跟丟了；後來透過保溫計畫在大煙囪內裝設監控攝影機，可開放民眾遠端共同觀察霜毛蝠，減輕不少負擔。--生態研究員',
    '跟保溫計畫合作蝙蝠保母活動，培訓一般民眾成為蝙蝠保母，分擔照顧受傷的蝙蝠。--學校教師',
    '社大樸門永續課程受邀來大煙囪開課，剛好讓學員透過課程實作來建置大煙囪場域的永續設施。--社大講師',
    '大煙囪上完樸門課後，受課堂學員愛恆啟能中心董事長戴耀賽邀請，現在轉到南寮愛恆樂活園農場開樸門課；那邊有些學員學成後，又回到大煙囪加入活化行列。--社大講師',
    '有大煙囪經驗後，未來推廣樸門精神的模式，就是進入不同社區開樸門課培力在地，學生可以互相串連。--社大講師',
    '保溫志工是由各種不同族群聚集到大煙囪，共同凝聚對於未來的想像，這和傳統的社造，由一群長輩運作的想像不大相同。--雞舍志工青年'
);

// ---校本課程的移動--- //
let lessonArr = new Array(
    '校本課程的移動',
    '由於有些學生住在大煙囪附近，到那邊進行戶外教學時，反而變成學生在介紹自家的環境，藉此引導他們創造新的故事與在地連結。--學校教師',
    '若能讓學生走出校園辦學習成果展，可促使學生思考如何與社區做結合，而不是全都交由學校來規畫處理。--學校教師',
    '學生會想參加有特色的服務學習課程，而不是單純打掃性質的；例如之前清大有到新竹動物園照顧動物的服務學習。--大學生',
    '跟竹科的園區管理局、台積創新館合作校外參訪，認識科技史；到南寮環保局焚化爐來認識能源議題。--學校教師',
    '舉辦六燃週遭學校的教師培力，讓教師帶回學校給學生，尤其是高中以下從小就紮根認識在地。--學校教師',
    '過去曾與中原趙家麟老師合作六燃講座，開始將六燃納入校本課程。--學校教師'
);

// ---空間開放的移動--- //
let spaceArr = new Array(
    '空間開放的移動',
    '疫情後在尋找社區周邊的公共空間開課，期望該空間能夠更開放，不限某社區的人才能使用。--社區共學媽媽',
    '我們需要的是空間，但不一定代表要有人在這守候，只要有一種方式讓我們去使用就好。--社區共學媽媽',
    '家庭主婦上午都是個人時間，中午過後則是家庭時間，要忙接待放學的孩子、先生，所以空間開放的時間需要更有彈性。--社區共學媽媽',
    '透過出租空間（像是辦活動、桌遊）先吸引人來，才有機會接觸到六燃的其他面向。--國宅返鄉創業後代',
    '現在跳舞班跟大煙囪對面的新社區大樓借空間，一個人繳100元場地費也願意，就扭一扭、動一動也好。--國宅老住戶'
);

// ---交通方式的移動--- //
let traArr = new Array(
    '交通方式的移動',
    '與活動空間的「距離」，對於有帶孩子的媽媽來說是重要的考量。--社區共學媽媽',
    '自己是台中人，秋紅谷跟周遭的點有串起來，我車子停好就可以逛，不用再開車移動。--生態研究員',
    '假日比較偏好去新竹舊城區，會先停好機車再步行去逛。--大學生',
    '平日時間媽媽出門搭接駁巴士很OK，不會遇到上下班通勤車潮。--社區共學媽媽',
    '搭乘大眾運輸系統，可以讓人在路上有緩慢思考的機會。--學校教師',
    '選擇腳踏車當交通工具來大煙囪，可能比公車來得快且有美感，還可以慢慢繞汀甫圳兼賞花。--親子共學團'
);

// ---故事景點的移動--- //
let storySpotArr = new Array(
    '故事景點的移動',
    '下高速公路第一站來到六燃，透過自助導覽系統認識六燃的各點。--學校教師',
    '大煙囪是六燃很好的擴散點，用溫和、放鬆、悠閒的方式好好玩，不用一次就逛完。--親子共學團',
    '之前到愛買採買時遇到水道取水口展示館，可以從那個點開始走到大煙囪，再到清交大，走一圈就夠了。--社區媽媽',
    '對外地人來說，希望來一趟能有更多景點的串連，這是我想像的六燃孝親行程規劃：一早從台中開車出發 > 先到大煙囪再去逛清交大 > 中午到舊城區吃飯 > 賦歸--生態研究員',
    '規劃認識新竹發展的套裝行程，串各點的歷史故事。--大煙囪原眷戶後代',
    '分散的點必須和文化脈絡、歷史脈絡結合；串聯周邊景點，規劃半日遊或一日遊行程吸引人來，而非單點經營 。--學校教師'
);

// ---焦點引燃的移動--- //
let focueArr = new Array(
    '焦點引燃的移動',
    '歷史是否能帶來人潮? 我不這麼認為，像將軍村有市集人才會來，所以歷史要被包裝過才讓人想進一步去探索。--研究生',
    '吸引我的媒介是市集，更精確地說是市集的人潮，因為看到很多人才想去一探究竟。--研究生',
    '泰安派出所的櫻花林意外地吸引大量人潮，這種人潮就是被創造出來的。--學校教師',
    '竹北的遠百本身就會吸引人潮，客家土樓的建物造型才因此被更多人知道。--研究生',
    '在台北有畫展跟酒展聯名，把看畫的人跟品酒連結在一起。--研究生',
    '導覽不能只有六燃，新竹最著名的是城隍廟，從大景點做串聯結合。--國宅返鄉創業後代'
);

// ---議題探索的移動--- //
let topicArr = new Array(
    '議題探索的移動',
    '新竹機場開放參觀時，可以串起黑蝙蝠中隊、六燃、台積電創新館、南寮環保局，從歷史連結能源的議題。--學校教師',
    '以大煙囪作為擴散和連結的中心，連結清交的自然資源、水圳的故事、光復籃球隊、醫院群的合作。--親子共學團媽媽',
    '水資源利用與規劃的議題，包括六燃的汀甫圳、十八尖山的自來水廠，還有千甲一帶的隆恩圳。--生態研究員',
    '眷村文化可能是基礎的調性，但要加上其他不同的面向，可以和舊城的歷史連結。--學校教師',
    '帶老父母旅遊，最好能在他們不是很累的狀況下，一邊逛一邊和他們講特殊的文化與生態的部分。--生態研究員',
    '當初在規劃社大樸門永續課程進入社區時，用「金木水火土」來思考社區永續元素，如何結合在地竹塹學，創造多樣性。--社大講師'
);

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
    // pizza 用的中央標題 //
    if(!!document.getElementById('topic_center') == true){
        var topic_center = document.getElementById('topic_center');
    }

    if(e.target.classList.contains('blur') == false){
        lt.style.display = 'none';
        
        topic.style.opacity = '0';
        topic.style.zIndex = '-1';
        img.style.opacity = '.2';
        word.style.opacity = '1';

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

            // ===== 大象主題 ===== //
            case `<span>故事詮釋</span><br>的移動`:
                choose_topic = storyArr;
                break;
            case '<span>記憶味道</span><br>的移動':
                choose_topic = memotestArr;
                break;
            case '<span>人員參與</span><br>的移動':
                choose_topic = pplArr;
                break;
            case '<span>校本課程</span>的移動':
                choose_topic = lessonArr;
                break;
            case '<span>空間開放</span><br>的移動':
                choose_topic = spaceArr;
                break;
            case '<span>交通方式</span><br>的移動':
                choose_topic = traArr;
                break;
            case '<span>故事景點</span><br>的移動':
                choose_topic = storySpotArr;
                break;
            case '<span>焦點引燃</span><br>的移動':
                choose_topic = focueArr;
                break;
            case '<span>議題探索</span><br>的移動':
                choose_topic = topicArr;
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

    }else{
        let keywords = document.querySelectorAll('.keyWords');
        for(let i = 0; i<keywords.length;i++){
            if(e.target == keywords[i]){
                keywords[i].classList.remove('blur');
            }else{
                keywords[i].classList.add('blur');
            };
        };
    }
    
    
    
}


// ===== 返回主選單 ===== //
function goBack(){
    let lt = document.getElementById('lt');
    let topic_center =document.getElementById('topic_center');
    let topic =document.getElementById('topic');
    let img =document.getElementById('img');
    let word =document.getElementById('word');
    
    lt.style.display = 'block';
    topic.style.opacity = '1';
    topic.style.zIndex = '1';
    img.style.opacity = '1';
    word.style.opacity = '0';

    word_text.innerHTML = '';


    // ===== 大象頁面標題重新模糊 ===== //
    if(document.getElementById('num').innerText == 2){ 
        let keywords = document.querySelectorAll('.keyWords');
        for(let i = 0; i<keywords.length;i++){
            keywords[i].classList.add('blur');
        }
    }

    // ===== 關閉pizza中央標題 ===== //
    if(!!document.getElementById('topic_center') == true){ 
        topic_center.style.display = 'block';
    }

}

function init(){

    // ===== 點主選單 ===== //
    let keywords = document.querySelectorAll('.keyWords',true);
    let span = document.getElementsByTagName('span');

    for(let i = 0; i<keywords.length;i++){
        keywords[i].addEventListener('click',clickBtn);
    };
    for(let i = 0; i<span.length;i++){
        span[i].parentElement.addEventListener('click',clickBtn);
    };

    // ===== 回主選單 ===== //
    let back = document.getElementById('back');
    back.addEventListener('click',goBack);
}


window.addEventListener('load',init);