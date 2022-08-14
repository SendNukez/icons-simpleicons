/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
const iconsetName = "si";

async function getIcon(name) {
    if (icons[name] == null) {
        console.error(`Icon "${name}" not available`);
        return "";
    }

    return icons[name];
}

async function getIconList() {
    return Object.keys(icons).map((name) => ({ name }));
}

window.customIcons = window.customIcons ?? {};
window.customIcons[iconsetName] = { getIcon, getIconList };

window.customIconsets = window.customIconsets ?? {};
window.customIconsets[iconsetName] = getIcon;

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbnMtc2ltcGxlaWNvbnMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxjQUFjLDJvK3BIQUFpQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixLQUFLO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLE1BQU07QUFDckQ7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2ljb25zLXNpbXBsZWljb25zLy4vc3JjL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaWNvbnMgPSBwcm9jZXNzLmVudi5JQ09OUztcclxuY29uc3QgaWNvbnNldE5hbWUgPSBcInNpXCI7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRJY29uKG5hbWUpIHtcclxuICAgIGlmIChpY29uc1tuYW1lXSA9PSBudWxsKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihgSWNvbiBcIiR7bmFtZX1cIiBub3QgYXZhaWxhYmxlYCk7XHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGljb25zW25hbWVdO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRJY29uTGlzdCgpIHtcclxuICAgIHJldHVybiBPYmplY3Qua2V5cyhpY29ucykubWFwKChuYW1lKSA9PiAoeyBuYW1lIH0pKTtcclxufVxyXG5cclxud2luZG93LmN1c3RvbUljb25zID0gd2luZG93LmN1c3RvbUljb25zID8/IHt9O1xyXG53aW5kb3cuY3VzdG9tSWNvbnNbaWNvbnNldE5hbWVdID0geyBnZXRJY29uLCBnZXRJY29uTGlzdCB9O1xyXG5cclxud2luZG93LmN1c3RvbUljb25zZXRzID0gd2luZG93LmN1c3RvbUljb25zZXRzID8/IHt9O1xyXG53aW5kb3cuY3VzdG9tSWNvbnNldHNbaWNvbnNldE5hbWVdID0gZ2V0SWNvbjtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9