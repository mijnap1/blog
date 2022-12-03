function getObject(target) {
    try {
        switch (typeof target) {
            case "undefined":
                return null;
            case "object":
                return target;
            default:
                return document.getElementById(target)
        }
    } catch (e) {
        return null
    }
}

function HTTPRequest() {
    switch (arguments.length) {
        case 0:
            break;
        case 1:
            this.url = arguments[0];
            break;
        default:
        case 3:
            this["async"] = arguments[2];
        case 2:
            this.method = arguments[0], this.url = arguments[1], this.charset = arguments[2]
    }
    try {
        this._request = new XMLHttpRequest
    } catch (e) {
        for (var objectNames = ["MSXML2.XMLHTTP.5.0", "MSXML2.XMLHTTP.4.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], i = 0; i < objectNames.length; i++) try {
            this._request = new ActiveXObject(objectNames[i]);
            break
        } catch (e) {}
        if (null == this._request) return null
    }
    this._properties = new Array, this._attributes = new Array, this._userData = new Array
}! function() {
    var daum, methods;
    window.daum && window.daum.extend || (daum = window.daum = {
        extend: function(dest, source, overwrite) {
            var p, ow = overwrite === undefined || overwrite;
            for (p in source) dest[p] && !ow || (dest[p] = source[p]);
            return dest
        }
    }).extend(daum, {
        version: "1.0_r193",
        Array: {
            compact: function(a) {
                if (!a) return [];
                for (var i = 0, ret = [], l = a.length; i < l; i += 1) null !== a[i] && "undefined" != typeof a[i] && ret.push(a[i]);
                return ret
            },
            each: function(a, func) {
                if (Array.prototype.forEach) return a.forEach(func);
                for (var i = 0, l = a.length; i < l; i += 1) func(a[i], i)
            },
            indexOf: [].indexOf ? function(a, _find) {
                return a.indexOf(_find)
            } : function(a, _find) {
                for (var i = 0, l = a.length; i < l; i += 1)
                    if (a[i] === _find) return i;
                return -1
            },
            contains: function(a, _find) {
                return -1 < a.indexOf(_find)
            }
        },
        Browser: {
            ua: navigator.userAgent.toLowerCase(),
            offset: {
                width: 0,
                height: 0
            },
            browserInit: function() {
                this.ie = -1 != this.ua.indexOf("msie"), this.ie_sv1 = -1 != this.ua.indexOf("sv1"), this.ie_sv2 = -1 != this.ua.indexOf("sv2"), this.ie6 = -1 != this.ua.indexOf("msie 6"), this.ie7 = -1 != this.ua.indexOf("msie 7"), this.ie8 = -1 != this.ua.indexOf("trident/4.0"), this.ff = -1 != this.ua.indexOf("firefox") && -1 == this.ua.indexOf("navigator"), this.ff2 = this.ff && -1 != this.ua.indexOf("firefox/2."), this.ff3 = this.ff && -1 != this.ua.indexOf("firefox/3."), this.sf = -1 != this.ua.indexOf("safari") && -1 == this.ua.indexOf("chrome"), this.webkit = -1 != this.ua.indexOf("applewebkit"), this.op = -1 != this.ua.indexOf("opera"), this.cr = -1 != this.ua.indexOf("chrome/"), this.ns = -1 != this.ua.indexOf("netscape") || -1 != this.ua.indexOf("firefox") && -1 != this.ua.indexOf("navigator"), this.gecko = -1 != this.ua.indexOf("gecko"), this.infopath = -1 != this.ua.indexOf("infopath"), this.etc = this.gecko && this.ff && this.ns, this.win = -1 != this.ua.indexOf("win"), this.vista = -1 != this.ua.indexOf("nt 6"), this.xp = -1 != this.ua.indexOf("nt 5.1"), this.w2k = -1 != this.ua.indexOf("nt 5.0"), this.w98 = -1 != this.ua.indexOf("windows 98"), this.mac = -1 != this.ua.indexOf("mac"), this.unix = !(this.win || this.mac), this.ipad = -1 != this.ua.indexOf("ipad;"), this.versioning()
            },
            versioning: function() {
                this.ie && (this.ie8 && (this.ie7 = this.ie6 = this.ie_sv2 = this.ie_sv1 = !1), this.ie7) && (this.ie6 = this.ie_sv2 = this.ie_sv1 = !1), this.ff && this.ff3 && (this.ff2 = !1), this.sf && this.cr && (this.sf = !1)
            }
        },
        Element: {
            cleanBlankNodes: function(el) {
                var e, i = (e = daum.$(el)).firstChild;
                try {
                    for (; 3 !== i.nodeType || /\S/.test(i.nodeValue) || e.removeChild(i), i = i.nextSibling;);
                } catch (e) {}
                return e
            },
            getChildElements: function(el) {
                var i = daum.$(el).firstChild,
                    a = [];
                try {
                    for (; 1 === i.nodeType && a.push(i), i = i.nextSibling;);
                } catch (e) {}
                return a
            },
            getElementsByClassName: function(el, cname) {
                if (0 < document.getElementsByClassName.toString().indexOf("native")) return daum.$A(el.getElementsByClassName(cname));
                var is = el == document || el == document.body || el == window;
                if (is || el.id) return daum.$$((is ? "" : "#" + el.id + " ") + "." + daum.String.trim(cname).replace(/\s+/g, "."));
                for (var nodes = daum.$(el).getElementsByTagName("*"), element = [], i = 0, l = nodes.length; i < l; i += 1) daum.Element.hasClassName(nodes[i], cname) && element.push(nodes[i]);
                return 0 < element.length ? element : []
            },
            getFirstChild: function(el) {
                for (var fchild = daum.$(el).firstChild; fchild && 1 !== fchild.nodeType;) fchild = fchild.nextSibling;
                return fchild
            },
            getLastChild: function(el) {
                for (var lchild = daum.$(el).lastChild; lchild && 1 !== lchild.nodeType;) lchild = lchild.previousSibling;
                return lchild
            },
            getNext: function(el) {
                for (var next = daum.$(el).nextSibling; next && 1 !== next.nodeType;) next = next.nextSibling;
                return next
            },
            getPrev: function(el) {
                for (var prev = daum.$(el).previousSibling; prev && 1 !== prev.nodeType;) prev = prev.previousSibling;
                return prev
            },
            getParent: function(el) {
                return daum.$(el).parentNode
            },
            getCoords: function(el, useOffset, parent) {
                for (var uo = useOffset || !1, pa = daum.$(parent) || !1, e = daum.$(el), useOffset = e.offsetWidth, parent = e.offsetHeight, coords = {
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0
                    }; e;) {
                    if (coords.left += e.offsetLeft || 0, coords.top += e.offsetTop || 0, e = e.offsetParent, uo && e) {
                        if ("BODY" == e.tagName) break;
                        if ("static" !== daum.Element.getStyle(e, "position")) break
                    }
                    if (pa && pa == e) break
                }
                return coords.right = coords.left + useOffset, coords.bottom = coords.top + parent, coords
            },
            getCoordsTarget: function(el, parent) {
                return daum.Element.getCoords(el, !1, parent)
            },
            getStyle: function(el, cssProp, mozCssProperty) {
                var cp, el = daum.$(el),
                    mozCssProperty = mozCssProperty || cssProp,
                    cssProp = "float" == cssProp.toLowerCase() ? daum.Browser.ie ? "styleFloat" : "cssFloat" : cssProp,
                    cssProp = el.currentStyle ? (cp = -1 !== cssProp.indexOf("-") ? cssProp.replace(/[\-](.)/g, function(s, t) {
                        return t.toUpperCase()
                    }) : cssProp, el.currentStyle[cp]) : (cp = /[A-Z]/.test(mozCssProperty) ? mozCssProperty.replace(/([A-Z])/g, function(s, t) {
                        return "-" + t.toLowerCase()
                    }) : mozCssProperty, document.defaultView.getComputedStyle(el, null).getPropertyValue(cp));
                return cssProp
            },
            hasClassName: function(el, cname) {
                var cnames = daum.String.trim(daum.$(el).className).replace(/\s+/g, " ").split(" "),
                    el = daum.String.trim(cname).replace(/\s+/g, " ").split(" "),
                    ret = !0;
                return daum.Array.each(el, function(item) {
                    ret = daum.Array.contains(cnames, item) && ret
                }), ret
            },
            visible: function(el) {
                el = daum.$(el);
                return !(0 === el.offsetWidth && 0 === el.offsetHeight)
            },
            show: function(el, display) {
                el = daum.$(el);
                return el.style.display = display || "block", el
            },
            hide: function(el) {
                el = daum.$(el);
                return el.style.display = "none", el
            },
            toggle: function(el, display) {
                el = daum.$(el);
                return daum.Element.visible(el) ? daum.Element.hide(el) : daum.Element.show(el, display || "block")
            },
            addClassName: function(el, cname) {
                el = daum.$(el);
                return daum.Element.hasClassName(el, cname) || (el.className = "" === daum.String.trim(el.className) ? cname : el.className + " " + cname), el
            },
            removeClassName: function(el, cname) {
                return daum.Element.replaceClassName(el, cname, "")
            },
            replaceClassName: function(el, src, tgt) {
                var e = daum.$(el),
                    temp = [],
                    el = daum.String.trim(daum.$(el).className).replace(/\s+/g, " ").split(" ");
                return daum.Array.each(el, function(cname) {
                    cname === src ? tgt && temp.push(tgt) : temp.push(cname)
                }), e.className = temp.join(" "), e
            },
            setOpacity: function(el, op) {
                el = daum.$(el);
                return el.style.filter = "alpha(opacity=" + 100 * op + ")", el.style.opacity = el.style.MozOpacity = el.style.KhtmlOpacity = op, el
            }
        },
        Event: {
            observer: [],
            EVENTID: 0,
            crossEvent: (methods = {}, document.addEventListener ? (methods.add = function(o) {
                var type = o.type;
                "mousewheel" == type.toLowerCase() && daum.Browser.ff && (type = "DOMMouseScroll"), o.src.addEventListener(type, o.handler, o.isCapture)
            }, methods.remove = function(o) {
                var type = o.type;
                "mousewheel" == type.toLowerCase() && daum.Browser.ff && (type = "DOMMouseScroll"), o.src.removeEventListener(type, o.handler, o.isCapture)
            }) : (methods.add = function(o) {
                var type = o.type;
                "dommousescroll" == type.toLowerCase() && (type = "mousewheel"), o.src.attachEvent("on" + type, o.handler)
            }, methods.remove = function(o) {
                var type = o.type;
                "dommousescroll" == type.toLowerCase() && (type = "mousewheel"), o.src.detachEvent("on" + type, o.handler)
            }), methods),
            bindedHandlerRegister: [],
            getBindedHandler: function(el, fn) {
                var bindedHandler, register = daum.Event.bindedHandlerRegister,
                    index = -1,
                    i = 0;
                for (loop = register.length; i < loop; i += 1)
                    if (register[i].src === el && register[i].handler === fn) {
                        index = i;
                        break
                    }
                return 0 <= index ? register[index].bindedHandler : (bindedHandler = daum.Function.bindAsEventListener(fn, el), register.push({
                    src: el,
                    handler: fn,
                    bindedHandler: bindedHandler
                }), bindedHandler)
            },
            addEvent: function(el, type, handler, isCapture) {
                var el = daum.$(el),
                    eid = daum.Event.EVENTID++,
                    el = {
                        src: el,
                        type: type,
                        handler: handler,
                        isCapture: isCapture || !1
                    };
                return daum.Event.observer[eid] = el, daum.Event.crossEvent.add(el), eid
            },
            removeEvent: function(el, type, handler, isCapture) {
                var observer = daum.Event.observer;
                if (!el || type || handler) {
                    var p, src = daum.$(el);
                    for (p in daum.Event.crossEvent.remove({
                            src: src,
                            type: type,
                            handler: handler,
                            isCapture: isCapture || !1
                        }), observer)
                        if (observer[p].src === src && observer[p].type === type && observer[p].handler === handler && observer[p].isCapture === (isCapture || !1)) {
                            delete daum.Event.observer[p];
                            break
                        }
                } else daum.Event.crossEvent.remove(observer[el]), delete daum.Event.observer[el]
            },
            stopObserving: function(eid) {
                daum.Event.observer[eid] && daum.Event.removeEvent(eid)
            },
            hasObserver: function(src, type) {
                if ("number" == typeof src) return !!daum.Event.observer[src];
                var p, has = !1,
                    observer = daum.Event.observer;
                for (p in observer)
                    if (observer[p].src === src && observer[p].type === type) {
                        has = !0;
                        break
                    }
                return has
            },
            stopEvent: function(e) {
                return daum.Event.stopPropagation(e), daum.Event.preventDefault(e), !1
            },
            preventDefault: function(e) {
                e = e || window.event;
                return e.preventDefault ? e.preventDefault() : e.returnValue = !1, !1
            },
            stopPropagation: function(e) {
                e = e || window.event;
                e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
            },
            GC: function() {
                return daum.Browser.ie ? function() {
                    for (var eid in daum.Event.observer) {
                        var e;
                        if ((e = daum.Event.observer[eid].src) && e.ownerDocument) try {
                            e.offsetParent || daum.Event.stopObserving(eid)
                        } catch (e) {
                            daum.Event.stopObserving(eid)
                        }
                    }
                } : function() {
                    for (var eid in daum.Event.observer) {
                        var e = daum.Event.observer[eid].src,
                            isBodyElement = !1;
                        if (e && e.ownerDocument && !e.offsetParent) {
                            do {
                                if (e === document.body) {
                                    isBodyElement = !0;
                                    break
                                }
                            } while (e = e.parentNode);
                            isBodyElement || daum.Event.stopObserving(eid)
                        }
                    }
                }
            }
        },
        Function: {
            bind: function(f) {
                var object, binded, method = f,
                    args = daum.$A(arguments);
                return args.shift(), object = args.shift(), (binded = function() {
                    return method.apply(object, args.concat(daum.$A(arguments)))
                }).__Binded = !0, binded
            },
            bindAsEventListener: function(f) {
                var object, binded, method = f,
                    args = daum.$A(arguments);
                return args.shift(), object = args.shift(), (binded = function(e) {
                    return method.apply(object, [e || window.event].concat(args))
                }).__Binded = !0, binded
            },
            interval: function(f, ms, _object) {
                _object = _object ? daum.Function.bind(f, _object) : f;
                return window.setInterval(_object, ms)
            },
            timeout: function(f, ms, _object) {
                _object = _object ? daum.Function.bind(f, _object) : f;
                return window.setTimeout(_object, ms)
            }
        },
        Fx: {},
        Number: {},
        Object: {
            isArray: function(obj) {
                return "Array" === daum.Object.getType(obj)
            },
            isBoolean: function(obj) {
                return "Boolean" === daum.Object.getType(obj)
            },
            isFunction: function(obj) {
                return "Function" === daum.Object.getType(obj)
            },
            isString: function(obj) {
                return "String" === daum.Object.getType(obj)
            },
            isNumber: function(obj) {
                return "Number" === daum.Object.getType(obj)
            },
            isObject: function(obj) {
                return "Object" === daum.Object.getType(obj)
            },
            getType: function(obj) {
                return Object.prototype.toString.call(obj).toString().match(/\[object\s(\w*)\]$/)[1]
            },
            toJSON: function(_obj) {
                return daum.toJSON(_obj)
            }
        },
        String: {
            trim: function(s) {
                return s.replace(/^\s\s*/, "").replace(/\s\s*$/, "")
            },
            replaceAll: function(s, findstr, newstr) {
                return findstr.constructor == RegExp ? s.replace(new RegExp(findstr.toString().replace(/^\/|\/$/gi, ""), "gi"), newstr) : s.split(findstr).join(newstr)
            },
            byteLength: function(s) {
                var result = 0;
                return daum.$A(s.toString()).each(function(chr) {
                    result += 3 < escape(chr).length ? 2 : 1
                }), result
            },
            cutString: function(s, limit, suff) {
                var temp, suff = suff || "",
                    _limit = limit - suff.length,
                    _byte = 0,
                    _str = "";
                return daum.$A(s.toString()).each(function(chr) {
                    temp = 3 < escape(chr).length ? 2 : 1, _byte += temp, 0 <= (_limit -= temp) && (_str += chr)
                }), _byte <= limit ? s : _str += suff
            }
        },
        $: function(obj) {
            return "string" == typeof obj ? document.getElementById(obj) : obj
        },
        $A: function(unarray) {
            if (!unarray) return [];
            if (unarray instanceof Array && !daum.Browser.op) return unarray;
            var u = "string" == typeof unarray && (daum.ie || daum.op) ? unarray.split("") : unarray;
            try {
                result = Array.prototype.slice.call(u)
            } catch (e) {
                for (var i = 0, result = [], l = unarray.length; i < l; i += 1) result.push(unarray[i])
            }
            return result
        },
        $C: function(el, _cname) {
            el = daum.$(el);
            return null !== el ? daum.Element.getElementsByClassName(el, _cname) : null
        },
        $E: function(obj) {
            obj = daum.$(obj);
            return obj && (daum.extendMethods(obj, daum.Element, !1), obj.addEvent = daum.methodize(daum.Event.addEvent), obj.removeEvent = daum.methodize(daum.Event.removeEvent)), obj
        },
        $F: function(el) {
            var i, elm, ret, el = daum.$(el) || document.getElementsByName(el)[0];
            if (!el || "INPUT" !== el.tagName && "SELECT" !== el.tagName && "TEXTAREA" !== el.tagName) return "";
            if ("radio" == el.type || "checkbox" == el.type) {
                for (i = 0, elm = document.getElementsByName(el.name), ret = new Array; i < elm.length; i += 1) elm[i].checked && ret.push(elm[i].value);
                ret = "radio" == el.type ? ret[0] : ret
            } else if ("select-multiple" == el.type)
                for (i = 0, elm = daum.Element.getChildElements(el), ret = new Array; i < elm.length; i += 1) elm[i].selected && ret.push(elm[i].value);
            else el.value && (ret = el.value);
            return ret
        },
        $T: function(tagName, node) {
            return (node || document).getElementsByTagName(tagName)
        },
        activeX: function(obj, div, isHtml) {
            var pname, param_name, t = new Date,
                isHtml = isHtml || !1,
                t = t.getMinutes().toString() + t.getSeconds() + t.getMilliseconds(),
                params = obj.param,
                useflashvar = !1,
                src = null,
                html = "<object ",
                html = (html = (html = (html = (html = (html = (html += 'id="' + (obj.id ? obj.id + '" ' : "daumActiveX" + t + '" ')) + ('name="' + (obj.name ? obj.name + '" ' : "daumActiveX" + t + '" '))) + (obj.type ? 'type="' + obj.type + '" ' : "")) + (obj.classid ? 'classid="' + obj.classid + '" ' : "")) + (obj.width ? 'width="' + obj.width + '" ' : "")) + (obj.height ? 'height="' + obj.height + '" ' : "")) + (obj.codebase ? 'codebase="' + obj.codebase + '" ' : "") + ">\r\n";
            for (pname in params) params.hasOwnProperty(pname) && (html += '<param name="' + pname + '" value="' + params[pname] + '" />\r\n');
            for (pname in html = (html = (html = (html = (html = html + "<embed " + ('id="' + (obj.id ? obj.id + '" ' : "daumActiveX" + t + '" '))) + ('name="' + (obj.name ? obj.name + '" ' : "daumActiveX" + t + '" '))) + (obj.type ? 'type="' + obj.type + '" ' : "")) + (obj.width ? 'width="' + obj.width + '" ' : "")) + (obj.height ? 'height="' + obj.height + '" ' : ""), params) params.hasOwnProperty(pname) && (param_name = pname.toLowerCase()) && ("movie" != param_name && "src" != param_name || (src = params[pname]), "flashvars" != param_name ? html += param_name + '="' + params[pname] + '" ' : useflashvar = params[pname]);
            return html += " />\r\n</object>\r\n", useflashvar && src && (html = html.replace('src="' + src + '"', 'src="' + src + (-1 == src.indexOf("?") ? "?" : "&") + useflashvar + '"')), isHtml ? html : (t = daum.$(div), (daum.Browser.ie || "application/x-shockwave-flash" == obj.type || "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" == obj.classid.toLowerCase() || daum.Browser.win && "clsid:22d6f312-b0f6-11d0-94ab-0080c74c7e95" == obj.classid.toLowerCase()) && !isHtml && (t.innerHTML = html), div = daum.Element.getFirstChild(t), daum.Browser.ie ? div : div.getElementsByTagName("embed")[0])
        },
        documentLoaded: !1,
        extendMethods: function(dest, source, overwrite) {
            var p, ow = overwrite === undefined || overwrite;
            for (p in source) dest[p] && !ow || "function" == typeof source[p] && (dest[p] = daum.methodize(source[p]));
            return dest
        },
        methodize: function(method) {
            return function() {
                return method.apply(null, [this].concat(daum.$A(arguments)))
            }
        },
        nativeExtend: function() {
            var i, natives = [
                    [daum.Object, Object],
                    [daum.String, String.prototype],
                    [daum.Number, Number.prototype],
                    [daum.Array, Array.prototype],
                    [daum.Function, Function.prototype]
                ],
                nl = natives.length;
            for (Array.prototype.isArray = !0, Number.prototype.isNumber = !0, String.prototype.isString = !0, Function.prototype.isFunction = !0, i = 0; i < nl; i += 1) daum.extendMethods(natives[i][1], natives[i][0], !1)
        },
        random: function(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min)
        },
        showFlash: function(src, width, height, div, _options) {
            var options = {
                    quality: "high",
                    wmode: "transparent",
                    bgcolor: "#FFFFFF",
                    pluginspace: "http://www.macromedia.com/go/getflashplayer",
                    allowScriptAccess: "always",
                    allowFullScreen: "true",
                    htmltext: !1
                },
                width = {
                    type: "application/x-shockwave-flash",
                    classid: "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000",
                    codebase: "http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0",
                    wmode: "transparent",
                    width: width,
                    height: height,
                    param: {
                        movie: src,
                        src: src
                    }
                };
            return daum.extend(options, _options || {}), daum.extend(width.param, options), -1 != location.toString().indexOf("https://") && (width.codebase = width.codebase.replace("http://", "https://")), daum.activeX(width, div, options.htmltext)
        }
    })
}(), daum.Browser.browserInit(), document.getElementsByClassName || (document.getElementsByClassName = daum.methodize(daum.Element.getElementsByClassName)), String.prototype.trim && (daum.String.trim = function(s) {
    return s.trim()
}), daum.extend(daum, {
    createElement: function(cond, attr) {
        var tag, ret, i, opts = "",
            stack = daum.HTMLStack;
        if (attr) {
            for (i in attr) opts += i + '="' + attr[i] + '" ';
            tag = "<" + cond + " " + opts + "></" + cond + ">"
        } else tag = daum.String.startsWith(cond, "<") ? cond : "<" + cond + "></" + cond + ">";
        try {
            if (stack.innerHTML = tag, 1 !== (ret = stack.removeChild(stack.firstChild)).nodeType) throw {
                message: "shit browser!"
            };
            return ret
        } catch (e) {
            return (cond = {
                tbody: ["<table>", "</table>"],
                tr: ["<table><tbody>", "</tbody></table>"],
                td: ["<table><tbody><tr>", "</tr></tbody></table>"],
                option: ["<select>", "</select>"]
            })[ret = tag.match(/\w+/).toString().toLowerCase()] ? (stack.innerHTML = cond[ret][0] + tag + cond[ret][1], stack.removeChild(stack.firstChild).getElementsByTagName(ret)[0]) : document.createElement(ret)
        }
    },
    loadedScripts: {},
    loadTimer: {},
    load: function(jsurl, onsuccess, options) {
        if (daum.loadedScripts[jsurl]) return onsuccess && onsuccess(), !1;
        var p, s = document.createElement("script");
        for (p in s.type = "text/javascript", options) options.hasOwnProperty(p) && s.setAttribute(p, options[p]);
        return s.src = jsurl, daum.$T("head")[0].appendChild(s), !!onsuccess && (s.onreadystatechange = function() {
            "loaded" != this.readyState && "complete" != this.readyState || daum.loadedScripts[jsurl] || (daum.loadedScripts[jsurl] = !0, onsuccess())
        }, s.onload = function() {
            daum.loadedScripts[jsurl] || (daum.loadedScripts[jsurl] = !0, onsuccess())
        }, !0)
    },
    urlParameter: function() {
        for (var t, r = {}, a = location.search.substr(1).split("&"), i = 0, l = a.length; i < l; i += 1) r[(t = a[i].split("="))[0]] = t[1];
        return r
    }(),
    getParam: function(_name) {
        return this.urlParameter[_name] || null
    },
    useHTMLPrototype: (daum.HTMLFragment = document.createDocumentFragment ? document.createDocumentFragment() : document.createElement("div"), daum.HTMLPrototype = document.createElement("div"), daum.HTMLStack = document.createElement("div"), daum.HTMLPrototype.id = "daum_html_prototype", daum.HTMLStack.id = "daum_html_stack", daum.HTMLFragment.appendChild(daum.HTMLPrototype), daum.HTMLFragment.appendChild(daum.HTMLStack), daum.HTMLPrototype.style.position = daum.HTMLStack.style.position = "absolute", daum.HTMLPrototype.style.left = daum.HTMLStack.style.left = daum.HTMLPrototype.style.top = daum.HTMLStack.style.top = "-10000px", !0),
    toJSON: function(obj) {
        return JSON.stringify(obj)
    },
    xmlToObject: function(xmlDocument) {
        var xmlDocument = xmlDocument.documentElement,
            builder = function(node) {
                for (var name, value, obj = {}, cNodes = daum.getChildElements(node), i = 0, l = cNodes.length; i < l; i += 1) {
                    name = cNodes[i].nodeName, value = 0 < daum.getChildElements(cNodes[i]).length ? builder(cNodes[i]) : null == cNodes[i].firstChild ? "" : cNodes[i].firstChild.nodeValue, obj[name] != undefined || 1 < node.getElementsByTagName(name).length ? (obj[name] == undefined && (obj[name] = []), obj[name].push(value)) : obj[name] = value;
                    for (var j = 0; j < cNodes[i].attributes.length; j += 1) obj[name + "@" + cNodes[i].attributes[j].nodeName] = (cNodes[i].attributes[j].nodeValue || "").toString()
                }
                return obj
            };
        return builder(xmlDocument)
    },
    jsonToObject: function(jsonStr) {
        return JSON.parse(jsonStr)
    }
}), daum.extend(daum.Array, {
    copy: function(a) {
        for (var p, i = 0, clone = [], l = a.length; i < l; i += 1)
            if (a[i].constructor == a.constructor) clone[i] = daum.Array.copy(a[i]);
            else if ("object" == typeof a[i])
            if ("object" == typeof a[i].valueOf())
                for (p in clone[i] = a[i].constructor(), a[i]) clone[i][p] = a[i][p];
            else clone[i] = a[i].constructor(a[i].valueOf());
        else clone[i] = a[i];
        return clone
    },
    map: function(a, f) {
        if ("function" == typeof Array.prototype.map && 0 < Array.prototype.map.toString().indexOf("native")) return a.map(f);
        for (var b = [], i = 0, l = a.length; i < l; i += 1) b[i] = f(a[i], i);
        return b
    },
    size: function(a) {
        return daum.Array.compact(a).length
    },
    uniq: function(a) {
        for (var ret = [], i = 0, ret = [], l = a.length; i < l; i += 1) daum.Array.contains(ret, a[i]) || ret.push(a[i]);
        return ret
    },
    getFirst: function(a) {
        return a[0]
    },
    getLast: function(a) {
        return a[a.length - 1]
    }
}), daum.extend(daum.Browser, {
    getWindowSize: function() {
        return {
            width: (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 1003) - 2,
            height: (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 650) - 2
        }
    },
    getScrollOffsets: function() {
        return {
            left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
            top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        }
    },
    setCookie: function(name, value, expires) {
        var d = new Date,
            day = "";
        expires && (d.setDate(d.getDate() + expires), day = "expires=" + d.toGMTString() + ";"), document.cookie = name + "=" + escape(value) + "; path=/;" + day
    },
    getCookie: function(name) {
        var cookieStr = ";" + document.cookie.replace(/ /g, "") + ";",
            name = ";" + name + "=",
            valueStart = cookieStr.indexOf(name);
        if (-1 != valueStart) return name = cookieStr.indexOf(";", valueStart += name.length), unescape(cookieStr.substr(valueStart, name - valueStart))
    },
    delCookie: function(name) {
        document.cookie = name + "=;expires=Fri, 31 Dec 1987 23:59:59 GMT;"
    },
    setOffset: function() {
        var br = daum.Browser,
            ow = 0,
            oh = 0;
        br.ie_sv1 ? (ow = 10, oh = br.infopath ? 58 : 29) : br.ie7 ? (ow = 10, oh = 81) : br.etc ? (ow = br.mac ? 0 : 6, oh = br.mac ? 68 : 54) : br.ff2 ? (ow = br.mac ? 0 : 6, oh = br.mac ? 18 : br.infopath ? 54 : 49) : br.ff3 ? (ow = br.mac ? 0 : 8, oh = br.mac ? 68 : br.infopath ? 85 : 75) : br.sf ? (ow = br.mac ? 0 : 4, oh = br.mac ? 23 : 27) : br.ns ? (ow = br.mac ? 0 : 6, oh = br.mac ? 18 : 54) : br.op && (ow = br.mac ? 0 : 9, oh = br.mac ? 36 : 49), br.offset.width = ow, br.offset.height = oh
    }(),
    resizePop: function(w, h) {
        h = "object" == typeof w ? w.offsetHeight : h, w = "object" == typeof w ? w.offsetWidth : w;
        window.resizeTo(w + daum.Browser.offset.width, h + daum.Browser.offset.height)
    },
    popup: function(url, w, h, _options) {
        var options = {
                name: "daumPopup",
                scroll: 0,
                resize: 0,
                status: 0
            },
            s = function(a) {
                return a && "no" != a ? "yes" : "no"
            };
        return daum.extend(options, _options || {}, !0), _options = "width=" + w + ",height=" + h + ",status=" + s(options.status), _options += ",resizable=" + s(options.resize) + ",scrollbars=" + s(options.scroll), window.open(url, options.name, _options)
    }
}), daum.extend(daum.Function, {
    callBack: function(f) {
        var func, ret, that = f,
            args = daum.$A(arguments);
        return args.shift(), func = args.shift(),
            function() {
                return args = args.concat(daum.$A(arguments)), ret = that.apply(null, args), func.apply(null, args), ret
            }
    },
    callFore: function(f) {
        var func, that = f,
            args = daum.$A(arguments);
        return args.shift(), func = args.shift(),
            function() {
                return args = args.concat(daum.$A(arguments)), func(args), that(args)
            }
    },
    inherit: function(f, parent, members) {
        var c, s = function() {};
        return s.prototype = parent.prototype, f.prototype = new s, (f.prototype.constructor = f).prototype.parent = (parent.prototype.parent || []).concat(parent), f._parent = parent, c = f.prototype.parent.length, f.prototype.$super = function() {
            var pConstructor = this.constructor.prototype.parent[--c];
            pConstructor.apply(this, arguments), c = 0 == c || -1 == pConstructor.toString().indexOf("this.$super(") ? this.constructor.prototype.parent.length : c
        }, members && daum.Function.members(f, members), f
    },
    members: function(f, _members) {
        var name, fp = f._parent || f;
        for (name in _members) f.prototype[name] = "function" == typeof _members[name] ? (fp.prototype[name] ? function(name, fn) {
            return -1 < fn.toString().indexOf("this.$super(") ? function() {
                return this.$prev_super = this.$super, this.$super = function() {
                    return this.$super = this.$prev_super, fp.prototype[name].apply(this, arguments)
                }, fn.apply(this, arguments)
            } : function() {
                return fn.apply(this, arguments)
            }
        } : function(name, fn) {
            if (-1 < fn.toString().indexOf("this.$super(")) throw new Error(name + " function is not defined in " + f);
            return function() {
                return fn.apply(this, arguments)
            }
        })(name, _members[name]) : _members[name];
        return f
    },
    method: function(f, name, impl) {
        var fn, fp = f._parent || f;
        return f.prototype[name] = "function" == typeof impl ? fp.prototype[name] ? function(name, fn) {
            return function() {
                return this.$super = function() {
                    return fp.prototype[name].apply(this, arguments)
                }, fn.apply(this, arguments)
            }
        }(name, impl) : (fn = impl, function() {
            return this.$super = function() {
                return !0
            }, fn.apply(this, arguments)
        }) : impl, f
    }
}), daum.createFunction = function(param, body) {
    for (var statement = "return function(", i = 0; i < param.length; i++) statement += param[i] + ",";
    return statement = (statement = statement.replace(/,$/, "")) + "){" + body + "}", new Function(statement)()
}, daum.extend(daum.Fx, {
    running: {},
    parse: function(value, key, el) {
        "opacity" === key && daum.ie ? value = value === undefined ? 1 : value : "transparent" === value || value.startsWith("rgba") ? value = "rgb(255,255,255)" : "auto" === value && (value = daum.String.px(el["scroll" + key.charAt(0).toUpperCase() + key.substr(1)]));
        key = parseFloat(value), el = value.toString().replace(/^\-?[\d\.]+/, "");
        return {
            value: isNaN(key) ? el : key,
            unit: isNaN(key) ? el.startsWith("rgb") || el.startsWith("#") ? "color" : "" : el
        }
    },
    normalize: function(style) {
        var v, tgt, p, rules = {},
            st = "object" == typeof style ? "" : style,
            parseEl = document.createElement("div"),
            props = "borderStyle backgroundColor borderBottomColor borderBottomWidth borderLeftColor borderLeftWidth borderRightColor borderRightWidth borderSpacing borderTopColor borderTopWidth bottom color fontSize fontWeight height left letterSpacing lineHeight marginBottom marginLeft marginRight marginTop maxHeight maxWidth minHeight minWidth opacity outlineColor outlineOffset outlineWidth paddingBottom paddingLeft paddingRight paddingTop right textIndent top width wordSpacing zIndex".split(" "),
            i = props.length;
        if (parseEl.innerHTML = '<div style="' + st + '"></div>', tgt = parseEl.childNodes[0], "" === st)
            for (p in style) tgt.style[p] = style[p].toString();
        for (; i--;)(v = tgt.style[props[i]]) && (rules[props[i]] = this.parse(v, props[i]));
        return rules
    },
    s: function(str, p, c) {
        return str.substr(p, c || 1)
    },
    stop: function(el, callback) {
        clearInterval(this.running[el.id]), delete daum.Fx.running[el.id], callback && callback(el), el.id = el.id.toString().startsWith("__t") ? "" : el.id
    },
    color: function(source, target, pos) {
        for (var j, c, tmp, i = 2, v = [], r = []; j = 3, c = arguments[i - 1], i--;)
            if ("r" === this.s(c, 0))
                for (c = c.match(/\d+/g); j--;) v.push(~~c[j]);
            else
                for (4 === c.length && (c = "#" + this.s(c, 1) + this.s(c, 1) + this.s(c, 2) + this.s(c, 2) + this.s(c, 3) + this.s(c, 3)); j--;) v.push(parseInt(this.s(c, 1 + 2 * j, 2), 16));
        for (; j--;) r.push((tmp = ~~(v[j + 3] + (v[j] - v[j + 3]) * pos)) < 0 ? 0 : 255 < tmp ? 255 : tmp);
        return "rgb(" + r.join(",") + ")"
    },
    animate: function(elem, styles, options) {
        var prop, el = daum.$(elem),
            opts = options || {},
            target = this.normalize(styles),
            comp = el.currentStyle || getComputedStyle(el, null),
            current = {},
            start = +new Date,
            dur = (opts.duration && opts.duration <= 10 ? 1e3 * opts.duration : opts.duration) || 700,
            finish = start + dur,
            easing = opts.easing || function(t, b, c, d) {
                return -c * (t /= d) * (t - 2) + b
            };
        for (prop in el.id = el.id || "__t" + +new Date + daum.random(1, 1e4), daum.ie6 && (el.style.zoom = "1"), this.running[el.id] && (clearInterval(this.running[el.id]), delete daum.Fx.running[el.id]), target) current[prop] = this.parse(comp[prop], prop, el);
        daum.toJSON(current) === daum.toJSON(target) ? this.stop(el, opts.callback) : (elem = setInterval(function() {
            var time = +new Date;
            for (prop in target) {
                try {
                    el.style[prop] = "color" === target[prop].unit ? daum.Fx.color(current[prop].value, target[prop].value, easing(time - start, 0, 1, dur)) : easing(time - start, current[prop].value, target[prop].value - current[prop].value, dur).toFixed(3) + target[prop].unit
                } catch (e) {
                    el.style[prop] = target[prop].value, delete target[prop]
                }
                "opacity" === prop && daum.ie && (el.style.filter = "alpha(opacity=" + 100 * el.style[prop] + ")")
            }
            if (finish < time) {
                for (prop in target) el.style[prop] = "color" === target[prop].unit ? daum.Fx.color(current[prop].value, target[prop].value, 1) : target[prop].value + target[prop].unit;
                this.stop(el, opts.callback)
            }
        }.bind(this), 13), this.running[el.id] = elem)
    },
    scrollTo: function(elem, options) {
        var elem = daum.$E(elem),
            options = options || {},
            currentTop = daum.ie ? document.documentElement.scrollTop : window.pageYOffset,
            start = +new Date,
            toTop = elem.getCoords().top + (options.offset || 0),
            dur = options.duration || 700,
            finish = start + dur,
            easing = options.easing || function(t, b, c, d) {
                return -c * (t /= d) * (t - 2) + b
            },
            effect = setInterval(function() {
                var time = +new Date;
                window.scrollTo(0, easing(time - start, currentTop, toTop - currentTop, dur)), finish < time && (window.scrollTo(0, toTop), clearInterval(effect))
            }, 13)
    }
}), daum.extend(daum.Element, {
    setLeft: function(el, _left, isOffset) {
        return daum.Element.setStyleProperty(el, "left", _left, isOffset)
    },
    setTop: function(el, _top, isOffset) {
        return daum.Element.setStyleProperty(el, "top", _top, isOffset)
    },
    setWidth: function(el, _width, isOffset) {
        return daum.Element.setStyleProperty(el, "width", _width, isOffset)
    },
    setHeight: function(el, _height, isOffset) {
        return daum.Element.setStyleProperty(el, "height", _height, isOffset)
    },
    setPosition: function(el, _left, _top, isOffset) {
        return daum.Element.setStyleProperty(el, "left", _left, isOffset), daum.Element.setStyleProperty(el, "top", _top, isOffset)
    },
    setSize: function(el, _width, _height, isOffset) {
        return daum.Element.setStyleProperty(el, "width", _width, isOffset), daum.Element.setStyleProperty(el, "height", _height, isOffset)
    },
    setStyleProperty: function(el, name, val, isOffset) {
        el = daum.$(el), isOffset = isOffset ? isNaN(parseInt(el.style[name])) ? parseInt(el["offset" + name.replace(/^(.)/g, function(s, t) {
            return t.toUpperCase()
        })]) + val : parseInt(el.style[name]) + val : val;
        return el.style[name] = daum.String.px(isOffset), el
    },
    setLeftByOffset: function(el, val) {
        return daum.Element.setLeft(el, val, !0)
    },
    setTopByOffset: function(el, val) {
        return daum.Element.setTop(el, val, !0)
    },
    setWidthByOffset: function(el, val) {
        return daum.Element.setWidth(el, val, !0)
    },
    setHeightByOffset: function(el, val) {
        return daum.Element.setHeight(el, val, !0)
    },
    setPositionByOffset: function(el, _l, _t) {
        return daum.Element.setPosition(el, _l, _t, !0)
    },
    setSizeByOffset: function(el, _w, _h) {
        return daum.Element.setSize(el, _w, _h, !0)
    },
    posHide: function(el) {
        el = daum.$(el);
        return daum.Element.setPosition(el, -1e4, -1e4), el
    },
    setCssText: daum.Browser.ie ? function(e, _csstext) {
        e.style.cssText = _csstext
    } : function(e, _csstext) {
        e.setAttribute("style", _csstext)
    },
    setPngOpacity: daum.Browser.ie6 ? function(el, src, method) {
        el = daum.$(el);
        el.style.filter = 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + src + '", sizingMethod="' + (method || "image") + '")', "" != el.style.background && (el.style.background = "none"), "img" == el.tagName.toLowerCase() && (el.src = "//i1.daumcdn.net/imap/defaultimg/transparent.gif")
    } : function(el, src, method) {
        method = "scale" == method ? "repeat" : "no-repeat", el = daum.$(el);
        "img" != el.tagName.toLowerCase() ? el.style.background = "url(" + src + ") " + method : el.src = src
    },
    setStyle: function(el, styles, opt) {
        if (opt) return daum.Element.setStyleProperty(el, styles, opt, !1);
        var property, opt = daum.$(el),
            elStyle = opt.style;
        if (!(styles.length < 1))
            if (daum.Object.isString(styles)) elStyle.cssText += ";" + styles;
            else if (daum.Object.isObject(styles))
            for (property in styles) elStyle["float" == property || "cssFloat" == property ? undefined == elStyle.styleFloat ? "cssFloat" : "styleFloat" : property] = styles[property];
        return opt
    },
    destroy: function(el) {
        var gbId = "__daumGB",
            garbageBin = daum.$(gbId),
            el = daum.$(el);
        el.id !== gbId && (garbageBin || (garbageBin = daum.createElement("div", {
            id: gbId,
            style: "display:none;"
        }), document.body.appendChild(garbageBin)), garbageBin.appendChild(el), garbageBin.innerHTML = "")
    }
}), daum.extend(daum.Event, {
    getWheel: function(ev) {
        var ev = ev || window.event,
            delta = 0;
        return ev.wheelDelta ? delta = ev.wheelDelta / 120 : ev.detail && (delta = -ev.detail / 3), delta
    },
    getMouseButton: function(ev) {
        ev = (ev || window.event).button;
        return {
            left: daum.Browser.ie ? 1 === ev : 0 === ev,
            middle: daum.Browser.ie ? 4 === ev : 1 === ev,
            right: 2 == ev
        }
    },
    getElement: function(ev) {
        ev = ev || window.event;
        return ev.srcElement || ev.target
    }
}), daum.extend(daum.Number, {
    px: function(st) {
        return daum.String.px(st)
    },
    fillZero: function(n, cipher) {
        var c = cipher || 0,
            ret = n.toString();
        if (!(c < ret.length))
            for (; ret.length < c;) ret = "0" + ret;
        return ret
    },
    toInt: function(n, l) {
        return daum.String.toInt(n, l)
    },
    toFloat: function(n) {
        return daum.String.toFloat(n)
    }
}), daum.extend(daum.String, {
    empty: function(s) {
        return daum.String.isEmpty(s)
    },
    isEmpty: function(s) {
        return !s || 0 === s.length
    },
    px: function(st) {
        var ret = parseInt(st);
        return isNaN(ret) ? st : ret + "px"
    },
    removeCR: function(s) {
        return s ? daum.String.replaceAll(s, /\n|\r/, "") : null
    },
    toInt: function(n, l) {
        return parseInt(n, l || 10)
    },
    toFloat: function(n) {
        return parseFloat(n)
    },
    startWith: function(s, st) {
        return daum.String.startsWith(s, st)
    },
    startsWith: function(s, st) {
        return 0 === s.indexOf(st)
    },
    endWith: function(s, st) {
        return daum.String.endsWith(s, st)
    },
    endsWith: function(s, se) {
        var l;
        return 0 <= (l = s.length - se.length) && s.lastIndexOf(se) === l
    },
    cutPixel: function(s, _px, suffix) {
        if (!daum.documentLoaded) return !1;
        var _str, i, suff = suffix || "";
        for (document.body.appendChild(daum.HTMLPrototype), daum.HTMLPrototype.innerHTML = suff, _px -= daum.HTMLPrototype.offsetWidth, daum.HTMLPrototype.innerHTML = "", _str = [], i = 0; i < s.length; i += 1) {
            if (daum.HTMLPrototype.innerHTML += s.charAt(i), !(_px > daum.HTMLPrototype.offsetWidth)) {
                _str.push(suff);
                break
            }
            _str.push(s.charAt(i))
        }
        return daum.HTMLFragment.appendChild(daum.HTMLPrototype), _str.join("")
    },
    escape: function(s, flag) {
        return flag ? daum.String.escapeHTML(s) : daum.String.unescapeHTML(s)
    },
    escapeHTML: function(s) {
        return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
    },
    unescapeHTML: function(s) {
        return daum.String.stripTags(s).replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'")
    },
    toHTML: function(s) {
        return daum.String.unescapeHTML(s)
    },
    stripTags: function(s) {
        return s.replace(/<\w+(\s+("[^"]*"|'[^']*'|[^>])+)?>|<\/\w+>/gi, "")
    },
    stripTag: function(s) {
        return daum.String.stripTags(s)
    }
}), daum.Ajax = function(_options) {
    this.options = {
        url: "",
        method: "get",
        "async": !0,
        timeout: 5e3,
        paramString: "",
        encoding: "utf-8",
        onsuccess: function() {},
        onfailure: function() {},
        onloading: function() {},
        ontimeout: function() {},
        onabort: function() {},
        headers: {},
        link: "ignore"
    }, daum.extend(this.options, _options || {}), this.init()
}, daum.Ajax.prototype = {
    init: function() {
        if (window.XMLHttpRequest) this.XHR = new XMLHttpRequest;
        else if (window.ActiveXObject) try {
            this.XHR = new ActiveXObject("Msxml2.XMLHTTP")
        } catch (e) {
            try {
                this.XHR = new ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {
                this.XHR = null
            }
        }
        if (!this.XHR) return !1;
        this.running = !1
    },
    request: function(url1, options) {
        if (this.running) {
            if ("cancel" !== this.options.link) return;
            this.abort()
        }
        this.setOptions(options);
        options = url1 || this.options.url;
        0 < this.options.paramString.length && "get" == this.options.method && (options = options + (0 < options.indexOf("?") ? "&" : "?") + this.options.paramString), this.open(options)
    },
    open: function(url) {
        this.running = !0, this.options["async"] && (this.XHR.onreadystatechange = daum.Function.bindAsEventListener(this.stateHandle, this)), this.options.timer = daum.Function.timeout(this.abort, this.options.timeout, this), this.XHR.open(this.options.method, url, this.options["async"]);
        var v, headers = this.options.headers;
        for (v in headers) this.XHR.setRequestHeader(v, headers[v]);
        this.XHR.send(this.options.paramString), this.options["async"] || this.stateHandle()
    },
    abort: function() {
        this.XHR && (this.XHR.abort(), this.callAbort(), this.running = !1)
    },
    stateHandle: function(e) {
        switch (this.XHR.readyState) {
            case 4:
                window.clearTimeout(this.options.timer), this.options.timer = null, 200 == this.XHR.status || 304 == this.XHR.status ? this.callSuccess() : 400 <= this.XHR.status && this.callFailure(this.XHR.status), this.running = !1;
                break;
            case 1:
                this.callLoading()
        }
    },
    callSuccess: function() {
        this.options.onsuccess(this.XHR)
    },
    callFailure: function() {
        this.options.onfailure(this.XHR)
    },
    callLoading: function() {
        this.options.onloading(this.XHR)
    },
    callTimeout: function() {
        this.options.ontimeout(this.XHR)
    },
    callAbort: function() {
        this.options.onabort(this.XHR)
    },
    setOptions: function(options) {
        daum.extend(this.options, options || {}), this.options.method = this.options.method.toLowerCase(), this.setHeader("charset", this.options.encoding), "post" == this.options.method && this.setHeader("Content-Type", "application/x-www-form-urlencoded")
    },
    setHeader: function(key, value) {
        return "object" == typeof key ? daum.extend(this.options.headers, key || {}, !0) : this.options.headers[key] = value, this
    },
    getHeader: function(key) {
        return this.XHR.getResponseHeader(key)
    }
}, daum.Ajax.xmlToObject = function(xmlDocument) {
    return daum.xmlToObject(xmlDocument)
}, daum.Ajax.jsonToObject = function(jsonStr) {
    return daum.jsonToObject(jsonStr)
}, daum.Template = function(template) {
    this.template = template
}, daum.Template.prototype = {
    evaluate: function(data) {
        return this.template.replace(/#\{([A-Z_][\dA-Z_]*(?:\.[A-Z_][\dA-Z_]*)*)?\}/gi, function(_, s) {
            for (var a = s ? s.split(".") : "", v = data || ""; a.length;)
                if ((v = v[a.shift()]) === undefined || null === v) return "";
            return v
        })
    },
    toElement: function(data) {
        return daum.createElement(this.evaluate(data))
    }
}, ! function() {
    var type, chunker = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?/g,
        done = 0,
        toString = Object.prototype.toString,
        hasDuplicate = !1,
        Sizzle = function(selector, context, results, seed) {
            results = results || [];
            var origContext = context = context || document;
            if (1 !== context.nodeType && 9 !== context.nodeType) return [];
            if (selector && "string" == typeof selector) {
                var m, checkSet, extra, parts = [],
                    prune = !0,
                    contextXML = isXML(context);
                for (chunker.lastIndex = 0; null !== (m = chunker.exec(selector));)
                    if (parts.push(m[1]), m[2]) {
                        extra = RegExp.rightContext;
                        break
                    }
                if (1 < parts.length && origPOS.exec(selector))
                    if (2 === parts.length && Expr.relative[parts[0]]) set = posProcess(parts[0] + parts[1], context);
                    else
                        for (set = Expr.relative[parts[0]] ? [context] : Sizzle(parts.shift(), context); parts.length;) selector = parts.shift(), Expr.relative[selector] && (selector += parts.shift()), set = posProcess(selector, set);
                else if (context = !seed && 1 < parts.length && 9 === context.nodeType && !contextXML && Expr.match.ID.test(parts[0]) && !Expr.match.ID.test(parts[parts.length - 1]) ? ((ret = Sizzle.find(parts.shift(), context, contextXML)).expr ? Sizzle.filter(ret.expr, ret.set) : ret.set)[0] : context) {
                    var ret, set = (ret = seed ? {
                        expr: parts.pop(),
                        set: makeArray(seed)
                    } : Sizzle.find(parts.pop(), 1 !== parts.length || "~" !== parts[0] && "+" !== parts[0] || !context.parentNode ? context : context.parentNode, contextXML)).expr ? Sizzle.filter(ret.expr, ret.set) : ret.set;
                    for (0 < parts.length ? checkSet = makeArray(set) : prune = !1; parts.length;) {
                        var cur = parts.pop(),
                            pop = cur;
                        Expr.relative[cur] ? pop = parts.pop() : cur = "", null == pop && (pop = context), Expr.relative[cur](checkSet, pop, contextXML)
                    }
                } else checkSet = parts = [];
                if (!(checkSet = checkSet || set)) throw "Syntax error, unrecognized expression: " + (cur || selector);
                if ("[object Array]" === toString.call(checkSet))
                    if (prune)
                        if (context && 1 === context.nodeType)
                            for (var i = 0; null != checkSet[i]; i++) checkSet[i] && (!0 === checkSet[i] || 1 === checkSet[i].nodeType && contains(context, checkSet[i])) && results.push(set[i]);
                        else
                            for (i = 0; null != checkSet[i]; i++) checkSet[i] && 1 === checkSet[i].nodeType && results.push(set[i]);
                else results.push.apply(results, checkSet);
                else makeArray(checkSet, results);
                extra && (Sizzle(extra, origContext, results, seed), Sizzle.uniqueSort(results))
            }
            return results
        },
        Expr = (Sizzle.uniqueSort = function(results) {
            if (sortOrder && (hasDuplicate = !1, results.sort(sortOrder), hasDuplicate))
                for (var i = 1; i < results.length; i++) results[i] === results[i - 1] && results.splice(i--, 1);
            return results
        }, Sizzle.matches = function(expr, set) {
            return Sizzle(expr, null, null, set)
        }, Sizzle.find = function(expr, context, isXML) {
            var set;
            if (!expr) return [];
            for (var i = 0, l = Expr.order.length; i < l; i++) {
                var match, type = Expr.order[i];
                if (match = Expr.match[type].exec(expr)) {
                    var left = RegExp.leftContext;
                    if ("\\" !== left.substr(left.length - 1) && (match[1] = (match[1] || "").replace(/\\/g, ""), null != (set = Expr.find[type](match, context, isXML)))) {
                        expr = expr.replace(Expr.match[type], "");
                        break
                    }
                }
            }
            return {
                set: set = set || context.getElementsByTagName("*"),
                expr: expr
            }
        }, Sizzle.filter = function(expr, set, inplace, not) {
            for (var match, old = expr, result = [], curLoop = set, isXMLFilter = set && set[0] && isXML(set[0]); expr && set.length;) {
                for (var type in Expr.filter)
                    if (null != (match = Expr.match[type].exec(expr))) {
                        var item, filter = Expr.filter[type],
                            anyFound = !1;
                        if (curLoop == result && (result = []), Expr.preFilter[type])
                            if (match = Expr.preFilter[type](match, curLoop, inplace, result, not, isXMLFilter)) {
                                if (!0 === match) continue
                            } else anyFound = found = !0;
                        if (match)
                            for (var found, pass, i = 0; null != (item = curLoop[i]); i++) item && (pass = not ^ !!(found = filter(item, match, i, curLoop)), inplace && null != found ? pass ? anyFound = !0 : curLoop[i] = !1 : pass && (result.push(item), anyFound = !0));
                        if (found !== undefined) {
                            if (inplace || (curLoop = result), expr = expr.replace(Expr.match[type], ""), anyFound) break;
                            return []
                        }
                    }
                if (expr == old) {
                    if (null == anyFound) throw "Syntax error, unrecognized expression: " + expr;
                    break
                }
                old = expr
            }
            return curLoop
        }, Sizzle.selectors = {
            order: ["ID", "NAME", "TAG"],
            match: {
                ID: /#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,
                PSEUDO: /:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/
            },
            attrMap: {
                "class": "className",
                "for": "htmlFor"
            },
            attrHandle: {
                href: function(elem) {
                    return elem.getAttribute("href")
                }
            },
            relative: {
                "+": function(checkSet, part, isXML) {
                    var isPartStr = "string" == typeof part,
                        isTag = isPartStr && !/\W/.test(part),
                        isPartStrNotTag = isPartStr && !isTag;
                    isTag && !isXML && (part = part.toUpperCase());
                    for (var elem, i = 0, l = checkSet.length; i < l; i++)
                        if (elem = checkSet[i]) {
                            for (;
                                (elem = elem.previousSibling) && 1 !== elem.nodeType;);
                            checkSet[i] = isPartStrNotTag || elem && elem.nodeName === part ? elem || !1 : elem === part
                        }
                    isPartStrNotTag && Sizzle.filter(part, checkSet, !0)
                },
                ">": function(checkSet, part, isXML) {
                    var isPartStr = "string" == typeof part;
                    if (isPartStr && !/\W/.test(part)) {
                        part = isXML ? part : part.toUpperCase();
                        for (var parent, i = 0, l = checkSet.length; i < l; i++)(elem = checkSet[i]) && (parent = elem.parentNode, checkSet[i] = parent.nodeName === part && parent)
                    } else {
                        for (var elem, i = 0, l = checkSet.length; i < l; i++)(elem = checkSet[i]) && (checkSet[i] = isPartStr ? elem.parentNode : elem.parentNode === part);
                        isPartStr && Sizzle.filter(part, checkSet, !0)
                    }
                },
                "": function(checkSet, part, isXML) {
                    var nodeCheck, doneName = done++,
                        checkFn = dirCheck;
                    /\W/.test(part) || (nodeCheck = part = isXML ? part : part.toUpperCase(), checkFn = dirNodeCheck), checkFn("parentNode", part, doneName, checkSet, nodeCheck, isXML)
                },
                "~": function(checkSet, part, isXML) {
                    var nodeCheck, doneName = done++,
                        checkFn = dirCheck;
                    "string" != typeof part || /\W/.test(part) || (nodeCheck = part = isXML ? part : part.toUpperCase(), checkFn = dirNodeCheck), checkFn("previousSibling", part, doneName, checkSet, nodeCheck, isXML)
                }
            },
            find: {
                ID: function(match, context, isXML) {
                    if ("undefined" != typeof context.getElementById && !isXML) return (isXML = context.getElementById(match[1])) ? [isXML] : []
                },
                NAME: function(match, context, isXML) {
                    if ("undefined" != typeof context.getElementsByName) {
                        for (var ret = [], results = context.getElementsByName(match[1]), i = 0, l = results.length; i < l; i++) results[i].getAttribute("name") === match[1] && ret.push(results[i]);
                        return 0 === ret.length ? null : ret
                    }
                },
                TAG: function(match, context) {
                    return context.getElementsByTagName(match[1])
                }
            },
            preFilter: {
                CLASS: function(match, curLoop, inplace, result, not, isXML) {
                    if (match = " " + match[1].replace(/\\/g, "") + " ", isXML) return match;
                    for (var elem, i = 0; null != (elem = curLoop[i]); i++) elem && (not ^ (elem.className && 0 <= (" " + elem.className + " ").indexOf(match)) ? inplace || result.push(elem) : inplace && (curLoop[i] = !1));
                    return !1
                },
                ID: function(match) {
                    return match[1].replace(/\\/g, "")
                },
                TAG: function(match, curLoop) {
                    for (var i = 0; !1 === curLoop[i]; i++);
                    return curLoop[i] && isXML(curLoop[i]) ? match[1] : match[1].toUpperCase()
                },
                CHILD: function(match) {
                    var test;
                    return "nth" == match[1] && (test = /(-?)(\d*)n((?:\+|-)?\d*)/.exec(("even" == match[2] ? "2n" : "odd" == match[2] && "2n+1") || !/\D/.test(match[2]) && "0n+" + match[2] || match[2]), match[2] = +(test[1] + (test[2] || 1)), match[3] = +test[3]), match[0] = done++, match
                },
                ATTR: function(match, curLoop, inplace, result, not, isXML) {
                    var name = match[1].replace(/\\/g, "");
                    return !isXML && Expr.attrMap[name] && (match[1] = Expr.attrMap[name]), "~=" === match[2] && (match[4] = " " + match[4] + " "), match
                },
                PSEUDO: function(match, curLoop, inplace, result, not) {
                    if ("not" === match[1]) {
                        if (!(1 < chunker.exec(match[3]).length || /^\w/.test(match[3]))) return not = Sizzle.filter(match[3], curLoop, inplace, !0 ^ not), inplace || result.push.apply(result, not), !1;
                        match[3] = Sizzle(match[3], null, null, curLoop)
                    } else if (Expr.match.POS.test(match[0]) || Expr.match.CHILD.test(match[0])) return !0;
                    return match
                },
                POS: function(match) {
                    return match.unshift(!0), match
                }
            },
            filters: {
                enabled: function(elem) {
                    return !1 === elem.disabled && "hidden" !== elem.type
                },
                disabled: function(elem) {
                    return !0 === elem.disabled
                },
                checked: function(elem) {
                    return !0 === elem.checked
                },
                selected: function(elem) {
                    return elem.parentNode.selectedIndex, !0 === elem.selected
                },
                parent: function(elem) {
                    return !!elem.firstChild
                },
                empty: function(elem) {
                    return !elem.firstChild
                },
                has: function(elem, i, match) {
                    return !!Sizzle(match[3], elem).length
                },
                header: function(elem) {
                    return /h\d/i.test(elem.nodeName)
                },
                text: function(elem) {
                    return "text" === elem.type
                },
                radio: function(elem) {
                    return "radio" === elem.type
                },
                checkbox: function(elem) {
                    return "checkbox" === elem.type
                },
                file: function(elem) {
                    return "file" === elem.type
                },
                password: function(elem) {
                    return "password" === elem.type
                },
                submit: function(elem) {
                    return "submit" === elem.type
                },
                image: function(elem) {
                    return "image" === elem.type
                },
                reset: function(elem) {
                    return "reset" === elem.type
                },
                button: function(elem) {
                    return "button" === elem.type || "BUTTON" === elem.nodeName.toUpperCase()
                },
                input: function(elem) {
                    return /input|select|textarea|button/i.test(elem.nodeName)
                }
            },
            setFilters: {
                first: function(elem, i) {
                    return 0 === i
                },
                last: function(elem, i, match, array) {
                    return i === array.length - 1
                },
                even: function(elem, i) {
                    return i % 2 == 0
                },
                odd: function(elem, i) {
                    return i % 2 == 1
                },
                lt: function(elem, i, match) {
                    return i < +match[3]
                },
                gt: function(elem, i, match) {
                    return i > +match[3]
                },
                nth: function(elem, i, match) {
                    return +match[3] == i
                },
                eq: function(elem, i, match) {
                    return +match[3] == i
                }
            },
            filter: {
                PSEUDO: function(elem, match, i, array) {
                    var name = match[1],
                        filter = Expr.filters[name];
                    if (filter) return filter(elem, i, match, array);
                    if ("contains" === name) return 0 <= (elem.textContent || elem.innerText || "").indexOf(match[3]);
                    if ("not" === name) {
                        for (var not = match[3], i = 0, l = not.length; i < l; i++)
                            if (not[i] === elem) return !1;
                        return !0
                    }
                },
                CHILD: function(elem, match) {
                    var type = match[1],
                        node = elem;
                    switch (type) {
                        case "only":
                        case "first":
                            for (; node = node.previousSibling;)
                                if (1 === node.nodeType) return !1;
                            if ("first" == type) return !0;
                            node = elem;
                        case "last":
                            for (; node = node.nextSibling;)
                                if (1 === node.nodeType) return !1;
                            return !0;
                        case "nth":
                            var first = match[2],
                                last = match[3];
                            if (1 == first && 0 == last) return !0;
                            var doneName = match[0],
                                parent = elem.parentNode;
                            if (parent && (parent.sizcache !== doneName || !elem.nodeIndex)) {
                                for (var count = 0, node = parent.firstChild; node; node = node.nextSibling) 1 === node.nodeType && (node.nodeIndex = ++count);
                                parent.sizcache = doneName
                            }
                            parent = elem.nodeIndex - last;
                            return 0 == first ? 0 == parent : parent % first == 0 && 0 <= parent / first
                    }
                },
                ID: function(elem, match) {
                    return 1 === elem.nodeType && elem.getAttribute("id") === match
                },
                TAG: function(elem, match) {
                    return "*" === match && 1 === elem.nodeType || elem.nodeName === match
                },
                CLASS: function(elem, match) {
                    return -1 < (" " + (elem.className || elem.getAttribute("class")) + " ").indexOf(match)
                },
                ATTR: function(elem, match) {
                    var name = match[1],
                        name = Expr.attrHandle[name] ? Expr.attrHandle[name](elem) : null != elem[name] ? elem[name] : elem.getAttribute(name),
                        elem = name + "",
                        type = match[2],
                        match = match[4];
                    return null == name ? "!=" === type : "=" === type ? elem === match : "*=" === type ? 0 <= elem.indexOf(match) : "~=" === type ? 0 <= (" " + elem + " ").indexOf(match) : match ? "!=" === type ? elem != match : "^=" === type ? 0 === elem.indexOf(match) : "$=" === type ? elem.substr(elem.length - match.length) === match : "|=" === type && (elem === match || elem.substr(0, match.length + 1) === match + "-") : elem && !1 !== name
                },
                POS: function(elem, match, i, array) {
                    var name = match[2],
                        name = Expr.setFilters[name];
                    if (name) return name(elem, i, match, array)
                }
            }
        }),
        origPOS = Expr.match.POS;
    for (type in Expr.match) Expr.match[type] = new RegExp(Expr.match[type].source + /(?![^\[]*\])(?![^\(]*\))/.source);
    var sortOrder, form, root, id, makeArray = function(array, results) {
        return array = Array.prototype.slice.call(array, 0), results ? (results.push.apply(results, array), results) : array
    };
    try {
        Array.prototype.slice.call(document.documentElement.childNodes, 0)
    } catch (e) {
        makeArray = function(array, results) {
            var ret = results || [];
            if ("[object Array]" === toString.call(array)) Array.prototype.push.apply(ret, array);
            else if ("number" == typeof array.length)
                for (var i = 0, l = array.length; i < l; i++) ret.push(array[i]);
            else
                for (i = 0; array[i]; i++) ret.push(array[i]);
            return ret
        }
    }

    function dirNodeCheck(dir, cur, doneName, checkSet, nodeCheck, isXML) {
        for (var sibDir = "previousSibling" == dir && !isXML, i = 0, l = checkSet.length; i < l; i++)
            if (elem = checkSet[i]) {
                sibDir && 1 === elem.nodeType && (elem.sizcache = doneName, elem.sizset = i);
                for (var elem = elem[dir], match = !1; elem;) {
                    if (elem.sizcache === doneName) {
                        match = checkSet[elem.sizset];
                        break
                    }
                    if (1 !== elem.nodeType || isXML || (elem.sizcache = doneName, elem.sizset = i), elem.nodeName === cur) {
                        match = elem;
                        break
                    }
                    elem = elem[dir]
                }
                checkSet[i] = match
            }
    }

    function dirCheck(dir, cur, doneName, checkSet, nodeCheck, isXML) {
        for (var sibDir = "previousSibling" == dir && !isXML, i = 0, l = checkSet.length; i < l; i++)
            if (elem = checkSet[i]) {
                sibDir && 1 === elem.nodeType && (elem.sizcache = doneName, elem.sizset = i);
                for (var elem = elem[dir], match = !1; elem;) {
                    if (elem.sizcache === doneName) {
                        match = checkSet[elem.sizset];
                        break
                    }
                    if (1 === elem.nodeType)
                        if (isXML || (elem.sizcache = doneName, elem.sizset = i), "string" != typeof cur) {
                            if (elem === cur) {
                                match = !0;
                                break
                            }
                        } else if (0 < Sizzle.filter(cur, [elem]).length) {
                        match = elem;
                        break
                    }
                    elem = elem[dir]
                }
                checkSet[i] = match
            }
    }
    document.documentElement.compareDocumentPosition ? sortOrder = function(a, b) {
        var ret;
        return a.compareDocumentPosition && b.compareDocumentPosition ? (0 == (ret = 4 & a.compareDocumentPosition(b) ? -1 : a === b ? 0 : 1) && (hasDuplicate = !0), ret) : (a == b && (hasDuplicate = !0), 0)
    } : "sourceIndex" in document.documentElement ? sortOrder = function(a, b) {
        var ret;
        return a.sourceIndex && b.sourceIndex ? (0 == (ret = a.sourceIndex - b.sourceIndex) && (hasDuplicate = !0), ret) : (a == b && (hasDuplicate = !0), 0)
    } : document.createRange && (sortOrder = function(a, b) {
        var aRange, bRange;
        return a.ownerDocument && b.ownerDocument ? (aRange = a.ownerDocument.createRange(), bRange = b.ownerDocument.createRange(), aRange.selectNode(a), aRange.collapse(!0), bRange.selectNode(b), bRange.collapse(!0), 0 === (bRange = aRange.compareBoundaryPoints(Range.START_TO_END, bRange)) && (hasDuplicate = !0), bRange) : (a == b && (hasDuplicate = !0), 0)
    }), form = document.createElement("div"), id = "script" + (new Date).getTime(), form.innerHTML = "<a name='" + id + "'/>", (root = document.documentElement).insertBefore(form, root.firstChild), document.getElementById(id) && (Expr.find.ID = function(match, context, isXML) {
        if ("undefined" != typeof context.getElementById && !isXML) return (isXML = context.getElementById(match[1])) ? isXML.id === match[1] || "undefined" != typeof isXML.getAttributeNode && isXML.getAttributeNode("id").nodeValue === match[1] ? [isXML] : undefined : []
    }, Expr.filter.ID = function(elem, match) {
        var node = "undefined" != typeof elem.getAttributeNode && elem.getAttributeNode("id");
        return 1 === elem.nodeType && node && node.nodeValue === match
    }), root.removeChild(form), (id = document.createElement("div")).appendChild(document.createComment("")), 0 < id.getElementsByTagName("*").length && (Expr.find.TAG = function(match, context) {
        var results = context.getElementsByTagName(match[1]);
        if ("*" === match[1]) {
            for (var tmp = [], i = 0; results[i]; i++) 1 === results[i].nodeType && tmp.push(results[i]);
            results = tmp
        }
        return results
    }), id.innerHTML = "<a href='#'></a>", id.firstChild && "undefined" != typeof id.firstChild.getAttribute && "#" !== id.firstChild.getAttribute("href") && (Expr.attrHandle.href = function(elem) {
        return elem.getAttribute("href", 2)
    }), document.querySelectorAll && function() {
        var oldSizzle = Sizzle,
            div = document.createElement("div");
        if (div.innerHTML = "<p class='TEST'></p>", !div.querySelectorAll || 0 !== div.querySelectorAll(".TEST").length)
            for (var prop in Sizzle = function(query, context, extra, seed) {
                    if (context = context || document, !seed && 9 === context.nodeType && !isXML(context)) try {
                        return makeArray(context.querySelectorAll(query), extra)
                    } catch (e) {}
                    return oldSizzle(query, context, extra, seed)
                }, oldSizzle) Sizzle[prop] = oldSizzle[prop]
    }(), document.getElementsByClassName && document.documentElement.getElementsByClassName && function() {
        var div = document.createElement("div");
        div.innerHTML = "<div class='test e'></div><div class='test'></div>", 0 !== div.getElementsByClassName("e").length && (div.lastChild.className = "e", 1 !== div.getElementsByClassName("e").length) && (Expr.order.splice(1, 0, "CLASS"), Expr.find.CLASS = function(match, context, isXML) {
            if ("undefined" != typeof context.getElementsByClassName && !isXML) return context.getElementsByClassName(match[1])
        })
    }();
    var contains = document.compareDocumentPosition ? function(a, b) {
            return 16 & a.compareDocumentPosition(b)
        } : function(a, b) {
            return a !== b && (!a.contains || a.contains(b))
        },
        isXML = function(elem) {
            return 9 === elem.nodeType && "HTML" !== elem.documentElement.nodeName || !!elem.ownerDocument && "HTML" !== elem.ownerDocument.documentElement.nodeName
        },
        posProcess = function(selector, context) {
            for (var match, tmpSet = [], later = "", root = context.nodeType ? [context] : context; match = Expr.match.PSEUDO.exec(selector);) later += match[0], selector = selector.replace(Expr.match.PSEUDO, "");
            selector = Expr.relative[selector] ? selector + "*" : selector;
            for (var i = 0, l = root.length; i < l; i++) Sizzle(selector, root[i], tmpSet);
            return Sizzle.filter(later, tmpSet)
        };
    window.Sizzle = Sizzle
}(), daum.Browser.webkit || (JSON = undefined), this.JSON || (this.JSON = {}), ! function() {
    function f(n) {
        return n < 10 ? "0" + n : n
    }
    "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function(key) {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
    }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(key) {
        return this.valueOf()
    });
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap, indent, meta = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        },
        rep;

    function quote(string) {
        return escapable.lastIndex = 0, escapable.test(string) ? '"' + string.replace(escapable, function(a) {
            var c = meta[a];
            return "string" == typeof c ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + string + '"'
    }

    function str(key, holder) {
        var i, k, v, length, partial, mind = gap,
            value = holder[key];
        switch (value && "object" == typeof value && "function" == typeof value.toJSON && (value = value.toJSON(key)), typeof(value = "function" == typeof rep ? rep.call(holder, key, value) : value)) {
            case "string":
                return quote(value);
            case "number":
                return isFinite(value) ? String(value) : "null";
            case "boolean":
            case "null":
                return String(value);
            case "object":
                if (!value) return "null";
                if (gap += indent, partial = [], "[object Array]" === Object.prototype.toString.apply(value)) {
                    for (length = value.length, i = 0; i < length; i += 1) partial[i] = str(i, value) || "null";
                    v = 0 === partial.length ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]"
                } else {
                    if (rep && "object" == typeof rep)
                        for (length = rep.length, i = 0; i < length; i += 1) "string" == typeof(k = rep[i]) && (v = str(k, value)) && partial.push(quote(k) + (gap ? ": " : ":") + v);
                    else
                        for (k in value) Object.hasOwnProperty.call(value, k) && (v = str(k, value)) && partial.push(quote(k) + (gap ? ": " : ":") + v);
                    v = 0 === partial.length ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}"
                }
                return gap = mind, v
        }
    }
    "function" != typeof JSON.stringify && (JSON.stringify = function(value, replacer, space) {
        var i;
        if (indent = gap = "", "number" == typeof space)
            for (i = 0; i < space; i += 1) indent += " ";
        else "string" == typeof space && (indent = space);
        if (!(rep = replacer) || "function" == typeof replacer || "object" == typeof replacer && "number" == typeof replacer.length) return str("", {
            "": value
        });
        throw new Error("JSON.stringify")
    }), "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
        var j;

        function walk(holder, key) {
            var k, v, value = holder[key];
            if (value && "object" == typeof value)
                for (k in value) Object.hasOwnProperty.call(value, k) && ((v = walk(value, k)) !== undefined ? value[k] = v : delete value[k]);
            return reviver.call(holder, key, value)
        }
        if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(a) {
                return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
            "": j
        }, "") : j;
        throw new SyntaxError("JSON.parse")
    })
}(), window.$ || (window.$ = daum.$), window.$A || (window.$A = daum.$A), window.$E || (window.$E = daum.$E), window.$T || (window.$T = daum.$T), window.$C || (window.$C = daum.$C), window.Sizzle && (window.$$ = daum.$$ = window.Sizzle), daum.extend(daum, daum.Event), daum.extend(daum, daum.Browser), daum.extend(daum, daum.Element), daum.Event.GC != undefined && (window.JiguEventGC = daum.Function.interval(daum.Event.GC, 6e4, daum.Event)), daum.Event.addEvent(window, "load", function() {
    daum.documentLoaded = !0
}), daum.nativeExtend(), window.console ? window.console.log ? window.console.debug || (window.console.debug = function() {
    for (var b = 0, a = arguments.length; b < a; b++) window.console.log(arguments[b])
}) : window.console.debug = window.console.log = function() {} : window.console = {
    debug: function() {},
    log: function() {}
}, daum.Ajax.prototype.callFailure = function() {
    try {
        "object" != typeof this.XHR || 500 != this.XHR.status && 503 != this.XHR.status || (document.createElement("img").src = "http://group1.magpie.daum.net/magpie/opencounter/Open.do?service=tistory&key=" + this.XHR.status)
    } catch (e) {}
    this.options.onfailure(this.XHR)
}, ! function() {
    var T;
    window.T || (T = window.T = {
        cloneObject: function(obj) {
            if (obj && "object" == typeof obj) {
                var p, newObj = {};
                for (p in obj) newObj[p] = obj[p];
                return newObj
            }
        },
        m: {},
        admin: {},
        blog: {},
        ui: {},
        util: {}
    }, window.$TT = T.util = {
        objectToQueryString: function(obj) {
            var key, queryString = [];
            for (key in obj) queryString.push(key + "=" + encodeURIComponent(obj[key]));
            return queryString.join("&")
        },
        formSerialize: function(formId, isHash) {
            var result = {},
                elem = daum.$(formId);
            if (elem)
                for (var value, elems = elem.elements, i = 0; elem = elems[i]; i++) !elem.disabled && elem.name && (value = daum.$F(elem.name), value = daum.Object.isArray(value) ? value.join(",") : value, result[elem.name] = value || "");
            return !0 !== isHash ? T.util.objectToQueryString(result) : result
        },
        Cookie: {
            set: function(name, value, time, domain) {
                var date, expires = "",
                    _domain = "";
                time && ((date = new Date).setTime(date.getTime() + time), expires = "; expires=" + date.toGMTString()), domain && (_domain = "domain=" + domain), document.cookie = name + "=" + value + expires + "; path=/;" + _domain
            },
            get: function(name) {
                for (var cookies = document.cookie.split(";"), i = cookies.length; i--;)
                    if (-1 == cookies[i].indexOf("=")) {
                        if (name == cookies[i]) return !0
                    } else {
                        var crumb = cookies[i].split("=");
                        if (name == crumb[0].trim()) return crumb[1].trim()
                    }
            },
            remove: function(name) {
                var date = new Date;
                date.setTime(date.getTime() - 1e3), document.cookie = name + "=1; expires=" + date.toGMTString() + "; path=/; max-age=0"
            }
        },
        autoResizeHeight: function(fixedWidth, heightOffset) {
            var dl, diff, pos, left, top, contentScreentHeight, contentScreentWidth, win = window.top;
            "number" == typeof fixedWidth ? (heightOffset = heightOffset || 0, dl = self.document.documentElement, diff = {}, pos = {
                x: 0,
                y: 0
            }, left = win.screenLeft || win.screenX, top = win.screenTop || win.screenY, win.resizeTo(fixedWidth, 300), contentScreentHeight = dl.clientHeight == dl.scrollHeight && dl.scrollHeight != dl.offsetHeight ? dl.offsetHeight : dl.scrollHeight, contentScreentWidth = dl.clientWidth == dl.scrollWidth && dl.scrollWidth != dl.offsetWidth ? dl.offsetWidth : dl.scrollWidth, contentScreentHeight > dl.clientHeight ? diff.height = contentScreentHeight - dl.clientHeight : (diff.width = 8, diff.height = dl.clientHeight - contentScreentHeight + 35), pos.y = Math.min(screen.availHeight - contentScreentHeight - top - 50, 0), pos.x = Math.min(screen.availWidth - contentScreentWidth - left - 30, 0), (pos.x || pos.y) && ($tx.chrome || win.moveBy(pos.x, pos.y), win.resizeTo(fixedWidth, 300)), setTimeout(function() {
                win.resizeBy(0, diff.height + heightOffset)
            }, 20)) : setTimeout(function() {
                var obj = (obj = fixedWidth) || document.getElementsByTagName("HTML")[0],
                    doc = document.getElementsByTagName("HTML")[0],
                    clientW = doc.clientWidth || doc.scrollWidth,
                    doc = doc.clientHeight || doc.scrollHeight,
                    clientW = (obj.offsetWidth || obj.scrollWidth) - clientW,
                    obj = (obj.offsetHeight || obj.scrollHeight) - doc;
                (clientW || obj) && win.resizeBy(clientW, obj)
            }, 100)
        },
        getDate: function(format, gap) {
            var d = new Date,
                fullYear = (d = gap ? new Date(d.getTime() + 864e5 * gap) : d).getFullYear(),
                month = d.getMonth() + 1,
                date = d.getDate();
            switch (format) {
                case "fullDate":
                    return fullYear + (month < 10 ? "0" + month : month) + date;
                case "fullYear":
                    return fullYear;
                case "month":
                    return month;
                case "date":
                    return date
            }
        },
        on: function(elem, type, fn) {
            elem.addEventListener ? elem.addEventListener(type, fn, !1) : elem.attachEvent && elem.attachEvent("on" + type, function() {
                var event = window.event;
                event.target || (event.target = event.srcElement || document), fn.call(elem, event)
            })
        },
        data: function(elem, name, data) {
            return data === undefined ? elem.dataset ? elem.dataset[name] : elem.getAttribute("data-" + name) : (elem.dataset ? elem.dataset[name] = data : elem.setAttribute("data-" + name, data), data)
        }
    })
}(), ! function() {
    function Standardizer() {}
    Standardizer.prototype.namespace = "Eolin.Application.Framework", Standardizer.prototype.name = "Eolin Standardizer", Standardizer.prototype.verion = "1.0", Standardizer.prototype.copyright = "Copyright &copy; 2005, Tatter & Company. All rights reserved.", Standardizer.prototype.isIE = 0 <= navigator.userAgent.indexOf("MSIE"), Standardizer.prototype.isFirefox = 0 <= navigator.userAgent.indexOf("Firefox"), Standardizer.prototype.isSafari = 0 <= navigator.userAgent.indexOf("Safari"), Standardizer.prototype.isOpera = !Standardizer.prototype.isIE && 0 <= navigator.userAgent.indexOf("Opera"), Standardizer.prototype.isMozilla = !Standardizer.prototype.isIE && !Standardizer.prototype.isFirefox && !Standardizer.prototype.isSafari && !Standardizer.prototype.isOpera && 0 <= navigator.userAgent.indexOf("Mozilla"), Standardizer.prototype.addEventListener = function(object) {
        object.addEventListener || (object.addEventListener = function(type, listener, useCapture) {
            this.attachEvent("on" + type, listener)
        })
    }, Standardizer.prototype.removeEventListener = function(object) {
        object.removeEventListener || (object.removeEventListener = function(type, listener, useCapture) {
            this.detachEvent("on" + type, listener)
        })
    }, Standardizer.prototype.event = function(event) {
        if (window.event) {
            if ((event = window.event).target) return event;
            event.srcElement && (event.target = event.srcElement), event.preventDefault == undefined && (event.preventDefault = function() {
                this.returnValue = !1
            })
        }
        return event
    }, Standardizer.prototype.getScrollTop = function() {
        return (this.isSafari ? document.body : document.documentElement).scrollTop
    }, Standardizer.prototype.getScrollLeft = function() {
        return (this.isSafari ? document.body : document.documentElement).scrollLeft
    }, (window.STD = new Standardizer).addEventListener(window)
}(), ! function() {
    function PageMaster() {
        this._status = null, this._messages = [], this._requests = [], this._holders = [], this._timer = null, window.addEventListener("load", PageMaster.prototype._onLoad, !1), window.addEventListener("beforeunload", PageMaster.prototype._onBeforeUnload, !1)
    }
    PageMaster.prototype.namespace = "Eolin.Application.Framework", PageMaster.prototype.name = "Eolin Page Master", PageMaster.prototype.verion = "1.0", PageMaster.prototype.copyright = "Copyright &copy; 2005, Tatter & Company. All rights reserved.", PageMaster.prototype.message = "아직 처리중인 작업이 있습니다.", PageMaster.prototype._onLoad = function(event) {
        PM._status = document.createElement("div"), PM._status.style.position = "absolute", PM._status.style.color = "white", PM._status.style.backgroundColor = "navy", PM._status.style.margin = "0px", PM._status.style.paddingLeft = "10px", PM._status.style.paddingRight = "10px", STD.addEventListener(window), window.addEventListener("scroll", PageMaster.prototype._updateStatus, !1), window.addEventListener("resize", PageMaster.prototype._updateStatus, !1)
    }, PageMaster.prototype._showStatus = function() {
        PM._status.parentNode != document.body && (document.body.appendChild(this._status), this._updateStatus())
    }, PageMaster.prototype._hideStatus = function() {
        PM._status.parentNode == document.body && document.body.removeChild(PM._status)
    }, PageMaster.prototype._updateStatus = function() {
        PM._status.parentNode == document.body && (PM._status.style.top = (STD.isSafari ? document.body : document.documentElement).scrollTop + "px", PM._status.style.left = (STD.isSafari ? document.body : document.documentElement).scrollLeft + document.documentElement.clientWidth - PM._status.offsetWidth + "px"), PM.updateMessages()
    }, PageMaster.prototype.showMessage = function(message, align, valign, timeout) {
        if ("string" != typeof message || 0 == message.length) return -1;
        align == undefined && (align = "center"), valign == undefined && (valign = "middle"), timeout == undefined && (timeout = 3e3);
        var oMessage = document.createElement("div"),
            message = (oMessage.innerHTML = message, oMessage.style.position = "absolute", oMessage.style.color = "white", oMessage.style.backgroundColor = "green", oMessage.style.margin = "0px", oMessage.style.paddingLeft = "10px", oMessage.style.paddingRight = "10px", oMessage._align = align, oMessage._valign = valign, document.body.appendChild(oMessage), this._messages.push(oMessage) - 1);
        return this.updateMessages(), window.setTimeout("PM._hideMessage(" + message + ")", timeout), message
    }, PageMaster.prototype._hideMessage = function(index) {
        for (document.body.removeChild(this._messages[index]), this._messages.splice(index, 1, null); 0 < this._messages.length && null == this._messages[this._messages.length - 1];) this._messages.pop()
    }, PageMaster.prototype.updateMessages = function() {
        for (var i = 0; i < this._messages.length; i++)
            if (null != this._messages[i]) {
                switch (this._messages[i]._align) {
                    case "left":
                        this._messages[i].style.left = STD.getScrollLeft() + "px";
                        break;
                    case "center":
                        this._messages[i].style.left = STD.getScrollLeft() + (document.documentElement.clientWidth - this._messages[i].offsetWidth) / 2 + "px";
                        break;
                    case "right":
                        this._messages[i].style.left = STD.getScrollLeft() + document.documentElement.clientWidth - this._messages[i].offsetWidth + "px"
                }
                switch (this._messages[i]._valign) {
                    case "top":
                        this._messages[i].style.top = STD.getScrollTop() + "px";
                        break;
                    case "middle":
                        this._messages[i].style.top = STD.getScrollTop() + (document.documentElement.clientHeight - this._messages[i].offsetHeight) / 2 + "px";
                        break;
                    case "bottom":
                        this._messages[i].style.top = STD.getScrollTop() + document.documentElement.clientHeight - this._messages[i].offsetHeight + "px"
                }
            }
    }, PageMaster.prototype.addRequest = function(request, message) {
        this._requests.push(new Array(request, message)), this._status && message != undefined && (this._status.innerHTML += message, this._showStatus())
    }, PageMaster.prototype.removeRequest = function(request) {
        for (var i = 0; i < this._requests.length; i++)
            if (this._requests[i][0] == request) {
                this._requests.splice(i, 1);
                break
            }
        for (var message = "", i = 0; i < this._requests.length; i++) this._requests[i][1] != undefined && (message += this._requests[i][1]);
        this._status && (0 == (this._status.innerHTML = message).length ? this._hideStatus() : this._updateStatus())
    }, PageMaster.prototype.addHolder = function(holder) {
        this._holders.push(holder)
    }, PageMaster.prototype.removeHolder = function(holder) {
        for (var i = 0; i < this._holders.length; i++)
            if (this._holders[i] == holder) return void this._holders.splice(i, 1)
    }, PageMaster.prototype.showPanel = function(panel, halign, valign) {
        try {
            if ("object" != typeof(panel = "string" == typeof panel ? document.getElementById(panel) : panel)) return;
            var clientHeight = (STD.isOpera ? document.body : document.documentElement).clientHeight;
            switch (panel.style.position = "absolute", panel.style.display = "block", halign) {
                case "left":
                    panel.style.left = STD.getScrollLeft() + "px";
                    break;
                default:
                case "center":
                    panel.style.left = STD.getScrollLeft() + (document.documentElement.clientWidth - panel.offsetWidth) / 2 + "px";
                    break;
                case "right":
                    panel.style.left = STD.getScrollLeft() + document.documentElement.clientWidth - panel.offsetWidth + "px"
            }
            switch (valign) {
                case "top":
                    panel.style.top = STD.getScrollTop() + "px";
                    break;
                default:
                case "middle":
                    panel.style.top = STD.getScrollTop() + (clientHeight - panel.offsetHeight) / 2 + "px";
                    break;
                case "bottom":
                    panel.style.top = STD.getScrollTop() + clientHeight - panel.offsetHeight + "px"
            }
        } catch (e) {}
    }, PageMaster.prototype._onBeforeUnload = function(event) {
        if (event = STD.event(event), 0 < PM._requests.length) event.returnValue = PM.message;
        else
            for (var i = 0; i < PM._holders.length; i++)
                if (PM._holders[i].isHolding()) return void(event.returnValue = PM._holders[i].message)
    };
    var PM = window.PM = new PageMaster
}(), HTTPRequest.prototype.namespace = "Eolin.Application.Framework", HTTPRequest.prototype.name = "Eolin HTTPXMLRequest Processor", HTTPRequest.prototype.verion = "1.0", HTTPRequest.prototype.copyright = "Copyright &copy; 2005, Tatter & Company. All rights reserved.", HTTPRequest.prototype.method = "GET", HTTPRequest.prototype.url = null, HTTPRequest.prototype.contentType = "application/x-www-form-urlencoded", HTTPRequest.prototype.content = "", HTTPRequest.prototype["async"] = !0, HTTPRequest.prototype.cache = !1, HTTPRequest.prototype.persistent = !0, HTTPRequest.prototype.message = "Requesting...", HTTPRequest.prototype.onVerify = function() {
    return 0 == this.getText("/response/error")
}, HTTPRequest.prototype.onExecute = function() {}, HTTPRequest.prototype.onSuccess = function() {}, HTTPRequest.prototype.onError = function() {}, HTTPRequest.prototype.presetProperty = function(object, property, success, error) {
    error == undefined && success == (error = object[property]) || (object[property] = success) != error && this._properties.push(new Array(object, property, error))
}, HTTPRequest.prototype.presetAttribute = function(object, attribute, success, error) {
    error == undefined && success == (error = object.getAttribute(attribute)) || (object.setAttribute(attribute, success), success != error && this._attributes.push(new Array(object, attribute, error)))
}, HTTPRequest.prototype.send = function() {
    var jsonp, callbackRequest, head, script, done, instance;
    if ("JSON" === this.method) return PM.jsonpNumber = PM.jsonpNumber || (new Date).getTime(), jsonp = "jsonp" + PM.jsonpNumber++, this.url = this.url.split("=?").join("=" + jsonp), callbackRequest = this, window[jsonp] = window[jsonp] || function(data) {
        callbackRequest.jsonData = data, window[jsonp] = undefined;
        try {
            delete window[jsonp]
        } catch (e) {}
    }, head = document.getElementsByTagName("head")[0] || document.documentElement, (script = document.createElement("script")).type = "text/javascript", script.charset = this.charset || "utf-8", script.src = this.url, script.instance = this, done = !1, script.onload = script.onreadystatechange = function() {
        done || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (done = !0, this.instance.onSuccess(), script.onload = script.onreadystatechange = null, head && script.parentNode && head.removeChild(script))
    }, script.onerror = function() {
        try {
            "object" != typeof this.instance || "object" != typeof this.instance._request || 500 != this.instance._request.status && 503 != this.instance._request.status || (document.createElement("img").src = "http://group1.magpie.daum.net/magpie/opencounter/Open.do?service=tistory&key=" + this.instance._request.status)
        } catch (e) {}
        this.instance.onError(), script.onerror = null, head && script.parentNode && head.removeChild(script)
    }, head.insertBefore(script, head.firstChild), undefined;
    if (this.persistent && PM.addRequest(this), this["async"] && ((instance = this)._request.onreadystatechange = function() {
            if (4 == instance._request.readyState)
                if (instance.persistent && PM.removeRequest(instance), instance.onVerify()) instance.onSuccess();
                else {
                    for (var i = 0; i < instance._properties.length; i++) instance._properties[i][0][instance._properties[i][1]] = instance._properties[i][2];
                    for (i = 0; i < instance._attributes.length; i++) instance._attributes[i][0].setAttribute(instance._attributes[i][1], instance._attributes[i][2]);
                    try {
                        "object" != typeof instance || "object" != typeof instance._request || 500 != instance._request.status && 503 != instance._request.status || (document.createElement("img").src = "http://group1.magpie.daum.net/magpie/opencounter/Open.do?service=tistory&key=" + instance._request.status)
                    } catch (e) {}
                    instance.onError()
                }
        }), this.cache ? this._request.open(this.method, this.url, this["async"]) : 0 <= this.url.lastIndexOf("?") ? this._request.open(this.method, this.url + "&__T__=" + (new Date).getTime(), this["async"]) : this._request.open(this.method, this.url + "?__T__=" + (new Date).getTime(), this["async"]), STD.isFirefox && this._request.setRequestHeader("Referer", location.href), 0 < arguments.length && (this.content = arguments[0]), 0 < this.content.length && this._request.setRequestHeader("Content-Type", this.contentType), this._request.send(this.content), !this["async"])
        if (this.persistent && PM.removeRequest(this), this.onVerify()) this.onSuccess();
        else {
            for (var i = 0; i < this._properties.length; i++) this._properties[i][0][this._properties[i][1]] = this._properties[i][2];
            for (i = 0; i < this._attributes.length; i++) this._attributes[i][0].setAttribute(this._attributes[i][1], this._attributes[i][2]);
            this.onError()
        }
}, HTTPRequest.prototype.getText = function(path) {
    try {
        if (path == undefined) return this._request.responseText;
        var directives = path.split("/");
        if ("" != directives[0]) return null;
        var cursor = this._request.responseXML.documentElement;
        if (cursor.nodeName != directives[1]) return null;
        for (var i = 2; i < directives.length; i++) {
            for (var j = 0; j < cursor.childNodes.length; j++)
                if (cursor.childNodes[j].nodeName == directives[i]) {
                    cursor = cursor.childNodes[j], j = -1;
                    break
                }
            if (-1 != j) return null
        }
        return cursor.text ? cursor.text : this._getText(cursor)
    } catch (e) {
        return null
    }
}, HTTPRequest.prototype._getText = function(node) {
    var text = "";
    node.nodeValue && (text += node.nodeValue);
    for (var i = 0; i < node.childNodes.length; i++) text += this._getText(node.childNodes[i]);
    return text
};
var sUserAgent = navigator.userAgent,
    fAppVersion = parseFloat(navigator.appVersion),
    daumMusicPlayerList = [];

