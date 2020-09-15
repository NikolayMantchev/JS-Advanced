function solve(input) {
    let output = "";

    input.split(" ").forEach((element) => {
        if (element.startsWith("#") && element.length > 1) {
            // missin check if only charakters

            let newEl = element.substring(1);
			if(isLower(newEl) || isUpper(newEl))
            newEl.forEach((el) => el.charCodeAt(0));
            output += " " + newEl;

            console.log(newEl);
        }
    });
    input = output;
    function isLower(arg) {
        let chars = arg
            .split("")
            .filter((x) => x.charCodeAt(0) <= 97 && x.charCodeAt(0) >= 122);
        return console.log(true ? chars.length > 0 : false);
	}
	function isUpper(arg) {
        let chars = arg
            .split("")
            .filter((x) => (x.charCodeAt(0) <= 65 && x.charCodeAt(0)>= 90));
        return console.log(true ? chars.length > 0 : false);
	}
	
}
solve("Nowadays everyone uses # to tag a #spec2ial word in #socialMedia");
// 60/100
