//Sample api test scripts in Postman for assertion


//Check if response body contains a string:

tests["Body matches string"] = responseBody.has("string_you_want_to_search");


//check status code

tests[“Status code is 200”] = responseCode.code ===200;


//Check if response body is equal to a particular string:

tests["Body is correct"] = responseBody === "response_body_string";


//Check for a JSON value:

var data = JSON.parse(responseBody);
tests["Your test name"] = data.value === 100;

//Check for Response time is less than 200ms:

tests["Response time is less than 200ms"] = responseTime < 200;
//Check for Successful POST request status code:

tests["Successful POST request"] = responseCode.code === 201 || responseCode.code === 202;
//Check for Response header content type:

tests[‘The Content-Type is JSON’] = postman.getResponseHeader(‘Content-Type’) === ‘application/json’;


Check for Response header content type:

it(‘should return JSON’, () => {
 response.should.be.json;
 response.should.have.header(‘Content-Type’, ‘application/json’);
 response.type.should.equal(‘application/json’);
});
Check for Status code is 200:

it(‘should be a 200 response’, () => {
 response.should.have.status(200);                                });
Check for Response time is less than 200ms:

it(‘should respond in a timely manner’, () => {
 response.time.should.be.below(200);
});
Check for Response body message should be ‘User logged in successfully.’:

it(‘message should contain’, () => {
response.body.message.should.equal(‘User logged in successfully.’) ;
});






