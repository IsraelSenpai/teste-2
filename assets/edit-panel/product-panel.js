//==================== Reference table ====================//
//:: Settings
//:: Gradient
//:: Main-Colors
//:: Image-Border-Radius
//:: Gallery-Border-Radius
//:: Information-Container-Border-Radius
//:: Information-Content-Border-Radius
//:: Text-Colors
//:: Hover-Color
//:: Card-Image-Border-Radius
//:: Card-Text-Color
//:: Card-Border-Radius
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
// Image-Border-Radius
//***************************
var product_panel_image_container_border_radius_top_left = document.querySelector(".edit-panel #product-panel-image-container-border-radius-top-left");
var product_panel_image_container_border_radius_top_left_result = document.querySelector(".edit-panel #product-panel-image-container-border-radius-top-left-result");
var product_panel_image_container_border_radius_top_right = document.querySelector(".edit-panel #product-panel-image-container-border-radius-top-right");
var product_panel_image_container_border_radius_top_right_result = document.querySelector(".edit-panel #product-panel-image-container-border-radius-top-right-result");
var product_panel_image_container_border_radius_bottom_right = document.querySelector(".edit-panel #product-panel-image-container-border-radius-bottom-right");
var product_panel_image_container_border_radius_bottom_right_result = document.querySelector(".edit-panel #product-panel-image-container-border-radius-bottom-right-result");
var product_panel_image_container_border_radius_bottom_left = document.querySelector(".edit-panel #product-panel-image-container-border-radius-bottom-left");
var product_panel_image_container_border_radius_bottom_left_result = document.querySelector(".edit-panel #product-panel-image-container-border-radius-bottom-left-result");
function generateimagecontainerborderradius() 
{
    root.style.setProperty('--product-panel-image-container-border-radius-top-left', `${product_panel_image_container_border_radius_top_left.value}px`)
    product_panel_image_container_border_radius_top_left_result.innerHTML = product_panel_image_container_border_radius_top_left.value;
    if (product_panel_image_container_border_radius_top_left.value > 3)
    {
        root.style.setProperty('--product-panel-image-border-radius-top-left', `${product_panel_image_container_border_radius_top_left.value - 2}px`)
    }
    if (product_panel_image_container_border_radius_top_left.value == 3)
    {
        root.style.setProperty('--product-panel-image-border-radius-top-left', `1px`)
    }
    if (product_panel_image_container_border_radius_top_left.value == 2 || product_panel_image_container_border_radius_top_left.value == 1 || product_panel_image_container_border_radius_top_left.value == 0)
    {
        root.style.setProperty('--product-panel-image-border-radius-top-left', `0px`)
    }

    root.style.setProperty('--product-panel-image-container-border-radius-top-right', `${product_panel_image_container_border_radius_top_right.value}px`)
    product_panel_image_container_border_radius_top_right_result.innerHTML = product_panel_image_container_border_radius_top_right.value;
    if (product_panel_image_container_border_radius_top_right.value > 3)
    {
        root.style.setProperty('--product-panel-image-border-radius-top-right', `${product_panel_image_container_border_radius_top_right.value - 2}px`)
    }
    if (product_panel_image_container_border_radius_top_right.value == 3)
    {
        root.style.setProperty('--product-panel-image-border-radius-top-right', `1px`)
    }
    if (product_panel_image_container_border_radius_top_right.value == 2 || product_panel_image_container_border_radius_top_right.value == 1 || product_panel_image_container_border_radius_top_right.value == 0)
    {
        root.style.setProperty('--product-panel-image-border-radius-top-right', `0px`)
    }

    root.style.setProperty('--product-panel-image-container-border-radius-bottom-right', `${product_panel_image_container_border_radius_bottom_right.value}px`)
    product_panel_image_container_border_radius_bottom_right_result.innerHTML = product_panel_image_container_border_radius_bottom_right.value;
    if (product_panel_image_container_border_radius_bottom_right.value > 3)
    {
        root.style.setProperty('--product-panel-image-border-radius-bottom-right', `${product_panel_image_container_border_radius_bottom_right.value - 2}px`)
    }
    if (product_panel_image_container_border_radius_bottom_right.value == 3)
    {
        root.style.setProperty('--product-panel-image-border-radius-bottom-right', `1px`)
    }
    if (product_panel_image_container_border_radius_bottom_right.value == 2 || product_panel_image_container_border_radius_bottom_right.value == 1 || product_panel_image_container_border_radius_bottom_right.value == 0)
    {
        root.style.setProperty('--product-panel-image-border-radius-bottom-right', `0px`)
    }

    root.style.setProperty('--product-panel-image-container-border-radius-bottom-left', `${product_panel_image_container_border_radius_bottom_left.value}px`)
    product_panel_image_container_border_radius_bottom_left_result.innerHTML = product_panel_image_container_border_radius_bottom_left.value;
    if (product_panel_image_container_border_radius_bottom_left.value > 3)
    {
        root.style.setProperty('--product-panel-image-border-radius-bottom-left', `${product_panel_image_container_border_radius_bottom_left.value - 2}px`)
    }
    if (product_panel_image_container_border_radius_bottom_left.value == 3)
    {
        root.style.setProperty('--product-panel-image-border-radius-bottom-left', `1px`)
    }
    if (product_panel_image_container_border_radius_bottom_left.value == 2 || product_panel_image_container_border_radius_bottom_left.value == 1 || product_panel_image_container_border_radius_bottom_left.value == 0)
    {
        root.style.setProperty('--product-panel-image-border-radius-bottom-left', `0px`)
    }
}
product_panel_image_container_border_radius_top_left.addEventListener("input", generateimagecontainerborderradius);
product_panel_image_container_border_radius_top_right.addEventListener("input", generateimagecontainerborderradius);
product_panel_image_container_border_radius_bottom_right.addEventListener("input", generateimagecontainerborderradius);
product_panel_image_container_border_radius_bottom_left.addEventListener("input", generateimagecontainerborderradius);


