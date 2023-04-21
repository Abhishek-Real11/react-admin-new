const host = "http://192.168.1.11:5000";

export const loginRoute = `${host}/v1/admin/auth/login`;
export const forgot_password_route = `${host}/v1/admin/auth/getotp`;
export const reset_password_route = `${host}/v1/admin/auth/resetpassword`;
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
export const add_app_features_route = `${host}/v1/admin/home/addAppFeatures`;
export const get_app_features_route = `${host}/v1/admin/home/getAppFeatures`;
export const update_app_features_status = `${host}/v1/admin/home/updateAppFeaturesStatus`;
export const delete_app_features_status = `${host}/v1/admin/home/deleteAppFeatures`;
export const add_app_features_image = `${host}/v1/admin/home/addAppFeaturesImage`;
export const get_app_features_image = `${host}/v1/admin/home/getAppFeaturesImage`;
export const update_app_features_image_status = `${host}/v1/admin/home/updateAppFeaturesImageStatus`;
export const delete_app_features_image = `${host}/v1/admin/home/deleteAppFeaturesImage`;
export const add_faq_route = `${host}/v1/admin/home/addfaqs`;
export const get_faq_route = `${host}/v1/admin/home/getfaqs`;
export const change_faq_status_route = `${host}/v1/admin/home/updateFaqStatus`;
export const add_testimonial_route = `${host}/v1/admin/home/addTestimonial`;
export const get_testimonial_route = `${host}/v1/admin/home/getTestimonial`;
export const change_testimonial_status_route = `${host}/v1/admin/home/updateTestimonialStatus`;

export const add_about_us_banner_route = `${host}/v1/admin/aboutUs/addbanner`;
export const get_about_us_banner_route = `${host}/v1/admin/aboutUs/getbanner`;
export const change_about_us_banner_status_route = `${host}/v1/admin/aboutUs/updateBannerStatus`;
export const delete_about_us_banner_route=`${host}/v1/admin/aboutUs/deleteImage`;
export const add_about_us_center_logo = `${host}/v1/admin/aboutUs/addAppFeaturesImage`;
export const get_about_us_center_logo = `${host}/v1/admin/aboutUs/getAppFeaturesImage`;
export const update_about_us_center_logo = `${host}/v1/admin/aboutUs/updateAppFeaturesImageStatus`;
export const delete_about_us_center_logo = `${host}/v1/admin/aboutUs/deleteAppFeaturesImage`;
export const add_about_us_cms_route = `${host}/v1/admin/aboutUs/createContent`;
export const get_about_us_cms_route = `${host}/v1/admin/aboutUs/getContent`;
export const delete_about_us_cms_route = `${host}/v1/admin/aboutUs/deleteContent`;
export const edit_about_us_cms_route = `${host}/v1/admin/aboutUs/editContent`;
export const change_about_us_cms_status_route = `${host}/v1/admin/aboutUs/updateContentStatus`;
export const add_about_us_bottom_image = `${host}/v1/admin/aboutUs/addImage`;
export const get_about_us_bottom_image = `${host}/v1/admin/aboutUs/getImage`;
export const update_about_us_bottom_image = `${host}/v1/admin/aboutUs/updateImageStatus`;
export const delete_about_us_bottom_image = `${host}/v1/admin/aboutUs/deleteAboutUsBottomImage`;
export const add_indianT20League_banner = `${host}/v1/admin/indianT20League/addbanner`;
export const get_indianT20League_banner = `${host}/v1/admin/indianT20League/getbanner`;
export const delete_indianT20League_banner = `${host}/v1/admin/indianT20League/deleteBanner`;
export const update_status_indianT20League_banner = `${host}/v1/admin/indianT20League/updateBannerStatus`;
export const add_indianT20League_cms_route = `${host}/v1/admin/indianT20League/createContent`;
export const get_indianT20League_cms_route = `${host}/v1/admin/indianT20League/getContent`;
export const update_status_indianT20League_cms_route = `${host}/v1/admin/indianT20League/updateContentStatus`;
export const delete_indianT20League_cms_route = `${host}/v1/admin/indianT20League/deleteContent`;
export const edit_indianT20League_cms_route = `${host}/v1/admin/indianT20League/editContent`;


