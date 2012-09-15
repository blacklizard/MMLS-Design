$(document).ready(function(){   
  
	$('form[name="frmLogin"]').attr('id','loginForm');
	$('td').removeAttr('width');
	$('hr').attr('id','this-hr');


	 
	var lenght = $('form[name="frmLogin"] table:first').find('tr:eq(2)').find('td:eq(1)').find('table:first').find('tr:eq(2)').find('td:eq(1)').find('p').nextAll().length;
	var data = $('form[name="frmLogin"] table:first').find('tr:eq(2)').find('td:eq(1)').find('table:first').find('tr:eq(2)').find('td:eq(1)').find('p').nextAll();

	var hst = $('input[name="hst"]').val();
	var key = $('input[name="key"]').val();

	var newData = '';
	var newChildData;
	var nextIsTitle,nextIsNew = false;

	for (i=0; i<lenght; i++)
	{
		if(i==0){
			
				newData+='<div class="announcement-container"><div class="announcement-title">';
				newData+=$('form[name="frmLogin"] table:first').find('tr:eq(2)').find('td:eq(1)').find('table:first').find('tr:eq(2)').find('td:eq(1)').find('p')[0].outerText;
				newData+='<div class="icon"></div></div><div class="announcement-data">';
		}
		if(data[i].tagName == 'P' ){

			
			if((nextIsTitle == true)&&(nextIsNew == true)){
				newData+='<div class="announcement-container"><div class="announcement-title">';
				newData+=data[i].outerText;
				if(data[i].outerText){
					var datastring = data[i].outerText;
					// if(datastring.length>96){
						// newData+=datastring.substring(0,96);
						// console.log(datastring.substring(0,96));
					// }
					//else{
						newData+=datastring;
					//}
				}
				else{
					newData+='Announcement';
				}
				newData+='<div class="icon"></div></div><div class="announcement-data">';
				nextIsTitle = false;
				nextIsNew = false;
			}
			newData+=data[i].outerText;
			newData+='<br><br>';
		}
		else if(data[i].tagName == 'HR' ){
			newData+='</div></div>';
			nextIsTitle = true;
			nextIsNew = true;
		}
	}

	$('body').empty().append('<div class="container_12 main-container">'+

	'<div class="grid_12" id="main_header">'+
		'<div id="logo"></div>'+
		'<div id="header">MULTIMEDIA LEARNING SYSTEM</div>'+
	'</div>'+
  '<div class="clear"></div>'+
  
	'<div class="grid_7 announcement">'+
		'<div id="annon-header">ANNOUNCEMENT</div>'+

	'</div>'+
	'<div class="grid_5">'+
		'<div class="sign-in">'+
			'<div class="signin-box">'+
					'<form id="gaia_loginform" name="frmLogin" method="post">'+
						'<input type="hidden" name="hst" value="null" id="hst-key">'+
						'<input type="hidden" name="key" value="null" id="key-key">'+
					'<div>'+
						'<label for="Email"><strong class="email-label">ID</strong></label>'+
						'<input type="text" spellcheck="false" name="txtUserID" id="Email">'+
					'</div>'+
					'<div>'+
						'<label for="Passwd"><strong class="passwd-label">Password</strong></label>'+
						'<input type="password" name="txtPassword" id="Passwd" size="21" maxlength="15">'+
					'</div>'+
					
					'<input type="submit" class="g-button g-button-submit" name="Submit" id="signIn" value="Login" onclick="BeforeSubmit()">'+
				'</form>'+
			'</div>'+
		'</div>'+
  '</div>'+
  '<div class="clear"></div>'+

'</div><div id="footer"><p class="copyright">Copyright &copy; 2012 blacklizard, All Rights Reserved</p></div>').css('display','block');  


  
  
	$('.announcement').append(newData);
	
$('.announcement-title').each(function(index) {

	
	
	//$(this).text($(this).text().substring(0,100));
	
});

	$('#hst-key').attr('value',hst);
	$('#key-key').attr('value',key);

	$('.announcement-title').click(function () {


		if($(this).is('.active') ) {
			$('.announcement-data:animated').stop(true, true);
			$(this).next().slideUp('fast');
			$(this).removeClass('active');
			$(this).parent().find('.icon').css('background-image','url('+chrome.extension.getURL('001.png')+')');
		}
		else{
			$('.announcement-data:animated').stop(true, true);
			$('.announcement').find('.active').parent().find('.icon').css('background-image','url('+chrome.extension.getURL('001.png')+')');
			$('.announcement').find('.active').removeClass('active').next().slideUp('fast');
			$(this).addClass('active');
			$(this).next().slideDown('fast');
			console.log($(this).find('.icon').css('background-image','url('+chrome.extension.getURL('002.png')+')'));
			
			
		}

	});
	
});