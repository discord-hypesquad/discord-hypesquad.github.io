$(document).ready(function() {
	$('#license').html('&copy; KingKoopa#0666 ' + new Date().getFullYear());
});

var balanceBorder = 'data:image/png;base64,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';
var braveBorder = 'data:image/png;base64,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';
var brillianceBorder = 'data:image/png;base64,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';

$('.bravery').click(function() {
	if(!$('#avatarUrl').val() || $('#avatarUrl').val() == '') {
		return;
	} else {
		if($('#render canvas')) { $('#render canvas').remove() };
		$('#profilePicture').css('height', '128px');
		$('#profilePicture').css('width', '128px');
		$('#profilePicture').css('background-image', 'url(' + $('#avatarUrl').val() + ')');
		$('#profilePicture').css('background-size', 'cover');
		$('#profilePicture').prepend($('<img>', {src: braveBorder}));

		html2canvas(document.querySelector('#profilePicture'), {
			allowTaint: true,
			logging: false,
			taintTest: false
		}).then(canvas => {
			var canvasExists = document.getElementById('render').querySelector('canvas');
			if(canvasExists) {
				document.getElementById('render').replaceChild(canvasExists, canvas);
			} else {
				document.getElementById('render').appendChild(canvas);
			}
		}).then(removePrerender());
	}
})
$('.balance').click(function() {
	if(!$('#avatarUrl').val() || $('#avatarUrl').val() == '') {
		return;
	} else {
		if($('#render canvas')) { $('#render canvas').remove() };
		$('#profilePicture').css('height', '128px');
		$('#profilePicture').css('width', '128px');
		$('#profilePicture').css('background-image', 'url(' + $('#avatarUrl').val() + ')');
		$('#profilePicture').css('background-size', 'cover');
		$('#profilePicture').prepend($('<img>', {src: balanceBorder}));

		html2canvas(document.querySelector('#profilePicture'), {
			allowTaint: true,
			logging: false,
			taintTest: false
		}).then(canvas => {
			var canvasExists = document.getElementById('render').querySelector('canvas');
			if(canvasExists) {
				document.getElementById('render').replaceChild(canvasExists, canvas);
			} else {
				document.getElementById('render').appendChild(canvas);
			}
		}).then(removePrerender());
	}
})
$('.brilliance').click(function() {
	if(!$('#avatarUrl').val() || $('#avatarUrl').val() == '') {
		return;
	} else {
		if($('#render canvas')) { $('#render canvas').remove() };
		$('#profilePicture').css('height', '128px');
		$('#profilePicture').css('width', '128px');
		$('#profilePicture').css('background-image', 'url(' + $('#avatarUrl').val() + ')');
		$('#profilePicture').css('background-size', 'cover');
		$('#profilePicture').prepend($('<img>', {id: 'profileRender', src: brillianceBorder}));

		html2canvas(document.querySelector('#profilePicture'), {
			allowTaint: true,
			logging: false,
			taintTest: false
		}).then(canvas => {
			var canvasExists = document.getElementById('render').querySelector('canvas');
			if(canvasExists) {
				document.getElementById('render').replaceChild(canvasExists, canvas);
			} else {
				document.getElementById('render').appendChild(canvas);
			}
		}).then(removePrerender());
	}
})
function removePrerender() {
	setTimeout(function() {
		$('#profilePicture').css('height', '0');
		$('#profilePicture img').remove();
	}, 100)
}
