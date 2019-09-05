let colors = {
				red: '#ff5252',
				pink: '#ff4081',
				purple: '#e040fb',
				deepPurple: '#7c4dff',
				indigo: '#536dfe',
				blue: '#448aff',
				lightBlue: '#40c4ff',
				cyan: '#18ffff',
				teal: '#64ffda',
				green: '#69f0ae',
				lightGreen: '#b2ff59',
				lime: '#eeff41',
				yellow: '#ffff00',
				amber: '#ffd740',
				orange: '#ffab40',
				deepOrange: '#ff6e40',

}

let appearancePresets = [ 'Select appearance animation',
							
							{
								title: 'Bouncing entrances',
								presets: [
											{
												anim: 'bounceIn',
												title: 'Bounce In',
												target: 'appearanceCenter',
												duration: '.75s'
											},

											{
												anim: 'bounceInDown',
												title: 'Bounce In Down',
												target: 'appearance'
											},

											{
												anim: 'bounceInLeft',
												title: 'Bounce In Left',
												target: 'appearance'
											},

											{
												anim: 'bounceInRight',
												title: 'Bounce In Right',
												target: 'appearance'
											},

											{
												anim: 'bounceInUp',
												title: 'Bounce In Up',
												target: 'appearance'
											}
								],
								previewSample: 'preview-heart-red.png',
								color: colors.red,
							},

							{
								title: 'Fading entrances',
								presets: [
											{
												anim: 'fadeIn',
												title: 'Fade In',
												target: 'appearance'
											},

											{
												anim: 'fadeInDown',
												title: 'Fade In Down',
												target: 'appearance'
											},

											{
												anim: 'fadeInDownBig',
												title: 'Fade In Down Big',
												target: 'appearance'
											},

											{
												anim: 'fadeInLeft',
												title: 'Fade In Left',
												target: 'appearance'
											},

											{
												anim: 'fadeInLeftBig',
												title: 'Fade In Left Big',
												target: 'appearance'
											},

											{
												anim: 'fadeInRight',
												title: 'Fade In Right',
												target: 'appearance'
											},

											{
												anim: 'fadeInRightBig',
												title: 'Fade In Right Big',
												target: 'appearance'
											},

											{
												anim: 'fadeInUp',
												title: 'Fade In Up',
												target: 'appearance'
											},

											{
												anim: 'fadeInUpBig',
												title: 'Fade In Up Big',
												target: 'appearance'
											}
								],
								previewSample: 'preview-heart-turquoise.png',
								color: colors.pink,
							},

							{
								title: 'Flip entrances',
								presets: [
											{
												anim: 'flipInX',
												title: 'Flip In X',
												target: 'appearanceCenter'
											},

											{
												anim: 'flipInY',
												title: 'Flip In Y',
												target: 'appearanceCenter'
											},
											
								],
								previewSample: 'preview-heart-turquoise.png',
								color: colors.purple,
							},

							{
								title: 'Jump entrances',
								presets: [
											{
												anim: 'jumpInLeft',
												title: 'Jump In Left',
												target: 'appearance',
											},

											{
												anim: 'jumpInRight',
												title: 'Jump In Right',
												target: 'appearance',
											},
								],

								previewSample: 'preview-heart-turquoise.png',
								color: colors.deepPurple,
							},

							{
								title: 'Pop entrances',
								presets: [
											{
												anim: 'popIn',
												title: 'Pop In',
												target: 'appearance',
												duration: '1s',
											},

											{
												anim: 'popInLeft',
												title: 'Pop In Left',
												target: 'appearance',
												duration: '1s',
											},

											{
												anim: 'popInRight',
												title: 'Pop In Right',
												target: 'appearance',
												duration: '1s',
											},

											{
												anim: 'popInTop',
												title: 'Pop In Top',
												target: 'appearance',
												duration: '1s',
											},

											{
												anim: 'popInBottom',
												title: 'Pop In Bottom',
												target: 'appearance',
												duration: '1s',
											}
								],
								previewSample: 'preview-heart-turquoise.png',
								color: colors.indigo,
							},

							{
								title: 'Pull entrances',
								presets: [
											{
												anim: 'pullUp',
												title: 'Pull Up',
												target: 'appearance'
											},

											{
												anim: 'pullDown',
												title: 'Pull Down',
												target: 'appearance'
											},

											{
												anim: 'pullLeft',
												title: 'Pull Left',
												target: 'appearance'
											},

											{
												anim: 'pullRight',
												title: 'Pull Right',
												target: 'appearance'
											}

								],
								previewSample: 'preview-heart-green.png',
								color: colors.blue,
							},

							{
								title: 'Rotating entrances',
								presets: [
											{
												anim: 'rotateIn',
												title: 'Rotate In',
												target: 'appearanceCenter'
											},

											{
												anim: 'rotateInUpLeft',
												title: 'Rotate In Up Left',
												target: 'appearance'
											},

											{
												anim: 'rotateInUpRight',
												title: 'Rotate In Up Right',
												target: 'appearance'
											},

											{
												anim: 'rotateInDownLeft',
												title: 'Rotate In Down Left',
												target: 'appearance'
											},

											{
												anim: 'rotateInDownRight',
												title: 'Rotate In Down Right',
												target: 'appearance'
											}
								],
								previewSample: 'preview-heart-green.png',
								color: colors.lightBlue,
							},

							{
								title: 'Sliding entrances',
								presets: [
											{
												anim: 'slideInUp',
												title: 'Slide In Up',
												target: 'appearance'
											},

											{
												anim: 'slideInDown',
												title: 'Slide In Down',
												target: 'appearance'
											},

											{
												anim: 'slideInRight',
												title: 'Slide In Right',
												target: 'appearance'
											},

											{
												anim: 'slideInLeft',
												title: 'Slide In Left',
												target: 'appearance'
											}
								],
								previewSample: 'preview-heart-orange.png',
								color: colors.cyan,
							},

							{
								title: 'Swoop entrances',
								presets: [
											{
												anim: 'swoopInLeft',
												title: 'Swoop In Left',
												target: 'appearance',
												duration: '.5s',
											},

											{
												anim: 'swoopInRight',
												title: 'Swoop In Right',
												target: 'appearance',
												duration: '.5s',
											},

											{
												anim: 'swoopInTop',
												title: 'Swoop In Top',
												target: 'appearance',
												duration: '.5s',
											},

											{
												anim: 'swoopInBottom',
												title: 'Swoop In Bottom',
												target: 'appearance',
												duration: '.5s',
											}
								],
								previewSample: 'preview-heart-turquoise.png',
								color: colors.teal,
							},

							{
								title: 'Zoom entrances',
								presets: [
											{
												anim: 'zoomIn',
												title: 'Zoom In',
												target: 'appearanceCenter'
											},

											{
												anim: 'zoomInLeft',
												title: 'Zoom In Left',
												target: 'appearance'
											},

											{
												anim: 'zoomInRight',
												title: 'Zoom In Right',
												target: 'appearance'
											},

											{
												anim: 'zoomInDown',
												title: 'Zoom In Down',
												target: 'appearance'
											},

											{
												anim: 'zoomInUp',
												title: 'Zoom In Up',
												target: 'appearance'
											}
								],
								previewSample: 'preview-heart-purple.png',
								color: colors.green,
							},

							{
								title: 'Other',
								presets: [

											{
												anim: 'lightSpeedIn',
												title: 'Light Speed In',
												target: 'appearance'
											},

											{
												anim: 'jackInTheBox',
												title: 'Jack In The Box',
												target: 'appearance'
											},

											{
												anim: 'rollIn',
												title: 'Roll In',
												target: 'appearance'
											},

											{
												anim: 'unfold',
												title: 'Unfold',
												target: 'appearance'
											},

											{
												anim: 'blink',
												title: 'Blink',
												target: 'appearance'
											},

											{
												anim: 'spinIn',
												title: 'Spin In',
												target: 'appearance'
											}
								],
								previewSample: 'preview-heart-blue.png',
								color: colors.lightGreen,
							},
];

