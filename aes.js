goldlog = {}
goldlog.record = function() {}
goldlog.setPageSPM = function() {}
goldlog.sendPV = function() {}
goldlog.spm_ab=["1", "1"]
goldlog._$ = goldlog;
goldlog.spm = {a: "1", b: "1"}

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
