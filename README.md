# IMDb-wiki-size

A browser extension that shows Wikipedia article size in words next to IMDb movie titles.

Tested in Chrome 84. Database of movies (as of August 2020, a 250KB js array that includes
years 1970 - 2019) is embedded in the extension and no network requests are made.

### Install in Chrome
  - copy everything to a local dir
  - go to chrome://extensions
    - enable "Developer mode"
    - click "Load unpacked extension" at the top.

### Install in Firefox
  - copy everything to a local dir
  - overwrite manifest_for_firefox.json over manifest.json
  - go to about:debugging
    - enable "Add-on debugging"
    - click "Load temporary add-on"
