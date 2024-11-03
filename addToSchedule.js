function addToSchedule(title, speaker, startTime, endTime, location) {
	// Format the date and time for Google Calendar (YYYYMMDDTHHMMSSZ)
	const startDate =
		new Date(startTime).toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
	const endDate =
		new Date(endTime).toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

	// Construct the Google Calendar URL
	const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
		title + " by " + speaker
	)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(
		"Join us for " +
			title +
			" with " +
			speaker +
			" on November 16, 2024 in " +
			location +
			"."
	)}&location=${encodeURIComponent(location)}`;

	// Open the link in a new tab
	window.open(googleCalendarUrl, "_blank");
}
