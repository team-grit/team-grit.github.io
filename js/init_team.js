/**
 * @author Stefano
 */

$("#team").tabs({fx: { opacity: 'toggle', duration: 'normal' }, collapsible: false})
		.tabs("option", "selected", 0);
$("#team, #team *").removeClass("ui-corner-all ui-corner-top ui-corner-right ui-corner-bottom ui-corner-left")
		.removeClass("ui-helper-clearfix ui-helper-reset")
		.removeClass("ui-widget ui-widget-content ui-widget-header");

$("#team").append('<ul id="team-nav-2" class="team-nav"></ul><div class="clearer"></div>');
$("#team-nav-2").append($("#team .line2-team-nav"));