function compareVersions(sVersion1, sVersion2) {
    var aVersion1 = sVersion1.split("."),
        aVersion2 = sVersion2.split(".");
    if (aVersion1.length > aVersion2.length)
        for (var i = 0; i < aVersion1.length - aVersion2.length; i++) aVersion2.push("0");
    else if (aVersion1.length < aVersion2.length)
        for (i = 0; i < aVersion2.length - aVersion1.length; i++) aVersion1.push("0");
    for (i = 0; i < aVersion1.length; i++) {
        if (aVersion1[i] < aVersion2[i]) return -1;
        if (aVersion1[i] > aVersion2[i]) return 1
    }
    return 0
}
var isOpera = -1 < sUserAgent.indexOf("Opera"),
    isMinOpera4 = !1,
    isMinOpera5 = !1,
    isMinOpera6 = !1,
    isMinOpera7 = !1,
    isMinOpera7_5 = !1,
    fOperaVersion, reOperaVersion, fOperaVersion, isMinOpera4, isMinOpera5, isMinOpera6, isMinOpera7, isMinOpera7_5, isKHTML = (isOpera && (fOperaVersion = "Opera" == navigator.appName ? fAppVersion : (reOperaVersion = new RegExp("Opera (\\d+\\.\\d+)"), reOperaVersion.test(sUserAgent), parseFloat(RegExp.$1)), isMinOpera4 = 4 <= fOperaVersion, isMinOpera5 = 5 <= fOperaVersion, isMinOpera6 = 6 <= fOperaVersion, isMinOpera7 = 7 <= fOperaVersion, isMinOpera7_5 = 7.5 <= fOperaVersion), -1 < sUserAgent.indexOf("KHTML") || -1 < sUserAgent.indexOf("Konqueror") || -1 < sUserAgent.indexOf("AppleWebKit")),
    isMinSafari1 = !1,
    isMinSafari1_2 = !1,
    isMinKonq2_2 = !1,
    isMinKonq3 = !1,
    isMinKonq3_1 = !1,
    isMinKonq3_2 = !1,
    isSafari = !1,
    isKonq = !1,
    reAppleWebKit, fAppleWebKitVersion, isMinSafari1, isMinSafari1_2, reKonq, isSafari, isKonq, isIE = (isKHTML && (isSafari = -1 < sUserAgent.indexOf("AppleWebKit"), isKonq = -1 < sUserAgent.indexOf("Konqueror"), isSafari ? (reAppleWebKit = new RegExp("AppleWebKit\\/(\\d+(?:\\.\\d*)?)"), reAppleWebKit.test(sUserAgent), fAppleWebKitVersion = parseFloat(RegExp.$1), isMinSafari1 = 85 <= fAppleWebKitVersion, isMinSafari1_2 = 124 <= fAppleWebKitVersion) : isKonq && (reKonq = new RegExp("Konqueror\\/(\\d+(?:\\.\\d+(?:\\.\\d)?)?)"), reKonq.test(sUserAgent), isMinKonq2_2 = 0 <= compareVersions(RegExp.$1, "2.2"), isMinKonq3 = 0 <= compareVersions(RegExp.$1, "3.0"), isMinKonq3_1 = 0 <= compareVersions(RegExp.$1, "3.1"), isMinKonq3_2 = 0 <= compareVersions(RegExp.$1, "3.2"))), -1 < sUserAgent.indexOf("compatible") && -1 < sUserAgent.indexOf("MSIE") && !isOpera),
    isMinIE4 = !1,
    isMinIE5 = !1,
    isMinIE5_5 = !1,
    isMinIE6 = !1,
    reIE, fIEVersion, isMinIE4, isMinIE5, isMinIE5_5, isMinIE6, isMoz = (isIE && (reIE = new RegExp("MSIE (\\d+\\.\\d+);"), reIE.test(sUserAgent), fIEVersion = parseFloat(RegExp.$1), isMinIE4 = 4 <= fIEVersion, isMinIE5 = 5 <= fIEVersion, isMinIE5_5 = 5.5 <= fIEVersion, isMinIE6 = 6 <= fIEVersion), -1 < sUserAgent.indexOf("Gecko") && !isKHTML),
    isMinMoz1 = !1,
    isMinMoz1_4 = !1,
    isMinMoz1_5 = !1,
    reMoz, isNS4 = (isMoz && (reMoz = new RegExp("rv:(\\d+\\.\\d+(?:\\.\\d+)?)"), reMoz.test(sUserAgent), isMinMoz1 = 0 <= compareVersions(RegExp.$1, "1.0"), isMinMoz1_4 = 0 <= compareVersions(RegExp.$1, "1.4"), isMinMoz1_5 = 0 <= compareVersions(RegExp.$1, "1.5")), !isIE && !isOpera && !isMoz && !isKHTML && 0 == sUserAgent.indexOf("Mozilla") && "Netscape" == navigator.appName && 4 <= fAppVersion && fAppVersion < 5),
    isMinNS4 = !1,
    isMinNS4_5 = !1,
    isMinNS4_7 = !1,
    isMinNS4_8 = !1,
    isWin = (isNS4 && (isMinNS4 = !0, isMinNS4_5 = 4.5 <= fAppVersion, isMinNS4_7 = 4.7 <= fAppVersion, isMinNS4_8 = 4.8 <= fAppVersion), "Win32" == navigator.platform || "Windows" == navigator.platform),
    isMac = "Mac68K" == navigator.platform || "MacPPC" == navigator.platform || "Macintosh" == navigator.platform,
    isUnix = "X11" == navigator.platform && !isWin && !isMac,
    isWin95 = !1,
    isWin98 = !1,
    isWinNT4 = !1,
    isWin2K = !1,
    isWinME = !1,
    isWinXP = !1,
    isMac68K = !1,
    isMacPPC = !1,
    isSunOS = !1,
    isMinSunOS4 = !1,
    isMinSunOS5 = !1,
    isMinSunOS5_5 = !1,
    reSunOS, isSunOS;

