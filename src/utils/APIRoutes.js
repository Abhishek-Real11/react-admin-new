const host = "http://192.168.1.11:5000";

export const loginRoute = `${host}/v1/admin/auth/login`;
export const forgot_password_route = `${host}/v1/admin/auth/getotp`;
export const reset_password_route = `${host}/v1/admin/auth/resetpassword`;
export const add_faq_route = `${host}/v1/admin/addfaqs`;
export const get_faq_route = `${host}/v1/admin/getfaqs`;
export const add_testimonial_route = `${host}/v1/admin/addTestimonial`;
export const get_testimonial_route = `${host}/v1/admin/getTestimonial`;
export const change_faq_status_route = `${host}/v1/admin/updateFaqStatus`;
export const change_testimonial_status_route = `${host}/v1/admin/updateTestimonialStatus`;
export const add_footer_contact = `${host}/v1/admin/addFooter`;
export const get_footer_contact = `${host}/v1/admin/getFooter`;

export const home_logo_route=`${host}/v1/admin/home/addLogo`;
export const get_home_logo_route=`${host}/v1/admin/home/getLogo`;
export const delete_home_logo_route=`${host}/v1/admin/home/deleteLogo`;
export const change_logo_status_route=`${host}/v1/admin/home/updateLogoStatus`;
export const home_navbar_route=`${host}/v1/admin/home/createNavBar`;
export const get_home_navbar_route=`${host}/v1/admin/home/getNavBar`;
export const delete_home_navbar_route=`${host}/v1/admin/home/deleteNavBar`;
export const add_banner_route = `${host}/v1/admin/addbanner`;
export const get_banner_route = `${host}/v1/admin/getbanner`;
export const change_banner_status_route = `${host}/v1/admin/updateBannerStatus`;
export const delete_banner_route=`${host}/v1/admin/deleteImage`;
export const add_home_square_boxes_route=`${host}/v1/admin/home/createSquareBox`;
export const edit_home_square_boxes_route=`${host}/v1/admin/home/editSquareBox`;
export const change_square_boxes_status_route=`${host}/v1/admin/home/updateSquareBoxStatus`;
export const get_home_square_boxes_route=`${host}/v1/admin/home/getSquareBox`;
export const add_how_to_play_route=`${host}/v1/admin/home/createHowToPlay`;
export const get_how_to_play_route=`${host}/v1/admin/home/getHowToPlay`;
export const edit_how_to_play_route=`${host}/v1/admin/home/updateHowToPlayStatus`;
export const add_home_cms_route = `${host}/v1/admin/home/createContent`;
export const get_home_cms_route = `${host}/v1/admin/home/getContent`;
export const delete_home_cms_route = `${host}/v1/admin/home/deleteContent`;
export const edit_home_cms_route = `${host}/v1/admin/home/editContent`;
export const change_home_cms_status_route = `${host}/v1/admin/home/updateContentStatus`;






