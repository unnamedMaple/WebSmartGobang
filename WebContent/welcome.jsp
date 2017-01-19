<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>welcome</title>

<script src="<%=request.getContextPath()%>/js/gobang.js"></script>
<link type="text/css" rel="stylesheet" href="<%=request.getContextPath()%>/css/checkerboard.css"/>

</head>
<body>
	<div id="CheckerBoard">
		<canvas id="chess" width="700" height="680" ></canvas>
		
		<script>drawCheckerBoard()</script>
	</div>
</body>
</html>