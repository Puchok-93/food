function tabs() {

    const triggers = document.querySelectorAll('.tabheader__item');
    const  tabs = document.querySelectorAll('.tabcontent');
    const triggersParent = document.querySelector('.tabheader__items');


function hideTabs() {
    tabs.forEach(tab => {
        tab.classList.add('hide');
        tab.classList.remove('show', 'fade');
    });

    triggers.forEach( trigger => {
        trigger.classList.remove('tabheader__item_active');
    });
}

function showTabs(i = 0) {
    tabs[i].classList.add('show', 'fade');
    tabs[i].classList.remove('hide');
    triggers[i].classList.add('tabheader__item_active');
}

hideTabs();
showTabs();

triggersParent.addEventListener('click', function(event) {
    const target = event.target;
    if(target && target.classList.contains('tabheader__item')) {
        triggers.forEach((item, i) => {
            if (target == item) {
                hideTabs();
                showTabs(i);
            }
        });
    }
});

}
export default tabs;