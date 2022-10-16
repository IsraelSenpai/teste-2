//==================== Reference table ====================//
//:: Settings
//:: Gradient
//:: Main-Colors
//:: Search-Text-Color
//:: Search-Bar-Color
//:: Search-Border-Radius
//:: Text-Colors
//:: Hover-Color
//:: Logo-Color
//:: Parallax-Border-Radius
//:: Opacity
//:: Background
//:: Fonts
//==================== *************** ====================//

//***************************
// Settings
//***************************
var root = document.querySelector(':root');
var rootStyles = getComputedStyle(root);


//***************************
// Gradient
//***************************
let gradient_primary_color = document.querySelector(".edit-panel #gradient-primary-color");
let gradient_secondary_color = document.querySelector(".edit-panel #gradient-secondary-color");
function generategradientcolor()
{
    root.style.setProperty('--gradient-color', `linear-gradient(to right, ${gradient_primary_color.value} 20%, ${gradient_secondary_color.value} 100%)`)
    root.style.setProperty('--gradient-primary-color', `${gradient_primary_color.value}`)
    root.style.setProperty('--gradient-secondary-color', `${gradient_secondary_color.value}`)
    root.style.setProperty('--gradient-primary-color-transparent', `${gradient_primary_color.value}aa`)
}
gradient_primary_color.addEventListener("input", generategradientcolor);
gradient_secondary_color.addEventListener("input", generategradientcolor);


//***************************
// Main-Colors
//***************************
let primary_color = document.querySelector(".edit-panel #primary-color");
function generatemaincolor()
{
    root.style.setProperty('--primary-color', `${primary_color.value}`)
}
primary_color.addEventListener("input", generatemaincolor);


//***************************
// Search-Text-Color
//***************************
let search_text_color_one = document.querySelector(".edit-panel #search-text-color-one");
let search_text_color_two = document.querySelector(".edit-panel #search-text-color-two");
function generatesearchtextcolors()
{
    root.style.setProperty('--search-text-color-one', `${search_text_color_one.value}`)
    root.style.setProperty('--search-text-color-two', `${search_text_color_two.value}`)
}
search_text_color_one.addEventListener("input", generatesearchtextcolors);
search_text_color_two.addEventListener("input", generatesearchtextcolors);


//***************************
// Search-Bar-Color
//***************************
let search_bar_color = document.querySelector(".edit-panel #search-bar-color");
function generatesearchbarcolor()
{
    root.style.setProperty('--search-bar-color', `${search_bar_color.value}`)
}
search_bar_color.addEventListener("input", generatesearchbarcolor);


