//IIFE -- immediately invoked Function expression 
// AKA anon self-excuteing function
(function()
{
    function DisplayAboutPage()
    {
        console.log("About us page");
    } 

    function DisplayProductsListPage()
    {
        console.log("Products page");
    }
    function DisplayServicePage()
    {
        console.log("Service page");
    } 



    function DisplayHome()
    {
        console.log("Home page");

        let AboutUsButton = document.getElementById("btn-AboutUs");
        AboutUsButton.addEventListener("click", function()
        {
            location.href = "About.html";
        })

        // step 1 get refrence to entry point
        let MainContent = document.getElementsByTagName("main")[0];
        let DocumnentBody = document.body;
        //step 2 create elements to insert
        let MainParagragh = document.createElement("p");
        let Article = document.createElement("article");
        let ArticleParagraph = `<p id="ArticleParagraph" class="mt-3"> This is the Article Paragraph </p>`;
        //step 3 configure element
        MainParagragh.setAttribute("id", "MainParagraph");
        MainParagragh.setAttribute("class", "mt-3");
        //example of template string(lab 1 help)
        let ParagraphStringOne = "This is";
        let ParagraphStringTwo = `${ParagraphStringOne} a Paragraph boy`;

        MainParagragh.textContent = ParagraphStringTwo;
        Article.setAttribute("class", "container");
        //step 4 add element
        MainContent.appendChild(MainParagragh);
        Article.innerHTML = ArticleParagraph;
        DocumnentBody.appendChild(Article);

        //Deletion example
        //document.getElementsByTagName("li")[0].remove();
        //document.getElementById("ArticleParagraph").remove();
        
        //insert before
        // let NewH1 = document.createElement("h1");
        // NewH1.setAttribute("class", "display-1");
    }  
    function DisplayContactPage()
    {
        console.log("Contact us page");

        let sendButton = document.getElementById("sendButton");
        let subscribeCheckbox = document.getElementById("subscribeCheckBox");
        // localStorage.setItem("1", "David");
        // console.log(localStorage.getItem(1));
        // //localStorage.removeItem("1");
        // console.log(localStorage.length);

        sendButton.addEventListener("click", function()
        {
            //event.preventDefault();//debugging
            if(subscribeCheckbox.checked)
            {
                let contact = new Contact(fullName.value, contactNumber.value, emailAddress.value);
                if(contact.serialized())
                {
                    let key = contact.FullName.substring(0,1) + Date.now();
                    localStorage.setItem(key, contact.serialized());
                }
                
            }
        });
    } 

    function DisplayContactListPage()
    {
        console.log("Contact List page");

        if(localStorage.length > 0)
        {
            let contactList = document.getElementById("contactList");
            let data = "";
            let keys = Object.keys(localStorage);
            let index = 1;

            for(const key of keys)
            {
                let contactData = localStorage.getItem(key);//retrive data from key in local storage
                let contact = new Contact(); //creat empty object
                contact.deserialized(contactData);

                data += `<tr> 
                <th scope="row" class"text-center">${index}</th>
                <td>${contact.FullName}</td>
                <td>${contact.ContactNumber}</td>
                <td>${contact.EmailAddress}</td>
                <td></td>
                <td></td>
                </tr>
                `;

                index++;
            }

            contactList.innerHTML = data;
        }
    }
    //named function
    function Start()
    {
        console.log("App Started!");

        switch(document.title)
        {
            case"Home":
                DisplayHome();
                break;
            case "Contact Us":
                DisplayContactPage();
                break;
            case "Contact-List":
                DisplayContactListPage();
                break;
            case"About Us":
            DisplayAboutPage();
                break;
            case "Products":
                DisplayProductsListPage();
                break;
            case "Services":
                DisplayServicePage();
                break;
        }

    }

    window.addEventListener("load", Start);


})();