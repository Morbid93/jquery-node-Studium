$(document).ready(function() {
	$('#submit').click(function() {
		var name = $('#name').val();
		if (name) {
			$('.ausgabe strong').text(name);
		} else {
			$('.ausgabe strong').text('Unbekannter');
		}
	});
});

/* Aufklappen und Einklappen der Informationen */
$(document).ready(function() {
    $('.toggle').click(function() {
        $(this).next('.erklaerung').slideToggle('fast');
    });

    $('#submit').click(function() {
        var name = $('#name').val();
        if (name) {
            $('.ausgabe strong').text(name);
        } else {
            $('.ausgabe strong').text('Unbekannter');
        }
    });
});
