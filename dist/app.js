const resources = [
  {
    id:"land", name:"土地", en:"LAND", metric:"1.286", unit:"亿公顷耕地", year:"2023年度国土变更调查",
    status:"粮食根基", summary:"耕地约19.29亿亩。数量、质量与生态保护共同构成粮食安全的空间基础。",
    tagline:"承载生产、生活与生态空间，是所有陆域资源的共同底盘。",
    features:["支撑粮食与农产品生产","兼具空间载体和生态功能","形成缓慢、区域差异明显"],
    problems:["优质耕地保护压力较大","部分地区土壤退化和污染","建设、农业与生态用途竞争"],
    actions:["严守耕地与永久基本农田红线","建设高标准农田、保护黑土地","节约集约用地并推进土壤修复"],
    relations:["water","forest","grass","mineral"], source:"https://www.gov.cn/lianbo/bumen/202503/P020250322461627579892.pdf"
  },
  {
    id:"water", name:"水", en:"WATER", metric:"3.1123", unit:"万亿立方米", year:"2024年水资源总量",
    status:"时空不均", summary:"全国水资源总量31123.0亿立方米，用水总量5928.0亿立方米，其中农业用水占61.6%。",
    tagline:"沿流域循环，连接上游与下游、陆地与海洋、生产与生态。",
    features:["可循环但总量与时空分布不均","流域关联性和公共属性突出","维持生活、生产与生态过程"],
    problems:["水土资源空间分布不匹配","局地污染与生态流量不足","旱涝极端事件风险上升"],
    actions:["以水定城、定地、定人、定产","推进农业、工业和城市节水","实施流域统筹与河湖湿地修复"],
    relations:["land","forest","wetland","ocean"], source:"https://water.wuxi.gov.cn/doc/2025/06/10/4591076.shtml"
  },
  {
    id:"forest", name:"森林", en:"FOREST", metric:"25.09", unit:"% 覆盖率", year:"2025年工作会议公布",
    status:"持续增长", summary:"森林蓄积量达209.88亿立方米。森林是水源涵养、固碳、生物多样性保护的重要载体。",
    tagline:"陆地生态系统的主体，也是水库、粮库、钱库与碳库。",
    features:["涵养水源、保持水土和固碳","提供连续的生物栖息空间","兼具生态、经济与文化价值"],
    problems:["区域间森林质量差异明显","火灾、病虫害和极端天气威胁","部分栖息地破碎化"],
    actions:["科学开展国土绿化","提高天然林和人工林质量","建设生态廊道并强化灾害监测"],
    relations:["water","land","grass","wetland"], source:"https://www.forestry.gov.cn/c/www/lcdt/656968.jhtml"
  },
  {
    id:"grass", name:"草原", en:"GRASSLAND", metric:"50.52", unit:"% 植被盖度", year:"2024年公开数据",
    status:"生态屏障", summary:"草原综合植被盖度50.52%，连接畜牧生产、防风固沙、水土保持与北方生态安全。",
    tagline:"横跨干旱、半干旱和高寒地区，是北方生态安全的重要屏障。",
    features:["面积广、类型多、季节变化显著","支撑畜牧业和牧区文化","发挥防风固沙与水土保持作用"],
    problems:["局地超载放牧与退化仍然存在","荒漠化和鼠虫害风险交织","对气候波动高度敏感"],
    actions:["落实草畜平衡和禁牧休牧","分区修复退化、沙化草原","加强遥感监测和牧区可持续生计"],
    relations:["land","water","forest","wetland"], source:"https://www.forestry.gov.cn/c/www/szxx/648557.jhtml"
  },
  {
    id:"wetland", name:"湿地", en:"WETLAND", metric:"8+", unit:"亿亩", year:"2024年林草统计口径",
    status:"稳定保护", summary:"湿地面积稳定在8亿亩以上。它连接陆地与水域，在蓄洪、净水、固碳和候鸟栖息中发挥作用。",
    tagline:"水陆相接的生态过渡带，是候鸟驿站与天然的蓄水净水系统。",
    features:["具有蓄洪、净水和固碳功能","生物多样性高度集中","对流域水文过程变化敏感"],
    problems:["围垦占用和岸线硬化压力","补水不足导致水文节律改变","外来物种与面源污染影响"],
    actions:["实行分级管理和用途管制","恢复自然水文连通与植被","推动流域协同保护和社区参与"],
    relations:["water","forest","grass","ocean"], source:"https://www.forestry.gov.cn/c/www/szxx/648557.jhtml"
  },
  {
    id:"ocean", name:"海洋", en:"OCEAN", metric:"83.7", unit:"% 优良水质", year:"2024年近岸海域",
    status:"总体稳定", summary:"近岸海域优良水质面积比例为83.7%。海洋承载渔业、港航、能源与滨海生态系统。",
    tagline:"从海岸带延伸到深远海，连接蓝色经济、气候调节与生物多样性。",
    features:["空间广阔、立体性和流动性强","调节气候并提供蓝碳生态系统","承载渔业、港航与海洋能源"],
    problems:["陆源污染和局地富营养化","滨海湿地及典型生境退化","开发强度与海洋灾害风险并存"],
    actions:["坚持陆海统筹和湾区综合治理","修复海岸带、红树林与海草床","完善海洋监测和生态预警网络"],
    relations:["water","wetland","land","mineral"], source:"https://www.mee.gov.cn/ywgz/sthjjcgl/hjzljcypj/202506/t20250605_1120773.shtml"
  },
  {
    id:"mineral", name:"矿产", en:"MINERALS", metric:"173", unit:"种矿产", year:"截至2023年底",
    status:"资源保障", summary:"我国已发现173种矿产。开发利用需要同时考虑供给安全、节约集约与矿山生态修复。",
    tagline:"不可再生且分布集中，是能源、制造业和新兴产业的重要物质基础。",
    features:["不可再生、形成周期极长","区域分布和品位差异显著","连接能源安全与完整产业链"],
    problems:["部分关键矿产对外依存度较高","开发可能扰动土地和水环境","低品位资源利用效率有待提升"],
    actions:["加强战略性矿产勘查与储备","发展绿色矿山和循环利用","落实全生命周期生态修复责任"],
    relations:["land","water","ocean","forest"], source:"https://www.gov.cn/lianbo/bumen/202503/P020250322461627579892.pdf"
  }
];

