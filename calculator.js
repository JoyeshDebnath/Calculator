const btns=document.querySelectorAll('.btn');
const screen=document.querySelector('.cal_screen');
const clear=document.querySelector('.reset_btn');
const equals=document.querySelector('.equal_btn');


for(let i=0;i<btns.length;i++)//loop through all the buttons\
{
    btns[i].addEventListener('click',function(){
    let get_val=btns[i].getAttribute('data-num');
    screen.value=screen.value+get_val;
})};


equals.addEventListener('click', function()
{
    if(screen.value==='')//if no value is entered in console 
    {
alert('Please enter the values to calculate !!!!')
    }
    else
    {
    let get_screen_val=eval(screen.value);
    screen.value=get_screen_val;
    }
});

clear.addEventListener('click', function()
{
    screen.value='';
});