function analysis(msg, mode) {
    try {
        if (mode == undefined) {
            var temp = '<table border="1"  cellspacing="0">';
            for (name in msg) temp = (temp = temp + "<tr><td>" + name + "</td><td>") + msg[name] + "</td></tr>";
            return temp += "</table>"
        }
        mode = "a";
        var name, temp = "";
        for (name in msg) temp += name + "\t\t:" + msg[name] + "\n";
        return temp
    } catch (e) {}
}

function trace(msg, mode) {
    result = analysis(msg, mode), mode == undefined ? ((msg = window.open("", "traceWin")).focus(), msg.document.body.innerHTML = result) : "w" == mode && alert(result)
}

function openLinkInNewWindow(callee) {
    if (callee) {
        callee = callee.getAttribute("href");
        if (callee) return window.open(callee), !1
    }
    return !0
}

function toggleLayer(id) {
    try {
        var obj = document.getElementById(id);
        obj.style.display = "none" == obj.style.display ? "block" : "none"
    } catch (e) {}
    return !0
}

function showLayer(id) {
    return document.getElementById(id).style.display = "block", !0
}

function tt_showLayer(id) {
    return document.getElementById(id).style.display = "block", !0
}

function tt_hideLayer(id) {
    return document.getElementById(id).style.display = "none", !0
}