const timelineEvents = [
  ["1986","土地管理法通过","以法律形式加强土地管理、维护土地公有制，土地资源管理进入法治化阶段。","foundation","制度奠基","https://www.pudong.gov.cn/zwgk/gkml_ywl_bdcdj_bdcdjzcfg/2022/314/284092.html"],
  ["1991","首个全国土地日","国务院确定每年6月25日为全国土地日，成为公众理解国情国策的重要窗口。","foundation","公众行动","https://dnr.yn.gov.cn/html/2020/ziranziyuanxinxi_0624/30181.html"],
  ["1998","国土资源部组建","土地、矿产、海洋等相关管理职能进一步整合，综合管理能力得到加强。","integration","机构整合","https://www.hunan.gov.cn/szf/hnzb_18/zb9506/202106/19450896/files/24a6c9650cba44e79976e1fd5d576ace.pdf"],
  ["2013","统一不动产登记部署","提出建立不动产统一登记制度，为产权清晰和资源资产管理夯实基础。","integration","统一确权","https://www.dengzhou.gov.cn/2013/03-12/1158266.html"],
  ["2015","不动产登记暂行条例施行","统一登记制度走向全面实施，登记机构、簿册、依据和信息平台逐步统一。","integration","统一确权","https://www.moj.gov.cn/pub/sfbgw/zcjd/201412/t20141222_390064.html"],
  ["2018","自然资源部组建","统一行使全民所有自然资源资产所有者职责，统一行使国土空间用途管制和生态保护修复职责。","integration","统一管理","https://www.npc.gov.cn/zgrdw/npc/dbdhhy/13_1/2018-03/14/content_2048552.htm"],
  ["2019","国土空间规划体系建立","明确建立全国统一、责权清晰、科学高效的国土空间规划体系。","system","空间治理","https://app.www.gov.cn/govdata/gov/201905/23/440190/article.html"],
  ["2021","第三次全国国土调查主要数据公布","全面查清土地利用状况，为耕地保护、空间规划和生态修复提供统一底图。","system","调查监测","https://zrzyt.hubei.gov.cn/fbjd/xxgkml/sjfb/tdzytjsj/202109/t20210918_3771826.shtml"],
  ["2021","首批五个国家公园设立","三江源、大熊猫、东北虎豹、海南热带雨林、武夷山国家公园正式设立。","system","整体保护","https://www.forestry.gov.cn/c/www/xwdt/3200.jhtml"],
  ["2022","湿地保护法施行","我国首部专门保护湿地的法律施行，湿地保护全面进入法治化新阶段。","system","生态法治","https://www.npc.gov.cn/WZWSREL25wYy8vLy8vL2MyL2MzMDgzNC8yMDIzMTIvdDIwMjMxMjA2XzQzMzI5MC5odG1s"],
  ["2022","全国国土空间规划纲要印发","国家级国土空间规划成为空间发展的指南和可持续发展的空间蓝图。","system","顶层规划","https://app.www.gov.cn/govdata/gov/202505/20/529401/article.html"],
  ["2023","生态保护红线全面划定","全国生态保护红线完成划定，覆盖全部35个生物多样性保护优先区域。","system","底线管控","https://www.forestry.gov.cn/c/www/kpzrbhd/361894.jhtml"],
  ["2023","首个全国生态日","8月15日成为全国生态日，推动生态文明理念更广泛地进入公众生活。","system","公众行动","https://www.npc.gov.cn/WZWSREL25wYy8vLy8vL2MyL2MzMDgzNC8yMDIzMTIvdDIwMjMxMjA2XzQzMzI5MC5odG1s"],
  ["2024","省级国土空间规划全部获批实施","各省级规划全面进入实施阶段，全国国土空间规划体系继续完善。","system","规划实施","https://www.gov.cn/lianbo/bumen/202503/P020250322461627579892.pdf"],
  ["2025","国家公园法通过","国家公园保护、建设、管理和共享有了专门法律依据，将于2026年1月1日起施行。","system","生态法治","https://www.forestry.gov.cn/c/www/szxx/642162.jhtml"]
];

