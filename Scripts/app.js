// IIFE -- Immediately Invoked Function Expression
// AKA Anonymous Self-Executing Function
(function()
{

    function DisplayAboutPage()
    {
        console.log("About Us Page");
    }

    function DisplayProductsPage()
    {
        console.log("Products Page");
    }

    function DisplayServicesPage()
    {
        console.log("Services Page");
    }
    /**
     *uses ajax to open a connection an return data to the call back function
     *
     * @param {string} method
     * @param {string} url
     * @param {function} callback
     */
    function AjaxRequest(method, url, callback)
    {
        //hxr element
        let XHR = new XMLHttpRequest();
        //event listener for ready state change event
        XHR.addEventListener("readystatechange", () =>{
            if(XHR.readyState === 4 && XHR.status === 200){
                callback(XHR.responseText);
            }
        });

        //open connection
        XHR.open(method, url);

        //send request to server
        XHR.send();

    }
    /**
     * load the navbar from header file and injects it into pages
     * @param {string} data 
     */
    function LoadHeader(data)
    {
        $("header").html(data);
        $(`li>a:contains('${document.title}')`).addClass("active");
        CheckLogin();
    }


    function DisplayHomePage()
    {
        console.log("Home Page");

        $("#AboutUsButton").on("click", function()
        {
            location.href = "about.html";
        });

        $("main").append(`<p id="MainParagraph" class="mt-3">This is the Main Paragraph</p>`);
        //Article.innerHTML = ArticleParagraph;
        $("body").append(`<article class="container">
        <p id="ArticleParagraph" class="mt-3">This is the Article Paragraph</p>
        </article>`);




    }

    /**
     * Adds a Contact Object to localStorage
     *
     * @param {string} fullName
     * @param {string} contactNumber
     * @param {string} emailAddress
     */
    function AddContact(fullName, contactNumber, emailAddress)
    {
        let contact = new core.Contact(fullName, contactNumber, emailAddress);
        if(contact.serialize())
        {
            let key = contact.FullName.substring(0, 1) + Date.now();

            localStorage.setItem(key, contact.serialize());
        }
    }


    /**
     *Method is template validatio,
     *function
     * @param {*string} InputID
     * @param {*RegEx} Reg_Expression
     * @param {*string} Error_message
     */
    function testInputField(InputID, Reg_Expression, Error_message )
    {
        let messageArea = $("#messageArea").hide();

        $("#" + InputID).on("blur", function()
        {
            let inputTextField =  $(this).val(); //text inside full name
            if(!Reg_Expression.test(inputTextField))
            {
                $(this).trigger("focus").trigger("select");
  
                messageArea.addClass("alert alert-danger").text(Error_message).show();

            }else{//everything okay
                messageArea.removeAttr("class").hide();
            }
        });


    }

    function contactFromValidation(){

        testInputField("fullName", /^([A-Z][a-z]{1,3}.?\s)?([A-Z][a-z]{1,25})+(\s|,|-)([A-Z][a-z]{1,25})+(\s|,|-)*$/, "Please Enter a valid First Name; Must inculde a Capitalized first name and Captialized last name.");
        testInputField("contactNumber", /^(\+\d{1,3}[\s-.]?)?\(?\d{3}\)?[\s-.]?\d{3}[\s-.]?\d{4}$/, "Please Enter a valid Phone Number; Example: 905-555-9503");
        testInputField("emailAddress", /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/, "Please Enter a valid Email Addres; Example: example@example.com");

    }



    function DisplayContactPage()
    {
        console.log("Contact Us Page");

        contactFromValidation();

        let sendButton = document.getElementById("sendButton");
        let subscribeCheckbox = document.getElementById("subscribeCheckbox");

        sendButton.addEventListener("click", function(event)
        {
            //event.preventDefault();

            if(subscribeCheckbox.checked)
            {
                AddContact(fullName.value, contactNumber.value, emailAddress.value);
            }
        });
    }

  

    function DisplayContactListPage()
    {

        console.log("Contact-List Page");

        if(localStorage.length > 0) // check if localStorage has something in it 
        {
            let contactList = document.getElementById("contactList");

            let data = "";

            let keys = Object.keys(localStorage);

            let index = 1;

            //for every key in the keys collection loop
            for(const key of keys)
            {
                let contactData = localStorage.getItem(key); // retrieve contact data from localStorage

                let contact = new core.Contact(); // create an empty Contact Object
                contact.deserialize(contactData);

                data += `<tr>
                <th scope="row" class="text-center">${index}</th>
                <td>${contact.FullName}</td>
                <td>${contact.ContactNumber}</td>
                <td>${contact.EmailAddress}</td>
                <td class="text-center"><button value="${key}" class="btn btn-primary btn-sm edit"><i class="fas fa-edit fa-sm"></i> Edit</button></td>
                <td class="text-center"><button value="${key}" class="btn btn-danger btn-sm delete"><i class="fas fa-trash-alt fa-sm"></i> Delete</button></td>
                </tr>
                `;

                
                
                index++;
            }

            contactList.innerHTML = data;

            $("#addButton").on("click", () =>
            {
                location.href = "Edit.html#add";
            });

            $("button.delete").on("click", function()
            {
                if(confirm("Are you sure?"))
                {
                    localStorage.removeItem($(this).val());
                }
                
                location.href = "contact-list.html";
            });

            $("button.edit").on("click", function() 
            {
                location.href = "edit.html#" + $(this).val();
            });
        }
    }

    function DisplayEditPage()
    {
        console.log("Edit Page");

        contactFromValidation();

        let page = location.hash.substring(1);

        switch(page)
        {
            case "add":
                {
                    $("main>h1").text("Add Contact");

                    $("#editButton").html(`<i class="fas fa-plus-circle fa-lg"></i> Add`);

                    $("#editButton").on("click", (event) => 
                    {
                        event.preventDefault();
                        // Add Contactt
                        AddContact(fullName.value, contactNumber.value, emailAddress.value);
                        // Refresh the contact-list page
                        location.href ="contact-list.html";
                    });

                    $("#cancelButton").on("click", () =>
                    {
                        location.href ="contact-list.html";
                    });

                }
                break;
            default:
                {
                    // get the contact info from localStorage
                    let contact = new core.Contact();
                    contact.deserialize(localStorage.getItem(page));

                    // display the contact info in the edit form
                    $("#fullName").val(contact.FullName);
                    $("#contactNumber").val(contact.ContactNumber);
                    $("#emailAddress").val(contact.EmailAddress);

                    // when Edit is pressed - update the contact
                    $("#editButton").on("click", (event)=>
                    {
                        event.preventDefault();

                        // get any changes from the form
                        contact.FullName = $("#fullName").val();
                        contact.ContactNumber = $("#contactNumber").val();
                        contact.EmailAddress = $("#emailAddress").val();

                        // replace the item in localStorage
                        localStorage.setItem(page, contact.serialize());

                        // return to the contact-list
                        location.href ="contact-list.html";
                    });

                    $("#cancelButton").on("click", () =>
                    {
                        location.href ="contact-list.html";
                    });
                    
                }
                break;
        }
    }

   function DisplayLoginPage(){

        console.log("Login Page");

        let messageArea = $("#messageArea");
        messageArea.hide();

        $("#loginButton").on("click", function()
        {
            let success = false;

            let newUser = new core.User();

            //jquery shortcut to load user.jsonfile
            $.get("./Data/users.json", function(data)
            {
                //for every user in user.json file loop
                for (const user of data.users) 
                {
                    //check if user password match in data
                    if(username.value == user.Username && password.value == user.Password)
                    {
                        //get data and assign to empty user object
                        newUser.fromJSON(user);
                        success = true;
                        break;
                    }
                }

                //user is found do this
            if(success == true)
            {
                // add user to session storage
                sessionStorage.setItem("user", newUser.serialize());

                //hide errors
                messageArea.removeAttr("class").hide();

                //move user to secure are of site
                location.href ="contact-list.html";
            }
            else
            {
                $("#username").trigger("focus").trigger("select");
                messageArea.addClass("alert alert-danger").text("Error: Invalid Login Information").show();
            }

            $("#cancelButton").on("click",  function()
            {
                document.forms[0].reset();
                location.href = "index.href";
            });

            });
            
        });
    }

    function CheckLogin()
        {
            // if user is logged in
            if(sessionStorage.getItem("user"))
            {
                // swap out the login link for the logout link
                $("#login").html(
                    `<a id="logout" class="nav-link" href="#"><i class="fas fa-sign-out-alt"></i> Logout</a>`
                );
    
                $("#logout").on("click", function()
                {
                    // perform logout
                    sessionStorage.clear();
    
                    // redirect back to login
                    location.href = "login.html";
                });
            }
        }

    function DisplayRegisterPage(){
        console.log("Register Page");
    }

    // named function
    function Start()
    {
        console.log("App Started!!");

        AjaxRequest("GET", "header.html", LoadHeader);



        switch (document.title) 
        {
          case "Home":
            DisplayHomePage();
            break;
          case "Contact Us":
            DisplayContactPage();
            break;
          case "Contact-List":
            DisplayContactListPage();
            break;
          case "About Us":
            DisplayAboutPage();
            break;
          case "Our Products":
            DisplayProductsPage();
            break;
          case "Our Services":
            DisplayServicesPage();
            break;
          case "Edit":
            DisplayEditPage();
            break;
          case "Login":
            DisplayLoginPage();
            break;
          case "Register":
            DisplayRegisterPage();
            break;

        }


    }

    window.addEventListener("load", Start);

})();