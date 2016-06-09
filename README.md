# CuteNode
Create a new html file and add this js into where you want.
Sample like this:

<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Form Builder</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="This FrameWork Design By LiQian">
    <meta name="author" content="LiQian">
    <script src="CuteNode.js"></script>
    <script type="text/javascript">
    
    function init_ele_container () {
        var obj = createNode("ele_container");
            obj.addAttrib("type","undefined");
            obj.addAttrib("pos_x",0);
            obj.addAttrib("pos_y",0);
            obj.addAttrib("width",0);
            obj.addAttrib("height",0);
        var objchd_01 = createNode("child_01");
        var objchd_02 = createNode("child_02");
        var objchd_03 = createNode("child_03");
        var objchd_04 = createNode("child_04");
        var objprt_01 = createNode("parent_01");
        obj.initNode();
        objchd_01.initNode();
        objchd_02.initNode();
        objchd_03.initNode();
        objchd_04.initNode();
        objprt_01.initNode();
    
        obj.addChild(objchd_01);
        obj.addChild(objchd_02);
        obj.addChild(objchd_03);
        obj.addChild(objchd_04);
        objprt_01.addChild(obj);
    
        console.log(objprt_01.getChildByTagName("ele_container").name);
        obj.removeChildByTagName("child_02");
        console.log(obj.getChildren());
        obj.removeAll();
    }
    </script>
</head>
<body>
	<button onclick="init_ele_container();">Test CuteNode See Result In Console</button>
</body>
</html>