const commemorations = [
  [2,2,"世界湿地日","国际纪念日","湿地连接水与陆地，是候鸟驿站，也是城市和流域的天然海绵。","今天少用一件一次性塑料制品，减少进入河湖湿地的垃圾。","https://www.un.org/zh/observances/world-wetlands-day"],
  [3,3,"世界野生动植物日","国际纪念日","关注野生动植物及其栖息地，理解每一个物种在生态网络中的位置。","记录身边一种本地物种，不购买来源不明的野生动植物制品。","https://www.un.org/zh/observances/world-wildlife-day/background"],
  [3,12,"中国植树节","中国纪念日","植树造林连接国土绿化、生态修复与公众参与。","认养一棵树，或为社区的一片绿地做一次清洁和养护。","https://www.gov.cn/xinwen/2019-03/12/content_5373160.htm"],
  [3,21,"国际森林日","国际纪念日","森林提供水源涵养、固碳、栖息地和可持续的林产品。","把今天用过的纸张双面使用，并了解它的可持续来源。","https://www.un.org/zh/events/forestsday/"],
  [3,22,"世界水日","国际纪念日","淡水关系饮水、粮食、能源、生态与气候适应。","把淋浴缩短两分钟，检查家里是否有持续滴漏。","https://www.un.org/zh/observances/water-day"],
  [4,22,"世界地球日","国际纪念日","从一颗行星的尺度重新审视消费、能源、土地和生物多样性。","选择一次步行、骑行或公共交通，并记录减少的里程。","https://www.un.org/en/observances/earth-day"],
  [5,22,"国际生物多样性日","国际纪念日","多样的基因、物种和生态系统共同维系人类福祉。","观察并上传三种本地生物，让公民科学留下记录。","https://www.un.org/zh/observances/biological-diversity-day"],
  [6,5,"世界环境日","国际纪念日","全球公众参与环境行动的重要日子，议题连接污染、气候与生态。","挑选一个可持续习惯，坚持七天并邀请一位朋友加入。","https://www.un.org/en/observances/environment-day"],
  [6,8,"世界海洋日 / 全国海洋宣传日","国际与中国纪念日","海洋调节气候、孕育生命，也承载渔业、航运和滨海生活。","拒绝一件不必要的塑料包装，关注它可能通向的河流与海洋。","https://www.npc.gov.cn/npc/c2/c30834/202406/t20240611_437411.html"],
  [6,17,"防治荒漠化与干旱日","国际纪念日","健康的土地是粮食、水资源和生态韧性的共同基础。","了解家乡的水土流失或荒漠化问题，选择一种耐旱本地植物。","https://www.un.org/zh/node/78250"],
  [6,25,"全国土地日","中国纪念日","珍惜和合理利用土地、切实保护耕地，是我国长期坚持的基本国策。","查看所在城市的国土空间规划，认识一条开发边界或生态红线。","https://dnr.yn.gov.cn/html/2020/ziranziyuanxinxi_0624/30181.html"],
  [8,15,"全国生态日","中国纪念日","集中展示生态文明建设成效，推动全民参与生态环境保护。","为自己的家庭做一张资源账单：水、电、纸、食物各记一项。","https://www.npc.gov.cn/WZWSREL25wYy8vLy8vL2MyL2MzMDgzNC8yMDIzMTIvdDIwMjMxMjA2XzQzMzI5MC5odG1s"],
  [8,29,"全国测绘法宣传日","中国纪念日","测绘地理信息为资源调查、空间规划、防灾减灾提供位置基础。","打开一张公开地图，辨认家附近的河流、山地与建设边界。","https://zrzyt.fujian.gov.cn/zwgk/xwdt/zrzyyw/202508/t20250811_6989751.htm"],
  [12,5,"世界土壤日","国际纪念日","土壤支撑粮食生产、碳循环与陆地生态系统，却形成缓慢、易受损。","把厨余正确分类，避免污染土壤；观察一块裸地如何被保护。","https://www.un.org/zh/events/soilday/background.shtml"]
];

