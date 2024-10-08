let zipData = [
    { zip: [94507], city: "Alamo", url: "https://alamo.doap.com" },
    { zip: [94002, 94005, 94010, 94011, 94014, 94015, 94019, 94022, 94025, 94027, 94028, 94030, 94038, 94044, 94061, 94062, 94063, 94065, 94066, 94070, 94080, 94112, 94128, 94134, 94301, 94401, 94402, 94403, 94404], city: "Burlingame", url: "https://burlingame.doap.com" },
    { zip: [94022, 94023, 94024, 94040, 94041, 94042, 94043, 94085, 94086, 94087, 94088, 94089, 94301, 94302, 94303, 94304, 94305, 94306, 94309, 94401, 94402, 94403, 94404, 95002, 95008, 95009, 95011, 95013, 95014, 95015, 95030, 95031, 95032, 95035, 95036, 95042, 95044, 95050, 95051, 95052, 95054, 95055, 95056, 95101, 95102, 95103, 95106, 95108, 95109, 95110, 95111, 95112, 95113, 95115, 95116, 95117, 95118, 95119, 95120, 95121, 95122, 95123, 95124, 95125, 95126, 95127, 95128, 95129, 95130, 95131, 95132, 95133, 95134, 95135, 95136, 95138, 95139, 95140, 95141, 95148, 95150, 95151, 95152, 95153, 95154, 95155, 95156, 95157, 95158, 95159, 95160, 95161, 95164, 95170, 95172, 95173, 95191, 95192, 95193, 95194, 95196, 95391], city: "Campbell", url: "https://campbell.doap.com" },
    { zip: [94528, 94547, 94552, 94556, 94619, 94605, 94516, 94575], city: "Concord", url: "https://concord.doap.com" },
    { zip: [94506, 94526, 94528, 94547, 94552, 94556, 94619, 94605, 94516, 94575], city: "Danville", url: "https://danville.doap.com" },
    { zip: [94568, 94552, 94586, 94517, 94536], city: "Dublin", url: "https://dublin.doap.com" },
    { zip: [94402, 94403, 94002, 94030, 94070, 94404, 94065, 94066, 94080, 94063, 94128, 94401, 94015, 94044, 94134, 94014, 94124], city: "Hillsborough", url: "https://hillsborough.doap.com" },
    { zip: [94549, 94583, 94553, 94598, 94575, 94556, 94708, 94707, 94709, 94618, 94704, 94517, 94720, 94705, 94710, 94712], city: "Lafayette", url: "https://lafayette.doap.com" },
    { zip: [94550, 94551, 94586, 94539], city: "Livermore", url: "https://livermore.doap.com" },
    { zip: [94618, 94705, 94708, 94563, 94611, 94803, 94704, 94530, 94707, 94556, 94804, 94564, 94619, 94805, 94553, 94709, 94609, 94516, 94610, 94575, 94706, 94710, 94702, 94572, 94720, 94703, 94608, 94612, 94569, 94602, 94547, 94606, 94613, 94607, 94601], city: "Orinda", url: "https://orinda.doap.com" },
    { zip: [94566, 94588], city: "Pleasanton", url: "https://pleasanton.doap.com" },
    { zip: [94512, 94513, 94565, 94509, 94514, 94531, 94548, 94561, 94571, 94511], city: "Pittsburg", url: "https://pittsburg.doap.com" },
    { zip: [94597, 94523, 94553, 94528, 94575, 94806, 94531, 94564, 94803, 94805, 94547, 94530, 94707, 94005], city: "Pleasant Hill", url: "https://pleasanthill.doap.com" },
    { zip: [94528, 94583, 94582, 94517, 94552, 94556, 94536, 94537], city: "San Ramon", url: "https://sanramon.doap.com" },
    { zip: [94598, 94595, 94596, 94575, 94556, 94806, 94803, 94805, 94564, 94572, 94801, 94804, 94850, 94547, 94553, 94530, 94707, 94708, 94920], city: "Walnut Creek", url: "https://walnutcreek.doap.com" },
    // Add more cities here
];

function checkZip(){
    let userZip = document.getElementById('userZip').value.trim();
    let messageElement = document.getElementById('message');
    let url = '';
    
    console.log('Entered ZIP:', userZip);  // Debugging
    
    // Check if input is a valid ZIP code
    if (!/^\d{5}$/.test(userZip)) {
        messageElement.innerHTML = "Please enter a valid 5-digit ZIP code.";
        messageElement.style.color = "red";
        return;
    }

    // Convert the input zip code to an integer and check if it's in any of the zip lists
    for(let city of zipData){
        if(city.zip.includes(parseInt(userZip, 10))){
            url = city.url;
            console.log('Matching city found:', city.city);  // Debugging
            break;
        }
    }

    if(url){
        window.location.href = url;  // Redirect if a match is found
    } else {
        messageElement.innerHTML = "No agencies in that area.";
        messageElement.style.color = "red";
        console.log('No matching city found.');  // Debugging
    }
}

document.getElementById('zip-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from submitting
    checkZip();  // Call the zip code check function
});

