'use strict';

const mysql      = require('mysql');



const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'hyfuser',
    password : 'hyfpassword',
    database : 'meetup'
  });


connection.connect((err)=>{
    if(err){
        throw err;
    }
    console.log('database connected')
});

const tableHead =[  'create table invitee (invitee_no int, invitee_name varchar(50), invited_by varchar(50))',
'create table Room (room_no int, room_name varchar(50), floor_number int)',
'create table Meeting (meeting_no int, meeting_title varchar(50), starting_time datetime, ending_time datetime, room_no int)']

tableHead.forEach(head =>{
    connection.query(`${head}`)
})


const invitees = [
    {invitee_no : 1 , invitee_name : "Ammar", invited_by : "Hanbing"},
    {invitee_no : 2 , invitee_name : "Dima", invited_by : "Hanbing"},
    {invitee_no : 3 , invitee_name : "Enwer", invited_by : "Hanbing"},
    {invitee_no : 4, invitee_name : "Hani", invited_by : "Hanbing"},
    {invitee_no : 5 , invitee_name : "Ibrahim", invited_by : "Hanbing"}
];

const rooms =[
    {room_no : 101, room_name : 'r1', floor_number : 0},
    {room_no : 102, room_name : 'r2', floor_number : 0},
    {room_no : 201, room_name : 'r3', floor_number : 1},
    {room_no : 202, room_name : 'r4', floor_number : 1},
    {room_no : 203, room_name : 'r5', floor_number : 1},
];

const meetings =[
    {meeting_no : 1, meeting_title : 'm1', starting_time : '2020-01-01 00:00:01', ending_time: '2020-01-01 00:00:02'},
    {meeting_no : 2, meeting_title : 'm2', starting_time : '2020-01-01 00:00:03', ending_time: '2020-01-01 00:00:04'},
    {meeting_no : 3, meeting_title : 'm3', starting_time : '2020-01-01 00:00:05', ending_time: '2020-01-01 00:00:06'},
    {meeting_no : 4, meeting_title : 'm4', starting_time : '2020-01-01 00:00:07', ending_time: '2020-01-01 00:00:08'},
    {meeting_no : 5, meeting_title : 'm5', starting_time : '2020-01-01 00:00:09', ending_time: '2020-01-01 00:00:10'}

];



invitees.forEach(invitee=> {
    connection.query(
        `insert into invitee values(
            ${invitee.'invitee_no'}, 
            ${invitee.'invitee_name'}, 
            ${invitee.'invited_by'})`
    )

});

rooms.forEach(room=> {
    connection.query(
        `insert into Room values(
            ${room.'room_no'}, 
            ${room.'room_name'}, 
            ${room.'floor_number'})`
    )
});
 

meetings.forEach(meeting=> {
    connection.query(
        `insert into Room values(
            ${meeting.'meeting_no'}, 
            ${meeting.'meeting_title'}, 
            ${meeting.'starting_time'}, 
            ${meeting.'meeting_no'}
    ）`)
});


connection.end();