const modelNames = {land:"土地",water:"水",forest:"森林",grass:"草原",wetland:"湿地",ocean:"海洋",mineral:"矿产保障"};
const modelValues = {land:68,water:68,forest:68,grass:68,wetland:68,ocean:68,mineral:68};
const presets = {
  balanced:{land:68,water:68,forest:68,grass:68,wetland:68,ocean:68,mineral:68},
  drought:{land:50,water:24,forest:51,grass:37,wetland:30,ocean:62,mineral:66},
  restore:{land:74,water:78,forest:84,grass:79,wetland:86,ocean:77,mineral:65},
  demand:{land:47,water:43,forest:49,grass:46,wetland:41,ocean:50,mineral:39}
};
const impactNames = {food:"食物基础",waterSafe:"水安全",eco:"生态韧性",buffer:"灾害缓冲",industry:"产业保障"};
let selectedResource = "land";
let seenResources = new Set(["land"]);
let selectedEvent = 0;
let viewDate = new Date(2026, new Date().getMonth(), 1);
let savedDays = new Set(JSON.parse(localStorage.getItem("nature-passport") || "[]"));

function el(id){ return document.getElementById(id); }
function resourceById(id){ return resources.find(function(r){return r.id===id;}); }

function selectResource(id){
  selectedResource=id;
  seenResources.add(id);
  renderMindmap();
  renderResource();
}

function renderMindmap(){
  el("resource-nodes").innerHTML = resources.map(function(r,i){
    return '<button class="resource-node '+(r.id===selectedResource?'active':'')+'" data-resource="'+r.id+'" aria-pressed="'+(r.id===selectedResource)+'" type="button"><span class="resource-thumb sprite-'+r.id+'" aria-hidden="true"></span><span class="resource-node-copy"><strong>'+r.name+'</strong><small>'+String(i+1).padStart(2,"0")+'</small></span></button>';
  }).join("");
  el("resource-nodes").querySelectorAll("button").forEach(function(button){
    button.addEventListener("click",function(){selectResource(button.dataset.resource);});
  });
  el("explore-count").textContent="已探索 "+seenResources.size+" / 7";
  el("explore-progress-bar").style.width=(seenResources.size/7*100)+"%";
}

