'use strict';

let user = {
	id:5,
	name:"Semm",
	mail:"semm1998@mail.ru",
	pass:"qwer",
	isAuthorised:false,
	print:function printAll() {
		console.log("Your name: "+this.name+
			"\n mail: "+this.mail+
			"\n password: "+this.pass+
			"\nAutorised : "+this.isAuthorised);
	}
};
console.log("information");
user.print();

let post = {
	id:1,
	title:"Japan",
	description:"I live in Japan",
	userId:5, 
	isLiked: false,
	print:function printAll() {
		console.log("Title: "+this.title+
			"\nDescription: "+this.description+
			"\nLiked : "+this.isLiked);
	}
};
console.log("Post");
post.print();

let comment = {
	id:1,
	userId:8,
	postId:3,
	text:"Great",
	print:function printAll() {
		console.log("Text: "+this.text);
	}
}
console.log("Comment");
comment.print();

let posts = [];

function addPost(a){
	posts.push(a);
}

addPost(post);

console.log(posts);

function authoriz(a){
	a.isAuthorised = true;
}

authoriz(user);

user.print

addPost({
	id:2,
	title:"Koree",
	description:"I live in Koree",
	userId:5,
	isLiked: true,
	print:function printAll() {
		console.log("Title: "+this.title+
			"\nDescription: "+this.description+
			"\nLiked: "+this.isLiked);
	}
});

console.log(posts);

function like(postId){
	for (let i = 0; i < posts.length; i++) {
        if (posts[i].id === postId) {
            if (posts[i].isLiked) {
                posts[i].isLiked = false;
            } else {
                posts[i].isLiked = true;
            }
        }
    }
}

like(1);

console.log(posts);