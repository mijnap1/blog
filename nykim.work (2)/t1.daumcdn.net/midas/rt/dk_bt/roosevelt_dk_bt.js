/*! 2020-02-21 */ ! function(a) {
    function b(a) {
        var b = [],
            c = "",
            d = h.href,
            e = g.characterSet || g.charset || "",
            f = g.referrer || "";
        return i.isObject(a) && i.isString(d) ? (b.push("roo_channel_id=" + a.channel_id), b.push("roo_channel_label=" + a.channel_label), b.push("doc_url=" + encodeURIComponent(d)), b.push("doc_charset=" + encodeURIComponent(e)), b.push("doc_referer=" + encodeURIComponent(f)), b.push("jsver=1.0.0"), c = "d=" + encodeURIComponent(b.join("&"))) : c
    }

    function c(a) {
        a && (a.onload = a.onerror = function() {
            a.onload = null, a.onerror = null
        })
    }

    function d(a) {
        var b, d, e = "https://",
            f = ["wat.ad.daum.net"],
            h = "/aac",
            j = [];
        if (i.isString(a))
            for (b = 0, d = f.length; b < d; b++) j[b] = g.createElement("img"), j[b].width = 1, j[b].height = 1, c(j[b]), j[b].src = e + f[b] + h + "?" + a
    }

    function e() {
        var a, b = g.referrer || "",
            c = /(search.naver.com)|(search.yahoo.com)|(.google.)|(.bing.com)|(sc.gajai.com)|(search.zum.com)/,
            d = /([&?]|^)(q=|p=|query=|keyword=|query1=)([^&]*)&?.*/;
        return !!(i.isString(b) && (a = g.createElement("a"), a.href = b, a.hostname && a.search && c.test(a.hostname) && (d.test(a.search) || d.test(a.hash))))
    }

    function f() {
        var c, f, g, h, j = a.roosevelt_params_queue || [];
        if (i.isArray(j) && e())
            for (c = 0, f = j.length; c < f; c++) g = j[c], h = b(g), d(h)
    }
    var g = a.document,
        h = a.location,
        i = {
            isArray: function(a) {
                return a && "object" == typeof a && a instanceof Array
            },
            isObject: function(a) {
                return a && "object" == typeof a && !(a instanceof Array)
            },
            isString: function(a) {
                return "string" == typeof a && a.length > 0
            }
        };
    f()
}(window);