//***************************
// Search-Border-Radius
//***************************
var search_border_radius_top_left = document.querySelector(".edit-panel #search-border-radius-top-left");
var search_border_radius_top_left_result = document.querySelector(".edit-panel #search-border-radius-top-left-result");
var search_border_radius_top_right = document.querySelector(".edit-panel #search-border-radius-top-right");
var search_border_radius_top_right_result = document.querySelector(".edit-panel #search-border-radius-top-right-result");
var search_border_radius_bottom_right = document.querySelector(".edit-panel #search-border-radius-bottom-right");
var search_border_radius_bottom_right_result = document.querySelector(".edit-panel #search-border-radius-bottom-right-result");
var search_border_radius_bottom_left = document.querySelector(".edit-panel #search-border-radius-bottom-left");
var search_border_radius_bottom_left_result = document.querySelector(".edit-panel #search-border-radius-bottom-left-result");
function generatesearchborderradius() 
{
    root.style.setProperty('--search-border-radius-top-left', `${search_border_radius_top_left.value}px`)
    search_border_radius_top_left_result.innerHTML = search_border_radius_top_left.value;
    if (search_border_radius_top_left.value > 4)
    {
        root.style.setProperty('--search-bar-border-radius-top-left', `${search_border_radius_top_left.value - 3}px`)
    }
    if (search_border_radius_top_left.value == 4)
    {
        root.style.setProperty('--search-bar-border-radius-top-left', `1px`)
    }
    if (search_border_radius_top_left.value == 3 || search_border_radius_top_left.value == 2 || search_border_radius_top_left.value == 1 || search_border_radius_top_left.value == 0)
    {
        root.style.setProperty('--search-bar-border-radius-top-left', `0px`)
    }

    root.style.setProperty('--search-border-radius-top-right', `${search_border_radius_top_right.value}px`)
    search_border_radius_top_right_result.innerHTML = search_border_radius_top_right.value;
    if (search_border_radius_top_right.value > 4)
    {
        root.style.setProperty('--search-bar-border-radius-top-right', `${search_border_radius_top_right.value - 3}px`)
    }
    if (search_border_radius_top_right.value == 4)
    {
        root.style.setProperty('--search-bar-border-radius-top-right', `1px`)
    }
    if (search_border_radius_top_right.value == 3 || search_border_radius_top_right.value == 2 || search_border_radius_top_right.value == 1 || search_border_radius_top_right.value == 0)
    {
        root.style.setProperty('--search-bar-border-radius-top-right', `0px`)
    }

    root.style.setProperty('--search-border-radius-bottom-right', `${search_border_radius_bottom_right.value}px`)
    search_border_radius_bottom_right_result.innerHTML = search_border_radius_bottom_right.value;
    if (search_border_radius_bottom_right.value > 4)
    {
        root.style.setProperty('--search-bar-border-radius-bottom-right', `${search_border_radius_bottom_right.value - 3}px`)
    }
    if (search_border_radius_bottom_right.value == 4)
    {
        root.style.setProperty('--search-bar-border-radius-bottom-right', `1px`)
    }
    if (search_border_radius_bottom_right.value == 3 || search_border_radius_bottom_right.value == 2 || search_border_radius_bottom_right.value == 1 || search_border_radius_bottom_right.value == 0)
    {
        root.style.setProperty('--search-bar-border-radius-bottom-right', `0px`)
    }

    root.style.setProperty('--search-border-radius-bottom-left', `${search_border_radius_bottom_left.value}px`)
    search_border_radius_bottom_left_result.innerHTML = search_border_radius_bottom_left.value;
    if (search_border_radius_bottom_left.value > 4)
    {
        root.style.setProperty('--search-bar-border-radius-bottom-left', `${search_border_radius_bottom_left.value - 3}px`)
    }
    if (search_border_radius_bottom_left.value == 4)
    {
        root.style.setProperty('--search-bar-border-radius-bottom-left', `1px`)
    }
    if (search_border_radius_bottom_left.value == 3 || search_border_radius_bottom_left.value == 2 || search_border_radius_bottom_left.value == 1 || search_border_radius_bottom_left.value == 0)
    {
        root.style.setProperty('--search-bar-border-radius-bottom-left', `0px`)
    }
}
search_border_radius_top_left.addEventListener("input", generatesearchborderradius);
search_border_radius_top_right.addEventListener("input", generatesearchborderradius);
search_border_radius_bottom_right.addEventListener("input", generatesearchborderradius);
search_border_radius_bottom_left.addEventListener("input", generatesearchborderradius);


//***************************
// Text-Colors
//***************************
let text_color_one = document.querySelector(".edit-panel #text-color-one");
let text_color_two = document.querySelector(".edit-panel #text-color-two");
let text_color_three = document.querySelector(".edit-panel #text-color-three");
let text_color_four = document.querySelector(".edit-panel #text-color-four");
function generatetextcolor()
{
    root.style.setProperty('--text-color-one', `${text_color_one.value}`)
    root.style.setProperty('--text-color-two', `${text_color_two.value}`)
    root.style.setProperty('--text-color-three', `${text_color_three.value}`)
    root.style.setProperty('--text-color-four', `${text_color_four.value}`)
}
text_color_one.addEventListener("input", generatetextcolor);
text_color_two.addEventListener("input", generatetextcolor);
text_color_three.addEventListener("input", generatetextcolor);
text_color_four.addEventListener("input", generatetextcolor);


//***************************
// Hover-Color
//***************************
let hover_color = document.querySelector(".edit-panel #hover-color");
function generatehovercolor()
{
    root.style.setProperty('--hover-color-two', `${hover_color.value}`)
}
hover_color.addEventListener("input", generatehovercolor);


//***************************
// Logo-Color
//***************************
let color_logo = document.querySelector(".edit-panel #logo-color");
function generatelogocolor()
{
    root.style.setProperty('--logo-color', `${color_logo.value}`)
}
color_logo.addEventListener("input", generatelogocolor);


