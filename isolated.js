if (window == top) {
	const links = document.getElementsByTagName('a');
	for (var i=0; i<links.length; i++) {
		const href = links[i].href;
		const pos = href.indexOf('/title/tt');
		if (pos < 0) continue;
		
		var pos2 = href.indexOf('/', pos + 9);
		if (pos2 < 0)
			pos2 = href.length;
		else if (pos2 < href.length-1 && href[pos2+1] != '?')
			continue;
		
		const title = href.substring(pos + 7, pos2);
		if (!(title in imdbWords))
			continue;
		
		if (links[i].getElementsByTagName('img').length > 0)
			continue;
		
		const words = imdbWords[title];
		
		const html = '<span style="font-weight:normal; font-style: italic">&nbsp;(' + (words*0.001).toFixed(1) + 'k)<span>';
		links[i].insertAdjacentHTML('beforeend', html);
	}
}
