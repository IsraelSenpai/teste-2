//==================== Reference table ====================//
//:: Settings
//:: Gradient
//:: Main-Colors
//:: Pack-Text-Color
//:: Pack-Border-Radius
//:: Pack-Button-Text-Color
//:: Pack-Button-Border-Radius
//:: Text-Colors
//:: Hover-Color
//:: Pagination-Border-Radius
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
let secondary_color = document.querySelector(".edit-panel #secondary-color");
function generatemaincolor()
{
    root.style.setProperty('--primary-color', `${primary_color.value}`)
    root.style.setProperty('--secondary-color', `${secondary_color.value}`)
}
primary_color.addEventListener("input", generatemaincolor);
secondary_color.addEventListener("input", generatemaincolor);


//***************************
// Pack-Text-Color
//***************************
let pack_text_color_gradient_one = document.querySelector(".edit-panel #pack-text-color-gradient-one");
let pack_text_color_gradient_two = document.querySelector(".edit-panel #pack-text-color-gradient-two");
let pack_text_color = document.querySelector(".edit-panel #pack-text-color");
function generatepacktextcolor()
{
    root.style.setProperty('--pack-text-color-gradient', `linear-gradient(to right, ${pack_text_color_gradient_one.value} 20%, ${pack_text_color_gradient_two.value} 100%)`)
    root.style.setProperty('--pack-text-color', `${pack_text_color.value}`)
}
pack_text_color_gradient_one.addEventListener("input", generatepacktextcolor);
pack_text_color_gradient_two.addEventListener("input", generatepacktextcolor);
pack_text_color.addEventListener("input", generatepacktextcolor);


//***************************
// Pack-Border-Radius
//***************************
var pack_border_radius_top_left = document.querySelector(".edit-panel #pack-border-radius-top-left");
var pack_border_radius_top_left_result = document.querySelector(".edit-panel #pack-border-radius-top-left-result");
var pack_border_radius_top_right = document.querySelector(".edit-panel #pack-border-radius-top-right");
var pack_border_radius_top_right_result = document.querySelector(".edit-panel #pack-border-radius-top-right-result");
var pack_border_radius_bottom_right = document.querySelector(".edit-panel #pack-border-radius-bottom-right");
var pack_border_radius_bottom_right_result = document.querySelector(".edit-panel #pack-border-radius-bottom-right-result");
var pack_border_radius_bottom_left = document.querySelector(".edit-panel #pack-border-radius-bottom-left");
var pack_border_radius_bottom_left_result = document.querySelector(".edit-panel #pack-border-radius-bottom-left-result");
function generatepackborderradius() 
{
    root.style.setProperty('--pack-border-radius-top-left', `${pack_border_radius_top_left.value}px`)
    pack_border_radius_top_left_result.innerHTML = pack_border_radius_top_left.value;
    root.style.setProperty('--pack-border-radius-top-right', `${pack_border_radius_top_right.value}px`)
    pack_border_radius_top_right_result.innerHTML = pack_border_radius_top_right.value;
    root.style.setProperty('--pack-border-radius-bottom-right', `${pack_border_radius_bottom_right.value}px`)
    pack_border_radius_bottom_right_result.innerHTML = pack_border_radius_bottom_right.value;
    root.style.setProperty('--pack-border-radius-bottom-left', `${pack_border_radius_bottom_left.value}px`)
    pack_border_radius_bottom_left_result.innerHTML = pack_border_radius_bottom_left.value;
}
pack_border_radius_top_left.addEventListener("input", generatepackborderradius);
pack_border_radius_top_right.addEventListener("input", generatepackborderradius);
pack_border_radius_bottom_right.addEventListener("input", generatepackborderradius);
pack_border_radius_bottom_left.addEventListener("input", generatepackborderradius);


//***************************
// Pack-Button-Text-Color
//***************************
let pack_button_text_color_one = document.querySelector(".edit-panel #pack-button-text-color-one");
let pack_button_text_color_two = document.querySelector(".edit-panel #pack-button-text-color-two");
function generatepackcolor()
{
    root.style.setProperty('--pack-button-text-color-one', `${pack_button_text_color_one.value}`)
    root.style.setProperty('--pack-button-text-color-two', `${pack_button_text_color_two.value}`)
}
pack_button_text_color_one.addEventListener("input", generatepackcolor);
pack_button_text_color_two.addEventListener("input", generatepackcolor);


