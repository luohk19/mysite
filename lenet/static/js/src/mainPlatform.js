export class mainPlatform {
    constructor(id) {
        this.id = id;
        this.$info = new PlatInfo(this);
        console.log(this.$name);
    }
}