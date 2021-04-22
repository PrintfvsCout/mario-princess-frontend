# Mario finds princess frontend

## Frontend part of the projet

This part is built with React Bootstrap as a way to send data to the backend and get a proper
response

### Framework and modules used

- React.js
- Bootstrap React for the UI
- React Toastify for the notifications

### How to run the project

1. Type `npm install` in the project directory cmd
2. Type `npm start` to start the project

### How to play

The default starting grid is 3x3 if you want to increase the grid size the slider in the bottom can be used. The slider goes up to 50x50.

On the play page there is a grid where you can select Mario's and Princess's position by
using the drop down menu. Also if you want you can add certain obsticles for Mario to avoid

After you are satisfied with the positioning press submit and you will get a proper response from the API if a path is found, if the grid is not formatted correctly or if the path is blocked

The grid can be resetted with the reset button, or when the grid size is changed the grid resets.

After a response has been recived from the server the id, path, grid and request time can be seen in the first row in the results page