function renderResource(){
  var r=resourceById(selectedResource);
  el("resource-order").textContent=String(resources.indexOf(r)+1).padStart(2,"0")+" / 07";
  el("resource-status").textContent=r.status;
  el("resource-label").textContent=r.en+" · "+r.name;
  el("resource-visual-name").textContent=r.name+"资源";
  el("resource-visual-tagline").textContent=r.tagline;
  el("resource-visual").className="resource-visual sprite-"+r.id;
  el("resource-visual").setAttribute("aria-label",r.name+"资源主题影像");
  el("resource-metric").textContent=r.metric;
  el("resource-unit").textContent=r.unit;
  el("resource-year").textContent=r.year;
  el("resource-summary").textContent=r.summary;
  el("resource-features").innerHTML=r.features.map(function(x){return "<li>"+x+"</li>";}).join("");
  el("resource-problems").innerHTML=r.problems.map(function(x){return "<li>"+x+"</li>";}).join("");
  el("resource-actions").innerHTML=r.actions.map(function(x){return "<li>"+x+"</li>";}).join("");
  el("resource-source").href=r.source;
  el("resource-relations").innerHTML=r.relations.map(function(id){
    var n=resourceById(id);return '<button type="button" data-resource="'+id+'">'+n.name+' ↗</button>';
  }).join("");
  el("resource-relations").querySelectorAll("button").forEach(function(button){
    button.addEventListener("click",function(){selectResource(button.dataset.resource);});
  });
}

function renderSliders(){
  el("sliders").innerHTML=Object.keys(modelValues).map(function(key){
    return '<div class="slider-row"><div class="slider-head"><label for="slider-'+key+'">'+modelNames[key]+'<span>相对指数</span></label><output id="value-'+key+'" class="slider-value">'+modelValues[key]+'</output></div><input id="slider-'+key+'" data-key="'+key+'" type="range" min="0" max="100" step="1" value="'+modelValues[key]+'" aria-label="'+modelNames[key]+'指数"></div>';
  }).join("");
  el("sliders").querySelectorAll("input").forEach(function(input){
    input.addEventListener("input",function(){modelValues[input.dataset.key]=Number(input.value);el("value-"+input.dataset.key).textContent=input.value;clearPreset();updateModel();});
  });
}

function calculateModel(){
  var v=modelValues;
  var out={
    food:.50*v.land+.28*v.water+.10*v.grass+.07*v.ocean+.05*v.wetland,
    waterSafe:.43*v.water+.22*v.wetland+.20*v.forest+.10*v.grass+.05*v.land,
    eco:.20*v.forest+.18*v.wetland+.16*v.grass+.14*v.ocean+.12*v.water+.12*v.land+.08*v.mineral,
    buffer:.28*v.wetland+.24*v.forest+.18*v.grass+.15*v.water+.10*v.ocean+.05*v.land,
    industry:.38*v.mineral+.18*v.water+.14*v.land+.12*v.ocean+.10*v.forest+.08*v.grass
  };
  if(v.water<35){out.food-=8;out.eco-=6;out.industry-=5}
  if(v.land<35)out.food-=12;
  if(v.wetland<35){out.waterSafe-=8;out.buffer-=10}
  if(v.forest<35){out.waterSafe-=6;out.buffer-=7;out.eco-=8}
  if(v.grass<35){out.eco-=6;out.buffer-=5}
  if(v.ocean<35){out.food-=4;out.eco-=6}
  if(v.mineral<35)out.industry-=12;
  Object.keys(out).forEach(function(k){out[k]=Math.max(0,Math.min(100,Math.round(out[k])))});
  return out;
}

function gradeFor(score){
  if(score<35)return ["高风险","多项功能接近失稳，需要优先修复最弱资源。"];
  if(score<55)return ["明显承压","资源短板已向多个系统功能传导。"];
  if(score<75)return ["总体稳态","多数资源处于协同区间，系统仍需关注短板。"];
  return ["韧性较强","资源协同水平较好，能够提供更稳定的综合支撑。"];
}

function consequences(){
  var v=modelValues, list=[];
  if(v.water<35)list.push("水指数跌破35：粮食生产、生态过程与产业供水同时受压。");
  if(v.land<35)list.push("土地指数跌破35：食物基础出现明显的非线性损失。");
  if(v.wetland<35)list.push("湿地指数跌破35：蓄洪、净水与灾害缓冲能力快速下降。");
  if(v.forest<35)list.push("森林指数跌破35：水源涵养、固碳与坡地稳定性同步减弱。");
  if(v.grass<35)list.push("草原指数跌破35：防风固沙和北方生态屏障承压。");
  if(v.ocean<35)list.push("海洋指数跌破35：渔业供给和滨海生态系统受到冲击。");
  if(v.mineral<35)list.push("矿产保障跌破35：关键原材料供应链弹性显著下降。");
  var low=Object.keys(v).sort(function(a,b){return v[a]-v[b]})[0];
  if(!list.length && v[low]<55)list.push(modelNames[low]+"是当前最明显的短板，继续下降会先影响与其直接相连的系统功能。");
  if(!list.length && Object.values(v).every(function(x){return x>=75;}))list.push("七类资源均进入韧性区间，系统的协同增益最明显。");
  if(!list.length)list.push("系统没有触发高风险阈值；继续提高最弱项，比单独推高强项更有效。");
  return list;
}

