//==================== Reference table ====================//
//:: Settings
//:: Background-Color
//:: Opacity
//:: Profile-Picture-Color
//:: Text-Color
//:: Hover-Color
//:: Button-Border-Radius
//:: Button-Color
//:: Background
//:: Fonts
//==================== *************** ====================//

//***************************
// Settings
//***************************
var root = document.querySelector(':root');
var rootStyles = getComputedStyle(root);


//***************************
// Background-Color
//***************************
let social_linking_background_color = document.querySelector(".edit-panel #social-linking-background-color");
function generatebackgroundcolor()
{
    root.style.setProperty('--social-linking-background-color', `${social_linking_background_color.value}`)
}
social_linking_background_color.addEventListener("input", generatebackgroundcolor);


//***************************
// Opacity
//***************************
var social_linking_background_opacity = document.querySelector(".edit-panel #social-linking-background-opacity");
var social_linking_background_opacity_result = document.querySelector(".edit-panel #social-linking-background-opacity-result");
function generateopacitybackground() 
{
    root.style.setProperty('--opacity', `${social_linking_background_opacity.value}%`)
    social_linking_background_opacity_result.innerHTML = social_linking_background_opacity.value;
}
social_linking_background_opacity.addEventListener("input", generateopacitybackground);


//***************************
// Profile-Picture-Color
//***************************
let social_linking_profile_picture_color_one = document.querySelector(".edit-panel #social-linking-profile-picture-color-one");
let social_linking_profile_picture_color_two = document.querySelector(".edit-panel #social-linking-profile-picture-color-two");
let social_linking_profile_picture_color_three = document.querySelector(".edit-panel #social-linking-profile-picture-color-three");
function generateprofilepicturecolor()
{
    root.style.setProperty('--social-linking-profile-picture-color-one', `${social_linking_profile_picture_color_one.value}`)
    root.style.setProperty('--social-linking-profile-picture-color-two', `${social_linking_profile_picture_color_two.value}`)
    root.style.setProperty('--social-linking-profile-picture-color-three', `${social_linking_profile_picture_color_three.value}`)
}
social_linking_profile_picture_color_one.addEventListener("input", generateprofilepicturecolor);
social_linking_profile_picture_color_two.addEventListener("input", generateprofilepicturecolor);
social_linking_profile_picture_color_three.addEventListener("input", generateprofilepicturecolor);


//***************************
// Text-Color
//***************************
let social_linking_text_color_one = document.querySelector(".edit-panel #social-linking-text-color-one");
let social_linking_text_color_two = document.querySelector(".edit-panel #social-linking-text-color-two");
function generatetextcolor()
{
    root.style.setProperty('--social-linking-text-color-one', `${social_linking_text_color_one.value}`)
    root.style.setProperty('--social-linking-text-color-two', `${social_linking_text_color_two.value}`)
}
social_linking_text_color_one.addEventListener("input", generatetextcolor);
social_linking_text_color_two.addEventListener("input", generatetextcolor);


//***************************
// Hover-Color
//***************************
let social_linking_hover_color = document.querySelector(".edit-panel #social-linking-hover-color");
function generatehovercolor()
{
    root.style.setProperty('--social-linking-hover-color', `${social_linking_hover_color.value}`)
}
social_linking_hover_color.addEventListener("input", generatehovercolor);