//***************************
// Pack-Button-Border-Radius
//***************************
var pack_button_border_radius_top_left = document.querySelector(".edit-panel #pack-button-border-radius-top-left");
var pack_button_border_radius_top_left_result = document.querySelector(".edit-panel #pack-button-border-radius-top-left-result");
var pack_button_border_radius_top_right = document.querySelector(".edit-panel #pack-button-border-radius-top-right");
var pack_button_border_radius_top_right_result = document.querySelector(".edit-panel #pack-button-border-radius-top-right-result");
var pack_button_border_radius_bottom_right = document.querySelector(".edit-panel #pack-button-border-radius-bottom-right");
var pack_button_border_radius_bottom_right_result = document.querySelector(".edit-panel #pack-button-border-radius-bottom-right-result");
var pack_button_border_radius_bottom_left = document.querySelector(".edit-panel #pack-button-border-radius-bottom-left");
var pack_button_border_radius_bottom_left_result = document.querySelector(".edit-panel #pack-button-border-radius-bottom-left-result");
function generatepackbuttonborderradius() 
{
    root.style.setProperty('--pack-button-border-radius-top-left', `${pack_button_border_radius_top_left.value}px`)
    pack_button_border_radius_top_left_result.innerHTML = pack_button_border_radius_top_left.value;
    if (pack_button_border_radius_top_left.value > 3)
    {
        root.style.setProperty('--pack-button-fill-border-radius-top-left', `${pack_button_border_radius_top_left.value - 2}px`)
    }
    if (pack_button_border_radius_top_left.value == 3)
    {
        root.style.setProperty('--pack-button-fill-border-radius-top-left', `1px`)
    }
    if (pack_button_border_radius_top_left.value == 2 || pack_button_border_radius_top_left.value == 1 || pack_button_border_radius_top_left.value == 0)
    {
        root.style.setProperty('--pack-button-fill-border-radius-top-left', `0px`)
    }

    root.style.setProperty('--pack-button-border-radius-top-right', `${pack_button_border_radius_top_right.value}px`)
    pack_button_border_radius_top_right_result.innerHTML = pack_button_border_radius_top_right.value;
    if (pack_button_border_radius_top_right.value > 3)
    {
        root.style.setProperty('--pack-button-fill-border-radius-top-right', `${pack_button_border_radius_top_right.value - 2}px`)
    }
    if (pack_button_border_radius_top_right.value == 3)
    {
        root.style.setProperty('--pack-button-fill-border-radius-top-right', `1px`)
    }
    if (pack_button_border_radius_top_right.value == 2 || pack_button_border_radius_top_right.value == 1 || pack_button_border_radius_top_right.value == 0)
    {
        root.style.setProperty('--pack-button-fill-border-radius-top-right', `0px`)
    }

    root.style.setProperty('--pack-button-border-radius-bottom-right', `${pack_button_border_radius_bottom_right.value}px`)
    pack_button_border_radius_bottom_right_result.innerHTML = pack_button_border_radius_bottom_right.value;
    if (pack_button_border_radius_bottom_right.value > 3)
    {
        root.style.setProperty('--pack-button-fill-border-radius-bottom-right', `${pack_button_border_radius_bottom_right.value - 2}px`)
    }
    if (pack_button_border_radius_bottom_right.value == 3)
    {
        root.style.setProperty('--pack-button-fill-border-radius-bottom-right', `1px`)
    }
    if (pack_button_border_radius_bottom_right.value == 2 || pack_button_border_radius_bottom_right.value == 1 || pack_button_border_radius_bottom_right.value == 0)
    {
        root.style.setProperty('--pack-button-fill-border-radius-bottom-right', `0px`)
    }

    root.style.setProperty('--pack-button-border-radius-bottom-left', `${pack_button_border_radius_bottom_left.value}px`)
    pack_button_border_radius_bottom_left_result.innerHTML = pack_button_border_radius_bottom_left.value;
    if (pack_button_border_radius_bottom_left.value > 3)
    {
        root.style.setProperty('--pack-button-fill-border-radius-bottom-left', `${pack_button_border_radius_bottom_left.value - 2}px`)
    }
    if (pack_button_border_radius_bottom_left.value == 3)
    {
        root.style.setProperty('--pack-button-fill-border-radius-bottom-left', `1px`)
    }
    if (pack_button_border_radius_bottom_left.value == 2 || pack_button_border_radius_bottom_left.value == 1 || pack_button_border_radius_bottom_left.value == 0)
    {
        root.style.setProperty('--pack-button-fill-border-radius-bottom-left', `0px`)
    }
}
pack_button_border_radius_top_left.addEventListener("input", generatepackbuttonborderradius);
pack_button_border_radius_top_right.addEventListener("input", generatepackbuttonborderradius);
pack_button_border_radius_bottom_right.addEventListener("input", generatepackbuttonborderradius);
pack_button_border_radius_bottom_left.addEventListener("input", generatepackbuttonborderradius);