function hideLayer(id) {
    return document.getElementById(id).style.display = "none", !0
}

function findFormObject(caller) {
    for (var obj = caller; obj; obj = obj.parentNode)
        if ("FORM" == obj.nodeName) return obj;
    return null
}

function trim(str) {
    for (var start = 0, end = str.length, i = 0; i < str.length; i++)
        if (" " != str.charAt(i)) {
            start = i;
            break
        }
    for (i = str.length - 1; - 1 <= i; i--)
        if (" " != str.charAt(i)) {
            end = i + 1;
            break
        }
    return str.substring(start, end)
}

function checkValue(oField, message) {
    try {
        return 0 == oField.value.length ? (alert(message), oField.focus(), !1) : !0
    } catch (e) {
        return !1
    }
}

function trimAll(oForm) {
    try {
        for (var i = 0; i < oForm.elements.length; i++) oForm.elements[i].tagName.toLowerCase(), oForm.elements[i].type;
        return !0
    } catch (e) {
        alert(e.message)
    }
}

function openKeyword(url) {
    window.open(url, "keyword", "width=570,height=650,location=0,menubar=0,resizable=1,scrollbars=1,status=0,toolbar=0")
}
isWin && (isWin95 = -1 < sUserAgent.indexOf("Win95") || -1 < sUserAgent.indexOf("Windows 95"), isWin98 = -1 < sUserAgent.indexOf("Win98") || -1 < sUserAgent.indexOf("Windows 98"), isWinME = -1 < sUserAgent.indexOf("Win 9x 4.90") || -1 < sUserAgent.indexOf("Windows ME"), isWin2K = -1 < sUserAgent.indexOf("Windows NT 5.0") || -1 < sUserAgent.indexOf("Windows 2000"), isWinXP = -1 < sUserAgent.indexOf("Windows NT 5.1") || -1 < sUserAgent.indexOf("Windows XP"), isWinNT4 = -1 < sUserAgent.indexOf("WinNT") || -1 < sUserAgent.indexOf("Windows NT") || -1 < sUserAgent.indexOf("WinNT4.0") || -1 < sUserAgent.indexOf("Windows NT 4.0") && !isWinME && !isWin2K && !isWinXP), isMac && (isMac68K = -1 < sUserAgent.indexOf("Mac_68000") || -1 < sUserAgent.indexOf("68K"), isMacPPC = -1 < sUserAgent.indexOf("Mac_PowerPC") || -1 < sUserAgent.indexOf("PPC")), isUnix && (isSunOS = -1 < sUserAgent.indexOf("SunOS"), isSunOS) && (reSunOS = new RegExp("SunOS (\\d+\\.\\d+(?:\\.\\d+)?)"), reSunOS.test(sUserAgent), isMinSunOS4 = 0 <= compareVersions(RegExp.$1, "4.0"), isMinSunOS5 = 0 <= compareVersions(RegExp.$1, "5.0"), isMinSunOS5_5 = 0 <= compareVersions(RegExp.$1, "5.5"));
var oProgress = null;