//***************************
// Parallax-Border-Radius
//***************************
var parallax_border_top_left = document.querySelector(".edit-panel #parallax-border-radius-top-left");
var parallax_border_top_left_result = document.querySelector(".edit-panel #parallax-border-radius-top-left-result");
var parallax_border_top_right = document.querySelector(".edit-panel #parallax-border-radius-top-right");
var parallax_border_top_right_result = document.querySelector(".edit-panel #parallax-border-radius-top-right-result");
var parallax_border_bottom_right = document.querySelector(".edit-panel #parallax-border-radius-bottom-right");
var parallax_border_bottom_right_result = document.querySelector(".edit-panel #parallax-border-radius-bottom-right-result");
var parallax_border_bottom_left = document.querySelector(".edit-panel #parallax-border-radius-bottom-left");
var parallax_border_bottom_left_result = document.querySelector(".edit-panel #parallax-border-radius-bottom-left-result");
function generateparallaxborderradius() 
{
    root.style.setProperty('--parallax-border-radius-top-left', `${parallax_border_top_left.value}px`)
    parallax_border_top_left_result.innerHTML = parallax_border_top_left.value;
    root.style.setProperty('--parallax-border-radius-top-right', `${parallax_border_top_right.value}px`)
    parallax_border_top_right_result.innerHTML = parallax_border_top_right.value;
    root.style.setProperty('--parallax-border-radius-bottom-right', `${parallax_border_bottom_right.value}px`)
    parallax_border_bottom_right_result.innerHTML = parallax_border_bottom_right.value;
    root.style.setProperty('--parallax-border-radius-bottom-left', `${parallax_border_bottom_left.value}px`)
    parallax_border_bottom_left_result.innerHTML = parallax_border_bottom_left.value;
}
parallax_border_top_left.addEventListener("input", generateparallaxborderradius);
parallax_border_top_right.addEventListener("input", generateparallaxborderradius);
parallax_border_bottom_right.addEventListener("input", generateparallaxborderradius);
parallax_border_bottom_left.addEventListener("input", generateparallaxborderradius);


//***************************
// Opacity
//***************************
var opacity = document.querySelector(".edit-panel #opacity");
var opacity_result = document.querySelector(".edit-panel #opacity-result");
function generateopacity() 
{
    root.style.setProperty('--opacity', `${opacity.value}%`)
    opacity_result.innerHTML = opacity.value;
}
opacity.addEventListener("input", generateopacity);


//***************************
// Background
//***************************
const background = document.querySelector(".edit-panel #background");
const add_background = document.querySelector(".edit-panel #add-background");
const remove_background = document.querySelector(".edit-panel #remove-background");
const background_image = document.querySelector(".edit-panel .panel .content .image-container .container #background-photo img");
let regExp = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;
function Background(){
    background.click();
}
background.addEventListener("change", function(){
  const file = this.files[0];
  if(file)
  {
        const reader = new FileReader();
        reader.onload = function(){
        const result = reader.result;
        background_image.src = result;
        root.style.setProperty('--background', `url('${result}')`)
    }
        remove_background.addEventListener("click", function(){
            background_image.src = "background.jpg";
        root.style.setProperty('--background', `url('../../background.jpg')`)
    })
    reader.readAsDataURL(file);
  }
  if(this.value){
    let valueStore = this.value.match(regExp);
  }
});


