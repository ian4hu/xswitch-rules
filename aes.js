goldlog = {}
goldlog.record = function() {}
goldlog.setPageSPM = function() {}
goldlog.sendPV = function() {}
goldlog.spm_ab=["0", "0"]

aplus_queue = []
goldlog = new Proxy(goldlog, {
  get: (target, p) => function(){},
  set: (target, p, v) => target[p]=v,
})
aplus = goldlog;
