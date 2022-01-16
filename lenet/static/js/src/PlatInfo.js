class PlatInfo {
    constructor(root){
        this.root = root;
        this.$content = $(`<div class="info></div>`)
        this.$author = $('<p>luohk</p>')
        this.$content.append(this.$author);
        this.start();
    }

    start(){

    }
}