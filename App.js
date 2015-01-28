Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',

    launch: function() {
    	console.log('Our first app woot!');
    	this._loadData();
    },

    // Load data from Rally     
    _loadData: function() {
    
        var myStore = Ext.create('Rally.data.wsapi.Store', {
    		model: 'User Story',
    		autoLoad: true,
    		listeners: {
      		  load: function(myStore, myData, success) {
        		    //process data
        		    console.log('Got data!', myStore, myData, success);
        		    this._loadGrid(myStore);
     		   },
     		   scope: this
  		  	},
    		fetch: ['FormattedID', 'Name', 'ScheduleState', 'Owner']
		});
   
    },

	//Crete and show grid   
    _loadGrid: function(myStoryStore) {
    
    	var myGrid = Ext.create('Rally.ui.grid.Grid', {
           	store: myStoryStore,
           	columnCfgs: [
           		'FormattedID', 'Name', 'ScheduleState', 'Owner'
           	],
        });
        
        this.add(myGrid);
        console.log('What is this?', this);

    
    }

});
