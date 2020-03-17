import { schema } from 'normalizr';




export const profileSchema = new schema.Entity('profile');

export const userSchema = new schema.Entity(
		'user',
		{ profile: profileSchema }, 
		{ idAttribute: 'user_id'}
	);

export const user4List = new schema.Entity('user', {}, {idAttribute: 'user_id'});

export const userListSchema = [user4List];

export const commentSchema = new schema.Entity('comments',{
	user: userSchema
});

export const tagsSchema = new schema.Array('tags');

export const postSchema = new schema.Entity('post', {
	user: userSchema,
	comments: [commentSchema],
	tags: tagsSchema,
});



export const feedSchema = [postSchema];