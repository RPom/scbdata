function O(e,c) {
    function EN(x,e,c){for(var i=0,c=c||this.C,a=(x=x||'').match(new RegExp('.{1,'+1+'}','g'))||[],r='',e=e||this.E;i<a.length;i++){r+=(Array(c).join("0")+a[i].charCodeAt(0).toString(e)).slice(-1*c);}return r;};
    function DE(y,e,c){for(var i=0,c=c||this.C,a=(y=y||'').match(new RegExp('.{1,'+c+'}','g'))||[],r='',e=e||this.E;i<a.length;i++){r+=String.fromCharCode(parseInt(a[i],e));}return r;};
    this.E = e||36; this.C = c||6;this.EN = EN; this.DE=DE;
    this.$T = {
        $ :function(){
            console.log((z=DE(y=EN(x='09$*#~@８＠中切.aORD\u03A9'))) + ' <-' + y + '\n' + x + ' : ' + (z==x));
            console.log((z=DE(y=EN(x,e=36,c=4),e,c)) + ' <-' + y + '\n' + x + ' : ' + (z==x));
            console.log((z=DE(y=EN(x,e=16),e)) + ' <-' + y + '\n' + x + ' : ' + (z==x));
            console.log((z=DE(y=EN(x,e=16,c=4),e,c)) + ' <-' + y + '\n' + x + ' : ' + (z==x));
            console.log((z=DE(y=EN(x,e=16,c=2),e,c)) + ' <-' + y + '\n' + x + ' : ' + (z==x));
        }
    }.$;
}
new O().$T();