//***************************
// Fonts
//***************************
function FontStyleOne() 
{ 
    root.style.setProperty('--font', `'Bangers', cursive`) 


    //================|| Navbar ||================//
    //********|| Size ||********//
    root.style.setProperty('--navbar-item-size', `17px`) 
    root.style.setProperty('--navbar-drop-size', `16px`) 
    //********|| Margin ||********//
    root.style.setProperty('--navbar-item-margin', `0px, 0px`) 
    root.style.setProperty('--navbar-drop-margin', `0px, 0px`) 
    //********|| Weight ||********//
    root.style.setProperty('--navbar-weight', `normal`) 


    //================|| Text ||================//
    //********|| Size ||********//
    root.style.setProperty('--text-big-title-size', `35px`) 
    root.style.setProperty('--text-middle-title-size', `25px`) 
    root.style.setProperty('--text-small-title-size', `19px`) 
    //********|| Margin ||********//
    root.style.setProperty('--text-big-title-margin', `0px 0px -6px 0px`) 
    root.style.setProperty('--text-middle-title-margin', `0px 0px 0px 0px`) 
    root.style.setProperty('--text-small-title-margin', `0px 0px 0px 0px`) 
    //********|| Weight ||********//
    root.style.setProperty('--text-weight', `normal`) 


    //================|| Search ||================//
    //********|| Size ||********//
    root.style.setProperty('--search-bar-size', `16px`) 
    root.style.setProperty('--search-results-size', `18px`) 
    //********|| Margin ||********//
    root.style.setProperty('--search-bar-margin', `0px, 0px`)
    root.style.setProperty('--search-results-margin', `0px, 0px`)
    //********|| Weight ||********//
    root.style.setProperty('--search-weight', `normal`) 


    //================|| Contacts ||================//
    //********|| Size ||********//
    root.style.setProperty('--contacts-info-1-size', `20px`) 
    root.style.setProperty('--contacts-info-2-size', `17px`)
    //********|| Margin ||********//
    root.style.setProperty('--contacts-info-1-margin', `0px, 0px`) 
    root.style.setProperty('--contacts-info-2-margin', `0px, 0px`)  
    //********|| Weight ||********//
    root.style.setProperty('--contacts-weight', `normal`) 


    //================|| Final-Page ||================//
    //********|| Size ||********//
    root.style.setProperty('--final-page-title-size', `25px`) 
    root.style.setProperty('--final-page-link-size', `17px`) 
    root.style.setProperty('--final-page-text-size', `22px`)   
    //********|| Weight ||********//
    root.style.setProperty('--final-page-weight', `normal`)
}

function FontStyleTwo() 
{ 
    root.style.setProperty('--font', `'DynaPuff', cursive`) 


    //================|| Navbar ||================//
    //********|| Size ||********//
    root.style.setProperty('--navbar-item-size', `15px`) 
    root.style.setProperty('--navbar-drop-size', `14px`) 
    //********|| Margin ||********//
    root.style.setProperty('--navbar-item-margin', `1px, 5px`) 
    root.style.setProperty('--navbar-drop-margin', `1px, 5px`) 
    //********|| Weight ||********//
    root.style.setProperty('--navbar-weight', `normal`) 

    
    //================|| Text ||================//
    //********|| Size ||********//
    root.style.setProperty('--text-big-title-size', `31px`) 
    root.style.setProperty('--text-middle-title-size', `21px`) 
    root.style.setProperty('--text-small-title-size', `17px`) 
    //********|| Margin ||********//
    root.style.setProperty('--text-big-title-margin', `0px 0px -6px 0px`) 
    root.style.setProperty('--text-middle-title-margin', `0px 0px 0px 0px`) 
    root.style.setProperty('--text-small-title-margin', `0px 0px 0px 0px`) 
    //********|| Weight ||********//
    root.style.setProperty('--text-weight', `normal`) 


    //================|| Search ||================//
    //********|| Size ||********//
    root.style.setProperty('--search-bar-size', `15px`) 
    root.style.setProperty('--search-results-size', `16px`) 
    //********|| Margin ||********//
    root.style.setProperty('--search-bar-margin', `0px, 0px`)
    root.style.setProperty('--search-results-margin', `0px, 0px`)
    //********|| Weight ||********//
    root.style.setProperty('--search-weight', `normal`) 

    
    //================|| Contacts ||================//
    //********|| Size ||********//
    root.style.setProperty('--contacts-info-1-size', `17px`) 
    root.style.setProperty('--contacts-info-2-size', `14px`)
    //********|| Margin ||********//
    root.style.setProperty('--contacts-info-1-margin', `0px, 0px`) 
    root.style.setProperty('--contacts-info-2-margin', `0px, 0px`)  
    //********|| Weight ||********//
    root.style.setProperty('--contacts-weight', `700`) 


    //================|| Final-Page ||================//
    //********|| Size ||********//
    root.style.setProperty('--final-page-title-size', `23px`) 
    root.style.setProperty('--final-page-link-size', `15px`) 
    root.style.setProperty('--final-page-text-size', `20px`)   
    //********|| Weight ||********//
    root.style.setProperty('--final-page-weight', `normal`)

}

