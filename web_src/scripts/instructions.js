$(document).ready(function(e){
	bind();
	checkLocalStorage();
	$('.osSelect').trigger('change');
	checkLocalStorageArch();
	getUrlParams();
});

function bind(){
	$('.osSelect').change(function(e){
		localStorage.setItem('prevOs', $(this).val());
		
		var selected = $(this).val();
		$('.hideItem').removeClass('hide').addClass('hide');
		
		$('.osVersionSelect').html('');
		
		if(selected == "ubuntu"){
			$('.osVersionSelect').html('').html('<option value="">&nbsp; &nbsp; &nbsp; &nbsp; </option><option value="ubuntu14">14.04</option><option value="ubuntu16">16.04</option><option value="ubuntu18">18.04</option><option value="ubuntu20">20.04</option><option value="ubuntu22">22.04</option>');
		}else if(selected == "debian"){
			$('.osVersionSelect').html('').html('<option value="">&nbsp; &nbsp; &nbsp; &nbsp; </option><option value="debian8">8</option><option value="debian9">9</option><option value="debian10">10</option><option value="debian11">11</option><option value="debian12">12</option>');
		}else if(selected == "rocky"){
			$('.osVersionSelect').html('').html('<option value="">&nbsp; &nbsp; &nbsp; &nbsp; </option><option value="rocky9">9</option>');
		}else if(selected == "redhat"){
			$('.osVersionSelect').html('').html('<option value="">&nbsp; &nbsp; &nbsp; &nbsp; </option><option value="redhat9">9</option>');
		}else if(selected == "centos"){
			$('.osVersionSelect').html('').html('<option value="">&nbsp; &nbsp; &nbsp; &nbsp; </option><option value="centos6">6</option><option value="centos7">7</option><option value="centos8">8</option>');
		}else if(selected == "windows"){
			$('.osVersionSelect').html('').html('<option value="">&nbsp; &nbsp; &nbsp; &nbsp; </option><option value="win64">64-Bit (x64)</option><option value="win32">32-Bit (x86)</option>');
		}
		
		$('.noHideOsVersion').removeClass('hide');
	
	});
	
	$('.osVersionSelect').change(function(e){
		localStorage.setItem('prevArch', $(this).val());
		
		var selected = $(this).val();
		$('.hideItem').not('.noHideOsVersion').removeClass('hide').addClass('hide');
		if(selected){
			$('.osVersionRemoveHide').removeClass('hide');
			$('.' + selected).removeClass('hide');
			$('.selectedOSItem .osText').text($('.osSelect option:selected').text() + " " + $('.osVersionSelect option:selected').text());
		}
	});
}

$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
       return null;
    }
    else{
       return decodeURI(results[1]) || 0;
    }
};

function getUrlParams(){
	var showall = $.urlParam('all');
	if(showall){
		$('.hideItem').removeClass('hide');
	}else{
		var os = $.urlParam('os');
		if(os){
			$('.osSelect').val(os);
		}
		$('.osSelect').trigger('change');
		checkLocalStorageArch();
	}
}

function checkLocalStorage(){
	var prevOS = localStorage.getItem('prevOs');
	
	if(prevOS){
		$('.osSelect').val(prevOS).trigger('change');
		checkLocalStorageArch();
	}else{
		if(!$('.osSelect').val()){
			$('.osSelect').val('ubuntu').trigger('change');
			checkLocalStorageArch();
		}
	}
	
	
}

function checkLocalStorageArch(){
	var prevArch = localStorage.getItem('prevArch');
	if(prevArch){
		$('.osVersionSelect').val(prevArch).trigger('change');
	}
}
