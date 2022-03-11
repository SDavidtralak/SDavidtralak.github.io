"use strict";
var core;
(function (core) {
    class Router {
        m_activeLink;
        m_linkData;
        m_routingTable;
        get ActiveLink() {
            return this.m_activeLink;
        }
        set ActiveLink(link) {
            this.m_activeLink = link;
        }
        get linkData() {
            return this.m_linkData;
        }
        set linkData(data) {
            this.m_linkData = data;
        }
        constructor() {
            this.m_activeLink = "";
            this.m_linkData = "";
            this.m_routingTable = [];
        }
        Add(route) {
            this.m_routingTable.push(route);
        }
        AddTable(routingTable) {
            this.m_routingTable = routingTable;
        }
        Find(route) {
            return this.m_routingTable.indexOf(route);
        }
        Remove(route) {
            if (this.Find(route) > -1) {
                this.m_routingTable.splice(this.Find(route), 1);
                return true;
            }
            return false;
        }
        toString() {
            return this.m_routingTable.toString();
        }
    }
    core.Router = Router;
})(core || (core = {}));
let router = new core.Router();
router.AddTable([
    "/",
    "/home",
    "/about",
    "/Services",
    "/Contact",
    "/contact-list",
    "/Projects",
    "/login",
    "/register",
    "/edit"
]);
let route = location.pathname;
if (router.Find(route) > -1) {
    router.ActiveLink = (route == "/") ? "home" : route.substring(1);
}
else {
    router.ActiveLink = "404";
}
//# sourceMappingURL=router.js.map