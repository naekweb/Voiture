
var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 15000,
});

//$( "#date" ).datepicker();
$( ".date" ).datepicker();

$.datepicker.regional['fr'] = {
    clearText: 'Effacer', 
    closeText: 'Fermer', 
    prevText: '&lt; Préc', 
    nextText: 'Suiv &gt;', 
    currentText: 'Courant', 
    monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin',
    'Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
    monthNamesShort: ['Jan','Fév','Mar','Avr','Mai','Jun',
    'Jul','Aoû','Sep','Oct','Nov','Déc'],
    weekHeader: 'Sm', 
    dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
    dayNamesShort: ['Dim','Lun','Mar','Mer','Jeu','Ven','Sam'],
    dayNamesMin: ['Di','Lu','Ma','Me','Je','Ve','Sa'],
    dateFormat: 'dd/mm/yy',
    firstDay: 1, 
    isRTL: false
};

$.datepicker.setDefaults($.datepicker.regional['fr']);


$('#ville').on('change', function () {
   
    let valeur = $(this).val();
    alert(valeur);
});