function beginProgress() {
    endProgress(), (oProgress = document.createElement("span")).style.position = "absolute", oProgress.style.left = "0px", oProgress.style.top = "0px", oProgress.style.backgroundColor = "#FFFF99", oProgress.innerText = "???..", document.body.appendChild(oProgress)
}

function endProgress() {
    oProgress && (document.body.removeChild(oProgress), oProgress = null)
}

function createHttp() {
    try {
        return new XMLHttpRequest
    } catch (e) {
        for (var objectNames = ["MSXML2.XMLHTTP.5.0", "MSXML2.XMLHTTP.4.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], i = 0; i < objectNames.length; i++) try {
            return new ActiveXObject(objectNames[i])
        } catch (e) {}
        return null
    }
}
isMoz && (XMLDocument.prototype.selectNodes = function(path) {
    for (var oResult = (new XPathEvaluator).evaluate(path, this, null, XPathResult.ORDERER_NODE_ITERATOR_TYPE, null), result = new Array, oElement = oResult.iterateNext(); oElement;) result[oElement.nodeName] = oElement.firstChild.nodeValue, oElement = oResult.iterateNext();
    return result
}, XMLDocument.prototype.selectSingleNode = function(path) {
    return (new XPathEvaluator).evaluate(path, this, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
}, Node.prototype.__defineGetter__("xml", function() {
    return (new XMLSerializer).serializeToString(this, "text/xml")
}));
var loading = !1;

function getResponse(uri, content) {
    try {
        loading = !0;
        document.body;
        var oHttp = createHttp();
        if (aux = -1 == uri.indexOf("?") ? "?" : "&", oHttp.open("POST", uri + aux + "time=" + (new Date).getTime(), !1), content == undefined ? content = "" : oHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), oHttp.send(content), result = new Array, isSafari || isOpera) {
            resultNodes = oHttp.responseXML.firstChild.childNodes;
            for (var i = 0; i < resultNodes.length; i++) null != resultNodes.item(i).firstChild && (result[resultNodes.item(i).nodeName] = resultNodes.item(i).firstChild.nodeValue);
            return loading = !1, result
        }
        if (isIE) {
            resultNodes = oHttp.responseXML.documentElement.childNodes, result = new Array;
            for (i = 0; i < resultNodes.length; i++) result[resultNodes[i].nodeName] = resultNodes[i].text;
            return loading = !1, result
        }
        return loading = !1, oHttp.responseXML.selectNodes("/response/descendant::*")
    } catch (e) {
        alert("exception"), loading = !1;
        document.getElementsByName("body");
        content = document.createElement("div");
        return document.body.appendChild(content), content.innerHTML = '<iframe src="' + uri + '"style="display:none" onload="location.href=location.href"></iframe>', !1
    }
}

function requestHttp(uri) {
    try {
        var oHttp = createHttp();
        return oHttp.open("GET", uri + "&time=" + (new Date).getTime(), !1), oHttp.send(""), isSafari || isOpera ? oHttp.responseXML.firstChild.firstChild.nextSibling.firstChild.nodeValue : oHttp.responseXML.selectSingleNode("/response/error").text
    } catch (e) {
        window.status = e.messge
    }
}

function requestHttpText(uri) {
    var oHttp = createHttp();
    return oHttp.open("GET", uri + "&time=" + (new Date).getTime(), !1), oHttp.send(""), oHttp.responseText
}

function requestHttpXml(uri) {
    var oHttp = createHttp();
    return oHttp.open("GET", uri + "&time=" + (new Date).getTime(), !1), oHttp.send(""), oHttp.responseXML
}

function requestPost(uri, content) {
    var oHttp = createHttp();
    return oHttp.open("POST", uri + "&time=" + (new Date).getTime(), !1), oHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), oHttp.send(content + "&time=" + (new Date).getTime()), oHttp.responseXML.selectSingleNode("/response/error").text
}

function requestPostText(uri, content) {
    var oHttp = createHttp();
    return oHttp.open("POST", uri + "&time=" + (new Date).getTime(), !1), oHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), oHttp.send(content), oHttp.responseText
}

function setRequestBody(elementName, elementValue, boundary) {
    var body = "";
    return (body += "--" + boundary + "\r\n") + ('Content-Disposition: form-data; name="' + elementName + '"\r\n\r\n') + (elementValue + "\r\n")
}

function isNull(field, message) {
    return 0 == field.value.length && (alert(message + "\t"), field.focus(), !0)
}
var tatterImagePopup = null;

function open_img(url) {
    try {
        var left = Math.floor((screen.availWidth - 250) / 2),
            top = Math.floor((screen.availHeight - 100) / 2);
        try {
            tatterImagePopup.close()
        } catch (e) {}(tatterImagePopup = window.open("", "", "width=250, height=100, left=" + left + ", top=" + top + ", scrollbars=no, resizable=yes")).document.open("text/html", "replace"), tatterImagePopup.document.location = "#", tatterImagePopup.document.write('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">\r\n<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ko">\r\n\t<head>\r\n\t\t<meta http-equiv="content-type" content="text/html; charset=utf-8"/>\r\n\t\t<title> :: View :: </title>\r\n\t\t<style type="text/css">\r\n\t\t\thtml, body { width: 100%; height: 100%; margin: 0; padding: 0; cursor: pointer; text-align: center; line-height: 0; }\r\n\t\t\tdiv { width: 100%; height: 100%; overflow: auto; }\r\n\t\t</style>\r\n\t\t<script type="text/javascript">\r\n' + (-1 < navigator.userAgent.indexOf("Safari") ? "\t\t\tfunction resizeImage() {\r\n" : "\t\t\twindow.onload = function() {\r\n") + '\t\t\t\tvar container = document.getElementById("Container");\r\n\t\t\t\tvar image = document.getElementById("Image");\r\n\t\t\t\tvar resizeWidth = 0, resizeHeight = 0, positionTop = 0, positionLeft = 0;\r\n\t\t\t\tvar offsetTop = window.screenTop || window.screenY;\r\n\t\t\t\tvar offsetLeft = window.screenLeft || window.screenX;\r\n\t\t\t\tif(navigator.userAgent.indexOf("Safari") > -1) {\r\n\t\t\t\t\tvar width = Math.min(image.width + 50, screen.availWidth - 100);\r\n\t\t\t\t\tvar height = Math.min(image.height + 50, screen.availHeight - 100);\r\n\t\t\t\t\twindow.moveTo((screen.availWidth - width) / 2, (screen.availHeight - height) / 2);\r\n\t\t\t\t\twindow.resizeTo(width, height);\r\n\t\t\t\t\treturn;\r\n\t\t\t\t}\r\n\t\t\t\tif(container.scrollWidth > container.offsetWidth) {\r\n\t\t\t\t\tresizeWidth += container.scrollWidth - container.offsetWidth;\r\n\t\t\t\t\tif(container.offsetWidth + resizeWidth + 100 > screen.availWidth) {\r\n\t\t\t\t\t\tresizeWidth = screen.availWidth - container.offsetWidth - 100;\r\n\t\t\t\t\t\tpositionLeft = -resizeWidth / 2;\r\n\t\t\t\t\t\tresizeHeight += 20;\r\n\t\t\t\t\t}\r\n\t\t\t\t\telse {\r\n\t\t\t\t\t\tpositionLeft = -resizeWidth / 2;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t\tif(container.scrollHeight > container.offsetHeight) {\r\n\t\t\t\t\tresizeHeight += container.scrollHeight - container.offsetHeight;\r\n\t\t\t\t\tif(container.offsetHeight + resizeHeight + 100 > screen.availHeight - 50) {\r\n\t\t\t\t\t\tresizeHeight = screen.availHeight - container.offsetHeight - 100 - 40;\r\n\t\t\t\t\t\tpositionTop = -resizeHeight / 2;\r\n\t\t\t\t\t\tresizeWidth += 20;\r\n\t\t\t\t\t}\r\n\t\t\t\t\telse {\r\n\t\t\t\t\t\tpositionTop = -resizeHeight / 2;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t\tif(resizeWidth == 0 && resizeHeight == 0)\r\n\t\t\t\t\timage.style.marginTop = ((container.offsetHeight - image.height) / 2) + "px";\r\n\t\t\t\twindow.moveBy(positionLeft, positionTop - 35);\r\n\t\t\t\twindow.resizeBy(resizeWidth, resizeHeight);\r\n\t\t\t}\r\n\t\t<\/script>\r\n\t</head>\r\n\t<body>\r\n' + (-1 < navigator.userAgent.indexOf("Safari") ? '\t\t<div id="Container"><img id="Image" src="' + url + '" alt="" onclick="window.close();" onload="resizeImage();"/></div>\r\n' : '\t\t<div id="Container"><img id="Image" src="' + url + '" onclick="window.close();" alt=""/></div>\r\n') + "\t</body>\r\n</html>"), tatterImagePopup.document.close(), tatterImagePopup.document.focus && tatterImagePopup.document.focus()
    } catch (e) {
        window.open(url, "_blank")
    }
}

function enlargeImagzing(params) {
    var win = window.open("", "img_popup", "width=" + (screen.width - (STD.isIE ? 10 : 0)) + ",height=" + (screen.availHeight - (STD.isIE ? 40 : 0)) + ",left=0,top=0,scrollbars=no,resizable=yes"),
        form = (win.status = params.caption, document.createElement("form"));
    form.action = params.action, form.target = "img_popup", form.method = "post", form.innerHTML = '\t\t<input type="hidden" name="d" value="' + params.id + '"/>\t\t<input type="hidden" name="f" value="' + params.frame + '"/>\t\t<input type="hidden" name="t" value="' + params.transition + '"/>\t\t<input type="hidden" name="n" value="' + params.navigation + '"/>\t\t<input type="hidden" name="si" value="' + params.slideshowInterval + '"/>\t\t<input type="hidden" name="p" value="' + params.page + '"/>\t\t<input type="hidden" name="a" value="' + params.align + '"/>\t\t<input type="hidden" name="i" value="' + decodeURIComponent(params.images) + '"/>\t\t<input type="hidden" name="owner" value="' + params.owner + '"/>\t\t<input type="hidden" name="caption" value="' + params.caption + '"/>\t\t<input type="hidden" name="root" value="' + params.root + '"/>\t', document.body.appendChild(form), form.submit();
    try {
        win.focus()
    } catch (e) {}
}

function scroller(target, acceleration) {
    try {
        var target = document.getElementById(target),
            dest = document.body.scrollTop;
        status = target.scrollTop + "  " + document.body.scrollTop + "  " + acceleration + " = " + (target.offsetTop - document.body.scrollTop) / acceleration, dest += (target.offsetTop - document.body.scrollTop) / acceleration, document.body.scrollTop == dest && clearInterval(scrollerId), window.scroll(0, dest)
    } catch (e) {
        clearInterval(scrollerId), alert(e.message)
    }
}

function eleganceScroll(target, acceleration) {
    acceleration == undefined && (acceleration = 8), scrollerId = window.setInterval("scroller('" + target + "'," + acceleration + ")", 1e3 / 30)
}

function showJukeboxList(id, height) {
    target = document.getElementById("jukeBoxContainer" + id), divTarget = document.getElementById("jukeBox" + id + "Div"), flashTarget = document.getElementById("jukeBox" + id + "Flash"), target.style.height = flashTarget.style.height = divTarget.style.height = height + "px"
}

function getWindowCleintHeight() {
    return null != window.innerHeight ? window.innerHeight : document.documentElement.clientHeight
}

function getWindowCleintWidth() {
    return null != window.innerWidth ? window.innerWidth : document.documentElement.clientWidth
}

function getOffsetTop(obj) {
    return obj ? obj.offsetTop + getOffsetTop(obj.offsetParent) : 0
}

function getOffsetLeft(obj) {
    return obj ? obj.offsetLeft + getOffsetLeft(obj.offsetParent) : 0
}

function updateFeed() {
    var http = createHttp();
    http && (http.open("GET", blogURL + "/feeder?" + (new Date).getTime(), !0), http.send(""))
}

function searchChildNodes(obj, tagName) {
    var nodes = new Array;
    if (obj.hasChildNodes())
        for (var i = 0; i < obj.childNodes.length; i++) {
            var node = obj.childNodes[i];
            if (1 == node.nodeType) {
                node.tagName.toUpperCase() == tagName.toUpperCase() && (nodes[nodes.length] = node);
                for (var childNodes = searchChildNodes(node, tagName), j = 0; j < childNodes.length; j++) nodes[nodes.length] = childNodes[j]
            }
        }
    return nodes
}

function getEmbedCode(movie, width, height, id, bg, FlashVars, menu, transparent, quality, bgcolor, allowScriptAccess, version) {
    try {
        var _FlashVars_object, _FlashVars_embed, _menu_object, _menu_embed, _transparent_object, _transparent_embed, _quality_object, _quality_embed, _bgcolor_object, _bgcolor_embed, _id;
        return movie == undefined || width == undefined || height == undefined ? !1 : (_FlashVars_embed = FlashVars == undefined ? _FlashVars_object = "" : (_FlashVars_object = '<param name="FlashVars" value="' + FlashVars + '" />', ' FlashVars="' + FlashVars + '" '), _menu_embed = menu == undefined ? _menu_object = "" : (_menu_object = '<param name="menu" value="' + menu + '" />', ' menu="' + menu + '" '), _transparent_embed = transparent == undefined ? _transparent_object = "" : (_transparent_object = '<param name="wmode" value="' + transparent + '" />', ' wmode="' + transparent + '" '), _quality_embed = quality == undefined ? _quality_object = "" : (_quality_object = '<param name="quality" value="' + quality + '" />', ' quality="' + quality + '" '), _bgcolor_embed = bgcolor == undefined ? _bgcolor_object = "" : (_bgcolor_object = '<param name="bgcolor" value="' + bgcolor + '" />', ' bgcolor="' + bgcolor + '" '), _id = id == undefined ? "" : 'id="' + id + '"', version == undefined && (version = "7,0,0,0"), STD.isIE ? '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=' + version + '" width="' + width + '" height="' + height + '" ' + _id + ' align="middle"><param name="movie" value="' + movie + '" /><param name="allowScriptAccess" value="always" />' + _FlashVars_object + _menu_object + _quality_object + _bgcolor_object + _transparent_object + "</object>" : "<embed " + _id + ' type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" src="' + movie + '" width="' + width + '" height="' + height + '" allowScriptAccess="always" ' + _FlashVars_embed + _menu_embed + _quality_embed + _bgcolor_embed + _transparent_embed + "/>")
    } catch (e) {
        return !1
    }
}

function writeCode(str, id) {
    id == undefined ? document.write(str) : document.getElementById(id).innerHTML = str
}

function writeCode2(str, id) {
    id == undefined ? document.write(str) : document.getElementById(id).innerHTML = str
}
var StringBuffer = function() {
    this.buffer = new Array
};

function getTagChunks(string, tagName, callback) {
    var pos1, chunks = new Array;
    for (pos2 = 0; - 1 < (pos1 = string.indexOfCaseInsensitive(new RegExp("<" + tagName + "\\s", "i"), pos2));) {
        var chunk = "";
        do {
            if (-1 == (pos2 = string.indexOfCaseInsensitive(new RegExp("</" + tagName, "i"), Math.max(pos1, pos2)))) return chunks
        } while (pos2 += tagName.length + 3, "" != (chunk = string.substring(pos1, pos2)) && chunk.count(new RegExp("<" + tagName + "\\s", "gi")) != chunk.count(new RegExp("</" + tagName, "gi")));
        "function" == typeof callback && (chunk = callback(chunk)), chunks[chunks.length] = chunk
    }
    return chunks
}

function getParentByTagName(tag, obj) {
    for (; obj.tagName != tag.toUpperCase();) obj = obj.parentNode;
    return obj
}

function removeItselfById(id) {
    document.getElementById(id).parentNode.removeChild(document.getElementById(id))
}

function getSelectedRadio(buttonGroup) {
    if (buttonGroup[0]) {
        for (var i = 0; i < buttonGroup.length; i++)
            if (buttonGroup[i].checked) return i
    } else if (buttonGroup.checked) return 0;
    return -1
}

function getSelectedRadioValue(buttonGroup) {
    var i = getSelectedRadio(buttonGroup);
    return -1 == i ? "" : (buttonGroup[i] || buttonGroup).value
}

function showMessage(str) {
    PM.showMessage("" + str, "right", "bottom")
}

function preventEnter(event, onEnter) {
    if (13 != (event = event || window.event).keyCode) return !0;
    event.returnValue = !1, event.cancelBubble = !0;
    try {
        event.preventDefault()
    } catch (e) {}
    return "function" == typeof onEnter && onEnter(), !1
}

function thisMovie(movieName) {
    return (-1 != navigator.appName.indexOf("Microsoft") ? window : document)[movieName]
}

function onClipBoard(result) {
    alert(result ? "엮인글 주소가 복사되었습니다" : "엮인글 주소를 복사하지 못했습니다")
}

function gotoURL(url, target) {
    url && window.open(url, target)
}

function isColorRGB(string) {
    return 3 == string.length ? 0 <= string.search(/[0-9abcdef]{3}/i) : 6 == string.length && 0 <= string.search(/[0-9abcdef]{6}/i)
}