function FontStyleThree() 
{ 
    root.style.setProperty('--font', `'Alkalami', serif`) 


    //================|| Navbar ||================//
    //********|| Size ||********//
    root.style.setProperty('--navbar-item-size', `15px`) 
    root.style.setProperty('--navbar-drop-size', `14px`) 
    //********|| Margin ||********//
    root.style.setProperty('--navbar-item-margin', `1px, 6px`) 
    root.style.setProperty('--navbar-drop-margin', `1px, 6px`) 
    //********|| Weight ||********//
    root.style.setProperty('--navbar-weight', `normal`) 

    
    //================|| Text ||================//
    //********|| Size ||********//
    root.style.setProperty('--text-big-title-size', `32px`) 
    root.style.setProperty('--text-middle-title-size', `22px`) 
    root.style.setProperty('--text-small-title-size', `17px`) 
    //********|| Margin ||********//
    root.style.setProperty('--text-big-title-margin', `0px 0px -6px 0px`) 
    root.style.setProperty('--text-middle-title-margin', `0px 0px 0px 0px`) 
    root.style.setProperty('--text-small-title-margin', `0px 0px -6px 0px`) 
    //********|| Weight ||********//
    root.style.setProperty('--text-weight', `normal`) 


    //================|| Search ||================//
    //********|| Size ||********//
    root.style.setProperty('--search-bar-size', `17px`) 
    root.style.setProperty('--search-results-size', `17px`) 
    //********|| Margin ||********//
    root.style.setProperty('--search-bar-margin', `0px, 4px`)
    root.style.setProperty('--search-results-margin', `0px, 4px`)
    //********|| Weight ||********//
    root.style.setProperty('--search-weight', `normal`) 

    
    //================|| Contacts ||================//
    //********|| Size ||********//
    root.style.setProperty('--contacts-info-1-size', `18px`) 
    root.style.setProperty('--contacts-info-2-size', `15px`)
    //********|| Margin ||********//
    root.style.setProperty('--contacts-info-1-margin', `0px, 3px`) 
    root.style.setProperty('--contacts-info-2-margin', `0px, 3px`)  
    //********|| Weight ||********//
    root.style.setProperty('--contacts-weight', `normal`) 

    
    //================|| Final-Page ||================//
    //********|| Size ||********//
    root.style.setProperty('--final-page-title-size', `24px`) 
    root.style.setProperty('--final-page-link-size', `15px`) 
    root.style.setProperty('--final-page-text-size', `21px`)   
    //********|| Weight ||********//
    root.style.setProperty('--final-page-weight', `normal`)
}

function FontStyleFour() 
{ 
    root.style.setProperty('--font', `'Righteous', cursive`) 


    //================|| Navbar ||================//
    //********|| Size ||********//
    root.style.setProperty('--navbar-item-size', `15px`) 
    root.style.setProperty('--navbar-drop-size', `14px`) 
    //********|| Margin ||********//
    root.style.setProperty('--navbar-item-margin', `0px, 1px`) 
    root.style.setProperty('--navbar-drop-margin', `0px, 0px`) 
    //********|| Weight ||********//
    root.style.setProperty('--navbar-weight', `normal`) 

    
    //================|| Text ||================//
    //********|| Size ||********//
    root.style.setProperty('--text-big-title-size', `31px`) 
    root.style.setProperty('--text-middle-title-size', `21px`) 
    root.style.setProperty('--text-small-title-size', `16px`) 
    //********|| Margin ||********//
    root.style.setProperty('--text-big-title-margin', `0px 0px -6px 0px`) 
    root.style.setProperty('--text-middle-title-margin', `0px 0px 0px 0px`) 
    root.style.setProperty('--text-small-title-margin', `0px 0px 0px 0px`) 
    //********|| Weight ||********//
    root.style.setProperty('--text-weight', `normal`) 


    //================|| Search ||================//
    //********|| Size ||********//
    root.style.setProperty('--search-bar-size', `16px`) 
    root.style.setProperty('--search-results-size', `16px`) 
    //********|| Margin ||********//
    root.style.setProperty('--search-bar-margin', `0px, 0px`)
    root.style.setProperty('--search-results-margin', `0px, 0px`)
    //********|| Weight ||********//
    root.style.setProperty('--search-weight', `normal`) 

    
    //================|| Contacts ||================//
    //********|| Size ||********//
    root.style.setProperty('--contacts-info-1-size', `18px`) 
    root.style.setProperty('--contacts-info-2-size', `15px`)
    //********|| Margin ||********//
    root.style.setProperty('--contacts-info-1-margin', `0px, 0px`) 
    root.style.setProperty('--contacts-info-2-margin', `0px, 0px`)  
    //********|| Weight ||********//
    root.style.setProperty('--contacts-weight', `normal`)
    
    
    //================|| Final-Page ||================//
    //********|| Size ||********//
    root.style.setProperty('--final-page-title-size', `25px`) 
    root.style.setProperty('--final-page-link-size', `15px`) 
    root.style.setProperty('--final-page-text-size', `20px`)   
    //********|| Weight ||********//
    root.style.setProperty('--final-page-weight', `normal`)
}

