// 滑到卡片 卡片圖 做放大效果
for (var i = 1; i <= 8; i++) {
    document.querySelector('#card0' + i).addEventListener('mousemove', function() {
        var number = this.id.substring(5);
        document.querySelector('#img0' + number).classList.add('transform');
    });

    document.querySelector('#card0' + i).addEventListener('mouseout', function() {
        var number = this.id.substring(5);
        document.querySelector('#img0' + number).classList.remove('transform');
    });
}
