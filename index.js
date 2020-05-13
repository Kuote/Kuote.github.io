
const quotes =['الما عندو قروش داير يقرا لي شنو؟', 'أكياس شنو إستعملوا خرتايات!', 'البيمد يدو للمؤتمر الوطنى بنقطعها ليهو','مقاطعوا الانتخابات أراذل القوم..!!','نحنا فاتحين خط ساخن مع ربنا','أحمدوا الله علي الانقاذ زمان عود الكبريت كان معدوم','الجداد حيكون الوجبة الرئيسية للشعب السوداني','الطيارة لما جات طافية النور الهناي ضرب البتاع','الحكومة ما جمعية خيرية عشان تشغل المغتربين العائدين','مرضي السرطان بنتعب في علاجهم وبنخسر قروش وفي الاخر بموتو','قبل الإنقاذ الناس كانت بتتقسم الصابونة','لو ما الانقاذ الشعب السودانى كان كلو مشى المقابر','الما عاجبو يلحس كوعه','دخل الفرد في السودان يساوي 1800 دولار في الشهر','ما عايز مجمجه ارعو بقيدكم والبفتح خشيمو بحشي ليهو تراب','كما قال تعالى العارف عزو مستريح ','نحن خير أمة أخرجت للنار! ','نحن كحكومة مافي ارجل مننا الا الله','مجانية الولادة للاطفال دون الخمسة سنوات','الشعب السودان قبل الانقاذ كانو مثل الشحاتين','قبل الانقاذ كنتو ساكنين في اوضة طين واحدة وهسي ساكنين شقق','لو شفتونا بنينا العمارات معناها نحن فسدنا','ديل شذاذ آفاق. ','انا حامشي وحيجي يوم تندموا اني خليت الوزارة.','رب ضارة نافعه, وعلى المواطنين أكل الضفادع لدرء آثار الفيضانات وبذلك سنضمن بيئه نظيفه وقيمه غذائية جيدة.','سقوط البشير يعني نهاية الدولة والحضارة السودانية','حنرفع السلع والما عاجبو يطلع الشارع ويشيل كفنه معاو','الإنقاذ لن تسقط عن طريق الواتساب وهواة الإحتجاجات'];
const authors = ['مامون حميدة', 'حسن طرحه', 'مصطفى عثمان إسماعيل','ياسر يوسف أبكر','حسبو عبد الرحمن','علي عثمان محمد طه','عبد الرحمن الخضر','عبد الرحيم محمد حسين','كرار التهامي','بحر ابو قردة','إبراهيم محمود','بدرالدين محمود','نافع علي نافع','ربيع عبدالعاطي','حميدتي','جمال عبد الوالي','عمر حسن أحمد البشير','آدم الفكي','بكري حسن صالح','مصطفى عثمان اسماعيل','الزبير احمد الحسن','الزبير محمد صالح','عمر حسن أحمد البشير','مامون حميدة','مامون حميدة','إشراقة سيد محمود','نافع علي نافع','نافع علي نافع'];
const docs = {
  quoteBox: document.querySelector('.quote__box'),
  text: document.querySelector('.text'),
  author: document.querySelector('.quote__author'),
  quoteButton: document.querySelector('.newQuote'),
  container: document.querySelector('.animate__this')
}

const colors = ['rgb(243, 156, 18)', 'rgb(52, 34, 36)', 'rgb(22, 160, 133)','rgb(115, 168, 87)','rgb(39, 174, 96)','rgb(189, 187, 153)','rgb(231, 76, 60)','rgb(155, 89, 182)']
const randomColor = (arr) => {
  const num = Math.floor(Math.random() * arr.length);
  return arr[num];
}
console.log(randomColor(colors));


const getRandom = (quotesArr, authorsArr) => {
  const randomNum = Math.floor(Math.random() * quotesArr.length);
  return [quotesArr[randomNum], authorsArr[randomNum]];
}
const animate = () => {
  const color = randomColor(colors)
  document.querySelector(".animate__this").classList.add('out')
  document.body.style.cssText = `background-color: ${color}`;
  document.querySelector('.text').style.cssText = `color:  ${color}`;  
  document.querySelector('.quote__author').style.cssText = `color:  ${color}`;  
  document.querySelector('.quote__text').style.cssText = `color:  ${color}`;  
  document.querySelector('.twitter').style.cssText = `background-color:  ${color}`;  
  document.querySelector('.newQuote').style.cssText = `background-color:  ${color}`;  
}

const renderQuote = () => {
  document.querySelector(".animate__this").classList.remove('out')
  const content = getRandom(quotes, authors);
  docs.text.textContent = content[0]
  docs.author.textContent = `${content[1]} - `;
 
}
document.querySelector('.newQuote').addEventListener('click', animate)
document.querySelector('.animate__this').addEventListener('animationend', renderQuote)



/// https://twitter.com/intent/tweet?hashtags=quotes&related&text=%22When%20everything%20seems%20to%20be%20going%20against%20you%2C%20remember%20that%20the%20airplane%20takes%20off%20against%20the%20wind%2C%20not%20with%20it.%22%20Henry%20Ford
