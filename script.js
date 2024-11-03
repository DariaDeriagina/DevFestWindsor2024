// Toggle the dropdown on button click
document
	.getElementById("add-to-calendar")
	.addEventListener("click", function (e) {
		e.stopPropagation(); // Prevents click from propagating
		const dropdown = document.getElementById("calendar-dropdown");
		// Toggle dropdown visibility
		dropdown.style.display =
			dropdown.style.display === "block" ? "none" : "block";
	});
// Hide the dropdown if clicked outside
document.addEventListener("click", function (e) {
	const dropdown = document.getElementById("calendar-dropdown");
	const addToCalendarButton = document.getElementById("add-to-calendar");
	// Check if the click target is not the button or the dropdown itself
	if (!dropdown.contains(e.target) && e.target !== addToCalendarButton) {
		dropdown.style.display = "none";
	}
});

// Event details
const eventDetails = {
	title: "DevFest Windsor 2024",
	location: "Odette School of Business, Windsor, N9B 3P4",
	details: "DevFest Windsor 2024: Shaping the Future with AI and Innovation.",
	start: "20241116T080000",
	end: "20241116T170000",
};

// Google Calendar
document.getElementById(
	"google-calendar-link"
).href = `https://www.google.com/calendar/render?action=TEMPLATE&text=${eventDetails.title}&dates=${eventDetails.start}/${eventDetails.end}&details=${eventDetails.details}&location=${eventDetails.location}`;

// Office 365
document.getElementById(
	"office365-calendar-link"
).href = `https://outlook.office.com/owa/?path=/calendar/action/compose&rru=addevent&subject=${eventDetails.title}&body=${eventDetails.details}&location=${eventDetails.location}&startdt=${eventDetails.start}&enddt=${eventDetails.end}`;

// Outlook.com
document.getElementById(
	"outlook-calendar-link"
).href = `https://outlook.live.com/calendar/0/deeplink/compose?subject=${eventDetails.title}&body=${eventDetails.details}&location=${eventDetails.location}&startdt=${eventDetails.start}&enddt=${eventDetails.end}`;

// Apple Calendar (ICS file)
document.getElementById(
	"apple-calendar-link"
).href = `data:text/calendar;charset=utf8,BEGIN:VCALENDAR%0D%0AVERSION:2.0%0D%0ABEGIN:VEVENT%0D%0ASUMMARY:${eventDetails.title}%0D%0ADESCRIPTION:${eventDetails.details}%0D%0ALOCATION:${eventDetails.location}%0D%0ADTSTART:${eventDetails.start}%0D%0ADTEND:${eventDetails.end}%0D%0AEND:VEVENT%0D%0AEND:VCALENDAR`;