function updateModel(){
  var out=calculateModel();
  var score=Math.round(Object.values(out).reduce(function(a,b){return a+b;},0)/5);
  var grade=gradeFor(score);
  el("system-score").textContent=score;
  el("score-orbit").style.setProperty("--score",score);
  el("system-grade").textContent=grade[0];
  el("system-summary").textContent=grade[1];
  el("impact-bars").innerHTML=Object.keys(out).map(function(key){
    return '<div><div class="impact-head"><span>'+impactNames[key]+'</span><b>'+out[key]+'</b></div><div class="impact-track"><div class="impact-fill" style="width:'+out[key]+'%"></div></div></div>';
  }).join("");
  el("consequence-list").innerHTML=consequences().map(function(x){return "<li>"+x+"</li>";}).join("");
}

function applyPreset(name){
  Object.assign(modelValues,presets[name]);
  Object.keys(modelValues).forEach(function(key){
    el("slider-"+key).value=modelValues[key];el("value-"+key).textContent=modelValues[key];
  });
  document.querySelectorAll(".preset").forEach(function(b){b.classList.toggle("active",b.dataset.preset===name);});
  updateModel();
}
function clearPreset(){document.querySelectorAll(".preset").forEach(function(b){b.classList.remove("active");});}

function renderTimeline(filter){
  var filtered=timelineEvents.filter(function(e){return filter==="all"||e[3]===filter;});
  el("timeline-count").textContent="显示 "+filtered.length+" / "+timelineEvents.length+" 个节点";
  el("timeline-track").innerHTML=filtered.map(function(e){
    return '<div class="timeline-item"><div class="timeline-year">'+e[0]+'</div><article><h3>'+e[1]+'</h3><p>'+e[2]+'</p><div class="event-meta"><span class="tag">'+e[4]+'</span><a class="source-link" href="'+e[5]+'" target="_blank" rel="noreferrer">查看来源 ↗</a></div></article></div>';
  }).join("");
}

function dayKey(d){return d[0]+"-"+d[1];}
function renderCalendar(){
  var y=viewDate.getFullYear(),m=viewDate.getMonth()+1;
  el("calendar-year").textContent=y;
  el("month-title").textContent=m+" 月";
  var first=(new Date(y,m-1,1).getDay()+6)%7;
  var days=new Date(y,m,0).getDate();
  var html="";
  for(var p=0;p<first;p++)html+='<span class="calendar-day outside"></span>';
  for(var d=1;d<=days;d++){
    var event=commemorations.find(function(x){return x[0]===m&&x[1]===d;});
    var idx=event?commemorations.indexOf(event):-1;
    var classes="calendar-day"+(event?" has-event":"")+(idx===selectedEvent?" selected":"")+(event&&savedDays.has(dayKey(event))?" saved":"");
    html+='<button type="button" class="'+classes+'" '+(event?'data-event="'+idx+'" aria-label="'+m+'月'+d+'日 '+event[2]+'"':'disabled')+'><span>'+d+'</span>'+(event?"<i></i>":"")+"</button>";
  }
  el("day-grid").innerHTML=html;
  el("day-grid").querySelectorAll("[data-event]").forEach(function(b){b.addEventListener("click",function(){selectedEvent=Number(b.dataset.event);renderCalendar();renderStory();});});
  var monthEvents=commemorations.filter(function(x){return x[0]===m;});
  el("month-list").innerHTML=monthEvents.length?monthEvents.map(function(x){
    var i=commemorations.indexOf(x);return '<button type="button" class="'+(i===selectedEvent?"active":"")+'" data-event="'+i+'">'+x[0]+'月'+x[1]+'日 · '+x[2]+'</button>';
  }).join(""):'<span class="calendar-year">本月暂无收录纪念日，继续翻月探索。</span>';
  el("month-list").querySelectorAll("button").forEach(function(b){b.addEventListener("click",function(){selectedEvent=Number(b.dataset.event);renderCalendar();renderStory();});});
  el("passport-count").textContent=savedDays.size;
}

