class PlatInfo {
    constructor(root){
        this.root = root;
        this.$content = $(`<div class="platinfo">
            <p>深度学习平台</p>
            <p>罗华坤</p>
            <p>luohk19@mails.tsinghua.edu.cn</p>
            <button class="train">前往训练界面</button>
            <button class="res">前往结果界面</button>
        </div>`);
        this.$train = this.$content.find('.train');
        this.$res = this.$content.find('.res');
        this.root.$platform.append(this.$content);
        this.start();
    }

    start(){
        this.$train.click(function(){
            console.log("click!");
        })
    }
}

export class mainPlatform {
    constructor(id) {
        this.id = id;
        this.$platform = $('#'+id);
        this.$info = new PlatInfo(this);
    }
}