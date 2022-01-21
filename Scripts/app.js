//IIFE -- immediately invoked Function expression 
// AKA anon self-excuteing function
(function()
{
    function DisplayHome()
    {
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
        
        // MainContent.before(NewH1);
        // NewH1.textContent = "Hello World :(";
        // Testing git again 
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
        }

    }

    window.addEventListener("load", Start);


})();