function FontStyleFive() 
{ 
    root.style.setProperty('--font', `'Creepster', cursive`)
    
    
    //================|| Navbar ||================//
    //********|| Size ||********//
    root.style.setProperty('--navbar-item-size', `17px`) 
    root.style.setProperty('--navbar-drop-size', `16px`) 
    //********|| Margin ||********//
    root.style.setProperty('--navbar-item-margin', `0px, 0px`) 
    root.style.setProperty('--navbar-drop-margin', `0px, 0px`) 
    //********|| Weight ||********//
    root.style.setProperty('--navbar-weight', `normal`) 

    
    //================|| Text ||================//
    //********|| Size ||********//
    root.style.setProperty('--text-big-title-size', `36px`) 
    root.style.setProperty('--text-middle-title-size', `27px`) 
    root.style.setProperty('--text-small-titl-size', `22px`) 
    //********|| Margin ||********//
    root.style.setProperty('--text-big-title-margin', `0px 0px -6px 0px`) 
    root.style.setProperty('--text-middle-title-margin', `0px 0px -2px 0px`) 
    root.style.setProperty('--text-small-title-margin', `0px 0px 0px 0px`) 
    //********|| Weight ||********//
    root.style.setProperty('--text-weight', `normal`) 


    //================|| Search ||================//
    //********|| Size ||********//
    root.style.setProperty('--search-bar-size', `18px`) 
    root.style.setProperty('--search-results-size', `18px`) 
    //********|| Margin ||********//
    root.style.setProperty('--search-bar-margin', `0px, 0px`)
    root.style.setProperty('--search-results-margin', `0px, 0px`)
    //********|| Weight ||********//
    root.style.setProperty('--search-weight', `normal`)  

    
    //================|| Contacts ||================//
    //********|| Size ||********//
    root.style.setProperty('--contacts-info-1-size', `20px`) 
    root.style.setProperty('--contacts-info-2-size', `17px`)
    //********|| Margin ||********//
    root.style.setProperty('--contacts-info-1-margin', `0px, 0px`) 
    root.style.setProperty('--contacts-info-2-margin', `0px, 0px`)  
    //********|| Weight ||********//
    root.style.setProperty('--contacts-weight', `normal`) 

    
    //================|| Final-Page ||================//
    //********|| Size ||********//
    root.style.setProperty('--final-page-title-size', `27px`) 
    root.style.setProperty('--final-page-link-size', `17px`) 
    root.style.setProperty('--final-page-text-size', `24px`)   
    //********|| Weight ||********//
    root.style.setProperty('--final-page-weight', `normal`)
}

function FontStyleSex() 
{ 
    root.style.setProperty('--font', `'Anton', sans-serif`) 


    //================|| Navbar ||================//
    //********|| Size ||********//
    root.style.setProperty('--navbar-item-size', `15px`) 
    root.style.setProperty('--navbar-drop-size', `14px`) 
    //********|| Margin ||********//
    root.style.setProperty('--navbar-item-margin', `0px, 1px`) 
    root.style.setProperty('--navbar-drop-margin', `0px, 1px`) 
    //********|| Weight ||********//
    root.style.setProperty('--navbar-weight', `normal`) 

    
    //================|| Text ||================//
    //********|| Size ||********//
    root.style.setProperty('--text-big-title-size', `33px`) 
    root.style.setProperty('--text-middle-title-size', `22px`) 
    root.style.setProperty('--text-small-title-size', `16px`) 
    //********|| Margin ||********//
    root.style.setProperty('--text-big-title-margin', `0px 0px -6px 0px`) 
    root.style.setProperty('--text-middle-title-margin', `0px 0px 0px 0px`) 
    root.style.setProperty('--text-small-title-margin', `0px 0px 0px 0px`) 
    //********|| Weight ||********//
    root.style.setProperty('--text-weight', `normal`) 


    //================|| Search ||================//
    //********|| Size ||********//
    root.style.setProperty('--search-bar-size', `15px`) 
    root.style.setProperty('--search-results-size', `15px`) 
    //********|| Margin ||********//
    root.style.setProperty('--search-bar-margin', `0px, 0px`)
    root.style.setProperty('--search-results-margin', `0px, 0px`)
    //********|| Weight ||********//
    root.style.setProperty('--search-weight', `normal`) 

    
    //================|| Contacts ||================//
    //********|| Size ||********//
    root.style.setProperty('--contacts-info-1-size', `20px`) 
    root.style.setProperty('--contacts-info-2-size', `17px`)
    //********|| Margin ||********//
    root.style.setProperty('--contacts-info-1-margin', `0px, 0px`) 
    root.style.setProperty('--contacts-info-2-margin', `0px, 0px`)  
    //********|| Weight ||********//
    root.style.setProperty('--contacts-weight', `normal`) 

    
    //================|| Final-Page ||================//
    //********|| Size ||********//
    root.style.setProperty('--final-page-title-size', `25px`) 
    root.style.setProperty('--final-page-link-size', `15px`) 
    root.style.setProperty('--final-page-text-size', `21px`)   
    //********|| Weight ||********//
    root.style.setProperty('--final-page-weight', `normal`)
}