//***************************
// Button-Border-Radius
//***************************
var social_linking_button_border_radius_top_left = document.querySelector(".edit-panel #social-linking-button-border-radius-top-left");
var social_linking_button_border_radius_top_left_result = document.querySelector(".edit-panel #social-linking-button-border-radius-top-left-result");
var social_linking_button_border_radius_top_right = document.querySelector(".edit-panel #social-linking-button-border-radius-top-right");
var social_linking_button_border_radius_top_right_result = document.querySelector(".edit-panel #social-linking-button-border-radius-top-right-result");
var social_linking_button_border_radius_bottom_right = document.querySelector(".edit-panel #social-linking-button-border-radius-bottom-right");
var social_linking_button_border_radius_bottom_right_result = document.querySelector(".edit-panel #social-linking-button-border-radius-bottom-right-result");
var social_linking_button_border_radius_bottom_left = document.querySelector(".edit-panel #social-linking-button-border-radius-bottom-left");
var social_linking_button_border_radius_bottom_left_result = document.querySelector(".edit-panel #social-linking-button-border-radius-bottom-left-result");
function generatebuttonborderradius() 
{
    root.style.setProperty('--social-linking-button-border-radius-top-left', `${social_linking_button_border_radius_top_left.value}px`)
    social_linking_button_border_radius_top_left_result.innerHTML = social_linking_button_border_radius_top_left.value;
    if (social_linking_button_border_radius_top_left.value > 3)
    {
        root.style.setProperty('--social-linking-button-fill-border-radius-top-left', `${social_linking_button_border_radius_top_left.value - 2}px`)
    }
    if (social_linking_button_border_radius_top_left.value == 3)
    {
        root.style.setProperty('--social-linking-button-fill-border-radius-top-left', `1px`)
    }
    if (social_linking_button_border_radius_top_left.value == 2 || social_linking_button_border_radius_top_left.value == 1 || social_linking_button_border_radius_top_left.value == 0)
    {
        root.style.setProperty('--social-linking-button-fill-border-radius-top-left', `0px`)
    }

    root.style.setProperty('--social-linking-button-border-radius-top-right', `${social_linking_button_border_radius_top_right.value}px`)
    social_linking_button_border_radius_top_right_result.innerHTML = social_linking_button_border_radius_top_right.value;
    if (social_linking_button_border_radius_top_right.value > 3)
    {
        root.style.setProperty('--social-linking-button-fill-border-radius-top-right', `${social_linking_button_border_radius_top_right.value - 2}px`)
    }
    if (social_linking_button_border_radius_top_right.value == 3)
    {
        root.style.setProperty('--social-linking-button-fill-border-radius-top-right', `1px`)
    }
    if (social_linking_button_border_radius_top_right.value == 2 || social_linking_button_border_radius_top_right.value == 1 || social_linking_button_border_radius_top_right.value == 0)
    {
        root.style.setProperty('--social-linking-button-fill-border-radius-top-right', `0px`)
    }

    root.style.setProperty('--social-linking-button-border-radius-bottom-right', `${social_linking_button_border_radius_bottom_right.value}px`)
    social_linking_button_border_radius_bottom_right_result.innerHTML = social_linking_button_border_radius_bottom_right.value;
    if (social_linking_button_border_radius_bottom_right.value > 3)
    {
        root.style.setProperty('--social-linking-button-fill-border-radius-bottom-right', `${social_linking_button_border_radius_bottom_right.value - 2}px`)
    }
    if (social_linking_button_border_radius_bottom_right.value == 3)
    {
        root.style.setProperty('--social-linking-button-fill-border-radius-bottom-right', `1px`)
    }
    if (social_linking_button_border_radius_bottom_right.value == 2 || social_linking_button_border_radius_bottom_right.value == 1 || social_linking_button_border_radius_bottom_right.value == 0)
    {
        root.style.setProperty('--social-linking-button-fill-border-radius-bottom-right', `0px`)
    }

    root.style.setProperty('--social-linking-button-border-radius-bottom-left', `${social_linking_button_border_radius_bottom_left.value}px`)
    social_linking_button_border_radius_bottom_left_result.innerHTML = social_linking_button_border_radius_bottom_left.value;
    if (social_linking_button_border_radius_bottom_left.value > 3)
    {
        root.style.setProperty('--social-linking-button-fill-border-radius-bottom-left', `${social_linking_button_border_radius_bottom_left.value - 2}px`)
    }
    if (social_linking_button_border_radius_bottom_left.value == 3)
    {
        root.style.setProperty('--social-linking-button-fill-border-radius-bottom-left', `1px`)
    }
    if (social_linking_button_border_radius_bottom_left.value == 2 || social_linking_button_border_radius_bottom_left.value == 1 || social_linking_button_border_radius_bottom_left.value == 0)
    {
        root.style.setProperty('--social-linking-button-fill-border-radius-bottom-left', `0px`)
    }
}

social_linking_button_border_radius_top_left.addEventListener("input", generatebuttonborderradius);
social_linking_button_border_radius_top_right.addEventListener("input", generatebuttonborderradius);
social_linking_button_border_radius_bottom_right.addEventListener("input", generatebuttonborderradius);
social_linking_button_border_radius_bottom_left.addEventListener("input", generatebuttonborderradius);


//***************************
// Button-Color
//***************************
let social_linking_button_color_one = document.querySelector(".edit-panel #social-linking-button-color-one");
let social_linking_button_color_two = document.querySelector(".edit-panel #social-linking-button-color-two");
let social_linking_button_color_three = document.querySelector(".edit-panel #social-linking-button-color-three");
function generatebuttoncolor()
{
    root.style.setProperty('--social-linking-button-color', `linear-gradient(to right, ${social_linking_button_color_one.value} 20%, ${social_linking_button_color_two.value} 100%)`)
    root.style.setProperty('--social-linking-button-shadow-color', `${social_linking_button_color_three.value}`)
}
social_linking_button_color_one.addEventListener("input", generatebuttoncolor);
social_linking_button_color_two.addEventListener("input", generatebuttoncolor);
social_linking_button_color_three.addEventListener("input", generatebuttoncolor);


