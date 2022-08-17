// ২. যতগুলা ইলিমেন্টে h2 ট্যাগ আছে সেগুলাকে সিলেক্ট করে তার লেখাগুলার কালার lightblue করেদিতে পারো কিনা। 

const allH2 = document.getElementsByTagName('h2');

for(const h2 of allH2){
    h2.style.color = 'lightblue';
}

// ৩. ওই ওয়েবসাইট এ backpack আইডি দিয়ে একটা সেকশন আছে। সেই সেকশনের ব্যাকগ্রাউন্ড কালার tomato করে দিতে পারো কিনা। 
// bag section
document.getElementById('bag').style.background = 'tomato';

// ৪. card ক্লাস যতগুলা জায়গায় ইউজ করা হয়েছে সবগুলা কার্ড এর বর্ডার রেডিয়াস ৩০px করে দিতে পারো কিনা 
// card
const cards = document.getElementsByClassName('card');
for(const card of cards){
    card.style.borderRadius = '30px'
}

// ৫. কোন একটা ফাংশন লিখো। সেটার ভিতরে কনসোল লগ হবে। এবং সেই ফাংশন টা ক্লিক হ্যান্ডলার হিসেবে কোন একটা বাটনে যোগ করো
// click handler
function clickHandler(){
   console.log('hello')
};

// ৬. এইবার নতুন করে সবগুলা buy now বাটনে এমন একটা ইভেন্ট হ্যান্ডলার যোগ করো। যাতে যেকোন একটা buy now বাটনে চাপ দিলে সেটা ওয়েবসাইট থেকে রিমুভ হয়ে যায়। একটু চিন্তা করে করার চেষ্টা করো। 
// panda-buy-now-btn
 const pandaBtns = document.getElementsByClassName('panda-buy-now-btn');
 
    for(const btn of pandaBtns){
        btn.addEventListener('click', function(event){
            event.target.parentNode.removeChild(event.target);
        });
    };

// ৭. একদম নিচে একটা LET'S STAY IN TOUCH নামে একটা জিনিস আছে। সেখানে তুমি submit বাটনটা disable করে ফেলবে। তারপর কেউ যদি উপরে input ফিল্ডে যদি একজাক্টলি email শব্দটা লিখে। তাহলে বাটন একটিভ হবে। আর যদি অন্য কিছু লিখে তাহলে বাটনটা একটিভ হবে না। 

document.getElementById('exampleInputEmail1').addEventListener('keyup', function(event){
    const text = event.target.value
    const disabledButton = document.getElementById('disabled-btn');

    if(text === 'email'){
        disabledButton.removeAttribute('disabled');
    }else{
        disabledButton.setAttribute('disabled', true);
    }

});

// ৮. (অপশনাল) একটা মজার চ্যালেঞ্জ। কোন একটা ইমেজ এর উপরে mouseenter করলে সেই ইমেজটা চেইঞ্জ হয়ে যাবে। একটু গুগলে সার্চ দিয়ে দেখো। জিনিসটা কিভাবে করা যেতে পারে। 

document.getElementById('img').addEventListener('mouseenter', function(event){
    event.target.src = '/images/bags/bag-1.png';
})

// dbl clickHandler
// ৯. (অপশনাল) নিচের যে LET'S STAY IN TOUCH আছে সেখানে কোন খালি জায়গায় ডাবল ক্লিক করলে ঐটার পিছনের কালার চেইঞ্জ হয়ে যাবে। 

function dblClick(){
    document.getElementById('subscribebtn-container').style.background = 'tomato';
 
};





// let myImage = document.querySelector('img');

// myImage.onclick = function() {
//     let mySrc = myImage.getAttribute('src');
//     if(mySrc === 'images/firefox-icon.png') {
//       myImage.setAttribute('src','images/firefox2.png');
//     } else {
//       myImage.setAttribute('src','images/firefox-icon.png');
//     }
// }
