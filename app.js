//Comment Class
class Comment {
    constructor(name, comment) {
        this.name = name;
        this.comment = comment;
    }
}

//UI Class
class UI {
    static displayComments() {
        const storedComments = [
            {
                name: "Kadyr",
                comment: "This comment was manually added for testing!"
            }
        ];

        const comments = storedComments;

        comments.forEach((comment) => UI.addCommentToList(comment));
    }
    static addCommentToList(comment) {
        const list = document.querySelector('#comment-list');

        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${comment.name}</td>
            <td>${comment.comment}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>`;

        list.appendChild(row);
    }
    static deleteComment(el) {
        if (el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }
    }

    // static showAlert(message, className){
    //     const div = document.createElement('div');
    //     div.className = `alert alert-${className}`;
    //     div.appendChild(document.createTextNode(message));

    //     const container = document.querySelector('.container-fluid');
    //     const form = document.querySelector('#comment-form');
    //     container.insertBefore(div,form);
    // }

    static clearFields() {
        document.querySelector('#name').value = '';
        document.querySelector('#comment').value = '';
    }
}

//Display Comments
document.addEventListener('DOMContentLoaded', UI.displayComments);

//Add Comment
document.querySelector('#comment-form').addEventListener('submit', (e) => {

    e.preventDefault();

    const name = document.querySelector('#name').value;
    const comment_ = document.querySelector('#comment').value;

    //Validate
    if (name === '' || comment_ === '') {
        alert('Please fill in all fields!');
    } else {
        // Instatiate comment
        const comment = new Comment(name, comment_);

        //Add comment to UI
        UI.addCommentToList(comment);

        //Clear fields
        UI.clearFields();
    }

});

//Remove Comment
document.querySelector('#comment-list').addEventListener('click', (e) => {

    UI.deleteComment(e.target)
});