//***************************
// Gallery-Border-Radius
//***************************
var product_panel_gallery_container_border_radius_top_left = document.querySelector(".edit-panel #product-panel-gallery-container-border-radius-top-left");
var product_panel_gallery_container_border_radius_top_left_result = document.querySelector(".edit-panel #product-panel-gallery-container-border-radius-top-left-result");
var product_panel_gallery_container_border_radius_top_right = document.querySelector(".edit-panel #product-panel-gallery-container-border-radius-top-right");
var product_panel_gallery_container_border_radius_top_right_result = document.querySelector(".edit-panel #product-panel-gallery-container-border-radius-top-right-result");
var product_panel_gallery_container_border_radius_bottom_right = document.querySelector(".edit-panel #product-panel-gallery-container-border-radius-bottom-right");
var product_panel_gallery_container_border_radius_bottom_right_result = document.querySelector(".edit-panel #product-panel-gallery-container-border-radius-bottom-right-result");
var product_panel_gallery_container_border_radius_bottom_left = document.querySelector(".edit-panel #product-panel-gallery-container-border-radius-bottom-left");
var product_panel_gallery_container_border_radius_bottom_left_result = document.querySelector(".edit-panel #product-panel-gallery-container-border-radius-bottom-left-result");
function generategalleryborderradius() 
{
    root.style.setProperty('--product-panel-gallery-container-border-radius-top-left', `${product_panel_gallery_container_border_radius_top_left.value}px`)
    product_panel_gallery_container_border_radius_top_left_result.innerHTML = product_panel_gallery_container_border_radius_top_left.value;
    if (product_panel_gallery_container_border_radius_top_left.value > 3)
    {
        root.style.setProperty('--product-panel-gallery-image-border-radius-top-left', `${product_panel_gallery_container_border_radius_top_left.value - 2}px`)
    }
    if (product_panel_gallery_container_border_radius_top_left.value == 3)
    {
        root.style.setProperty('--product-panel-gallery-image-border-radius-top-left', `1px`)
    }
    if (product_panel_gallery_container_border_radius_top_left.value == 2 || product_panel_gallery_container_border_radius_top_left.value == 1 || product_panel_gallery_container_border_radius_top_left.value == 0)
    {
        root.style.setProperty('--product-panel-gallery-image-border-radius-top-left', `0px`)
    }

    root.style.setProperty('--product-panel-gallery-container-border-radius-top-right', `${product_panel_gallery_container_border_radius_top_right.value}px`)
    product_panel_gallery_container_border_radius_top_right_result.innerHTML = product_panel_gallery_container_border_radius_top_right.value;
    if (product_panel_gallery_container_border_radius_top_right.value > 3)
    {
        root.style.setProperty('--product-panel-gallery-image-border-radius-top-right', `${product_panel_gallery_container_border_radius_top_right.value - 2}px`)
    }
    if (product_panel_gallery_container_border_radius_top_right.value == 3)
    {
        root.style.setProperty('--product-panel-gallery-image-border-radius-top-right', `1px`)
    }
    if (product_panel_gallery_container_border_radius_top_right.value == 2 || product_panel_gallery_container_border_radius_top_right.value == 1 || product_panel_gallery_container_border_radius_top_right.value == 0)
    {
        root.style.setProperty('--product-panel-gallery-image-border-radius-top-right', `0px`)
    }

    root.style.setProperty('--product-panel-gallery-container-border-radius-bottom-right', `${product_panel_gallery_container_border_radius_bottom_right.value}px`)
    product_panel_gallery_container_border_radius_bottom_right_result.innerHTML = product_panel_gallery_container_border_radius_bottom_right.value;
    if (product_panel_gallery_container_border_radius_bottom_right.value > 3)
    {
        root.style.setProperty('--product-panel-gallery-image-border-radius-bottom-right', `${product_panel_gallery_container_border_radius_bottom_right.value - 2}px`)
    }
    if (product_panel_gallery_container_border_radius_bottom_right.value == 3)
    {
        root.style.setProperty('--product-panel-gallery-image-border-radius-bottom-right', `1px`)
    }
    if (product_panel_gallery_container_border_radius_bottom_right.value == 2 || product_panel_gallery_container_border_radius_bottom_right.value == 1 || product_panel_gallery_container_border_radius_bottom_right.value == 0)
    {
        root.style.setProperty('--product-panel-gallery-image-border-radius-bottom-right', `0px`)
    }

    root.style.setProperty('--product-panel-gallery-container-border-radius-bottom-left', `${product_panel_gallery_container_border_radius_bottom_left.value}px`)
    product_panel_gallery_container_border_radius_bottom_left_result.innerHTML = product_panel_gallery_container_border_radius_bottom_left.value;
    if (product_panel_gallery_container_border_radius_bottom_left.value > 3)
    {
        root.style.setProperty('--product-panel-gallery-image-border-radius-bottom-left', `${product_panel_gallery_container_border_radius_bottom_left.value - 2}px`)
    }
    if (product_panel_gallery_container_border_radius_bottom_left.value == 3)
    {
        root.style.setProperty('--product-panel-gallery-image-border-radius-bottom-left', `1px`)
    }
    if (product_panel_gallery_container_border_radius_bottom_left.value == 2 || product_panel_gallery_container_border_radius_bottom_left.value == 1 || product_panel_gallery_container_border_radius_bottom_left.value == 0)
    {
        root.style.setProperty('--product-panel-gallery-image-border-radius-bottom-left', `0px`)
    }
}
product_panel_gallery_container_border_radius_top_left.addEventListener("input", generategalleryborderradius);
product_panel_gallery_container_border_radius_top_right.addEventListener("input", generategalleryborderradius);
product_panel_gallery_container_border_radius_bottom_right.addEventListener("input", generategalleryborderradius);
product_panel_gallery_container_border_radius_bottom_left.addEventListener("input", generategalleryborderradius);


