$('document').ready(function()
 {
  if($('.categorievo').size() > 1)
    {
 $('#conteneur_ongletsvo').css( 'display' , 'block' );
 $('#conteneur_ongletsvo .ongletvo').click(function()
 {
 change_categorie( $('.ongletvo', '#conteneur_ongletsvo').index( this ) )
 });
 
 $('.ongletvo:eq(0)').click();
}
 });

 function change_categorie( index )
 {
 if( $('.categorievo:eq(' + index + ')').size() != 0 )
 {

 $('.categorievo').css( 'display' , 'none' );
 $('.categorievo:eq(' + index + ')').fadeIn( 500 );
 
 $('.ongletvo.actif').removeClass('actif');
 $('.ongletvo:eq('+ index +')').addClass('actif');
 }
 else alert('Vous ne pouvez pas accéder à cette catégorie');
 }
