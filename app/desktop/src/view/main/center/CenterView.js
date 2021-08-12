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
		}],
		buttons: [
			{
				text: 'Submit',
				handler: function() {
					var form = this.up('form'); // get the form panel
					//if (form.isValid()) { // make sure the form contains valid data before submitting
						form.submit({
							success: function(form, action) {
  //Test
							   Ext.Msg.alert('Success', action.result.msg);
							},
							failure: function(form, action) {
								Ext.Msg.alert('Failed', action.result.msg);
							}
						});
					//} else { // display error alert if the data is invalid
					//	Ext.Msg.alert('Invalid Data', 'Please correct form errors.')
					}
				//}
			}
		]
	}]
});
