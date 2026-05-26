const axios = require('axios');

var data= {
    name: 'TEJ',
    gender: 'Female',
    email: 'jhj4@email.com',
    status: 'active'
};
console.log(data)
const options = {
    headers: 
        // Replace YOUR_API_TOKEN with your token from https://gorest.co.in
        {'authorization': 'Bearer YOUR_API_TOKEN'}
    
};


axios.post('https://gorest.co.in/public/v1/users', data, options)
    .then((res) => {
      //  console.log('success');
        console.log(`Status: ${res.status}`);
        console.log('Body: ', res.data);
    }).catch((err) => {
        //console.log('error');
        console.error(err);
    });