function FontStyleSeven() 
{ 
    root.style.setProperty('--font', `'Special Elite', cursive`) 


    //================|| Navbar ||================//
    //********|| Size ||********//
    root.style.setProperty('--navbar-item-size', `16px`) 
    root.style.setProperty('--navbar-drop-size', `16px`) 
    //********|| Margin ||********//
    root.style.setProperty('--navbar-item-margin', `0px, 2px`) 
    root.style.setProperty('--navbar-drop-margin', `0px, 2px`) 
    //********|| Weight ||********//
    root.style.setProperty('--navbar-weight', `normal`) 

    
    //================|| Text ||================//
    //********|| Size ||********//
    root.style.setProperty('--text-big-title-size', `33px`) 
    root.style.setProperty('--text-middle-title-size', `21px`) 
    root.style.setProperty('--text-small-title-size', `16px`) 
    //********|| Margin ||********//
    root.style.setProperty('--text-big-title-margin', `0px 0px -6px 0px`) 
    root.style.setProperty('--text-middle-title-margin', `0px 0px 0px 0px`) 
    root.style.setProperty('--text-small-title-margin', `0px 0px -4px 0px`) 
    //********|| Weight ||********//
    root.style.setProperty('--text-weight', `700`) 


    //================|| Search ||================//
    //********|| Size ||********//
    root.style.setProperty('--search-bar-size', `16px`) 
    root.style.setProperty('--search-results-size', `16px`) 
    //********|| Margin ||********//
    root.style.setProperty('--search-bar-margin', `0px, 3px`)
    root.style.setProperty('--search-results-margin', `0px, 3px`)
    //********|| Weight ||********//
    root.style.setProperty('--search-weight', `700`) 

    
    //================|| Contacts ||================//
    //********|| Size ||********//
    root.style.setProperty('--contacts-info-1-size', `18px`) 
    root.style.setProperty('--contacts-info-2-size', `15px`)
    //********|| Margin ||********//
    root.style.setProperty('--contacts-info-1-margin', `0px, 2px`) 
    root.style.setProperty('--contacts-info-2-margin', `0px, 2px`)  
    //********|| Weight ||********//
    root.style.setProperty('--contacts-weight', `700`) 

    
    //================|| Final-Page ||================//
    //********|| Size ||********//
    root.style.setProperty('--final-page-title-size', `27px`) 
    root.style.setProperty('--final-page-link-size', `15px`) 
    root.style.setProperty('--final-page-text-size', `20px`)   
    //********|| Weight ||********//
    root.style.setProperty('--final-page-weight', `700`)
}

