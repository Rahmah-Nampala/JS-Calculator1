$(document).ready(function(e) {
    $('#1,#2,#3,#4,#5,#6,#7,#8,#9,#0,#00').click(function(){
		var v = $(this).val();
		$('#answer').val($('#answer').val() + v);	
	});
	$('#C').click(function(){
		$('#answer').val('');
		$('#operation').val('');
		$('#operation').removeClass('activeAnswer');
		$('#equals').attr('onclick','');
	});
	$('#plus').click(function(e) { 
	
		if($('#answer').val() == ''){
			return false;
			$('#equals').attr('onclick','');
		}
		else if ( $('#operation').attr('class') == 'activeAnswer') {
			$('#operation').val( $('#operation').val() + $('#plus').val() );
			$('#answer').val('');
			$('#equals').attr('onclick','');
		}
		else{
			$('#operation').val( $('#operation').val() + $('#answer').val() + $('#plus').val() );
			$('#answer').val('');
			$('#equals').attr('onclick','');
		}
    });
	$('#subtract').click(function(e) { 
	
		if($('#answer').val() == ''){
			return false;	
			$('#equals').attr('onclick','');
		}
		else if ( $('#operation').attr('class') == 'activeAnswer') {
			$('#operation').val( $('#operation').val() + $('#subtract').val() );
			$('#answer').val('');
			$('#equals').attr('onclick','');
		}
		else{
			$('#operation').val( $('#operation').val() + $('#answer').val() + $('#subtract').val() );
			$('#answer').val('');
			$('#equals').attr('onclick','');
		}
    });
	$('#divide').click(function(e) { 
	
		if($('#answer').val() == ''){
			return false;	
			$('#equals').attr('onclick','');
		}
		else if ( $('#operation').attr('class') == 'activeAnswer') {
			$('#operation').val( $('#operation').val() + $('#divide').val() );
			$('#answer').val('');
			$('#equals').attr('onclick','');
		}
		else{
			$('#operation').val( $('#operation').val() + $('#answer').val() + $('#divide').val() );
			$('#answer').val('');
			$('#equals').attr('onclick','');
		}
    });
	$('#product').click(function(e) { 
	
		if($('#answer').val() == ''){
			return false;	
			$('#equals').attr('onclick','');
		}
		else if ( $('#operation').attr('class') == 'activeAnswer') {
			$('#operation').val( $('#operation').val() + $('#product').val() );
			$('#answer').val('');
			$('#equals').attr('onclick','');
		}
		else{
			$('#operation').val( $('#operation').val() + $('#answer').val() + $('#product').val() );
			$('#answer').val('');
			$('#equals').attr('onclick','');
		}
    });
    $('#or').click(function(e) { 
	
		if($('#answer').val() == ''){
			return false;	
			$('#equals').attr('onclick','');
		}
		else if ( $('#operation').attr('class') == 'activeAnswer') {
			$('#operation').val( $('#operation').val() + $('#or').val() );
			$('#answer').val('');
			$('#equals').attr('onclick','');
		}
		else{
			$('#operation').val( $('#operation').val() + $('#answer').val() + $('#or').val() );
			$('#answer').val('');
			$('#equals').attr('onclick','');
		}
    });
    $('#square').click(function(e) { 
	
		if($('#answer').val() == ''){
			return false;	
			$('#equals').attr('onclick','');
		}
		else if ( $('#operation').attr('class') == 'activeAnswer') {
			$('#operation').val( $('#operation').val() + $('#square').val() );
			$('#answer').val('');
			$('#equals').attr('onclick','');
		}
		else{
			$('#operation').val( $('#operation').val() + $('#answer').val() + $('#square').val() );
			$('#answer').val('');
			$('#equals').attr('onclick','');
		}
    });
    $('#perc').click(function(e) { 
	
		if($('#answer').val() == ''){
			return false;	
			$('#equals').attr('onclick','');
		}
		else if ( $('#operation').attr('class') == 'activeAnswer') {
			$('#operation').val( $('#operation').val() + $('#perc').val() );
			$('#answer').val('');
			$('#equals').attr('onclick','');
		}
		else{
			$('#operation').val( $('#operation').val() + $('#answer').val() + $('#perc').val() );
			$('#answer').val('');
			$('#equals').attr('onclick','');
		}
    });	
	$('#equals').click(function(){
		
		if($('#equals').attr('onclick') != 'return false'){
		
			var a = $('#answer').val();
			var b = $('#operation').val();
			var c = b.concat(a);
			$('#answer').val(eval(c));
			$('#operation').val(eval(c));
			$('#operation').addClass('activeAnswer');
			$('#equals').attr('onclick','return false');
		
		}
	});
});