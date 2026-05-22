const darkBtn = document.getElementById('darkBtn');
const body = document.body;

// 读取本地存储主题
if(localStorage.getItem('theme') === 'dark'){
    body.classList.add('dark-mode');
    darkBtn.innerText = '☀️ 浅色模式';
}

darkBtn.addEventListener('click', ()=>{
    body.classList.toggle('dark-mode');
    if(body.classList.contains('dark-mode')){
        localStorage.setItem('theme','dark');
        darkBtn.innerText = '☀️ 浅色模式';
    }else{
        localStorage.setItem('theme','light');
        darkBtn.innerText = '🌙 暗黑模式';
    }
});
