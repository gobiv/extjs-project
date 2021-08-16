Ext.define('MyAppDay2.view.main.center.CenterView', {
	extend: 'Ext.Container',
	xtype: 'centerview',
	cls: 'centerview',
	layout: 'card',
	items: [{

		xtype: 'panel',
		fullscreen : 'true',
		//layout : 'vbox',
		default:{
			flex:1
		},
		items: [{
			html : 'User Form Gobi',
			style: 'background-color:white'
		} , {
			xtype: 'textfield',
			name : 'firstName',
			label: 'First Name'
		},
		{
			xtype: 'textfield',
			name : 'lastName',
			label: 'Last Name'
		},
		{
			xtype:'datefield',
			label:'Date OF Joining',
			value : new Date()
		},
		{
			xtype:'button',
			title: 'Submit',
			text :'Save',
			handler:function (){
				console.log('button Clicked');
				Ext.Ajax.request({
					url:'http://localhost:3000/posts',
					method: 'POST',
					jsonData: {
						id:20
						
					} ,
					success:function(response ){
						Ext.Msg.alert('success');
					},
					failure:function(response){
						Ext.Msg.alert('failure');
					}
				})
			}
		}
	
	]
		
	}]
});