//***************************
// Text-Colors
//***************************
let text_color_one = document.querySelector(".edit-panel #text-color-one");
let text_color_two = document.querySelector(".edit-panel #text-color-two");
function generatetextcolor()
{
    root.style.setProperty('--text-color-one', `${text_color_one.value}`)
    root.style.setProperty('--text-color-two', `${text_color_two.value}`)
}
text_color_one.addEventListener("input", generatetextcolor);
text_color_two.addEventListener("input", generatetextcolor);


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
// Pagination-Border-Radius
//***************************
var pagination_border_radius_top_left = document.querySelector(".edit-panel #pagination-border-radius-top-left");
var pagination_border_radius_top_left_result = document.querySelector(".edit-panel #pagination-border-radius-top-left-result");
var pagination_border_radius_top_right = document.querySelector(".edit-panel #pagination-border-radius-top-right");
var pagination_border_radius_top_right_result = document.querySelector(".edit-panel #pagination-border-radius-top-right-result");
var pagination_border_radius_bottom_right = document.querySelector(".edit-panel #pagination-border-radius-bottom-right");
var pagination_border_radius_bottom_right_result = document.querySelector(".edit-panel #pagination-border-radius-bottom-right-result");
var pagination_border_radius_bottom_left = document.querySelector(".edit-panel #pagination-border-radius-bottom-left");
var pagination_border_radius_bottom_left_result = document.querySelector(".edit-panel #pagination-border-radius-bottom-left-result");
function generatepaginationborderradius() 
{
    root.style.setProperty('--pagination-border-radius-top-left', `${pagination_border_radius_top_left.value}px`)
    pagination_border_radius_top_left_result.innerHTML = pagination_border_radius_top_left.value;
    if (pagination_border_radius_top_left.value > 3)
    {
        root.style.setProperty('--pagination-fill-border-radius-top-left', `${pagination_border_radius_top_left.value - 2}px`)
    }
    if (pagination_border_radius_top_left.value == 3)
    {
        root.style.setProperty('--pagination-fill-border-radius-top-left', `1px`)
    }
    if (pagination_border_radius_top_left.value == 2 || pagination_border_radius_top_left.value == 1 || pagination_border_radius_top_left.value == 0)
    {
        root.style.setProperty('--pagination-fill-border-radius-top-left', `0px`)
    }

    root.style.setProperty('--pagination-border-radius-top-right', `${pagination_border_radius_top_right.value}px`)
    pagination_border_radius_top_right_result.innerHTML = pagination_border_radius_top_right.value;
    if (pagination_border_radius_top_right.value > 3)
    {
        root.style.setProperty('--pagination-fill-border-radius-top-right', `${pagination_border_radius_top_right.value - 2}px`)
    }
    if (pagination_border_radius_top_right.value == 3)
    {
        root.style.setProperty('--pagination-fill-border-radius-top-right', `1px`)
    }
    if (pagination_border_radius_top_right.value == 2 || pagination_border_radius_top_right.value == 1 || pagination_border_radius_top_right.value == 0)
    {
        root.style.setProperty('--pagination-fill-border-radius-top-right', `0px`)
    }

    root.style.setProperty('--pagination-border-radius-bottom-right', `${pagination_border_radius_bottom_right.value}px`)
    pagination_border_radius_bottom_right_result.innerHTML = pagination_border_radius_bottom_right.value;
    if (pagination_border_radius_bottom_right.value > 3)
    {
        root.style.setProperty('--pagination-fill-border-radius-bottom-right', `${pagination_border_radius_bottom_right.value - 2}px`)
    }
    if (pagination_border_radius_bottom_right.value == 3)
    {
        root.style.setProperty('--pagination-fill-border-radius-bottom-right', `1px`)
    }
    if (pagination_border_radius_bottom_right.value == 2 || pagination_border_radius_bottom_right.value == 1 || pagination_border_radius_bottom_right.value == 0)
    {
        root.style.setProperty('--pagination-fill-border-radius-bottom-right', `0px`)
    }

    root.style.setProperty('--pagination-border-radius-bottom-left', `${pagination_border_radius_bottom_left.value}px`)
    pagination_border_radius_bottom_left_result.innerHTML = pagination_border_radius_bottom_left.value;
    if (pagination_border_radius_bottom_left.value > 3)
    {
        root.style.setProperty('--pagination-fill-border-radius-bottom-left', `${pagination_border_radius_bottom_left.value - 2}px`)
    }
    if (pagination_border_radius_bottom_left.value == 3)
    {
        root.style.setProperty('--pagination-fill-border-radius-bottom-left', `1px`)
    }
    if (pagination_border_radius_bottom_left.value == 2 || pagination_border_radius_bottom_left.value == 1 || pagination_border_radius_bottom_left.value == 0)
    {
        root.style.setProperty('--pagination-fill-border-radius-bottom-left', `0px`)
    }
}
pagination_border_radius_top_left.addEventListener("input", generatepaginationborderradius);
pagination_border_radius_top_right.addEventListener("input", generatepaginationborderradius);
pagination_border_radius_bottom_right.addEventListener("input", generatepaginationborderradius);
pagination_border_radius_bottom_left.addEventListener("input", generatepaginationborderradius);


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
var fontstyle = 1;

