        var chakraLoginValue = localStorage.getItem("chakralogin");
        
        if (!chakraLoginValue) {
            window.location.href = "https://user.circula.lol/login";
        }