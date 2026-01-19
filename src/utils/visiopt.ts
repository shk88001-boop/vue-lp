export function loadVisiOpt() {
  // remove old script if exists
  const oldScript = document.getElementById('visiopt-script')
  if (oldScript) {
    oldScript.remove()
  }

  const script = document.createElement('script')
  script.id = 'visiopt-script'
  script.async = true
  script.type = 'text/javascript'
  script.innerHTML = `
    window.visiopt_code=window.visiopt_code||(function(){
      var visi_wid=1040,
          visi_flicker_time=4000,
          visi_flicker_element='html',
          c=false,
          d=document,
          visi_fn={
            begin:function(){
              var a=d.getElementById('visi_flicker');
              if(!a){
                var a=d.createElement('style'),
                    b=visi_flicker_element
                      ? visi_flicker_element+'{opacity:0!important;background:none!important;}'
                      : '',
                    h=d.getElementsByTagName('head')[0];
                a.setAttribute('id','visi_flicker');
                a.setAttribute('type','text/css');
                if(a.styleSheet){
                  a.styleSheet.cssText=b;
                } else {
                  a.appendChild(d.createTextNode(b));
                }
                h.appendChild(a);
              }
            },
            complete:function(){
              c=true;
              var a=d.getElementById('visi_flicker');
              if(a){a.parentNode.removeChild(a);}
            },
            pack:function(a){
              var b=d.createElement('script');
              b.src=a;
              b.type='text/javascript';
              b.onerror=function(){visi_fn.complete();};
              d.getElementsByTagName('head')[0].appendChild(b);
            },
            init:function(){
              visi_fn.begin();
              setTimeout(function(){visi_fn.complete()}, visi_flicker_time);
              this.pack('https://visioptdev.com/client/js_test/vt.'+visi_wid+'.js');
              return true;
            }
          };
      window.visiopt_code_status=visi_fn.init();
      return visi_fn;
    }());
  `

  document.head.appendChild(script)
}
