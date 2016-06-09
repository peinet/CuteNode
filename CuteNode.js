/**
 * @name CuteNode
 * @author JetLee < QQ:609866 >
 * @des A container by the javascript.
 * @version 1.0.0
 * @Licensed None
 * @updated 2016-6-9
 */
function Node (strName) {
    var obj = {};
    obj["name"] = strName;
    obj["children"] = {};
    obj["parent"] = {};
    obj.addAttrib = function(strAttrName, value){
        obj[strAttrName] = value;
    };
    obj.addChild = function (value) {
        obj["children"].addAttrib(value.name, value);
        console.log("add child is success!");
    };
    obj.removeChildByTagName = function (tagName){
        delete obj["children"][tagName];
        console.log("delete child is success!");
    }
    obj.removeAll = function (){
        delete obj["children"];
        console.log("remove all is success!");
    }
    obj.getChildByTagName = function (tagName){
        console.log("getChild by tagName is success!");
        return obj["children"][tagName];
    };
    obj.getChildren = function () {
        console.log("getChildren is success!");
        return obj["children"];
    }
    obj.initNode = function () {
        obj["children"] = createNode("children");
        obj["parent"] = createNode("parent");
    }
    return obj;
};