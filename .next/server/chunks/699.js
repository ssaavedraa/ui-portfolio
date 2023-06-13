exports.id = 699;
exports.ids = [699];
exports.modules = {

/***/ 5705:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 6620))

/***/ }),

/***/ 3591:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 125, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6249, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 7844, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1522, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3100, 23))

/***/ }),

/***/ 6620:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Header: () => (/* binding */ Header)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(8421);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(9483);
;// CONCATENATED MODULE: ./app/ui/Header/NavLink.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 

function NavLink({ label , route , pathname  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
        className: `inline-block text-2xl md:text-3xl font-[500]  pl-6 ${route === pathname ? "text-[#0ef]" : "text-white"}`,
        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: route,
            children: label
        })
    }, route);
}

;// CONCATENATED MODULE: ./app/ui/Header/Header.tsx
/* __next_internal_client_entry_do_not_use__ Header auto */ 




const links = [
    {
        label: "Home",
        route: "/"
    },
    {
        label: "Projects",
        route: "/projects"
    }
];
function Header() {
    const pathname = (0,navigation.usePathname)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: "fixed top-0 left-0 right-0 items-center justify-around flex flex-col md:flex-row w-full lg:w-[80vw] mx-auto  h-[15vh]",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: "https://s3.amazonaws.com/santiagosaavedra.com.co/Firma-02.svg",
                    alt: "Santiago_Saavedra_Logo",
                    width: 264,
                    height: 90
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                className: "block m-auto w-3/4 overflow-x-auto md:inline md:w-auto md:m-0 overflow-y-hidden",
                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    className: "inline-flex",
                    children: links.map(({ label , route  })=>/*#__PURE__*/ jsx_runtime_.jsx(NavLink, {
                            label: label,
                            route: route,
                            pathname: pathname
                        }, route))
                })
            })
        ]
    });
}


/***/ }),

/***/ 9802:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6495);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1313);
;// CONCATENATED MODULE: ./app/ui/Header/Header.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\ssaav\Documents\personalDevelopment\ui-portfolio\app\ui\Header\Header.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["Header"];

;// CONCATENATED MODULE: ./app/layout.tsx



const metadata = {
    title: "Santiago Saavedra A. | Fullstack Developer",
    description: "Santiago Saavedra: Fullstack Engineer Portfolio - Explore innovative web apps and robust back-end systems. Discover expertise in front-end, back-end, and database management.",
    openGraph: {
        title: "Santiago Saavedra A. | Fullstack Developer",
        description: "Santiago Saavedra: Fullstack Engineer Portfolio - Explore innovative web apps and robust back-end systems. Discover expertise in front-end, back-end, and database management.",
        url: "https://santiagosaavedra.com.co",
        siteName: "Santiago Saavedra A.",
        images: [
            {
                url: "https://i.imgur.com/D04oghv.png",
                width: 800,
                height: 800
            }
        ],
        locale: "en_US",
        type: "website"
    }
};
function RootLayout({ children  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(e0, {}),
                children
            ]
        })
    });
}


/***/ }),

/***/ 6495:
/***/ (() => {



/***/ })

};
;