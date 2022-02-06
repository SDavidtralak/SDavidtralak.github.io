// Names: Alyxander Byfield, David Stralak
// Student IDs: 100704163, 
// Date Completed: February 6th, 2022

//IIFE -- immediately invoked Function expression 

// AKA anon self-excuteing function
(function()
{
    function DisplayHome()
    {
        // step 1 get refrence to entry point
        let MainContent = document.getElementsByTagName("main")[0];
        let DocumnentBody = document.body;
        //step 2 create elements to insert
        let MainParagragh = document.createElement("p");
        
        let Article = document.createElement("article");
        let ArticleParagraph = `<p id="ArticleParagraph" class="mt-3"> Welcome to our Lab 1 website</a> </p>`;
        //step 3 configure element
        MainParagragh.setAttribute("id", "MainParagraph");
        MainParagragh.setAttribute("class", "mt-3");
        //example of template string(lab 1 help)
        let ParagraphStringOne = "Welcome to Lab 1 of WEBD-6201, this lab is being done by  David Stralak and Alyxander Byfield";
        let ParagraphStringTwo = `${ParagraphStringOne} I hope you enjoy what we have created and what the website will show you`;
        MainParagragh.textContent = ParagraphStringTwo;
        Article.setAttribute("class", "container");
        //changing background image
        DocumnentBody.style.backgroundImage = ( "url(./images/webdbackground.jpg)");
        DocumnentBody.style.backgroundRepeat = ("no-repeat");
        DocumnentBody.style.backgroundSize = ("cover");
        DocumnentBody.style.color =("azure");

        //step 4 add element
        MainContent.appendChild(MainParagragh);
        Article.innerHTML = ArticleParagraph;
        DocumnentBody.appendChild(Article);
    }   

    function DisplayProjects()
    {


        // step 1 get refrence to entry point
        let MainContent = document.getElementsByTagName("main")[0];
        let DocumnentBody = document.body;

        //step 2 create elements to insert
        let MainParagragh = document.createElement("p");
        
        let Article = document.createElement("article");
        let ArticleParagraph = `<p id="ArticleParagraph" class="mt-3"> 
        One of our Favourite projects were the linux labs,  when doing the labs they were extremely 
        interesting to places that you could get to with knowing the right structure. 
        Another Project that was really interesting was the 1st Mainframe assignment, it was really cool
        to work in a older system and still see used today in different bussiness.
        Lastly, a project I really enjoyed was the Java class creation project from OOP 2. 
        It's fun to make classes in Java.</p>`;
        //step 3 configure element
        MainParagragh.setAttribute("id", "MainParagraph");
        MainParagragh.setAttribute("class", "mt-3");
        //example of template string(lab 1 help)
        let ParagraphStringOne = "Welcome to Lab 1 of WEBD-6201, this lab is being done by  David Stralak and Alyxander Byfield";
        let ParagraphStringTwo = `${ParagraphStringOne} This is my Projects page where we will be posting three of our favourite projects`;
        MainParagragh.textContent = ParagraphStringTwo;
        Article.setAttribute("class", "container");
        //changing background image
        DocumnentBody.style.backgroundImage = ( "url(./images/webdbackground.jpg)");
        DocumnentBody.style.backgroundRepeat = ("no-repeat");
        DocumnentBody.style.backgroundSize = ("cover");
        DocumnentBody.style.color =("azure");

        //step 4 add element
        MainContent.appendChild(MainParagragh);
        Article.innerHTML = ArticleParagraph;
        DocumnentBody.appendChild(Article);
;
        

        //Deletion example
        //document.getElementsByTagName("li")[0].remove();
        //document.getElementById("ArticleParagraph").remove();
        
        //insert before
        // let NewH1 = document.createElement("h1");
        // NewH1.setAttribute("class", "display-1");
        
        // MainContent.before(NewH1);
        // NewH1.textContent = "Hello World :(";
        // Testing git again 
    }  
    
    function DisplayAbout()
    {

        // step 1 get refrence to entry point
        let MainContent = document.getElementsByTagName("main")[0];
        let DocumnentBody = document.body;
        //step 2 create elements to insert
        
        let MainParagragh = document.createElement("p");
        
        let Article = document.createElement("article");
        let ArticleParagraph = `
        <p id="ArticleParagraph" class="mt-3"> David Stralak: I am in my 2nd year of the CPA course and i also play for the varsity rugby team here 
        at durham. I hope to come back to durham after this program to continue my studies but having a focus on cyber security. My resume can be found here at 
        <a href="https://my.indeed.com/p/davids-fel56a5">David's resume</a> 
        </p>
        <p class="mt-3"> Alyx Byfield: Hey my name is Alyx and I am a 2nd year computer programming student.
        Some of my hobbies include: Reading, Writing, Music, Arduino, and Coding.
        This year I'm striving to get started in the field of IT
        Here is a link to my Indeed Resume: 
        <a href="https://my.indeed.com/p/alyxanderb-chwsm6e"> Alyx's resume</a>
        </p>`;
        //step 3 configure element
        MainParagragh.setAttribute("id", "MainParagraph");
        MainParagragh.setAttribute("class", "mt-3");
        //example of template string(lab 1 help)
        let ParagraphStringOne = "Welcome to Lab 1 of WEBD-6201, this lab is being done by  David Stralak and Alyxander Byfield";
        let ParagraphStringTwo = `${ParagraphStringOne} I hope you enjoy what we have created and what the website will show you`;
        MainParagragh.textContent = ParagraphStringTwo;
        Article.setAttribute("class", "container");
        //changing background image
        DocumnentBody.style.backgroundImage = ( "url(./images/webdbackground.jpg)");
        DocumnentBody.style.backgroundRepeat = ("no-repeat");
        DocumnentBody.style.backgroundSize = ("cover");
        DocumnentBody.style.color =("azure");

        //step 4 add element
        MainContent.appendChild(MainParagragh);
        Article.innerHTML = ArticleParagraph;
        DocumnentBody.appendChild(Article);
        
    }   

    function DisplayContact()
    {


        // step 1 get refrence to entry point
        let MainContent = document.getElementsByTagName("main")[0];
        let DocumnentBody = document.body;
        //step 2 create elements to insert
        let MainParagragh = document.createElement("p");
        
        let Article = document.createElement("article");
        let ArticleParagraph = `<p id="ArticleParagraph" class="mt-3"> Later updates will be made to improve the site, Stay Tuned </p>`;
        //step 3 configure element
        MainParagragh.setAttribute("id", "MainParagraph");
        MainParagragh.setAttribute("class", "mt-3");
        //example of template string(lab 1 help)
        let ParagraphStringOne = "Welcome to Lab 1 of WEBD-6201, this is the contact page please input you information and we contact you shortly";
        
        MainParagragh.textContent = ParagraphStringOne;
        Article.setAttribute("class", "container");

        //changing background image
        DocumnentBody.style.backgroundImage = ( "url(./images/webdbackground.jpg)");
        DocumnentBody.style.backgroundRepeat = ("no-repeat");
        DocumnentBody.style.backgroundSize = ("cover");
        DocumnentBody.style.color =("azure");

        //step 4 add element
        MainContent.appendChild(MainParagragh);
        Article.innerHTML = ArticleParagraph;
        DocumnentBody.appendChild(Article);

        let SendButton = document.getElementById("sendButton");
        SendButton.addEventListener("click", function(event)
            {
                console.log("Clicked!");
                let contact = new Contact(fullName.value, contactNumber.value, emailAddress.value);
                console.log(contact.toString());
                event.preventDefault();
                window.setTimeout(function(){location.href = "index.html"}, 3000);   
            }
        )

        
        
    }  

    function DisplayServices()
    {


        // step 1 get refrence to entry point
        let MainContent = document.getElementsByTagName("main")[0];
        let DocumnentBody = document.body;
        //created var that use class name to change products to projects
        let ProjectsTab = document.getElementById("projects");

        //step 2 create elements to insert
        let MainParagragh = document.createElement("p");
        
        let Article = document.createElement("article");
        let ArticleParagraph = `<p id="ArticleParagraph" class="mt-3"> David Stralak: My skills inculde the ability to learn things quckly as i get understanding of concepts quickly.
         I also have a wide range of skill in all levels of programming from OOP to Web development to System development. My three Strongest skills are Document analysis,
         Custom programming with most of my knowledge being in C++, Java, and C#, the thrid skill is Web Design. </p>`;
        let ArticleParagraph2 = `<p id="ArticleParagraph" class="mt-3"> 
         Alyxander Byfield: Our goal is to provide only the best services for our clients
         and to that end, I will use my skills in web development, documentation, and planning to ensure our clients
         get only the best. </p>`;


        //step 3 configure element
        MainParagragh.setAttribute("id", "MainParagraph");
        MainParagragh.setAttribute("class", "mt-3");
        //example of template string(lab 1 help)
        let ParagraphStringOne = "Welcome to Lab 1 of WEBD-6201, this lab is being done by  David Stralak and Alyxander Byfield";
        let ParagraphStringTwo = `${ParagraphStringOne} I hope you enjoy what we have created and what the website will show you`;
        MainParagragh.textContent = ParagraphStringTwo;
        Article.setAttribute("class", "container");
        //changing text of products to projects
        ProjectsTab.textContent = "Projects";
        //changing background image
        DocumnentBody.style.backgroundImage = ( "url(./images/webdbackground.jpg)");
        DocumnentBody.style.backgroundRepeat = ("no-repeat");
        DocumnentBody.style.backgroundSize = ("cover");
        DocumnentBody.style.color =("azure");

        //step 4 add element
        MainContent.appendChild(MainParagragh);
        Article.innerHTML += ArticleParagraph;
        Article.innerHTML += ArticleParagraph2;
        DocumnentBody.appendChild(Article);

        
    }   


    //named function
    function Start()
    {
        console.log("App Started!");


        $(".pageImages").css(
            {
                "width": "30%",
                "height": "60%",
                "margin-left": "1%"
            }
        );

        //created var that use class name to change products to projects
        // let ProductsTab = document.getElementById("projects");
        // ProductsTab.textContent = "Projects";

        document.getElementById("projects").innerHTML = "Projects";

        // Get a target on the Navbar list
        let NavbarUl = document.getElementById("nav-ul");
        // Get a targer on the Contact button for placement
        let ContactBtn = document.getElementById("contact_btn");

        // Create new list item
        let HumanResourcesCon = document.createElement("li");
        HumanResourcesCon.className = "nav-item";
            // let HumanResourcesTab = document.createElement("a");
            // Append a new Anchor element
            let HumanResourcesTab = HumanResourcesCon.appendChild(document.createElement("a"));
            HumanResourcesTab.classList.add("nav-link");
            // Create I element for text + icon
                let HumanResourcesText = document.createElement("i");
                HumanResourcesText.classList.add("fas", "fa-user-circle");
                HumanResourcesText.innerHTML = "Human Resources";
                HumanResourcesTab.appendChild(HumanResourcesText);
        // Insert the new HR link before the Contact Button
        NavbarUl.insertBefore(HumanResourcesCon, ContactBtn);

        // Creating the footer Navbar
        //  BOOTSTRAP REFERENCE
        // <nav class="navbar fixed-bottom navbar-light bg-light">
        //     <div class="container-fluid">
        //          <a class="navbar-brand" href="#">Fixed bottom</a>
        //     </div>
        // </nav>
        let FooterNavbar = document.createElement("nav");
        FooterNavbar.classList.add("navbar", "fixed-bottom", "navbar-light", "bg-dark");
        let FooterNavbarDiv = FooterNavbar.appendChild(document.createElement("div"));
            FooterNavbarDiv.className = "container-fluid";
            let FooterNavBarText = document.createElement("a");
            FooterNavbarDiv.appendChild(FooterNavBarText);
        FooterNavBarText.className = "navbar-brand";
        FooterNavBarText.innerHTML = "©Copyright 2022";
        document.body.style.paddingBottom = "20%";
        document.body.appendChild(FooterNavbar);



        switch(document.title)
        {
            case"Home":
                DisplayHome();
                break;
                case"About Us":
                DisplayAbout();
                console.log("About us page");
                break;
                case"Products":
                DisplayProjects();
                break;
                case"Services":
                DisplayServices();
                break;
                case"Contact Us":
                DisplayContact();
                break;
        }

    }

    window.addEventListener("load", Start);


})();