let fadePresets = ['Select fade animation',
							
							{
								title: 'Bouncing Exits',
								presets: [
											{
												anim: 'bounceOut',
												title: 'Bounce Out',
												target: 'fadeCenter',
												duration: '.75s'
											},

											{
												anim: 'bounceOutDown',
												title: 'Bounce Out Down',
												target: 'fade'
											},

											{
												anim: 'bounceOutLeft',
												title: 'Bounce Out Left',
												target: 'fade'
											},

											{
												anim: 'bounceOutRight',
												title: 'Bounce Out Right',
												target: 'fade'
											},

											{
												anim: 'bounceOutUp',
												title: 'Bounce Out Up',
												target: 'fade'
											}
								],
								previewSample: 'preview-heart-red.png',
								color: colors.red,
							},

							{
								title: 'Fading Exits',
								presets: [
											{
												anim: 'fadeOut',
												title: 'Fade Out',
												target: 'fade'
											},

											{
												anim: 'fadeOutDown',
												title: 'Fade Out Down',
												target: 'fade'
											},

											{
												anim: 'fadeOutDownBig',
												title: 'Fade Out Down Big',
												target: 'fade'
											},

											{
												anim: 'fadeOutLeft',
												title: 'Fade Out Left',
												target: 'fade'
											},

											{
												anim: 'fadeOutLeftBig',
												title: 'Fade Out Left Big',
												target: 'fade'
											},

											{
												anim: 'fadeOutRight',
												title: 'Fade Out Right',
												target: 'fade'
											},

											{
												anim: 'fadeOutRightBig',
												title: 'Fade Out Right Big',
												target: 'fade'
											},

											{
												anim: 'fadeOutUp',
												title: 'Fade Out Up',
												target: 'fade'
											},

											{
												anim: 'fadeOutUpBig',
												title: 'Fade Out Up Big',
												target: 'fade'
											}
								],
								previewSample: 'preview-heart-turquoise.png',
								color: colors.pink,
							},

							{
								title: 'Flip exits',
								presets: [
											{
												anim: 'flipOutX',
												title: 'Flip Out X',
												target: 'fadeCenter'
											},

											{
												anim: 'flipOutY',
												title: 'Flip Out Y',
												target: 'fadeCenter'
											},
											
								],
								previewSample: 'preview-heart-turquoise.png',
								color: colors.purple,
							},

							{
								title: 'Jump exits',
								presets: [
											{
												anim: 'jumpOutLeft',
												title: 'Jump Out Left',
												target: 'fade',
											},

											{
												anim: 'jumpOutRight',
												title: 'Jump Out Right',
												target: 'fade',
											},
								],

								previewSample: 'preview-heart-turquoise.png',
								color: colors.deepPurple,
							},

							{
								title: 'Pop exits',
								presets: [
											{
												anim: 'popOut',
												title: 'Pop Out',
												target: 'fade',
												duration: '.5s',
											},

											{
												anim: 'popOutLeft',
												title: 'Pop Out Left',
												target: 'fade',
												duration: '.5s',
											},

											{
												anim: 'popOutRight',
												title: 'Pop Out Right',
												target: 'fade',
												duration: '.5s',
											},

											{
												anim: 'popOutTop',
												title: 'Pop Out Top',
												target: 'fade',
												duration: '.5s',
											},

											{
												anim: 'popOutBottom',
												title: 'Pop Out Bottom',
												target: 'fade',
												duration: '.5s',
											}
								],
								previewSample: 'preview-heart-turquoise.png',
								color: colors.indigo,
							},

							{
								title: 'Rotating Exits',
								presets: [
											{
												anim: 'rotateOut',
												title: 'Rotate Out',
												target: 'fadeCenter'
											},

											{
												anim: 'rotateOutUpLeft',
												title: 'Rotate Out Up Left',
												target: 'fade'
											},

											{
												anim: 'rotateOutUpRight',
												title: 'Rotate Out Up Right',
												target: 'fade'
											},

											{
												anim: 'rotateOutDownLeft',
												title: 'Rotate Out Down Left',
												target: 'fade'
											},

											{
												anim: 'rotateOutDownRight',
												title: 'Rotate Out Down Right',
												target: 'fade'
											}
								],
								previewSample: 'preview-heart-green.png',
								color: colors.lightBlue,
							},

							{
								title: 'Sliding Exits',
								presets: [
											{
												anim: 'slideOutUp',
												title: 'Slide Out Up',
												target: 'fade'
											},

											{
												anim: 'slideOutDown',
												title: 'Slide Out Down',
												target: 'fade'
											},

											{
												anim: 'slideOutRight',
												title: 'Slide Out Right',
												target: 'fade'
											},

											{
												anim: 'slideOutLeft',
												title: 'Slide Out Left',
												target: 'fade'
											}
								],
								previewSample: 'preview-heart-orange.png',
								color: colors.cyan,
							},

							{
								title: 'Swoop exits',
								presets: [
											{
												anim: 'swoopOutLeft',
												title: 'Swoop Out Left',
												target: 'fade',
												duration: '.5s',
											},

											{
												anim: 'swoopOutRight',
												title: 'Swoop Out Right',
												target: 'fade',
												duration: '.5s',
											},

											{
												anim: 'swoopOutTop',
												title: 'Swoop Out Top',
												target: 'fade',
												duration: '.5s',
											},

											{
												anim: 'swoopOutBottom',
												title: 'Swoop Out Bottom',
												target: 'fade',
												duration: '.5s',
											}
								],
								previewSample: 'preview-heart-turquoise.png',
								color: colors.teal,
							},

							{
								title: 'Zoom Exits',
								presets: [
											{
												anim: 'zoomOut',
												title: 'Zoom Out',
												target: 'fadeCenter'
											},

											{
												anim: 'zoomOutLeft',
												title: 'Zoom Out Left',
												target: 'fade'
											},

											{
												anim: 'zoomOutRight',
												title: 'Zoom Out Right',
												target: 'fade'
											},

											{
												anim: 'zoomOutDown',
												title: 'Zoom Out Down',
												target: 'fade'
											},

											{
												anim: 'zoomOutUp',
												title: 'Zoom Out Up',
												target: 'fade'
											}
								],
								previewSample: 'preview-heart-purple.png',
								color: colors.green,
							},

							{
								title: 'Other Exits',
								presets: [

											{
												anim: 'lightSpeedOut',
												title: 'Light Speed Out',
												target: 'fade'
											},

											{
												anim: 'hinge',
												title: 'Hinge',
												target: 'fade'
											},

											{
												anim: 'rollOut',
												title: 'Roll Out',
												target: 'fade'
											},

											{
												anim: 'fold',
												title: 'Fold',
												target: 'fadeCenter'
											},

											{
												anim: 'spinOut',
												title: 'Spin Out',
												target: 'fadeCenter'
											}

								],
								previewSample: 'preview-heart-blue.png',
								color: colors.lightGreen,
							},

];

let movePresets = ['Select move animation',
							
							{
								title: 'Start & end inside screen',
								presets: [

											{
												anim: 'moveRight',
												title: 'Left to Right',
												target: 'move'
											},

											{
												anim: 'moveLeft',
												title: 'Right to Left',
												target: 'move'
											},

											{
												anim: 'moveTop',
												title: 'Bottom to Top',
												target: 'move'
											},

											{
												anim: 'moveBottom',
												title: 'Top to Bottom',
												target: 'move'
											}
								
										],
								previewSample: 'preview-heart-white.png',
								color: 'white',
							},
						];