if(fontstyle == 1)
{
    function generatepackborderradius() 
    {
        if (pack_border_radius_top_left.value <= 50 || pack_border_radius_top_right.value <= 50)
        { root.style.setProperty('--pack-title-margin', `0px 15px 0px`) }
        
        if (pack_border_radius_top_left.value >= 51 && pack_border_radius_top_left.value <= 100 || pack_border_radius_top_right.value >= 51 && pack_border_radius_top_right.value <= 100)
        { root.style.setProperty('--pack-title-margin', `0px 29px 0px`) }
    }
    pack_border_radius_top_left.addEventListener("input", generatepackborderradius);
    pack_border_radius_top_right.addEventListener("input", generatepackborderradius);
}

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


    //================|| Pack ||================//
    //********|| Size ||********//
    root.style.setProperty('--pack-title-size', `22px`) 
    root.style.setProperty('--pack-p-size', `16px`)
    root.style.setProperty('--pack-button-size', `20px`)
    root.style.setProperty('--pack-type-coin-size', `32px`) 
    root.style.setProperty('--pack-coin-size', `31px`)
    root.style.setProperty('--pack-value-size', `44px`)
    //********|| Margin ||********//
    root.style.setProperty('--pack-p-margin', `0px, 0px`) 
    root.style.setProperty('--pack-button-margin', `0px, 0px`) 
    root.style.setProperty('--pack-type-coin-margin', `8px, 0px`) 
    root.style.setProperty('--pack-coin-margin', `3px, 0px`) 
    root.style.setProperty('--pack-value-margin', `-1px, 0px`) 
    //********|| Weight ||********//
    root.style.setProperty('--pack-weight', `normal`) 


    //================|| Pagination ||================//
    //********|| Size ||********//
    root.style.setProperty('--pagination-size', `20px`) 
    //********|| Margin ||********//
    root.style.setProperty('--pagination-margin', `0px, 0px`) 
    //********|| Weight ||********//
    root.style.setProperty('--pagination-weight', `normal`) 


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

    fontstyle = 1

    if(fontstyle == 1)
    {
        if (pack_border_radius_top_left.value <= 50 || pack_border_radius_top_right.value <= 50)
        { root.style.setProperty('--pack-title-margin', `0px 15px 0px`) }
        
        if (pack_border_radius_top_left.value >= 51 && pack_border_radius_top_left.value <= 100 || pack_border_radius_top_right.value >= 51 && pack_border_radius_top_right.value <= 100)
        { root.style.setProperty('--pack-title-margin', `0px 29px 0px`) }

        function generatepackborderradius() 
        {
            if (pack_border_radius_top_left.value <= 50 || pack_border_radius_top_right.value <= 50)
            { root.style.setProperty('--pack-title-margin', `0px 15px 0px`) }
            
            if (pack_border_radius_top_left.value >= 51 && pack_border_radius_top_left.value <= 100 || pack_border_radius_top_right.value >= 51 && pack_border_radius_top_right.value <= 100)
            { root.style.setProperty('--pack-title-margin', `0px 29px 0px`) }
        }
        pack_border_radius_top_left.addEventListener("input", generatepackborderradius);
        pack_border_radius_top_right.addEventListener("input", generatepackborderradius);
    }
}

function FontStyleTwo() 
{ 
    root.style.setProperty('--font', `'DynaPuff', cursive`) 

    //================|| Navbar ||================//
    //********|| Size ||********//
    root.style.setProperty('--navbar-item-size', `15px`) 
    root.style.setProperty('--navbar-drop-size', `14px`) 
    //********|| Margin ||********//
    root.style.setProperty('--navbar-item-margin', `3px, 1px`) 
    root.style.setProperty('--navbar-drop-margin', `0px, 1px`) 
    //********|| Weight ||********//
    root.style.setProperty('--navbar-weight', `normal`) 

    
    //================|| Pack ||================//
    //********|| Size ||********//
    root.style.setProperty('--pack-title-size', `20px`) 
    root.style.setProperty('--pack-p-size', `15px`)
    root.style.setProperty('--pack-button-size', `18px`)
    root.style.setProperty('--pack-type-coin-size', `27px`) 
    root.style.setProperty('--pack-coin-size', `27px`)
    root.style.setProperty('--pack-value-size', `40px`)
    //********|| Margin ||********//
    root.style.setProperty('--pack-p-margin', `0px, 0px`) 
    root.style.setProperty('--pack-button-margin', `0px, 0px`)
    root.style.setProperty('--pack-type-coin-margin', `8px, 0px`) 
    root.style.setProperty('--pack-coin-margin', `3px, -1px`) 
    root.style.setProperty('--pack-value-margin', `-1px, -1px`)  
    //********|| Weight ||********//
    root.style.setProperty('--pack-weight', `normal`) 


    //================|| Pagination ||================//
    //********|| Size ||********//
    root.style.setProperty('--pagination-size', `20px`) 
    //********|| Margin ||********//
    root.style.setProperty('--pagination-margin', `0px, 0px`) 
    //********|| Weight ||********//
    root.style.setProperty('--pagination-weight', `normal`) 

    
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

    fontstyle = 2

    if(fontstyle == 2)
    {
        if (pack_border_radius_top_left.value <= 75 || pack_border_radius_top_right.value <= 75)
        { root.style.setProperty('--pack-title-margin', `0px 10px 0px`) }

        if (pack_border_radius_top_left.value >= 76 && pack_border_radius_top_left.value <= 100 || pack_border_radius_top_right.value >= 76 && pack_border_radius_top_right.value <= 100)
        { root.style.setProperty('--pack-title-margin', `5px 10px 5px`) }
        
        function generatepackborderradius() 
        {
            if (pack_border_radius_top_left.value <= 75 || pack_border_radius_top_right.value <= 75)
            { root.style.setProperty('--pack-title-margin', `0px 10px 0px`) }

            if (pack_border_radius_top_left.value >= 76 && pack_border_radius_top_left.value <= 100 || pack_border_radius_top_right.value >= 76 && pack_border_radius_top_right.value <= 100)
            { root.style.setProperty('--pack-title-margin', `5px 10px 5px`) }
        }
        pack_border_radius_top_left.addEventListener("input", generatepackborderradius);
        pack_border_radius_top_right.addEventListener("input", generatepackborderradius);
    }
}