//***************************
// Information-Container-Border-Radius
//***************************
var product_panel_informations_border_radius_top_left = document.querySelector(".edit-panel #product-panel-informations-container-border-radius-top-left");
var product_panel_informations_border_radius_top_left_result = document.querySelector(".edit-panel #product-panel-informations-container-border-radius-top-left-result");
var product_panel_informations_border_radius_top_right = document.querySelector(".edit-panel #product-panel-informations-container-border-radius-top-right");
var product_panel_informations_border_radius_top_right_result = document.querySelector(".edit-panel #product-panel-informations-container-border-radius-top-right-result");
var product_panel_informations_border_radius_bottom_right = document.querySelector(".edit-panel #product-panel-informations-container-border-radius-bottom-right");
var product_panel_informations_border_radius_bottom_right_result = document.querySelector(".edit-panel #product-panel-informations-container-border-radius-bottom-right-result");
var product_panel_informations_border_radius_bottom_left = document.querySelector(".edit-panel #product-panel-informations-container-border-radius-bottom-left");
var product_panel_informations_border_radius_bottom_left_result = document.querySelector(".edit-panel #product-panel-informations-container-border-radius-bottom-left-result");
function generateinformationsborderradius() 
{
    root.style.setProperty('--product-panel-informations-container-border-radius-top-left', `${product_panel_informations_border_radius_top_left.value}px`)
    product_panel_informations_border_radius_top_left_result.innerHTML = product_panel_informations_border_radius_top_left.value;
    if (product_panel_informations_border_radius_top_left.value > 3)
    {
        root.style.setProperty('--product-panel-informations-border-radius-top-left', `${product_panel_informations_border_radius_top_left.value - 2}px`)
    }
    if (product_panel_informations_border_radius_top_left.value == 3)
    {
        root.style.setProperty('--product-panel-informations-border-radius-top-left', `1px`)
    }
    if (product_panel_informations_border_radius_top_left.value == 2 || product_panel_informations_border_radius_top_left.value == 1 || product_panel_informations_border_radius_top_left.value == 0)
    {
        root.style.setProperty('--product-panel-informations-border-radius-top-left', `0px`)
    }

    root.style.setProperty('--product-panel-informations-container-border-radius-top-right', `${product_panel_informations_border_radius_top_right.value}px`)
    product_panel_informations_border_radius_top_right_result.innerHTML = product_panel_informations_border_radius_top_right.value;
    if (product_panel_informations_border_radius_top_right.value > 3)
    {
        root.style.setProperty('--product-panel-informations-border-radius-top-right', `${product_panel_informations_border_radius_top_right.value - 2}px`)
    }
    if (product_panel_informations_border_radius_top_right.value == 3)
    {
        root.style.setProperty('--product-panel-informations-border-radius-top-right', `1px`)
    }
    if (product_panel_informations_border_radius_top_right.value == 2 || product_panel_informations_border_radius_top_right.value == 1 || product_panel_informations_border_radius_top_right.value == 0)
    {
        root.style.setProperty('--product-panel-informations-border-radius-top-right', `0px`)
    }

    root.style.setProperty('--product-panel-informations-container-border-radius-bottom-right', `${product_panel_informations_border_radius_bottom_right.value}px`)
    product_panel_informations_border_radius_bottom_right_result.innerHTML = product_panel_informations_border_radius_bottom_right.value;
    if (product_panel_informations_border_radius_bottom_right.value > 3)
    {
        root.style.setProperty('--product-panel-informations-border-radius-bottom-right', `${product_panel_informations_border_radius_bottom_right.value - 2}px`)
    }
    if (product_panel_informations_border_radius_bottom_right.value == 3)
    {
        root.style.setProperty('--product-panel-informations-border-radius-bottom-right', `1px`)
    }
    if (product_panel_informations_border_radius_bottom_right.value == 2 || product_panel_informations_border_radius_bottom_right.value == 1 || product_panel_informations_border_radius_bottom_right.value == 0)
    {
        root.style.setProperty('--product-panel-informations-border-radius-bottom-right', `0px`)
    }

    root.style.setProperty('--product-panel-informations-container-border-radius-bottom-left', `${product_panel_informations_border_radius_bottom_left.value}px`)
    product_panel_informations_border_radius_bottom_left_result.innerHTML = product_panel_informations_border_radius_bottom_left.value;
    if (product_panel_informations_border_radius_bottom_left.value > 3)
    {
        root.style.setProperty('--product-panel-informations-border-radius-bottom-left', `${product_panel_informations_border_radius_bottom_left.value - 2}px`)
    }
    if (product_panel_informations_border_radius_bottom_left.value == 3)
    {
        root.style.setProperty('--product-panel-informations-border-radius-bottom-left', `1px`)
    }
    if (product_panel_informations_border_radius_bottom_left.value == 2 || product_panel_informations_border_radius_bottom_left.value == 1 || product_panel_informations_border_radius_bottom_left.value == 0)
    {
        root.style.setProperty('--product-panel-informations-border-radius-bottom-left', `0px`)
    }

    if(product_panel_informations_border_radius_top_left.value < 60 || product_panel_informations_border_radius_top_right.value < 60 || product_panel_informations_border_radius_bottom_right.value < 60 || product_panel_informations_border_radius_bottom_left.value < 60)
    {
        root.style.setProperty('--product-panel-padding', `0px`)
    }
    if(product_panel_informations_border_radius_top_left.value > 60 && product_panel_informations_border_radius_top_left.value < 80 || product_panel_informations_border_radius_top_right.value > 60 && product_panel_informations_border_radius_top_right.value < 80 || product_panel_informations_border_radius_bottom_right.value > 60 && product_panel_informations_border_radius_bottom_right.value < 80 || product_panel_informations_border_radius_bottom_left.value > 60 && product_panel_informations_border_radius_bottom_left.value < 80)
    {
        root.style.setProperty('--product-panel-padding', `15px`)
    }
    if(product_panel_informations_border_radius_top_left.value >= 80 && product_panel_informations_border_radius_top_left.value <= 100 || product_panel_informations_border_radius_top_right.value >= 80 && product_panel_informations_border_radius_top_right.value <= 100 || product_panel_informations_border_radius_bottom_right.value >= 80 && product_panel_informations_border_radius_bottom_right.value <= 100 || product_panel_informations_border_radius_bottom_left.value >= 80 && product_panel_informations_border_radius_bottom_left.value <= 100)
    {
        root.style.setProperty('--product-panel-padding', `22px`)
    }
}
product_panel_informations_border_radius_top_left.addEventListener("input", generateinformationsborderradius);
product_panel_informations_border_radius_top_right.addEventListener("input", generateinformationsborderradius);
product_panel_informations_border_radius_bottom_right.addEventListener("input", generateinformationsborderradius);
product_panel_informations_border_radius_bottom_left.addEventListener("input", generateinformationsborderradius);


//***************************
// Information-Content-Border-Radius
//***************************
var product_panel_informations_content_border_radius_top_left = document.querySelector(".edit-panel #product-panel-informations-content-border-radius-top-left");
var product_panel_informations_content_border_radius_top_left_result = document.querySelector(".edit-panel #product-panel-informations-content-border-radius-top-left-result");
var product_panel_informations_content_border_radius_top_right = document.querySelector(".edit-panel #product-panel-informations-content-border-radius-top-right");
var product_panel_informations_content_border_radius_top_right_result = document.querySelector(".edit-panel #product-panel-informations-content-border-radius-top-right-result");
var product_panel_informations_content_border_radius_bottom_right = document.querySelector(".edit-panel #product-panel-informations-content-border-radius-bottom-right");
var product_panel_informations_content_border_radius_bottom_right_result = document.querySelector(".edit-panel #product-panel-informations-content-border-radius-bottom-right-result");
var product_panel_informations_content_border_radius_bottom_left = document.querySelector(".edit-panel #product-panel-informations-content-border-radius-bottom-left");
var product_panel_informations_content_border_radius_bottom_left_result = document.querySelector(".edit-panel #product-panel-informations-content-border-radius-bottom-left-result");
function generateinformationscontentborderradius() 
{
    root.style.setProperty('--product-panel-informations-content-border-radius-top-left', `${product_panel_informations_content_border_radius_top_left.value}px`)
    product_panel_informations_content_border_radius_top_left_result.innerHTML = product_panel_informations_content_border_radius_top_left.value;
    if (product_panel_informations_content_border_radius_top_left.value > 3)
    {
        root.style.setProperty('--product-panel-content-border-radius-top-left', `${product_panel_informations_content_border_radius_top_left.value - 2}px`)
    }
    if (product_panel_informations_content_border_radius_top_left.value == 3)
    {
        root.style.setProperty('--product-panel-content-border-radius-top-left', `1px`)
    }
    if (product_panel_informations_content_border_radius_top_left.value == 2 || product_panel_informations_content_border_radius_top_left.value == 1 || product_panel_informations_content_border_radius_top_left.value == 0)
    {
        root.style.setProperty('--product-panel-content-border-radius-top-left', `0px`)
    }

    root.style.setProperty('--product-panel-informations-content-border-radius-top-right', `${product_panel_informations_content_border_radius_top_right.value}px`)
    product_panel_informations_content_border_radius_top_right_result.innerHTML = product_panel_informations_content_border_radius_top_right.value;
    if (product_panel_informations_content_border_radius_top_right.value > 3)
    {
        root.style.setProperty('--product-panel-content-border-radius-top-right', `${product_panel_informations_content_border_radius_top_right.value - 2}px`)
    }
    if (product_panel_informations_content_border_radius_top_right.value == 3)
    {
        root.style.setProperty('--product-panel-content-border-radius-top-right', `1px`)
    }
    if (product_panel_informations_content_border_radius_top_right.value == 2 || product_panel_informations_content_border_radius_top_right.value == 1 || product_panel_informations_content_border_radius_top_right.value == 0)
    {
        root.style.setProperty('--product-panel-content-border-radius-top-right', `0px`)
    }

    root.style.setProperty('--product-panel-informations-content-border-radius-bottom-right', `${product_panel_informations_content_border_radius_bottom_right.value}px`)
    product_panel_informations_content_border_radius_bottom_right_result.innerHTML = product_panel_informations_content_border_radius_bottom_right.value;
    if (product_panel_informations_content_border_radius_bottom_right.value > 3)
    {
        root.style.setProperty('--product-panel-content-border-radius-bottom-right', `${product_panel_informations_content_border_radius_bottom_right.value - 2}px`)
    }
    if (product_panel_informations_content_border_radius_bottom_right.value == 3)
    {
        root.style.setProperty('--product-panel-content-border-radius-bottom-right', `1px`)
    }
    if (product_panel_informations_content_border_radius_bottom_right.value == 2 || product_panel_informations_content_border_radius_bottom_right.value == 1 || product_panel_informations_content_border_radius_bottom_right.value == 0)
    {
        root.style.setProperty('--product-panel-content-border-radius-bottom-right', `0px`)
    }

    root.style.setProperty('--product-panel-informations-content-border-radius-bottom-left', `${product_panel_informations_content_border_radius_bottom_left.value}px`)
    product_panel_informations_content_border_radius_bottom_left_result.innerHTML = product_panel_informations_content_border_radius_bottom_left.value;
    if (product_panel_informations_content_border_radius_bottom_left.value > 3)
    {
        root.style.setProperty('--product-panel-content-border-radius-bottom-left', `${product_panel_informations_content_border_radius_bottom_left.value - 2}px`)
    }
    if (product_panel_informations_content_border_radius_bottom_left.value == 3)
    {
        root.style.setProperty('--product-panel-content-border-radius-bottom-left', `1px`)
    }
    if (product_panel_informations_content_border_radius_bottom_left.value == 2 || product_panel_informations_content_border_radius_bottom_left.value == 1 || product_panel_informations_content_border_radius_bottom_left.value == 0)
    {
        root.style.setProperty('--product-panel-content-border-radius-bottom-left', `0px`)
    }
}
product_panel_informations_content_border_radius_top_left.addEventListener("input", generateinformationscontentborderradius);
product_panel_informations_content_border_radius_top_right.addEventListener("input", generateinformationscontentborderradius);
product_panel_informations_content_border_radius_bottom_right.addEventListener("input", generateinformationscontentborderradius);
product_panel_informations_content_border_radius_bottom_left.addEventListener("input", generateinformationscontentborderradius);


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
// Card-Image-Border-Radius
//***************************
var card_image_border_top_left = document.querySelector(".edit-panel #card-image-border-top-left");
var card_image_border_top_left_result = document.querySelector(".edit-panel #card-image-border-top-left-result");
var card_image_border_top_right = document.querySelector(".edit-panel #card-image-border-top-right");
var card_image_border_top_right_result = document.querySelector(".edit-panel #card-image-border-top-right-result");
var card_image_border_bottom_right = document.querySelector(".edit-panel #card-image-border-bottom-right");
var card_image_border_bottom_right_result = document.querySelector(".edit-panel #card-image-border-bottom-right-result");
var card_image_border_bottom_left = document.querySelector(".edit-panel #card-image-border-bottom-left");
var card_image_border_bottom_left_result = document.querySelector(".edit-panel #card-image-border-bottom-left-result");
function generatecardimageborderradius() 
{
    root.style.setProperty('--card-image-border-radius-top-left', `${card_image_border_top_left.value}px`)
    card_image_border_top_left_result.innerHTML = card_image_border_top_left.value;
    root.style.setProperty('--card-image-border-radius-top-right', `${card_image_border_top_right.value}px`)
    card_image_border_top_right_result.innerHTML = card_image_border_top_right.value;
    root.style.setProperty('--card-image-border-radius-bottom-right', `${card_image_border_bottom_right.value}px`)
    card_image_border_bottom_right_result.innerHTML = card_image_border_bottom_right.value;
    root.style.setProperty('--card-image-border-radius-bottom-left', `${card_image_border_bottom_left.value}px`)
    card_image_border_bottom_left_result.innerHTML = card_image_border_bottom_left.value;
}
card_image_border_top_left.addEventListener("input", generatecardimageborderradius);
card_image_border_top_right.addEventListener("input", generatecardimageborderradius);
card_image_border_bottom_right.addEventListener("input", generatecardimageborderradius);
card_image_border_bottom_left.addEventListener("input", generatecardimageborderradius);


