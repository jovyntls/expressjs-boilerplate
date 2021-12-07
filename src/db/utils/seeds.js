export const seedMembers = `
INSERT INTO members(name, email, telegram_handle)
VALUES ('John Smith', 'johnsmith@mail.com', 'john_smith'),
      ('Jane Doe', 'jane.doe@school.edu.sg', 'jane'),
      ('Tan Xiao Ming', 'txm@gmail.com', 'txm123'),
      ('Alice', 'alice.999@email.com', 'alice'),
      ('Bob', 'bob123@mail.com', 'bob')
`;

export const seedMeetings = `
INSERT INTO meetings(name, datetime)
VALUES ('SD Dept Meeting', '2021-10-19 10:00:00'),
      ('Society Monthly Meeting', '2021-10-1 13:45:16'),
      ('Society Monthly Meeting', '2021-11-1 13:00:00'),
      ('Society Monthly Meeting', '2021-12-1 12:34:00'),
      ('Important thing', '2021-10-30 19:30:00')
`;

export const seedMeetingAttendances = `
INSERT INTO meeting_attendances(meeting_id, member_id)
VALUES (1, 1),
      (1, 2),
      (1, 3),
      (2, 1),
      (2, 2), 
      (2, 5),
      (3, 1),
      (3, 2),
      (4, 1)
`;
