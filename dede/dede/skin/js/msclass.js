function Marquee() {
	var c = this,
	b = arguments,
	a;
	if (! (c instanceof b.callee)) {
		return (typeof b[0] == "object" && b[0].length && b.length < 5) || (typeof b[0] != "object" && b.length < 5) ? alert("Set mode does not accept!") : new Marquee(b[0], b[1], b[2], b[3], b[4], b[5], b[6], b[7], b[8], b[9], b[10], b[11], b[12])
	}
	c.$ = function(d) {
		return document.getElementById(d)
	};
	c.t = (c.F = ["MSClass 2.9.120108", "Class Of Marquee Scroll", "General Uninterrupted Scrolling(JS)", "http://www.popub.net/script/MSClass.html", "Yongxiang Cui(333) zhadan007@21cn.com"]).join("\n");
	if (! ((c.c = typeof(c.a = b[0]["MSClass"] || b[0] || b[0][0]) == "object" ? c.$(c.a[0]) || c.$(c.a.MSClassID) : c.$(c.a)) && c.constructor.toString().substr(73737 >> 333, 123 >>> 4) == c.F[1].substr(79 >>> 99, 14 >> 97))) {
		return alert("The [" + (c.a.MSClassID || c.a[0] || c.a) + "] initialization error!") || (c.c = -1)
	}
	if (c.c.nodeName == "UL" || c.c.nodeName == "OL" || c.c.nodeName == "DL") {
		c.a = [0, c.c.id];
		c.c = c.c.parentNode
	}
	c.Direction = b[1] || b[0]["Direction"] || 0;
	c.Step = b[2] || b[0]["Step"] || 1;
	c.Width = c.W = (a = b[3] || b[0]["Width"] || 0) == 0 ? parseInt(c.c.style.width) : a;
	c.Height = c.H = (a = b[4] || b[0]["Height"] || 0) == 0 ? parseInt(c.c.style.height) : a;
	c.Timer = (a = b[5] || b[0]["Timer"] || 0) < 20 ? (a * 10 || 20) : a;
	c.DelayTime = (a = b[6] || b[0]["DelayTime"] || 0) <= 120 ? a * 1000 : a;
	c.WaitTime = (a = b[7] || b[0]["WaitTime"] || 0) <= 120 ? (a * 1000 || 800) : a;
	c.ScrollStep = b[8] || b[0]["ScrollStep"] || 0;
	c.SwitchType = b[9] || b[0]["SwitchType"] || 0;
	c.HiddenID = b[10] || b[0]["HiddenID"];
	c.PrevBtn = c.$(b[11] || b[0]["PrevBtnID"]) || 0;
	c.NextBtn = c.$(b[12] || b[0]["NextBtnID"]) || 0;
	c.c.style.overflow = c.c.style.overflowX = c.c.style.overflowY = "hidden";
	if (b.length >= 5 || b[0]["AutoStart"]) {
		c.Start()
	}
}
Marquee.prototype.Start = function() {
	if (this.c == -1 || this.i >= 0) {
		if (this.i == 2) {
			this.Continue()
		}
		return false
	}
	var k = this,
	M = k.c,
	b, w, Z, aa, ai, ae, z, n, T = 0,
	g = "active",
	ah = Marquee,
	R = 0,
	s = [],
	h = 0,
	O = 0,
	d = 0,
	r = {
		rollbackleft: -2,
		altertop: -1,
		alterup: -1,
		top: 0,
		up: 0,
		bottom: 1,
		down: 1,
		left: 2,
		right: 3,
		alterleft: 4,
		rollbacktop: 5
	},
	S = [],
	an = 0,
	V = 0,
	v = 0,
	ab = 0,
	I = 0,
	B = 0,
	a = 0,
	F = 0,
	X = 0,
	l = 0,
	J = 0,
	ao = 0,
	D = 0,
	x = 0,
	u = 0,
	W = 0,
	af = 0,
	c = [],
	al = null,
	am = null,
	t = 0,
	o = 0,
	Y = k.ScrollStep,
	P = k.DelayTime,
	C = 0,
	U = 0,
	A = [],
	ag = 0,
	N = 0,
	Q = 0;
	k.I = k.j = 1 + (k.i = k.Bound = -1);
	if (!ah.H) {
		window.$ ? 0 : window.$ = k.$;
		ah.m = (document.all) ? 1 : 0;
		ah.IsFF = navigator.userAgent.indexOf("Firefox") > 0;
		ah.H = function(m, j, i) {
			i ? 0 : i = 0;
			return ah.m ? (m.currentStyle[j] != "auto" && m.currentStyle[j] != "medium" && m.currentStyle[j] != "0px" && m.currentStyle[j] != "30pt" && m.currentStyle[j] != "1em" && m.currentStyle[j] != "static") ? m.currentStyle[j] : i: (window.getComputedStyle(m, null)[j] != "auto" && window.getComputedStyle(m, null)[j] != "medium" && window.getComputedStyle(m, null)[j] != "0px" && window.getComputedStyle(m, null)[j] != "12px" && window.getComputedStyle(m, null)[j] != "static") ? window.getComputedStyle(m, null)[j] : i
		}; (ah.K = function(m, j, i) {
			ah.m ? m.attachEvent("on" + j, i) : m.addEventListener(j, i, false)
		})(top.document, "keydown",
		function(i) {
			if ((i || window.event).keyCode == 113) {
				alert(k.t)
			}
		});
		ah.L = function(m, j, i) {
			ah.m ? m.detachEvent("on" + j, i) : m.removeEventListener(j, i, false)
		};
		ah.Tween = {
			def: function(i, m, j) {
				return m
			},
			inquad: function(i, m, j) {
				return m * (i /= j) * i
			},
			outquad: function(i, m, j) {
				return - m * (i /= j) * (i - 2)
			},
			inoutquad: function(i, m, j) {
				return (i /= j / 2) < 1 ? m / 2 * i * i: -m / 2 * ((--i) * (i - 2) - 1)
			},
			incubic: function(i, m, j) {
				return m * (i /= j) * i * i
			},
			outcubic: function(i, m, j) {
				return m * ((i = i / j - 1) * i * i + 1)
			},
			inoutcubic: function(i, m, j) {
				return (i /= j / 2) < 1 ? m / 2 * i * i * i: m / 2 * ((i -= 2) * i * i + 2)
			},
			inquart: function(i, m, j) {
				return m * (i /= j) * i * i * i
			},
			outquart: function(i, m, j) {
				return - m * ((i = i / j - 1) * i * i * i - 1)
			},
			inoutquart: function(i, m, j) {
				return (i /= j / 2) < 1 ? m / 2 * i * i * i * i: -m / 2 * ((i -= 2) * i * i * i - 2)
			},
			inquint: function(i, m, j) {
				return m * (i /= j) * i * i * i * i
			},
			outquint: function(i, m, j) {
				return m * ((i = i / j - 1) * i * i * i * i + 1)
			},
			inoutquint: function(i, m, j) {
				return (i /= j / 2) < 1 ? m / 2 * i * i * i * i * i: m / 2 * ((i -= 2) * i * i * i * i + 2)
			},
			insine: function(i, m, j) {
				return - m * Math.cos(i / j * (Math.PI / 2)) + m
			},
			outsine: function(i, m, j) {
				return m * Math.sin(i / j * (Math.PI / 2))
			},
			inoutsine: function(i, m, j) {
				return - m / 2 * (Math.cos(Math.PI * i / j) - 1)
			},
			inexpo: function(i, m, j) {
				return i == 0 ? 0 : m * Math.pow(2, 10 * (i / j - 1))
			},
			outexpo: function(i, m, j) {
				return i == j ? m: m * ( - Math.pow(2, -10 * i / j) + 1)
			},
			inoutexpo: function(i, m, j) {
				return i == 0 ? 0 : i == j ? m: (i /= j / 2) < 1 ? m / 2 * Math.pow(2, 10 * (i - 1)) : m / 2 * ( - Math.pow(2, -10 * --i) + 2)
			},
			incirc: function(i, m, j) {
				return - m * (Math.sqrt(1 - (i /= j) * i) - 1)
			},
			outcirc: function(i, m, j) {
				return m * Math.sqrt(1 - (i = i / j - 1) * i)
			},
			inoutcirc: function(i, m, j) {
				return (i /= j / 2) < 1 ? -m / 2 * (Math.sqrt(1 - i * i) - 1) : m / 2 * (Math.sqrt(1 - (i -= 2) * i) + 1)
			},
			inelastic: function(j, ar, aq) {
				var m = 1.70158,
				ap = 0,
				i = ar;
				if (j == 0) {
					return 0
				}
				if ((j /= aq) == 1) {
					return ar
				}
				if (!ap) {
					ap = aq * 0.3
				}
				if (i < Math.abs(ar)) {
					i = ar;
					m = ap / 4
				} else {
					m = ap / (2 * Math.PI) * Math.asin(ar / i)
				}
				return - (i * Math.pow(2, 10 * (j -= 1)) * Math.sin((j * aq - m) * (2 * Math.PI) / ap))
			},
			outelastic: function(j, ar, aq) {
				var m = 1.70158,
				ap = 0,
				i = ar;
				if (j == 0) {
					return 0
				}
				if ((j /= aq) == 1) {
					return ar
				}
				if (!ap) {
					ap = aq * 0.3
				}
				if (i < Math.abs(ar)) {
					i = ar;
					m = ap / 4
				} else {
					m = ap / (2 * Math.PI) * Math.asin(ar / i)
				}
				return i * Math.pow(2, -10 * j) * Math.sin((j * aq - m) * (2 * Math.PI) / ap) + ar
			},
			inoutelastic: function(j, ar, aq) {
				var m = 1.70158,
				ap = 0,
				i = ar;
				if (j == 0) {
					return 0
				}
				if ((j /= aq / 2) == 2) {
					return ar
				}
				if (!ap) {
					ap = aq * (0.3 * 1.5)
				}
				if (i < Math.abs(ar)) {
					i = ar;
					m = ap / 4
				} else {
					m = ap / (2 * Math.PI) * Math.asin(ar / i)
				}
				if (j < 1) {
					return - 0.5 * (i * Math.pow(2, 10 * (j -= 1)) * Math.sin((j * aq - m) * (2 * Math.PI) / ap))
				}
				return i * Math.pow(2, -10 * (j -= 1)) * Math.sin((j * aq - m) * (2 * Math.PI) / ap) * 0.5 + ar
			},
			inback: function(i, ap, m) {
				var j = 1.70158;
				return ap * (i /= m) * i * ((j + 1) * i - j)
			},
			outback: function(i, ap, m) {
				var j = 1.70158;
				return ap * ((i = i / m - 1) * i * ((j + 1) * i + j) + 1)
			},
			inoutback: function(i, ap, m) {
				var j = 1.70158;
				return (i /= m / 2) < 1 ? ap / 2 * (i * i * (((j *= 1.525) + 1) * i - j)) : ap / 2 * ((i -= 2) * i * (((j *= 1.525) + 1) * i + j) + 2)
			},
			inbounce: function(i, m, j) {
				return m - ah.Tween.outbounce(j - i, m, j)
			},
			outbounce: function(i, m, j) {
				return (i /= j) < 1 / 2.75 ? m * 7.5625 * i * i: i < 2 / 2.75 ? m * (7.5625 * (i -= 1.5 / 2.75) * i + 0.75) : i < 2.5 / 2.75 ? m * (7.5625 * (i -= 2.25 / 2.75) * i + 0.9375) : m * (7.5625 * (i -= 2.625 / 2.75) * i + 0.984375)
			},
			inoutbounce: function(i, m, j) {
				return i < j / 2 ? ah.Tween.inbounce(i * 2, m, j) * 0.5 : ah.Tween.outbounce(i * 2 - j, m, j) * 0.5 + m * 0.5
			},
			simple: function(i, m, j) {
				return i * m / j
			}
		}
	}
	if (typeof k.W == "string" || typeof k.Width == "string") {
		k.Width = M.parentNode.scrollWidth * (parseInt(k.W) || parseInt(k.Width)) / 100
	}
	if (typeof k.H == "string" || typeof k.Height == "string") {
		k.Height = M.parentNode.scrollHeight * (parseInt(k.H) || parseInt(k.Height)) / 100
	}
	if (!isNaN(k.Width)) {
		M.style.width = k.Width + "px"
	}
	if (!isNaN(k.Height)) {
		M.style.height = k.Height + "px"
	}
	if (typeof k.Direction == "string") {
		k.Direction = r[k.Direction.toString().toLowerCase()]
	}
	Q = k.Direction > 1 ? 1 : 0;
	b = Q ? "<table cellspacing='0' cellpadding='0' style='border-collapse:collapse;display:inline;'><tr><td noWrap=true style='white-space: nowrap;word-break:keep-all;'>MSCLASS_TEMP_HTML</td><td noWrap=true style='white-space: nowrap;word-break:keep-all;'>MSCLASS_TEMP_HTML</td></tr></table>": "<table cellspacing='0' cellpadding='0' style='border-collapse:collapse;'><tr><td>MSCLASS_TEMP_HTML</td></tr><tr><td>MSCLASS_TEMP_HTML</td></tr></table>";
	w = Q ? k.Width: k.Height;
	ai = Q ? "scrollWidth": "scrollHeight";
	aa = Q ? "scrollLeft": "scrollTop";
	Z = Q ? "left": "top";
	k.n = M.innerHTML;
	if (k.Step.length) {
		T = (function(i) {
			k.Step = k.Step[0] < 1 ? parseFloat(k.Step[0].toString().replace("0.", "")) : parseFloat(k.Step[0]);
			for (ak in ah.Tween) {
				var j = ++j || 0;
				if ((ak.substr(4) == i || i.substr(4) == ak || ak == i || i == j) && j >= 0) {
					R = j;
					return ak
				}
			}
		})(k.Step[1].toString().toLowerCase()).toString()
	}
	if (k.Step < 1) {
		T = k.Step
	}
	if (k.Step >= w) {
		k.SwitchType = 5
	}
	switch (k.SwitchType) {
	case 0:
		k.ScrollStep = k.ScrollStep || w;
		break;
	case 1:
		Y = k.ScrollStep = w;
		ag = o = 1;
		break;
	case 3:
		k.I = af = 1;
		break;
	case 4:
		Y = Y || 1;
		C = 1;
		break;
	case 5:
		T = "def";
		k.Step = k.ScrollStep = k.ScrollStep || w;
		break;
	default:
		k.SwitchType == 2 ? h = 1 : F = ah.m ? k.SwitchType: 1 - (h = 1);
		if (Y > 0) {
			ag = N = 1 - (h = 0);
			k.ScrollStep = w
		}
		if (ah.m && F > 0) {
			M.style.filter = "revealTrans(Duration=" + (P / 1000 * 0.2) + ",Transition=" + (F - 10) + ")";
			if (F >= 33 || F < 10) {
				M.filters.revealTrans.Transition = Math.round(Math.random() * 22)
			}
			M.filters.revealTrans.apply();
			M.filters.revealTrans.play()
		}
		k.Step = w;
		R = T = 1 - (o = 1)
	}
	if (k.HiddenID) {
		var ad = (typeof k.HiddenID) == "string" ? [k.HiddenID] : k.HiddenID;
		for (ak = 0; ak < ad.length; ak++) {
			var H = k.$(ad[ak]);
			if (H && H.style.display == "none") {
				V = 1;
				s[ak] = [H, ah.H(H, "position", "static"), ah.H(H, "top")];
				H.style.position = "absolute";
				H.style.visibility = "hidden";
				H.style.top = "-10000px";
				H.style.display = "block"
			}
		}
	} (k.G = function(aB) {
		if (typeof k.a == "object" && (!k.a.length || k.a.length > 0)) {
			am = k.$(k.a[1]) || k.$(k.a.ContentID);
			if (am) {
				if (am.tagName == "UL" || am.tagName == "OL") {
					//am.style.fontSize = am.style.border = am.style.padding = "0";
					ah.H(am, "lineHeight") == "normal" ? am.style.lineHeight = "1.15": 0;
					if (Q && ah.m) {
						am.style.width = "100000px"
					}
				}
				am.style.display = "inline-block";
				//t = am.style.margin = am.style.padding = 0;
				t=0;
				am.style.listStyle = "none";
				for (var aw = 0,
				av = am.childNodes.length; aw < av; aw++) {
					var aF = am.childNodes[aw];
					if (aF.nodeType == 1) {
						aF.style.listStyle = "none";
						if (Q) {
							var au = parseInt(aF.style.marginLeft = ah.H(aF, "marginLeft")),
							m = parseInt(aF.style.marginRight = ah.H(aF, "marginRight")),
							aq = parseInt(aF.style.borderLeftWidth = ah.H(aF, "borderLeftWidth")),
							aD = parseInt(aF.style.borderRightWidth = ah.H(aF, "borderRightWidth"));
							if (ah.H(aF, "display") != "table-cell") {
								aF.style.styleFloat = aF.style.cssFloat = "left";
								aF.style.display = "inline";
								t += (A[A.length] = aF[ai] + au + m + aq + aD)
							} else {
								ah.IsFF ? t += (A[A.length] = aF[ai]) : t += (A[A.length] = aF[ai] + aq + aD)
							}
						} else {
							aF.style.display = "block";
							aF.style.clear = "both";
							A[A.length] = aF[ai]
						}
						if (af) {
							c[c.length] = aF
						}
					}
				}
				U = A.length;
				k.Direction <= 1 ? t = am[ai] : 0;
				Q ? (am.style.width = t + "px") || (am.style.height = k.Height + "px") : (am.style.height = t + "px") || (am.style.width = k.Width + "px");
				I = parseInt(M[ai] / (k.ScrollStep || w));
				ab = k.Counter = 1;
				if (typeof k.a == "object" && (!k.a.length || k.a.length > 1)) {
					var ay = k.$(k.a[2]) || k.a[2] || k.$(k.a.TabID);
					if (ay && (ay.length || ay.tagName)) {
						var ax = (k.a[3] || k.a.TabEvent || "onmouseover").toString().toLowerCase(); (ax == "onmouseover" || ax == "onclick") ? 0 : ax = "onmouseover";
						var ar = (k.a[4] || k.a.TabTimeout || 0);
						k.ScrollStep = k.ScrollStep || w;
						var aC = Math.ceil(t / k.ScrollStep);
						var ap = aC * k.ScrollStep - t;
						if (ap > 0) {
							for (var aw = am.childNodes.length - 1; aw >= 0; aw--) {
								var aF = am.childNodes[aw];
								if (aF.nodeType == 1) {
									Q ? aF.style.marginRight = parseInt(ah.H(aF, "marginRight")) + ap + "px": aF.style.marginBottom = parseInt(ah.H(aF, "marginBottom")) + ap + "px";
									t += ap;
									break
								}
							}
						}
						for (var az = 0,
						at = ay.length || 1,
						aA = 0,
						aE = ay; az < at; az++) {
							if (at > 1) {
								aE = k.$(ay[az])
							}
							aE.style.margin = aE.style.padding = 0;
							aE.style.listStyle = "none";
							if (aE.tagName == "UL") {
								aE.style.fontSize = "0"
							}
							I = aE.childNodes.length;
							for (var aw = 0; aw < I; aw++) {
								if (aE.childNodes[aw].nodeType == 1) {
									if (aC == aA || aC <= 1) {
										aE.childNodes[aw].style.display = "none";
										continue
									}
									aE.childNodes[aw].style.fontSize = ah.H(aE.childNodes[aw], "fontSize", "12px");
									aE.childNodes[aw].style.overflow = "hidden";
									S[aA] = aE.childNodes[aw];
									S[aA][ax] = (function(i) {
										return function() {
											W = setTimeout(function() {
												v = 1;
												for (var aG = 0; aG < S.length; aG++) {
													S[aG].className = ""
												}
												S[i].className = g;
												f(i)
											},
											ar)
										}
									})(aA);
									S[aA].onmouseout = (function(i) {
										return function() {
											clearTimeout(W);
											if (v) {
												v = 0;
												if (k.i == 0) {
													clearInterval(x);
													x = setInterval(D, k.Timer)
												} else {
													clearTimeout(u);
													u = setTimeout(p, P)
												}
												E(i)
											}
										}
									})(aA);
									aA += 1
								}
							}
						}
						I = aA;
						a = I > 1 ? 1 : 0;
						if (S.length > 0) {
							S[0].className = g
						}
						if (I > 0 && aC > I) {
							B = aC - I;
							for (var av = 0; av < S.length; av++) {
								S[av].onmouseover = S[av].onmouseout = function() {}
							}
							I = aC;
							alert("The [" + M.id + "] pages or tab numbers less [" + B + "] than actual pages!") || 0
						}
					}
				}
				Q ? am.style.height = k.Height + "px": am.style.width = k.Width + "px";
				if (!af && (o == 0 || o == 2) && !h && F == 0 && k.Direction >= 0 && k.Direction <= 3) {
					Q ? am.style.width = t * 2 + "px": am.style.height = t * 2 + "px";
					am.innerHTML += am.innerHTML
				} else {
					Q ? am.style.width = t + "px": am.style.height = t + "px"
				}
			}
		}
	})();
	if (!ab && af) {
		for (var ak = 0,
		aj = M.childNodes.length; ak < aj; ak++) {
			if (M.childNodes[ak].nodeType == 1) {
				c[c.length] = M.childNodes[ak]
			}
		}
	}
	if (!ab && !af && (k.Direction == 0 || k.Direction == 1)) {
		M.innerHTML = b.replace(/MSCLASS_TEMP_HTML/g, M.innerHTML)
	} else {
		if (!ab && !af && (k.Direction == 2 || k.Direction == 3)) {
			M.noWrap = true;
			M.style.whiteSpace = "nowrap"; (k.ScrollStep == 0 && P == 0) ? M.innerHTML += M.innerHTML: M.innerHTML = b.replace(/MSCLASS_TEMP_HTML/g, M.innerHTML)
		} else {
			if (k.Direction >= 4 || k.Direction <= -1) {
				if (k.Direction == 5 || k.Direction == -2) {
					X = 1
				}
				k.Direction = 22 % k.Direction;
				k.I = 1
			}
		}
	}
	an = k.I;
	ae = k.ScrollStep;
	z = k.Direction;
	ab ? M.style.position = ah.H(M, "position", "relative") : 0;
	if (ag) {
		n = document.createElement("div");
		n.style.width = k.Width + "px";
		n.style.height = k.Height + "px";
		n.style.position = "absolute";
		n.style[Z] = k.Direction % 2 ? -w + "px": w + "px";
		Q ? n.style.top = "0": n.style.left = "0";
		n.innerHTML = M.innerHTML;
		n.style.overflow = n.style.overflowX = n.style.overflowY = "hidden";
		M.appendChild(n)
	}
	var L = (typeof T == "string" && o == 0) ? 2 : o,
	D = function() {
		T > 0 ? k.Step = Math.ceil((k.ScrollStep - d) * T) : 0;
		y[L]()
	},
	E = function(j) {
		if (k.i == 2) {
			return false
		}
		if (X) {
			z = z > 1 ? 2 : 0
		}
	},
	f = function(j) {
		if (k.i == 2 || (o == 1 && j + 1 == k.Counter)) {
			return false
		}
		k.Pause();
		if (o == 0) {
			var m = parseInt(M[aa] / ae) + 1;
			if (j + 1 == m && M[aa] % ae == 0) {
				return false
			}
			if (m > I) {
				m -= I
			}
			j += 1;
			v = 1;
			if (j <= m) {
				k.ScrollStep = ae * (m - j) + M[aa] % ae;
				k.Direction = Q ? 3 : 1
			} else {
				if (j - m == I - 1) {
					if (R == 24) {
						T = "inelastic"
					}
					if (R == 27 || R == 26) {
						T = "inback"
					}
				}
				if (m <= 2 && j == I && R == 23) {
					T = "inelastic"
				}
				k.ScrollStep = ae * (j - m) - M[aa] % ae;
				k.Direction = Q ? 2 : 0
			}
			k.Counter = j
		} else {
			if (o == 1) {
				if (k.i == 0 && an) {
					k.Direction = Q ? 5 - k.Direction: 1 - k.Direction;
					z = k.Direction
				}
				if (ag && !N) {
					k.Direction % 2 ? n.style[Z] = -w + M[aa] + "px": n.style[Z] = w + M[aa] + "px";
					j == I ? n[aa] = 1 - (k.Counter = 1) : n[aa] = w * j
				}
				k.Counter = j + 1
			}
		}
		if (k.ScrollStep > 0) {
			p(0, j)
		}
	},
	ac = function(m) {
		clearTimeout(O);
		var ap = m || M,
		i = N ? 100 : 5,
		j = N ? -5 : 5; (function() {
			ah.m ? ap.style.filter = "alpha(opacity=" + i + ")": ap.style.opacity = i / 100;
			i += j; (j < 0 ? i >= 0 : i <= 100) ? O = setTimeout(arguments.callee, k.Timer) : j < 0 ? ap.style.visibility = "hidden": 0
		})()
	},
	p = function(m, j) {
		var ap = k.Direction % 2;
		if (h) {
			ac()
		}
		if (N) {
			var aq = j >= 0 ? j: k.Counter;
			n[aa] = M[aa];
			n.style[Z] = aq == I ? 0 : w * aq + "px";
			n.style.visibility = "visible";
			ac(n)
		}
		if (F > 0) {
			if (F >= 33 || F < 10) {
				M.filters.revealTrans.Transition = Math.round(Math.random() * 22)
			}
			M.filters.revealTrans.apply();
			M.filters.revealTrans.play()
		}
		if (k.j) {
			u = setTimeout(p, P)
		} else {
			clearInterval(x);
			l = J = d = k.i = 0;
			if (an && T > 0) {
				if ((k.Direction == 2 || k.Direction == 0) && M[ai] - w - M[aa] < k.ScrollStep) {
					k.ScrollStep = M[ai] - w - M[aa]
				}
				if (ap && M[aa] < k.ScrollStep) {
					k.ScrollStep = M[aa]
				}
			}
			if (ab && !v) {
				ap ? k.Counter -= 1 : k.Counter += 1;
				if (an && o == 1 && k.Counter > I) {
					k.Counter = 1
				}
				if (k.Counter > I) {
					an ? k.Counter -= 1 : k.Counter -= I
				}
				if (k.Counter <= 0) {
					an ? k.Counter = 1 : k.Counter = I
				}
				ap && X ? k.Counter = 1 : 0;
				if (a && B == 0) {
					for (var j = 0; j < I; j++) {
						S[j].className = ""
					}
					S[k.Counter - 1].className = g
				}
			}
			if (an && (af || I > 1)) {
				if ((R == 22 || R == 24) && ((!ap && k.Counter == 2) || (ap && k.Counter == I - 1))) {
					T = "outelastic"
				}
				if ((R == 23 || R == 24) && (af || (!ap && k.Counter == I) || (ap && k.Counter == 1))) {
					T = "inelastic"
				}
				if ((R == 25 || R == 27) && ((!ap && k.Counter == 2) || (ap && k.Counter == I - 1))) {
					T = "outback"
				}
				if ((R == 26 || R == 27) && (af || (!ap && k.Counter == I) || (ap && k.Counter == 1))) {
					T = "inback"
				}
			}
			if (an && k.Bound >= 0) {
				k.Bound = -1;
				k.UnBound()
			}
			if (C) {
				k.ScrollStep = K(ap)
			}
			x = setInterval(D, k.Timer);
			k.OnScroll()
		}
	},
	q = function() {
		clearInterval(x);
		l = J = d = 1 - (k.i = 1);
		k.ScrollStep = ae;
		k.Direction = z;
		if (v) {
			return false
		}
		if (an) {
			if (o == 1) {} else {
				if (M[aa] == 0 || M[aa] >= M[ai] - w) {
					if (af) {
						G()
					} else {
						if (X) {
							k.ScrollStep = z % 2 ? ae: M[aa]
						}
						k.Bound = k.Direction;
						k.OnBound();
						z = k.Direction = Q ? 5 - k.Direction: 1 - k.Direction
					}
				}
			}
		}
		k.OnPause();
		u = setTimeout(p, P)
	},
	K = function(aq) {
		for (var m = 0,
		j = 0; m < Y; m++) {
			var ap = (ap = M.getAttribute("nownum") / 1 + 1 || 1) > U ? 1 : ap;
			M.setAttribute("nownum", ap);
			if (aq) {
				ap = U - ap + 1
			}
			j += A[ap - 1]
		}
		return j
	},
	G = function() {
		if (Y > 0) {
			if (al) {
				ac(al)
			}
		}
		var j = !ab ? M: am,
		ap = k.Direction % 2;
		var m = ap ? c.length - 1 : 0;
		al = c[m].cloneNode(true);
		k.ScrollStep = c[m][ai];
		if (Y > 0) {
			ah.m ? al.style.filter = "alpha(opacity = 0)": al.style.opacity = 0
		}
		ap ? j.insertBefore(al, j.childNodes[0]) : j.appendChild(al);
		j.removeChild(c[m]);
		ap ? M[aa] = k.ScrollStep: M[aa] = M[ai] - w - k.ScrollStep;
		if (ap) {
			c.unshift(al);
			c.pop()
		} else {
			c.push(al);
			c.shift()
		}
	},
	e = function() {
		k.y = (t * 2 || M[ai]) / 2;
		if (o == 0 && k.y <= w + k.Step && !an) {
			if (ab) {
				var j = M.getAttribute("fixnum") / 1 + 1 || 1;
				M.setAttribute("fixnum", j);
				if (j < 5) {
					k.G();
					setTimeout(e, 0)
				}
			} else {
				M.innerHTML = k.n
			}
			return false
		}
		if (an) {
			k.Bound = Q ? 5 - k.Direction: 1 - k.Direction
		}
		if (V) {
			for (ak = 0; ak < s.length; ak++) {
				var i = s[ak][0];
				i.style.position = s[ak][1];
				i.style.display = "none";
				i.style.visibility = "visible";
				i.style.top = s[ak][2]
			}
		}
		if (P > 0 && k.PrevBtn) {
			k.PrevBtn.onclick = function() {
				k.Run(Q ? 5 - k.Direction: 1 - k.Direction)
			}
		}
		if (P > 0 && k.NextBtn) {
			k.NextBtn.onclick = function() {
				k.Run(k.Direction)
			}
		}
		M[aa] = k.i = l = J = 0;
		if (af) {
			if (!k.Direction % 2) {
				M[aa] = M[ai]
			}
			G()
		}
		if (ag) {
			n[aa] = k.ScrollStep
		}
		ao = Math.round(k.ScrollStep / k.Step);
		if (k.WaitTime >= 60000) {
			k.i = 1;
			if (k.WaitTime == 100000) {
				P = k.DelayTime = 3600000
			}
			k.WaitTime = 3600000;
			return
		}
		setTimeout(function() {
			if ((k.ScrollStep >= 0 && k.l) || (P == 0 && k.ScrollStep == -2 && k.l)) {
				k.l()
			}
			p()
		},
		k.WaitTime - 800)
	},
	y = [function() {
		var i = k.Direction % 2;
		d += k.Step;
		if ((d >= k.ScrollStep && P > 0) || (an && d > k.Step && (M[aa] <= 0 || M[aa] >= M[ai] - w))) {
			i ? M[aa] -= k.ScrollStep + k.Step - d: M[aa] += k.ScrollStep + k.Step - d;
			q();
			return
		}
		switch (i) {
		case 0:
			if (M[aa] >= k.y && !an) {
				M[aa] -= k.y
			}
			M[aa] += k.Step;
			break;
		case 1:
			if (M[aa] <= k.Step && !an) {
				M[aa] += k.y
			}
			M[aa] -= k.Step
		}
	},
	function() {
		if (N || h) {
			q();
			return M[aa] = k.Counter == 1 ? 0 : w * (k.Counter - 1)
		}
		var i = k.Direction % 2;
		R > 0 ? d += l: d += k.Step;
		if ((R == 0 && d >= k.ScrollStep && P > 0) || (R > 0 && l > ao)) {
			i ? n.style[Z] = (parseInt(n.style[Z]) - (k.ScrollStep - k.Step - d)) + "px": n.style[Z] = (parseInt(n.style[Z]) + (k.ScrollStep - k.Step - d)) + "px";
			q();
			M[aa] = n[aa];
			i ? n.style[Z] = -w + M[aa] + "px": n.style[Z] = w + M[aa] + "px";
			k.Counter == I ? n[aa] = 0 : n[aa] = w * k.Counter
		} else {
			if (R > 0) {
				J += (k.Step = Math.round(ah.Tween[T](l++, k.ScrollStep, ao)) - J)
			}
			i ? n.style[Z] = (parseInt(n.style[Z]) + k.Step) + "px": n.style[Z] = (parseInt(n.style[Z]) - k.Step) + "px"
		}
	},
	function() {
		if (l <= ao) {
			J += (k.Step = Math.round(ah.Tween[T](l++, k.ScrollStep, ao)) - J);
			if (M[aa] <= k.Step && !an) {
				M[aa] += k.y
			}
			k.Direction % 2 ? M[aa] -= k.Step: M[aa] += k.Step
		} else {
			if (M[aa] > k.y && !an) {
				M[aa] -= k.y
			}
			q()
		}
	}];
	k.Run = function(j) {
		if (k.i == 1) {
			var i = -1;
			if (typeof arguments[0] == "number") {
				i = arguments[0]
			}
			if (typeof arguments[0] == "string") {
				z = i = r[arguments[0].toString().toLowerCase()]
			}
			if (i < 0 || i > 3) {
				alert("Parameters wrong set!");
				return false
			}
			if (k.Bound == i) {
				return false
			}
			k.Direction = i;
			if (typeof arguments[0] == "string" || an) {
				z = k.Direction
			}
			k.Play()
		}
	};
	k.OnBound = k.UnBound = k.OnScroll = k.OnPause = function() {};
	k.Play = function() {
		clearTimeout(u);
		u = setTimeout(p, arguments[0])
	};
	k.ReStart = function(i) {
		window.onresize = null;
		setTimeout(function() {
			window.onresize = function() {
				k.ReStart()
			}
		},
		1000);
		k.Reset();
		k.Start()
	};
	k.Reset = k.Destroy = function() {
		k.Stop();
		M.innerHTML = k.n;
		M.setAttribute("fixnum", M[aa] = k.Play = k.ReStart = k.Reset = k.Continue = k.Stop = k.Pause = k.i = l = J = 0);
		k.i = -1
	};
	k.Continue = function() {
		if (k.i == 2 && !arguments[0]) {
			k.i = d > 1 ? 0 : 1;
			x = setInterval(D, k.Timer);
			return false
		}
		if (k.i == 0) {
			clearInterval(x);
			x = setInterval(D, k.Timer)
		}
		if (k.i == 1) {
			k.Play(P)
		}
	};
	k.Stop = function() {
		if (k.i != 2) {
			k.Pause();
			k.i = 2
		}
	};
	k.Pause = k.Terminate = function() {
		clearTimeout(W);
		clearInterval(x);
		clearTimeout(u)
	};
	setTimeout(e, 800)
};
Marquee.prototype.l = function() {
	var i = this,
	f = Marquee,
	h = null,
	j = null,
	k = 0,
	l = 0,
	c = 0,
	e = 0,
	b = i.Direction > 1 ? "scrollLeft": "scrollTop",
	a = function(m) {
		var m = m || window.event;
		if (i.DelayTime != 0 || (m.which && m.which != 1) || (m.button && m.button != 1) || i.i == 2 || i.i == -1) {
			return false
		}
		if (k == 0) {
			i.i = k = 1;
			i.Pause();
			m.stopPropagation ? m.stopPropagation() : m.cancelBuble = true;
			m.preventDefault ? m.preventDefault() : m.returnValue = false;
			c = i.c[b];
			l = i.Direction > 1 ? window.event ? m.clientX: m.pageX: window.event ? m.clientY: m.pageY;
			h = m.srcElement || m.target;
			j = h.style.cursor;
			h.style.cursor = "move";
			if (f.m) {
				h.setCapture()
			}
			f.K(document, "mousemove", g);
			f.K(document, "mouseup", d)
		}
	},
	g = function(n) {
		var n = n || window.event;
		e = i.Direction > 1 ? window.event ? n.clientX: n.pageX: window.event ? n.clientY: n.pageY;
		var m = l - e + c;
		if (m <= 0 || m >= i.y) {
			m <= 0 ? i.c[b] += i.y: i.c[b] = i.y - m;
			l = i.Direction > 1 ? window.event ? n.clientX: n.pageX: window.event ? n.clientY: n.pageY;
			c = i.c[b];
			m = l - e + c
		}
		i.c[b] = m
	},
	d = function(m) {
		if (f.m) {
			h.releaseCapture()
		}
		f.L(document, "mousemove", g);
		f.L(document, "mouseup", d);
		k = i.j = 0;
		h.style.cursor = j;
		i.Continue()
	};
	if (!i.I) {
		f.K(i.c, "mousedown", a)
	}
	i.c.onmouseover = function() {
		if ((i.i == 0 && i.DelayTime > 0) || i.i == 2 || i.i == -1) {
			return false
		}
		i.j = 1;
		i.Pause()
	};
	i.c.onmouseout = function() {
		if (i.j) {
			i.j = 0;
			i.Continue()
		}
	}
};