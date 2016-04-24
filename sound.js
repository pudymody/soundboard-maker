function Sound( data ){
	this.data = data;
	this._buildDOM();
}

Sound.prototype = {
	data : {},
	$ : {},

	_buildDOM : function(){

		var inputOuter = document.createElement('div');
			inputOuter.className = "mdl-cell mdl-cell--12-col mdl-textfield mdl-js-textfield";

		var name = document.createElement('input');
			name.type = 'text';
			name.className = "mdl-textfield__input";
			name.placeholder = 'Name of the sound';
			name.required = true;
			name.addEventListener('blur', function(evt){
				this.data.name = evt.target.value;
			}.bind(this));

		var nameOuter = inputOuter.cloneNode();
			nameOuter.appendChild(name);

		var category = document.createElement('input');
			category.type = 'text';
			category.className = "mdl-textfield__input";
			category.placeholder = 'Category of the sound';
			category.required = true;
			category.addEventListener('blur', function(evt){
				this.data.category = evt.target.value;
			}.bind(this));

		var categoryOuter = inputOuter.cloneNode();
			categoryOuter.appendChild(category);

		var title = document.createElement('span');
			title.className = 'mdl-cell mdl-cell--12-col';
			title.innerText = this.data.file;

		var wrapper = document.createElement('li');
			wrapper.className = 'mdl-list__item mdl-grid';
			wrapper.appendChild(title);
			wrapper.appendChild(nameOuter);
			wrapper.appendChild(categoryOuter);

		this.$.name = name;
		this.$.category = category;
		this.$.wrapper = wrapper;
	},

	getDOMNode : function(){
		return this.$.wrapper;
	},

	getJSON : function(){
		return this.data;
	}
};
