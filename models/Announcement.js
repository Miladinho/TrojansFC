var keystone = require('keystone');
var Types = keystone.Field.Types;

var Announcement = new keystone.List('Announcement', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

Announcement.add({
	title: { type: String, required: true },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	author: { type: Types.Relationship, ref: 'User', index: true },
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
	content: {type: Types.Html, wysiwyg: false, height: 50 }
});

Announcement.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
Announcement.register();