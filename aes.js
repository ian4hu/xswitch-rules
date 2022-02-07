goldlog = {}
goldlog.record = function() {}
goldlog.setPageSPM = function() {}
goldlog.sendPV = function() {}
aplus_queue = []
goldlog = new Proxy(goldlog, {
  get: (target, p) => function(){},
  set: (target, p, v) => console.log(p, v)
})
aplus = goldlog;
goldlog.spm_ab="0"