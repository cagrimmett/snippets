This is a collection of snippets from various projects that don't have another home.

## Index
- jQuery UI Accordion - `/jquery-ui-accordion`
	- Using jQuery UI Accordion to collapse non-active menu items on the [Praxis Portal](http://portal.discoverpraxis.com). Includes logic to figure out which menu section is active.
- Setting and using cookies - `/cookies`
	- JS snippets to set and consume cookies on the Praxis site in-between application forms. We are no longer using this, but it worked well when we did use it.
	- `start_app_grab.js` grabbed the contents of the form fields and saved them to a cookie for 30 days.
	- `replace-buttons.js` swapped out all calls to action on the home page if someone filled out the first step of the app but not the second step.
	- `complete_app_fill.js` checked for a cookie when you went to the second application form and pre-filled in your info from the first form. Then deleted the cookie if you submitted the form.
- Scraping email addresses - `/scraping`
	- `extract_emails_to_text.py` - A Python script that extracts emails from a text file. I copy out a bunch of webpages to a text file, no formatting necessary, and then pass the text file to this script. It uses regex to spit out email addresses from the page. I didn't write this script, but I have modified it. I've had it for at least 6 years and I have no idea where I found it.
- Text Analysis - `/text-analysis`
	- `ngrams.py` takes text, analyses it, and returns the most frequent bigrams, trigrams, and four-grams. Originally written by [Ben Hoyt](https://gist.github.com/benhoyt/dfafeab26d7c02a52ed17b6229f0cb52).
- WordPress - `/WordPress`
	- `Find-Replace-WordPress-Snippet.sql` - SQL query to replace post content text on WordPress sites. I use this a lot to replace local URLs with live site URLs after moving the database.
	- `rcp_expiration_dates.sql` - SQL queries to bulk clear expiration dates in the Restrict Content Pro plugin. [Write up here.](http://www.cagrimmett.com/til/2017/12/04/restrict-content-pro-clear-expiration.html)
