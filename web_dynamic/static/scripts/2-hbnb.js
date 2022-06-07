document.addEventListener('DOMContentLoaded', () => {
    let checkboxes = document.querySelectorAll(".each_amenity");
    let amenitiesChecked_list = [];

    document.addEventListener("change", function() {
        checkboxes.forEach((checkbox) => {
            if (checkbox.checked) {
                amenitiesChecked_list += checkbox.getAttribute("data-name") + ", ";
            }
        });
        document.getElementById("amenities_selected").innerText = amenitiesChecked_list;
    });
});

$(document).ready(api);
function api() {
		const URL = "http://0.0.0.0:5001/api/v1/status"
		console.log(URL);
		$.get(URL, (data) => {
				console.log(data);
			if(data.status === 'OK'){
					$('#api_status').addClass('available')
			}else{
					$('#api_status').removeClass('available')
			}
	});
};