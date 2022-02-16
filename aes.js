goldlog = {}
goldlog.record = function() {}
goldlog.setPageSPM = function() {}
goldlog.sendPV = function() {}
goldlog.spm_ab=["1a", "1a"]
goldlog._$ = goldlog;
goldlog.spm = {a: "1a", b: "1a"}
goldlog.spm.data = goldlog.spm
goldlog.aplus_pubsub = goldlog

aplus_queue = []
goldlog_queue = aplus_queue;

aplus_queue.push = function () {};
goldlog.nameStorage = {
    _name: "nameStorage"
}
goldlog = new Proxy(goldlog, {
  get: (target, p) => {
      if (target[p]) {
          return target[p]
      }
      var v = function () {};
      v._name = p;
      v.toString = function() { return v._name };
      return v;
  },
  set: (target, p, v) => target[p]=v,
})
aplus = goldlog;