//***************************
// Background
//***************************
const background = document.querySelector(".edit-panel #background");
const add_background = document.querySelector(".edit-panel #add-background");
const remove_background = document.querySelector(".edit-panel #remove-background");
const background_panel = document.querySelector(".edit-panel .panel .content .image-container .container #background-photo img");
const background_image = document.querySelector(".social-linking .background img");
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
        background_panel.src = result;
        background_image.src = result;
    }
        remove_background.addEventListener("click", function(){
        background_panel.src = "background.jpg";
        background_image.src = "background.jpg";
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
 

    //================|| Social-Linking ||================//
    //********|| Size ||********//
    root.style.setProperty('--social-linking-title-size', `25px`) 
    root.style.setProperty('--social-linking-resume-size', `18px`) 
    root.style.setProperty('--social-linking-text-size', `18px`) 
    //********|| Margin ||********//
    root.style.setProperty('--social-linking-margin', `0px, 0px`)
    //********|| Weight ||********//
    root.style.setProperty('--social-linking-weight', `normal`) 
}

function FontStyleTwo() 
{ 
    root.style.setProperty('--font', `'DynaPuff', cursive`) 

    
    //================|| Social-Linking ||================//
    //********|| Size ||********//
    root.style.setProperty('--social-linking-title-size', `25px`) 
    root.style.setProperty('--social-linking-resume-size', `18px`) 
    root.style.setProperty('--social-linking-text-size', `18px`) 
    //********|| Margin ||********//
    root.style.setProperty('--social-linking-margin', `0px, 0px`)
    //********|| Weight ||********//
    root.style.setProperty('--social-linking-weight', `normal`) 
}

function FontStyleThree() 
{ 
    root.style.setProperty('--font', `'Alkalami', serif`) 

    
    //================|| Social-Linking ||================//
    //********|| Size ||********//
    root.style.setProperty('--social-linking-title-size', `28px`) 
    root.style.setProperty('--social-linking-resume-size', `20px`) 
    root.style.setProperty('--social-linking-text-size', `20px`) 
    //********|| Margin ||********//
    root.style.setProperty('--social-linking-margin', `0px, 6px`)
    //********|| Weight ||********//
    root.style.setProperty('--social-linking-weight', `normal`) 
}

function FontStyleFour() 
{ 
    root.style.setProperty('--font', `'Righteous', cursive`) 

    
    //================|| Social-Linking ||================//
    //********|| Size ||********//
    root.style.setProperty('--social-linking-title-size', `25px`) 
    root.style.setProperty('--social-linking-resume-size', `18px`) 
    root.style.setProperty('--social-linking-text-size', `18px`) 
    //********|| Margin ||********//
    root.style.setProperty('--social-linking-margin', `0px, 0px`)
    //********|| Weight ||********//
    root.style.setProperty('--social-linking-weight', `normal`) 
}

function FontStyleFive() 
{ 
    root.style.setProperty('--font', `'Creepster', cursive`)

    
    //================|| Social-Linking ||================//
    //********|| Size ||********//
    root.style.setProperty('--social-linking-title-size', `27px`) 
    root.style.setProperty('--social-linking-resume-size', `19px`) 
    root.style.setProperty('--social-linking-text-size', `19px`) 
    //********|| Margin ||********//
    root.style.setProperty('--social-linking-margin', `0px, 0px`)
    //********|| Weight ||********//
    root.style.setProperty('--social-linking-weight', `normal`) 
}

function FontStyleSex() 
{ 
    root.style.setProperty('--font', `'Anton', sans-serif`) 

    
    //================|| Social-Linking ||================//
    //********|| Size ||********//
    root.style.setProperty('--social-linking-title-size', `26px`) 
    root.style.setProperty('--social-linking-resume-size', `18px`) 
    root.style.setProperty('--social-linking-text-size', `18px`) 
    //********|| Margin ||********//
    root.style.setProperty('--social-linking-margin', `0px, 0px`)
    //********|| Weight ||********//
    root.style.setProperty('--social-linking-weight', `normal`) 
}

function FontStyleSeven() 
{ 
    root.style.setProperty('--font', `'Special Elite', cursive`) 

    
    //================|| Social-Linking ||================//
    //********|| Size ||********//
    root.style.setProperty('--social-linking-title-size', `25px`) 
    root.style.setProperty('--social-linking-resume-size', `18px`) 
    root.style.setProperty('--social-linking-text-size', `18px`) 
    //********|| Margin ||********//
    root.style.setProperty('--social-linking-margin', `0px, 3px`)
    //********|| Weight ||********//
    root.style.setProperty('--social-linking-weight', `700`) 
}

function FontStyleEight() 
{ 
    root.style.setProperty('--font', `'Fredoka', sans-serif`)  

    
    //================|| Social-Linking ||================//
    //********|| Size ||********//
    root.style.setProperty('--social-linking-title-size', `27px`) 
    root.style.setProperty('--social-linking-resume-size', `19px`) 
    root.style.setProperty('--social-linking-text-size', `19px`) 
    //********|| Margin ||********//
    root.style.setProperty('--social-linking-margin', `0px, 0px`)
    //********|| Weight ||********//
    root.style.setProperty('--social-linking-weight', `700`) 
}

function FontStyleNine() 
{ 
    root.style.setProperty('--font', `'Roboto', sans-serif`) 
 

    //================|| Social-Linking ||================//
    //********|| Size ||********//
    root.style.setProperty('--social-linking-title-size', `26px`) 
    root.style.setProperty('--social-linking-resume-size', `18px`) 
    root.style.setProperty('--social-linking-text-size', `18px`) 
    //********|| Margin ||********//
    root.style.setProperty('--social-linking-margin', `0px, 0px`)
    //********|| Weight ||********//
    root.style.setProperty('--social-linking-weight', `700`) 
}