function isNumber(string, minValue, maxValue) {
    return !(string.search(/^(0|-?[1-9][0-9]{0,9})$/) < 0 || (null == maxValue && (maxValue = 2147483646), null == minValue && (minValue = -2147483647), parseInt(string) < minValue) || parseInt(string) > maxValue)
}
StringBuffer.prototype.append = function(str) {
    this.buffer[this.buffer.length] = str
}, StringBuffer.prototype.toString = function() {
    return this.buffer.join("")
}, Array.prototype.push || (Array.prototype.push = function() {
    for (var startLength = this.length, i = 0; i < arguments.length; i++) this[startLength + i] = arguments[i];
    return this.length
}), String.prototype.trim || (String.prototype.trim = function() {
    return this.replace(new RegExp("(^\\s*)|(\\s*$)", "g"), "")
}), String.prototype.replaceAll || (String.prototype.replaceAll = function(source, target) {
    return source = source.replace(new RegExp("(\\W)", "g"), "\\$1"), target = target.replace(new RegExp("\\$", "g"), "$$$$"), this.replace(new RegExp(source, "gm"), target)
}), String.prototype.count || (String.prototype.count = function(search) {
    return (search = "string" == typeof search ? this.match(new RegExp(search.replace(new RegExp("(\\W)", "g"), "\\$1"), "g")) : this.match(search)) ? search.length : 0
}), String.prototype.indexOfCaseInsensitive || (String.prototype.indexOfCaseInsensitive = function(search, from) {
    var string = void 0 === from ? this : this.substring(from, this.length),
        search = ("string" == typeof search ? new RegExp(search.replace(new RegExp("(\\W)", "g"), "\\$1"), "i") : search).exec(string);
    return search ? search.index + ("number" == typeof from ? from : 0) : -1
}), ! function($) {
    $(function() {
        var $btnMore = $(".btn_more"),
            $btnLess = $(".btn_less");
        $btnMore.on("click", function(e) {
            var $btn = $(this),
                moreLessId = $btn.data("id"),
                moreLessId = $("#content" + moreLessId);
            $btn.hide(), moreLessId.show()
        }), $btnLess.on("click", function(e) {
            var moreLessId = $(this).data("id"),
                $btnMore = $("#more" + moreLessId),
                moreLessId = $("#content" + moreLessId);
            $btnMore.show(), moreLessId.hide()
        })
    })
}(tjQuery);
var tistoryFootnote = {
        notes: {},
        add: function(entryId, noteId, content) {
            this.notes[entryId + "_" + noteId] = content
        },
        show: function(anchor, entryId, noteId) {
            var layer = document.createElement("div");
            layer.id = "tistoryFootnoteLayer_" + entryId + "_" + noteId, layer.style.font = "11px/1 Dotum, Sans-serif", layer.style.width = "304px", layer.style.position = "absolute", layer.style.left = getOffsetLeft(anchor) - 86 + "px", layer.style.top = "0px", layer.style.zIndex = "810302", new RegExp("MSIE [1-6]\\.").test(navigator.userAgent) ? layer.innerHTML = "<div style=\"height: 6px; overflow: hidden; filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='//i1.daumcdn.net/cfs.tistory/static/admin/editor/footnotes_01.png', sizingMethod='crop')\"></div><div style=\"width: 304px; padding: 6px 0; filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='//i1.daumcdn.net/cfs.tistory/static/admin/editor/footnotes_02.png', sizingMethod='scale')\"><div style=\"padding-bottom: 6px; border-bottom: 1px solid #f2f1be; font-weight: bold; margin: 0 15px 9px 15px\">각주 " + noteId + '</div><div style="margin: 0 15px; line-height: 1.5">' + this.notes[entryId + "_" + noteId] + "</div></div><div style=\"height: 15px; overflow: hidden; filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='//t1.daumcdn.net/tistory_admin/static/admin/editor/footnotes_03.png', sizingMethod='crop')\"></div>" : layer.innerHTML = '<div style="height: 6px; overflow: hidden; background-image: url(//t1.daumcdn.net/tistory_admin/static/admin/editor/footnotes_01.png)"></div><div style="width: 304; padding: 6px 0; background-image: url(//t1.daumcdn.net/tistory_admin/static/admin/editor/footnotes_02.png)"><div style="padding-bottom: 6px; border-bottom: 1px solid #f2f1be; font-weight: bold; margin: 0 15px 9px 15px">각주 ' + noteId + '</div><div style="margin: 0 15px; line-height: 1.5; overflow: hidden">' + this.notes[entryId + "_" + noteId] + '</div></div><div style="height: 15px; overflow: hidden; background-image: url(//t1.daumcdn.net/tistory_admin/static/admin/editor/footnotes_03.png)"></div>', document.body.appendChild(layer), layer.style.top = getOffsetTop(anchor) - layer.offsetHeight + "px"
        },
        hide: function(entryId, noteId) {
            entryId = document.getElementById("tistoryFootnoteLayer_" + entryId + "_" + noteId);
            entryId.parentNode.removeChild(entryId)
        }
    },
    clickAreaCheck = (! function($) {
        var tistoryCcl_height = {
            1: 72,
            2: 48,
            3: 24,
            4: 48,
            5: 72,
            6: 48
        };
        $(function() {
            function createLayerFocusHandler(obj) {
                var container = obj.container,
                    onClose = obj.onClose;
                return function(event) {
                    var firstElem, focusableElems;
                    "Tab" === event.key && (firstElem = (focusableElems = container.querySelectorAll('a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select')).item(0), focusableElems = focusableElems.item(focusableElems.length - 1), event.shiftKey || document.activeElement !== focusableElems || (event.preventDefault(), onClose()), event.shiftKey) && document.activeElement === firstElem && (event.preventDefault(), onClose())
                }
            }
            $layer = $("#tistoryEtcLayer"), target = null, $body = $(document.body), $button = $(".wrap_btn_etc .btn_post"), layerFocusHandler = createLayerFocusHandler({
                container: $layer.get(0),
                onClose: function() {
                    $(target).attr("aria-expanded", !1), target = null, $layer.hide(), $button.focus()
                }
            }), $body.on("click", hide), document.addEventListener("keydown", layerFocusHandler), $(window).on("resize", position), 1 == $(".bodyInside").length && "absolute" == $(".bodyInside").css("position") && "scroll" == $(".bodyInside").css("overflowY") && $(".bodyInside").on("scroll", position);
            var $layer, target, $button, layerFocusHandler, $body = {
                $layer: $layer,
                show: function(e) {
                    e.preventDefault();
                    var toChangeVisibilityText, toChangeVisibility, visibility, entryId = (e = $(e.target)).parents(".wrap_btn_etc").data("entryId");
                    (e = e.hasClass("ico_etc") ? e.parent() : e).attr("aria-expanded", !0), target = e[0], $layer.empty(), e.hasClass("btn_etc1") ? (visibility = e.parents(".wrap_btn_etc").data("entryVisibility"), e = e.parents(".wrap_btn_etc").data("categoryVisibility"), toChangeVisibility = toChangeVisibilityText = "", "public" === visibility ? (toChangeVisibilityText = "비공개로 전환", toChangeVisibility = "private") : "private" === visibility && (toChangeVisibilityText = "공개로 전환", toChangeVisibility = "public"), $layer.append($('<div class="bundle_post"><button type="button" class="btn_mark" role="modify">수정</button><button type="button" class="btn_mark" role="delete">삭제</button>' + (visibility = (visibility = "") != toChangeVisibilityText ? "public" == e ? '<button type="button" class="btn_mark" role="' + toChangeVisibility + '">' + toChangeVisibilityText + "</button>" : '<button type="button" class="btn_mark" role="' + toChangeVisibility + '" style="opacity:0.3" disabled>' + toChangeVisibilityText + "</button>" : visibility) + '<span class="ico_postbtn ico_arrbt"></span></div>'))) : $layer.append($('<div class="bundle_post"><button type="button" class="btn_mark" role="report">신고하기</button><span class="ico_postbtn ico_arrbt"></span></div>')), position(), $layer.data("entryId", entryId), $layer.show()
                },
                hide: hide
            };

            function position() {
                null != target && $layer.css({
                    left: 0,
                    bottom: $(target).height() + 12
                })
            }

            function hide(e) {
                $(e.target).hasClass("btn_mark") || $(e.target).hasClass("btn_etc1") || $(e.target).hasClass("btn_etc2") || $(e.target).hasClass("ico_etc") || ($(target).attr("aria-expanded", !1), target = null, $layer.hide())
            }
            var tistorySns = function() {
                var copyUrlHtml, $layer = $("#tistorySnsLayer"),
                    target = null,
                    $button = $(".wrap_btn_share .btn_post"),
                    layerFocusHandler = createLayerFocusHandler({
                        container: $layer.get(0),
                        onClose: function() {
                            $(target).attr("aria-expanded", !1), target = null, $layer.hide(), $button.focus()
                        }
                    });

                function position() {
                    null != target && $layer.css({
                        left: 0,
                        bottom: $(target).height() + 12
                    })
                }

                function hide(e) {
                    $(e.target).hasClass("btn_mark") || $(e.target).hasClass("ico_sns") || $(e.target).hasClass("btn_share") || $(e.target).hasClass("ico_share") || ($(target).attr("aria-expanded", !1), target = null, $layer.hide())
                }
                return 1 == $layer.length && (copyUrlHtml = navigator.userAgent.match(/ipad|ipod|iphone/i) ? "" : '<a href="#none" class="btn_mark" data-service="url"><span class="ico_sns ico_url"></span>URL 복사</a>', copyUrlHtml = $('<div class="bundle_post"><a href="#none" class="btn_mark" data-service="facebook"><span class="ico_sns ico_fb"></span>페이스북으로 공유</a><a href="#none" class="btn_mark" data-service="kakaostory"><span class="ico_sns ico_ks"></span>카카오스토리로 공유</a>' + (".daum.net" == window.location.hostname.substr(-9) ? "" : '<a href="#none" class="btn_mark" data-service="twitter"><span class="ico_sns ico_tw"></span>트위터로 공유</a>') + copyUrlHtml + '<span class="ico_postbtn ico_arrbt"></span></div>'), $layer.append(copyUrlHtml)), $(document.body).on("click", hide), document.addEventListener("keydown", layerFocusHandler), $(window).on("resize", position), 1 == $(".bodyInside").length && "absolute" == $(".bodyInside").css("position") && "scroll" == $(".bodyInside").css("overflowY") && $(".bodyInside").on("scroll", position), {
                    $layer: $layer,
                    show: function(e) {
                        e.preventDefault();
                        var $this = $(this);
                        (e = (e = $(e.target)).hasClass("ico_share") ? e.parent() : e).attr("aria-expanded", !0), target = e[0], $layer.data("thumbnail-url", $this.data("thumbnail-url")), $layer.data("title", $this.data("title")), $layer.data("description", $this.data("description")), $layer.data("profile-image", $this.data("profile-image")), $layer.data("profile-name", $this.data("profile-name")), $layer.data("pc-url", $this.data("pc-url")), $layer.data("relative-pc-url", $this.data("relative-pc-url")), $layer.data("blog-title", $this.data("blog-title")), position(), $layer.show()
                    },
                    hide: hide
                }
            }();
            try {
                isDaumblogDomain() ? Kakao.init("d0aa8b850efdc64970656aa1390790b3") : Kakao.init("3e6ddd834b023f24221217e370daed18")
            } catch (e) {}
            var SOCIAL_SHARE = {
                kakaostory: {
                    url: "https://story.kakao.com/share",
                    width: 640,
                    height: 400,
                    makeShareUrl: function(url) {
                        return this.url + "?url=" + encodeURIComponent(url)
                    }
                },
                facebook: {
                    url: "https://www.facebook.com/sharer/sharer.php",
                    width: 640,
                    height: 400,
                    makeShareUrl: function(url) {
                        return this.url + "?display=popup&u=" + encodeURIComponent(url)
                    }
                },
                twitter: {
                    url: "https://twitter.com/intent/tweet",
                    width: 640,
                    height: 400,
                    makeShareUrl: function(url) {
                        return this.url + "?text=" + encodeURIComponent(tistorySns.$layer.data("title")) + "&url=" + encodeURIComponent(url)
                    }
                }
            };
            $("#tistorySnsLayer").on("click", ".bundle_post a", function(e) {
                e.preventDefault();
                var e = $(this),
                    service = SOCIAL_SHARE[e.data("service")],
                    url = tistorySns.$layer.data("pc-url");
                service ? window.open(service.makeShareUrl(url), "", "width=" + service.width + ", height=" + service.height) : "url" == e.data("service") && (window.clipboardData ? window.clipboardData.setData("Text", url) : ((service = $("<textarea readonly='true'></textarea>")).val(url), $("body").append(service), service[0].select(), document.execCommand("copy"), service.remove()), showTooltip("URL이 복사되었습니다."))
            }), $("#tistoryEtcLayer").on("click", ".bundle_post button", function(e) {
                var $this = $(this),
                    role = $this.attr("role"),
                    $this = $this.parents(".layer_post").data("entryId");
                "modify" == role ? location.href = addUriPrefix("/manage/post/" + $this + "?returnURL=" + location.href) : "delete" == role ? deleteEntry($this) : "private" == role ? changeVisibility($this, 0) : "public" == role ? changeVisibility($this, 20) : "report" == role && window.open(window.TistoryBlog.tistoryUrl + "/toolbar/popup/abuseReport/?entryId=" + $this, "ThisBlogReportPopup", "width=550, height=510, toolbar=no, menubar=no, status=no, scrollbars=no")
            }), $(".sns_btn").on("click", tistorySns.show), $(".ico_statistics").parent().on("click", function(e) {
                e.preventDefault();
                e = $(this).data("entryId");
                window.open(addUriPrefix("/manage/statistics/entry/" + e))
            }), $(".btn_subscription").on("click", function(e) {
                e.preventDefault();
                var e = $(this).data("blogId"),
                    url = $(this).data("url"),
                    device = $(this).data("device");
                $(this).data("doing") || ($(this).data("doing", !0), ($(this).hasClass("following") ? unfollowBlog : followBlog)(e, $(this), url, device))
            }), $(".ico_etc").parent().on("click", $body.show), $(".postbtn_ccl").mouseover(function() {
                var layer = document.createElement("div"),
                    type = this.dataset.cclType,
                    cclLayerInnerHtml = (layer.id = "tistoryCclLayer", layer.classList.add("layer_ccl"), layer.style.display = "block", layer.style.position = "absolute", layer.style.left = $(this).offset().left - 100 + this.clientWidth + "px", layer.style.top = $(this).offset().top - 28 - tistoryCcl_height[$(this).data("cclType")] + "px", layer.style.zIndex = "810302", '<span class="txt_mark"><span class="ico_postbtn ico_ccl1"></span>저작자표시</span>');
                "6" != type && "1" != type && "5" != type || (cclLayerInnerHtml += '<span class="txt_mark"><span class="ico_postbtn ico_ccl2"></span>비영리</span>'), "1" != type && "2" != type || (cclLayerInnerHtml += '<span class="txt_mark"><span class="ico_postbtn ico_ccl3"></span>변경금지</span>'), "4" != type && "5" != type || (cclLayerInnerHtml += '<span class="txt_mark"><span class="ico_postbtn ico_ccl4"></span>동일조건</span>'), layer.innerHTML = '<div class="bundle_ccl">' + cclLayerInnerHtml + '<span class="ico_postbtn ico_arrbt"></span></div>', document.body.appendChild(layer)
            }).mouseout(function() {
                var layer = document.getElementById("tistoryCclLayer");
                layer.parentNode.removeChild(layer)
            })
        })
    }(tjQuery), !1),
    old_div = (document.onclick = function() {
        clickAreaCheck ? clickAreaCheck = !1 : divDisplay(old_div, "none")
    }, "");

function divDisplay(objId, act, check) {
    clickAreaCheck = !0, "" != old_div && document.getElementById(old_div) && (document.getElementById(old_div).style.display = "none"), "" != objId && document.getElementById(objId) && (document.getElementById(objId).style.display = act), 1 == check && (old_div = objId)
}
var checkCharLength = {
    config: {
        curValue: "",
        limitLength: 0,
        formId: "",
        outTextId: "",
        timer: null
    },
    init: function(limit_length, fId, txtId, isBgImg) {
        this.config.limitLength = limit_length, this.config.formId = fId, this.config.outTextId = txtId, this.start()
    },
    clearTimer: function() {
        null != this.config.timer && "undefined" != this.config.timer && (clearTimeout(this.config.timer), this.config.timer = null)
    },
    start: function() {
        try {
            var comment = document.getElementById(this.config.formId),
                length = calculate_msglen(comment.value);
            this.config.curValue != comment.value && (this.config.curValue = comment.value, (document.getElementById(this.config.outTextId).innerHTML = length) > this.config.limitLength && (alert("최대 " + this.config.limitLength + "byte이므로 초과된 글자수는 자동으로 삭제됩니다."), comment.value = comment.value.replace(/\r\n$/, ""), comment.value = assert_msglen(comment.value, this.config.limitLength, this.config.outTextId)), this.config.timer = setTimeout("checkCharLength.start()", 10))
        } catch (e) {}
    }
};

function calculate_msglen(message) {
    for (var nbytes = 0, i = 0; i < message.length; i++) {
        var ch = message.charAt(i);
        4 < escape(ch).length ? nbytes += 2 : "\n" == ch ? "\r" != message.charAt(i - 1) && (nbytes += 1) : nbytes += "<" == ch || ">" == ch ? 4 : 1
    }
    return nbytes
}

function assert_msglen(message, maximum, textlimit) {
    for (var inc = 0, nbytes = 0, msg = "", msglen = message.length, i = 0; i < msglen; i++) {
        var ch = message.charAt(i);
        if (4 < escape(ch).length ? inc = 2 : "\n" == ch ? "\r" != message.charAt(i - 1) && (inc = 1) : inc = "<" == ch || ">" == ch ? 4 : 1, maximum < nbytes + inc) break;
        nbytes += inc, msg += ch
    }
    return document.getElementById(textlimit).innerHTML = nbytes, msg
}

function playerControl(id, action) {
    if (action && "add" == action) daumMusicPlayerList.push(id);
    else
        for (var pidA = daumMusicPlayerList, i = 0, l = pidA.length; i < l; i++) id != pidA[i] && document.getElementById(pidA[i]).passiveMusic()
}

function setCookie(name, value, days, domain) {
    var date, expires = "",
        _domain = "";
    days && ((date = new Date).setTime(date.getTime() + 864e5 * days), expires = "; expires=" + date.toGMTString()), domain && (_domain = "domain=" + domain), document.cookie = name + "=" + value + expires + "; path=/;" + _domain
}

function goMobilePage(url, domain) {
    "tistory.com" == (domain = domain || "") || /^.*\.tistory.com$/i.test(domain) ? (setCookie("M_P2M", "Y", "", domain), setCookie("M_P2M", "Y", "", "tistory.com")) : setCookie("M_P2M", "Y", "", window.location.hostname), window.location.href = url
}

function moveCategoryPaging(action, category) {
    setCookie("categoryNo", category), location.href = action
}

function getCookie(name) {
    for (var cookies = document.cookie.split(";"), i = 0; i < cookies.length; i++)
        if (-1 == cookies[i].indexOf("=")) {
            if (name == cookies[i]) return ""
        } else {
            var crumb = cookies[i].split("=");
            if (name == crumb[0].trim()) return unescape(crumb[1].trim())
        }
}

function deleteCookie(name) {
    document.cookie = name + "=" + getCookie(name) + "; expires=Fri, 31 Dec 1999 23:59:59 GMT"
}