function renderStory(){
  var d=commemorations[selectedEvent],key=dayKey(d),saved=savedDays.has(key);
  el("story-month").textContent=String(d[0]).padStart(2,"0")+" /";
  el("story-day").textContent=String(d[1]).padStart(2,"0");
  el("story-type").textContent=d[3];
  el("story-date").textContent=d[0]+"月"+d[1]+"日";
  el("story-title").textContent=d[2];
  el("story-desc").textContent=d[4];
  el("story-action").textContent=d[5];
  el("story-source").href=d[6];
  el("passport-button").textContent=saved?"已点亮自然护照 ✓":"点亮这一天 ＋";
  el("passport-button").classList.toggle("saved",saved);
}

function togglePassport(){
  var key=dayKey(commemorations[selectedEvent]);
  if(savedDays.has(key))savedDays.delete(key);else savedDays.add(key);
  localStorage.setItem("nature-passport",JSON.stringify(Array.from(savedDays)));
  renderCalendar();renderStory();
}

function initReveal(){
  if(matchMedia("(prefers-reduced-motion: reduce)").matches){document.querySelectorAll(".reveal").forEach(function(x){x.classList.add("visible");});return;}
  var observer=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target);}});},{threshold:.1});
  document.querySelectorAll(".reveal").forEach(function(x){observer.observe(x);});
}

renderMindmap();renderResource();renderSliders();updateModel();renderTimeline("all");
var firstRelevant=commemorations.findIndex(function(d){return d[0]>=viewDate.getMonth()+1;});
selectedEvent=firstRelevant<0?0:firstRelevant;
viewDate=new Date(2026,commemorations[selectedEvent][0]-1,1);
renderCalendar();renderStory();initReveal();

document.querySelectorAll(".preset").forEach(function(b){b.addEventListener("click",function(){applyPreset(b.dataset.preset);});});
el("next-resource").addEventListener("click",function(){
  var next=(resources.findIndex(function(r){return r.id===selectedResource;})+1)%resources.length;
  selectResource(resources[next].id);
});
el("reset-model").addEventListener("click",function(){applyPreset("balanced");});
document.querySelectorAll(".timeline-filter").forEach(function(b){b.addEventListener("click",function(){
  document.querySelectorAll(".timeline-filter").forEach(function(x){x.classList.remove("active");x.setAttribute("aria-pressed","false");});
  b.classList.add("active");b.setAttribute("aria-pressed","true");renderTimeline(b.dataset.filter);
});});
el("prev-month").addEventListener("click",function(){viewDate=new Date(viewDate.getFullYear(),viewDate.getMonth()-1,1);renderCalendar();});
el("next-month").addEventListener("click",function(){viewDate=new Date(viewDate.getFullYear(),viewDate.getMonth()+1,1);renderCalendar();});
el("today-month").addEventListener("click",function(){var now=new Date();viewDate=new Date(2026,now.getMonth(),1);renderCalendar();});
el("passport-button").addEventListener("click",togglePassport);
el("model-method-toggle").addEventListener("click",function(){
  var open=el("model-method-toggle").getAttribute("aria-expanded")==="true";
  el("model-method-toggle").setAttribute("aria-expanded",String(!open));
  el("model-method-body").hidden=open;
  el("model-method-toggle").querySelector("i").textContent=open?"＋":"−";
});
el("mobile-nav").addEventListener("click",function(){
  var open=el("nav-menu").classList.toggle("open");el("mobile-nav").setAttribute("aria-expanded",String(open));
});
el("nav-menu").querySelectorAll("a").forEach(function(a){a.addEventListener("click",function(){el("nav-menu").classList.remove("open");el("mobile-nav").setAttribute("aria-expanded","false");});});
window.addEventListener("scroll",function(){
  var max=document.documentElement.scrollHeight-innerHeight;
  el("reading-progress").style.width=(max?scrollY/max*100:0)+"%";
},{passive:true});
