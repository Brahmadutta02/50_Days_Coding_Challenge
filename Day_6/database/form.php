<html>    
    <head>    
        <title>Registration Form</title>    
    </head>    
    <body>    
        <link href = "style.css" type = "text/css" rel = "stylesheet" />    
        <h2>Sign Up</h2>    
        <form name = "form1" action="modified.php" method = "post" enctype = "multipart/form-data" >    
            <div class = "container">    
                <div class = "form_group">    
                    <label>First Name:</label>    
                    <input type = "text" name = "fname" value = "" required/>    
                </div>    
                <div class = "form_group">    
                    <label>Middle Name:</label>    
                    <input type = "text" name = "mname" value = "" required />    
                </div>    
                <div class = "form_group">    
                    <label>Last Name:</label>    
                    <input type = "text" name = "lname" value = "" required/>    
                </div>    
                <div class = "form_group">    
                    <label>Password:</label>    
                    <input type = "password" name = "pwd" value = "" required/>    
                </div>    
            </div>    
        </form>    
    </body>    
</html>    