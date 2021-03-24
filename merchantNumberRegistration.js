


// 这个对象是循环遍历每一个数据，nexPro是外面传入的一个函数,再把遍历到的每一个数据作为参数放入这个nextPro当中；
function RecursiveTool(nextPro) {
    this.nextPro = nextPro;
    //data必须要传,resolves不需要传
    this.recursive = function(data, index){
        var i = index ? index : 0;
        if(i >= data.length){
            return;
        }
        else{
            this.nextPro(data[i]);
            if (data[i]['subobject']) {
               this.recursive(data[i]['subobject'], 0);
            }
            i = i + 1;
            this.recursive(data, i); 
        }
    }
}
