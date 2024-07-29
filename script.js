document.getElementById('student-login').addEventListener('submit', function(event) {
    event.preventDefault();
    const studentId = document.getElementById('student-id').value;
    const password = document.getElementById('password').value;

    // Simulate student data
    const students = {
        '123': {
            password: 'abc1',
            report: 'Math: A, Science: B, English: A'
        },
        '456': {
            password: 'abc2',
            report: 'Math: B, Science: B, English: B'
        },
        '678': {
            password: 'abc3',
            report: 'Math: A, Science: B, English: C'
        },
        '8910': {
            password: 'abc4',
            report: 'Math: A, Science: A, English: A'
        },
        '1112': {
            password: 'abc5',
            report: 'Math: C, Science: C, English: C'
        },
        '1213': {
                password: 'abc6',
                report: 'Math: B, Science: C, English: B'
            },
        '1314': {
                password: 'abc7',
                report: 'Math: A, Science: D, English: D'
            },
        '1415': {
                password: 'abc8',
                report: 'Math: A, Science: A, English: A'
            },
        
        '1415': {
                password: 'abc9',
                report: 'Math: C, Science: B, English: C'
            },
        '1516': {
                password: 'abc10',
                report: 'Math: A, Science: A, English: C'
            },
    };


    if (students[studentId] && students[studentId].password === password) {
        document.getElementById('result').innerText = `Report Card: ${students[studentId].report}`;
    } else {
        document.getElementById('result').innerText = 'Invalid Student ID or Password';
    }
});
