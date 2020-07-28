export default class concepto {

	constructor({ file=this.throwIfMissing('file'), config }={}) {
		let def_config = {
			cancelled:false,
			debug:true
		};
		this.file = file;
		this.config = {...config, ...def_config};
	}

	// ********************
	// private methods
	// ********************

	throwIfMissing(name) {
        throw new Error('Missing '+name+' parameter!');
    }

    /**
	* findVariables finds variables within given text
	* @param 	{String}	text 			String from where to parse variables
	* @param 	{Boolean}	symbol 			Wrapper symbol used as variable openning definition. (default:**)
	* @param 	{Boolean}	symbol_closing 	Wrapper symbol used as variable closing definition. (default:**)
	* @return 	{String}
	*/
    findVariables({ text=this.throwIfMissing('text'),symbol='**',symbol_closing='**', array=false }={}) {
		const escapseRegExp = function(str) {
		    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
		}		
		let extractorPattern = new RegExp(escapseRegExp(symbol) + '(.*?)' + escapseRegExp(symbol_closing), 'g');
		let resp=[];
		let nadamas = false;
		while(!nadamas) {
			let test = new RegExp(extractorPattern,'gim');
			let utiles = text.match(test);
			for (let i in utiles) {
				resp.push(utiles[i].split(symbol).join('').split(symbol_closing).join(''));
			}
			nadamas = true;
		}
		return (array)?resp:resp.join(',');
	}

}