function checkTistoryDomain(domain) {
    return !!/^.*\.tistory.com$/i.test(domain)
}
var captchaPlugin = {
    init: function(type) {
        console.log("captchaPlugin init ---"), this.commentCaptchaEvent = "commentCaptchaEvent", this.captchaDate = "captchaDate", "complete" !== type && this.getSkinColor(), this.removeCaptcha("tt_captChaBox"), this.addCommentEvent()
    },
    addCommentEvent: function() {
        console.log("captchaPlugin addCommentEvent ---");
        var commentArea = document.getElementsByName("comment");
        if (0 < commentArea.length) {
            this.type = commentCaptchaType;
            for (var i = commentArea.length; i--;) commentArea[i][this.commentCaptchaEvent] || ("bottom" == commentCaptchaType ? ($TT.on(commentArea[i], "fucus", this.openCaptchaBottom.bind(this)), $TT.on(commentArea[i], "click", this.openCaptchaBottom.bind(this))) : ($TT.on(commentArea[i], "focus", this.openCaptchaBox.bind(this)), $TT.on(commentArea[i], "click", this.openCaptchaBox.bind(this))), commentArea[i][this.commentCaptchaEvent] = !0)
        }
    },
    openCaptchaBottom: function(e) {
        console.log("captchaPlugin openCaptchaBottom ---");
        var parent, submitBtn, tempDiv, date, e = e.target;
        this.removeCaptcha("tt_captChaBottom", e), document.getElementById("tt_captChaBottom") || (parent = e.parentNode, submitBtn = e.nextSibling, date = (new Date).getTime(), (tempDiv = document.createElement("div")).innerHTML = '<div id="tt_captChaBottom" style="color:' + this.skinColor + ';"><div class="wrap_box_border" style="border:1px solid ' + this.skinColor + ';"><div class="wrap_box_bg" style="background-color:' + this.skinColor + ';"></div></div><div id="innerBox" class="inner_captcha_box"><img id="imageCaptcha" src="/plugin/Captcha?width=198&height=50&__T__=' + date + '" width="198" height="50" alt="그림문자" /><div class="wrap_captcha_inner"><input type="text" id="inputCaptcha" autocomplete="off" name="captcha" value=""></input><div id="btnRefresh" class="btn_refresh" style="border:1px solid ' + this.skinColor + ';"><div class="wrap_btn_bg" style="background-color:' + this.skinColor + ';"></div></div><p id="textRefresh" style="top:6px;left:-50px;">새로고침</p><div class="wrap_captcha_notice"><span id="noticeCaptcha">글을 저장하시려면 그림문자를 입력해 주세요.</span></div></div></div></div>', tempDiv = tempDiv.firstChild, e[this.captchaDate] = date, tempDiv[this.captchaDate] = date, parent.insertBefore(tempDiv, submitBtn), e = this.getCoords("tt_captChaBottom", !0), (date = document.getElementById("innerBox")).style.left = e.left + 21 + "px", date.style.top = e.top + 17 + "px", document.getElementById("btnRefresh").addEventListener("click", this.changeCaptchaImg.bind(this)), document.getElementById("textRefresh").addEventListener("click", this.changeCaptchaImg.bind(this)), document.getElementById("inputCaptcha").addEventListener("keyup", this.confirmCaptcha.bind(this)))
    },
    openCaptchaBox: function(e) {
        console.log("captchaPlugin openCaptchaBox ---");
        var pos, date, tempDiv, e = e.target;
        this.removeCaptcha("tt_captChaBox", e), document.getElementById("tt_captChaBox") || (pos = this.getCoords(e), (tempDiv = document.createElement("div")).innerHTML = '<div id="tt_captChaBox"><img id="imageCaptcha" src="/plugin/Captcha?width=198&height=50&__T__=' + date + '" alt="그림문자" /><div class="wrap_captcha_notice"><span id="noticeCaptcha">글을 저장하시려면 그림문자를 입력해 주세요.</span></div><div class="wrap_captcha_inner"><input type="text" id="inputCaptcha" autocomplete="off" value=""></input><img id="btnRefresh" class="btn_refresh" src="//t1.daumcdn.net/tistory_admin/static/images/btn_refresh.gif" /></div></div>', date = (new Date).getTime(), tempDiv = tempDiv.firstChild, e[this.captchaDate] = date, tempDiv[this.captchaDate] = date, document.body.appendChild(tempDiv), tempDiv.style.left = (pos.right + pos.left - 239) / 2 + "px", tempDiv.style.top = pos.bottom + 50 + "px", document.getElementById("btnRefresh").addEventListener("click", this.changeCaptchaImg.bind(this)), document.getElementById("inputCaptcha").addEventListener("keyup", this.confirmCaptcha.bind(this)))
    },
    getCoords: function(el, useOffset, parent) {
        console.log("captchaPlugin getCoords ---");
        for (var uo = useOffset || !1, pa = ("string" == typeof parent ? document.getElementById(parent) : parent) || !1, e = "string" == typeof el ? document.getElementById(el) : el, useOffset = e.offsetWidth, parent = e.offsetHeight, coords = {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }; e;) {
            if (coords.left += e.offsetLeft || 0, coords.top += e.offsetTop || 0, e = e.offsetParent, uo && e) {
                if ("BODY" == e.tagName) break;
                if ("static" !== e.getAttribute("position")) break
            }
            if (pa && pa == e) break
        }
        return coords.right = coords.left + useOffset, coords.bottom = coords.top + parent, coords
    },
    removeCaptcha: function(id, commentArea) {
        console.log("captchaPlugin removeCaptcha ---");
        id = document.getElementById(id);
        !id || commentArea && id[this.captchaDate] === commentArea[this.captchaDate] || id.parentNode.removeChild(id)
    },
    changeCaptchaImg: function(e) {
        console.log("captchaPlugin changeCaptchaImg ---"), e.stopPropagation(), document.getElementById("imageCaptcha").src = "/plugin/Captcha?__T__=" + (new Date).getTime(), document.getElementById("inputCaptcha").value = "", this.confirmCaptcha()
    },
    confirmCaptcha: function(e) {
        console.log("captchaPlugin confirmCaptcha ---");
        var emTextColor, request, inputEl = document.getElementById("inputCaptcha"),
            len = inputEl.value.length,
            wrapNotice = document.getElementById("noticeCaptcha").parentNode,
            originTextColor = "",
            _this = this,
            originTextColor = "bottom" == this.type ? (emTextColor = function() {
                wrapNotice.style.color = "#fc4f4f"
            }, function() {
                wrapNotice.style.color = _this.skinColor
            }) : (emTextColor = function() {
                wrapNotice.style.color = "#fc4f4f"
            }, function() {
                wrapNotice.style.color = "#444"
            });
        5 == len ? ((request = new HTTPRequest("POST", "/plugin/Captcha_Check")).onSuccess = function() {
            ("true" == this.getText() ? (_this.changeNotice("그림문자를 정확히 입력하셨습니다."), originTextColor) : (_this.changeNotice("그림문자를 잘못 입력하셨습니다."), emTextColor))()
        }, request.send("answer=" + inputEl.value)) : (5 < len ? (this.changeNotice("그림문자를 잘못 입력하셨습니다."), emTextColor) : (this.changeNotice("글을 저장하시려면 그림문자를 입력해 주세요."), originTextColor))()
    },
    changeNotice: function(newText) {
        console.log("captchaPlugin changeNotice ---");
        var noticeEl = document.getElementById("noticeCaptcha"),
            wrapNotice = noticeEl.parentNode,
            noticeEl = (wrapNotice.removeChild(noticeEl), document.createElement("div"));
        noticeEl.innerHTML = '<span id="noticeCaptcha">' + newText + "</span>", wrapNotice.appendChild(noticeEl.firstChild)
    },
    getSkinColor: function() {
        console.log("captchaPlugin getSkinColor ---");
        var _this = this,
            request = new HTTPRequest("GET", "/plugin/Captcha_FontColor");
        request.onVerify = function() {
            return this.getText()
        }, request.onSuccess = function() {
            _this.skinColor = this.getText().replaceAll(/"/g, "")
        }, request.onError = function() {
            _this.skinColor = "#333333"
        }, request.send()
    }
};

function setInitialEntryComments(entryId) {
    if (!entryId) return !1;
    var now = Math.floor(Date.now() / 1e3);
    new daum.Ajax({
        url: addUriPrefix("/comment/view"),
        method: "POST",
        timeout: 3e4,
        paramString: "id=" + entryId + "&ts=" + now,
        onsuccess: function(r) {
            for (var r = daum.jsonToObject(r.responseText), area = daum.$("none_display_division_for_comment_list_" + entryId), wrapComment = daum.Element.getParent(area), r = new daum.Template("<div>" + r.data.comment + "</div>").toElement(), comments = daum.Element.getChildElements(r), i = 0, l = comments.length; i < l; i++) comments[i] && wrapComment.insertBefore(comments[i], area)
        },
        onerror: function() {
            alert("댓글을 불러오지 못했습니다.")
        }
    }).request()
}

function getEntryCommentsByPaging(entryId) {
    var commentWritten = daum.$("ttMorePreviousCommentsFirstWrittenFor" + entryId),
        commentId = daum.$("ttMorePreviousCommentsFirstIdFor" + entryId),
        moreButton = daum.$("ttMorePreviousCommentsFor" + entryId),
        moreText = daum.$$(".tt_more_preview_comments_text", moreButton)[0];
    return !(!entryId || !commentWritten) && (!0 === moreButton.gettingMoreComment ? "waiting" : (moreButton.gettingMoreComment = !0, moreText.innerHTML = "이전 댓글을 불러오는 중입니다.", void new daum.Ajax({
        url: addUriPrefix("/comment/view"),
        method: "POST",
        timeout: 3e4,
        paramString: "id=" + entryId + "&ts=" + commentWritten.value,
        onsuccess: function(r) {
            for (var r = daum.jsonToObject(r.responseText), firstComment = daum.$("comment" + commentId.value), wrapComment = daum.Element.getParent(firstComment), tempTag = new daum.Template("<div>" + r.data.comment + "</div>").toElement(), comments = daum.Element.getChildElements(tempTag), i = 0, l = comments.length; i < l; i++) comments[i] && wrapComment.insertBefore(comments[i], firstComment);
            commentWritten.value = r.data.ts, commentId.value = r.data.firstCommentId, r.data.isMoreComments || daum.Element.destroy(moreButton), moreButton.gettingMoreComment = !1, moreText.innerHTML = "이전 댓글 더보기"
        },
        onerror: function() {
            alert("댓글을 불러오지 못했습니다."), moreButton.gettingMoreComment = !1, moreText.innerHTML = "이전 댓글 더보기"
        }
    }).request()))
}

function findArticleArea() {
    var articleArea = document;
    return !daum.$("ttDesk_Container") && (daum.$$(".tt_article_useless_p_margin")[0] ? articleArea = daum.$$(".tt_article_useless_p_margin")[0] : (daum.$$("#content", articleArea)[0] && (articleArea = daum.$("content")), daum.Array.each(["entry", "article"], function(className, idx) {
        daum.$$("." + className, articleArea)[0] && (articleArea = daum.$$("." + className, articleArea)[0])
    }), articleArea === document && (0 < daum.$$(".td_body").length && (articleArea = daum.$$(".td_body")), daum.$("unit2") && (articleArea = daum.$("unit2")), 0 < daum.$$(".memo_style").length && (articleArea = daum.$$(".memo_style")), daum.$("contents")) && (articleArea = daum.$("contents"))), articleArea !== document) && articleArea
}

function checkArticleImage() {
    var addImageEvent = function(area) {
            for (var articleImages = daum.$$("img", area), imgLen = articleImages.length; 0 < imgLen; imgLen--) {
                var image = articleImages[imgLen - 1];
                /\/static\//.test(image.src) || /\/skin\//.test(image.src) || /\/custom\//.test(image.src) || daum.Event.addEvent(image, "error", showErrorImage)
            }
        },
        showErrorImage = function(e) {
            e = e.target;
            e.src = "//t1.daumcdn.net/tistory_admin/static/images/xBoxReplace_250.png", e.removeAttribute("srcset"), e.width = 250, e.height = 250
        },
        articleArea = findArticleArea();
    if (articleArea)
        if (articleArea.length && 0 < articleArea.length)
            for (var areaLen = articleArea.length; 0 < areaLen; areaLen--) addImageEvent(articleArea[areaLen - 1]);
        else addImageEvent(articleArea)
}

function looseURIEncode(string) {
    return string = (string = (string = string.replace(new RegExp("%", "g"), "%25")).replace(new RegExp("\\?", "g"), "%3F")).replace(new RegExp("#", "g"), "%23")
}

function escapeHTML(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
}

function findFragmentAndHighlight(entryid) {
    var el, hash;
    window.location.hash && (hash = window.location.hash.substring(1), null !== (el = document.getElementById(hash)) || 0 != (el = document.getElementsByName(hash)).length ? (window.scrollTo(0, el.offsetTop), highlight()) : void 0 !== (hash = getEntryCommentsByPaging(void 0 === entryid ? window.entryid : entryid)) && !1 === hash || (void 0 === entryid ? setTimeout("findFragmentAndHighlight()", 200) : setTimeout("findFragmentAndHighlight(" + entryid + ")", 200)))
}

function addUriPrefix(path) {
    return this.isDaumblogDomain() ? "/" + window.location.pathname.split("/")[1] + path : path
}

function isDaumblogDomain() {
    return ".daum.net" == window.location.hostname.substr(-9)
}

function TTGallery(containerId) {
    this.containerId = containerId, this.container = document.getElementById(this.containerId), this.container.style.filter = "progid:DXImageTransform.Microsoft.Fade(duration=0.3, overlap=1.0)", this.container.style.textAlign = "center", this.container.style.width = "100%", (this.container.instance = this).numImages = 0, this.imageLoaded = 0, this.offset = 0, this.src = new Array, this.caption = new Array, this.width = new Array, this.height = new Array, this.imageCache = new Array, this.container = null
}

function imageSlide($, wrapper) {
    $(function() {
        $(wrapper).find(".imageslideblock").each(function(index, item) {
            var $item = $(item),
                $indexBtns = $item.find(".mark span"),
                item = $item.find(".btn-prev"),
                $btnNext = $item.find(".btn-next"),
                $imgContainer = $item.find(".image-container"),
                $imgWrap = $item.find(".image-wrap"),
                $img = $item.find("img"),
                currentIndex = 0,
                initialized = !1;

            function init($firstImage, w, h) {
                !initialized && w && h && (w = 860 < w ? 860 : w < 480 ? 480 : w, h = 860 < h ? 860 : h < 300 ? 300 : h, initialized = !0, $item.addClass("ready"), $imgContainer.width(w), $imgContainer.height(h), resizeImage($firstImage))
            }

            function showImage(index) {
                initialized && ((index = index >= $imgWrap.length ? 0 : index) < 0 && (index = $imgWrap.length - 1), currentIndex = index, $imgWrap.removeClass("selected"), $($imgWrap.get(index)).addClass("selected"), $indexBtns.css("backgroundColor", "#d6d6d6"), $($indexBtns.get(index)).css("backgroundColor", "#000"))
            }

            function resizeImage($curImg) {
                $curImg.removeAttr("width"), $curImg.removeAttr("height")
            }
            $img.on("load", function(e) {
                var $curImg = $(this),
                    curWidth = $curImg[0].offsetWidth,
                    curHeight = $curImg[0].offsetHeight;
                0 === currentIndex ? init($curImg, curWidth, curHeight) : resizeImage($curImg)
            }), $indexBtns.on("click", function(e) {
                showImage($(this).data("index"))
            }), item.on("click", function(e) {
                showImage(currentIndex - 1)
            }), $btnNext.on("click", function(e) {
                showImage(currentIndex + 1)
            }), init($img, $img[0].offsetWidth, $img[0].offsetHeight)
        })
    })
}
"undefined" != typeof daum && ("undefined" != typeof window.needCommentCaptcha && (window.captchaPlugin = captchaPlugin, daum.Event.addEvent(window, "load", captchaPlugin.init.bind(captchaPlugin))), daum.Event.addEvent(document, "DOMContentLoaded", checkArticleImage)), TTGallery.prototype.appendImage = function(src, caption, width, height) {
    this.numImages++, (new Image).src = src, this.imageCache[this.imageCache.length] = src, this.src[this.src.length] = src, this.width[this.width.length] = width, this.height[this.height.length] = height, this.caption[this.caption.length] = caption
}, TTGallery.prototype.getControl = function() {
    var control = document.createElement("div");
    return control.style.marginBottom = "10px", control.className = "galleryControl", control.style.font = "bold 0.9em Verdana, Sans-serif", control.innerHTML = "(" + (this.offset + 1) + "/" + this.numImages + ') <a href="#" onclick="document.getElementById(\'' + this.containerId + '\').instance.prev(); return false" style="border: 0px"><img src="' + servicePath + '/image/gallery/gallery_prev.gif" width="20" height="16" alt="PREVIOUS" style="vertical-align: middle"/></a> <a href="#" onclick="document.getElementById(\'' + this.containerId + '\').instance.showImagePopup1(); return false" style="border: 0px"><img src="' + servicePath + '/image/gallery/gallery_enlarge.gif" width="70" height="19" alt="ZOOM" style="vertical-align: middle"/></a> <a href="#" onclick="document.getElementById(\'' + this.containerId + '\').instance.next(); return false" style="border: 0px"><img src="' + servicePath + '/image/gallery/gallery_next.gif" width="20" height="16" alt="NEXT" style="vertical-align: middle"/></a>', control
}, TTGallery.prototype.getImage = function() {
    var image = document.createElement("img");
    return image.instance = this, image.src = this.src[this.offset], image.width = this.width[this.offset], image.height = this.height[this.offset], image.onclick = this.showImagePopup2, image.style.cursor = "pointer", image
}, TTGallery.prototype.getCaption = function() {
    var captionText = this.caption[this.offset],
        caption = (captionText = (captionText = (captionText = (captionText = (captionText = captionText.replace(new RegExp("&amp;?", "gi"), "&")).replace(new RegExp("&lt;?", "gi"), "<")).replace(new RegExp("&gt;?", "gi"), ">")).replace(new RegExp("&quot;?", "gi"), '"')).replace(new RegExp("&#39;?", "gi"), "'"), document.createElement("div"));
    return caption.style.textAlign = "center", caption.style.marginTop = "8px", caption.className = "galleryCaption", caption.appendChild(document.createTextNode(captionText)), caption
}, TTGallery.prototype.show = function(offset) {
    var div;
    this.container = document.getElementById(this.containerId), 0 == this.numImages ? ((div = document.createElement("div")).style.textAlign = "center", div.style.color = "#888", div.style.margin = "10px auto", div.style.font = "bold 2em/1 Verdana, Sans-serif", div.innerHTML = '<img src="' + servicePath + '/image/noImages.gif" alt="No Images">', this.container.appendChild(div)) : (void 0 === offset ? this.offset = 0 : offset < 0 ? this.offset = this.numImages - 1 : offset >= this.numImages ? this.offset = 0 : this.offset = offset, this.container.filters && this.container.filters[0].Apply(), this.container.innerHTML = "", this.container.appendChild(this.getControl()), this.container.appendChild(this.getImage()), this.container.appendChild(this.getCaption()), this.container.filters && this.container.filters[0].Play()), this.container = null
}, TTGallery.prototype.prev = function() {
    this.show(this.offset - 1)
}, TTGallery.prototype.next = function() {
    this.show(this.offset + 1)
}, TTGallery.prototype.showImagePopup1 = function() {
    this.showImagePopup()
}, TTGallery.prototype.showImagePopup2 = function() {
    this.instance.showImagePopup()
}, TTGallery.prototype.showImagePopup = function(offset) {
    try {
        open_img(this.src[this.offset])
    } catch (e) {
        window.open(this.src[this.offset])
    }
}, imageSlide(tjQuery, "body"), ! function($) {
    function close($btn, $parent) {
        $parent.removeClass("open"), $btn.text($parent.attr("data-text-more") || "더보기")
    }

    function init() {
        $('[data-ke-type="moreLess"] .btn-toggle-moreless').on("click", function(e) {
            e.preventDefault();
            var e = $(this),
                $parent = e.parent();
            ($parent.hasClass("open") ? close : function($btn, $parent) {
                $parent.addClass("open"), $btn.text($parent.attr("data-text-less") || "접기"), imageSlide(tjQuery, $parent)
            })(e, $parent)
        }).each(function() {
            var $this = $(this),
                $parent = $this.parent();
            close($this, $parent)
        })
    }
    $(function() {
        init()
    })
}(tjQuery), ! function() {
    var VIDEO_WRAP = "video-wrap";
    window.addEventListener("DOMContentLoaded", function() {
        document.querySelectorAll('figure[data-ke-type="video"]').forEach(function($videoBox) {
            var $wrapper, $video = $videoBox.querySelector("iframe");
            null === $video || function($video) {
                return $video.parentElement.classList.contains(VIDEO_WRAP)
            }($video) || $videoBox.insertBefore(($video = $video, ($wrapper = document.createElement("div")).classList.add(VIDEO_WRAP), $wrapper.appendChild($video), $wrapper), $videoBox.firstChild)
        })
    })
}();
var isIE = -1 != navigator.appVersion.indexOf("MSIE"),
    isWin = -1 != navigator.appVersion.toLowerCase().indexOf("win"),
    isOpera = -1 != navigator.userAgent.indexOf("Opera"),
    deconcept;

function isExplore() {
    return -1 < sUserAgent.indexOf("compatible") && -1 < sUserAgent.indexOf("MSIE") && !isOpera
}

function ControlVersion() {
    var version, axo;
    try {
        version = (axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")).GetVariable("$version")
    } catch (e) {}
    if (!version) try {
        axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), version = "WIN 6,0,21,0", axo.AllowScriptAccess = "always", version = axo.GetVariable("$version")
    } catch (e) {}
    if (!version) try {
        version = (axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3")).GetVariable("$version")
    } catch (e) {}
    if (!version) try {
        axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3"), version = "WIN 3,0,18,0"
    } catch (e) {}
    if (!version) try {
        axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), version = "WIN 2,0,0,11"
    } catch (e) {
        version = -1
    }
    return version
}

function GetSwfVer() {
    var swVer2, versionMajor, tempArrayMajor, versionRevision, flashVer = -1;
    return null != navigator.plugins && 0 < navigator.plugins.length ? (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]) && (swVer2 = navigator.plugins["Shockwave Flash 2.0"] ? " 2.0" : "", versionMajor = (tempArrayMajor = (swVer2 = navigator.plugins["Shockwave Flash" + swVer2].description.split(" "))[2].split("."))[0], tempArrayMajor = tempArrayMajor[1], "d" == (versionRevision = "" == (versionRevision = swVer2[3]) ? swVer2[4] : versionRevision)[0] ? versionRevision = versionRevision.substring(1) : "r" == versionRevision[0] && 0 < (versionRevision = versionRevision.substring(1)).indexOf("d") && (versionRevision = versionRevision.substring(0, versionRevision.indexOf("d"))), flashVer = versionMajor + "." + tempArrayMajor + "." + versionRevision, alert("flashVer=" + flashVer)) : -1 != navigator.userAgent.toLowerCase().indexOf("webtv/2.6") ? flashVer = 4 : -1 != navigator.userAgent.toLowerCase().indexOf("webtv/2.5") ? flashVer = 3 : -1 != navigator.userAgent.toLowerCase().indexOf("webtv") ? flashVer = 2 : isIE && isWin && !isOpera && (flashVer = ControlVersion()), flashVer
}

function DetectFlashVer(reqMajorVer, reqMinorVer, reqRevision) {
    if (-1 == (versionStr = GetSwfVer())) return !1;
    if (0 != versionStr) {
        var versionMajor = (versionArray = isIE && isWin && !isOpera ? (tempArray = versionStr.split(" "), (tempString = tempArray[1]).split(",")) : versionStr.split("."))[0],
            versionMinor = versionArray[1],
            versionRevision = versionArray[2];
        if (versionMajor > parseFloat(reqMajorVer)) return !0;
        if (versionMajor == parseFloat(reqMajorVer)) {
            if (versionMinor > parseFloat(reqMinorVer)) return !0;
            if (versionMinor == parseFloat(reqMinorVer) && versionRevision >= parseFloat(reqRevision)) return !0
        }
        return !1
    }
}

function AC_AddExtension(src, ext) {
    return -1 != src.indexOf("?") ? src.replace(/\?/, ext + "?") : src + ext
}

function AC_Generateobj(objAttrs, params, embedAttrs) {
    var str = "";
    if (isIE && isWin && !isOpera) {
        for (var i in str += "<object ", objAttrs) str += i + '="' + objAttrs[i] + '" ';
        for (var i in params) str += '><param name="' + i + '" value="' + params[i] + '" /> ';
        str += "></object>"
    } else {
        for (var i in str += "<embed ", embedAttrs) str += i + '="' + embedAttrs[i] + '" ';
        str += "> </embed>"
    }
    document.write(str)
}