//***************************
// Card-Text-Color
//***************************
let card_text_color_one = document.querySelector(".edit-panel #card-text-color-one");
let card_text_color_two = document.querySelector(".edit-panel #card-text-color-two");
function generatecardtextcolor()
{
    root.style.setProperty('--card-text-color-one', `${card_text_color_one.value}`)
    root.style.setProperty('--card-text-color-two', `${card_text_color_two.value}`)
}
card_text_color_one.addEventListener("input", generatecardtextcolor);
card_text_color_two.addEventListener("input", generatecardtextcolor);


//***************************
// Card-Border-Radius
//***************************
var card_border_left = document.querySelector(".edit-panel #card-border-left");
var card_border_left_result = document.querySelector(".edit-panel #card-border-left-result");
var card_border_right = document.querySelector(".edit-panel #card-border-right");
var card_border_right_result = document.querySelector(".edit-panel #card-border-right-result");

function generatecardborderradius() 
{
    root.style.setProperty('--card-border-radius-left', `${card_border_left.value}px`)
    card_border_left_result.innerHTML = card_border_left.value;
    root.style.setProperty('--card-border-radius-right', `${card_border_right.value}px`)
    card_border_right_result.innerHTML = card_border_right.value;
}
card_border_left.addEventListener("input", generatecardborderradius);
card_border_right.addEventListener("input", generatecardborderradius);


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
    function generatecardborderradius() 
    {
        if (card_border_left.value <= 50 || card_border_right.value <= 50)
        { root.style.setProperty('--card-p-margin', `-5px 7px 10px`) }
    
        if (card_border_left.value >= 51 && card_border_left.value <= 100 || card_border_right.value >= 51 && card_border_right.value <= 100)
        { root.style.setProperty('--card-p-margin', `-5px 25px 10px`) }
    }
    card_border_left.addEventListener("input", generatecardborderradius);
    card_border_right.addEventListener("input", generatecardborderradius);
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


    //================|| Product-Panel ||================//
    //********|| Size ||********//
    root.style.setProperty('--product-panel-title-size', `22px`) 
    root.style.setProperty('--product-panel-type-coin-size', `39px`) 
    root.style.setProperty('--product-panel-coin-size', `37px`) 
    root.style.setProperty('--product-panel-value-size', `50px`) 
    root.style.setProperty('--product-panel-text-size', `25px`) 
    root.style.setProperty('--product-panel-sizes-size', `22px`) 
    root.style.setProperty('--product-panel-color-size', `17px`) 
    //********|| Margin ||********//
    root.style.setProperty('--product-panel-type-coin-margin', `3px, 0px`)
    root.style.setProperty('--product-panel-coin-margin', `0px, -2px`)
    root.style.setProperty('--product-panel-value-margin', `0px, -3px`)
    root.style.setProperty('--product-panel-text-margin', `0px, 0px`)
    root.style.setProperty('--product-panel-sizes-margin', `0px, 0px`)
    root.style.setProperty('--product-panel-color-margin', `0px, 0px`) 
    //********|| Weight ||********//
    root.style.setProperty('--product-panel-weight', `normal`) 


    //================|| Information ||================//
    //********|| Size ||********//
    root.style.setProperty('--information-title-size', `30px`) 
    root.style.setProperty('--information-resume-size', `20px`) 
    root.style.setProperty('--information-h1-size', `18px`) 
    //********|| Margin ||********//
    root.style.setProperty('--information-margin', `0px, 0px`)
    //********|| Weight ||********//
    root.style.setProperty('--information-weight', `normal`) 


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


    //================|| Card ||================//
    //********|| Size ||********//
    root.style.setProperty('--card-type-coin-size', `26px`) 
    root.style.setProperty('--card-coin-size', `26px`) 
    root.style.setProperty('--card-value-size', `34px`) 
    root.style.setProperty('--card-p-size', `16px`) 
    //********|| Margin ||********//
    root.style.setProperty('--card-type-coin-margin', `0px 0px 0px 0px`) 
    root.style.setProperty('--card-coin-margin', `0px 0px 0px -3px`) 
    root.style.setProperty('--card-value-margin', `-3px 0px 0px -1px`) 
    root.style.setProperty('--card-p-margin', `-5px 5px 10px`) 
    //********|| Weight ||********//
    root.style.setProperty('--card-weight', `normal`) 


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
        if (card_border_left.value <= 50 || card_border_right.value <= 50)
        { root.style.setProperty('--card-p-margin', `-5px 7px 10px`) }
    
        if (card_border_left.value >= 51 && card_border_left.value <= 100 || card_border_right.value >= 51 && card_border_right.value <= 100)
        { root.style.setProperty('--card-p-margin', `-5px 25px 10px`) }

        function generatecardborderradius() 
        {
            if (card_border_left.value <= 50 || card_border_right.value <= 50)
            { root.style.setProperty('--card-p-margin', `-5px 7px 10px`) }
        
            if (card_border_left.value >= 51 && card_border_left.value <= 100 || card_border_right.value >= 51 && card_border_right.value <= 100)
            { root.style.setProperty('--card-p-margin', `-5px 25px 10px`) }
        }
        card_border_left.addEventListener("input", generatecardborderradius);
        card_border_right.addEventListener("input", generatecardborderradius);
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


    //================|| Product-Panel ||================//
    //********|| Size ||********//
    root.style.setProperty('--product-panel-title-size', `19px`) 
    root.style.setProperty('--product-panel-type-coin-size', `35px`) 
    root.style.setProperty('--product-panel-coin-size', `35px`) 
    root.style.setProperty('--product-panel-value-size', `50px`) 
    root.style.setProperty('--product-panel-text-size', `22px`) 
    root.style.setProperty('--product-panel-sizes-size', `20px`) 
    root.style.setProperty('--product-panel-color-size', `15px`) 
    //********|| Margin ||********//
    root.style.setProperty('--product-panel-type-coin-margin', `3px, 0px`)
    root.style.setProperty('--product-panel-coin-margin', `0px, -2px`)
    root.style.setProperty('--product-panel-value-margin', `0px, -3px`)
    root.style.setProperty('--product-panel-text-margin', `0px, 0px`)
    root.style.setProperty('--product-panel-sizes-margin', `0px, 0px`)
    root.style.setProperty('--product-panel-color-margin', `0px, 0px`) 
    //********|| Weight ||********//
    root.style.setProperty('--product-panel-weight', `normal`) 

    
    //================|| Information ||================//
    //********|| Size ||********//
    root.style.setProperty('--information-title-size', `28px`) 
    root.style.setProperty('--information-resume-size', `18px`) 
    root.style.setProperty('--information-h1-size', `16px`) 
    //********|| Margin ||********//
    root.style.setProperty('--information-margin', `0px, 0px`)
    //********|| Weight ||********//
    root.style.setProperty('--information-weight', `normal`) 

    
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


    //================|| Card ||================//
    //********|| Size ||********//
    root.style.setProperty('--card-type-coin-size', `22px`) 
    root.style.setProperty('--card-coin-size', `24px`) 
    root.style.setProperty('--card-value-size', `32px`) 
    root.style.setProperty('--card-p-size', `13px`) 
    //********|| Margin ||********//
    root.style.setProperty('--card-type-coin-margin', `0px 0px 0px 0px`) 
    root.style.setProperty('--card-coin-margin', `-1px 0px 0px -3px`) 
    root.style.setProperty('--card-value-margin', `-3px 0px 0px -1px`) 
    root.style.setProperty('--card-p-margin', `-5px 5px 10px`) 
    //********|| Weight ||********//
    root.style.setProperty('--card-weight', `normal`) 

    
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
        if (card_border_left.value < 50 || card_border_right.value < 50)
        { root.style.setProperty('--card-p-margin', `-5px 12px 10px`) }
    
        if (card_border_left.value > 50 && card_border_left.value <= 75 || card_border_right.value > 50 && card_border_right.value <= 75)
        { root.style.setProperty('--card-p-margin', `-5px 25px 10px`) }
    
        if (card_border_left.value >= 76 || card_border_right.value >= 76)
        { root.style.setProperty('--card-p-margin', `-5px 31px 10px`) }

        function generatecardborderradius() 
        {
            if (card_border_left.value < 50 || card_border_right.value < 50)
            { root.style.setProperty('--card-p-margin', `-5px 12px 10px`) }
        
            if (card_border_left.value > 50 && card_border_left.value <= 75 || card_border_right.value > 50 && card_border_right.value <= 75)
            { root.style.setProperty('--card-p-margin', `-5px 25px 10px`) }
        
            if (card_border_left.value >= 76 || card_border_right.value >= 76)
            { root.style.setProperty('--card-p-margin', `-5px 31px 10px`) }
        }
        card_border_left.addEventListener("input", generatecardborderradius);
        card_border_right.addEventListener("input", generatecardborderradius);
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


    //================|| Product-Panel ||================//
    //********|| Size ||********//
    root.style.setProperty('--product-panel-title-size', `20px`) 
    root.style.setProperty('--product-panel-type-coin-size', `35px`) 
    root.style.setProperty('--product-panel-coin-size', `34px`) 
    root.style.setProperty('--product-panel-value-size', `50px`) 
    root.style.setProperty('--product-panel-text-size', `20px`) 
    root.style.setProperty('--product-panel-sizes-size', `19px`) 
    root.style.setProperty('--product-panel-color-size', `15px`) 
    //********|| Margin ||********//
    root.style.setProperty('--product-panel-type-coin-margin', `4px, -4px`)
    root.style.setProperty('--product-panel-coin-margin', `0px, -4px`)
    root.style.setProperty('--product-panel-value-margin', `0px, -3px`)
    root.style.setProperty('--product-panel-text-margin', `0px, 5px`)
    root.style.setProperty('--product-panel-sizes-margin', `0px, 5px`)
    root.style.setProperty('--product-panel-color-margin', `0px, 5px`) 
    //********|| Weight ||********//
    root.style.setProperty('--product-panel-weight', `normal`) 

    
    //================|| Information ||================//
    //********|| Size ||********//
    root.style.setProperty('--information-title-size', `30px`) 
    root.style.setProperty('--information-resume-size', `20px`) 
    root.style.setProperty('--information-h1-size', `16px`) 
    //********|| Margin ||********//
    root.style.setProperty('--information-margin', `0px, 3px`)
    //********|| Weight ||********//
    root.style.setProperty('--information-weight', `normal`) 

    
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


    //================|| Card ||================//
    //********|| Size ||********//
    root.style.setProperty('--card-type-coin-size', `23px`) 
    root.style.setProperty('--card-coin-size', `23px`) 
    root.style.setProperty('--card-value-size', `34px`) 
    root.style.setProperty('--card-p-size', `12px`)
    //********|| Margin ||********//
    root.style.setProperty('--card-type-coin-margin', `0px 0px 0px 0px`) 
    root.style.setProperty('--card-coin-margin', `0px 0px 0px -4px`) 
    root.style.setProperty('--card-value-margin', `-0px 0px -4px -1px`) 
    root.style.setProperty('--card-p-margin', `-10px 5px 10px`)
    //********|| Weight ||********//
    root.style.setProperty('--card-weight', `500`) 

    
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
        if (card_border_left.value < 50 || card_border_right.value < 50)
        { root.style.setProperty('--card-p-margin', `-10px 5px 7px`) }
    
        if (card_border_left.value > 50 && card_border_left.value <= 75 || card_border_right.value > 50 && card_border_right.value <= 75)
        { root.style.setProperty('--card-p-margin', `-10px 25px 7px`) }
    
        if (card_border_left.value >= 76 || card_border_right.value >= 76)
        { root.style.setProperty('--card-p-margin', `-10px 30px 7px`) }

        function generatecardborderradius() 
        {
            if (card_border_left.value < 50 || card_border_right.value < 50)
            { root.style.setProperty('--card-p-margin', `-10px 5px 7px`) }
        
            if (card_border_left.value > 50 && card_border_left.value <= 75 || card_border_right.value > 50 && card_border_right.value <= 75)
            { root.style.setProperty('--card-p-margin', `-10px 25px 7px`) }
        
            if (card_border_left.value >= 76 || card_border_right.value >= 76)
            { root.style.setProperty('--card-p-margin', `-10px 30px 7px`) }
        }
        card_border_left.addEventListener("input", generatecardborderradius);
        card_border_right.addEventListener("input", generatecardborderradius);
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


    //================|| Product-Panel ||================//
    //********|| Size ||********//
    root.style.setProperty('--product-panel-title-size', `20px`) 
    root.style.setProperty('--product-panel-type-coin-size', `33px`) 
    root.style.setProperty('--product-panel-coin-size', `37px`) 
    root.style.setProperty('--product-panel-value-size', `50px`) 
    root.style.setProperty('--product-panel-text-size', `20px`) 
    root.style.setProperty('--product-panel-sizes-size', `20px`) 
    root.style.setProperty('--product-panel-color-size', `15px`) 
    //********|| Margin ||********//
    root.style.setProperty('--product-panel-type-coin-margin', `3px, -4px`)
    root.style.setProperty('--product-panel-coin-margin', `0px, -2px`)
    root.style.setProperty('--product-panel-value-margin', `0px, -3px`)
    root.style.setProperty('--product-panel-text-margin', `0px, 0px`)
    root.style.setProperty('--product-panel-sizes-margin', `0px, 0px`)
    root.style.setProperty('--product-panel-color-margin', `0px, 0px`) 
    //********|| Weight ||********//
    root.style.setProperty('--product-panel-weight', `normal`) 

    
    //================|| Information ||================//
    //********|| Size ||********//
    root.style.setProperty('--information-title-size', `30px`) 
    root.style.setProperty('--information-resume-size', `18px`) 
    root.style.setProperty('--information-h1-size', `16px`) 
    //********|| Margin ||********//
    root.style.setProperty('--information-margin', `0px, 0px`)
    //********|| Weight ||********//
    root.style.setProperty('--information-weight', `normal`) 

    
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


    //================|| Card ||================//
    //********|| Size ||********//
    root.style.setProperty('--card-type-coin-size', `23px`) 
    root.style.setProperty('--card-coin-size', `27px`) 
    root.style.setProperty('--card-value-size', `32px`) 
    root.style.setProperty('--card-p-size', `12px`)
    //********|| Margin ||********//
    root.style.setProperty('--card-type-coin-margin', `0px 0px 0px 0px`) 
    root.style.setProperty('--card-coin-margin', `-2px 0px 0px -3px`) 
    root.style.setProperty('--card-value-margin', `-3px 0px 0px -1px`) 
    root.style.setProperty('--card-p-margin', `-5px 5px 10px`) 
    //********|| Weight ||********//
    root.style.setProperty('--card-weight', `normal`) 

    
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
        if (card_border_left.value < 50 || card_border_right.value < 50)
        { root.style.setProperty('--card-p-margin', `-5px 5px 10px`) }
    
        if (card_border_left.value > 50 && card_border_left.value <= 75 || card_border_right.value > 50 && card_border_right.value <= 75)
        { root.style.setProperty('--card-p-margin', `-5px 25px 10px`) }
    
        if (card_border_left.value >= 76 || card_border_right.value >= 76)
        { root.style.setProperty('--card-p-margin', `-5px 33px 10px`) }

        function generatecardborderradius() 
        {
            if (card_border_left.value < 50 || card_border_right.value < 50)
            { root.style.setProperty('--card-p-margin', `-5px 5px 10px`) }
        
            if (card_border_left.value > 50 && card_border_left.value <= 75 || card_border_right.value > 50 && card_border_right.value <= 75)
            { root.style.setProperty('--card-p-margin', `-5px 25px 10px`) }
        
            if (card_border_left.value >= 76 || card_border_right.value >= 76)
            { root.style.setProperty('--card-p-margin', `-5px 33px 10px`) }
        }
        card_border_left.addEventListener("input", generatecardborderradius);
        card_border_right.addEventListener("input", generatecardborderradius);
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


    //================|| Product-Panel ||================//
    //********|| Size ||********//
    root.style.setProperty('--product-panel-title-size', `22px`) 
    root.style.setProperty('--product-panel-type-coin-size', `39px`) 
    root.style.setProperty('--product-panel-coin-size', `40px`) 
    root.style.setProperty('--product-panel-value-size', `50px`) 
    root.style.setProperty('--product-panel-text-size', `25px`) 
    root.style.setProperty('--product-panel-sizes-size', `22px`) 
    root.style.setProperty('--product-panel-color-size', `18px`) 
    //********|| Margin ||********//
    root.style.setProperty('--product-panel-type-coin-margin', `3px, 0px`)
    root.style.setProperty('--product-panel-coin-margin', `0px, -1px`)
    root.style.setProperty('--product-panel-value-margin', `0px, -3px`)
    root.style.setProperty('--product-panel-text-margin', `0px, 0px`)
    root.style.setProperty('--product-panel-sizes-margin', `0px, 0px`)
    root.style.setProperty('--product-panel-color-margin', `0px, 0px`) 
    //********|| Weight ||********//
    root.style.setProperty('--product-panel-weight', `normal`) 

    
    //================|| Information ||================//
    //********|| Size ||********//
    root.style.setProperty('--information-title-size', `30px`) 
    root.style.setProperty('--information-resume-size', `20px`) 
    root.style.setProperty('--information-h1-size', `18px`) 
    //********|| Margin ||********//
    root.style.setProperty('--information-margin', `0px, 0px`)
    //********|| Weight ||********//
    root.style.setProperty('--information-weight', `normal`) 

    
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


    //================|| Card ||================//
    //********|| Size ||********//
    root.style.setProperty('--card-type-coin-size', `26px`) 
    root.style.setProperty('--card-coin-size', `30px`) 
    root.style.setProperty('--card-value-size', `34px`) 
    root.style.setProperty('--card-p-size', `15px`) 
    //********|| Margin ||********//
    root.style.setProperty('--card-type-coin-margin', `0px 0px 0px 0px`) 
    root.style.setProperty('--card-coin-margin', `0px 0px 0px -3px`) 
    root.style.setProperty('--card-value-margin', `-2px 0px 0px -1px`) 
    root.style.setProperty('--card-p-margin', `-5px 5px 10px`) 
    //********|| Weight ||********//
    root.style.setProperty('--card-weight', `normal`) 

    
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
        if (card_border_left.value < 50 || card_border_right.value < 50)
        { root.style.setProperty('--card-p-margin', `-5px 5px 10px`) }
    
        if (card_border_left.value > 50 && card_border_left.value <= 100 || card_border_right.value > 50 && card_border_right.value <= 100)
        { root.style.setProperty('--card-p-margin', `-5px 25px 10px`) }

        function generatecardborderradius() 
        {
            if (card_border_left.value < 50 || card_border_right.value < 50)
            { root.style.setProperty('--card-p-margin', `-5px 5px 10px`) }
        
            if (card_border_left.value > 50 && card_border_left.value <= 100 || card_border_right.value > 50 && card_border_right.value <= 100)
            { root.style.setProperty('--card-p-margin', `-5px 25px 10px`) }
        }
        card_border_left.addEventListener("input", generatecardborderradius);
        card_border_right.addEventListener("input", generatecardborderradius);
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


    //================|| Product-Panel ||================//
    //********|| Size ||********//
    root.style.setProperty('--product-panel-title-size', `22px`) 
    root.style.setProperty('--product-panel-type-coin-size', `33px`) 
    root.style.setProperty('--product-panel-coin-size', `37px`) 
    root.style.setProperty('--product-panel-value-size', `50px`) 
    root.style.setProperty('--product-panel-text-size', `22px`) 
    root.style.setProperty('--product-panel-sizes-size', `20px`) 
    root.style.setProperty('--product-panel-color-size', `15px`) 
    //********|| Margin ||********//
    root.style.setProperty('--product-panel-type-coin-margin', `3px, 0px`)
    root.style.setProperty('--product-panel-coin-margin', `0px, -2px`)
    root.style.setProperty('--product-panel-value-margin', `0px, -3px`)
    root.style.setProperty('--product-panel-text-margin', `0px, 0px`)
    root.style.setProperty('--product-panel-sizes-margin', `0px, 0px`)
    root.style.setProperty('--product-panel-color-margin', `0px, 0px`) 
    //********|| Weight ||********//
    root.style.setProperty('--product-panel-weight', `normal`) 

    
    //================|| Information ||================//
    //********|| Size ||********//
    root.style.setProperty('--information-title-size', `30px`) 
    root.style.setProperty('--information-resume-size', `18px`) 
    root.style.setProperty('--information-h1-size', `16px`) 
    //********|| Margin ||********//
    root.style.setProperty('--information-margin', `0px, 0px`)
    //********|| Weight ||********//
    root.style.setProperty('--information-weight', `normal`) 

    
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


    //================|| Card ||================//
    //********|| Size ||********//
    root.style.setProperty('--card-type-coin-size', `26px`) 
    root.style.setProperty('--card-coin-size', `26px`) 
    root.style.setProperty('--card-value-size', `34px`) 
    root.style.setProperty('--card-p-size', `13px`) 
    //********|| Margin ||********//
    root.style.setProperty('--card-type-coin-margin', `0px 0px 0px 0px`) 
    root.style.setProperty('--card-coin-margin', `-3px 0px 0px -3px`) 
    root.style.setProperty('--card-value-margin', `-3px 0px 0px -1px`) 
    root.style.setProperty('--card-p-margin', `-5px 5px 10px`) 
    //********|| Weight ||********//
    root.style.setProperty('--card-weight', `normal`) 

    
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
        if (card_border_left.value < 50 || card_border_right.value < 50)
        { root.style.setProperty('--card-p-margin', `-3px 5px 12px`) }
    
        if (card_border_left.value > 50 && card_border_left.value <= 75 || card_border_right.value > 50 && card_border_right.value <= 75)
        { root.style.setProperty('--card-p-margin', `-3px 22px 12px`) }
    
        if (card_border_left.value >= 76 || card_border_right.value >= 76)
        { root.style.setProperty('--card-p-margin', `-3px 35px 12px`) }

        function generatecardborderradius() 
        {
            if (card_border_left.value < 50 || card_border_right.value < 50)
            { root.style.setProperty('--card-p-margin', `-3px 5px 12px`) }
        
            if (card_border_left.value > 50 && card_border_left.value <= 75 || card_border_right.value > 50 && card_border_right.value <= 75)
            { root.style.setProperty('--card-p-margin', `-3px 22px 12px`) }
        
            if (card_border_left.value >= 76 || card_border_right.value >= 76)
            { root.style.setProperty('--card-p-margin', `-3px 35px 12px`) }
        }
        card_border_left.addEventListener("input", generatecardborderradius);
        card_border_right.addEventListener("input", generatecardborderradius);
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


    //================|| Product-Panel ||================//
    //********|| Size ||********//
    root.style.setProperty('--product-panel-title-size', `20px`) 
    root.style.setProperty('--product-panel-type-coin-size', `37px`) 
    root.style.setProperty('--product-panel-coin-size', `35px`) 
    root.style.setProperty('--product-panel-value-size', `50px`) 
    root.style.setProperty('--product-panel-text-size', `22px`) 
    root.style.setProperty('--product-panel-sizes-size', `20px`) 
    root.style.setProperty('--product-panel-color-size', `16px`) 
    //********|| Margin ||********//
    root.style.setProperty('--product-panel-type-coin-margin', `3px, -1px`)
    root.style.setProperty('--product-panel-coin-margin', `0px, -2px`)
    root.style.setProperty('--product-panel-value-margin', `0px, 0px`)
    root.style.setProperty('--product-panel-text-margin', `0px, 3px`)
    root.style.setProperty('--product-panel-sizes-margin', `0px, 3px`)
    root.style.setProperty('--product-panel-color-margin', `0px, 3px`) 
    //********|| Weight ||********//
    root.style.setProperty('--product-panel-weight', `700`) 

    
    //================|| Information ||================//
    //********|| Size ||********//
    root.style.setProperty('--information-title-size', `30px`) 
    root.style.setProperty('--information-resume-size', `18px`) 
    root.style.setProperty('--information-h1-size', `16px`) 
    //********|| Margin ||********//
    root.style.setProperty('--information-margin', `0px, 3px`)
    //********|| Weight ||********//
    root.style.setProperty('--information-weight', `700`) 

    
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


    //================|| Card ||================//
    //********|| Size ||********//
    root.style.setProperty('--card-type-coin-size', `22px`) 
    root.style.setProperty('--card-coin-size', `22px`) 
    root.style.setProperty('--card-value-size', `34px`) 
    root.style.setProperty('--card-p-size', `14px`) 
    //********|| Margin ||********//
    root.style.setProperty('--card-type-coin-margin', `0px 0px 0px 0px`) 
    root.style.setProperty('--card-coin-margin', `0px 0px 0px -3px`) 
    root.style.setProperty('--card-value-margin', `0px 0px -2px -1px`) 
    root.style.setProperty('--card-p-margin', `-5px 5px 10px`) 
    //********|| Weight ||********//
    root.style.setProperty('--card-weight', `700`) 

    
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
        root.style.setProperty('--card-border-radius-left', `${card_border_left.value}px`)
        card_border_left_result.innerHTML = card_border_left.value;
        root.style.setProperty('--card-border-radius-right', `${card_border_right.value}px`)
        card_border_right_result.innerHTML = card_border_right.value;

        if (card_border_left.value <= 75 || card_border_right.value <= 75)
        { root.style.setProperty('--card-p-margin', `-5px 5px 10px`) }
    
        if (card_border_left.value >=76 && card_border_left.value <= 100 || card_border_right.value >= 76 && card_border_right.value <= 100)
        { root.style.setProperty('--card-p-margin', `-5px 25px 10px`) }

        function generatecardborderradius() 
        {
            if (card_border_left.value <= 75 || card_border_right.value <= 75)
            { root.style.setProperty('--card-p-margin', `-5px 5px 10px`) }
        
            if (card_border_left.value >=76 && card_border_left.value <= 100 || card_border_right.value >= 76 && card_border_right.value <= 100)
            { root.style.setProperty('--card-p-margin', `-5px 25px 10px`) }
        }
        card_border_left.addEventListener("input", generatecardborderradius);
        card_border_right.addEventListener("input", generatecardborderradius);
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


    //================|| Product-Panel ||================//
    //********|| Size ||********//
    root.style.setProperty('--product-panel-title-size', `19px`) 
    root.style.setProperty('--product-panel-type-coin-size', `33px`) 
    root.style.setProperty('--product-panel-coin-size', `37px`) 
    root.style.setProperty('--product-panel-value-size', `50px`) 
    root.style.setProperty('--product-panel-text-size', `19px`) 
    root.style.setProperty('--product-panel-sizes-size', `18px`) 
    root.style.setProperty('--product-panel-color-size', `15px`) 
    //********|| Margin ||********//
    root.style.setProperty('--product-panel-type-coin-margin', `3px, 0px`)
    root.style.setProperty('--product-panel-coin-margin', `0px, -2px`)
    root.style.setProperty('--product-panel-value-margin', `0px, -3px`)
    root.style.setProperty('--product-panel-text-margin', `0px, 0px`)
    root.style.setProperty('--product-panel-sizes-margin', `0px, 0px`)
    root.style.setProperty('--product-panel-color-margin', `0px, 0px`) 
    //********|| Weight ||********//
    root.style.setProperty('--product-panel-weight', `700`) 

    
    //================|| Information ||================//
    //********|| Size ||********//
    root.style.setProperty('--information-title-size', `32px`) 
    root.style.setProperty('--information-resume-size', `20px`) 
    root.style.setProperty('--information-h1-size', `16px`) 
    //********|| Margin ||********//
    root.style.setProperty('--information-margin', `0px, 0px`)
    //********|| Weight ||********//
    root.style.setProperty('--information-weight', `700`) 

    
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


    //================|| Card ||================//
    //********|| Size ||********//
    root.style.setProperty('--card-type-coin-size', `23px`) 
    root.style.setProperty('--card-coin-size', `26px`) 
    root.style.setProperty('--card-value-size', `34px`) 
    root.style.setProperty('--card-p-size', `13px`) 
    //********|| Margin ||********//
    root.style.setProperty('--card-type-coin-margin', `0px 0px 0px 0px`) 
    root.style.setProperty('--card-coin-margin', `-2px 0px 0px -4px`) 
    root.style.setProperty('--card-value-margin', `-3px 0px 0px -1px`) 
    root.style.setProperty('--card-p-margin', `-5px 5px 10px`)
    //********|| Weight ||********//
    root.style.setProperty('--card-weight', `700`) 

    
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
        if (card_border_left.value < 50 || card_border_right.value < 50)
        { root.style.setProperty('--card-p-margin', `-5px 8px 10px`) }
    
        if (card_border_left.value > 50 && card_border_left.value <= 75 || card_border_right.value > 50 && card_border_right.value <= 75)
        { root.style.setProperty('--card-p-margin', `-5px 23px 10px`) }
    
        if (card_border_left.value >= 76 || card_border_right.value >= 76)
        { root.style.setProperty('--card-p-margin', `-5px 30px 10px`) }

        function generatecardborderradius() 
        {
            if (card_border_left.value < 50 || card_border_right.value < 50)
            { root.style.setProperty('--card-p-margin', `-5px 8px 10px`) }
        
            if (card_border_left.value > 50 && card_border_left.value <= 75 || card_border_right.value > 50 && card_border_right.value <= 75)
            { root.style.setProperty('--card-p-margin', `-5px 23px 10px`) }
        
            if (card_border_left.value >= 76 || card_border_right.value >= 76)
            { root.style.setProperty('--card-p-margin', `-5px 30px 10px`) }
        }
        card_border_left.addEventListener("input", generatecardborderradius);
        card_border_right.addEventListener("input", generatecardborderradius);
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
    
    
    //================|| Product-Panel ||================//
    //********|| Size ||********//
    root.style.setProperty('--product-panel-title-size', `20px`) 
    root.style.setProperty('--product-panel-type-coin-size', `34px`) 
    root.style.setProperty('--product-panel-coin-size', `35px`) 
    root.style.setProperty('--product-panel-value-size', `50px`) 
    root.style.setProperty('--product-panel-text-size', `20px`) 
    root.style.setProperty('--product-panel-sizes-size', `19px`) 
    root.style.setProperty('--product-panel-color-size', `15px`) 
    //********|| Margin ||********//
    root.style.setProperty('--product-panel-type-coin-margin', `4px, -3px`)
    root.style.setProperty('--product-panel-coin-margin', `0px, -2px`)
    root.style.setProperty('--product-panel-value-margin', `0px, -3px`)
    root.style.setProperty('--product-panel-text-margin', `0px, 0px`)
    root.style.setProperty('--product-panel-sizes-margin', `0px, 0px`)
    root.style.setProperty('--product-panel-color-margin', `0px, 0px`) 
    //********|| Weight ||********//
    root.style.setProperty('--product-panel-weight', `700`) 

    
    //================|| Information ||================//
    //********|| Size ||********//
    root.style.setProperty('--information-title-size', `30px`) 
    root.style.setProperty('--information-resume-size', `18px`) 
    root.style.setProperty('--information-h1-size', `16px`) 
    //********|| Margin ||********//
    root.style.setProperty('--information-margin', `0px, 0px`)
    //********|| Weight ||********//
    root.style.setProperty('--information-weight', `700`) 

    
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


    //================|| Card ||================//
    //********|| Size ||********//
    root.style.setProperty('--card-type-coin-size', `24px`) 
    root.style.setProperty('--card-coin-size', `24px`) 
    root.style.setProperty('--card-value-size', `35px`) 
    root.style.setProperty('--card-p-size', `13px`) 
    //********|| Margin ||********//
    root.style.setProperty('--card-type-coin-margin', `0px 0px 0px 0px`) 
    root.style.setProperty('--card-coin-margin', `0px 0px 0px -4px`) 
    root.style.setProperty('--card-value-margin', `-2px 0px 0px -1px`) 
    //********|| Weight ||********//
    root.style.setProperty('--card-weight', `700`) 

    
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
        if (card_border_left.value < 50 || card_border_right.value < 50)
        { root.style.setProperty('--card-p-margin', `-5px 5px 12px`) }
    
        if (card_border_left.value > 50 && card_border_left.value <= 75 || card_border_right.value > 50 && card_border_right.value <= 75)
        { root.style.setProperty('--card-p-margin', `-5px 20px 12px`) }
    
        if (card_border_left.value >= 76 || card_border_right.value >= 76)
        { root.style.setProperty('--card-p-margin', `-5px 33px 12px`) }

        function generatecardborderradius() 
        {
            if (card_border_left.value < 50 || card_border_right.value < 50)
            { root.style.setProperty('--card-p-margin', `-5px 5px 12px`) }
        
            if (card_border_left.value > 50 && card_border_left.value <= 75 || card_border_right.value > 50 && card_border_right.value <= 75)
            { root.style.setProperty('--card-p-margin', `-5px 20px 12px`) }
        
            if (card_border_left.value >= 76 || card_border_right.value >= 76)
            { root.style.setProperty('--card-p-margin', `-5px 33px 12px`) }
        }
        card_border_left.addEventListener("input", generatecardborderradius);
        card_border_right.addEventListener("input", generatecardborderradius);
    }
}