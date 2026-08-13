(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TimeCardOpening$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TimeCardOpening.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DestinationCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DestinationCard.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$destinations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/destinations.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const featured = [
    "angkor-wat",
    "koh-rong",
    "mondulkiri",
    "tuol-sleng"
].map((slug)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$destinations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["destinations"].find((d)=>d.slug === slug)).filter(Boolean);
const categories = [
    {
        title: "Temples & Heritage",
        description: "Explore Cambodia's ancient temples and living history.",
        href: "/destinations?category=heritage",
        icon: "✦"
    },
    {
        title: "Nature & Wildlife",
        description: "Discover forests, waterfalls, mountains, and wildlife.",
        href: "/destinations?category=nature",
        icon: "❋"
    },
    {
        title: "Coast & Islands",
        description: "Escape to Cambodia's tropical islands and beaches.",
        href: "/destinations?category=beach",
        icon: "⌁"
    },
    {
        title: "Culture & Cities",
        description: "Experience local food, markets, people, and city life.",
        href: "/destinations?category=culture",
        icon: "◇"
    }
];
function Home() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(22);
    if ($[0] !== "4ba9b76c492351a10500f6adeb3bf2c8f0c384240923d21be83dcc49fc80bad2") {
        for(let $i = 0; $i < 22; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4ba9b76c492351a10500f6adeb3bf2c8f0c384240923d21be83dcc49fc80bad2";
    }
    const [introFinished, setIntroFinished] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    if ($[1] !== introFinished) {
        t0 = !introFinished && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TimeCardOpening$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            onComplete: {
                "Home[<TimeCardOpening>.onComplete]": ()=>setIntroFinished(true)
            }["Home[<TimeCardOpening>.onComplete]"]
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 42,
            columnNumber: 28
        }, this);
        $[1] = introFinished;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    let t1;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/images/angkor-wat.jpg",
                    alt: "",
                    className: "h-full w-full object-cover"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 52,
                    columnNumber: 44
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-black/50"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 52,
                    columnNumber: 126
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-gradient-to-b from-black/30 via-black/30 to-jungle-950"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 52,
                    columnNumber: 174
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 52,
            columnNumber: 10
        }, this);
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    let t2;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-6 flex items-center gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "h-px w-10 bg-gold-400"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 59,
                    columnNumber: 56
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-mono-data text-xs uppercase tracking-[0.35em] text-gold-300",
                    children: "A Cambodia Travel Guide"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 59,
                    columnNumber: 98
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "h-px w-10 bg-gold-400"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 59,
                    columnNumber: 205
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 59,
            columnNumber: 10
        }, this);
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "font-display text-5xl font-bold leading-none text-white sm:text-7xl lg:text-8xl",
            children: [
                "Kingdom",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "block text-gold-300",
                    children: "of Wonder"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 67,
                    columnNumber: 113
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 67,
            columnNumber: 10
        }, this);
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-8 max-w-2xl text-base leading-7 text-white/75 sm:text-lg",
            children: "Discover Cambodia through ancient temples, tropical islands, mountain landscapes, vibrant cities, and unforgettable stories."
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 68,
            columnNumber: 10
        }, this);
        $[5] = t3;
        $[6] = t4;
    } else {
        t3 = $[5];
        t4 = $[6];
    }
    let t5;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "relative min-h-[calc(100vh-72px)] overflow-hidden bg-jungle-950",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-10 mx-auto flex min-h-[calc(100vh-72px)] max-w-6xl flex-col items-center justify-center px-6 text-center",
                    children: [
                        t2,
                        t3,
                        t4,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-10 flex flex-wrap justify-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/destinations",
                                    className: "\n                rounded-full\n                bg-gold-500\n                px-8 py-3.5\n                text-sm font-semibold\n                text-black\n                transition\n                hover:bg-gold-400\n                hover:-translate-y-0.5\n              ",
                                    children: "Explore Cambodia"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 77,
                                    columnNumber: 303
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/recommend",
                                    className: "\n                rounded-full\n                border border-white/40\n                bg-white/5\n                px-8 py-3.5\n                text-sm font-semibold\n                text-white\n                backdrop-blur-sm\n                transition\n                hover:bg-white\n                hover:text-black\n              ",
                                    children: "Plan My Trip"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 77,
                                    columnNumber: 642
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 77,
                            columnNumber: 244
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 77,
                    columnNumber: 99
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 77,
            columnNumber: 10
        }, this);
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "border-b border-gold-600/10 bg-sandstone-100",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-3xl px-5 py-20 text-center md:px-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-mono-data text-xs uppercase tracking-[0.3em] text-laterite-600",
                        children: "Discover Cambodia"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 84,
                        columnNumber: 142
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mt-4 font-display text-3xl sm:text-4xl",
                        children: "One country. Endless stories."
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 84,
                        columnNumber: 246
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-5 leading-7 text-jungle-950/60",
                        children: "From the ancient stones of Angkor to the turquoise waters of the southern islands, Cambodia is a place where history, nature, culture, and everyday life meet."
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 84,
                        columnNumber: 335
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 84,
                columnNumber: 76
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 84,
            columnNumber: 10
        }, this);
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-mono-data text-xs uppercase tracking-[0.3em] text-laterite-600",
                    children: "Find your Cambodia"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 91,
                    columnNumber: 33
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "mt-2 font-display text-3xl sm:text-4xl",
                    children: "What kind of journey are you looking for?"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 91,
                    columnNumber: 138
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 91,
            columnNumber: 10
        }, this);
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    let t8;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "bg-sandstone-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-7xl px-5 py-20 md:px-8",
                children: [
                    t7,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
                        children: categories.map(_HomeCategoriesMap)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 98,
                        columnNumber: 105
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 98,
                columnNumber: 47
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 98,
            columnNumber: 10
        }, this);
        $[10] = t8;
    } else {
        t8 = $[10];
    }
    let t9;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-10 flex items-end justify-between gap-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-mono-data text-xs uppercase tracking-[0.3em] text-laterite-600",
                            children: "Start here"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 105,
                            columnNumber: 75
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "mt-2 font-display text-3xl sm:text-4xl",
                            children: "Places worth building a trip around"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 105,
                            columnNumber: 172
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 max-w-xl text-sm leading-6 text-jungle-950/55",
                            children: "Hand-picked destinations to help you experience some of Cambodia's most unforgettable places."
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 105,
                            columnNumber: 267
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 105,
                    columnNumber: 70
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/destinations",
                    className: "hidden text-sm font-medium text-laterite-600 hover:text-laterite-500 sm:block",
                    children: [
                        "View all ",
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$destinations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["destinations"].length,
                        " →"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 105,
                    columnNumber: 436
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 105,
            columnNumber: 10
        }, this);
        $[11] = t9;
    } else {
        t9 = $[11];
    }
    let t10;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "bg-sandstone-100",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-7xl px-5 py-20 md:px-8",
                children: [
                    t9,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
                        children: featured.map(_HomeFeaturedMap)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 112,
                        columnNumber: 107
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 112,
                columnNumber: 49
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 112,
            columnNumber: 11
        }, this);
        $[12] = t10;
    } else {
        t10 = $[12];
    }
    let t11;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-mono-data text-xs uppercase tracking-[0.3em] text-gold-400",
            children: "Why DOMNER"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 119,
            columnNumber: 11
        }, this);
        $[13] = t11;
    } else {
        t11 = $[13];
    }
    let t12;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t11,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "mt-4 font-display text-3xl sm:text-4xl",
                    children: [
                        "Travel deeper.",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "block text-gold-300",
                            children: "Experience more."
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 126,
                            columnNumber: 90
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 126,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-6 max-w-xl leading-7 text-white/55",
                    children: "DOMNER helps travelers discover Cambodia beyond the usual highlights with destination guides, recommendations, travel information, and cost estimates."
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 126,
                    columnNumber: 156
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/about",
                    className: "\n                  mt-8 inline-flex\n                  rounded-full\n                  border border-gold-500/40\n                  px-6 py-3\n                  text-sm font-medium\n                  text-gold-300\n                  transition\n                  hover:bg-gold-500\n                  hover:text-black\n                ",
                    children: "Learn more about DOMNER"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 126,
                    columnNumber: 363
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 126,
            columnNumber: 11
        }, this);
        $[14] = t12;
    } else {
        t12 = $[14];
    }
    let t13;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "bg-jungle-950 text-sandstone-100",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-7xl px-5 py-20 md:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-14 lg:grid-cols-2 lg:items-center",
                    children: [
                        t12,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-4",
                            children: [
                                [
                                    "01",
                                    "Local perspective"
                                ],
                                [
                                    "02",
                                    "Practical guides"
                                ],
                                [
                                    "03",
                                    "Smart planning"
                                ],
                                [
                                    "04",
                                    "Hidden gems"
                                ]
                            ].map(_HomeAnonymous)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 133,
                            columnNumber: 184
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 133,
                    columnNumber: 119
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 133,
                columnNumber: 65
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 133,
            columnNumber: 11
        }, this);
        $[15] = t13;
    } else {
        t13 = $[15];
    }
    let t14;
    let t15;
    let t16;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-mono-data text-xs uppercase tracking-[0.3em] text-black/50",
            children: "Your journey starts here"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 142,
            columnNumber: 11
        }, this);
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "mt-4 font-display text-3xl text-black sm:text-4xl",
            children: "Ready to discover Cambodia?"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 143,
            columnNumber: 11
        }, this);
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mx-auto mt-4 max-w-xl text-sm leading-6 text-black/60",
            children: "Find your next destination, build your itinerary, and start exploring the Kingdom of Wonder."
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 144,
            columnNumber: 11
        }, this);
        $[16] = t14;
        $[17] = t15;
        $[18] = t16;
    } else {
        t14 = $[16];
        t15 = $[17];
        t16 = $[18];
    }
    let t17;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "bg-gold-500",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-5xl px-5 py-20 text-center md:px-8",
                children: [
                    t14,
                    t15,
                    t16,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 flex flex-wrap justify-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/destinations",
                                className: "\n                rounded-full bg-black\n                px-7 py-3\n                text-sm font-semibold text-white\n                hover:bg-jungle-950\n              ",
                                children: "Explore Destinations"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 155,
                                columnNumber: 183
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/cost-estimate",
                                className: "\n                rounded-full\n                border border-black/20\n                px-7 py-3\n                text-sm font-semibold text-black\n                hover:bg-black/10\n              ",
                                children: "Estimate My Trip"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 155,
                                columnNumber: 421
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 155,
                        columnNumber: 125
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 155,
                columnNumber: 44
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 155,
            columnNumber: 11
        }, this);
        $[19] = t17;
    } else {
        t17 = $[19];
    }
    let t18;
    if ($[20] !== t0) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "bg-sandstone-50 text-jungle-950",
            children: [
                t0,
                t5,
                t6,
                t8,
                t10,
                t13,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 162,
            columnNumber: 11
        }, this);
        $[20] = t0;
        $[21] = t18;
    } else {
        t18 = $[21];
    }
    return t18;
}
_s(Home, "7666KCi7XbNVfj4N+MsFdr1I7vA=");
_c = Home;
function _HomeAnonymous(t0) {
    const [number, title] = t0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "\n                    rounded-2xl\n                    border border-white/10\n                    bg-white/5\n                    p-6\n                  ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-display text-3xl text-gold-300",
                children: number
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 172,
                columnNumber: 197
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "mt-4 font-medium",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 172,
                columnNumber: 260
            }, this)
        ]
    }, number, true, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 172,
        columnNumber: 10
    }, this);
}
function _HomeFeaturedMap(destination) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DestinationCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        destination: destination
    }, destination.slug, false, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 175,
        columnNumber: 10
    }, this);
}
function _HomeCategoriesMap(category) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: category.href,
        className: "\n                  group rounded-2xl\n                  border border-jungle-950/10\n                  bg-white p-6\n                  transition-all duration-300\n                  hover:-translate-y-1\n                  hover:border-gold-500/40\n                  hover:shadow-xl\n                ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "\n                  flex h-11 w-11\n                  items-center justify-center\n                  rounded-full\n                  bg-gold-500/10\n                  text-xl text-gold-600\n                  transition\n                  group-hover:bg-gold-500\n                  group-hover:text-black\n                ",
                children: category.icon
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 178,
                columnNumber: 373
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "mt-5 font-display text-lg",
                children: category.title
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 178,
                columnNumber: 735
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-sm leading-6 text-jungle-950/55",
                children: category.description
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 178,
                columnNumber: 798
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "\n                  mt-5 inline-block\n                  text-sm font-medium\n                  text-laterite-600\n                  transition\n                  group-hover:translate-x-1\n                ",
                children: "Explore →"
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 178,
                columnNumber: 881
            }, this)
        ]
    }, category.title, true, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 178,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/CategoryIcon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CategoryIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
