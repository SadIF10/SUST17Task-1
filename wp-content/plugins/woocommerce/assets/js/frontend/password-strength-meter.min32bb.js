jQuery(function(a){var b={init:function(){a(document.body).on("keyup change","form.register #reg_password, form.checkout #account_password, form.edit-account #password_1, form.lost_reset_password #password_1",this.strengthMeter),a("form.checkout #createaccount").change()},strengthMeter:function(){var c=a("form.register, form.checkout, form.edit-account, form.lost_reset_password"),d=a('input[type="submit"]',c),e=a("#reg_password, #account_password, #password_1",c),f=1;b.includeMeter(c,e),f=b.checkPasswordStrength(c,e),f<wc_password_strength_meter_params.min_password_strength&&!c.is("form.checkout")?d.attr("disabled","disabled").addClass("disabled"):d.removeAttr("disabled","disabled").removeClass("disabled")},includeMeter:function(b,c){var d=b.find(".woocommerce-password-strength");""===c.val()?(d.remove(),a(document.body).trigger("wc-password-strength-removed")):0===d.length&&(c.after('<div class="woocommerce-password-strength" aria-live="polite"></div>'),a(document.body).trigger("wc-password-strength-added"))},checkPasswordStrength:function(a,b){var c=a.find(".woocommerce-password-strength"),d=a.find(".woocommerce-password-hint"),e='<small class="woocommerce-password-hint">'+wc_password_strength_meter_params.i18n_password_hint+"</small>",f=wp.passwordStrength.meter(b.val(),wp.passwordStrength.userInputBlacklist()),g="";switch(c.removeClass("short bad good strong"),d.remove(),f<wc_password_strength_meter_params.min_password_strength&&(g=" - "+wc_password_strength_meter_params.i18n_password_error),f){case 0:c.addClass("short").html(pwsL10n.short+g),c.after(e);break;case 1:c.addClass("bad").html(pwsL10n.bad+g),c.after(e);break;case 2:c.addClass("bad").html(pwsL10n.bad+g),c.after(e);break;case 3:c.addClass("good").html(pwsL10n.good+g);break;case 4:c.addClass("strong").html(pwsL10n.strong+g);break;case 5:c.addClass("short").html(pwsL10n.mismatch)}return f}};b.init()});