function FontStyleEight() 
{ 
    root.style.setProperty('--font', `'Fredoka', sans-serif`) 


    //================|| Navbar ||================//
    //********|| Size ||********//
    root.style.setProperty('--navbar-item-size', `15px`) 
    root.style.setProperty('--navbar-drop-size', `15px`) 
    //********|| Margin ||********//
    root.style.setProperty('--navbar-item-margin', `0px, 1px`) 
    root.style.setProperty('--navbar-drop-margin', `0px, 1px`) 
    //********|| Weight ||********//
    root.style.setProperty('--navbar-weight', `700`) 

    
    //================|| Text ||================//
    //********|| Size ||********//
    root.style.setProperty('--text-big-title-size', `32px`) 
    root.style.setProperty('--text-middle-title-size', `20px`) 
    root.style.setProperty('--text-small-title-size', `15px`) 
    //********|| Margin ||********//
    root.style.setProperty('--text-big-title-margin', `0px 0px -6px 0px`) 
    root.style.setProperty('--text-middle-title-margin', `0px 0px 0px 0px`) 
    root.style.setProperty('--text-small-title-margin', `0px 0px 0px 0px`) 
    //********|| Weight ||********//
    root.style.setProperty('--text-weight', `700`) 


    //================|| Search ||================//
    //********|| Size ||********//
    root.style.setProperty('--search-bar-size', `16px`) 
    root.style.setProperty('--search-results-size', `16px`) 
    //********|| Margin ||********//
    root.style.setProperty('--search-bar-margin', `0px, 0px`)
    root.style.setProperty('--search-results-margin', `0px, 0px`)
    //********|| Weight ||********//
    root.style.setProperty('--search-weight', `700`)  

    
    //================|| Contacts ||================//
    //********|| Size ||********//
    root.style.setProperty('--contacts-info-1-size', `18px`) 
    root.style.setProperty('--contacts-info-2-size', `15px`)
    //********|| Margin ||********//
    root.style.setProperty('--contacts-info-1-margin', `0px, 0px`) 
    root.style.setProperty('--contacts-info-2-margin', `0px, 0px`)  
    //********|| Weight ||********//
    root.style.setProperty('--contacts-weight', `700`) 

    
    //================|| Final-Page ||================//
    //********|| Size ||********//
    root.style.setProperty('--final-page-title-size', `26px`) 
    root.style.setProperty('--final-page-link-size', `15px`) 
    root.style.setProperty('--final-page-text-size', `20px`)   
    //********|| Weight ||********//
    root.style.setProperty('--final-page-weight', `700`)
}

function FontStyleNine() 
{ 
    root.style.setProperty('--font', `'Roboto', sans-serif`) 


    //================|| Navbar ||================//
    //********|| Size ||********//
    root.style.setProperty('--navbar-item-size', `15px`) 
    root.style.setProperty('--navbar-drop-size', `14px`) 
    //********|| Margin ||********//
    root.style.setProperty('--navbar-item-margin', `0px, 1px`) 
    root.style.setProperty('--navbar-drop-margin', `0px, 1px`) 
    //********|| Weight ||********//
    root.style.setProperty('--navbar-weight', `700`) 

    
    //================|| Text ||================//
    //********|| Size ||********//
    root.style.setProperty('--text-big-title-size', `31px`) 
    root.style.setProperty('--text-middle-title-size', `20px`) 
    root.style.setProperty('--text-small-title-size', `16px`) 
    //********|| Margin ||********//
    root.style.setProperty('--text-big-title-margin', `0px 0px -6px 0px`) 
    root.style.setProperty('--text-middle-title-margin', `0px 0px 0px 0px`) 
    root.style.setProperty('--text-small-title-margin', `0px 0px 0px 0px`) 
    //********|| Weight ||********//
    root.style.setProperty('--text-weight', `700`) 


    //================|| Search ||================//
    //********|| Size ||********//
    root.style.setProperty('--search-bar-size', `16px`) 
    root.style.setProperty('--search-results-size', `16px`) 
    //********|| Margin ||********//
    root.style.setProperty('--search-bar-margin', `0px, 1px`)
    root.style.setProperty('--search-results-margin', `0px, 1px`)
    //********|| Weight ||********//
    root.style.setProperty('--search-weight', `700`) 

    
    //================|| Contacts ||================//
    //********|| Size ||********//
    root.style.setProperty('--contacts-info-1-size', `18px`) 
    root.style.setProperty('--contacts-info-2-size', `15px`)
    //********|| Margin ||********//
    root.style.setProperty('--contacts-info-1-margin', `0px, 0px`) 
    root.style.setProperty('--contacts-info-2-margin', `0px, 0px`)  
    //********|| Weight ||********//
    root.style.setProperty('--contacts-weight', `700`) 

    
    //================|| Final-Page ||================//
    //********|| Size ||********//
    root.style.setProperty('--final-page-title-size', `26px`) 
    root.style.setProperty('--final-page-link-size', `15px`) 
    root.style.setProperty('--final-page-text-size', `21px`)   
    //********|| Weight ||********//
    root.style.setProperty('--final-page-weight', `700`)
}