function AC_FL_RunContent() {
    var ret = AC_GetArgs(arguments, ".swf", "movie", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000", "application/x-shockwave-flash");
    AC_Generateobj(ret.objAttrs, ret.params, ret.embedAttrs)
}

function AC_GetArgs(args, ext, srcParamName, classid, mimeType) {
    var ret = new Object;
    ret.embedAttrs = new Object, ret.params = new Object, ret.objAttrs = new Object;
    for (var i = 0; i < args.length; i += 2) switch (args[i].toLowerCase()) {
        case "classid":
            break;
        case "pluginspage":
            ret.embedAttrs[args[i]] = args[i + 1];
            break;
        case "src":
        case "movie":
            args[i + 1] = AC_AddExtension(args[i + 1], ext), ret.embedAttrs.src = args[i + 1], ret.params[srcParamName] = args[i + 1];
            break;
        case "onafterupdate":
        case "onbeforeupdate":
        case "onblur":
        case "oncellchange":
        case "onclick":
        case "ondblClick":
        case "ondrag":
        case "ondragend":
        case "ondragenter":
        case "ondragleave":
        case "ondragover":
        case "ondrop":
        case "onfinish":
        case "onfocus":
        case "onhelp":
        case "onmousedown":
        case "onmouseup":
        case "onmouseover":
        case "onmousemove":
        case "onmouseout":
        case "onkeypress":
        case "onkeydown":
        case "onkeyup":
        case "onload":
        case "onlosecapture":
        case "onpropertychange":
        case "onreadystatechange":
        case "onrowsdelete":
        case "onrowenter":
        case "onrowexit":
        case "onrowsinserted":
        case "onstart":
        case "onscroll":
        case "onbeforeeditfocus":
        case "onactivate":
        case "onbeforedeactivate":
        case "ondeactivate":
        case "type":
        case "codebase":
            ret.objAttrs[args[i]] = args[i + 1];
            break;
        case "id":
        case "width":
        case "height":
        case "align":
        case "vspace":
        case "hspace":
        case "class":
        case "title":
        case "accesskey":
        case "name":
        case "tabindex":
            ret.embedAttrs[args[i]] = ret.objAttrs[args[i]] = args[i + 1];
            break;
        default:
            ret.embedAttrs[args[i]] = ret.params[args[i]] = args[i + 1]
    }
    return ret.objAttrs.classid = classid, mimeType && (ret.embedAttrs.type = mimeType), ret
}

function ExternalInterfaceManager() {
    this.registerMovie = function(movieName) {
        window.fakeMovies || (window.fakeMovies = new Array), window.fakeMovies[window.fakeMovies.length] = movieName
    }, this.initialize = function() {
        if (document.all && window.fakeMovies) {
            for (i = 0; i < window.fakeMovies.length; i++) window[window.fakeMovies[i]] = new Object;
            STD.addEventListener(window), window.addEventListener("load", initializeExternalInterface, !1)
        }
    }
}

function initializeExternalInterface() {
    for (i = 0; i < window.fakeMovies.length; i++) {
        var method, movieName = window.fakeMovies[i],
            fakeMovie = window[movieName],
            realMovie = document.getElementById(movieName);
        for (method in fakeMovie) realMovie[method] = function() {
            flashFunction = '<invoke name="' + method.toString() + '" returntype="javascript">' + __flash__argumentsToXML(arguments, 0) + "</invoke>", this.CallFunction(flashFunction)
        };
        window[movieName] = realMovie
    }
}

function getVariableFromFlash(myFlashElementID, myVariableName) {
    return document.getElementById(myFlashElementID) ? document.getElementById(myFlashElementID).GetVariable(myVariableName) : ""
}

function AC_FL_RunContentNotWriteGetString() {
    var ret = AC_GetArgs(arguments, ".swf", "movie", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000", "application/x-shockwave-flash");
    return AC_GenerateobjNotWriteGetString(ret.objAttrs, ret.params, ret.embedAttrs)
}

function AC_GenerateobjNotWriteGetString(objAttrs, params, embedAttrs) {
    var str = "";
    if (isExplore()) {
        for (var i in str += "<object ", objAttrs) str += i + '="' + objAttrs[i] + '" ';
        for (var i in str += ">", params) str += '<param name="' + i + '" value="' + params[i] + '" /> '
    }
    for (i in str += "<embed ", embedAttrs) str += i + '="' + embedAttrs[i] + '" ';
    return str += " ></embed>", isIE && (str += "</object>"), str
}
"use strict";
! function(H) {
    function v(c, a, b) {
        var h, l, m, F, r, g = 0,
            d = [],
            f = 0,
            p = !1,
            k = !1,
            q = [],
            t = [],
            y = !1,
            e = (b = b || {}).encoding || "UTF8",
            u = b.numRounds || 1,
            n = z(a, e);
        if (u !== parseInt(u, 10) || u < 1) throw Error("numRounds must a integer >= 1");
        if (F = function(a, b) {
                return A(a, b, c)
            }, r = function(a, b, f, d) {
                var g, e;
                if ("SHA-224" !== c && "SHA-256" !== c) throw Error("Unexpected error in SHA-2 implementation");
                for (g = 15 + (b + 65 >>> 9 << 4), e = 16; a.length <= g;) a.push(0);
                for (a[b >>> 5] |= 128 << 24 - b % 32, a[g] = b + f, f = a.length, b = 0; b < f; b += e) d = A(a.slice(b, b + e), d, c);
                if ("SHA-224" === c) a = [d[0], d[1], d[2], d[3], d[4], d[5], d[6]];
                else {
                    if ("SHA-256" !== c) throw Error("Unexpected error in SHA-2 implementation");
                    a = d
                }
                return a
            }, "SHA-224" === c) m = 512, l = 224;
        else {
            if ("SHA-256" !== c) throw Error("Chosen SHA variant is not supported");
            m = 512, l = 256
        }
        h = w(c), this.setHMACKey = function(a, b, d) {
            var f;
            if (!0 === k) throw Error("HMAC key already set");
            if (!0 === p) throw Error("Cannot set HMAC key after finalizing hash");
            if (!0 === y) throw Error("Cannot set HMAC key after calling update");
            if (a = (b = z(b, (d || {}).encoding || "UTF8")(a)).binLen, b = b.value, d = (f = m >>> 3) / 4 - 1, f < a / 8) {
                for (b = r(b, a, 0, w(c)); b.length <= d;) b.push(0);
                b[d] &= 4294967040
            } else if (a / 8 < f) {
                for (; b.length <= d;) b.push(0);
                b[d] &= 4294967040
            }
            for (a = 0; a <= d; a += 1) q[a] = 909522486 ^ b[a], t[a] = 1549556828 ^ b[a];
            h = F(q, h), g = m, k = !0
        }, this.update = function(a) {
            var c, e, l = 0,
                p = m >>> 5,
                b = n(a, d, f);
            for (a = b.binLen, c = b.value, b = a >>> 5, e = 0; e < b; e += p) l + m <= a && (h = F(c.slice(e, e + p), h), l += m);
            g += l, d = c.slice(l >>> 5), f = a % m, y = !0
        }, this.getHash = function(a, b) {
            var e, m, n;
            if (!0 === k) throw Error("Cannot call getHash after setting HMAC key");
            switch (n = B(b), a) {
                case "HEX":
                    e = function(a) {
                        return C(a, n)
                    };
                    break;
                case "B64":
                    e = function(a) {
                        return D(a, n)
                    };
                    break;
                case "BYTES":
                    e = E;
                    break;
                default:
                    throw Error("format must be HEX, B64, or BYTES")
            }
            if (!1 === p)
                for (h = r(d, f, g, h), m = 1; m < u; m += 1) h = r(h, l, 0, w(c));
            return p = !0, e(h)
        }, this.getHMAC = function(a, b) {
            var e, q;
            if (!1 === k) throw Error("Cannot call getHMAC without first setting HMAC key");
            switch (q = B(b), a) {
                case "HEX":
                    e = function(a) {
                        return C(a, q)
                    };
                    break;
                case "B64":
                    e = function(a) {
                        return D(a, q)
                    };
                    break;
                case "BYTES":
                    e = E;
                    break;
                default:
                    throw Error("outputFormat must be HEX, B64, or BYTES")
            }
            return !1 === p && (b = r(d, f, g, h), h = F(t, w(c)), h = r(b, l, m, h)), p = !0, e(h)
        }
    }

    function k() {}

    function I(c, a, b) {
        var d, f, e, h, n, g = c.length;
        if (a = a || [0], n = (b = b || 0) >>> 3, 0 != g % 2) throw Error("String of HEX type must be in byte increments");
        for (d = 0; d < g; d += 2) {
            if (f = parseInt(c.substr(d, 2), 16), isNaN(f)) throw Error("String of HEX type contains invalid characters");
            for (e = (h = (d >>> 1) + n) >>> 2; a.length <= e;) a.push(0);
            a[e] |= f << 8 * (3 - h % 4)
        }
        return {
            value: a,
            binLen: 4 * g + b
        }
    }

    function J(c, a, b) {
        for (var e, h, g = [], g = a || [0], f = (b = b || 0) >>> 3, d = 0; d < c.length; d += 1) a = c.charCodeAt(d), g.length <= (e = (h = d + f) >>> 2) && g.push(0), g[e] |= a << 8 * (3 - h % 4);
        return {
            value: g,
            binLen: 8 * c.length + b
        }
    }

    function K(c, a, b) {
        var f, e, h, n, l, m, g = [],
            d = 0,
            g = a || [0];
        if (a = (b = b || 0) >>> 3, -1 === c.search(/^[a-zA-Z0-9=+\/]+$/)) throw Error("Invalid character in base-64 string");
        if (e = c.indexOf("="), c = c.replace(/\=/g, ""), -1 !== e && e < c.length) throw Error("Invalid '=' found in base-64 string");
        for (e = 0; e < c.length; e += 4) {
            for (l = c.substr(e, 4), h = n = 0; h < l.length; h += 1) n |= (f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(l[h])) << 18 - 6 * h;
            for (h = 0; h < l.length - 1; h += 1) {
                for (f = (m = d + a) >>> 2; g.length <= f;) g.push(0);
                g[f] |= (n >>> 16 - 8 * h & 255) << 8 * (3 - m % 4), d += 1
            }
        }
        return {
            value: g,
            binLen: 8 * d + b
        }
    }

    function C(c, a) {
        for (var f, b = "", g = 4 * c.length, d = 0; d < g; d += 1) f = c[d >>> 2] >>> 8 * (3 - d % 4), b += "0123456789abcdef".charAt(f >>> 4 & 15) + "0123456789abcdef".charAt(15 & f);
        return a.outputUpper ? b.toUpperCase() : b
    }

    function D(c, a) {
        for (var f, e, b = "", g = 4 * c.length, d = 0; d < g; d += 3)
            for (f = c.length <= (e = d + 1 >>> 2) ? 0 : c[e], e = c.length <= (e = d + 2 >>> 2) ? 0 : c[e], e = (c[d >>> 2] >>> 8 * (3 - d % 4) & 255) << 16 | (f >>> 8 * (3 - (d + 1) % 4) & 255) << 8 | e >>> 8 * (3 - (d + 2) % 4) & 255, f = 0; f < 4; f += 1) 8 * d + 6 * f <= 32 * c.length ? b += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e >>> 6 * (3 - f) & 63) : b += a.b64Pad;
        return b
    }

    function E(c) {
        for (var d, a = "", b = 4 * c.length, g = 0; g < b; g += 1) d = c[g >>> 2] >>> 8 * (3 - g % 4) & 255, a += String.fromCharCode(d);
        return a
    }

    function B(c) {
        var a = {
            outputUpper: !1,
            b64Pad: "="
        };
        if (a.outputUpper = (c = c || {}).outputUpper || !1, a.b64Pad = c.b64Pad || "=", "boolean" != typeof a.outputUpper) throw Error("Invalid outputUpper formatting option");
        if ("string" != typeof a.b64Pad) throw Error("Invalid b64Pad formatting option");
        return a
    }

    function z(c, a) {
        var b;
        switch (a) {
            case "UTF8":
            case "UTF16BE":
            case "UTF16LE":
                break;
            default:
                throw Error("encoding must be UTF8, UTF16BE, or UTF16LE")
        }
        switch (c) {
            case "HEX":
                b = I;
                break;
            case "TEXT":
                b = function(b, c, f) {
                    var l, m, r, p, e = [],
                        h = [],
                        n = 0,
                        e = c || [0],
                        k = (c = f || 0) >>> 3;
                    if ("UTF8" === a)
                        for (l = 0; l < b.length; l += 1)
                            for (h = [], (f = b.charCodeAt(l)) < 128 ? h.push(f) : f < 2048 ? (h.push(192 | f >>> 6), h.push(128 | 63 & f)) : f < 55296 || 57344 <= f ? h.push(224 | f >>> 12, 128 | f >>> 6 & 63, 128 | 63 & f) : (f = 65536 + ((1023 & f) << 10 | 1023 & b.charCodeAt(l += 1)), h.push(240 | f >>> 18, 128 | f >>> 12 & 63, 128 | f >>> 6 & 63, 128 | 63 & f)), m = 0; m < h.length; m += 1) {
                                for (r = (p = n + k) >>> 2; e.length <= r;) e.push(0);
                                e[r] |= h[m] << 8 * (3 - p % 4), n += 1
                            } else if ("UTF16BE" === a || "UTF16LE" === a)
                                for (l = 0; l < b.length; l += 1) {
                                    for (f = b.charCodeAt(l), "UTF16LE" === a && (f = (m = 255 & f) << 8 | f >>> 8), r = (p = n + k) >>> 2; e.length <= r;) e.push(0);
                                    e[r] |= f << 8 * (2 - p % 4), n += 2
                                }
                    return {
                        value: e,
                        binLen: 8 * n + c
                    }
                };
                break;
            case "B64":
                b = K;
                break;
            case "BYTES":
                b = J;
                break;
            default:
                throw Error("format must be HEX, TEXT, B64, or BYTES")
        }
        return b
    }

    function t(c, a) {
        return c >>> a | c << 32 - a
    }

    function L(c, a, b) {
        return c & a ^ ~c & b
    }

    function M(c, a, b) {
        return c & a ^ c & b ^ a & b
    }

    function N(c) {
        return t(c, 2) ^ t(c, 13) ^ t(c, 22)
    }

    function O(c) {
        return t(c, 6) ^ t(c, 11) ^ t(c, 25)
    }

    function P(c) {
        return t(c, 7) ^ t(c, 18) ^ c >>> 3
    }

    function Q(c) {
        return t(c, 17) ^ t(c, 19) ^ c >>> 10
    }

    function R(c, a) {
        var b = (65535 & c) + (65535 & a);
        return ((c >>> 16) + (a >>> 16) + (b >>> 16) & 65535) << 16 | 65535 & b
    }

    function S(c, a, b, g) {
        var d = (65535 & c) + (65535 & a) + (65535 & b) + (65535 & g);
        return ((c >>> 16) + (a >>> 16) + (b >>> 16) + (g >>> 16) + (d >>> 16) & 65535) << 16 | 65535 & d
    }

    function T(c, a, b, g, d) {
        var f = (65535 & c) + (65535 & a) + (65535 & b) + (65535 & g) + (65535 & d);
        return ((c >>> 16) + (a >>> 16) + (b >>> 16) + (g >>> 16) + (d >>> 16) + (f >>> 16) & 65535) << 16 | 65535 & f
    }

    function w(c) {
        var a = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428],
            b = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225];
        switch (c) {
            case "SHA-224":
                c = a;
                break;
            case "SHA-256":
                c = b;
                break;
            case "SHA-384":
            case "SHA-512":
                c = [new k, new k, new k, new k, new k, new k, new k, new k];
                break;
            default:
                throw Error("Unknown SHA variant")
        }
        return c
    }

    function A(c, a, b) {
        var g, d, f, e, h, n, l, m, k, r, p, t, q, v, u, y, w, z, A, B, C, D, E, x = [];
        if ("SHA-224" !== b && "SHA-256" !== b) throw Error("Unexpected error in SHA-2 implementation");
        for (r = 64, t = 1, D = Number, q = R, v = S, u = T, y = P, w = Q, z = N, A = O, C = M, B = L, E = G, b = a[0], g = a[1], d = a[2], f = a[3], e = a[4], h = a[5], n = a[6], l = a[7], p = 0; p < r; p += 1) p < 16 ? (m = c.length <= (k = p * t) ? 0 : c[k], k = c.length <= k + 1 ? 0 : c[k + 1], x[p] = new D(m, k)) : x[p] = v(w(x[p - 2]), x[p - 7], y(x[p - 15]), x[p - 16]), m = u(l, A(e), B(e, h, n), E[p], x[p]), k = q(z(b), C(b, g, d)), l = n, n = h, h = e, e = q(f, m), f = d, d = g, g = b, b = q(m, k);
        return a[0] = q(b, a[0]), a[1] = q(g, a[1]), a[2] = q(d, a[2]), a[3] = q(f, a[3]), a[4] = q(e, a[4]), a[5] = q(h, a[5]), a[6] = q(n, a[6]), a[7] = q(l, a[7]), a
    }
    var G = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];
    "function" == typeof define && define.amd ? define(function() {
        return v
    }) : "undefined" != typeof exports ? "undefined" != typeof module && module.exports ? module.exports = exports = v : exports = v : H.jsSHA = v
}(this), ! function(n) {
    function t(n, t) {
        var r = (65535 & n) + (65535 & t);
        return (n >> 16) + (t >> 16) + (r >> 16) << 16 | 65535 & r
    }

    function e(n, e, o, u, c, f) {
        return t(function(n, t) {
            return n << t | n >>> 32 - t
        }(t(t(e, n), t(u, f)), c), o)
    }

    function o(n, t, r, o, u, c, f) {
        return e(t & r | ~t & o, n, t, u, c, f)
    }

    function u(n, t, r, o, u, c, f) {
        return e(t & o | r & ~o, n, t, u, c, f)
    }

    function c(n, t, r, o, u, c, f) {
        return e(t ^ r ^ o, n, t, u, c, f)
    }

    function f(n, t, r, o, u, c, f) {
        return e(r ^ (t | ~o), n, t, u, c, f)
    }

    function i(n, r) {
        n[r >> 5] |= 128 << r % 32, n[14 + (r + 64 >>> 9 << 4)] = r;
        for (var i, a, h, d, l = 1732584193, g = -271733879, v = -1732584194, m = 271733878, e = 0; e < n.length; e += 16) l = o(i = l, a = g, h = v, d = m, n[e], 7, -680876936), m = o(m, l, g, v, n[e + 1], 12, -389564586), v = o(v, m, l, g, n[e + 2], 17, 606105819), g = o(g, v, m, l, n[e + 3], 22, -1044525330), l = o(l, g, v, m, n[e + 4], 7, -176418897), m = o(m, l, g, v, n[e + 5], 12, 1200080426), v = o(v, m, l, g, n[e + 6], 17, -1473231341), g = o(g, v, m, l, n[e + 7], 22, -45705983), l = o(l, g, v, m, n[e + 8], 7, 1770035416), m = o(m, l, g, v, n[e + 9], 12, -1958414417), v = o(v, m, l, g, n[e + 10], 17, -42063), g = o(g, v, m, l, n[e + 11], 22, -1990404162), l = o(l, g, v, m, n[e + 12], 7, 1804603682), m = o(m, l, g, v, n[e + 13], 12, -40341101), v = o(v, m, l, g, n[e + 14], 17, -1502002290), l = u(l, g = o(g, v, m, l, n[e + 15], 22, 1236535329), v, m, n[e + 1], 5, -165796510), m = u(m, l, g, v, n[e + 6], 9, -1069501632), v = u(v, m, l, g, n[e + 11], 14, 643717713), g = u(g, v, m, l, n[e], 20, -373897302), l = u(l, g, v, m, n[e + 5], 5, -701558691), m = u(m, l, g, v, n[e + 10], 9, 38016083), v = u(v, m, l, g, n[e + 15], 14, -660478335), g = u(g, v, m, l, n[e + 4], 20, -405537848), l = u(l, g, v, m, n[e + 9], 5, 568446438), m = u(m, l, g, v, n[e + 14], 9, -1019803690), v = u(v, m, l, g, n[e + 3], 14, -187363961), g = u(g, v, m, l, n[e + 8], 20, 1163531501), l = u(l, g, v, m, n[e + 13], 5, -1444681467), m = u(m, l, g, v, n[e + 2], 9, -51403784), v = u(v, m, l, g, n[e + 7], 14, 1735328473), l = c(l, g = u(g, v, m, l, n[e + 12], 20, -1926607734), v, m, n[e + 5], 4, -378558), m = c(m, l, g, v, n[e + 8], 11, -2022574463), v = c(v, m, l, g, n[e + 11], 16, 1839030562), g = c(g, v, m, l, n[e + 14], 23, -35309556), l = c(l, g, v, m, n[e + 1], 4, -1530992060), m = c(m, l, g, v, n[e + 4], 11, 1272893353), v = c(v, m, l, g, n[e + 7], 16, -155497632), g = c(g, v, m, l, n[e + 10], 23, -1094730640), l = c(l, g, v, m, n[e + 13], 4, 681279174), m = c(m, l, g, v, n[e], 11, -358537222), v = c(v, m, l, g, n[e + 3], 16, -722521979), g = c(g, v, m, l, n[e + 6], 23, 76029189), l = c(l, g, v, m, n[e + 9], 4, -640364487), m = c(m, l, g, v, n[e + 12], 11, -421815835), v = c(v, m, l, g, n[e + 15], 16, 530742520), l = f(l, g = c(g, v, m, l, n[e + 2], 23, -995338651), v, m, n[e], 6, -198630844), m = f(m, l, g, v, n[e + 7], 10, 1126891415), v = f(v, m, l, g, n[e + 14], 15, -1416354905), g = f(g, v, m, l, n[e + 5], 21, -57434055), l = f(l, g, v, m, n[e + 12], 6, 1700485571), m = f(m, l, g, v, n[e + 3], 10, -1894986606), v = f(v, m, l, g, n[e + 10], 15, -1051523), g = f(g, v, m, l, n[e + 1], 21, -2054922799), l = f(l, g, v, m, n[e + 8], 6, 1873313359), m = f(m, l, g, v, n[e + 15], 10, -30611744), v = f(v, m, l, g, n[e + 6], 15, -1560198380), g = f(g, v, m, l, n[e + 13], 21, 1309151649), l = f(l, g, v, m, n[e + 4], 6, -145523070), m = f(m, l, g, v, n[e + 11], 10, -1120210379), v = f(v, m, l, g, n[e + 2], 15, 718787259), g = f(g, v, m, l, n[e + 9], 21, -343485551), l = t(l, i), g = t(g, a), v = t(v, h), m = t(m, d);
        return [l, g, v, m]
    }

    function a(n) {
        for (var r = "", t = 0; t < 32 * n.length; t += 8) r += String.fromCharCode(n[t >> 5] >>> t % 32 & 255);
        return r
    }

    function h(n) {
        var t, r = [];
        for (r[(n.length >> 2) - 1] = void 0, t = 0; t < r.length; t += 1) r[t] = 0;
        for (t = 0; t < 8 * n.length; t += 8) r[t >> 5] |= (255 & n.charCodeAt(t / 8)) << t % 32;
        return r
    }

    function g(n) {
        for (var t, e = "0123456789abcdef", o = "", r = 0; r < n.length; r += 1) t = n.charCodeAt(r), o += e.charAt(t >>> 4 & 15) + e.charAt(15 & t);
        return o
    }

    function v(n) {
        return unescape(encodeURIComponent(n))
    }

    function m(n) {
        return function(n) {
            return a(i(h(n), 8 * n.length))
        }(v(n))
    }

    function s(n, t) {
        return function(n, t) {
            var r, o = h(n),
                u = [],
                c = [];
            for (u[15] = c[15] = void 0, 16 < o.length && (o = i(o, 8 * n.length)), r = 0; r < 16; r += 1) u[r] = 909522486 ^ o[r], c[r] = 1549556828 ^ o[r];
            return n = i(u.concat(h(t)), 512 + 8 * t.length), a(i(c.concat(n), 640))
        }(v(n), v(t))
    }

    function A(n, t, r) {
        return t ? (r ? s : function(n, t) {
            return g(s(n, t))
        })(t, n) : (r ? m : function(n) {
            return g(m(n))
        })(n)
    }
    "function" == typeof define && define.amd ? define(function() {
        return A
    }) : "object" == typeof module && module.exports ? module.exports = A : n.md5 = A
}(this), void 0 === deconcept && (deconcept = new Object), "undefined" == typeof deconcept.util && (deconcept.util = new Object), "undefined" == typeof deconcept.SWFObjectUtil && (deconcept.SWFObjectUtil = new Object), deconcept.SWFObject = function(_1, id, w, h, _5, c, _7, _8, _9, _a) {
    document.getElementById && (this.DETECT_KEY = _a || "detectflash", this.skipDetect = deconcept.util.getRequestParameter(this.DETECT_KEY), this.params = new Object, this.variables = new Object, this.attributes = new Array, _1 && this.setAttribute("swf", _1), id && this.setAttribute("id", id), w && this.setAttribute("width", w), h && this.setAttribute("height", h), _5 && this.setAttribute("version", new deconcept.PlayerVersion(_5.toString().split("."))), this.installedVer = deconcept.SWFObjectUtil.getPlayerVersion(), !window.opera && document.all && 7 < this.installedVer.major && (deconcept.SWFObject.doPrepUnload = !0), c && this.addParam("bgcolor", c), this.addParam("quality", _7 || "high"), this.setAttribute("useExpressInstall", !1), this.setAttribute("doExpressInstall", !1), _a = _8 || window.location, this.setAttribute("xiRedirectUrl", _a), this.setAttribute("redirectUrl", ""), _9) && this.setAttribute("redirectUrl", _9)
}, deconcept.SWFObject.prototype = {
    useExpressInstall: function(_d) {
        this.xiSWFPath = _d || "expressinstall.swf", this.setAttribute("useExpressInstall", !0)
    },
    setAttribute: function(_e, _f) {
        this.attributes[_e] = _f
    },
    getAttribute: function(_10) {
        return this.attributes[_10]
    },
    addParam: function(_11, _12) {
        this.params[_11] = _12
    },
    getParams: function() {
        return this.params
    },
    addVariable: function(_13, _14) {
        this.variables[_13] = _14
    },
    getVariable: function(_15) {
        return this.variables[_15]
    },
    getVariables: function() {
        return this.variables
    },
    getVariablePairs: function() {
        var key, _16 = new Array,
            _18 = this.getVariables();
        for (key in _18) _16[_16.length] = key + "=" + _18[key];
        return _16
    },
    getSWFHTML: function() {
        var _19 = "";
        if (navigator.plugins && navigator.mimeTypes && navigator.mimeTypes.length) {
            this.getAttribute("doExpressInstall") && (this.addVariable("MMplayerType", "PlugIn"), this.setAttribute("swf", this.xiSWFPath)), _19 = '<embed type="application/x-shockwave-flash" src="' + this.getAttribute("swf") + '" width="' + this.getAttribute("width") + '" height="' + this.getAttribute("height") + '" style="' + this.getAttribute("style") + '"', _19 += ' id="' + this.getAttribute("id") + '" name="' + this.getAttribute("id") + '" ';
            var _1a = this.getParams();
            for (key in _1a) _19 += [key] + '="' + _1a[key] + '" ';
            var _1c = this.getVariablePairs().join("&");
            0 < _1c.length && (_19 += 'flashvars="' + _1c + '"'), _19 += "/>"
        } else {
            this.getAttribute("doExpressInstall") && (this.addVariable("MMplayerType", "ActiveX"), this.setAttribute("swf", this.xiSWFPath)), _19 = '<object id="' + this.getAttribute("id") + '" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="' + this.getAttribute("width") + '" height="' + this.getAttribute("height") + '" style="' + this.getAttribute("style") + '">', _19 += '<param name="movie" value="' + this.getAttribute("swf") + '" />';
            var key, _1d = this.getParams();
            for (key in _1d) _19 += '<param name="' + key + '" value="' + _1d[key] + '" />';
            _1c = this.getVariablePairs().join("&");
            0 < _1c.length && (_19 += '<param name="flashvars" value="' + _1c + '" />'), _19 += "</object>"
        }
        return _19
    },
    write: function(_20) {
        var _21;
        return this.getAttribute("useExpressInstall") && (_21 = new deconcept.PlayerVersion([6, 0, 65]), this.installedVer.versionIsValid(_21)) && !this.installedVer.versionIsValid(this.getAttribute("version")) && (this.setAttribute("doExpressInstall", !0), this.addVariable("MMredirectURL", escape(this.getAttribute("xiRedirectUrl"))), document.title = document.title.slice(0, 47) + " - Flash Player Installation", this.addVariable("MMdoctitle", document.title)), this.skipDetect || this.getAttribute("doExpressInstall") || this.installedVer.versionIsValid(this.getAttribute("version")) ? (("string" == typeof _20 ? document.getElementById(_20) : _20).innerHTML = this.getSWFHTML(), !0) : ("" != this.getAttribute("redirectUrl") && document.location.replace(this.getAttribute("redirectUrl")), !1)
    }
}, deconcept.SWFObjectUtil.getPlayerVersion = function() {
    var _23 = new deconcept.PlayerVersion([0, 0, 0]);
    if (navigator.plugins && navigator.mimeTypes.length) {
        var x = navigator.plugins["Shockwave Flash"];
        x && x.description && (_23 = new deconcept.PlayerVersion(x.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s+r|\s+b[0-9]+)/, ".").split(".")))
    } else if (navigator.userAgent && 0 <= navigator.userAgent.indexOf("Windows CE"))
        for (var axo = 1, _26 = 3; axo;) try {
            _26++, axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + _26), _23 = new deconcept.PlayerVersion([_26, 0, 0])
        } catch (e) {
            axo = null
        } else {
            try {
                axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")
            } catch (e) {
                try {
                    axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), _23 = new deconcept.PlayerVersion([6, 0, 21]);
                    axo.AllowScriptAccess = "always"
                } catch (e) {
                    if (6 == _23.major) return _23
                }
                try {
                    axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
                } catch (e) {}
            }
            null != axo && (_23 = new deconcept.PlayerVersion(axo.GetVariable("$version").split(" ")[1].split(",")))
        }
    return _23
}, deconcept.PlayerVersion = function(_29) {
    this.major = null != _29[0] ? parseInt(_29[0]) : 0, this.minor = null != _29[1] ? parseInt(_29[1]) : 0, this.rev = null != _29[2] ? parseInt(_29[2]) : 0
}, deconcept.PlayerVersion.prototype.versionIsValid = function(fv) {
    return !(this.major < fv.major) && (this.major > fv.major || !(this.minor < fv.minor || !(this.minor > fv.minor) && this.rev < fv.rev))
}, deconcept.util = {
    getRequestParameter: function(_2b) {
        var q = document.location.search || document.location.hash;
        if (null == _2b) return q;
        if (q)
            for (var _2d = q.substring(1).split("&"), i = 0; i < _2d.length; i++)
                if (_2d[i].substring(0, _2d[i].indexOf("=")) == _2b) return _2d[i].substring(_2d[i].indexOf("=") + 1);
        return ""
    }
}, deconcept.SWFObjectUtil.cleanupSWFs = function() {
    for (var _2f = document.getElementsByTagName("OBJECT"), i = _2f.length - 1; 0 <= i; i--)
        for (var x in _2f[i].style.display = "none", _2f[i]) "function" == typeof _2f[i][x] && (_2f[i][x] = function() {})
}, !deconcept.SWFObject.doPrepUnload || deconcept.unloadSet || (deconcept.SWFObjectUtil.prepUnload = function() {
    __flash_unloadHandler = function() {}, __flash_savedUnloadHandler = function() {}, window.attachEvent("onunload", deconcept.SWFObjectUtil.cleanupSWFs)
}, window.attachEvent("onbeforeunload", deconcept.SWFObjectUtil.prepUnload), deconcept.unloadSet = !0), !document.getElementById && document.all && (document.getElementById = function(id) {
    return document.all[id]
});
var getQueryParamValue = deconcept.util.getRequestParameter,
    FlashObject = deconcept.SWFObject,
    SWFObject = deconcept.SWFObject;
! function($) {
    function getOriginalImageUrl(url) {
        return url.match(/^https?:\/\/\S+\.daumcdn\.net\/cfile\/\S+\/\S+/) ? url + "?original" : url.match(/^https?:\/\/\S+\.daumcdn\.net\/(blogfile|planet)\/\S+\/\S+/) ? url.split("?")[0] + "?original" : url
    }

    function renderLightBox() {
        "undefined" != typeof lightbox && lightbox.option({
            stopEvent: !0
        }), $("img.txc-image, img.tx-daum-image").each(function(index, element) {
            var href;
            element.parentElement && "a" === element.parentElement.tagName.toLowerCase() ? (href = $(element.parentElement).attr("href")) && -1 < href.indexOf("javascripｔ:realImgView") && (element.parentElement.setAttribute("href", getOriginalImageUrl(element.getAttribute("src"))), element.parentElement.setAttribute("data-lightbox", "lightbox"), element.parentElement.setAttribute("data-alt", element.getAttribute("data-filename"))) : $(element).wrap('<a href="' + getOriginalImageUrl(element.getAttribute("src")) + '" data-lightbox="lightbox" data-alt="' + element.getAttribute("data-filename") + '"></a>')
        })
    }
    $(document).ready(function() {
        renderLightBox()
    })
}(tjQuery);