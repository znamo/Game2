<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Spring 4 MVC Hello World Example with Maven Eclipse</title>
    <link rel='stylesheet' href='<c:url value="/resources/css/style.css" />' type='text/css' media='all' />
    <script src="public/bundle.js" type="text/javascript"></script>
</head>
<body>
<h2>Hello World, Spring MVC</h2>
    <p>Welcome, ${name}</p>
    <div id="app" />
    <script src="resources/js/bundle.js" type="text/javascript"></script>
</body>
</html>