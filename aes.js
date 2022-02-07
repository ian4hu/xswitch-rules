goldlog = {}
goldlog.record = function() {}
goldlog.setPageSPM = function() {}
goldlog.sendPV = function() {}
goldlog.spm_ab=["1a", "1a"]
goldlog._$ = goldlog;
goldlog.spm = {a: "1a", b: "1a"}
goldlog.spm.data = goldlog.spm

aplus_queue = []
goldlog = new Proxy(goldlog, {
  get: (target, p) => {
      if (target[p]) {
          return target[p]
      }
      var v = function () {};
      v._name = p;
      return v;
  },
  set: (target, p, v) => target[p]=v,
})
aplus = goldlog;