function FontStyleThree() 
{ 
    root.style.setProperty('--font', `'Alkalami', serif`) 


    //================|| Navbar ||================//
    //********|| Size ||********//
    root.style.setProperty('--navbar-item-size', `15px`) 
    root.style.setProperty('--navbar-drop-size', `14px`) 
    //********|| Margin ||********//
    root.style.setProperty('--navbar-item-margin', `1px, 5px`) 
    root.style.setProperty('--navbar-drop-margin', `1px, 5px`) 
    //********|| Weight ||********//
    root.style.setProperty('--navbar-weight', `normal`) 

    
    //================|| Pack ||================//
    //********|| Size ||********//
    root.style.setProperty('--pack-title-size', `20px`) 
    root.style.setProperty('--pack-p-size', `14px`)
    root.style.setProperty('--pack-button-size', `18px`)
    root.style.setProperty('--pack-type-coin-size', `30px`) 
    root.style.setProperty('--pack-coin-size', `29px`)
    root.style.setProperty('--pack-value-size', `45px`)
    //********|| Margin ||********//
    root.style.setProperty('--pack-p-margin', `0px, 5px`) 
    root.style.setProperty('--pack-button-margin', `0px, 5px`) 
    root.style.setProperty('--pack-type-coin-margin', `9px, 8px`) 
    root.style.setProperty('--pack-coin-margin', `3px, 8px`) 
    root.style.setProperty('--pack-value-margin', `-1px, 10px`) 
    //********|| Weight ||********//
    root.style.setProperty('--pack-weight', `normal`) 


    //================|| Pagination ||================//
    //********|| Size ||********//
    root.style.setProperty('--pagination-size', `21px`) 
    //********|| Margin ||********//
    root.style.setProperty('--pagination-margin', `0px, 6px`) 
    //********|| Weight ||********//
    root.style.setProperty('--pagination-weight', `normal`) 

    
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

    fontstyle = 3

    if(fontstyle == 3)
    {
        if (pack_border_radius_top_left.value <= 50 || pack_border_radius_top_right.value <= 50)
        { root.style.setProperty('--pack-title-margin', `3px 15px -8px`) }

        if (pack_border_radius_top_left.value >= 51 && pack_border_radius_top_left.value <= 75 || pack_border_radius_top_right.value >= 51 && pack_border_radius_top_right.value <= 75)
        { root.style.setProperty('--pack-title-margin', `5px 15px -6px`) }
        
        if (pack_border_radius_top_left.value >= 76 && pack_border_radius_top_left.value <= 100 || pack_border_radius_top_right.value >= 76 && pack_border_radius_top_right.value <= 100)
        { root.style.setProperty('--pack-title-margin', `17px 15px 6px`) }

        function generatepackborderradius() 
        {
            if (pack_border_radius_top_left.value <= 50 || pack_border_radius_top_right.value <= 50)
            { root.style.setProperty('--pack-title-margin', `3px 15px -8px`) }

            if (pack_border_radius_top_left.value >= 51 && pack_border_radius_top_left.value <= 75 || pack_border_radius_top_right.value >= 51 && pack_border_radius_top_right.value <= 75)
            { root.style.setProperty('--pack-title-margin', `5px 15px -6px`) }
            
            if (pack_border_radius_top_left.value >= 76 && pack_border_radius_top_left.value <= 100 || pack_border_radius_top_right.value >= 76 && pack_border_radius_top_right.value <= 100)
            { root.style.setProperty('--pack-title-margin', `17px 15px 6px`) }
        }
        pack_border_radius_top_left.addEventListener("input", generatepackborderradius);
        pack_border_radius_top_right.addEventListener("input", generatepackborderradius);
    }
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

    
    //================|| Pack ||================//
    //********|| Size ||********//
    root.style.setProperty('--pack-title-size', `20px`) 
    root.style.setProperty('--pack-p-size', `14px`)
    root.style.setProperty('--pack-button-size', `18px`)
    root.style.setProperty('--pack-type-coin-size', `32px`) 
    root.style.setProperty('--pack-coin-size', `32px`)
    root.style.setProperty('--pack-value-size', `44px`)
    //********|| Margin ||********// 
    root.style.setProperty('--pack-p-margin', `0px, 0px`) 
    root.style.setProperty('--pack-button-margin', `0px, 0px`) 
    root.style.setProperty('--pack-type-coin-margin', `8px, 0px`) 
    root.style.setProperty('--pack-coin-margin', `3px, 0px`) 
    root.style.setProperty('--pack-value-margin', `-1px, 0px`) 
    //********|| Weight ||********//
    root.style.setProperty('--pack-weight', `normal`) 


    //================|| Pagination ||================//
    //********|| Size ||********//
    root.style.setProperty('--pagination-size', `20px`) 
    //********|| Margin ||********//
    root.style.setProperty('--pagination-margin', `0px, 0px`) 
    //********|| Weight ||********//
    root.style.setProperty('--pagination-weight', `normal`) 

    
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

    fontstyle = 4

    if(fontstyle == 4)
    {
        if (pack_border_radius_top_left.value <= 75 || pack_border_radius_top_right.value <= 75)
        { root.style.setProperty('--pack-title-margin', `1px 15px 0px`) }
        
        if (pack_border_radius_top_left.value >= 76 && pack_border_radius_top_left.value <= 100 || pack_border_radius_top_right.value >= 76 && pack_border_radius_top_right.value <= 100)
        { root.style.setProperty('--pack-title-margin', `9px 15px 8px`) }

        function generatepackborderradius() 
        {
            if (pack_border_radius_top_left.value <= 75 || pack_border_radius_top_right.value <= 75)
            { root.style.setProperty('--pack-title-margin', `1px 15px 0px`) }
            
            if (pack_border_radius_top_left.value >= 76 && pack_border_radius_top_left.value <= 100 || pack_border_radius_top_right.value >= 76 && pack_border_radius_top_right.value <= 100)
            { root.style.setProperty('--pack-title-margin', `9px 15px 8px`) }
        }
        pack_border_radius_top_left.addEventListener("input", generatepackborderradius);
        pack_border_radius_top_right.addEventListener("input", generatepackborderradius);
    }
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

    
    //================|| Pack ||================//
    //********|| Size ||********//
    root.style.setProperty('--pack-title-size', `23px`) 
    root.style.setProperty('--pack-p-size', `16px`)
    root.style.setProperty('--pack-button-size', `20px`)
    root.style.setProperty('--pack-type-coin-size', `32px`) 
    root.style.setProperty('--pack-coin-size', `34px`)
    root.style.setProperty('--pack-value-size', `44px`)
    //********|| Margin ||********//
    root.style.setProperty('--pack-p-margin', `0px, 0px`) 
    root.style.setProperty('--pack-button-margin', `0px, 0px`) 
    root.style.setProperty('--pack-type-coin-margin', `7px, 2px`) 
    root.style.setProperty('--pack-coin-margin', `2px, 1px`) 
    root.style.setProperty('--pack-value-margin', `-1px, 0px`) 
    //********|| Weight ||********//
    root.style.setProperty('--pack-weight', `normal`) 


    //================|| Pagination ||================//
    //********|| Size ||********//
    root.style.setProperty('--pagination-size', `22px`) 
    //********|| Margin ||********//
    root.style.setProperty('--pagination-margin', `0px, 0px`) 
    //********|| Weight ||********//
    root.style.setProperty('--pagination-weight', `normal`) 

    
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

    fontstyle = 5

    if(fontstyle == 5)
    {
        if (pack_border_radius_top_left.value <= 39 || pack_border_radius_top_right.value <= 39)
        { root.style.setProperty('--pack-title-margin', `0px 5px 0px`) }
        
        if (pack_border_radius_top_left.value >= 40 && pack_border_radius_top_left.value <= 50 || pack_border_radius_top_right.value >= 40 && pack_border_radius_top_right.value <= 50)
        { root.style.setProperty('--pack-title-margin', `5px 5px 5px`) }

        if (pack_border_radius_top_left.value >= 51 && pack_border_radius_top_left.value <= 100 || pack_border_radius_top_right.value >= 51 && pack_border_radius_top_right.value <= 100)
        { root.style.setProperty('--pack-title-margin', `0px 15px 0px`) }

        function generatepackborderradius() 
        {
            if (pack_border_radius_top_left.value <= 39 || pack_border_radius_top_right.value <= 39)
            { root.style.setProperty('--pack-title-margin', `0px 5px 0px`) }
            
            if (pack_border_radius_top_left.value >= 40 && pack_border_radius_top_left.value <= 50 || pack_border_radius_top_right.value >= 40 && pack_border_radius_top_right.value <= 50)
            { root.style.setProperty('--pack-title-margin', `5px 5px 5px`) }

            if (pack_border_radius_top_left.value >= 51 && pack_border_radius_top_left.value <= 100 || pack_border_radius_top_right.value >= 51 && pack_border_radius_top_right.value <= 100)
            { root.style.setProperty('--pack-title-margin', `0px 15px 0px`) }
        }
        pack_border_radius_top_left.addEventListener("input", generatepackborderradius);
        pack_border_radius_top_right.addEventListener("input", generatepackborderradius);
    }
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

    
    //================|| Pack ||================//
    //********|| Size ||********//
    root.style.setProperty('--pack-title-size', `20px`) 
    root.style.setProperty('--pack-p-size', `15px`)
    root.style.setProperty('--pack-button-size', `18px`)
    root.style.setProperty('--pack-type-coin-size', `30px`) 
    root.style.setProperty('--pack-coin-size', `30px`)
    root.style.setProperty('--pack-value-size', `44px`)
    //********|| Margin ||********//
    root.style.setProperty('--pack-p-margin', `0px, 0px`) 
    root.style.setProperty('--pack-button-margin', `0px, 0px`) 
    root.style.setProperty('--pack-type-coin-margin', `7px, 0px`) 
    root.style.setProperty('--pack-coin-margin', `2px, -2px`) 
    root.style.setProperty('--pack-value-margin', `-1px, -2px`) 
    //********|| Weight ||********//
    root.style.setProperty('--pack-weight', `normal`) 


    //================|| Pagination ||================//
    //********|| Size ||********//
    root.style.setProperty('--pagination-size', `20px`) 
    //********|| Margin ||********//
    root.style.setProperty('--pagination-margin', `0px, 0px`) 
    //********|| Weight ||********//
    root.style.setProperty('--pagination-weight', `normal`) 

    
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

    fontstyle = 6

    if(fontstyle == 6)
    {
        if (pack_border_radius_top_left.value <= 50 || pack_border_radius_top_right.value <= 50)
        { root.style.setProperty('--pack-title-margin', `0px 5px 0px`) }
        
        if (pack_border_radius_top_left.value >= 51 && pack_border_radius_top_left.value <= 100 || pack_border_radius_top_right.value >= 51 && pack_border_radius_top_right.value <= 100)
        { root.style.setProperty('--pack-title-margin', `0px 27px 0px`) }
        
        function generatepackborderradius() 
        {
            if (pack_border_radius_top_left.value <= 50 || pack_border_radius_top_right.value <= 50)
            { root.style.setProperty('--pack-title-margin', `0px 5px 0px`) }
            
            if (pack_border_radius_top_left.value >= 51 && pack_border_radius_top_left.value <= 100 || pack_border_radius_top_right.value >= 51 && pack_border_radius_top_right.value <= 100)
            { root.style.setProperty('--pack-title-margin', `0px 27px 0px`) }
        }
        pack_border_radius_top_left.addEventListener("input", generatepackborderradius);
        pack_border_radius_top_right.addEventListener("input", generatepackborderradius);
    }
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

    
    //================|| Pack ||================//
    //********|| Size ||********//
    root.style.setProperty('--pack-title-size', `21px`) 
    root.style.setProperty('--pack-p-size', `16px`)
    root.style.setProperty('--pack-button-size', `20px`)
    root.style.setProperty('--pack-type-coin-size', `30px`) 
    root.style.setProperty('--pack-coin-size', `29px`)
    root.style.setProperty('--pack-value-size', `44px`)
    //********|| Margin ||********//
    root.style.setProperty('--pack-p-margin', `0px, 4px`) 
    root.style.setProperty('--pack-button-margin', `0px, 4px`) 
    root.style.setProperty('--pack-type-coin-margin', `7px, 5px`) 
    root.style.setProperty('--pack-coin-margin', `3px, 5px`) 
    root.style.setProperty('--pack-value-margin', `-1px, 7px`) 
    //********|| Weight ||********//
    root.style.setProperty('--pack-weight', `700`) 


    //================|| Pagination ||================//
    //********|| Size ||********//
    root.style.setProperty('--pagination-size', `20px`) 
    //********|| Margin ||********//
    root.style.setProperty('--pagination-margin', `0px, 3px`) 
    //********|| Weight ||********//
    root.style.setProperty('--pagination-weight', `700`) 

    
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

    fontstyle = 7

    if(fontstyle == 7)
    {
        if (pack_border_radius_top_left.value <= 75 || pack_border_radius_top_right.value <= 75)
        { root.style.setProperty('--pack-title-margin', `2px 5px -6px`) }
        
        if (pack_border_radius_top_left.value >= 76 && pack_border_radius_top_left.value <= 100 || pack_border_radius_top_right.value >= 76 && pack_border_radius_top_right.value <= 100)
        { root.style.setProperty('--pack-title-margin', `10px 27px 2px`) }
        
        function generatepackborderradius() 
        {
            if (pack_border_radius_top_left.value <= 75 || pack_border_radius_top_right.value <= 75)
            { root.style.setProperty('--pack-title-margin', `2px 5px -6px`) }
            
            if (pack_border_radius_top_left.value >= 76 && pack_border_radius_top_left.value <= 100 || pack_border_radius_top_right.value >= 76 && pack_border_radius_top_right.value <= 100)
            { root.style.setProperty('--pack-title-margin', `10px 27px 2px`) }
        }
        pack_border_radius_top_left.addEventListener("input", generatepackborderradius);
        pack_border_radius_top_right.addEventListener("input", generatepackborderradius);
    }
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

    
    //================|| Pack ||================//
    //********|| Size ||********//
    root.style.setProperty('--pack-title-size', `19px`) 
    root.style.setProperty('--pack-p-size', `14px`)
    root.style.setProperty('--pack-button-size', `18px`)
    root.style.setProperty('--pack-type-coin-size', `29px`) 
    root.style.setProperty('--pack-coin-size', `32px`)
    root.style.setProperty('--pack-value-size', `44px`)
    //********|| Margin ||********//
    root.style.setProperty('--pack-p-margin', `0px, 0px`) 
    root.style.setProperty('--pack-button-margin', `0px, 0px`) 
    root.style.setProperty('--pack-type-coin-margin', `8px, 0px`) 
    root.style.setProperty('--pack-coin-margin', `3px, 0px`) 
    root.style.setProperty('--pack-value-margin', `-1px, 0px`) 
    //********|| Weight ||********//
    root.style.setProperty('--pack-weight', `700`) 


    //================|| Pagination ||================//
    //********|| Size ||********//
    root.style.setProperty('--pagination-size', `20px`) 
    //********|| Margin ||********//
    root.style.setProperty('--pagination-margin', `0px, 0px`) 
    //********|| Weight ||********//
    root.style.setProperty('--pagination-weight', `700`) 

    
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

    fontstyle = 8

    if(fontstyle == 8)
    {
        if (pack_border_radius_top_left.value <= 75 || pack_border_radius_top_right.value <= 75)
        { root.style.setProperty('--pack-title-margin', `1px 5px 0px`) }
        
        if (pack_border_radius_top_left.value >= 76 && pack_border_radius_top_left.value <= 100 || pack_border_radius_top_right.value >= 76 && pack_border_radius_top_right.value <= 100)
        { root.style.setProperty('--pack-title-margin', `8px 25px 7px`) }
        
        function generatepackborderradius() 
        {
            if (pack_border_radius_top_left.value <= 75 || pack_border_radius_top_right.value <= 75)
            { root.style.setProperty('--pack-title-margin', `1px 5px 0px`) }
            
            if (pack_border_radius_top_left.value >= 76 && pack_border_radius_top_left.value <= 100 || pack_border_radius_top_right.value >= 76 && pack_border_radius_top_right.value <= 100)
            { root.style.setProperty('--pack-title-margin', `8px 25px 7px`) }
        }
        pack_border_radius_top_left.addEventListener("input", generatepackborderradius);
        pack_border_radius_top_right.addEventListener("input", generatepackborderradius);
    }
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

    
    //================|| Pack ||================//
    //********|| Size ||********//
    root.style.setProperty('--pack-title-size', `20px`) 
    root.style.setProperty('--pack-p-size', `14px`)
    root.style.setProperty('--pack-button-size', `18px`)
    root.style.setProperty('--pack-type-coin-size', `30px`) 
    root.style.setProperty('--pack-coin-size', `29px`)
    root.style.setProperty('--pack-value-size', `44px`)
    //********|| Margin ||********//
    root.style.setProperty('--pack-p-margin', `0px, 0px`) 
    root.style.setProperty('--pack-button-margin', `0px, 0px`) 
    root.style.setProperty('--pack-type-coin-margin', `7px, -1px`) 
    root.style.setProperty('--pack-coin-margin', `2px, -1px`) 
    root.style.setProperty('--pack-value-margin', `-1px, 0px`) 
    //********|| Weight ||********//
    root.style.setProperty('--pack-weight', `700`) 


    //================|| Pagination ||================//
    //********|| Size ||********//
    root.style.setProperty('--pagination-size', `20px`) 
    //********|| Margin ||********//
    root.style.setProperty('--pagination-margin', `0px, 0px`) 
    //********|| Weight ||********//
    root.style.setProperty('--pagination-weight', `700`)

    
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

    fontstyle = 9

    if(fontstyle == 9)
    {
        if (pack_border_radius_top_left.value <= 75 || pack_border_radius_top_right.value <= 75)
        { root.style.setProperty('--pack-title-margin', `1px 5px -1px`) }
        
        if (pack_border_radius_top_left.value >= 76 && pack_border_radius_top_left.value <= 100 || pack_border_radius_top_right.value >= 76 && pack_border_radius_top_right.value <= 100)
        { root.style.setProperty('--pack-title-margin', `8px 25px 6px`) }
        
        function generatepackborderradius() 
        {
            if (pack_border_radius_top_left.value <= 75 || pack_border_radius_top_right.value <= 75)
            { root.style.setProperty('--pack-title-margin', `1px 5px -1px`) }
            
            if (pack_border_radius_top_left.value >= 76 && pack_border_radius_top_left.value <= 100 || pack_border_radius_top_right.value >= 76 && pack_border_radius_top_right.value <= 100)
            { root.style.setProperty('--pack-title-margin', `8px 25px 6px`) }
        }
        pack_border_radius_top_left.addEventListener("input", generatepackborderradius);
        pack_border_radius_top_right.addEventListener("input", generatepackborderradius);
    }
}