// Small line-icon set, one per destination category. Kept as inline SVG so
// the whole site works with zero external image requests.
const paths = {
    temple: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 2 7 8h10L12 2Z"
            }, void 0, false, {
                fileName: "[project]/src/components/CategoryIcon.js",
                lineNumber: 7,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 21V10M20 21V10"
            }, void 0, false, {
                fileName: "[project]/src/components/CategoryIcon.js",
                lineNumber: 8,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 21V13h8v8"
            }, void 0, false, {
                fileName: "[project]/src/components/CategoryIcon.js",
                lineNumber: 9,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2 21h20"
            }, void 0, false, {
                fileName: "[project]/src/components/CategoryIcon.js",
                lineNumber: 10,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CategoryIcon.js",
        lineNumber: 6,
        columnNumber: 11
    }, ("TURBOPACK compile-time value", void 0)),
    leaf: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5 21c0-9 6-15 15-15-1 9-7 15-15 15Z"
            }, void 0, false, {
                fileName: "[project]/src/components/CategoryIcon.js",
                lineNumber: 13,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5 21c2-4 5-7 9-9"
            }, void 0, false, {
                fileName: "[project]/src/components/CategoryIcon.js",
                lineNumber: 14,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CategoryIcon.js",
        lineNumber: 12,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0)),
    wave: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2 15c2-2 4-2 6 0s4 2 6 0 4-2 6 0 4 2 6 0"
            }, void 0, false, {
                fileName: "[project]/src/components/CategoryIcon.js",
                lineNumber: 17,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2 20c2-2 4-2 6 0s4 2 6 0 4-2 6 0 4 2 6 0"
            }, void 0, false, {
                fileName: "[project]/src/components/CategoryIcon.js",
                lineNumber: 18,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CategoryIcon.js",
        lineNumber: 16,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0)),
    flame: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 22c4 0 6-2.5 6-6 0-2-1-3.5-2-5-.5 2-1.5 3-2.5 2 1-3-1-6-3.5-7 .5 2.5-.5 4-2 5.5C6.5 13 6 14.5 6 16c0 3.5 2 6 6 6Z"
        }, void 0, false, {
            fileName: "[project]/src/components/CategoryIcon.js",
            lineNumber: 21,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/CategoryIcon.js",
        lineNumber: 20,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0)),
    peak: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m3 20 6-11 4 6 2-3 6 8Z"
            }, void 0, false, {
                fileName: "[project]/src/components/CategoryIcon.js",
                lineNumber: 24,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m9 12-1.5 2.5H12"
            }, void 0, false, {
                fileName: "[project]/src/components/CategoryIcon.js",
                lineNumber: 25,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CategoryIcon.js",
        lineNumber: 23,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0)),
    gate: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 21V9l8-5 8 5v12"
            }, void 0, false, {
                fileName: "[project]/src/components/CategoryIcon.js",
                lineNumber: 28,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 21h16"
            }, void 0, false, {
                fileName: "[project]/src/components/CategoryIcon.js",
                lineNumber: 29,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9 21v-6h6v6"
            }, void 0, false, {
                fileName: "[project]/src/components/CategoryIcon.js",
                lineNumber: 30,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CategoryIcon.js",
        lineNumber: 27,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0))
};
function CategoryIcon(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "82b03ab22ab8fc88ab6f74470345c56a274c6ce2bfd93d3a27c5996ebeed5fe0") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "82b03ab22ab8fc88ab6f74470345c56a274c6ce2bfd93d3a27c5996ebeed5fe0";
    }
    const { name, className: t1 } = t0;
    const className = t1 === undefined ? "w-6 h-6" : t1;
    const t2 = paths[name] || paths.temple;
    let t3;
    if ($[1] !== className || $[2] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: className,
            "aria-hidden": "true",
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/components/CategoryIcon.js",
            lineNumber: 49,
            columnNumber: 10
        }, this);
        $[1] = className;
        $[2] = t2;
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    return t3;
}
_c = CategoryIcon;
var _c;
__turbopack_context__.k.register(_c, "CategoryIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/DestinationArt.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DestinationArt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CategoryIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CategoryIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$categoryStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/categoryStyle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$destinations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/destinations.js [app-client] (ecmascript)");
;
;
;
;
;
function DestinationArt(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(26);
    if ($[0] !== "961523dc277050f04a5d122de9e0e0ceb4f803171e3f5ee992f9a2a7ccc451cf") {
        for(let $i = 0; $i < 26; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "961523dc277050f04a5d122de9e0e0ceb4f803171e3f5ee992f9a2a7ccc451cf";
    }
    const { category, image, name, size: t1, className: t2, showCredit: t3, plain: t4 } = t0;
    const size = t1 === undefined ? "card" : t1;
    const className = t2 === undefined ? "" : t2;
    const showCredit = t3 === undefined ? false : t3;
    const plain = t4 === undefined ? false : t4;
    const style = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$categoryStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categoryStyle"][category] || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$categoryStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categoryStyle"].heritage;
    const iconSize = size === "hero" ? "w-28 h-28" : size === "gallery" ? "w-20 h-20" : "w-14 h-14";
    if (image) {
        const t5 = `${plain ? "" : "gopura-frame"} relative w-full overflow-hidden bg-jungle-950 ${className}`;
        const t6 = size === "hero" ? 1600 : 900;
        let t7;
        if ($[1] !== image || $[2] !== t6) {
            t7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$destinations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["commonsImageUrl"])(image, t6);
            $[1] = image;
            $[2] = t6;
            $[3] = t7;
        } else {
            t7 = $[3];
        }
        const t8 = name ? `${name}, Cambodia` : "Cambodia destination";
        let t9;
        if ($[4] !== t7 || $[5] !== t8) {
            t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: t7,
                alt: t8,
                loading: "lazy",
                className: "absolute inset-0 w-full h-full object-cover"
            }, void 0, false, {
                fileName: "[project]/src/components/DestinationArt.js",
                lineNumber: 49,
                columnNumber: 12
            }, this);
            $[4] = t7;
            $[5] = t8;
            $[6] = t9;
        } else {
            t9 = $[6];
        }
        let t10;
        if ($[7] !== image || $[8] !== showCredit) {
            t10 = showCredit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$destinations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["commonsFileUrl"])(image),
                target: "_blank",
                rel: "noreferrer",
                className: "absolute bottom-1.5 right-2 text-[10px] font-mono-data text-sandstone-100/80 bg-jungle-950/50 px-1.5 py-0.5 rounded hover:text-gold-300",
                children: "photo: Wikimedia Commons"
            }, void 0, false, {
                fileName: "[project]/src/components/DestinationArt.js",
                lineNumber: 58,
                columnNumber: 27
            }, this);
            $[7] = image;
            $[8] = showCredit;
            $[9] = t10;
        } else {
            t10 = $[9];
        }
        let t11;
        if ($[10] !== t10 || $[11] !== t5 || $[12] !== t9) {
            t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: t5,
                children: [
                    t9,
                    t10
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DestinationArt.js",
                lineNumber: 67,
                columnNumber: 13
            }, this);
            $[10] = t10;
            $[11] = t5;
            $[12] = t9;
            $[13] = t11;
        } else {
            t11 = $[13];
        }
        return t11;
    }
    const t5 = `gopura-frame relative w-full overflow-hidden bg-gradient-to-br ${style.gradient} ${className}`;
    let t6;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 opacity-[0.15] mix-blend-overlay {\n    background-image: repeating-linear-gradient(45deg,#000 0px,#000 1px,transparent 1px,transparent 10px);\n}"
        }, void 0, false, {
            fileName: "[project]/src/components/DestinationArt.js",
            lineNumber: 80,
            columnNumber: 10
        }, this);
        $[14] = t6;
    } else {
        t6 = $[14];
    }
    const t7 = `absolute inset-0 flex items-center justify-center ${style.ink} opacity-90`;
    let t8;
    if ($[15] !== category) {
        t8 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$destinations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categories"].find({
            "DestinationArt[categories.find()]": (c)=>c.id === category
        }["DestinationArt[categories.find()]"])?.icon;
        $[15] = category;
        $[16] = t8;
    } else {
        t8 = $[16];
    }
    let t9;
    if ($[17] !== iconSize || $[18] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CategoryIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            name: t8,
            className: iconSize
        }, void 0, false, {
            fileName: "[project]/src/components/DestinationArt.js",
            lineNumber: 98,
            columnNumber: 10
        }, this);
        $[17] = iconSize;
        $[18] = t8;
        $[19] = t9;
    } else {
        t9 = $[19];
    }
    let t10;
    if ($[20] !== t7 || $[21] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t7,
            children: t9
        }, void 0, false, {
            fileName: "[project]/src/components/DestinationArt.js",
            lineNumber: 107,
            columnNumber: 11
        }, this);
        $[20] = t7;
        $[21] = t9;
        $[22] = t10;
    } else {
        t10 = $[22];
    }
    let t11;
    if ($[23] !== t10 || $[24] !== t5) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t5,
            children: [
                t6,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/DestinationArt.js",
            lineNumber: 116,
            columnNumber: 11
        }, this);
        $[23] = t10;
        $[24] = t5;
        $[25] = t11;
    } else {
        t11 = $[25];
    }
    return t11;
}
_c = DestinationArt;
var _c;
__turbopack_context__.k.register(_c, "DestinationArt");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/DestinationCard.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DestinationCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DestinationArt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DestinationArt.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$destinations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/destinations.js [app-client] (ecmascript)");
;
;
;
;
;
function DestinationCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(40);
    if ($[0] !== "1f50af9d3ddc52ac342b93d1f9441c447848eba554155bb80890bbca51da47b2") {
        for(let $i = 0; $i < 40; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1f50af9d3ddc52ac342b93d1f9441c447848eba554155bb80890bbca51da47b2";
    }
    const { destination } = t0;
    let t1;
    if ($[1] !== destination.category) {
        t1 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$destinations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categories"].find({
            "DestinationCard[categories.find()]": (c)=>c.id === destination.category
        }["DestinationCard[categories.find()]"]);
        $[1] = destination.category;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const cat = t1;
    let t2;
    if ($[3] !== destination) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$destinations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tierDailyTotal"])(destination, "mid");
        $[3] = destination;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const midDaily = t2;
    const t3 = `/destinations/${destination.slug}`;
    let t4;
    if ($[5] !== destination.category || $[6] !== destination.image || $[7] !== destination.name) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DestinationArt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            category: destination.category,
            image: destination.image,
            name: destination.name,
            className: "aspect-4/3"
        }, void 0, false, {
            fileName: "[project]/src/components/DestinationCard.js",
            lineNumber: 39,
            columnNumber: 10
        }, this);
        $[5] = destination.category;
        $[6] = destination.image;
        $[7] = destination.name;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    const t5 = cat?.label;
    let t6;
    if ($[9] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "absolute top-3 left-3 text-[11px] font-mono-data uppercase tracking-wide bg-jungle-950/80 text-gold-300 px-2.5 py-1 rounded-full",
            children: t5
        }, void 0, false, {
            fileName: "[project]/src/components/DestinationCard.js",
            lineNumber: 50,
            columnNumber: 10
        }, this);
        $[9] = t5;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] !== destination.rating) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "absolute top-3 right-3 text-[11px] font-mono-data bg-sandstone-100/90 text-jungle-950 px-2 py-1 rounded-full flex items-center gap-1",
            children: [
                "★ ",
                destination.rating
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/DestinationCard.js",
            lineNumber: 58,
            columnNumber: 10
        }, this);
        $[11] = destination.rating;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] !== t4 || $[14] !== t6 || $[15] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                t4,
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/DestinationCard.js",
            lineNumber: 66,
            columnNumber: 10
        }, this);
        $[13] = t4;
        $[14] = t6;
        $[15] = t7;
        $[16] = t8;
    } else {
        t8 = $[16];
    }
    let t9;
    if ($[17] !== destination.name) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-baseline justify-between gap-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "font-display text-lg text-ink-900 group-hover:text-laterite-600 transition-colors",
                children: destination.name
            }, void 0, false, {
                fileName: "[project]/src/components/DestinationCard.js",
                lineNumber: 76,
                columnNumber: 69
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/DestinationCard.js",
            lineNumber: 76,
            columnNumber: 10
        }, this);
        $[17] = destination.name;
        $[18] = t9;
    } else {
        t9 = $[18];
    }
    let t10;
    if ($[19] !== destination.region) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-ink-700/70 mt-0.5",
            children: destination.region
        }, void 0, false, {
            fileName: "[project]/src/components/DestinationCard.js",
            lineNumber: 84,
            columnNumber: 11
        }, this);
        $[19] = destination.region;
        $[20] = t10;
    } else {
        t10 = $[20];
    }
    let t11;
    if ($[21] !== destination.short) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-ink-700 mt-3 leading-relaxed line-clamp-2",
            children: destination.short
        }, void 0, false, {
            fileName: "[project]/src/components/DestinationCard.js",
            lineNumber: 92,
            columnNumber: 11
        }, this);
        $[21] = destination.short;
        $[22] = t11;
    } else {
        t11 = $[22];
    }
    const t12 = destination.duration > 1 ? "s" : "";
    let t13;
    if ($[23] !== destination.duration || $[24] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: [
                destination.duration,
                " day",
                t12,
                " ",
                "suggested"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/DestinationCard.js",
            lineNumber: 101,
            columnNumber: 11
        }, this);
        $[23] = destination.duration;
        $[24] = t12;
        $[25] = t13;
    } else {
        t13 = $[25];
    }
    let t14;
    if ($[26] !== midDaily) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: [
                "from $",
                midDaily,
                "/day"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/DestinationCard.js",
            lineNumber: 110,
            columnNumber: 11
        }, this);
        $[26] = midDaily;
        $[27] = t14;
    } else {
        t14 = $[27];
    }
    let t15;
    if ($[28] !== t13 || $[29] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-4 flex items-center justify-between text-xs font-mono-data text-ink-700/80 border-t border-gold-600/15 pt-3",
            children: [
                t13,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/DestinationCard.js",
            lineNumber: 118,
            columnNumber: 11
        }, this);
        $[28] = t13;
        $[29] = t14;
        $[30] = t15;
    } else {
        t15 = $[30];
    }
    let t16;
    if ($[31] !== t10 || $[32] !== t11 || $[33] !== t15 || $[34] !== t9) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-5",
            children: [
                t9,
                t10,
                t11,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/DestinationCard.js",
            lineNumber: 127,
            columnNumber: 11
        }, this);
        $[31] = t10;
        $[32] = t11;
        $[33] = t15;
        $[34] = t9;
        $[35] = t16;
    } else {
        t16 = $[35];
    }
    let t17;
    if ($[36] !== t16 || $[37] !== t3 || $[38] !== t8) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: t3,
            className: "group block bg-sandstone-200 border border-gold-600/20 rounded-2xl overflow-hidden hover:border-gold-500/60 hover:-translate-y-1 transition-all duration-300",
            children: [
                t8,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/DestinationCard.js",
            lineNumber: 138,
            columnNumber: 11
        }, this);
        $[36] = t16;
        $[37] = t3;
        $[38] = t8;
        $[39] = t17;
    } else {
        t17 = $[39];
    }
    return t17;
}
_c = DestinationCard;
var _c;
__turbopack_context__.k.register(_c, "DestinationCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/TimeCardOpening.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TimedCardOpening
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const cards = [
    {
        title: "Angkor Wat",
        location: "Siem Reap",
        image: "/images/angkorwat.png"
    },
    {
        title: "Koh Rong",
        location: "Sihanoukville",
        image: "/images/kohrong.png"
    },
    {
        title: "Koh Kong",
        location: "Eastern Cambodia",
        image: "/images/chiphat.jpg"
    },
    {
        title: "Tuol Sleng",
        location: "Phnom Penh",
        image: "/images/toulsleng.png"
    }
];
function TimedCardOpening(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(22);
    if ($[0] !== "239d4d7cf8781a4aa72c23ed98bd8a63e94fc8a56b9e686f889de35c5ea0abdd") {
        for(let $i = 0; $i < 22; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "239d4d7cf8781a4aa72c23ed98bd8a63e94fc8a56b9e686f889de35c5ea0abdd";
    }
    const { onComplete } = t0;
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(-1);
    const [finished, setFinished] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    let t2;
    if ($[1] !== onComplete) {
        t1 = ({
            "TimedCardOpening[useEffect()]": ()=>{
                const timers = [];
                cards.forEach({
                    "TimedCardOpening[useEffect() > cards.forEach()]": (_, index)=>{
                        const timer = setTimeout({
                            "TimedCardOpening[useEffect() > cards.forEach() > setTimeout()]": ()=>{
                                setActiveIndex(index);
                            }
                        }["TimedCardOpening[useEffect() > cards.forEach() > setTimeout()]"], 500 + index * 600);
                        timers.push(timer);
                    }
                }["TimedCardOpening[useEffect() > cards.forEach()]"]);
                const finishTimer = setTimeout({
                    "TimedCardOpening[useEffect() > setTimeout()]": ()=>{
                        setFinished(true);
                        setTimeout({
                            "TimedCardOpening[useEffect() > setTimeout() > setTimeout()]": ()=>{
                                onComplete?.();
                            }
                        }["TimedCardOpening[useEffect() > setTimeout() > setTimeout()]"], 900);
                    }
                }["TimedCardOpening[useEffect() > setTimeout()]"], 500 + cards.length * 600 + 900);
                timers.push(finishTimer);
                return ()=>{
                    timers.forEach(clearTimeout);
                };
            }
        })["TimedCardOpening[useEffect()]"];
        t2 = [
            onComplete
        ];
        $[1] = onComplete;
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    const t3 = `
        fixed inset-0 z-[100]
        bg-[#0b1512]
        transition-opacity duration-1000
        ${finished ? "pointer-events-none opacity-0" : "opacity-100"}
      `;
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute left-1/2 top-8 z-30 -translate-x-1/2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/images/logo1.png",
                alt: "DOMNER",
                width: 120,
                height: 60,
                priority: true,
                className: "object-contain"
            }, void 0, false, {
                fileName: "[project]/src/components/TimeCardOpening.js",
                lineNumber: 85,
                columnNumber: 73
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/TimeCardOpening.js",
            lineNumber: 85,
            columnNumber: 10
        }, this);
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    let t5;
    if ($[5] !== activeIndex) {
        t5 = cards.map({
            "TimedCardOpening[cards.map()]": (card, index_0)=>{
                const isOpen = index_0 <= activeIndex;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `
                relative
                h-full
                overflow-hidden
                border-r border-white/10
                transition-all
                duration-[1000ms]
                ease-[cubic-bezier(0.76,0,0.24,1)]
                ${isOpen ? "flex-[1.5]" : "flex-1"}
              `,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: card.image,
                            alt: card.title,
                            fill: true,
                            priority: index_0 < 2,
                            sizes: "25vw",
                            className: `
                  object-cover
                  transition-all
                  duration-[1400ms]
                  ${isOpen ? "scale-100 opacity-100" : "scale-125 opacity-40"}
                `
                        }, void 0, false, {
                            fileName: "[project]/src/components/TimeCardOpening.js",
                            lineNumber: 104,
                            columnNumber: 18
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `
                  absolute inset-0
                  transition-all duration-1000
                  ${isOpen ? "bg-black/20" : "bg-black/70"}
                `
                        }, void 0, false, {
                            fileName: "[project]/src/components/TimeCardOpening.js",
                            lineNumber: 109,
                            columnNumber: 22
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `
                  absolute inset-x-0 bottom-0
                  p-6
                  transition-all duration-700
                  ${isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
                `,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-2 text-xs uppercase tracking-[0.25em] text-gold-300",
                                    children: card.location
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TimeCardOpening.js",
                                    lineNumber: 118,
                                    columnNumber: 20
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-display text-2xl font-semibold text-white sm:text-3xl",
                                    children: card.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TimeCardOpening.js",
                                    lineNumber: 118,
                                    columnNumber: 109
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/TimeCardOpening.js",
                            lineNumber: 113,
                            columnNumber: 22
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `
                  absolute left-5 top-1/2
                  -translate-y-1/2
                  font-mono-data text-xs
                  text-white/50
                  transition-opacity duration-500
                  ${isOpen ? "opacity-0" : "opacity-100"}
                `,
                            children: [
                                "0",
                                index_0 + 1
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/TimeCardOpening.js",
                            lineNumber: 118,
                            columnNumber: 207
                        }, this)
                    ]
                }, card.title, true, {
                    fileName: "[project]/src/components/TimeCardOpening.js",
                    lineNumber: 95,
                    columnNumber: 16
                }, this);
            }
        }["TimedCardOpening[cards.map()]"]);
        $[5] = activeIndex;
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-full w-full",
            children: t5
        }, void 0, false, {
            fileName: "[project]/src/components/TimeCardOpening.js",
            lineNumber: 135,
            columnNumber: 10
        }, this);
        $[7] = t5;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    const t7 = `
          pointer-events-none
          absolute inset-0
          flex items-center justify-center
          transition-all duration-700
          ${activeIndex >= 0 ? "opacity-0" : "opacity-100"}
        `;
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-mono-data text-xs uppercase tracking-[0.4em] text-white/60",
            children: "Discover Cambodia"
        }, void 0, false, {
            fileName: "[project]/src/components/TimeCardOpening.js",
            lineNumber: 150,
            columnNumber: 10
        }, this);
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] !== t7) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t7,
            children: t8
        }, void 0, false, {
            fileName: "[project]/src/components/TimeCardOpening.js",
            lineNumber: 157,
            columnNumber: 10
        }, this);
        $[10] = t7;
        $[11] = t9;
    } else {
        t9 = $[11];
    }
    const t10 = `${(activeIndex + 1) / cards.length * 100}%`;
    let t11;
    if ($[12] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-px overflow-hidden bg-white/20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-full bg-gold-400 transition-all duration-700",
                style: {
                    width: t10
                }
            }, void 0, false, {
                fileName: "[project]/src/components/TimeCardOpening.js",
                lineNumber: 166,
                columnNumber: 61
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/TimeCardOpening.js",
            lineNumber: 166,
            columnNumber: 11
        }, this);
        $[12] = t10;
        $[13] = t11;
    } else {
        t11 = $[13];
    }
    let t12;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-3 text-center font-mono-data text-[10px] uppercase tracking-[0.25em] text-white/40",
            children: "Discover the Kingdom"
        }, void 0, false, {
            fileName: "[project]/src/components/TimeCardOpening.js",
            lineNumber: 176,
            columnNumber: 11
        }, this);
        $[14] = t12;
    } else {
        t12 = $[14];
    }
    let t13;
    if ($[15] !== t11) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute bottom-8 left-1/2 z-30 w-48 -translate-x-1/2",
            children: [
                t11,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TimeCardOpening.js",
            lineNumber: 183,
            columnNumber: 11
        }, this);
        $[15] = t11;
        $[16] = t13;
    } else {
        t13 = $[16];
    }
    let t14;
    if ($[17] !== t13 || $[18] !== t3 || $[19] !== t6 || $[20] !== t9) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            children: [
                t4,
                t6,
                t9,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TimeCardOpening.js",
            lineNumber: 191,
            columnNumber: 11
        }, this);
        $[17] = t13;
        $[18] = t3;
        $[19] = t6;
        $[20] = t9;
        $[21] = t14;
    } else {
        t14 = $[21];
    }
    return t14;
}
_s(TimedCardOpening, "ErEUi50SIXRBOhHdhc6BPczqctA=");
_c = TimedCardOpening;
var _c;
__turbopack_context__.k.register(_c, "TimedCardOpening");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/categoryStyle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Visual style for the fallback (illustrated) destination art panel.
// Each category maps to a Tailwind gradient (bg-gradient-to-br from/to)
// and an ink (text) color used for the icon. Palette is limited to the
// custom theme colors defined in globals.css.
__turbopack_context__.s([
    "categoryStyle",
    ()=>categoryStyle,
    "default",
    ()=>__TURBOPACK__default__export__
]);
const categoryStyle = {
    heritage: {
        gradient: "from-gold-600 to-gold-500",
        ink: "text-jungle-950"
    },
    nature: {
        gradient: "from-jungle-700 to-river-700",
        ink: "text-sandstone-100"
    },
    beach: {
        gradient: "from-sandstone-200 to-sandstone-300",
        ink: "text-jungle-800"
    },
    memorial: {
        gradient: "from-ink-900 to-ink-700",
        ink: "text-gold-300"
    },
    adventure: {
        gradient: "from-laterite-600 to-ink-900",
        ink: "text-sandstone-100"
    },
    city: {
        gradient: "from-jungle-800 to-ink-700",
        ink: "text-gold-300"
    }
};
const __TURBOPACK__default__export__ = categoryStyle;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/destinations.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Cambodia destination dataset used across search, filter, gallery,
// recommendation and cost-estimation features.
__turbopack_context__.s([
    "budgetTiers",
    ()=>budgetTiers,
    "categories",
    ()=>categories,
    "commonsFileUrl",
    ()=>commonsFileUrl,
    "commonsImageUrl",
    ()=>commonsImageUrl,
    "destinations",
    ()=>destinations,
    "getDestinationBySlug",
    ()=>getDestinationBySlug,
    "regions",
    ()=>regions,
    "tierDailyTotal",
    ()=>tierDailyTotal
]);
const categories = [
    {
        id: "heritage",
        label: "Temples & Heritage",
        icon: "temple"
    },
    {
        id: "nature",
        label: "Nature & Wildlife",
        icon: "leaf"
    },
    {
        id: "beach",
        label: "Coast & Islands",
        icon: "wave"
    },
    {
        id: "memorial",
        label: "History & Memorial",
        icon: "flame"
    },
    {
        id: "adventure",
        label: "Highlands & Adventure",
        icon: "peak"
    },
    {
        id: "city",
        label: "City & Culture",
        icon: "gate"
    }
];
const regions = [
    "Siem Reap",
    "Phnom Penh",
    "Coastal South",
    "Northeast Highlands",
    "Battambang",
    "Preah Vihear"
];
const destinations = [
    {
        slug: "angkor-wat",
        image: "Angkor Wat.jpg",
        name: "Angkor Wat",
        region: "Siem Reap",
        category: "heritage",
        gallery: [
            {
                image: "/images/angkorwat.png",
                caption: "Angkor Wat"
            },
            {
                image: "/images/angkorwat1.png",
                caption: "Base Releif"
            },
            {
                image: "/images/angkorwat3.png",
                caption: "Cambodia venerated Vishu statue"
            },
            {
                image: "/images/angkorwat4.png",
                caption: "Construction of Angkor Wat"
            },
            {
                image: "/images/angkorwat2.png",
                caption: "Angkor Wat"
            }
        ],
        wikimedia: {
            title: "Angkor Wat",
            url: "https://commons.wikimedia.org/wiki/Angkor_Wat",
            description: "Angkor Wat is a temple complex in Cambodia and one of the largest religious monuments in the world.",
            credit: "Wikimedia Commons"
        },
        tags: [
            "UNESCO",
            "jungle",
            "photogenic"
        ],
        duration: 1,
        difficulty: "Easy",
        bestTime: "Nov – Feb",
        rating: 4.8,
        short: "The 'Tomb Raider temple', where silk-cotton roots swallow sandstone.",
        description: "Left largely as it was found, Ta Prohm is the clearest picture of what all of Angkor looked like before restoration began: strangler-fig and silk-cotton roots braid through collapsed galleries, prying stone blocks apart in slow motion. Go in the late afternoon when tour groups thin out and the light rakes low through the canopy.",
        highlights: [
            "The root-wrapped gallery made famous on screen",
            "Quiet inner courtyards away from the main path",
            "Combine with Ta Keo and Banteay Kdei nearby"
        ],
        costPerDay: {
            budget: {
                stay: 10,
                food: 8,
                transport: 6,
                activity: 8
            },
            mid: {
                stay: 35,
                food: 18,
                transport: 15,
                activity: 15
            },
            luxury: {
                stay: 120,
                food: 45,
                transport: 40,
                activity: 30
            }
        }
    },
    {
        slug: "bayon",
        image: "Bayon-temple.JPG",
        name: "Bayon, Angkor Thom",
        region: "Siem Reap",
        category: "heritage",
        gallery: [
            {
                image: "/images/bayon1.png",
                caption: "Bayon, Angkor Thom"
            }
        ],
        tags: [
            "UNESCO",
            "faces",
            "walled city"
        ],
        duration: 1,
        difficulty: "Easy",
        bestTime: "Nov – Feb",
        rating: 4.8,
        short: "216 serene stone faces watch over Jayavarman VII's walled capital.",
        description: "At the exact centre of the last great Khmer capital, Bayon's fifty-four towers carry giant carved faces facing every direction — read by most scholars as the bodhisattva Avalokiteshvara wearing the king's likeness. The surrounding city wall, South Gate elephant causeway and Terrace of the Leper King round out a full morning inside Angkor Thom.",
        highlights: [
            "Face-towers at the second-level terrace",
            "South Gate causeway lined with devas and asuras",
            "Terrace of the Elephants at golden hour"
        ],
        costPerDay: {
            budget: {
                stay: 10,
                food: 8,
                transport: 6,
                activity: 8
            },
            mid: {
                stay: 35,
                food: 18,
                transport: 15,
                activity: 15
            },
            luxury: {
                stay: 120,
                food: 45,
                transport: 40,
                activity: 30
            }
        }
    },
    {
        slug: "tonle-sap",
        image: "Tonlesap.jpg",
        name: "Tonle Sap Floating Villages",
        region: "Siem Reap",
        category: "nature",
        gallery: [
            {
                image: "Tonlesap.jpg",
                caption: "Tonle Sap Floating Villages"
            }
        ],
        tags: [
            "boat trip",
            "community",
            "wildlife"
        ],
        duration: 1,
        difficulty: "Easy",
        bestTime: "Aug – Mar",
        rating: 4.4,
        short: "Stilt and floating settlements on Southeast Asia's largest lake.",
        description: "Tonle Sap swells to five times its dry-season size every monsoon, and entire villages rise and fall with it — houses on stilts twelve metres high, floating schools, clinics and a Buddhist pagoda. A boat trip through Kampong Phluk or Kampong Khleang, ideally with a community-run operator, is one of the few places to see how the lake still feeds most of the country's freshwater fish.",
        highlights: [
            "Flooded mangrove forest by rowboat at Kampong Phluk",
            "Floating market and pagoda at Kampong Khleang",
            "Bird sanctuary at Prek Toal (dry season)"
        ],
        costPerDay: {
            budget: {
                stay: 10,
                food: 8,
                transport: 10,
                activity: 15
            },
            mid: {
                stay: 35,
                food: 18,
                transport: 20,
                activity: 30
            },
            luxury: {
                stay: 120,
                food: 45,
                transport: 55,
                activity: 70
            }
        }
    },
    {
        slug: "koh-rong",
        image: "Koh Rong - Cambodia (50925116473).jpg",
        name: "Koh Rong",
        region: "Coastal South",
        category: "beach",
        gallery: [
            {
                image: "Koh Rong - Cambodia (50925116473).jpg",
                caption: "Koh Rong"
            }
        ],
        tags: [
            "seafood",
            "colonial ruins",
            "relaxed"
        ],
        duration: 2,
        difficulty: "Easy",
        bestTime: "Nov – May",
        rating: 4.5,
        short: "Faded French villas, a famous crab market, and a national park hike.",
        description: "Once the seaside retreat of Cambodia's colonial elite, Kep is now a quiet town of overgrown villa ruins and a crab market where you can pick your catch straight off the boats. The small Kep National Park loop trail climbs through forest with sea views, and Rabbit Island sits twenty minutes offshore for an easy overnight.",
        highlights: [
            "Kep Crab Market — crab with Kampot pepper",
            "5km forest loop trail through Kep National Park",
            "Day trip to Koh Tonsay (Rabbit Island)"
        ],
        costPerDay: {
            budget: {
                stay: 9,
                food: 10,
                transport: 6,
                activity: 8
            },
            mid: {
                stay: 28,
                food: 22,
                transport: 12,
                activity: 18
            },
            luxury: {
                stay: 110,
                food: 50,
                transport: 30,
                activity: 45
            }
        }
    },
    {
        slug: "kampot",
        image: "Kampot 20110429-050.JPG",
        name: "Kampot",
        region: "Coastal South",
        category: "city",
        gallery: [
            {
                image: "Kampot 20110429-050.JPG",
                caption: "Kampot"
            }
        ],
        tags: [
            "river",
            "pepper farms",
            "riverside"
        ],
        duration: 2,
        difficulty: "Easy",
        bestTime: "Nov – May",
        rating: 4.6,
        short: "A riverside colonial town famous for pepper and slow evenings.",
        description: "Kampot's shopfronts and shuttered villas sit along a lazy river beneath Bokor Mountain. Cycle out to a pepper farm to taste the peppercorns that flavour half the region's food, then take a sunset boat cruise or salt-water swim as the light turns the water gold.",
        highlights: [
            "Pepper farm tour and tasting",
            "Sunset river cruise",
            "Old French quarter architecture walk"
        ],
        costPerDay: {
            budget: {
                stay: 8,
                food: 8,
                transport: 6,
                activity: 8
            },
            mid: {
                stay: 25,
                food: 18,
                transport: 12,
                activity: 16
            },
            luxury: {
                stay: 95,
                food: 42,
                transport: 30,
                activity: 40
            }
        }
    },
    {
        slug: "bokor",
        image: "Bokor palace hotel Cambodia.jpg",
        name: "Bokor National Park",
        region: "Coastal South",
        category: "adventure",
        gallery: [
            {
                image: "Bokor palace hotel Cambodia.jpg",
                caption: "Bokor National Park"
            }
        ],
        tags: [
            "mountain",
            "hiking",
            "abandoned station"
        ],
        duration: 1,
        difficulty: "Moderate",
        bestTime: "Nov – May",
        rating: 4.3,
        short: "A cloud-wrapped hill station abandoned twice, now a national park.",
        description: "The road up Bokor Mountain climbs through misty forest to a ghost casino and church built by the French in the 1920s and left to the jungle for decades. Trails around the plateau lead past a waterfall and viewpoints over the Gulf of Thailand — cool, damp air a welcome break from the coast below.",
        highlights: [
            "Abandoned Bokor Palace Hotel & Casino",
            "Popokvil Waterfall short hike",
            "Wat Sampov Pram hilltop pagoda"
        ],
        costPerDay: {
            budget: {
                stay: 8,
                food: 8,
                transport: 12,
                activity: 10
            },
            mid: {
                stay: 25,
                food: 18,
                transport: 25,
                activity: 20
            },
            luxury: {
                stay: 95,
                food: 42,
                transport: 55,
                activity: 45
            }
        }
    },
    {
        slug: "royal-palace",
        image: "Le Palais Royal (Phnom Penh) (6997773481).jpg",
        name: "Royal Palace & Silver Pagoda",
        region: "Phnom Penh",
        category: "city",
        gallery: [
            {
                image: "Le Palais Royal (Phnom Penh) (6997773481).jpg",
                caption: "Royal Palace & Silver Pagoda"
            }
        ],
        tags: [
            "capital",
            "architecture",
            "culture"
        ],
        duration: 1,
        difficulty: "Easy",
        bestTime: "Nov – Feb",
        rating: 4.5,
        short: "The gilded residence of the King, and a floor tiled in solid silver.",
        description: "Phnom Penh's Royal Palace complex, built in 1866, mixes Khmer roofline and French urban planning around manicured courtyards. Next door, the Silver Pagoda houses a solid-gold Buddha crusted with diamonds and a floor of over five thousand silver tiles — most kept carpeted to protect them.",
        highlights: [
            "Throne Hall and Napoleon III villa",
            "Silver Pagoda's Emerald Buddha",
            "Riverside promenade walk at sunset"
        ],
        costPerDay: {
            budget: {
                stay: 10,
                food: 8,
                transport: 6,
                activity: 10
            },
            mid: {
                stay: 35,
                food: 20,
                transport: 12,
                activity: 18
            },
            luxury: {
                stay: 140,
                food: 55,
                transport: 35,
                activity: 40
            }
        }
    },
    {
        slug: "tuol-sleng",
        image: "Tuol Sleng.jpg",
        name: "Tuol Sleng (S-21)",
        region: "Phnom Penh",
        category: "memorial",
        gallery: [
            {
                image: "Tuol Sleng.jpg",
                caption: "Tuol Sleng (S-21)"
            }
        ],
        tags: [
            "history",
            "memorial",
            "reflective"
        ],
        duration: 1,
        difficulty: "Easy",
        bestTime: "Year-round",
        rating: 4.7,
        short: "The best known of Cambodia's Killing Fields, now a memorial stupa.",
        description: "A short drive from the capital, Choeung Ek marks one of the sites where the Khmer Rouge executed prisoners transferred from S-21. A glass memorial stupa holds thousands of recovered skulls, and a self-guided audio tour walks the grounds with testimony from survivors and former guards.",
        highlights: [
            "Memorial stupa",
            "Audio tour with survivor testimony",
            "Quiet lakeside walking path"
        ],
        costPerDay: {
            budget: {
                stay: 10,
                food: 8,
                transport: 8,
                activity: 6
            },
            mid: {
                stay: 35,
                food: 20,
                transport: 15,
                activity: 10
            },
            luxury: {
                stay: 140,
                food: 55,
                transport: 35,
                activity: 20
            }
        }
    },
    {
        slug: "battambang",
        image: "Battambang..JPG",
        name: "Battambang",
        region: "Battambang",
        category: "city",
        gallery: [
            {
                image: "Battambang..JPG",
                caption: "Battambang"
            }
        ],
        tags: [
            "colonial",
            "bamboo train",
            "art"
        ],
        duration: 2,
        difficulty: "Easy",
        bestTime: "Nov – Feb",
        rating: 4.4,
        short: "Cambodia's best-preserved colonial townscape, plus a bamboo train.",
        description: "Cambodia's second city keeps rows of shuttered French shophouses along the Sangkae River, largely untouched by mass tourism. Ride the norry — a bamboo platform on rail wheels, driven by a small engine — out through rice paddies, and catch a circus performance by Phare Ponleu Selpak in the evening.",
        highlights: [
            "Bamboo train (norry) ride",
            "Phare Ponleu Selpak circus show",
            "Killing Caves at Phnom Sampov"
        ],
        costPerDay: {
            budget: {
                stay: 7,
                food: 7,
                transport: 6,
                activity: 10
            },
            mid: {
                stay: 22,
                food: 16,
                transport: 12,
                activity: 18
            },
            luxury: {
                stay: 85,
                food: 38,
                transport: 30,
                activity: 40
            }
        }
    },
    {
        slug: "mondulkiri",
        image: "Tourists at Bou Sra Waterfall, Mondulkiri, Cambodia.jpg",
        name: "Mondulkiri",
        region: "Northeast Highlands",
        category: "adventure",
        gallery: [
            {
                image: "Tourists at Bou Sra Waterfall, Mondulkiri, Cambodia.jpg",
                caption: "Mondulkiri"
            }
        ],
        tags: [
            "elephants",
            "waterfalls",
            "highlands"
        ],
        duration: 3,
        difficulty: "Moderate",
        bestTime: "Nov – Mar",
        rating: 4.7,
        short: "Cool pine-covered highlands, waterfalls, and ethical elephant sanctuaries.",
        description: "Mondulkiri's plateau sits noticeably cooler than the lowlands, home to Bunong indigenous communities and Cambodia's best ethical elephant sanctuaries, where you walk alongside retired working elephants rather than ride them. Bou Sra waterfall and jungle trekking round out a slower, greener side of the country.",
        highlights: [
            "Ethical elephant valley walk",
            "Bou Sra waterfall, two-tiered drop",
            "Bunong village jungle trek"
        ],
        costPerDay: {
            budget: {
                stay: 8,
                food: 8,
                transport: 12,
                activity: 20
            },
            mid: {
                stay: 28,
                food: 18,
                transport: 22,
                activity: 45
            },
            luxury: {
                stay: 110,
                food: 42,
                transport: 50,
                activity: 90
            }
        }
    },
    {
        slug: "ratanakiri",
        image: "RattanakiriVillage.jpg",
        name: "Ratanakiri",
        region: "Northeast Highlands",
        category: "adventure",
        gallery: [
            {
                image: "RattanakiriVillage.jpg",
                caption: "Ratanakiri"
            }
        ],
        tags: [
            "volcanic lake",
            "remote",
            "trekking"
        ],
        duration: 2,
        difficulty: "Moderate",
        bestTime: "Nov – Mar",
        rating: 4.3,
        short: "Red dirt roads, a crater lake, and Cambodia's most remote highlands.",
        description: "Cambodia's far northeast is red laterite roads, rubber and cashew plantations, and Yeak Laom — a near-perfectly circular volcanic crater lake sacred to local indigenous communities. It's the least visited of Cambodia's regions, best reached by a long but scenic overland journey.",
        highlights: [
            "Swim in Yeak Laom crater lake",
            "Indigenous village visit with a local guide",
            "Cha Ong waterfall"
        ],
        costPerDay: {
            budget: {
                stay: 8,
                food: 7,
                transport: 14,
                activity: 15
            },
            mid: {
                stay: 25,
                food: 16,
                transport: 26,
                activity: 30
            },
            luxury: {
                stay: 95,
                food: 40,
                transport: 55,
                activity: 60
            }
        }
    },
    {
        slug: "chi-phat",
        image: "Stung Proat Cardamom Mountains.jpg",
        name: "Chi Phat",
        region: "Coastal South",
        category: "nature",
        gallery: [
            {
                image: "Stung Proat Cardamom Mountains.jpg",
                caption: "Chi Phat"
            }
        ],
        tags: [
            "UNESCO",
            "mountaintop",
            "remote"
        ],
        duration: 2,
        difficulty: "Moderate",
        bestTime: "Nov – Feb",
        rating: 4.8,
        short: "A cliff-edge mountaintop temple with the country's best view.",
        description: "Strung along a ridge of the Dangrek Mountains, Preah Vihear predates Angkor and commands a sheer 500-metre drop over the Cambodian plain. Far fewer visitors make the long trip north, which means empty causeways, unhurried custodian monks, and one of the most dramatic temple settings in Southeast Asia.",
        highlights: [
            "525m of processional causeways along the cliff",
            "Sunrise view over the plains below",
            "Combine with Koh Ker's step pyramid en route"
        ],
        costPerDay: {
            budget: {
                stay: 8,
                food: 7,
                transport: 16,
                activity: 12
            },
            mid: {
                stay: 24,
                food: 16,
                transport: 30,
                activity: 22
            },
            luxury: {
                stay: 90,
                food: 40,
                transport: 60,
                activity: 45
            }
        }
    },
    {
        slug: "phnom-kulen",
        image: "PhnomKulen.jpg",
        name: "Phnom Kulen National Park",
        region: "Siem Reap",
        category: "nature",
        gallery: [
            {
                image: "PhnomKulen.jpg",
                caption: "Phnom Kulen National Park"
            }
        ],
        tags: [
            "waterfall",
            "sacred mountain",
            "birthplace of Angkor"
        ],
        duration: 1,
        difficulty: "Moderate",
        bestTime: "Nov – Mar",
        rating: 4.6,
        short: "Cambodia's most sacred mountain — waterfalls, a reclining Buddha, and the birthplace of the Khmer Empire.",
        description: "Roughly 50km north of Siem Reap, Phnom Kulen is where King Jayavarman II is said to have declared independence in 802 CE, founding the Khmer Empire that would go on to build Angkor. A forest trail leads past the River of a Thousand Lingas, a stretch of riverbed carved with Hindu deities and stone lingas, up to Preah Ang Thom — a 16th-century pagoda built around an eight-metre reclining Buddha cut into a sandstone boulder. The trail ends at the mountain's waterfall, where locals and visitors swim together in the pool below.",
        highlights: [
            "River of a Thousand Lingas carved into the riverbed",
            "16th-century reclining Buddha at Preah Ang Thom",
            "Swim in the pool beneath Kulen Waterfall"
        ],
        costPerDay: {
            budget: {
                stay: 9,
                food: 8,
                transport: 16,
                activity: 15
            },
            mid: {
                stay: 30,
                food: 18,
                transport: 28,
                activity: 25
            },
            luxury: {
                stay: 110,
                food: 42,
                transport: 55,
                activity: 50
            }
        }
    },
    {
        slug: "koh-ker",
        image: "Prasat Thom 1.jpg",
        name: "Koh Ker",
        region: "Preah Vihear",
        category: "heritage",
        gallery: [
            {
                image: "Prasat Thom 1.jpg",
                caption: "Koh Ker"
            }
        ],
        tags: [
            "UNESCO",
            "pyramid temple",
            "off the beaten path"
        ],
        duration: 1,
        difficulty: "Moderate",
        bestTime: "Nov – Feb",
        rating: 4.7,
        short: "A forgotten 10th-century capital, built around Cambodia's only pyramid temple.",
        description: "For a brief sixteen years (928–944 CE), Koh Ker was the capital of the Khmer Empire under King Jayavarman IV, who moved the seat of power away from Angkor and raised around forty temples here in just over a decade. Its centrepiece, Prasat Thom, is a seven-tiered sandstone pyramid rising 36 metres — thought to represent Mount Meru — with a wooden staircase visitors can still climb for a view over the surrounding jungle. Power shifted back to Angkor after Jayavarman IV's death, and the site was largely reclaimed by forest until landmine clearance and, in 2023, UNESCO World Heritage status brought it back into reach.",
        highlights: [
            "Climb the seven-tiered Prasat Thom pyramid",
            "Explore dozens of smaller temples scattered through the forest",
            "Combine with Beng Mealea and Preah Vihear for a northern loop"
        ],
        costPerDay: {
            budget: {
                stay: 9,
                food: 7,
                transport: 18,
                activity: 15
            },
            mid: {
                stay: 26,
                food: 16,
                transport: 32,
                activity: 25
            },
            luxury: {
                stay: 95,
                food: 40,
                transport: 60,
                activity: 50
            }
        }
    },
    {
        slug: "wat-phnom",
        image: "Wat Phnom-Phnom Penh-Cambodia.jpg",
        name: "Wat Phnom",
        region: "Phnom Penh",
        category: "city",
        gallery: [
            {
                image: "Wat Phnom-Phnom Penh-Cambodia.jpg",
                caption: "Wat Phnom"
            }
        ],
        tags: [
            "hilltop shrine",
            "city origin story"
        ],
        duration: 1,
        difficulty: "Easy",
        bestTime: "Year-round",
        rating: 4.3,
        short: "The hilltop shrine that gave Phnom Penh its name.",
        description: "Wat Phnom sits on a 27-metre artificial hill at the north end of the capital — the oldest religious site in the city, first built in 1372 and rebuilt several times since, most recently in 1926. Legend holds that a widow named Lady Penh found four Buddha statues drifting inside a hollow tree on the river and raised the hill to house them in a shrine, giving the settlement that grew up around it — and eventually the city — her name: Phnom Penh, 'Penh's Hill'. A stupa on the grounds is said to hold the ashes of King Ponhea Yat, who moved the Khmer capital here in the 15th century.",
        highlights: [
            "Naga-flanked staircase up to the hilltop shrine",
            "Stupa said to hold the ashes of King Ponhea Yat",
            "Easy pairing with a riverside walk at sunset"
        ],
        costPerDay: {
            budget: {
                stay: 10,
                food: 8,
                transport: 5,
                activity: 4
            },
            mid: {
                stay: 35,
                food: 20,
                transport: 10,
                activity: 8
            },
            luxury: {
                stay: 140,
                food: 55,
                transport: 30,
                activity: 15
            }
        }
    }
];
function getDestinationBySlug(slug) {
    return destinations.find((d)=>d.slug === slug);
}
function commonsImageUrl(filename, width = 1200) {
    return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(filename)}?width=${width}`;
}
function commonsFileUrl(filename) {
    return `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(filename)}`;
}
function tierDailyTotal(destination, tier) {
    const c = destination.costPerDay[tier];
    return c.stay + c.food + c.transport + c.activity;
}
const budgetTiers = [
    {
        id: "budget",
        label: "Backpacker",
        note: "Hostels, street food, local buses"
    },
    {
        id: "mid",
        label: "Mid-range",
        note: "3★ guesthouses, mixed dining, private drivers"
    },
    {
        id: "luxury",
        label: "Comfort+",
        note: "4–5★ stays, guided tours, private transfers"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1ej44hi._.js.map