var curType = 'pc'

// 初始化
window.onload = function() {
    curType = sessionStorage.getItem('curType') ? sessionStorage.getItem('curType') : 'pc'
    chooseCurTab(curType)
}

function changeTab(val) {
    sessionStorage.setItem('curType', val)
    chooseCurTab(val)
}

// 切换PC和mobile
function chooseCurTab(val) {
    sessionStorage.setItem('curType', val)
    var tabPCId = document.getElementById('demo-tab-pc');
    var tabMobileId = document.getElementById('demo-tab-mobile');
    var pcContentId = document.getElementById('demo-pc-content');
    var mobileContentId = document.getElementById('demo-mobile-content');
    if (val === 'pc') {
        tabPCId.setAttribute('class', 'demo-tab-choose');
        tabMobileId.removeAttribute('class');
        pcContentId.style.display = 'block';
        mobileContentId.style.display = 'none';
    } else {
        tabMobileId.setAttribute('class', 'demo-tab-choose');
        tabPCId.removeAttribute('class');
        mobileContentId.style.display = 'block';
        pcContentId.style.display = 'none';
    }
}