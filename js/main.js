$(document).ready(function(){
	$("section#screenshots a").on("click", function(){
		$("div#modal img").attr("src", $(this).attr("data-image-url"));
	});

	var nav = $(".navbar-fixed-top");
	var distance = $(".navbar-fixed-top");

	if (distance.top >= 300){
		nav.addClass("effect");
	}

	$(window).scroll(function(){
		var scroll = $(window).scrollTop();

		if (scroll >= 300) {
			nav.addClass("effect");
		} else {
			nav.removeClass("effect");
		}
	});

	///////////////////////////////////////////
	//// WAYPOINT & ANIMATE.CSS ANIMATIONS ////
	///////////////////////////////////////////

	$("#about .blue-circle").waypoint(function(){
		$("#about .blue-circle").addClass("animated fadeInUp")
	}, {
		offset: "50%"
	});

	$("#features .blue-circle").waypoint(function(){
		$(this.element).addClass("animated fadeInUp")
	}, {
		offset: "50%"
	});

	$(".features-image img").waypoint(function(){
		$(".features-image img").addClass("animated flipInY")
	}, {
		offset: "50%"
	});

	$("#screenshots .col-sm-4").waypoint(function(){
		$(this.element).addClass("animated zoomIn");
		$(this.element).css({"opacity":1})
	}, {
		offset: "50%"
	});

	$("#download div.phone img").waypoint(function(){
		$(this.element).addClass("animated fadeInRight");
	}, {
		offset: "50%"
	});

	$("#download .platforms > div").waypoint(function(){
		$(this.element).addClass("animated fadeInUp");
	}, {
		offset: "50%"
	});		
// EXPER
	$("form").waypoint(function(){
		$(this.element).addClass("animated tada");
		$(this.element).css({"opacity":1})
	}, {
		offset: "70%"
	});

// BOOTSTRAP VALIDATOR
			$('#supportForm').bootstrapValidator({
				message: "That´s no valid!",
				feedbackIcons: {
					valid: 'glyphicon glyphicon-ok',
					invalid: 'glyphicon glyphicon-remove',
					validating: 'glyphicon glyphicon-refresh'
				},
				fields: {
					name: {
						validators: {
							notEmpty: {
								message: "This field is mandatory and cannot be empty"
							},
						}
					},
					email: {
						validators: {
							notEmpty: {
								message: "This field is mandatory and cannot be empty"
							},
							emailAddress: {
								message: "That doesn´t look like an e-mail address"
							}
						}
					},
					messageField: {
						validators: {
							notEmpty: {
								message: "The Message Cannot be empty!"
							}
						}
					}
				}
			}).on('success.form.bv', function(e) {
				e.preventDefault();

				var $form = $(e.target);

				var bv = $form.data('bootstrapValidator');

				$.post($form.attr('action'), $form.serialize(), function(result) {
					$('#ok').fadeIn();
					console.log(result);
				}, 'json' );

			});
	// $("#supportForm").bootstrapValidator({
	// 	message: "This value is not valid",
	// 	feedbackIcons: {
	// 		valid: "glyphicon glyphicon-ok",
	// 		invalid: "glyphicon glyphicon-remove",
	// 		validating: "glyphicon glyphicon-refresh",
	// 	},
	// 	fields: {
	// 		name: {
	// 			validators: {
	// 				notEmpyt: {
	// 					message: "This field is required"
	// 				}
	// 			}
	// 		},
	// 		email: {
	// 			validators: {
	// 				notEmpyt: {
	// 					message: "This field is required"
	// 				},
	// 				emailAddress: {
	// 					message: "This is not a valid email address"
	// 				}
	// 			}
	// 		},
	// 		message: {
	// 			validators: {
	// 				notEmpyt: {
	// 					message: "Please enter a message"
	// 				}
	// 			}
	// 		}
	// 	}
	// }).on("success.form.bv", function(e) {
	// 	e.preventDefault();
	// 	var $form = $(e.target);
	// 	var bv = $form.data("bootstrapValidator");
	// 	$.post($form.attr("action"), $form.serialize(), function(result){
	// 		$('#ok').fadeIn();
	// 		console.log(result);
	// 	},"json");
	// });	

});

	///////////////////////////////////////////
	////////////// SMOOTH SCROLL //////////////
	///////////////////////////////////////////

smoothScroll.init({
	speed: 1000,
	updateURL: false,
	offset: 0
});
