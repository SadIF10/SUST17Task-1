jQuery(document).ready(function(i){var t=i(".images"),r=i(".yith_magnifier_zoom"),a=i(".yith_magnifier_zoom img"),e=t.find(".yith_magnifier_zoom").attr("href"),n=t.find(".yith_magnifier_zoom img").attr("src");return"undefined"==typeof yith_magnifier_options?!1:(t.yith_magnifier(yith_magnifier_options),void i(document).on("found_variation","form.variations_form",function(i,o){var m=o.image_magnifier?o.image_magnifier:e,f=o.image_src?o.image_src:n;r.attr("href",m),a.attr("src",f),a.attr("srcset",f),a.attr("src-orig",f),t.data("yith_magnifier")&&t.yith_magnifier("destroy"),t.yith_magnifier(yith_magnifier_options)}).on("reset_image",function(i){r.attr("href",e),a.attr("src",n),a.attr("srcset",n),a.attr("src-orig",n),t.data("yith_magnifier")&&t.yith_magnifier("destroy"),t.yith_magnifier(yith_magnifier_options)}))});